const buttons = document.querySelectorAll("[data-filter]");
const products = document.querySelectorAll("[data-product]");

const overlay = document.querySelector(".overlay");
const openBtn = document.querySelector("#open-btn");
const closeBtn = document.querySelector("#close-btn");
const mobileMenu = document.querySelector("#mobile-navigation");

openBtn.addEventListener("click", () => {
  mobileMenu.classList.replace("slide-out", "slide-in");
  overlay.classList.replace("overlay-out", "overlay-in");
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.replace("slide-in", "slide-out");
  overlay.classList.replace("overlay-in", "overlay-out");
  document.body.style.overflow = "scroll";
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((el) => {
      el.classList.remove("active");
    });
    products.forEach((product) => {
      const isMatch = button.dataset.filter === product.dataset.product;
      if (button.dataset.filter === "all") {
        product.classList.remove("fade-out");
        product.classList.add("fade-in");
      } else {
        product.classList.toggle("fade-in", isMatch);
        product.classList.toggle("fade-out", !isMatch);
      }
    });
    button.classList.add("active");
  });
});
