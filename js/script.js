// Variables
const left = document.querySelector('.left');
const right= document.querySelector('.right');
const center = document.querySelector('.center');
const container = document.querySelector('.container');
const leftVideo = document.querySelector('.video--deathmatch');
const rightVideo = document.querySelector('.video--lambda');
const centerVideo = document.querySelector('.video--pf2');

let RightCSS = document.querySelector('.right');

// Event Listeners Left
left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
    leftVideo.play();
});
left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
    leftVideo.pause();
});

// Event Listener Right
right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
    rightVideo.play();
});
//right.addEventListener('mouseenter', () => 
right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
    rightVideo.pause();
});

// Event Listener Center
center.addEventListener('mouseenter', () => {
    container.classList.add('hover-center');
    centerVideo.play();
});
center.addEventListener('mouseleave', () =>{
    container.classList.remove('hover-center');
    centerVideo.pause();
});

    