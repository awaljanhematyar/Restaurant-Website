// =========================
// DOM ELEMENTS
// =========================

// Select the mobile menu button
const menuBtn = document.querySelector(".menu-btn");

// Select the navigation links container
const navLinks = document.querySelector(".nav-links");

// Select all navigation links
const links = document.querySelectorAll(".nav-links a");

// Select all sections
const sections = document.querySelectorAll("section");

// Select Back To Top button
const backToTop = document.querySelector("#backToTop");

// Select Dark Mode button
const themeBtn = document.querySelector("#themeBtn");

// Select navbar
const navbar = document.querySelector(".navbar");

// Select sections that have scroll animation
const animatedSections = document.querySelectorAll(".scroll-animation");

// Select menu container
const menuContainer = document.querySelector(".menu-container");

// Select food search input
const searchFood = document.querySelector("#searchFood");

// Select category filter
const categoryFilter = document.querySelector("#categoryFilter");

// Select price sorting
const priceSort = document.querySelector("#priceSort");

// Select "No food found" message
const noFood = document.querySelector("#noFood");

// =========================
// MOBILE MENU
// =========================

// Listen for click on mobile menu button
menuBtn.addEventListener("click", () => {
  // Add or remove the "active" class
  // This opens and closes the mobile menu
  navLinks.classList.toggle("active");
});

// =========================
// NAVIGATION LINKS
// =========================

// Loop through every navigation link
links.forEach((link) => {
  // Listen for link click
  link.addEventListener("click", () => {
    // Remove active class from all links
    links.forEach((item) => {
      item.classList.remove("active");
    });

    // Add active class to clicked link
    link.classList.add("active");

    // Close mobile menu
    navLinks.classList.remove("active");
  });
});

// =========================
// MENU DATA
// =========================

// Create an array containing restaurant foods
const menuItems = [
  // Food item 1
  {
    name: "Afghan Kebab",

    description: "Delicious grilled kebab with traditional spices.",

    price: 100,

    category: "kebab",

    image: "images/kebab.jpg",
  },

  // Food item 2
  {
    name: "Special Pizza",

    description: "Fresh pizza made with quality ingredients.",

    price: 200,

    category: "pizza",

    image: "images/pizza.jpg",
  },

  // Food item 3
  {
    name: "Afghan Bolani",

    description: "Traditional Afghan bread filled with vegetables.",

    price: 20,

    category: "bolani",

    image: "images/bolani.jpg",
  },

  // Food item 4
  {
    name: "Kabuli Pulao",

    description: "Traditional Afghan rice with carrots and raisins.",

    price: 180,

    category: "rice",

    image: "images/pulao.jpg",
  },
];

// =========================
// DISPLAY MENU
// =========================

// Function responsible for displaying food cards
function displayMenu(items) {
  // Clear old food cards
  menuContainer.innerHTML = "";

  // Check if no food exists
  if (items.length === 0) {
    // Show "No food found"
    noFood.style.display = "block";

    // Stop the function
    return;
  }

  // Hide "No food found"
  noFood.style.display = "none";

  // Loop through every food item
  items.forEach((item) => {
    // Add food card to HTML
    menuContainer.innerHTML += `

      <div class="food-card">

        <img
          src="${item.image}"
          alt="${item.name}"
        >

        <h3>
          ${item.name}
        </h3>

        <p>
          ${item.description}
        </p>

        <span>
          ${item.price} AF
        </span>

        <button
          class="order-btn"
          data-food="${item.name}"
        >
          Order Now
        </button>

      </div>

    `;
  });

  // Select all newly created order buttons
  document.querySelectorAll(".order-btn").forEach((button) => {
    // Add click event to every order button
    button.addEventListener("click", () => {
      // Send selected food to WhatsApp
      orderFood(button.dataset.food);
    });
  });
}

// =========================
// FILTER MENU
// =========================

// Function that searches, filters and sorts food
function filterMenu() {
  // Get search text
  const searchValue = searchFood.value.trim().toLowerCase();

  // Get selected category
  const category = categoryFilter.value;

  // Get selected sorting option
  const sort = priceSort.value;

  // Filter food items
  let filteredItems = menuItems.filter((item) => {
    // Check if food name matches search
    const matchesSearch = item.name.toLowerCase().includes(searchValue);

    // Check if category matches
    const matchesCategory = category === "all" || item.category === category;

    // Return only matching foods
    return matchesSearch && matchesCategory;
  });

  // =========================
  // PRICE SORTING
  // =========================

  // Low price to high price
  if (sort === "low") {
    filteredItems.sort((a, b) => a.price - b.price);
  }

  // High price to low price
  if (sort === "high") {
    filteredItems.sort((a, b) => b.price - a.price);
  }

  // Display final filtered list
  displayMenu(filteredItems);
}

