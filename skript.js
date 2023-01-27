let counter = 0;
const counterEl = document.querySelector('.textt')
const counterE2 = document.querySelector('.texttt')
const startBt = document.querySelector('#startbtn')
const pauseBt = document.querySelector('#pausebtn')
const stopBt = document.querySelector('#stopbtn')
let lit;


startBt.onclick = function() {
    lit = setInterval(function(){
        counter++;
        counterEl.innerText = counter;
        console.log(counter)
    }, 200)
}

pauseBt.onclick = function () {
clearInterval(lit)
}


stopBt.onclick = function() {
    counter = 0;
    counterEl.innerText = 'Я люблю Софійку і Лілю'
    counterE2.innerText = 'На міліон процентів'
    clearInterval(lit)
}