/**
 * Public giving form → dashboard finance bridge (frontend-first).
 * Queue key is shared with ce-mozambique-dashboard/js/public-giving-bridge.js
 */
const PUBLIC_GIVING_QUEUE_KEY = "ce-public-giving-queue";
const DASHBOARD_STORAGE_KEY = "ce-ops-dashboard-v3";

const PUBLIC_GIVING_CATEGORIES = [
  "Dízimo",
  "Construtores de Visão",
  "Rapsódia de Realidades",
  "Loveworld SAT",
  "Missões de Cidades do Interior",
  "Escola de Cura",
  "Mandato de Célula",
  "Rapsódias das Crianças",
  "Projectos Locais",
  "Outros"
];

const PUBLIC_PAYMENT_METHODS = ["M-Pesa", "E-Mola", "Banco", "Dinheiro", "Outro"];

const DEFAULT_PUBLIC_CHURCHES = [
  { id: "church-hq", name: "National HQ - Christ Embassy Mozambique", public_name: "Igreja Embaixada de Cristo Maputo" },
  { id: "church-matola", name: "Igreja Embaixada de Cristo Matola", public_name: "Embaixada de Cristo Matola" },
  { id: "church-khongolote", name: "Igreja Embaixada de Cristo Khongolote", public_name: "Embaixada de Cristo Khongolote" },
  { id: "church-choupal", name: "Igreja Embaixada de Cristo Choupal", public_name: "Embaixada de Cristo Choupal" },
  { id: "church-beira", name: "Igreja Embaixada de Cristo Beira", public_name: "Igreja Embaixada de Cristo Beira" },
  { id: "church-nampula", name: "Igreja Embaixada de Cristo Nampula", public_name: "Embaixada De Cristo Nampula" },
  { id: "church-virtual", name: "CE Mozambique Online Church", public_name: "Igreja Embaixada de Cristo Online" }
];

const PUBLIC_CELL_GROUP_DEFINITIONS = [
  ["Dominio", 2], ["Visionarios", 1], ["Transformadas", 3], ["Gods CEO Main", 17], ["Diplomats Victory", 9],
  ["Wealth Nation Main", 10], ["Mulheres de Substancia Main", 10], ["Homens de Propósito", 8], ["Perola do Reino Main", 10],
  ["Queens of Glory Main", 6], ["Agathos Main", 7], ["Phronesis Business Main", 9], ["Pais de Fe", 7], ["Estrelas de Sião", 8],
  ["Vanguard Main", 7], ["Mighty Women of Valor Main", 10], ["Luzes de Sião", 5], ["Geração Eleita Main", 5],
  ["Geração Eleita Supreme", 4], ["Pioneiros Substance", 14], ["Pioneiros Charis", 4], ["Realeza Central", 17],
  ["Realeza Valentes", 4], ["Realeza Brilhante", 14], ["Realeza Geração Esperança", 7], ["Royal Sisters Main", 19],
  ["Royal Sisters Shine Main", 6], ["Royal Sisters Dominion", 6], ["Royal Sisters Excellence", 5], ["Coroa Real Main", 5],
  ["Coroa Real Rainhas de Cristo", 7], ["Blossom Main", 3], ["Blossom Perfection Main", 7], ["Blossom Diamante Main", 5],
  ["Nação Santa", 11], ["Men of Vision", 14], ["Men of Vision Giants", 4], ["Elevadas Main", 28], ["Destemidas Main", 9],
  ["Genesis Main", 9], ["Genesis Eternal Excellence", 4], ["Ambassadors Main", 16]
];

function buildPublicCellOptions() {
  const groups = [];
  const cells = [];
  PUBLIC_CELL_GROUP_DEFINITIONS.forEach(([name, total], index) => {
    const groupId = `cg-${String(index + 1).padStart(3, "0")}`;
    groups.push({ id: groupId, group_name: name, church_id: "church-hq", status: "Activo", needs_review: true });
    for (let i = 1; i <= total; i += 1) {
      cells.push({
        id: `cr-${String(cells.length + 1).padStart(4, "0")}`,
        cell_name: `${name} Cell ${String(i).padStart(2, "0")}`,
        group_id: groupId,
        church_id: "church-hq",
        needs_review: true
      });
    }
  });
  return { groups, cells };
}

function getPublicCellOptions(churchId = "") {
  try {
    const dash = JSON.parse(localStorage.getItem(DASHBOARD_STORAGE_KEY) || "null");
    if (dash?.cellGroups?.length && dash?.cellRegistry?.length) {
      const groups = dash.cellGroups.filter((group) => !churchId || group.church_id === churchId);
      const cells = dash.cellRegistry.filter((cell) => !churchId || cell.church_id === churchId);
      return {
        groups: groups.length ? groups : dash.cellGroups,
        cells: groups.length ? cells : dash.cellRegistry
      };
    }
  } catch {}
  const fallback = buildPublicCellOptions();
  const groups = fallback.groups.filter((group) => !churchId || group.church_id === churchId);
  const cells = fallback.cells.filter((cell) => !churchId || cell.church_id === churchId);
  return {
    groups: groups.length ? groups : fallback.groups,
    cells: groups.length ? cells : fallback.cells
  };
}

