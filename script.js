//function that display value 
function Input(val){        
    if(val == "+" || val == "-" || val == "/" || val == "*"){
        var previus = document.getElementById("result");
        solve(previus);
    }  
    else{
        const inputValue = document.getElementById("current").value += val.value;
        document.getElementById("current").value = inputValue; 
    }
} 

// function that clear the digit
function Clear(val){
    if(val.value == "AC"){        
        document.getElementById("current").value = "";  
        // document.getElementById("result").value = "";
    }
    else if(val.value == "C")
    {        
        let digit = document.getElementById("current");
        let result = digit.value.slice(0,-1);
        digit.value = result;
    }
}
          
function previus(val){
    debugger
    let beforeEqual = val.split('=');
    solve(beforeEqual[0]);
}
//function that evaluates the digit and return result 
function solve(val) { 
    let previusresults = document.getElementById('previusresults');
    let currentDigit = document.getElementById('current').value;
    let optionElement = document.createElement('option');
    const historiesoptions = [];

    if(currentDigit != "0"){
        if(val.value == "="){            
            var result = eval(currentDigit);       
            document.getElementById("current").value = result;
    
            optionElement.value = `${currentDigit}=${result}`;
            optionElement.textContent = `${currentDigit}=${result}`;
    
            if(previusresults.children.length == 0){
                previusresults.append(optionElement); 
            }
            for (let index = 0; index < previusresults.children.length; index++) {
                historiesoptions.push(previusresults.children[index].innerHTML)           
            }
    
            if(historiesoptions.includes(optionElement.innerHTML) != true){
                previusresults.append(optionElement);  
            }
        }
        else{
            debugger  
            document.getElementById("current").value = val;
        }
    } 
    previusresults.removeAttribute("style");
}

 function clearHistory(){
    let user_input = confirm("Your result history will be deleted");
    if(user_input == true){
        let historyElement = document.getElementById('previusresults');
        historyElement.innerHTML = "";
        historyElement.setAttribute("style","display:none");
    }
 }