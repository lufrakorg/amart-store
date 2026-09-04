import {
  translations,
  productTranslationsEn,
  reviewTranslationsEn,
  type Lang,
} from "../data/i18n";

const WHATSAPP = "393472662754";

// ── Utils ──────────────────────────────────────────────
const $ = (sel: string, ctx: ParentNode = document) =>
  ctx.querySelector<HTMLElement>(sel);
const $$ = (sel: string, ctx: ParentNode = document) => [
  ...ctx.querySelectorAll<HTMLElement>(sel),
];

// ── State ──────────────────────────────────────────────
let currentLang: Lang = "it";

// ── Language Detection & i18n ──────────────────────────
export function detectLanguage(): Lang {
  // 1. Saved preference takes precedence
  try {
    const saved = localStorage.getItem("amart_user_lang") as Lang | null;
    if (saved === "it" || saved === "en") return saved;
  } catch {}

  // 2. Check if device is smartphone / mobile
  const isMobile =
    window.innerWidth <= 768 ||
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    ) ||
    (navigator.maxTouchPoints > 0 && window.innerWidth <= 1024);

  // 3. Check browser language (non-Italian)
  const navLang = (
    navigator.language ||
    (navigator as any).userLanguage ||
    ""
  ).toLowerCase();
  const isItalian = navLang.startsWith("it");

  // If viewed from a non-Italian smartphone -> English!
  if (isMobile && !isItalian) {
    return "en";
  }

  return "it";
}

