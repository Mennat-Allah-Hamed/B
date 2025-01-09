function toggleMenu() {
  const sideMenu = document.querySelector('.side-menu');
  const toggleBtn = document.querySelector('.toggle-menu');
  const toggleBtnRect = toggleBtn.getBoundingClientRect();
  
  sideMenu.style.top = `75px`; 
  sideMenu.classList.toggle('active');
}
function toggleDropdown(event) {
  event.preventDefault(); // منع السلوك الافتراضي للنقر
  const dropdown = event.target.closest('.dropdown'); // العنصر الذي يحتوي على القائمة الفرعية
  const isActive = dropdown.classList.contains('active');

  // إغلاق جميع القوائم المفتوحة الأخرى
  document.querySelectorAll('.menu-1 .dropdown').forEach(d => d.classList.remove('active'));

  // إذا لم تكن القائمة الحالية مفعّلة، فعّلها
  if (!isActive) {
    dropdown.classList.add('active');
  }
}
document.addEventListener('click', function (event) {
  const dropdown = document.querySelector('.dropdown.active');
  if (dropdown && !dropdown.contains(event.target)) {
    dropdown.classList.remove('active');
  }
});




const text = "رحلتك تبدأ من هنا"; 
const speed = 150; 
const delay = 2000; 

function typeWriter() {
  const titleElement = document.getElementById("animated-title");
  let i = 0;
  titleElement.textContent = ""; 

  function type() {
    if (i < text.length) {
      titleElement.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      setTimeout(() => {
        titleElement.textContent = ""; 
        i = 0; 
        type(); 
      }, delay);
    }
  }

  type();
}
typeWriter();
const welcomeText = "مرحبًا بك في Bluemark";
const welcomeSpeed = 150;

function typeWelcome() {
  const welcomeElement = document.getElementById("animated-welcome");
  let i = 0;
  welcomeElement.textContent = "";

  function type() {
    if (i < welcomeText.length) {
      welcomeElement.textContent += welcomeText.charAt(i);
      i++;
      setTimeout(type, welcomeSpeed);
    }
  }

  type();
}

typeWelcome();

const container = document.querySelector('.container-op');
const servicesContainer = document.querySelector('.services-container');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

if (container && servicesContainer && leftArrow && rightArrow) {
  leftArrow.addEventListener('click', () => {
    container.scrollLeft += 220; 
  });

  rightArrow.addEventListener('click', () => {
    container.scrollLeft -= 220; 
  });
}

document.addEventListener("DOMContentLoaded", () => {
  function setupScroll(containerId, leftArrowId, rightArrowId) {
      const container = document.getElementById(containerId);
      const leftArrow = document.getElementById(leftArrowId);
      const rightArrow = document.getElementById(rightArrowId);

      const scrollAmount = 220; // 

      rightArrow.addEventListener("click", () => {
          container.scrollLeft -= scrollAmount;
      });

      leftArrow.addEventListener("click", () => {
          container.scrollLeft += scrollAmount;
      });
  }

  setupScroll("marketing-container", "marketing-left", "marketing-right");
  setupScroll("other-container", "other-left", "other-right");
});



window.addEventListener('scroll', () => {
const fixedMen = document.querySelector('.fixed-men');

if (window.scrollY > 50) { 
  fixedMen.classList.add('scrolled');
} else {
  fixedMen.classList.remove('scrolled');
}
});


window.onload = function () {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 20,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 4,
        },
        480: {
          slidesPerView: 1,
        },
        300: {
          slidesPerView: 1,
        },
      },
    });
  };
  

  const scrollToTopButton = document.getElementById("scrollToTop");

  window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopButton.classList.add("show");
  } else {
    scrollToTopButton.classList.remove("show");
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth" 
  });
});
