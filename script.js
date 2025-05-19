//  const rightIcon = document.querySelector(".ri-arrow-right-s-line");
//  const leftIcon = document.querySelector(".ri-arrow-left-s-line");
//   const swiperDiv = document.querySelector(".swiper-div");

//   rightIcon.addEventListener("click", function () {
//     swiperDiv.scrollBy({
//       left: 1200,
//       behavior: "smooth"
//     });
//   });

   

//   leftIcon.addEventListener("click", function () {
//     swiperDiv.scrollBy({
//       left: -1200,
//       behavior: "smooth"
//     }); 
//   });

//   setInterval(()=>{
//     swiperDiv.scrollBy({
//       left: 1200,
//       behavior: "smooth"
//     });
//   },5000)

// const swiperDiv = document.querySelector(".swiper-div");



//   const isMobile = window.matchMedia("(max-width: 768px)").matches;

//   if (isMobile) {
//     const swiperDiv = document.querySelector(".swiper-div");
//     let autoScrollInterval;
//     let isUserInteracting = false;

//     const startAutoScroll = () => {
//       autoScrollInterval = setInterval(() => {
//         if (!isUserInteracting) {
//           const nearEnd =swiperDiv.scrollLeft + swiperDiv.clientWidth >=swiperDiv.scrollWidth - 10;

//           if (nearEnd) {
//             // Reset to start smoothly
//             swiperDiv.scrollTo({ left: 0, behavior: "smooth" });
//           } else {
//             // Scroll forward
//             swiperDiv.scrollBy({ left: 130, behavior: "smooth" });
//           }
//         }
//       }, 3000);
//     };

//     const stopAutoScroll = () => clearInterval(autoScrollInterval);

//     // Detect user scroll or touch interaction
//     swiperDiv.addEventListener("touchstart", () => {
//       isUserInteracting = true;
//       stopAutoScroll();
//     });

//     swiperDiv.addEventListener("touchend", () => {
//       isUserInteracting = false;
//       startAutoScroll();
//     });

//     swiperDiv.addEventListener("scroll", () => {
//       if (isUserInteracting) stopAutoScroll();
//     });

//     startAutoScroll();
//   }



// const swiperDiv = document.querySelector(".swiper-div");
//    const isDesktop = window.matchMedia("(min-width: 769px)").matches;

// if (isDesktop) {
//    let autoScrollInterval1;
//     let isUserInteracting = false;

//     const startAutoScroll = () => {
//       autoScrollInterval1 = setInterval(() => {
//         if (!isUserInteracting) {
//           const nearEnd =
//             swiperDiv.scrollLeft + swiperDiv.clientWidth >=
//             swiperDiv.scrollWidth - 10;

//           if (nearEnd) {
//             // Reset to start smoothly
//             swiperDiv.scrollTo({ left: 0, behavior: "smooth" });
//           } else {
//             // Scroll forward
//             swiperDiv.scrollBy({ left: 1200, behavior: "smooth" });
//           }
//         }
//       }, 3000);
//     };

//     const stopAutoScroll = () => clearInterval(autoScrollInterval1);

//     // Detect user scroll or touch interaction
//     swiperDiv.addEventListener("touchstart", () => {
//       isUserInteracting = true;
//       stopAutoScroll();
//     });

//     swiperDiv.addEventListener("touchend", () => {
//       isUserInteracting = false;
//       startAutoScroll();
//     });

//     swiperDiv.addEventListener("scroll", () => {
//       if (isUserInteracting) stopAutoScroll();
//     });

//     startAutoScroll();



// }

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

function setupMobileSwiperAutoScroll() {
  const swiperDiv = document.querySelector(".swiper-div");
  if (!swiperDiv) return;

  let autoScrollInterval;
  let isUserInteracting = false;
  let interactionTimeout;

  const startAutoScroll = () => {
    stopAutoScroll(); // clear any previous interval
    autoScrollInterval = setInterval(() => {
      if (!isUserInteracting) {
        const nearEnd =
          swiperDiv.scrollLeft + swiperDiv.clientWidth >= swiperDiv.scrollWidth - 10;

        if (nearEnd) {
          swiperDiv.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          swiperDiv.scrollBy({ left: 130, behavior: "smooth" });
        }
      }
    }, 3000);
  };

  const stopAutoScroll = () => {
    clearInterval(autoScrollInterval);
    autoScrollInterval = null;
  };

  const handleUserInteraction = () => {
    isUserInteracting = true;
    stopAutoScroll();
    clearTimeout(interactionTimeout);
    interactionTimeout = setTimeout(() => {
      isUserInteracting = false;
      startAutoScroll();
    }, 4000); // Wait 4 seconds after interaction ends
  };

  swiperDiv.addEventListener("touchstart", handleUserInteraction, { passive: true });
  swiperDiv.addEventListener("touchend", handleUserInteraction, { passive: true });
  swiperDiv.addEventListener("scroll", handleUserInteraction, { passive: true });

  startAutoScroll();
}

// Initial check
if (mediaQuery.matches) {
  setupMobileSwiperAutoScroll();
}

// Optional: Re-evaluate when screen size changes
mediaQuery.addEventListener("change", (e) => {
  if (e.matches) {
    setupMobileSwiperAutoScroll();
  }
});




// const swiperDiv = document.querySelector(".swiper-div");
// const leftIcon = document.querySelector(".ri-arrow-left-s-line");
// const rightIcon = document.querySelector(".ri-arrow-right-s-line");

