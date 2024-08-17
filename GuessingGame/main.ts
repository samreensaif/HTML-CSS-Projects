

let inputBtn : any = document.getElementById('input');

let enterBtn:any =document.getElementById('enterBtn');

let para : any = document.getElementById('show')

let num = Math.floor(Math.random()*5+1);


enterBtn.addEventListener('click',()=>{

    
    if(inputBtn.value>=0 && inputBtn.value<=5)
        {

        if(inputBtn.value == num)
        {
            inputBtn.style.backgroundColor='green';
            inputBtn.style.color='white'
            para.style.color='green';
            para.textContent= 'Matched 🎉🎊🥳';
        }
        else
        {
            inputBtn.style.backgroundColor='';
            inputBtn.style.color='black'
            para.style.color='red';
            para.textContent='Not Matched!!! 😞😞';
        }
        num = Math.floor(Math.random()*5+1);
        }
    else
        {
            inputBtn.style.backgroundColor='red';
            inputBtn.style.color='black'
            para.style.color='red';
            para.textContent='Enter number between 1-5 ⚠';
        }
        

})

