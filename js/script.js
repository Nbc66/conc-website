// Variables
const left = document.querySelector('.left');
const right= document.querySelector('.right');
const center = document.querySelector('.center');
const container = document.querySelector('.container');
const leftVideo = document.querySelector('.video--deathmatch');
const rightVideo = document.querySelector('.video--lambda');
const centerVideo = document.querySelector('.video--pf2');

document.onload = console.log("%c\"You might not think that programmers are artists, but programming is an extremely creative profession. It's logic-based creativity.\"%c-John Romero",

    "color:#40e0d0;font-family:Helvetica;font-size:1rem;font-weight:bold", "font-family:system-ui;font-size:1rem;font-weight:bold"

)

document.onload = console.log("if you have found this message then you should probabaly contact us for a new potential job");

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

    