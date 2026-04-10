// Плавный скролл по кнопкам
document.querySelectorAll("[data-scroll]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-scroll");
    if (!target) return;
    const el = document.querySelector(target);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Лёгкая подсветка нажатий
document.querySelectorAll("a.btn, button.btn, .toc__item").forEach((el) => {
  el.addEventListener("click", () => {
    const prev = el.style.boxShadow;
    el.style.boxShadow = "0 0 0 2px rgba(99, 102, 241, 0.45)";
    setTimeout(() => {
      el.style.boxShadow = prev;
    }, 350);
  });
});

// Яндекс.Карты (конструктор): подключаем внешний скрипт
(() => {
  const src =
    "https://api-maps.yandex.ru/services/constructor/1.0/js/?" +
    "um=constructor%3Ad34c67cfe53c2dc4cfca9942e1c09650f005eecd3da9ec085e10e524b7c71642" +
    "&width=100%25" +
    "&height=600" +
    "&lang=ru_RU" +
    "&scroll=true";

  if (document.querySelector(`script[src="${src}"]`)) return;

  const s = document.createElement("script");
  s.type = "text/javascript";
  s.charset = "utf-8";
  s.async = true;
  s.src = src;
  const mount = document.getElementById("yandexMap");
  (mount ?? document.body).appendChild(s);
})();

