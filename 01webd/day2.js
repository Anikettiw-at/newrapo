//  function attach(content){
//  ele =document.createElement("li");
// ele.innerHTML=content;

// ele2 =document.createElement("li");
// ele2.innerHTML=content+"v2.0";

// const parent = document.getElementById('root');
// // parent.appendChild(ele);
// // //multiple elments can be attached
// parent.append(ele,ele2);


//  }
//  attach("ts");


//  ***********************************
// creating text node

// var at= document.createTextNode(" @ Hello Coder army ");
// const parent = document.getElementById("root");
// parent.append(at);


//********************************************** */


const element= document.createAttribute("id");
element.value= "first";
const curr_list=document.querySelector("li");
curr_list.setAttributeNode(element);
 

//********************************************** */
 



