let btn_burger = document.getElementById("btn-burger");
let btn_show_advantages = document.getElementById("btn-show-advantages");
let btn_show_specialists = document.getElementById("btn-show-specialists");
let btn_show_reviews = document.getElementById("btn-show-reviews");
let btn_up = document.getElementById("btn-up");

// Header Menu

btn_burger.onclick = function () {
    document.querySelector(".header__navbar").classList.toggle("active");
}

// Btn-Up

document.addEventListener('DOMContentLoaded', () => {

    btn_up.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Show Content Buttons

btn_show_advantages.onclick = function () {
    document.querySelector(".advantages .container").classList.toggle("active");
    btn_show_advantages.classList.toggle("hide");
}

btn_show_specialists.onclick = function () {
    document.querySelector(".specialists .container").classList.toggle("active");
    btn_show_specialists.classList.toggle("hide");
}

btn_show_reviews.onclick = function () {
    document.querySelector(".slider").classList.toggle("active");
    btn_show_reviews.classList.toggle("hide");
}

// Slider

document.addEventListener('DOMContentLoaded', function () {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-block__pagination__dot');
    const prevArrow = document.querySelector('.slider__arrow-left');
    const nextArrow = document.querySelector('.slider__arrow-right');
    let currentIndex = 0;

    function updateSlider() {
        const offset = -currentIndex * 100;
        sliderWrapper.style.transform = `translateX(${offset}%)`;

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    prevArrow.addEventListener('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateSlider();
    });

    nextArrow.addEventListener('click', function () {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateSlider();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function () {
            currentIndex = index;
            updateSlider();
        });
    });

    updateSlider(); // Initial setup
});