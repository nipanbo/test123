import type { Directive } from "vue";

const observer =
  typeof window === "undefined"
    ? null
    : new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer?.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
      );

export const reveal: Directive<HTMLElement> = {
  mounted(element) {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !observer) {
      element.classList.add("is-visible");
      return;
    }
    observer.observe(element);
  },
  unmounted(element) {
    observer?.unobserve(element);
  },
};
