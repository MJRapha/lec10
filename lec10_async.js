/* //synchronized code:
console.log("Start");

//async code: 
setTimeout(() => {
    console.log("1 Second Passed");
}, 1000);

//synchronized code:
console.log("Done"); */
/* const btn = document.getElementById('meal');

let i = 0;

btn.addEventListener('click', () => {

    //code that runs each second:
    setInterval(() => {
        i++;
        btn.innerHTML = 'Breakfast' + i;
    }, 1000);
}) */

/* btn.addEventListener('click', () => {
    setTimeout(() => {
        btn.innerHTML = 'Breakfast';
    }, 1000);
}) */
/* 
btn.addEventListener('click', () => {

    //code that runs each second:
    setInterval(() => {
        btn.innerHTML = new Date();
    }, 1000);
}) */

const btnStart = document.getElementById('start');
const btnStop = document.getElementById('stop');
const box = document.getElementById('box');

let interval;
//handle clicks:

//start:
btnStart.addEventListener('click', () => {
    interval = setInterval(() => {
        box.innerHTML = new Date();
    }, 1000);
});

//stop:
btnStop.addEventListener('click', () => {
    clearInterval(interval);
});