// let autoScrollInterval = null;
// let isUserInteracting = false;
// let interactionTimeout = null;

// // Desktop icon click scroll
// rightIcon?.addEventListener("click", () => {
//   swiperDiv.scrollBy({ left: 1200, behavior: "smooth" });
// });

// leftIcon?.addEventListener("click", () => {
//   swiperDiv.scrollBy({ left: -1200, behavior: "smooth" });
// });

// // Auto-scroll functions
// function startAutoScroll(scrollAmount) {
//   stopAutoScroll(); // Always clear previous
//   autoScrollInterval = setInterval(() => {
//     if (!isUserInteracting) {
//       const nearEnd = swiperDiv.scrollLeft + swiperDiv.clientWidth >= swiperDiv.scrollWidth - 10;
//       if (nearEnd) {
//         swiperDiv.scrollTo({ left: 0, behavior: "smooth" });
//       } else {
//         swiperDiv.scrollBy({ left: scrollAmount, behavior: "smooth" });
//       }
//     }
//   }, 3000);
// }

// function stopAutoScroll() {
//   clearInterval(autoScrollInterval);
//   autoScrollInterval = null;
// }

// function handleUserInteraction() {
//   isUserInteracting = true;
//   stopAutoScroll();
//   clearTimeout(interactionTimeout);
//   interactionTimeout = setTimeout(() => {
//     isUserInteracting = false;
//     // Restart auto-scroll depending on screen
//     setupAutoScroll();
//   }, 4000);
// }

// // Setup auto-scroll based on screen size
// function setupAutoScroll() {
//   const isMobile = window.matchMedia("(max-width: 768px)").matches;
//   const scrollAmount = isMobile ? 130 : 1200;
//   startAutoScroll(scrollAmount);
// }

// // Attach listeners for interaction
// function setupEventListeners() {
//   // Remove old to prevent duplication
//   swiperDiv.removeEventListener("touchstart", handleUserInteraction);
//   swiperDiv.removeEventListener("touchend", handleUserInteraction);
//   swiperDiv.removeEventListener("scroll", handleUserInteraction);
//   swiperDiv.removeEventListener("mousedown", handleUserInteraction);
//   swiperDiv.removeEventListener("mouseup", handleUserInteraction);

//   const isMobile = window.matchMedia("(max-width: 768px)").matches;

//   if (isMobile) {
//     swiperDiv.addEventListener("touchstart", handleUserInteraction, { passive: true });
//     swiperDiv.addEventListener("touchend", handleUserInteraction, { passive: true });
//   } else {
//     swiperDiv.addEventListener("mousedown", handleUserInteraction);
//     swiperDiv.addEventListener("mouseup", handleUserInteraction);
//   }

//   swiperDiv.addEventListener("scroll", handleUserInteraction, { passive: true });
// }

// // Media query listener for resize
// const mediaQuery = window.matchMedia("(max-width: 768px)");
// mediaQuery.addEventListener("change", () => {
//   stopAutoScroll();
//   setupAutoScroll();
//   setupEventListeners();
// });

// // Initial setup
// setupAutoScroll();
// setupEventListeners();


document.addEventListener("DOMContentLoaded", () => {
  const bikes = [
    {
      image: "./frontend/assets/bike-imge.png",
      title: "Sanjeevan BoltX",
      desc: "High-performance electric moped with smart tech.",
      range: "85 miles",
      battery: "72V 40Ah",
      motor: "7000W"
    },
    {
      image: "./frontend/assets/bike-imge.png",
      title: "EcoRide Pro",
      desc: "Eco-friendly design with long-range capability.",
      range: "90 miles",
      battery: "60V 45Ah",
      motor: "6500W"
    },
    {
      image: "./frontend/assets/bike-imge.png",
      title: "Urban Zip",
      desc: "Ideal for city commutes with lightweight frame.",
      range: "70 miles",
      battery: "48V 30Ah",
      motor: "5000W"
    }
  ];

  const container = document.getElementById("bikeCards");

  bikes.forEach((bike) => {
    const card = document.createElement("div");
    card.className = "bike-card";
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
          <h4>Battery</h4>
          <strong>${bike.battery}</strong>
        </div>
        <div class="spec-box">
          <h4>Motor</h4>
          <strong>${bike.motor}</strong>
        </div>
      </div>
      <button class="order-btn">Order Now</button>
    `;
    container.appendChild(card);
  });
});


gsap.from(".logo,.nav-links a,#contact",{
  y: -50,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out"
})

gsap.from(".image-content",{
  x:-800,
  scale: 0,
  duration: 2,
  ease: "smooth",
  opacity: 0,
})

gsap.from(".info-box",{
  x: 100,
  opacity: 0,
  duration:0.3,
  stagger: 0.2,
  ease: "bounce.out",
  delay: 2
})



    function toggleMenu() {
      const menu = document.getElementById('nav-menu');
      menu.classList.toggle('active');
 }


 var menu = document.querySelector(".menu-icon");
var close = document.querySelector(".ri-close-line");

var tl = gsap.timeline()

tl.to("#full",{
    top:100,
    ease:"elastic.out(1,0.5)"
})

// tl.from("#full h1",{
//     x:100,
//     opacity:0,
//     ease:"power2.out",
//     stagger:0.3
// })

tl.pause()

menu.addEventListener("click", function(){
   tl.play()
})

close.addEventListener("click", function(){
    tl.reverse()
})