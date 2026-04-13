document.addEventListener("DOMContentLoaded", () => {
  //MENU
  const menuBtn = document.getElementById("menuBtn");
const menuList = document.getElementById("menu-list");

function handleMenuDisplay() {
  if (window.innerWidth > 768) {
    // DESKTOP: always show menu
    menuList.style.display = "flex"; // or "block" depending on your CSS
  } else {
    // MOBILE/TABLET: hide menu by default
    menuList.style.display = "none";
  }
}

// run on load
handleMenuDisplay();

// run on resize
window.addEventListener("resize", handleMenuDisplay);

// toggle only for mobile/tablet
menuBtn.addEventListener("click", function () {
  if (window.innerWidth <= 768) {
    if (menuList.style.display === "block") {
      menuList.style.display = "none";
    } else {
      menuList.style.display = "block";
    }
  }
});

  // SHOP NOW
  const shopBtn = document.getElementById("shopBtn");

  if (shopBtn) {
    shopBtn.addEventListener("click", () => {
      alert("Welcome! Redirecting to services...");
      window.location.href = "services.html";
    });
  }

  // CART
  const cartCount = document.getElementById("cart-count");

  let count = localStorage.getItem("cartCount");
  count = count ? parseInt(count) : 0;

  if (cartCount) {
    cartCount.textContent = count;
  }

  // SELECT ALL PRODUCTS
  const cards = document.querySelectorAll(".card-item");

  cards.forEach(card => {

    const addBtn = card.querySelector(".add-btn");
    const removeBtn = card.querySelector(".remove-btn");
    const resetBtn = card.querySelector(".reset-btn");

    // ADD
    addBtn.addEventListener("click", () => {
      count++;
      updateCart();
    });

    // REMOVE
    removeBtn.addEventListener("click", () => {
      if (count > 0) count--;
      updateCart();
    });

    // RESET
    resetBtn.addEventListener("click", () => {
      count = 0;
      updateCart();
    });

  });

  function updateCart() {
    if (cartCount) {
      cartCount.textContent = count;
    }
    localStorage.setItem("cartCount", count);
  }

  // FORM VALIDATION
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const number = document.getElementById("number");
  const feedback = document.getElementById("feedback");
  const submit = document.getElementById("submit");
  const message = document.getElementById("form-message");

  if (submit) {
    submit.addEventListener("click", (e) => {
      e.preventDefault();

      if (
        name.value === "" ||
        email.value === "" ||
        number.value === "" ||
        feedback.value === ""
      ) {
        message.style.display = "block";
        message.textContent = "Please fill all fields";
        message.className = "error";
        return;
      }

      message.style.display = "block";
      message.textContent = "Form submitted!";
      message.className = "success";

      name.value = "";
      email.value = "";
      number.value = "";
      feedback.value = "";
    });
  }

});