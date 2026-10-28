const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const navLinks = [...document.querySelectorAll(".main-nav a")];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 32);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const closeNavigation = () => {
  menuToggle.setAttribute("aria-expanded", "false");
  mainNav.classList.remove("is-open");
  document.body.classList.remove("menu-open");
};

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  mainNav.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

navLinks.forEach((link) => link.addEventListener("click", closeNavigation));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeNavigation();
});

if (!reduceMotion) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
  );

  document.querySelectorAll(".reveal:not(.hero .reveal)").forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
}

const filterButtons = document.querySelectorAll("[data-filter]");
const dishes = document.querySelectorAll("[data-category]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => {
      item.classList.toggle("is-active", item === button);
      item.setAttribute("aria-selected", String(item === button));
    });

    const filter = button.dataset.filter;
    dishes.forEach((dish) => {
      dish.classList.toggle("is-hidden", filter !== "all" && dish.dataset.category !== filter);
    });
  });
});

const toast = document.querySelector("[data-toast]");
let toastTimer;

const showToast = (message) => {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
};

document.querySelectorAll(".favorite").forEach((button) => {
  button.addEventListener("click", () => {
    const isActive = button.getAttribute("aria-pressed") === "true";
    button.setAttribute("aria-pressed", String(!isActive));
    button.classList.toggle("is-active", !isActive);
    showToast(isActive ? "已取消收藏" : "已收藏这道菜");
  });
});

const dateInput = document.querySelector("[data-date]");
const today = new Date();
const offset = today.getTimezoneOffset();
const localToday = new Date(today.getTime() - offset * 60 * 1000).toISOString().split("T")[0];
dateInput.min = localToday;
dateInput.value = localToday;

const reservationForm = document.querySelector("[data-reservation-form]");
const successDialog = document.querySelector("[data-success-dialog]");
const dialogMessage = document.querySelector("[data-dialog-message]");

reservationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!reservationForm.checkValidity()) {
    reservationForm.reportValidity();
    return;
  }

  const formData = new FormData(reservationForm);
  const date = new Date(`${formData.get("date")}T12:00:00`);
  const formattedDate = new Intl.DateTimeFormat("zh-CN", {
    month: "long",
    day: "numeric",
    weekday: "short",
  }).format(date);

  dialogMessage.textContent = `已记录：${formattedDate} ${formData.get("time")}，${formData.get("guests")}。我们会尽快致电确认。`;
  successDialog.showModal();
  reservationForm.reset();
  dateInput.value = localToday;
});

document.querySelectorAll("[data-dialog-close]").forEach((button) => {
  button.addEventListener("click", () => successDialog.close());
});

successDialog.addEventListener("click", (event) => {
  if (event.target === successDialog) successDialog.close();
});
