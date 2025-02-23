const button = document.querySelector('button');
button.addEventListener('click',()=>{
    const number1  =document.getElementById('first');
    const input1= Number(number1.value);
    
    const number2= document.getElementById('second');
    const input2= Number(number2.value);

   if(isNaN(input1||isNaN(input2))){
   
    return;
   }
    const ans= input1*input1;
    const resul= input2/ans;
   
 
  const re=  document.getElementById('result');
    re.textContent = resul;
   

});

