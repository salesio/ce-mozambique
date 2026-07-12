/**
 * Public giving confirmation modal — frontend-first, wired to giving-bridge.js
 */
const GIVING_MAX_FILE_BYTES = 5 * 1024 * 1024;
const GIVING_ALLOWED_FILE_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif", "application/pdf"];

const GIVING_CATEGORY_I18N = {
  "Dízimo": "giving.cat.tithe",
  "Construtores de Visão": "giving.cat.visionBuilders",
  "Rapsódia de Realidades": "giving.cat.rhapsody",
  "Loveworld SAT": "giving.cat.lwsat",
  "Missões de Cidades do Interior": "giving.cat.interiorMissions",
  "Escola de Cura": "giving.cat.healingSchool",
  "Mandato de Célula": "giving.cat.cellMandate",
  "Rapsódias das Crianças": "giving.cat.childrenRhapsody",
  "Projectos Locais": "giving.cat.localProjects",
  "Outros": "giving.cat.other"
};

let givingModalOpen = false;

function givingT(key, lang) {
  const selected = translations[lang] ? lang : "pt";
  return translations[selected]?.[key] || translations.pt?.[key] || key;
}

function formatGivingMoney(value) {
  const num = Number(value) || 0;
  return new Intl.NumberFormat(document.documentElement.lang === "en" ? "en-MZ" : "pt-MZ", {
    style: "currency",
    currency: "MZN",
    maximumFractionDigits: 0
  }).format(num);
}

