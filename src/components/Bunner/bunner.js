var counter1 = document.querySelector(".counter1");
var counter2 = document.querySelector(".counter2");
var counter3 = document.querySelector(".counter3");

let count = 0
setInterval(() => {
    if (count < 550) {
        count++;
        counter1.innerText = count;
    }

}, 1)
let count2 = 0
setInterval(() => {
    if (count2 < 513) {
        count2++;
        counter2.innerText = count2;
    }

}, 1)
let count3 = 0
setInterval(() => {
    if (count3 < 523) {
        count3++;
        counter3.innerText = count3;
    }

}, 1)
let count4 = 0
setInterval(() => {
    if (count4 < 543) {
        count4++;
        counter4.innerText = count4;
    }
})
count = 0
