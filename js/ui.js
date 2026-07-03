/**
 * GauRakshak Bharat — UI Module
 * --------------------------------
 * User interface interactions: theme toggle, modals, forms, etc.
 * Depends on: script.js (GRBApp global)
 */

(function () {
  "use strict";

  /* ============================================
     DOM REFERENCES
     ============================================ */
  const UI = {
    themeToggle: null,
    mobileNavLinks: null,
  };

  /* ============================================
     DARK MODE TOGGLE
     Wires the theme toggle button to GRBApp.darkMode
     ============================================ */
  function initThemeToggle() {
    UI.themeToggle = document.getElementById("theme-toggle");
    if (!UI.themeToggle) return;

    UI.themeToggle.addEventListener("click", () => {
      if (window.GRBApp && window.GRBApp.darkMode) {
        window.GRBApp.darkMode.toggle();
        updateThemeToggleLabel();
      }
    });

    updateThemeToggleLabel();
  }

  function updateThemeToggleLabel() {
    if (!UI.themeToggle || !window.GRBApp) return;

    const isDark = window.GRBApp.darkMode.getTheme() === "dark";
    UI.themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    UI.themeToggle.setAttribute("aria-pressed", String(isDark));
  }

  /* ============================================
     MOBILE NAV — CLOSE ON LINK CLICK
     ============================================ */
  function initMobileNavClose() {
    UI.mobileNavLinks = document.querySelectorAll(".navbar__nav .navbar__link");

    UI.mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (window.GRBApp && window.GRBApp.navigation) {
          window.GRBApp.navigation.closeMobileMenu();
        }
      });
    });
  }

  /* ============================================
     SMOOTH ANCHOR SCROLLING
     Handles in-page #anchor links
     ============================================ */
  function initSmoothAnchors() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");
        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  /* ============================================
     FORM PLACEHOLDER
     Basic form validation shell — expand per form
     ============================================ */
  function initFormPlaceholders() {
    const forms = document.querySelectorAll("[data-form]");

    forms.forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        /* Form handling logic will be added per page */
      });
    });
  }

  /* ============================================
     MODAL PLACEHOLDER
     Shell for future modal dialogs
     Usage: data-modal-open="modal-id" / data-modal-close
     ============================================ */
  function initModalPlaceholders() {
    const openTriggers = document.querySelectorAll("[data-modal-open]");
    const closeTriggers = document.querySelectorAll("[data-modal-close]");

    openTriggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const modalId = trigger.getAttribute("data-modal-open");
        const modal = document.getElementById(modalId);
        if (modal) {
          modal.classList.add("is-open");
          modal.setAttribute("aria-hidden", "false");
        }
      });
    });

    closeTriggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const modal = trigger.closest("[data-modal]");
        if (modal) {
          modal.classList.remove("is-open");
          modal.setAttribute("aria-hidden", "true");
        }
      });
    });
  }

  /* ============================================
     BOOTSTRAP
     ============================================ */
  function initUI() {
    initThemeToggle();
    initMobileNavClose();
    initSmoothAnchors();
    initFormPlaceholders();
    initModalPlaceholders();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initUI);
  } else {
    initUI();
  }

  window.GRBUI = {
    refreshThemeLabel: updateThemeToggleLabel,
  };
})();