function getPublicChurchOptions() {
  try {
    const dash = JSON.parse(localStorage.getItem(DASHBOARD_STORAGE_KEY) || "null");
    if (dash?.churches?.length) {
      return dash.churches.map((c) => ({
        id: c.id || c.church_id,
        name: c.church_name,
        public_name: c.public_name || c.church_name
      }));
    }
  } catch {}
  return DEFAULT_PUBLIC_CHURCHES;
}

function splitFullName(fullName) {
  const parts = String(fullName || "").trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return { nome: "", apelido: "" };
  if (parts.length === 1) return { nome: parts[0], apelido: "" };
  return { nome: parts[0], apelido: parts.slice(1).join(" ") };
}

function buildFinanceRecordsFromSubmission(submission) {
  const { nome, apelido } = splitFullName(submission.nome_completo);
  const now = submission.created_at || new Date().toISOString();
  const today = now.slice(0, 10);
  const lines = (submission.contribuicoes || []).filter((line) => Number(line.valor) > 0);
  return lines.map((line, index) => ({
    id: `fin-pub-${submission.submission_group_id}-${index + 1}`,
    submission_group_id: submission.submission_group_id,
    public_submission_id: submission.id,
    source: "public_website",
    source_type: "public_website",
    nome,
    apelido,
    telefone: submission.telefone,
    whatsapp: submission.telefone,
    email: submission.email || "",
    endereco: "",
    celula: submission.celula || "",
    grupo_de_celula: submission.grupo_de_celula || "",
    cell_id: submission.cell_id || "",
    cell_name: submission.cell_name || submission.celula || "",
    cell_group_id: submission.cell_group_id || "",
    cell_group_name: submission.cell_group_name || submission.grupo_de_celula || "",
    data_de_aniversario: submission.data_de_aniversario || "",
    church_id: submission.igreja_id,
    igreja: submission.igreja_nome,
    categoria_da_contribuicao: line.categoria,
    outros_descricao: line.categoria === "Outros" ? submission.outros_descricao || "" : "",
    valor: Number(line.valor),
    metodo_de_pagamento: submission.metodo_de_pagamento,
    referencia_da_transaccao: submission.referencia_da_transaccao || "",
    data: submission.data_da_transferencia || today,
    data_da_transferencia: submission.data_da_transferencia || today,
    imagem_envelope_ou_pop: submission.comprovativo_url || "",
    imagem_do_envelope: submission.comprovativo_url || "",
    mensagem_transferencia: submission.mensagem_transferencia || "",
    observacoes: submission.observacoes || "",
    estado: "Pendente de Verificação",
    recebido_por: "Sistema / Formulário Público",
    verificado_por: "",
    verified_at: "",
    comentario_verificacao: "",
    motivo_rejeicao: "",
    created_at: now,
    created_by: "Sistema / Formulário Público",
    updated_by: "Sistema / Formulário Público",
    updated_at: today
  }));
}

function enqueuePublicGivingSubmission(submission) {
  const payload = {
    ...submission,
    id: submission.id || `pgs-${Date.now()}`,
    submission_group_id: submission.submission_group_id || `sg-${Date.now()}`,
    source: "public_website",
    status: "Pendente de Verificação",
    created_at: submission.created_at || new Date().toISOString(),
    imported: false
  };

  try {
    const queue = JSON.parse(localStorage.getItem(PUBLIC_GIVING_QUEUE_KEY) || "[]");
    queue.push(payload);
    localStorage.setItem(PUBLIC_GIVING_QUEUE_KEY, JSON.stringify(queue));
  } catch {}

  try {
    const raw = localStorage.getItem(DASHBOARD_STORAGE_KEY);
    if (!raw) return payload;
    const dash = JSON.parse(raw);
    if (!dash || typeof dash !== "object") return payload;
    dash.publicGivingSubmissions = Array.isArray(dash.publicGivingSubmissions) ? dash.publicGivingSubmissions : [];
    dash.finance = Array.isArray(dash.finance) ? dash.finance : [];
    const financeRecords = buildFinanceRecordsFromSubmission(payload);
    const existingGroups = new Set(dash.publicGivingSubmissions.map((s) => s.submission_group_id));
    if (!existingGroups.has(payload.submission_group_id)) {
      dash.publicGivingSubmissions.push(payload);
      financeRecords.forEach((record) => {
        if (!dash.finance.some((f) => f.id === record.id)) dash.finance.push(record);
      });
      dash.auditLogs = Array.isArray(dash.auditLogs) ? dash.auditLogs : [];
      dash.auditLogs.push({
        id: `audit-${Date.now()}`,
        church_id: payload.igreja_id || "church-hq",
        actor: "Formulário Público",
        action: `Public giving submission ${payload.submission_group_id}`,
        date: new Date().toISOString().slice(0, 10)
      });
      localStorage.setItem(DASHBOARD_STORAGE_KEY, JSON.stringify(dash));
    }
  } catch {}

  return payload;
}

window.PUBLIC_GIVING_QUEUE_KEY = PUBLIC_GIVING_QUEUE_KEY;
window.PUBLIC_GIVING_CATEGORIES = PUBLIC_GIVING_CATEGORIES;
window.PUBLIC_PAYMENT_METHODS = PUBLIC_PAYMENT_METHODS;
window.getPublicChurchOptions = getPublicChurchOptions;
window.getPublicCellOptions = getPublicCellOptions;
window.enqueuePublicGivingSubmission = enqueuePublicGivingSubmission;
window.buildFinanceRecordsFromSubmission = buildFinanceRecordsFromSubmission;
