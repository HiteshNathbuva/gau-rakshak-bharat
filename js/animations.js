/**
 * GauRakshak Bharat — Animations Module
 * ----------------------------------------
 * Scroll-triggered animations and interactive motion effects.
 * Loaded before script.js; initialized by GRBApp.
 */

(function () {
  "use strict";

  let observer = null;

  /* ============================================
     SCROLL-TRIGGERED ANIMATIONS
     Observes [data-animate] elements
     ============================================ */
  function initScrollAnimations(options = {}) {
    const animatedElements = document.querySelectorAll("[data-animate]");
    if (!animatedElements.length) return;

    const config = {
      root: null,
      rootMargin: options.rootMargin || "0px 0px -10% 0px",
      threshold: 0.15,
    };

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, config);

    animatedElements.forEach((el) => observer.observe(el));
  }

  /* ============================================
     RIPPLE EFFECT
     Adds material-style ripple on click
     Usage: add class "ripple-container" to button
     ============================================ */
  function initRippleEffect() {
    const rippleContainers = document.querySelectorAll(".ripple-container");

    rippleContainers.forEach((container) => {
      container.addEventListener("click", (event) => {
        const rect = container.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        const ripple = document.createElement("span");
        ripple.className = "ripple-effect";
        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        container.appendChild(ripple);

        ripple.addEventListener("animationend", () => ripple.remove());
      });
    });
  }

  /* ============================================
     STAGGER CHILDREN
     Applies sequential delay to child elements
     Usage: data-stagger on parent container
     ============================================ */
  function initStaggerGroups() {
    const staggerGroups = document.querySelectorAll("[data-stagger]");

    staggerGroups.forEach((group) => {
      const children = group.children;
      Array.from(children).forEach((child, index) => {
        child.setAttribute("data-animate-delay", String(index + 1));
      });
    });
  }

  /* ============================================
     PUBLIC API
     ============================================ */
  window.GRBAnimations = {
    init(options) {
      initStaggerGroups();
      initScrollAnimations(options);
      initRippleEffect();
    },

    refresh() {
      if (observer) {
        observer.disconnect();
      }
      initScrollAnimations();
    },
  };
})();