export function setLanguage(lang: Lang, animate = true): void {
  currentLang = lang;
  try {
    localStorage.setItem("amart_user_lang", lang);
  } catch {}

  document.documentElement.lang = lang;

  // 1. Text elements with data-i18n
  $$("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (key && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // 2. HTML elements with data-i18n-html
  $$("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (key && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // 3. Product Cards (Categories, Names, Sizes, Badges)
  $$(".product-card").forEach((card) => {
    const pid = card.dataset.productId;
    const origName = card.dataset.origName || "";
    const origSizes = card.dataset.origSizes || "";

    const nameEl = $(".product-name", card);
    const sizesEl = $(".product-sizes", card);
    const catEl = $(".product-category-label", card);
    const badgeEl = $(".product-badge", card);
    const orderBtn = $("[data-order-product]", card);

    if (lang === "en" && pid && productTranslationsEn[pid]) {
      const en = productTranslationsEn[pid];
      if (nameEl) nameEl.textContent = en.name;
      if (sizesEl) sizesEl.textContent = en.sizes ?? origSizes;
      if (orderBtn) orderBtn.dataset.orderProduct = en.name;
    } else {
      if (nameEl) nameEl.textContent = origName;
      if (sizesEl) sizesEl.textContent = origSizes;
      if (orderBtn) orderBtn.dataset.orderProduct = origName;
    }

    // Category
    if (catEl && catEl.dataset.category) {
      const catKey = `category.${catEl.dataset.category}`;
      if (translations[lang][catKey]) {
        catEl.textContent = translations[lang][catKey];
      }
    }

    // Badge
    if (badgeEl) {
      const origBadge =
        badgeEl.dataset.origBadge || badgeEl.textContent?.trim() || "";
      if (origBadge.toLowerCase().includes("novit")) {
        badgeEl.textContent = translations[lang]["badge.new"];
      } else if (origBadge.toLowerCase().includes("continuat")) {
        badgeEl.textContent = translations[lang]["badge.classic"];
      } else if (origBadge.toLowerCase().includes("must have")) {
        badgeEl.textContent = translations[lang]["badge.musthave"];
      }
    }
  });

  // 4. Reviews
  $$(".review-card").forEach((card) => {
    const author = card.dataset.author || "";
    const origBody = card.dataset.origBody || "";
    const origCity = card.dataset.origCity || "";

    const bodyEl = $(".review-body", card);
    const cityEl = $(".review-city", card);

    if (lang === "en" && reviewTranslationsEn[author]) {
      const en = reviewTranslationsEn[author];
      if (bodyEl) bodyEl.textContent = en.body;
      if (cityEl) cityEl.textContent = en.city;
    } else {
      if (bodyEl) bodyEl.textContent = origBody;
      if (cityEl) cityEl.textContent = origCity;
    }
  });

  // 5. Update Language Switcher bubble
  updateLangBubble(lang, animate);

  // 6. Refresh Store Status with localized labels
  initStoreStatus();
}

function updateLangBubble(lang: Lang, animate = true): void {
  const switcher = document.getElementById("lang-switcher");
  const bubble = document.getElementById("lang-bubble");
  const btn = document.querySelector<HTMLElement>(`[data-lang-btn="${lang}"]`);
  if (!switcher || !bubble || !btn) return;

  const left = btn.offsetLeft;
  const width = btn.offsetWidth;
  const top = btn.offsetTop;
  const height = btn.offsetHeight;

  if (!animate) {
    const prevTransition = bubble.style.transition;
    bubble.style.transition = "none";
    bubble.style.left = `${left}px`;
    bubble.style.top = `${top}px`;
    bubble.style.width = `${width}px`;
    bubble.style.height = `${height}px`;
    bubble.style.opacity = "1";
    void bubble.offsetHeight;
    bubble.style.transition = prevTransition;
  } else {
    bubble.style.left = `${left}px`;
    bubble.style.top = `${top}px`;
    bubble.style.width = `${width}px`;
    bubble.style.height = `${height}px`;
    bubble.style.opacity = "1";

    bubble.classList.remove("animate-lang-switch");
    void bubble.offsetWidth;
    bubble.classList.add("animate-lang-switch");
  }

  $$("[data-lang-btn]").forEach((b) => {
    const isTarget = b.dataset.langBtn === lang;
    b.classList.toggle("lang-active", isTarget);
    if (isTarget) {
      b.classList.add("text-gold-light", "font-bold");
      b.classList.remove(
        "text-white/50",
        "hover:text-white",
        "text-navy-dark",
        "font-extrabold",
        "drop-shadow-sm",
      );
    } else {
      b.classList.remove(
        "text-gold-light",
        "text-navy-dark",
        "font-extrabold",
        "drop-shadow-sm",
      );
      b.classList.add("text-white/50", "hover:text-white");
    }
  });
}

function initI18n(): void {
  currentLang = detectLanguage();
  setLanguage(currentLang, false);

  $$("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const target = (btn as HTMLElement).dataset.langBtn as Lang;
      if (target && target !== currentLang) {
        setLanguage(target, true);
      }
    });
  });

  window.addEventListener(
    "resize",
    () => {
      updateLangBubble(currentLang, false);
    },
    { passive: true },
  );
}

// ── Carousel ───────────────────────────────────────────
function initCarousels(): void {
  $$(".carousel-wrap").forEach((wrapper) => {
    const track = $(".carousel-track", wrapper);
    const btnPrev = $("[data-carousel-prev]", wrapper);
    const btnNext = $("[data-carousel-next]", wrapper);
    if (!track) return;

    const scrollAmount = () => {
      const card = track.children[0] as HTMLElement | undefined;
      return card ? (card.offsetWidth + 16) * 2 : 520;
    };

    btnPrev?.addEventListener("click", () =>
      track.scrollBy({ left: -scrollAmount(), behavior: "smooth" }),
    );
    btnNext?.addEventListener("click", () =>
      track.scrollBy({ left: scrollAmount(), behavior: "smooth" }),
    );

    let startX = 0;
    track.addEventListener(
      "touchstart",
      (e) => {
        startX = (e as TouchEvent).touches[0].clientX;
      },
      { passive: true },
    );
    track.addEventListener(
      "touchend",
      (e) => {
        const diff = startX - (e as TouchEvent).changedTouches[0].clientX;
        if (Math.abs(diff) > 40)
          track.scrollBy({
            left: diff > 0 ? scrollAmount() / 2 : -scrollAmount() / 2,
            behavior: "smooth",
          });
      },
      { passive: true },
    );
  });
}

