//MENU BUTTON

const menuBtn = document.getElementById('menuBtn');
const menuList = document.getElementById('menu-list');

// Toggle menu display on click
menuBtn.addEventListener('click', function() {
  if (menuList.style.display === 'flex') {
    menuList.style.display = 'none';
  } else {
    menuList.style.display = 'flex';
  }
});

// SHOP NOW BUTTON
const shopBtn = document.getElementById('shopBtn');

if(shopBtn){
    shopBtn.addEventListener('click', () => {
        window.location.href = 'services.html';
    });
}

document.getElementById("shopBtn").addEventListener("click", function() {
    alert("Welcome! Start shopping now");
});

//SERVICES SECTION

// CART FUNCTIONALITY
const cartCount = document.getElementById('cart-count');

// Load count from localStorage
let count = parseInt(localStorage.getItem('cartCount')) || 0;
cartCount.textContent = count;

const cardItems = document.querySelectorAll('.card-item');

cardItems.forEach(item => {
    const addBtn = item.querySelector('input[value="ADD CART"]');
    const removeBtn = item.querySelector('.remove-btn');
    const resetBtn = item.querySelector('.reset-btn');

    // ADD CART
    addBtn.addEventListener('click', () => {
        count++;
        cartCount.textContent = count;
        localStorage.setItem('cartCount', count);
    });

    // REMOVE CART
    removeBtn.addEventListener('click', () => {
        if(count > 0){
            count--;
            cartCount.textContent = count;
            localStorage.setItem('cartCount', count);
        }
    });

    // RESET CART
    resetBtn.addEventListener('click', () => {
        count = 0;
        cartCount.textContent = count;
        localStorage.setItem('cartCount', count);
    });
});

//FORM SECTION

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const numberInput = document.getElementById('number');
const feedbackInput = document.getElementById('feedback');
const submit = document.getElementById('submit');
const messageBox = document.getElementById('form-message');


if (submit && nameInput && emailInput && numberInput && feedbackInput && messageBox) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();

        // Reset styles
        [nameInput, emailInput, numberInput, feedbackInput].forEach(input => {
            input.classList.remove("input-error");
        });

        // Empty fields check
        if (
            nameInput.value.trim() === "" ||
            emailInput.value.trim() === "" ||
            numberInput.value.trim() === "" ||
            feedbackInput.value.trim() === ""
        ) {
            if (nameInput.value.trim() === "") nameInput.classList.add("input-error");
            if (emailInput.value.trim() === "") emailInput.classList.add("input-error");
            if (numberInput.value.trim() === "") numberInput.classList.add("input-error");
            if (feedbackInput.value.trim() === "") feedbackInput.classList.add("input-error");

            messageBox.style.display = "block";
            messageBox.textContent = "Please input a field";
            messageBox.className = "error";
            return;
        }

        // Detailed validation
        if (!validateName(nameInput.value)) {
            nameInput.classList.add("input-error");
            showMessage("Name should contain letters only");
            return;
        }

        if (!validateEmail(emailInput.value)) {
            emailInput.classList.add("input-error");
            showMessage("Enter a valid email");
            return;
        }

        if (!validateNumber(numberInput.value)) {
            numberInput.classList.add("input-error");
            showMessage("Enter a valid number");
            return;
        }

        if (!validateFeedback(feedbackInput.value)) {
            feedbackInput.classList.add("input-error");
            showMessage("Message must be at least 5 characters");
            return;
        }

        // Success: clear form
        messageBox.style.display = "block";
        messageBox.textContent = "Form submitted successfully!";
        messageBox.className = "success";

        nameInput.value = "";
        emailInput.value = "";
        numberInput.value = "";
        feedbackInput.value = "";
    });
}

// Show error message
function showMessage(msg) {
    messageBox.style.display = "block";
    messageBox.textContent = msg;
    messageBox.className = "error";
}

// Validators
function validateName(name) {
    return /^[a-zA-Z\s]+$/.test(name);
}

function validateEmail(email) {
    return /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email);
}

function validateNumber(number) {
    return /^[0-9]+$/.test(number);
}

function validateFeedback(feedback) {
    return feedback.trim().length >= 5;
}

