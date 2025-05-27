document.addEventListener("DOMContentLoaded", () => {
  const swiperDiv = document.querySelector(".swiper-div");
  const leftIcon = document.querySelector(".left-icon");
  const rightIcon = document.querySelector(".right-icon");
  if (!swiperDiv || !leftIcon || !rightIcon) return;
  const scrollAmount = 1200;
  leftIcon.addEventListener("click", () => {
    swiperDiv.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });
  rightIcon.addEventListener("click", () => {
    swiperDiv.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
});
const mediaQuery = window.matchMedia("(max-width: 768px)");
let autoScrollInterval = null;
let interactionTimeout = null;
let isUserInteracting = false;
let swiperDiv = null;

function startAutoScroll() {
  stopAutoScroll(); // Prevent multiple intervals

  autoScrollInterval = setInterval(() => {
    if (!isUserInteracting && swiperDiv) {
      const nearEnd =
        Math.ceil(swiperDiv.scrollLeft + swiperDiv.clientWidth) >= swiperDiv.scrollWidth - 10;
      if (nearEnd) {
        swiperDiv.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        swiperDiv.scrollBy({ left: 130, behavior: "smooth" });
      }
    }
  }, 3000);
}

function stopAutoScroll() {
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval);
    autoScrollInterval = null;
  }
}

function handleUserInteraction() {
  isUserInteracting = true;
  stopAutoScroll();

  clearTimeout(interactionTimeout);
  interactionTimeout = setTimeout(() => {
    isUserInteracting = false;
    startAutoScroll();
  }, 4000);
}

function setupMobileSwiperAutoScroll() {
  swiperDiv = document.querySelector(".swiper-div");
  if (!swiperDiv) return;

  // Clean existing listeners if any
  swiperDiv.removeEventListener("touchstart", handleUserInteraction);
  swiperDiv.removeEventListener("touchend", handleUserInteraction);
  swiperDiv.removeEventListener("scroll", handleUserInteraction);

  swiperDiv.addEventListener("touchstart", handleUserInteraction, { passive: true });
  swiperDiv.addEventListener("touchend", handleUserInteraction, { passive: true });
  swiperDiv.addEventListener("scroll", handleUserInteraction, { passive: true });

  startAutoScroll();
}

// Handle initial load
if (mediaQuery.matches) {
  setupMobileSwiperAutoScroll();
}

// React to screen size changes
mediaQuery.addEventListener("change", (e) => {
  if (e.matches) {
    setupMobileSwiperAutoScroll();
  } else {
    stopAutoScroll();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const bikes = [
    {
      image: "./frontend/assets/Untitled-1 copy.png",
      title: "Power Sport-SL",
      desc: "High-performance electric moped with smart tech.",
      range: "45 kms",
      battery: "lead Acid 12v 28Ah",
      motor: "7000W",
    },
    {
      image: "./frontend/assets/Untitled-1 copy.png",
      title: "RSV-4",
      desc: "Eco-friendly design with long-range capability.",
      range: "45 kms",
      battery: "lead Acid 12v 28Ah",
      motor: "6500W",
    },
    {
      image: "./frontend/assets/Untitled-1 copy.png",
      title: "Eco-ZLR3",
      desc: "Ideal for city commutes with lightweight frame.",
      range: "45 kms",
      battery: "lead Acid 12v 28Ah",
      motor: "5000W",
    },

     {
      image: "./frontend/assets/Untitled-1 copy.png",
      title: "Active-CS",
      desc: "Ideal for city commutes with lightweight frame.",
      range: "45 kms",
      battery: "lead Acid 12v 28Ah",
      motor: "5000W",
    },

  ];
  const container = document.getElementById("bikeCards");
  bikes.forEach((bike) => {
    const card = document.createElement("div");
    card.className = "bike-card";
    card.setAttribute("data-aos", "fade-up");
    card.setAttribute("data-aos-duration", "1000");
    card.innerHTML = `
      <img src="${bike.image}" alt="${bike.title}" />
      <div class="bike-title">${bike.title}</div>
      <div class="bike-desc">${bike.desc}</div>
      <div class="specs">
        <div class="spec-box">
          <h4>Range</h4>
          <strong>${bike.range}</strong>
        </div>
        <div class="spec-box">
          <h4>Motor</h4>
          <strong>${bike.motor}</strong>
        </div>
        <div class="spec-box">
          <h4>Battery</h4>
          <strong>${bike.battery}</strong>
        </div>
      </div>
      <button class="order-btn"><a href="">Contact Now</a></button>
    `;
    container.appendChild(card);
  });
});
gsap.from(".logo,.nav-links a,#contact", {
  y: -50,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out",
});
// gsap.from(".image-content", {
//   x: -800,
//   scale: 0,
//   duration: 2,
//   ease: "smooth",
//   opacity: 0,
// });
gsap.from(".info-box", {
  x: 100,
  opacity: 0,
  duration: 0.3,
  stagger: 0.2,
  ease: "bounce.out",
  delay: 2,
});
function toggleMenu() {
  const menu = document.getElementById("nav-menu");
  menu.classList.toggle("active");
}
var menu = document.querySelector(".menu-icon");
var close = document.querySelector(".ri-close-line");
var tl = gsap.timeline();
tl.to("#full", { top: 88, ease: "power4.inOut" });
tl.pause();
menu.addEventListener("click", function () {
  tl.play();
});
close.addEventListener("click", function () {
  tl.reverse();
});

body = document.querySelector("body");
body.addEventListener("click", function (e) {
  if (!e.target.closest(".menu-icon") && !e.target.closest("#nav-menu")) {
    tl.reverse();
  }
});