const left = document.querySelector('.left');
const right= document.querySelector('.right');
const center = document.querySelector('.center');
const container = document.querySelector('.container');

let RightCSS = document.querySelector('.right');

console.log(right);

left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));

right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
//right.addEventListener('mouseenter', () => 
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));

center.addEventListener('mouseenter', () => container.classList.add('hover-center'));
center.addEventListener('mouseleave', () => container.classList.remove('hover-center'));