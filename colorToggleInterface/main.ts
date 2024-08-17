let bgColor: any  = document.getElementById('background');

let frColor : any = document.getElementById('innerDiv');

let btnBGround : any  = document.getElementById('btn-background');

let btnFRont : any = document.getElementById('btn-innerDiv')


let colors = ['red','maroon','coral','DarkGoldenRod','darkgreen','Crimson'];
let counter = 0;

btnBGround.onclick = function() {
   
        bgColor.style.backgroundColor = colors[counter];
        counter++;
        if(counter==colors.length){
            counter=0;
        }
        
    } 
   
    let colors1 = ['Peru','DarkViolet','DodgerBlue','gold','silver','LawnGreen'];
let counter1 = 0;
   
   btnFRont.addEventListener('click',()=>{
   
       frColor.style.backgroundColor=colors1[counter1];
       counter1++;
       if(counter1==colors1.length){
           counter1=0;
       }
       
   })