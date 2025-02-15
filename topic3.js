////////////////////😎😎😎😎😎😎😎//////////////////////////////////
const obj =fetch(`http://api.weatherapi.com/v1/current.json?key=abaf29971813457c99b180823250702&q=London&aqi=yes
`)

// setTimeout(()=>{
//     console.log(obj)
// },2000)

obj.then((data)=>{
     console.log(data);
}).catch((error)=>{
    console.log(error)
})




