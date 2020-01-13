//addition of event listener after the page is done loading
window.onload = () => {
    document.getElementById("digits").addEventListener("click", DisplayValue);
    document.getElementById("del").addEventListener("click", Del);
    document.getElementById("allClear").addEventListener("click", allClear);
    document.getElementById("operation").addEventListener("click", operators);
    document.getElementById("equalsBtn").addEventListener("click", equals);
}


//Global variables declaration and default assignment
let firstValue = 0, secondValue = 0, opCode = "", result = 0;


//function to display the value of buttons clicked
const DisplayValue = (event) => {
    //the if statement to add  value to the display if the value in the display is a non-zero number
    if(document.getElementById("in").innerHTML != "0") {
        if(event.target.id == "zero")
        document.getElementById("in").innerHTML += "0";
        if(event.target.id == "one")
        document.getElementById("in").innerHTML += "1";
        if(event.target.id == "two")
        document.getElementById("in").innerHTML += "2";
        if(event.target.id == "three")
        document.getElementById("in").innerHTML += "3";
        if(event.target.id == "four")
        document.getElementById("in").innerHTML += "4";
        if(event.target.id == "five")
        document.getElementById("in").innerHTML += "5";
        if(event.target.id == "six")
        document.getElementById("in").innerHTML += "6";
        if(event.target.id == "seven")
        document.getElementById("in").innerHTML += "7";
        if(event.target.id == "eight")
        document.getElementById("in").innerHTML += "8";
        if(event.target.id == "nine")
        document.getElementById("in").innerHTML += "9";
        if(event.target.id == "dot") {
            let = content = document.getElementById("in").innerHTML;
            let lastChar = content.charAt(content.length-1)
            //conditions for adding a period(".")
            if((content.indexOf(".") == -1 && (lastChar != lastChar.match(/[\+\-\*\/]/)) || content == content.match(/\d+(\.\d+)?[\+\-\*\/]\d+/g)) && document.getElementById("out").innerHTML == "") {
                document.getElementById("in").innerHTML += ".";
            }
        }
    } 
    // the else block to replace the initial zero of the display at the first click on a number button
    else {
        if(event.target.id == "zero")
            document.getElementById("in").innerHTML = "0";
        if(event.target.id == "one")
            document.getElementById("in").innerHTML = "1";
        if(event.target.id == "two")
            document.getElementById("in").innerHTML = "2";
        if(event.target.id == "three")
            document.getElementById("in").innerHTML = "3";
        if(event.target.id == "four")
            document.getElementById("in").innerHTML = "4";
        if(event.target.id == "five")
            document.getElementById("in").innerHTML = "5";
        if(event.target.id == "six")
            document.getElementById("in").innerHTML = "6";
        if(event.target.id == "seven")
            document.getElementById("in").innerHTML = "7";
        if(event.target.id == "eight")
            document.getElementById("in").innerHTML = "8";
        if(event.target.id == "nine")
            document.getElementById("in").innerHTML = "9";
        if(event.target.id == "dot")
            document.getElementById("in").innerHTML += ".";  // this needs no condition, you grab?  
    }
}

//handler for backspacing
const Del = () => {
    // the input can only be backspaced when the result has not been displayed
    if(document.getElementById("out").innerHTML == "") {
        if(document.getElementById("in").innerHTML.length > 1) {
            document.getElementById("in").innerHTML =
            document.getElementById("in").innerHTML.substr(0, (document.getElementById("in").innerHTML.length-1));
    
        } else
           document.getElementById("in").innerHTML = 0;
    }        
}
//handler for clearing the display
const allClear = () => {
    document.getElementById("in").innerHTML = "0";
    document.getElementById("out").innerHTML = "";
    document.getElementById("digits").addEventListener("click", DisplayValue);

}

