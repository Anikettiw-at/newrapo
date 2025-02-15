// const  red=document.getElementById('red');
// const  blue=document.getElementById('blue');
// const  orange=document.getElementById('orange');
// const  green=document.getElementById('green');
// const  purple=document.getElementById('purple');

// const body = document.body;

// red.addEventListener('click',()=>{
//     body.style.backgroundColor= 'red';
// })

// blue.addEventListener('click',()=>{
//     body.style.backgroundColor= 'blue';
// })

// purple.addEventListener('click',()=>{
//     body.style.backgroundColor= 'purple';
// })

// green.addEventListener('click',()=>{
//     body.style.backgroundColor= 'green';
// })

// orange.addEventListener('click',()=>{
//     body.style.backgroundColor= 'orange';
// })


/****************method2**************************** */
// const buttons = document.querySelectorAll('button');
// const body = document.body;

// buttons.forEach((button)=>{

//     button.addEventListener('mouseover',()=>{

//         body.style.backgroundColor=button.id;
         
//     })
// })

/**************method3******************* */
//event delgation 
const root = document.getElementById('root');

root.addEventListener('mouseover',(event)=>{
    if(event.target.tagName=='BUTTON'){
    document.body.style.backgroundColor = event.target.id;

}
})
