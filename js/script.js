/**
 * GauRakshak Bharat — Main Script
 * ---------------------------------
 * Core application bootstrap and feature placeholders.
 * Depends on: animations.js, ui.js
 */

(function () {
  "use strict";

  /* ============================================
     APP CONFIG
     Central configuration — extend as project grows
     ============================================ */
  const AppConfig = {
    loaderDelay: 600,
    scrollOffset: 80,
    backToTopThreshold: 400,
    animationRootMargin: "0px 0px -10% 0px",
    counterDuration: 2000,
    darkModeKey: "gauRakshak-theme",
  };

  /* ============================================
     DOM REFERENCES
     Cached selectors — populated on DOMContentLoaded
     ============================================ */
  const DOM = {
    html: document.documentElement,
    body: document.body,
    loader: null,
    navbar: null,
    navbarToggle: null,
    navbarNav: null,
    mobilePanel: null,
    mobileClose: null,
    dropdownToggle: null,
    dropdownItem: null,
    backToTop: null,
    animatedElements: null,
    counters: null,
  };

  /* ============================================
     PAGE LOADER
     Hides loader after page is ready
     ============================================ */
  const PageLoader = {
    init() {
      DOM.loader = document.getElementById("page-loader");
      if (!DOM.loader) return;

      DOM.body.classList.add("is-loading");

      window.addEventListener("load", () => {
        setTimeout(() => {
          PageLoader.hide();
        }, AppConfig.loaderDelay);
      });
    },

    hide() {
      if (!DOM.loader) return;

      DOM.loader.classList.add("is-hidden");
      DOM.body.classList.remove("is-loading");
    },
  };

  /* ============================================
     DARK MODE PLACEHOLDER
     Theme toggle — full implementation in ui.js
     ============================================ */
  const DarkMode = {
    init() {
      const savedTheme = localStorage.getItem(AppConfig.darkModeKey);
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (savedTheme) {
        DOM.html.setAttribute("data-theme", savedTheme);
      } else if (prefersDark) {
        DOM.html.setAttribute("data-theme", "dark");
      }

      /* Toggle button wiring handled in ui.js */
    },

    toggle() {
      const current = DOM.html.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";

      DOM.html.setAttribute("data-theme", next);
      localStorage.setItem(AppConfig.darkModeKey, next);
    },

    getTheme() {
      return DOM.html.getAttribute("data-theme") || "light";
    },
  };

  /* ============================================
     NAVIGATION PLACEHOLDER
     Active link highlighting and mobile menu shell
     ============================================ */
  const Navigation = {
    init() {
      DOM.navbar = document.querySelector(".navbar");
      DOM.navbarToggle = document.querySelector(".navbar__toggle");
      DOM.navbarNav = document.querySelector(".navbar__nav");
      DOM.mobilePanel = document.getElementById("mobile-nav");
      DOM.mobileClose = document.querySelector(".mobile-menu__close");
      DOM.dropdownToggle = document.querySelector(".navbar__item--dropdown .navbar__link--button");
      DOM.dropdownItem = document.querySelector(".navbar__item--dropdown");

      Navigation.setActiveLink();
      Navigation.bindMobileToggle();
      Navigation.bindDropdown();
      Navigation.bindGlobalClose();
    },

    setActiveLink() {
      const currentPath = window.location.pathname.split("/").pop() || "index.html";
      const navLinks = document.querySelectorAll(".navbar__link[href], .mobile-menu__link");

      navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        if (!href) return;

        const linkPath = href.split("/").pop();
        link.classList.toggle("is-active", linkPath === currentPath);
      });
    },

    bindMobileToggle() {
      if (!DOM.navbarToggle || !DOM.mobilePanel) return;

      DOM.navbarToggle.addEventListener("click", () => {
        const isOpen = DOM.mobilePanel.classList.contains("is-open");
        if (isOpen) {
          Navigation.closeMobileMenu();
        } else {
          Navigation.openMobileMenu();
        }
      });

      if (DOM.mobileClose) {
        DOM.mobileClose.addEventListener("click", Navigation.closeMobileMenu);
      }

      DOM.mobilePanel.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", Navigation.closeMobileMenu);
      });
    },

    openMobileMenu() {
      if (!DOM.mobilePanel || !DOM.navbarToggle) return;

      DOM.mobilePanel.classList.add("is-open");
      DOM.mobilePanel.setAttribute("aria-hidden", "false");
      DOM.navbarToggle.setAttribute("aria-expanded", "true");
    },

    closeMobileMenu() {
      if (DOM.mobilePanel) {
        DOM.mobilePanel.classList.remove("is-open");
        DOM.mobilePanel.setAttribute("aria-hidden", "true");
      }

      if (DOM.navbarToggle) {
        DOM.navbarToggle.setAttribute("aria-expanded", "false");
      }
    },

    bindDropdown() {
      if (!DOM.dropdownToggle || !DOM.dropdownItem) return;

      DOM.dropdownToggle.addEventListener("click", () => {
        const isOpen = DOM.dropdownItem.classList.toggle("is-open");
        DOM.dropdownToggle.setAttribute("aria-expanded", String(isOpen));
      });
    },

    closeDropdown() {
      if (!DOM.dropdownItem || !DOM.dropdownToggle) return;

      DOM.dropdownItem.classList.remove("is-open");
      DOM.dropdownToggle.setAttribute("aria-expanded", "false");
    },

    bindGlobalClose() {
      document.addEventListener("click", (event) => {
        if (DOM.navbar && !DOM.navbar.contains(event.target)) {
          Navigation.closeMobileMenu();
          Navigation.closeDropdown();
        }
      });

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          Navigation.closeMobileMenu();
          Navigation.closeDropdown();
        }
      });
    },
  };

  /* ============================================
     SCROLL PLACEHOLDER
     Scroll-based behaviors — back-to-top, header state
     ============================================ */
  const Scroll = {
    init() {
      DOM.backToTop = document.getElementById("back-to-top");

      window.addEventListener("scroll", Scroll.onScroll, { passive: true });
      Scroll.onScroll();

      if (DOM.backToTop) {
        DOM.backToTop.addEventListener("click", Scroll.scrollToTop);
      }
    },

    onScroll() {
      const scrollY = window.scrollY;

      /* Back to top visibility */
      if (DOM.backToTop) {
        DOM.backToTop.classList.toggle(
          "is-visible",
          scrollY > AppConfig.backToTopThreshold
        );
      }

      /* Navbar scrolled state — styled in future iterations */
      if (DOM.navbar) {
        DOM.navbar.classList.toggle("is-scrolled", scrollY > AppConfig.scrollOffset);
      }
    },

    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  };

  /* ============================================
     ANIMATION PLACEHOLDER
     Delegates to animations.js IntersectionObserver
     ============================================ */
  const Animation = {
    init() {
      if (typeof window.GRBAnimations !== "undefined") {
        window.GRBAnimations.init({
          rootMargin: AppConfig.animationRootMargin,
        });
      }
    },
  };

  /* ============================================
     COUNTER PLACEHOLDER
     Animated number counters — content added later
     Usage: data-counter="100" data-counter-suffix="+"
     ============================================ */
  const Counter = {
    init() {
      DOM.counters = document.querySelectorAll("[data-counter]");
      if (!DOM.counters.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              Counter.animate(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      DOM.counters.forEach((el) => observer.observe(el));
    },

    animate(element) {
      const target = parseInt(element.getAttribute("data-counter"), 10);
      const suffix = element.getAttribute("data-counter-suffix") || "";
      const prefix = element.getAttribute("data-counter-prefix") || "";
      const duration = AppConfig.counterDuration;
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * target);

        element.textContent = `${prefix}${current}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }

      requestAnimationFrame(update);
    },
  };

  /* ============================================
     BACK TO TOP PLACEHOLDER
     Initialized within Scroll module
     ============================================ */
  const BackToTop = {
    init() {
      /* Handled by Scroll.init() — kept as named module for clarity */
    },
  };

  /* ============================================
     APP BOOTSTRAP
     ============================================ */
  function initApp() {
    PageLoader.init();
    DarkMode.init();
    Navigation.init();
    Scroll.init();
    Animation.init();
    Counter.init();
    BackToTop.init();

    /* Expose public API for ui.js and future modules */
    window.GRBApp = {
      config: AppConfig,
      darkMode: DarkMode,
      navigation: Navigation,
      scroll: Scroll,
    };
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }
})();