// ── Header Auto-Hide on Scroll ─────────────────────────
function initHeaderScroll(): void {
  const header = document.querySelector<HTMLElement>(".site-header");
  const filterBar = document.querySelector<HTMLElement>(
    ".collection-filter-bar",
  );
  if (!header) return;

  let lastY = window.scrollY;
  let ticking = false;
  const THRESHOLD = 8;

  const setHeaderHidden = (hidden: boolean) => {
    if (hidden) {
      header.classList.add("header-hidden");
      filterBar?.classList.add("filter-bar-floated");
    } else {
      header.classList.remove("header-hidden");
      filterBar?.classList.remove("filter-bar-floated");
    }
  };

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y <= 20) {
          setHeaderHidden(false);
        } else if (y > lastY + THRESHOLD) {
          setHeaderHidden(true);
        } else if (y < lastY - THRESHOLD) {
          setHeaderHidden(false);
        }
        lastY = y;
        ticking = false;
      });
    },
    { passive: true },
  );
}

// ── Fade-in on Scroll ──────────────────────────────────
function initFadeIn(): void {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -50px 0px" },
  );

  $$(".fade-in").forEach((el) => observer.observe(el));
}

// ── Modals ─────────────────────────────────────────────
function initModals(): void {
  const closeModal = (modal: HTMLElement) => {
    modal.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  $$("[data-modal-open]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const modal = $(`#${(trigger as HTMLElement).dataset.modalOpen}`);
      if (!modal) return;
      modal.classList.add("is-open");
      document.body.style.overflow = "hidden";
    });
  });

  $$("[data-modal-close]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.closest<HTMLElement>(".modal-backdrop");
      if (modal) closeModal(modal);
    });
  });

  $$(".modal-backdrop").forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal(modal);
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape")
      $$(".modal-backdrop.is-open").forEach((modal) => closeModal(modal));
  });
}

// ── Store Hours & Status ───────────────────────────────
// Orari Amart Store:
// Lun-Ven: 10:00 - 20:30 [10, 20.5]
// Sab: 10:00 - 00:00 [10, 24]
// Dom: 10:00 - 22:00 [10, 22]
type DayHours = [number, number];
const STORE_HOURS: (DayHours | null)[] = [
  [10, 22], // 0 = Dom: 10:00 - 22:00
  [10, 20.5], // 1 = Lun: 10:00 - 20:30
  [10, 20.5], // 2 = Mar: 10:00 - 20:30
  [10, 20.5], // 3 = Mer: 10:00 - 20:30
  [10, 20.5], // 4 = Gio: 10:00 - 20:30
  [10, 20.5], // 5 = Ven: 10:00 - 20:30
  [10, 24], // 6 = Sab: 10:00 - 00:00
];

const DAY_KEYS = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
const DAY_ATTRS = [
  "domenica",
  "lunedi",
  "martedi",
  "mercoledi",
  "giovedi",
  "venerdi",
  "sabato",
];

function initStoreStatus(): void {
  const el = $("#store-status");
  if (!el) return;

  const now = new Date();
  const hours = STORE_HOURS[now.getDay()];
  const h = now.getHours() + now.getMinutes() / 60;
  const open = !!hours && h >= hours[0] && h < hours[1];

  const openLabel = translations[currentLang]["modal.hours_open_now"];
  const closedLabel = translations[currentLang]["modal.hours_closed_now"];

  el.innerHTML = `
    <span class="status-dot ${open ? "open" : "closed"}"></span>
    <span>${open ? openLabel : closedLabel}</span>
  `;

  // Update day rows in modal
  DAY_ATTRS.forEach((dayAttr, index) => {
    const row = $(`[data-day="${dayAttr}"]`);
    if (!row) return;
    const dayLabel = row.querySelector<HTMLElement>(".orari-day");
    const dayKey = `modal.day_${DAY_KEYS[index]}`;

    if (dayLabel) {
      let text = translations[currentLang][dayKey] || dayAttr;
      if (now.getDay() === index) {
        text += ` <span class="today-mark">${translations[currentLang]["modal.hours_today"]}</span>`;
      }
      dayLabel.innerHTML = text;
    }
  });
}

