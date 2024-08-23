"use strict";
//-----------------first button--------------------------
let firstBtn = document.getElementById("firstBtn");
let btnRock = document.getElementById("btnRock");
btnRock?.addEventListener('mouseover', () => {
    firstBtn.style.transform = "scale(1.1)";
    firstBtn.style.boxShadow = "0 0 25px 10px rgba(255, 255, 0, 0.8)";
});
btnRock?.addEventListener('mouseout', () => {
    firstBtn.style.transform = "scale(1)";
    firstBtn.style.boxShadow = "none";
});
//-----------------second button--------------------------
let secondBtn = document.getElementById("secondBtn");
let btnPaper = document.getElementById("btnPaper");
btnPaper?.addEventListener('mouseover', () => {
    secondBtn.style.transform = "scale(1.1)";
    secondBtn.style.boxShadow = "0 0 25px 10px rgba(255, 255, 0, 0.8)";
});
btnPaper?.addEventListener('mouseout', () => {
    secondBtn.style.transform = "scale(1)";
    secondBtn.style.boxShadow = "none";
});
//-----------------third button--------------------------
let thirdBtn = document.getElementById("thirdBtn");
let btnScissor = document.getElementById("btnScissor");
btnScissor?.addEventListener('mouseover', () => {
    thirdBtn.style.transform = "scale(1.1)";
    thirdBtn.style.boxShadow = "0 0 25px 10px rgba(255, 255, 0, 0.8)";
});
btnScissor?.addEventListener('mouseout', () => {
    thirdBtn.style.transform = "scale(1)";
    thirdBtn.style.boxShadow = "none";
});
//functioning
let button = document.querySelectorAll('button');
let result = document.getElementById('result');
let compBtn = document.getElementById('compBtn');
let userInput;
let comp;
function randomFunc() {
    let randomNumber = Math.floor((Math.random() * 3 + 1));
    switch (randomNumber) {
        case 1:
            comp = 'Rock';
            break;
        case 2:
            comp = 'Paper';
            break;
        case 3:
            comp = 'Scissor';
            break;
    }
    return comp;
}
button.forEach((element) => {
    element.addEventListener('click', (p) => {
        let a = randomFunc();
        console.log(a);
        userInput = (p.target).textContent;
        console.log(userInput);
        if (a == 'Rock') {
            compBtn.style.backgroundImage = "url('rock1.jpg')";
            compBtn.style.backgroundPosition = "center";
            compBtn.style.backgroundRepeat = "no-repeat";
            compBtn.style.backgroundSize = "center";
        }
        else if (a == 'Paper') {
            compBtn.style.backgroundImage = "url('rock-paper-scissors-emoji-cartoon-019-64.webp')";
            compBtn.style.backgroundPosition = "center";
            compBtn.style.backgroundRepeat = "no-repeat";
            compBtn.style.backgroundSize = "center";
        }
        else {
            compBtn.style.backgroundImage = "url('scissor1.jpg')";
            compBtn.style.backgroundPosition = "center";
            compBtn.style.backgroundRepeat = "no-repeat";
            compBtn.style.backgroundSize = "center";
        }
        if (userInput === a) {
            result.textContent = `Its draw 🤝🏁`;
        }
        else if ((userInput === 'Paper' && a === "Rock") ||
            (userInput === 'Scissor' && a === "Paper") ||
            (userInput === 'Rock' && a === "Scissor")) {
            result.textContent = `You wins 🏆🥇`;
        }
        else {
            result.textContent = `Comp wins 🏆🥇`;
        }
    });
});
