//Header Section
const searchToggleBtn = document.getElementById("searchToggleBtn");
const searchBar = document.getElementById("searchBar");
const closeSearch = document.getElementById("closeSearch");

// Offcanvas element
const offcanvasElement = document.getElementById("offcanvasNavbar");
const offcanvasInstance =
  bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);

// When clicking search button
searchToggleBtn.addEventListener("click", () => {
  // Close offcanvas (if open)
  offcanvasInstance.hide();

  // Then open search bar
  setTimeout(() => {
    searchBar.classList.add("active");
  }, 50); // delay for smooth animation
});

// Close search bar
closeSearch.addEventListener("click", () => {
  searchBar.classList.remove("active");
});

// Explore section
const swiper = new Swiper("#explore-slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
  },
});


