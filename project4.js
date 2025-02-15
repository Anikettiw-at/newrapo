document.body.addEventListener("click",()=>{
  const circle  =  document.createElement('div');
  circle.className = 'circle';
  circle.textContent="Hi";

const x= event.clientX;
const y = event.clientY;
circle.style.left= `${x-25}px`;
circle.style.top=`${y-25}px`;



  const color = ["red","blue","orange","white","purple","yellow","grey","pink","green","wheat"];
  circle.style.backgroundColor =color[ Math.floor(Math.random()*color.length)];
  document.body.appendChild(circle);

  const Text = ["Hi","Aniket","Tiwari","Ji","papa","cool","God","Father","Bye","Nice","this","project","is","for","fun"];
  circle.textContent =Text[ Math.floor(Math.random()*color.length)];
  document.body.appendChild(Text);



  setTimeout(()=>{
circle.remove();
  },5000)
})
