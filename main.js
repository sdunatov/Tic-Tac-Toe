const x1 = document.querySelector('.x1');
const x2 = document.querySelector('.x2');
const x3 = document.querySelector('.x3');
const x4 = document.querySelector('.x4');
const x5 = document.querySelector('.x5');
const x6 = document.querySelector('.x6');
const x7 = document.querySelector('.x7');
const x8 = document.querySelector('.x8');
const x9 = document.querySelector('.x9');
const imag = document.querySelector('.image');
const mainDiv = document.querySelector('.game');

let arrayofImages = new Array();

arrayofImages[0] = new Image();
arrayofImages[0].src = 'x.png';

arrayofImages[1] = new Image();
arrayofImages[1].src = 'o.png';

let count = 0;
mainDiv.addEventListener('click', () =>{
    count += 1;
    console.log(count);
    if(count % 2 != 0){
        firstPlayer();
    }
    else{
        secondPlayer();
    };
});

function firstPlayer(){
    x1.addEventListener('click', () => {
        imag.src = arrayofImages[0].src;
    });
    x2.addEventListener('click', () => {
        imag.src = arrayofImages[0].src;
    });
    x3.addEventListener('click', () => {
        imag.src = arrayofImages[0].src;
    });
    x4.addEventListener('click', () => {
        imag.src = arrayofImages[0].src;
    });
    x5.addEventListener('click', () => {
        imag.src = arrayofImages[0].src;
    });
    x6.addEventListener('click', () => {
        imag.src = arrayofImages[0].src;
    });
    x7.addEventListener('click', () => {
        imag.src = arrayofImages[0].src;
    });
    x8.addEventListener('click', () => {
        imag.src = arrayofImages[0].src;
    });
    x9.addEventListener('click', () => {
        imag.src = arrayofImages[0].src;
    });
}

function secondPlayer(){
    x1.addEventListener('click', () => {
        imag.src = arrayofImages[1].src;
    });
    x2.addEventListener('click', () => {
        imag.src = arrayofImages[1].src;
    });
    x3.addEventListener('click', () => {
        imag.src = arrayofImages[1].src;
    });
    x4.addEventListener('click', () => {
        imag.src = arrayofImages[1].src;
    });
    x5.addEventListener('click', () => {
        imag.src = arrayofImages[1].src;
    });
    x6.addEventListener('click', () => {
        imag.src = arrayofImages[1].src;
    });
    x7.addEventListener('click', () => {
        imag.src = arrayofImages[1].src;
    });
    x8.addEventListener('click', () => {
        imag.src = arrayofImages[1].src;
    });
    x9.addEventListener('click', () => {
        imag.src = arrayofImages[1].src;
    });
}