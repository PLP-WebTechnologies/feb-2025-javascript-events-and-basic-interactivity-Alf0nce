// 1. Event Handling
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
    button.textContent = "Clicked!";
    button.style.backgroundColor = "lightgreen";
});

const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.backgroundColor = "lightblue";
});
hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.backgroundColor = "white";
});

document.addEventListener("keypress", (e) => {
    console.log(`Key pressed: ${e.key}`);
    alert(`You pressed: ${e.key}`);
});

// Secret Action (Long Press/Double Click)
const secretBox = document.getElementById("secretBox");
let pressTimer;

secretBox.addEventListener("mousedown", () => {
    pressTimer = setTimeout(() => {
        secretBox.textContent = "Long Press Detected! 🎉";
    }, 1000);
});

secretBox.addEventListener("mouseup", () => {
    clearTimeout(pressTimer);
});

secretBox.addEventListener("dblclick", () => {
    secretBox.textContent = "Double Clicked! 🎊";
});

// 2. Interactive Elements
const colorButton = document.getElementById("colorButton");
colorButton.addEventListener("click", () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    colorButton.style.backgroundColor = randomColor;
    colorButton.textContent = `Color: ${randomColor}`;
});

// Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(n) {
    slides.forEach(slide => slide.style.display = "none");
    slides[n].style.display = "block";
}

document.getElementById("nextBtn").addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

document.getElementById("prevBtn").addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

showSlide(0);

// Tabs
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabContents.forEach(content => content.style.display = "none");
        tabs.forEach(t => t.classList.remove("active"));
        tabContents[index].style.display = "block";
        tab.classList.add("active");
    });
});

// Animation
const animatedBox = document.getElementById("animatedBox");
animatedBox.addEventListener("click", () => {
    animatedBox.classList.toggle("spin");
});

// 3. Form Validation
const form = document.getElementById("myForm");
form.addEventListener("submit", (e) => {
    const input = document.getElementById("requiredInput");
    if (!input.value.trim()) {
        alert("This field is required!");
        e.preventDefault();
    }
});

const emailInput = document.getElementById("emailInput");
emailInput.addEventListener("blur", () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        alert("Please enter a valid email!");
    }
});

const passwordInput = document.getElementById("passwordInput");
const feedback = document.getElementById("passwordFeedback");

passwordInput.addEventListener("input", () => {
    if (passwordInput.value.length < 8) {
        feedback.textContent = "Password too short!";
        feedback.style.color = "red";
    } else {
        feedback.textContent = "Good password!";
        feedback.style.color = "green";
    }
});