// =========================
// SEARCH EVENT
// =========================

// Run filter every time user types
searchFood.addEventListener("input", filterMenu);

// =========================
// CATEGORY EVENT
// =========================

// Run filter when category changes
categoryFilter.addEventListener("change", filterMenu);

// =========================
// PRICE SORT EVENT
// =========================

// Run sorting when price option changes
priceSort.addEventListener("change", filterMenu);

// =========================
// INITIAL MENU
// =========================

// Display all foods when page starts
displayMenu(menuItems);

// =========================
// WHATSAPP ORDER
// =========================

// Function for ordering food through WhatsApp
function orderFood(foodName) {
  // Restaurant WhatsApp number
  const phoneNumber = "93782767734";

  // Create order message
  const message = "Hello Jan Brothers Restaurant, I want to order " + foodName;

  // Create WhatsApp URL
  const whatsappURL =
    "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

  // Open WhatsApp in a new tab
  window.open(whatsappURL, "_blank");
}

// =========================
// CONTACT FORM ELEMENTS
// =========================

// Select contact form
const form = document.querySelector("#contact-form");

// Select name input
const nameInput = document.querySelector("#name");

// Select email input
const emailInput = document.querySelector("#email");

// Select message input
const messageInput = document.querySelector("#message");

// Select message area
const formMessage = document.querySelector("#formMessage");

// =========================
// CONTACT FORM SUBMIT
// =========================

// Listen for form submission
form.addEventListener("submit", (event) => {
  // Stop page refresh
  event.preventDefault();

  // Get name value
  const name = nameInput.value.trim();

  // Get email value
  const email = emailInput.value.trim();

  // Get message value
  const message = messageInput.value.trim();

  // =========================
  // VALIDATION PATTERNS
  // =========================

  // Name can contain English letters and spaces
  const namePattern = /^[A-Za-z ]+$/;

  // Basic email validation pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // =========================
  // NAME VALIDATION
  // =========================

  // Check empty name
  if (name === "") {
    showError("Please enter your name.", nameInput);

    return;
  }

  // Check name characters
  if (!namePattern.test(name)) {
    showError("Name must contain only English letters.", nameInput);

    return;
  }

  // =========================
  // EMAIL VALIDATION
  // =========================

  // Check empty email
  if (email === "") {
    showError("Please enter your email.", emailInput);

    return;
  }

  // Check email format
  if (!emailPattern.test(email)) {
    showError("Please enter a valid email.", emailInput);

    return;
  }

  // =========================
  // MESSAGE VALIDATION
  // =========================

  // Check empty message
  if (message === "") {
    showError("Please enter your message.", messageInput);

    return;
  }

  // =========================
  // SUCCESS
  // =========================

  // Add green border to valid fields
  nameInput.classList.add("success");

  emailInput.classList.add("success");

  messageInput.classList.add("success");

  // Show success message
  formMessage.textContent = "Message sent successfully.";

  // Add success CSS class
  formMessage.className = "success";

  // Select submit button
  const submitButton = form.querySelector("button");

  // Change button text
  submitButton.textContent = "Sending...";

  // Prevent double submission
  submitButton.disabled = true;

  // Wait one second
  setTimeout(() => {
    // Clear form
    form.reset();

    // Remove success styles
    nameInput.classList.remove("success");

    emailInput.classList.remove("success");

    messageInput.classList.remove("success");

    // Restore button
    submitButton.textContent = "Submit";

    // Enable button
    submitButton.disabled = false;
  }, 1000);
});

// =========================
// SHOW FORM ERROR
// =========================

// Function for showing validation errors
function showError(message, input) {
  // Display error text
  formMessage.textContent = message;

  // Add error CSS class
  formMessage.className = "error";

  // Add red border
  input.classList.add("error");

  // Put cursor inside input
  input.focus();
}

// =========================
// REMOVE ERROR WHILE TYPING
// =========================

// Put inputs into an array
[nameInput, emailInput, messageInput].forEach((input) => {
  // Listen for typing
  input.addEventListener("input", () => {
    // Remove red error border
    input.classList.remove("error");
  });
});

