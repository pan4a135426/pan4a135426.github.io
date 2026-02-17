const words = [
  "Frontend разработчик",
  "UI дизайнер",
  "Студент IT"
];

let index = 0;
const typed = document.getElementById("typed");

setInterval(() => {
  typed.textContent = words[index];
  index = (index + 1) % words.length;
}, 2000);

// Активная секция
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    const top = window.scrollY;
    if (top >= sec.offsetTop - 150) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === `#${current}`) {
      a.classList.add("active");
    }
  });
});

// Форма
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("formStatus").textContent =
    "✅ Сообщение отправлено!";
});
