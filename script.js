// let articleElement = document.querySelector("article");

// let varor = [
//     "Nike skor",
//     "Convers skor",
//     "Addidas skor",
//     "Levis jeans"
// ]
// for (let i = 0; i < varor.length; i++) {
//     const vara = varor[i];
//     const pElement = document.createElement('p');
//     pElement.textContent = vara;
//     articleElement.appendChild(pElement);
    
// }

// function DisplayStatus(){
//     debugger
//     const numberinput = document.getElementById('inputElement').value;  

//     const number = document.getElementById('status').value += numberinput + document.getElementById('operator').value;
//     document.getElementById('status').innerHTML = number; 

// }
// function Result(){
//     debugger
//     let x = document.getElementById('status').value;
//     let result = eval(x);
//     const RESULT = document.getElementById('status').value += document.getElementById('operator').value + result;  
 
// }

//function that display value 
function dis(val){
    debugger
    const clrtext = "";
    document.getElementById("result").value += clrtext; 
    const result = document.getElementById("result").value += val;

    const empty = ""; 
    document.getElementById("Update").value += result;
    document.getElementById("result").value = empty;    
} 

// function that clear the digit
function clr(val){
    debugger
    const empty = ""; 
    if(val == "AC"){        
        document.getElementById("Update").value = empty;
        document.getElementById("resultonly").value = empty;
    }
    else if(val == "C")
    {
        document.getElementById("Update").value = empty;      
    }
}
function deletetext(){
    debugger
    const clrtext = "";
    document.getElementById("result").value = clrtext;    
}
          
//function that evaluates the digit and return result 
function solve() { 
    debugger
    const empty = ""; 
    let e = document.getElementById("result").value;
    document.getElementById("Update").value += e; 
    let x = document.getElementById("Update").value;
    document.getElementById("result").value = empty;
    let y = eval(x) 
    document.getElementById("Update").value += document.getElementById('qeuals').value + y;
    document.getElementById('resultonly').value = y;
}