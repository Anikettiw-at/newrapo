const quotes=[
    "The father of the world is only one. ",
    "Try try but don't cry.",
    "It doesn't matter how slow you go, as long as you do not stop",
    "Hum dil de chukey sanam ",
    "This website is created by Aniket Tiwari",
    "BYe BYe ",
    "picture abhi baaki hai mere dost ",
    "Every end is new beginning",
    "I am the devil of my world",
    "If you born poor it is not your fault but if you die poor it's your fault",
    "Honesty is the best policy",
    "peoples are not cheap by lack of money by the lack of good mentality",
    "Aniket tiwari",
    "tujme rab dikhtaha hai rabba mai kya karu ",

];



function generatequote(){
const text=document.getElementById("quote");
const index=Math.floor( Math.random()*(quotes.length));
text.textContent=quotes[index];
}
setInterval(generatequote,1000)


/*************************** */

function getcolor(){
    const letter='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++){
        color+=letter[Math.floor(Math.random()*16)];

    }
    return color;
}

function changecolor(){
    const body=document.getElementById("bck");
    body.style.backgroundColor=getcolor();

}

setInterval(changecolor,1000);