let display=document.querySelector('#calc-display');
     
     let btns=document.querySelectorAll('.btn');
      
    let currentValue="";

     function evaluatResult(){
        let convertedValue=currentValue.replace('×','*').replace('÷','/') .replace('%','*0.01');
         currentValue=eval( convertedValue);
         display.value=currentValue;
     }
    Array.from(btns).forEach((btn)=> {
     btn.addEventListener('click',(e)=>{
        
        if(e.target.innerText=='AC'){
            currentValue='';
            display.value=currentValue;
        }
        else if(e.target.innerHTML=='='){
             evaluatResult();
        }
        else{
            currentValue += e.target.innerText;
        display.value=currentValue;
        }
        
        
     })
})