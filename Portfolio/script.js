function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  document.addEventListener("DOMContentLoaded", () => {
    const name = "Gatti Lakshmi Prasad Kowsik";
    const container = document.getElementById("animated-name");
  
    let index = 0;
    let isDeleting = false;
  
    function typeEffect() {
      if (!isDeleting) {
        container.textContent = name.slice(0, index);
        index++;
        if (index > name.length) {
          isDeleting = true;
          setTimeout(typeEffect, 1000); // pause before deleting
          return;
        }
      } else {
        container.textContent = name.slice(0, index);
        index--;
        if (index < 0) {
          isDeleting = false;
          setTimeout(typeEffect, 500); // pause before retyping
          return;
        }
      }
      setTimeout(typeEffect, isDeleting ? 50 : 150); // decrease delay for smoother transition
    }
  
    typeEffect();
  });
  