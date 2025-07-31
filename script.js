const translations = {
  en: {
    title: "Anatolii's Portfolio",
    header: "Hi, I'm Anatolii 👋",
    subheader: "Aspiring Full-Stack Developer",
    "about-title": "About Me",
    "about-text": "I'm from Ukraine and study web development at Mate Academy.",
    "contact-title": "Contact",
    footer: "© 2025 Anatolii Ovchinnikov"
  },
  ua: {
    title: "Портфоліо Анатолія",
    header: "Привіт, я Анатолій 👋",
    subheader: "Майбутній Full-Stack розробник",
    "about-title": "Про мене",
    "about-text": "Я з України, вивчаю веброзробку в Mate Academy.",
    "contact-title": "Контакти",
    footer: "© 2025 Анатолій Овчинников"
  }
};

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });
}

// Встановлюємо мову за замовчуванням при завантаженні сторінки
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  setLanguage(savedLang);
});