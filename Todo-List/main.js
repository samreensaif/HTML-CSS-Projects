"use strict";
//--------catch the ul here-------------
let parentUl = document.querySelector("ul");
//--------catch the input field here----------
let input = document.getElementById('input');
//-------catch button here-------------
let button = document.getElementById('button');
//--------------add event listener on button------
button.addEventListener('click', addTodo); //click event
input.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        addTodo();
    }
});
//-------------main function addTodo--------
function addTodo() {
    let newLi = document.createElement('li'); // create li element
    newLi.textContent = input.value; //assign input value to newLi ---manipulation
    input.value = ""; //make it empty
    let icon = document.createElement('i'); //create i element for delete
    icon.classList.add('fa-regular', 'fa-circle-xmark'); // Add font-awesome classes for the icon
    icon.style.cursor = 'pointer'; // Change cursor to pointer for the icon
    newLi.appendChild(icon); //push delete icon to parent li
    parentUl.appendChild(newLi); //push new li into parent ul
    newLi.addEventListener('click', () => {
        if (!newLi.classList.contains('done')) {
            let checkMark = document.createElement('i'); // create checkmark element if not already done
            checkMark.classList.add('fa-solid', 'fa-check');
            checkMark.style.color = 'rgb(246, 250, 250)';
            checkMark.id = 'checkmark-id';
            newLi.insertBefore(checkMark, newLi.children[0]); // Insert checkmark at the beginning
            newLi.classList.add('done'); // Add done class
        }
        else {
            // Toggle off done class
            newLi.classList.remove('done');
            let existingCheckMark = newLi.querySelector('#checkmark-id');
            if (existingCheckMark) {
                existingCheckMark.remove(); // Remove checkmark when undone
            }
        }
    });
    // newLi.addEventListener('click',()=>{            //add event listener click to newli
    //     let checkMark=document.createElement('i');      //create element i for checkmark        
    //     let a= newLi.classList.toggle('done');          //toggle on .done class which is line-through
    //     console.log(a);
    //     if(a==false){
    //         checkMark.style.display=''
    //     }
    //     checkMark.classList.add('fa-solid','fa-check');
    //     checkMark.style.color='rgb(246, 250, 250)'
    //     checkMark.id = 'checkmark-id'
    //     newLi.insertBefore(checkMark,newLi.children[0]);
    //     })
    icon.addEventListener('click', () => {
        newLi.remove();
    });
}
