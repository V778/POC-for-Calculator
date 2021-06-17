import * as wasm from "nitorcalc";


const sb=document.getElementById("submit");
const sb1=document.getElementById("submit1");
const sb2=document.getElementById("submit2");
const sb3=document.getElementById("submit3");
const value1=document.getElementById("no1");
const value2=document.getElementById("no2");
var ans=document.getElementById("result");
sb.addEventListener("click", event =>{
    
    const a= value1.value;
    const b= value2.value;
    console.log({a,b});
   
    var result= wasm.add(a,b);
    ans.innerHTML= result;
   
});

sb1.addEventListener("click", event =>{
    
    const a= value1.value;
    const b= value2.value;
    console.log({a,b});
   
    var result= wasm.sub(a,b);
    ans.innerHTML= result;
   
});

sb2.addEventListener("click", event =>{
    
    const a= value1.value;
    const b= value2.value;
    console.log({a,b});
   
    var result= wasm.mul(a,b);
    ans.innerHTML= result;
   
});

sb3.addEventListener("click", event =>{
    
    const a= value1.value;
    const b= value2.value;
    console.log({a,b});
   
    var result= wasm.div(a,b);
    ans.innerHTML= result;
   
});