//handler for handling the display of operators and calculation handling
const operators = (event) => {
    // upon clicking on any operator replace the input with the outputed value if any
    if(document.getElementById("out").innerHTML != "") {
        if(document.getElementById("out").innerHTML !="Math error")
            document.getElementById("in").innerHTML = document.getElementById("out").innerHTML;
        else {
            document.getElementById("in").innerHTML = "0";
            document.getElementById("out").innerHTML = "";
        }
    }
    let content = document.getElementById("in").innerHTML;//this collect the content of the input each time the function is called
    let lastChar = content.charAt(content.length-1);
    
    if(lastChar != ".") {
        //getting the first value
        if(content == content.match(/\d+(\.\d+)?/g)) {
             firstValue = content;
        } 
        //getting the second value and the operator
        if(content == content.match(/\d+(\.\d+)?[\-\+\*\/]\d+(\.\d+)?/g)) {
            secondValue = content.substring(firstValue.length+1, content.length);
            opCode = content.substr(firstValue.length, 1);
            switch (opCode) {
                case "+":
                    result = parseFloat(firstValue) + parseFloat(secondValue);
                    break;
                case "-":
                    result = parseFloat(firstValue) - parseFloat(secondValue);
                    break;
                case "*":
                    result = parseFloat(firstValue) * parseFloat(secondValue);
                    break;
                case "/":
                    result = parseFloat(firstValue) / parseFloat(secondValue);
                    break;       
            }
            document.getElementById("in").innerHTML = result;
          
        }
        content = document.getElementById("in").innerHTML;
        if(content == content.match(/\d+(\.\d+)?/g)) {
            firstValue = content;
       }
       //adding operator when clicked
        if(event.target.id == "add")
            document.getElementById("in").innerHTML += "+";
        if(event.target.id == "multiply")
            document.getElementById("in").innerHTML += "*";
        if(event.target.id == "divide")
            document.getElementById("in").innerHTML += "/";
        if(event.target.id == "subtract")
            document.getElementById("in").innerHTML += "-";
    }
    //replacing an operator if an operator is already the last char in the display
    if(lastChar =="+" || lastChar =="*" || lastChar =="/" || lastChar =="-") {
        if(event.target.id == "add") {
            document.getElementById("in").innerHTML = 
            document.getElementById("in").innerHTML.substr(0, (document.getElementById("in").innerHTML.length-2)) + "+";
        }
        if(event.target.id == "multiply") {
            document.getElementById("in").innerHTML = 
            document.getElementById("in").innerHTML.substr(0, (document.getElementById("in").innerHTML.length-2)) + "*";
        }
        if(event.target.id == "divide") {
            document.getElementById("in").innerHTML = 
            document.getElementById("in").innerHTML.substr(0, (document.getElementById("in").innerHTML.length-2)) + "/";
        }
        if(event.target.id == "subtract") {
            document.getElementById("in").innerHTML = 
            document.getElementById("in").innerHTML.substr(0, (document.getElementById("in").innerHTML.length-2)) + "-";
        }
        
    }
    document.getElementById("digits").addEventListener("click", DisplayValue);

}

const equals = () => {
    let content = document.getElementById("in").innerHTML;
    if(content == content.match(/\d+(\.\d+)?[\-\+\*\/]\d+(\.\d+)?/g)) {
        secondValue = content.substring(firstValue.length+1, content.length);
        opCode = content.substr(firstValue.length, 1);
    }
    switch (opCode) {
        case "+":
            result = parseFloat(firstValue) + parseFloat(secondValue);
            break;
        case "-":
            result = parseFloat(firstValue) - parseFloat(secondValue);
            break;
        case "*":
            result = parseFloat(firstValue) * parseFloat(secondValue);
            break;
        case "/":
            if(secondValue != 0)
                result = parseFloat(firstValue) / parseFloat(secondValue);
            else
                result = "Math error";    
            break;       
           
    }
    document.getElementById("out").innerHTML = result;
    firstValue = toString(result);
    document.getElementById("digits").removeEventListener("click", DisplayValue);
}