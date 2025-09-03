document.addEventListener("DOMContentLoaded", () => {
  // 1️⃣ Sticky header background on scroll
  const header = document.querySelector(".header__nav");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  const scrollLink = document.getElementById("scrollToHome");

  scrollLink.addEventListener("click", (e) => {
    e.preventDefault(); // prevent default anchor jump
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const burger = document.querySelector(".header__burger");
  const mobileMenu = document.querySelector(".header__menu_mobile");

  burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    burger.classList.toggle("open"); // animate burger into X
  });

  // 2️⃣ Block toggle logic
  const block1 = document.getElementById("block1");
  const block2 = document.getElementById("block2");

  function activateBlock(active, inactive) {
    active.classList.add("active");
    active.classList.remove("inactive");

    inactive.classList.add("inactive");
    inactive.classList.remove("active");
  }

  if (block1 && block2) {
    // Initial state
    activateBlock(block1, block2);

    block1.addEventListener("click", () => {
      if (!block1.classList.contains("active")) {
        activateBlock(block1, block2);
      }
    });

    block2.addEventListener("click", () => {
      if (!block2.classList.contains("active")) {
        activateBlock(block2, block1);
      }
    });
  }

  const scrollButton = document.querySelector(".hero__button_show_more");
  const section2 = document.querySelector("#section2");

  if (scrollButton && section2) {
    scrollButton.addEventListener("click", () => {
      const sectionTop = section2.getBoundingClientRect().top + window.scrollY;
      const offset = window.innerHeight * 0.15; // adjust 15vh
      const scrollPosition = sectionTop - offset;

      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    });
  }
});
