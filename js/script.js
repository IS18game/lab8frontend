document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("burger-toggle");
  const links = document.querySelectorAll(".nav-links a");

  links.forEach(link => {
    link.addEventListener("click", () => {
      toggle.checked = false;
    });
  });
});

toggle.addEventListener("change", () => {
  const burger = document.querySelector(".burger");
  burger.setAttribute("aria-expanded", toggle.checked);
});