// ── Product Filter & Category Bubble ───────────────────
function initProductFilter(): void {
  const tabBar = document.getElementById("filter-tabs");
  const grid = document.getElementById("products-grid");
  const bubble = document.getElementById("filter-bubble");
  if (!tabBar || !grid) return;

  const tabs = $$(".tab-btn", tabBar);
  const cards = $$(".product-item-wrap", grid);

  const updateBubble = (activeTab: HTMLElement, animate = true) => {
    if (!bubble) return;
    if (!animate) {
      const prevTransition = bubble.style.transition;
      bubble.style.transition = "none";
      bubble.style.left = `${activeTab.offsetLeft}px`;
      bubble.style.width = `${activeTab.offsetWidth}px`;
      bubble.style.opacity = "1";
      void bubble.offsetHeight;
      bubble.style.transition = prevTransition;
    } else {
      bubble.style.left = `${activeTab.offsetLeft}px`;
      bubble.style.width = `${activeTab.offsetWidth}px`;
      bubble.style.opacity = "1";
    }

    activeTab.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  const applyFilter = (
    filter: string,
    tabElement?: HTMLElement,
    smoothScroll = false,
  ) => {
    const activeTab =
      tabElement || tabs.find((t) => t.dataset.filter === filter) || tabs[0];
    if (!activeTab) return;

    tabs.forEach((t) => {
      const isTarget = t === activeTab;
      t.classList.toggle("active", isTarget);
      t.classList.toggle("text-white", isTarget);
      t.classList.toggle("text-slate-600", !isTarget);
      t.setAttribute("aria-selected", isTarget ? "true" : "false");
    });

    updateBubble(activeTab, true);

    const newHash = filter === "tutti" ? "" : `#${filter}`;
    if (window.location.hash !== newHash) {
      history.replaceState(null, "", newHash || window.location.pathname);
    }

    let visible = 0;
    let animIndex = 0;

    cards.forEach((card) => {
      const match =
        filter === "tutti" || (card as HTMLElement).dataset.category === filter;
      const el = card as HTMLElement;

      if (match) {
        visible++;
        el.hidden = false;
        el.classList.remove("filtering-out");
        el.classList.remove("filtering-in");
        void el.offsetWidth;
        el.style.animationDelay = `${animIndex * 40}ms`;
        el.classList.add("filtering-in");
        animIndex++;
      } else {
        el.classList.add("filtering-out");
        setTimeout(() => {
          if (el.classList.contains("filtering-out")) {
            el.hidden = true;
            el.classList.remove("filtering-out");
          }
        }, 180);
      }
    });

    const existingEmpty = document.getElementById("empty-state");
    if (visible === 0 && !existingEmpty) {
      const empty = document.createElement("div");
      empty.id = "empty-state";
      empty.className =
        "col-span-full py-16 text-center flex flex-col items-center justify-center gap-4 bg-white/60 backdrop-blur-sm border border-gold/25 rounded-3xl p-8 shadow-sm fade-in is-visible";
      empty.innerHTML = `
        <div class="w-12 h-12 rounded-full bg-gold/15 text-gold-dark flex items-center justify-center text-xl">✨</div>
        <p class="text-[0.85rem] font-medium text-slate-600 max-w-sm">${translations[currentLang]["collezione.empty_state"]}</p>
        <button type="button" class="reset-filter-btn px-6 py-2.5 bg-navy text-white text-[0.72rem] font-bold tracking-[0.1em] uppercase rounded-full shadow-sm hover:bg-navy-light hover:scale-105 transition-all cursor-pointer">
          ${translations[currentLang]["collezione.reset_filter"] || "Mostra tutti i capi"}
        </button>
      `;
      grid.appendChild(empty);

      empty
        .querySelector(".reset-filter-btn")
        ?.addEventListener("click", () => {
          applyFilter("tutti", tabs[0], true);
        });
    } else if (visible > 0 && existingEmpty) {
      existingEmpty.remove();
    }

    if (smoothScroll) {
      const gridSection = document.getElementById("collection-grid-section");
      if (gridSection) {
        const rect = gridSection.getBoundingClientRect();
        if (rect.top < 60) {
          window.scrollTo({
            top: window.scrollY + rect.top - 120,
            behavior: "smooth",
          });
        }
      }
    }
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      const filter = tab.dataset.filter ?? "tutti";
      applyFilter(filter, tab, false);
    });
  });

  const initialHash = window.location.hash.replace("#", "").toLowerCase();
  const matchedTab = tabs.find((t) => t.dataset.filter === initialHash);
  if (matchedTab) {
    applyFilter(initialHash, matchedTab, false);
    setTimeout(() => updateBubble(matchedTab, false), 80);
  } else {
    const firstTab = tabs[0];
    if (firstTab) {
      updateBubble(firstTab, false);
      setTimeout(() => updateBubble(firstTab, false), 80);
    }
  }

  window.addEventListener("hashchange", () => {
    const currentHash =
      window.location.hash.replace("#", "").toLowerCase() || "tutti";
    const targetTab =
      tabs.find((t) => t.dataset.filter === currentHash) || tabs[0];
    if (targetTab) applyFilter(currentHash, targetTab, true);
  });

  window.addEventListener(
    "resize",
    () => {
      const activeTab =
        tabs.find((t) => t.classList.contains("active")) || tabs[0];
      if (activeTab) updateBubble(activeTab, false);
    },
    { passive: true },
  );
}

