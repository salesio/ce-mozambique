/**
 * Public giving → Supabase (with localStorage queue fallback).
 * Loads @supabase/supabase-js from CDN when configured via window.__CE_ENV__.
 */
(function () {
  const PENDING = "Pendente de Verificação";
  const BUCKET = "payment-proofs";
  let client = null;

  function config() {
    const env = window.__CE_ENV__ || {};
    const url = String(env.VITE_SUPABASE_URL || "").trim();
    const anonKey = String(env.VITE_SUPABASE_ANON_KEY || "").trim();
    return { url, anonKey, isConfigured: Boolean(url && anonKey) };
  }

  function getClient() {
    const { url, anonKey, isConfigured } = config();
    if (!isConfigured || !window.supabase?.createClient) return null;
    if (!client) client = window.supabase.createClient(url, anonKey);
    return client;
  }

  function splitFullName(fullName) {
    const parts = String(fullName || "").trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return { nome: "", apelido: "" };
    if (parts.length === 1) return { nome: parts[0], apelido: "" };
    return { nome: parts[0], apelido: parts.slice(1).join(" ") };
  }

  function sanitizeFileName(name) {
    return String(name || "proof").replace(/[^a-zA-Z0-9._-]/g, "_");
  }

  async function uploadProof(file, groupId) {
    const supabase = getClient();
    if (!supabase || !file) return { path: "", publicUrl: "" };
    const path = `${groupId}/${Date.now()}-${sanitizeFileName(file.name)}`;
    const { error } = await supabase.storage.from(BUCKET).upload(path, file, {
      cacheControl: "3600",
      upsert: false,
      contentType: file.type || undefined
    });
    if (error) throw error;
    const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
    return { path, publicUrl: data.publicUrl };
  }

  function buildFinanceRows(submission, proofPath, proofUrl) {
    const { nome, apelido } = splitFullName(submission.nome_completo);
    const now = submission.created_at || new Date().toISOString();
    const today = now.slice(0, 10);
    return (submission.contribuicoes || [])
      .filter((line) => Number(line.valor) > 0)
      .map((line) => ({
        submission_group_id: submission.submission_group_id,
        public_submission_id: submission.id,
        church_id: submission.igreja_id,
        nome,
        apelido,
        telefone: submission.telefone,
        whatsapp: submission.telefone,
        email: submission.email || null,
        celula: submission.celula || null,
        grupo_de_celula: submission.grupo_de_celula || null,
        cell_id: submission.cell_id || null,
        cell_name: submission.cell_name || submission.celula || null,
        cell_group_id: submission.cell_group_id || null,
        cell_group_name: submission.cell_group_name || submission.grupo_de_celula || null,
        data_de_aniversario: submission.data_de_aniversario || null,
        categoria_da_contribuicao: line.categoria,
        outros_descricao: line.categoria === "Outros" ? submission.outros_descricao || null : null,
        valor: Number(line.valor),
        metodo_de_pagamento: submission.metodo_de_pagamento,
        referencia_da_transaccao: submission.referencia_da_transaccao || null,
        data: submission.data_da_transferencia || today,
        data_da_transferencia: submission.data_da_transferencia || today,
        comprovativo_path: proofPath || null,
        comprovativo_url: proofUrl || null,
        mensagem_transferencia: submission.mensagem_transferencia || null,
        observacoes: submission.observacoes || null,
        estado: PENDING,
        source: "public_website",
        source_type: "public_website",
        recebido_por: "Sistema / Formulário Público",
        created_at: now,
        created_by: "Sistema / Formulário Público",
        updated_at: today,
        updated_by: "Sistema / Formulário Público"
      }));
  }

  async function submitPublicGivingViaSupabase(submission, proofFile) {
    const supabase = getClient();
    if (!supabase) return { ok: false, skipped: true };

    const groupId = submission.submission_group_id || `sg-${Date.now()}`;
    const submissionId = submission.id || crypto.randomUUID();
    const now = submission.created_at || new Date().toISOString();

    let proofPath = "";
    let proofUrl = "";
    if (proofFile) {
      const uploaded = await uploadProof(proofFile, groupId);
      proofPath = uploaded.path;
      proofUrl = uploaded.publicUrl;
    }

    const submissionRow = {
      id: submissionId,
      submission_group_id: groupId,
      nome_completo: submission.nome_completo,
      data_de_aniversario: submission.data_de_aniversario || null,
      telefone: submission.telefone,
      email: submission.email || null,
      igreja_id: submission.igreja_id,
      igreja_nome: submission.igreja_nome || null,
      grupo_de_celula: submission.grupo_de_celula || null,
      celula: submission.celula || null,
      cell_group_id: submission.cell_group_id || null,
      cell_group_name: submission.cell_group_name || submission.grupo_de_celula || null,
      cell_id: submission.cell_id || null,
      cell_name: submission.cell_name || submission.celula || null,
      contribuicoes: submission.contribuicoes,
      outros_descricao: submission.outros_descricao || null,
      metodo_de_pagamento: submission.metodo_de_pagamento,
      referencia_da_transaccao: submission.referencia_da_transaccao || null,
      data_da_transferencia: submission.data_da_transferencia,
      comprovativo_path: proofPath || null,
      comprovativo_url: proofUrl || null,
      mensagem_transferencia: submission.mensagem_transferencia || null,
      observacoes: submission.observacoes || null,
      total_geral: Number(submission.total_geral || 0),
      source: "public_website",
      status: PENDING,
      created_at: now
    };

    const financeRows = buildFinanceRows(
      { ...submission, id: submissionId, submission_group_id: groupId, created_at: now },
      proofPath,
      proofUrl
    );

    const { error: submissionError } = await supabase.from("public_giving_submissions").insert(submissionRow);
    if (submissionError) throw submissionError;

    const { error: financeError } = await supabase.from("finance_records").insert(financeRows);
    if (financeError) throw financeError;

    return { ok: true, submission: submissionRow, financeCount: financeRows.length };
  }

  window.CESupabaseGiving = {
    isConfigured: () => config().isConfigured,
    submitPublicGivingViaSupabase
  };
  window.submitPublicGivingViaSupabase = submitPublicGivingViaSupabase;
})();