// =========================
// DARK MODE
// =========================

// Listen for theme button click
themeBtn.addEventListener("click", () => {
  // Add or remove dark mode
  document.body.classList.toggle("dark-mode");

  // Check whether dark mode is active
  const darkMode = document.body.classList.contains("dark-mode");

  // =========================
  // DARK MODE ACTIVE
  // =========================

  if (darkMode) {
    // Change button icon
    themeBtn.textContent = "☀️";

    // Save dark mode
    localStorage.setItem("theme", "dark");
  }

  // =========================
  // LIGHT MODE ACTIVE
  // =========================
  else {
    // Change button icon
    themeBtn.textContent = "🌙";

    // Save light mode
    localStorage.setItem("theme", "light");
  }
});

// =========================
// LOAD SAVED THEME
// =========================

// Get saved theme
const savedTheme = localStorage.getItem("theme");

// Check if dark mode was saved
if (savedTheme === "dark") {
  // Enable dark mode
  document.body.classList.add("dark-mode");

  // Change theme icon
  themeBtn.textContent = "☀️";
}

// =========================
// SCROLL EVENTS
// =========================

// Listen for window scrolling
window.addEventListener("scroll", () => {
  // =========================
  // BACK TO TOP
  // =========================

  // Show button after 300px
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  }

  // Hide button near top
  else {
    backToTop.style.display = "none";
  }

  // =========================
  // NAVBAR SHADOW
  // =========================

  // Add shadow after scrolling
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  }

  // Remove shadow near top
  else {
    navbar.classList.remove("scrolled");
  }

  // =========================
  // SCROLL ANIMATION
  // =========================

  animatedSections.forEach((section) => {
    // Get section position
    const sectionTop = section.getBoundingClientRect().top;

    // Check if section entered screen
    if (sectionTop < window.innerHeight - 100) {
      // Show section
      section.classList.add("show");
    }
  });

  // =========================
  // ACTIVE NAVIGATION
  // =========================

  sections.forEach((section) => {
    // Calculate section start
    const sectionTop = section.offsetTop - 150;

    // Calculate section end
    const sectionBottom = sectionTop + section.offsetHeight;

    // Check current section
    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      // Remove active from all links
      links.forEach((link) => {
        link.classList.remove("active");
      });

      // Find link connected to current section
      const activeLink = document.querySelector(
        `.nav-links a[href="#${section.id}"]`,
      );

      // Add active class
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
});

// =========================
// BACK TO TOP
// =========================

// Listen for Back To Top click
backToTop.addEventListener("click", () => {
  // Smoothly scroll to page top
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});

// =========================
// GALLERY LIGHTBOX
// =========================

// Select all gallery images
const galleryImages = document.querySelectorAll(".gallery-image");

// Select lightbox
const lightbox = document.querySelector("#lightbox");

// Select large image
const lightboxImage = document.querySelector("#lightboxImage");

// Select close button
const closeLightbox = document.querySelector("#closeLightbox");

// =========================
// OPEN LIGHTBOX
// =========================

// Loop through gallery images
galleryImages.forEach((image) => {
  // Listen for image click
  image.addEventListener("click", () => {
    // Put clicked image inside lightbox
    lightboxImage.src = image.src;

    // Copy image description
    lightboxImage.alt = image.alt;

    // Show lightbox
    lightbox.style.display = "flex";
  });
});

// =========================
// CLOSE LIGHTBOX BUTTON
// =========================

// Close when X is clicked
closeLightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// =========================
// CLOSE LIGHTBOX BACKGROUND
// =========================

// Close when dark background is clicked
lightbox.addEventListener("click", (event) => {
  // Make sure user clicked background
  if (event.target === lightbox) {
    lightbox.style.display = "none";
  }
});

// =========================
// CLOSE LIGHTBOX WITH ESCAPE
// =========================

// Listen for keyboard keys
document.addEventListener("keydown", (event) => {
  // Check if Escape was pressed
  if (event.key === "Escape") {
    // Close lightbox
    lightbox.style.display = "none";
  }
});

// =========================
// LOADING SPINNER
// =========================

// Wait until entire page loads
window.addEventListener("load", () => {
  // Select loader
  const loader = document.querySelector("#loader");

  // Wait one second
  setTimeout(() => {
    // Hide loader
    loader.style.display = "none";
  }, 1000);
});
