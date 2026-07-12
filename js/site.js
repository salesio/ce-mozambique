function initChurchFilters() {
  document.querySelectorAll("[data-church-grid]").forEach((grid) => {
    const province = grid.querySelector("[data-filter-province]");
    const city = grid.querySelector("[data-filter-city]");
    const type = grid.querySelector("[data-filter-type]");
    const cards = grid.querySelectorAll("[data-church-card]");
    if (!cards.length) return;

    const apply = () => {
      const p = province?.value || "";
      const c = city?.value || "";
      const t = type?.value || "";

      cards.forEach((card) => {
        const col = card.closest("[data-church-col]") || card;
        const match =
          (!p || card.dataset.province === p) &&
          (!c || card.dataset.city === c) &&
          (!t || card.dataset.type === t);
        col.classList.toggle("d-none", !match);
      });
    };

    [province, city, type].forEach((el) => el?.addEventListener("change", apply));
  });
}

function initDropdownHover() {
  const mq = window.matchMedia("(min-width: 1200px)");
  document.querySelectorAll(".navbar .dropdown").forEach((dropdown) => {
    const toggle = dropdown.querySelector(".dropdown-toggle");
    if (!toggle || !window.bootstrap?.Dropdown) return;

    const instance = window.bootstrap.Dropdown.getOrCreateInstance(toggle);

    dropdown.addEventListener("mouseenter", () => {
      if (mq.matches) instance.show();
    });

    dropdown.addEventListener("mouseleave", () => {
      if (mq.matches) instance.hide();
    });
  });
}

function initNavActive() {
  const page = window.location.pathname.split("/").pop() || "index.html";
  const aboutPages = ["sobre.html", "ministerios.html", "igrejas.html"];

  if (aboutPages.includes(page)) {
    const toggle = document.getElementById("aboutMenu");
    if (toggle) toggle.classList.add("active");
  }

  document.querySelectorAll(".navbar .nav-link:not(.dropdown-toggle)").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("http") || href === "#") return;
    if (href === page) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  document.querySelectorAll(".navbar .dropdown-item").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === page) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
}

function initReveal() {
  const targets = document.querySelectorAll(
    ".feature-card, .journey-card, .location-card, .method-card, .hero-card, .online-panel"
  );
  if (!targets.length) return;

  targets.forEach((el) => el.classList.add("reveal-on-scroll"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
  );

  targets.forEach((el) => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  initDropdownHover();
  initNavActive();
  initChurchFilters();
  initReveal();
  if (typeof initGivingModal === "function") initGivingModal();
});