function buildGivingModalMarkup() {
  const categories = (window.PUBLIC_GIVING_CATEGORIES || []).map((cat) => {
    const i18nKey = GIVING_CATEGORY_I18N[cat] || cat;
    return `
      <div class="giving-category-row">
        <label data-i18n="${i18nKey}">${cat}</label>
        <input class="form-control" type="number" min="0" step="1" inputmode="numeric"
          name="amount_${cat.replace(/\s+/g, "_")}" data-giving-category="${cat}" placeholder="0">
      </div>`;
  }).join("");

  const churches = (window.getPublicChurchOptions?.() || []).map(
    (c) => `<option value="${c.id}">${c.public_name || c.name}</option>`
  ).join("");

  const methods = (window.PUBLIC_PAYMENT_METHODS || []).map((m) => `<option value="${m}">${m}</option>`).join("");

  return `
    <div id="givingModalBackdrop" class="giving-modal-backdrop d-none" aria-hidden="true"></div>
    <aside id="givingModal" class="giving-modal d-none" role="dialog" aria-modal="true" aria-labelledby="givingModalTitle">
      <header class="giving-modal-head">
        <div>
          <span class="eyebrow" data-i18n="giving.eyebrow">Confirmação</span>
          <h2 id="givingModalTitle" data-i18n="giving.title">Relatório de Doação, Dízimo e Parceria</h2>
        </div>
        <button type="button" class="giving-modal-close" data-giving-close aria-label="Fechar">
          <i class="bi bi-x-lg" aria-hidden="true"></i>
        </button>
      </header>
      <form id="givingModalForm" class="d-flex flex-column flex-grow-1 overflow-hidden" novalidate>
        <div class="giving-modal-body">
          <div id="givingFormAlert" hidden></div>

          <section class="giving-section">
            <h3 class="giving-section-title"><i class="bi bi-person-vcard"></i><span data-i18n="giving.section.personal">Dados Pessoais</span></h3>
            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label" for="giving_nome" data-i18n="giving.field.fullName">Nome completo</label>
                <input class="form-control" id="giving_nome" name="nome_completo" type="text" required autocomplete="name">
              </div>
              <div class="col-md-6">
                <label class="form-label" for="giving_birthday" data-i18n="giving.field.birthday">Data de aniversário</label>
                <input class="form-control" id="giving_birthday" name="data_de_aniversario" type="date">
              </div>
              <div class="col-md-6">
                <label class="form-label" for="giving_phone" data-i18n="giving.field.phone">Telefone</label>
                <input class="form-control" id="giving_phone" name="telefone" type="tel" required autocomplete="tel">
              </div>
              <div class="col-md-6">
                <label class="form-label" for="giving_email" data-i18n="giving.field.email">E-mail</label>
                <input class="form-control" id="giving_email" name="email" type="email" autocomplete="email">
              </div>
              <div class="col-md-6">
                <label class="form-label" for="giving_church" data-i18n="giving.field.church">Igreja</label>
                <select class="form-select" id="giving_church" name="igreja_id" required>
                  <option value="" data-i18n="giving.field.churchPlaceholder">Seleccione a igreja</option>
                  ${churches}
                </select>
              </div>
              <div class="col-md-6">
                <label class="form-label" for="giving_cell_group" data-i18n="giving.field.cellGroup">Grupo de célula</label>
                <input class="form-control" id="giving_cell_group" name="grupo_de_celula" type="text">
              </div>
              <div class="col-12">
                <label class="form-label" for="giving_cell" data-i18n="giving.field.cell">Célula</label>
                <input class="form-control" id="giving_cell" name="celula" type="text">
              </div>
            </div>
          </section>

          <section class="giving-section">
            <h3 class="giving-section-title"><i class="bi bi-cash-stack"></i><span data-i18n="giving.section.contributions">Contribuições</span></h3>
            <div class="giving-category-grid">${categories}</div>
            <div class="giving-total-bar">
              <span data-i18n="giving.total">Total Geral</span>
              <strong id="givingGrandTotal">0 MT</strong>
            </div>
            <div id="givingOutrosWrap" class="giving-outros-wrap d-none">
              <label class="form-label mt-2" for="giving_outros_desc" data-i18n="giving.field.otherDesc">Especifique as categorias e montantes das outras doações</label>
              <textarea class="form-control" id="giving_outros_desc" name="outros_descricao" rows="3"></textarea>
            </div>
          </section>

          <section class="giving-section">
            <h3 class="giving-section-title"><i class="bi bi-receipt"></i><span data-i18n="giving.section.payment">Pagamento / Comprovativo</span></h3>
            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label" for="giving_method" data-i18n="giving.field.paymentMethod">Método de pagamento</label>
                <select class="form-select" id="giving_method" name="metodo_de_pagamento" required>
                  <option value="" data-i18n="giving.field.methodPlaceholder">Seleccione</option>
                  ${methods}
                </select>
              </div>
              <div class="col-md-6">
                <label class="form-label" for="giving_ref" data-i18n="giving.field.reference">Referência da transacção</label>
                <input class="form-control" id="giving_ref" name="referencia_da_transaccao" type="text">
              </div>
              <div class="col-md-6">
                <label class="form-label" for="giving_transfer_date" data-i18n="giving.field.transferDate">Data da transferência</label>
                <input class="form-control" id="giving_transfer_date" name="data_da_transferencia" type="date" required>
              </div>
              <div class="col-md-6">
                <label class="form-label" for="giving_pop" data-i18n="giving.field.pop">Anexar comprovativo / POP</label>
                <input class="form-control" id="giving_pop" name="comprovativo_upload" type="file" accept="image/*,.pdf,application/pdf">
                <p class="giving-file-hint" data-i18n="giving.field.fileHint">JPG, PNG, WEBP ou PDF — máx. 5 MB</p>
              </div>
              <div class="col-12">
                <label class="form-label" for="giving_message" data-i18n="giving.field.transferMessage">Colar mensagem da transferência M-Pesa / E-Mola / Conta móvel</label>
                <textarea class="form-control" id="giving_message" name="mensagem_transferencia" rows="4"></textarea>
              </div>
              <div class="col-12">
                <label class="form-label" for="giving_notes" data-i18n="giving.field.notes">Observações</label>
                <textarea class="form-control" id="giving_notes" name="observacoes" rows="3"></textarea>
              </div>
            </div>
          </section>

          <div class="giving-honeypot" aria-hidden="true">
            <label for="giving_website">Website</label>
            <input id="giving_website" name="website" type="text" tabindex="-1" autocomplete="off">
          </div>
        </div>
        <footer class="giving-modal-foot">
          <button type="button" class="btn btn-outline-giving" data-giving-close data-i18n="giving.cancel">Cancelar</button>
          <button type="submit" class="btn btn-ce-gold" data-i18n="giving.submit">Submeter Relatório</button>
        </footer>
      </form>
    </aside>`;
}

function getGivingElements() {
  return {
    backdrop: document.getElementById("givingModalBackdrop"),
    modal: document.getElementById("givingModal"),
    form: document.getElementById("givingModalForm"),
    alert: document.getElementById("givingFormAlert"),
    total: document.getElementById("givingGrandTotal"),
    outrosWrap: document.getElementById("givingOutrosWrap")
  };
}

function showGivingAlert(message, type = "error") {
  const { alert } = getGivingElements();
  if (!alert) return;
  alert.hidden = false;
  alert.className = type === "success" ? "giving-form-success" : "giving-form-error";
  alert.textContent = message;
}