// ── WhatsApp Orders ────────────────────────────────────
function initOrderButtons(): void {
  document.addEventListener("click", (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLElement>(
      "[data-order-product]",
    );
    if (!btn) return;

    const { orderProduct: name = "", orderPrice: price = "" } = btn.dataset;
    const template =
      translations[currentLang]?.["wa.order_template"] ||
      "Salve, Desidero richiedere informazioni su disponibilità e taglie per: {product} {price}, e se è disponibile per la spedizione o per il ritiro in negozio. Grazie!";

    const productText = name.trim();
    const priceText = price.trim();

    const messageText = template
      .replace("{product}", productText)
      .replace("{price}", priceText);

    const msg = encodeURIComponent(messageText);
    window.open(
      `https://wa.me/${WHATSAPP}?text=${msg}`,
      "_blank",
      "noopener,noreferrer",
    );
  });
}

// ── Featured Auto-Scroll: touch pause on mobile ──────────
function initFeaturedScrollPause(): void {
  const container = document.querySelector<HTMLElement>(
    ".featured-marquee-container",
  );
  const track = document.querySelector<HTMLElement>(".animate-featured-scroll");
  if (!container || !track) return;

  let resumeTimer: ReturnType<typeof setTimeout>;

  container.addEventListener(
    "touchstart",
    () => {
      track.style.animationPlayState = "paused";
      clearTimeout(resumeTimer);
    },
    { passive: true },
  );

  container.addEventListener(
    "touchend",
    () => {
      resumeTimer = setTimeout(() => {
        track.style.animationPlayState = "";
      }, 1200);
    },
    { passive: true },
  );
}

// ── Init ───────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  initI18n();
  initHeaderScroll();
  initCarousels();
  initFadeIn();
  initModals();
  initStoreStatus();
  initProductFilter();
  initOrderButtons();
  initFeaturedScrollPause();

  const hero = document.querySelector<HTMLElement>(".hero");
  if (hero) setTimeout(() => hero.classList.add("is-loaded"), 50);
});
