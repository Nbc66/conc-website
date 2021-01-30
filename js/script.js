// Variables
const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;

document.querySelector(".up-button").style.transitionDuration = "1s";
document.querySelector(".down-button").style.transitionDuration = "1s";

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener('click', () => {
    changeSlide('up');
    changeColor('up');
});
downButton.addEventListener('click', () => {
    changeSlide('down');
    changeColor('down');
});

// Slide Function
const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0;
        }
    }

    if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1;
        }
    }



    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
};

// Variables
const colorArrayUp = ['#b73739', '#1f170b', '#121212', '#000'];
let colorUp = 0;
let colorDown = 2;

// Change Color Function
const changeColor = (direction) => {
    if (direction === 'up') {
        colorUp++;
        colorDown++;
        if (colorUp > slidesLength - 1) {
            colorUp = 0;
        }
        if (colorDown > slidesLength - 1) {
            colorDown = 0;
        }

    }

    if (direction === 'down') {
        colorUp--;
        colorDown--;
        if (colorUp < 0) {
            colorUp = slidesLength - 1;
        }
        if (colorDown < 0) {
            colorDown = slidesLength - 1;
        }

    }
    upButton.style.background = `${colorArrayUp[colorUp]}`;
    downButton.style.background = `${colorArrayUp[colorDown]}`;
    
};