function clearGivingAlert() {
  const { alert } = getGivingElements();
  if (!alert) return;
  alert.hidden = true;
  alert.textContent = "";
}

function updateGivingTotal() {
  const { form, total, outrosWrap } = getGivingElements();
  if (!form || !total) return;
  let sum = 0;
  let outros = 0;
  form.querySelectorAll("[data-giving-category]").forEach((input) => {
    const val = Number(input.value) || 0;
    sum += val;
    if (input.dataset.givingCategory === "Outros") outros = val;
  });
  total.textContent = formatGivingMoney(sum);
  outrosWrap?.classList.toggle("d-none", outros <= 0);
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function validateGivingForm(form) {
  const lang = document.documentElement.lang || "pt";
  const data = new FormData(form);

  if (data.get("website")) return givingT("giving.error.spam", lang);

  const nome = String(data.get("nome_completo") || "").trim();
  const telefone = String(data.get("telefone") || "").trim();
  const igrejaId = String(data.get("igreja_id") || "").trim();
  const metodo = String(data.get("metodo_de_pagamento") || "").trim();
  const transferDate = String(data.get("data_da_transferencia") || "").trim();
  const mensagem = String(data.get("mensagem_transferencia") || "").trim();
  const fileInput = form.querySelector("[name='comprovativo_upload']");
  const file = fileInput?.files?.[0];

  if (!nome) return givingT("giving.error.name", lang);
  if (!telefone) return givingT("giving.error.phone", lang);
  if (!igrejaId) return givingT("giving.error.church", lang);

  let total = 0;
  const contribuicoes = [];
  form.querySelectorAll("[data-giving-category]").forEach((input) => {
    const valor = Number(input.value) || 0;
    if (valor > 0) {
      total += valor;
      contribuicoes.push({ categoria: input.dataset.givingCategory, valor });
    }
  });
  if (total <= 0) return givingT("giving.error.amount", lang);

  if (!metodo) return givingT("giving.error.method", lang);
  if (!transferDate) return givingT("giving.error.date", lang);
  if (!file && !mensagem) return givingT("giving.error.proof", lang);

  if (file) {
    if (!GIVING_ALLOWED_FILE_TYPES.includes(file.type) && !/\.(jpe?g|png|webp|gif|pdf)$/i.test(file.name)) {
      return givingT("giving.error.fileType", lang);
    }
    if (file.size > GIVING_MAX_FILE_BYTES) return givingT("giving.error.fileSize", lang);
  }

  const outrosLine = contribuicoes.find((line) => line.categoria === "Outros");
  if (outrosLine && !String(data.get("outros_descricao") || "").trim()) {
    return givingT("giving.error.otherDesc", lang);
  }

  return null;
}

async function buildGivingSubmission(form) {
  const data = new FormData(form);
  const churches = window.getPublicChurchOptions?.() || [];
  const churchId = String(data.get("igreja_id") || "");
  const church = churches.find((c) => c.id === churchId);
  const contribuicoes = [];
  let total = 0;

  form.querySelectorAll("[data-giving-category]").forEach((input) => {
    const valor = Number(input.value) || 0;
    if (valor > 0) {
      total += valor;
      contribuicoes.push({ categoria: input.dataset.givingCategory, valor });
    }
  });

  const fileInput = form.querySelector("[name='comprovativo_upload']");
  const file = fileInput?.files?.[0];
  let comprovativo_url = "";
  const useSupabase = window.CESupabaseGiving?.isConfigured?.();
  if (file && !useSupabase) comprovativo_url = await readFileAsDataUrl(file);

  const groupId = `sg-${Date.now()}`;
  return {
    id: `pgs-${Date.now()}`,
    submission_group_id: groupId,
    nome_completo: String(data.get("nome_completo") || "").trim(),
    data_de_aniversario: String(data.get("data_de_aniversario") || ""),
    telefone: String(data.get("telefone") || "").trim(),
    email: String(data.get("email") || "").trim(),
    igreja_id: churchId,
    igreja_nome: church?.name || church?.public_name || "",
    grupo_de_celula: String(data.get("grupo_de_celula") || "").trim(),
    celula: String(data.get("celula") || "").trim(),
    contribuicoes,
    outros_descricao: String(data.get("outros_descricao") || "").trim(),
    metodo_de_pagamento: String(data.get("metodo_de_pagamento") || ""),
    referencia_da_transaccao: String(data.get("referencia_da_transaccao") || "").trim(),
    data_da_transferencia: String(data.get("data_da_transferencia") || ""),
    comprovativo_url,
    mensagem_transferencia: String(data.get("mensagem_transferencia") || "").trim(),
    observacoes: String(data.get("observacoes") || "").trim(),
    total_geral: total,
    source: "public_website",
    status: "Pendente de Verificação",
    created_at: new Date().toISOString()
  };
}

function openGivingModal() {
  const { backdrop, modal, form } = getGivingElements();
  if (!backdrop || !modal) return;
  clearGivingAlert();
  form?.reset();
  updateGivingTotal();
  backdrop.classList.remove("d-none");
  modal.classList.remove("d-none");
  document.body.style.overflow = "hidden";
  requestAnimationFrame(() => {
    backdrop.classList.add("is-open");
    modal.classList.add("is-open");
  });
  givingModalOpen = true;
  modal.querySelector("[name='nome_completo']")?.focus();
}

function closeGivingModal() {
  const { backdrop, modal } = getGivingElements();
  if (!backdrop || !modal) return;
  backdrop.classList.remove("is-open");
  modal.classList.remove("is-open");
  document.body.style.overflow = "";
  givingModalOpen = false;
  setTimeout(() => {
    backdrop.classList.add("d-none");
    modal.classList.add("d-none");
  }, 280);
}

function refreshGivingChurchSelect() {
  const select = document.getElementById("giving_church");
  if (!select) return;
  const current = select.value;
  const churches = window.getPublicChurchOptions?.() || [];
  const placeholder = givingT("giving.field.churchPlaceholder", document.documentElement.lang);
  select.innerHTML = `<option value="">${placeholder}</option>${churches.map(
    (c) => `<option value="${c.id}">${c.public_name || c.name}</option>`
  ).join("")}`;
  if (current) select.value = current;
}

function initGivingModal() {
  if (!document.getElementById("givingModal")) {
    document.body.insertAdjacentHTML("beforeend", buildGivingModalMarkup());
  }

  const { form, backdrop } = getGivingElements();
  refreshGivingChurchSelect();

  document.querySelectorAll("[data-open-giving-modal]").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      openGivingModal();
    });
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-giving-close]")) {
      event.preventDefault();
      closeGivingModal();
      return;
    }
    if (givingModalOpen && event.target === backdrop) closeGivingModal();
  });

  document.addEventListener("keydown", (event) => {
    if (givingModalOpen && event.key === "Escape") closeGivingModal();
  });

  form?.addEventListener("input", (event) => {
    if (event.target.matches("[data-giving-category]")) updateGivingTotal();
  });

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    clearGivingAlert();
    const lang = document.documentElement.lang || "pt";
    const error = validateGivingForm(form);
    if (error) {
      showGivingAlert(error, "error");
      return;
    }

    const submitBtn = form.querySelector("[type='submit']");
    if (submitBtn) submitBtn.disabled = true;

    try {
      const submission = await buildGivingSubmission(form);
      const proofFile = form.querySelector("[name='comprovativo_upload']")?.files?.[0] || null;
      let saved = false;

      if (typeof window.submitPublicGivingViaSupabase === "function" && window.CESupabaseGiving?.isConfigured?.()) {
        const result = await window.submitPublicGivingViaSupabase(submission, proofFile);
        saved = Boolean(result?.ok);
      }

      if (!saved && typeof window.enqueuePublicGivingSubmission === "function") {
        window.enqueuePublicGivingSubmission(submission);
        saved = true;
      }

      if (!saved) throw new Error("No submission handler available");

      showGivingAlert(givingT("giving.success", lang), "success");
      form.reset();
      updateGivingTotal();
      setTimeout(closeGivingModal, 2200);
    } catch {
      showGivingAlert(givingT("giving.error.generic", lang), "error");
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });

  const observer = new MutationObserver(() => {
    if (document.documentElement.lang) {
      document.querySelectorAll("#givingModal [data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        const value = givingT(key, document.documentElement.lang);
        if (value) {
          if (el.tagName === "OPTION" && !el.value) el.textContent = value;
          else if (el.tagName !== "INPUT" && el.tagName !== "TEXTAREA") el.textContent = value;
        }
      });
      refreshGivingChurchSelect();
      updateGivingTotal();
    }
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
}

window.initGivingModal = initGivingModal;
window.openGivingModal = openGivingModal;