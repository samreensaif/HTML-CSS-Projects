"use strict";
let input = document.getElementById('input');
let button = document.getElementById('button');
let para = document.getElementById('para');
let msg = document.getElementById('box2');
button.addEventListener('click', () => {
    if (button.textContent == 'Show Password') {
        input.type = 'text';
        button.textContent = 'Hide Password';
    }
    else {
        input.type = 'password';
        button.textContent = 'Show Password';
    }
});
input.addEventListener('input', () => {
    let hasLetters = /[a-zA-Z]/.test(input.value);
    let hasNumbers = /[0-9]/.test(input.value);
    let hasCharacters = /[@#$&*]/.test(input.value);
    if (input.value.length >= 1 && input.value.length <= 4) {
        para.style.color = 'red';
        // para.style.backgroundColor='red';
        para.textContent = 'Weak Password';
    }
    else if (input.value.length >= 5 && input.value.length <= 7) {
        para.style.color = '#257ea8';
        // para.style.backgroundColor='yellow';
        para.textContent = 'Medium Password';
    }
    else if (input.value.length >= 8 && input.value.length <= 20) {
        if (hasLetters && hasCharacters && hasNumbers) {
            para.style.color = 'Green';
            para.textContent = 'Strong Password';
            msg.style.color = 'yellow';
            msg.style.fontSize = 'xx-large';
            msg.textContent = 'Password Set!!!';
        }
        else {
            if ((msg.textContent != 'Password Set!!!') && (input.value.length <= 8)) {
                para.textContent = '';
                msg.style.fontSize = 'x-large';
                msg.textContent = `Password should include letters, numbers, and special characters - Try Again!!!`;
            }
            else {
                para.textContent = '';
                msg.textContent = '';
            }
        }
    }
    else {
        para.style.backgroundColor = 'transparent';
        para.textContent = '';
    }
});
