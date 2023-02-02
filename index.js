(function test(){

    let screen = document.querySelector('.currentDisplayNum');
    let stored = document.querySelector('.storedDisplayNum');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('#C');
    let equal = document.querySelector('#equal');
    let addition = document.querySelector('#addition');
    let subtraction = document.querySelector('#subtraction');
    let multiply = document.querySelector('#multiply');
    let division = document.querySelector('#division');
    let invert = document.querySelector('#invert');
    let operator = "";
    //let operator = document.querySelectorAll('.optr')

    buttons.forEach(function(button){
        button.addEventListener("click", function(e){
            let value = e.target.textContent;
            if(screen.textContent.length < 10){    
                screen.textContent += value;
            }
        })
    })

    clear.addEventListener("click", function(e){
        let value = "";
        screen.textContent = value;
        stored.textContent = value;
    })

    addition.addEventListener("click", function(e){
        if (stored.textContent == ""){
            operator = "+";
            stored.textContent = screen.textContent;
            screen.textContent = "";
        } else{
            stored.textContent = (+stored.textContent)+(+screen.textContent);
            screen.textContent = "";
        }
    })

    subtraction.addEventListener("click", function(e){
        if (stored.textContent == ""){
            operator = "-";
            stored.textContent = screen.textContent;
            screen.textContent = "";
            console.log(operator);
        } else{
            stored.textContent = (+stored.textContent)-(+screen.textContent);
            screen.textContent = "";
        }
    })

    multiply.addEventListener("click", function(e){
        if (stored.textContent == ""){
            operator = "*";
            stored.textContent = screen.textContent;
            screen.textContent = "";
            console.log(operator);
        } else{
            stored.textContent = (+stored.textContent)*(+screen.textContent);
            screen.textContent = "";
        }
    })

    division.addEventListener("click", function(e){
        if (stored.textContent == ""){
            operator = "/";
            stored.textContent = screen.textContent;
            screen.textContent = "";
            console.log(operator);
        } else{
            stored.textContent = (+stored.textContent)/(+screen.textContent);
            screen.textContent = "";
        }
    })

    invert.addEventListener("click", function(e){
        if(stored.textContent != "" && screen.textContent != ""){
            stored.textContent = (+stored.textContent)*(-1);
            screen.textContent = (+screen.textContent)*(-1);
        }
        else if(stored.textContent != "" && screen.textContent == ""){
            stored.textContent = (+stored.textContent)*(-1);
        }
        else if(stored.textContent == "" && screen.textContent != ""){
            screen.textContent = (+screen.textContent)*(-1);
        }
        
    })
    
    equal.addEventListener("click", function(e){
        if (operator == "+"){
            screen.textContent = (+stored.textContent)+(+screen.textContent);
            stored.textContent = "";
        } else if (operator == "-"){
            screen.textContent = (+stored.textContent)-(+screen.textContent);
            stored.textContent = "";
        } else if (operator == "*"){
            screen.textContent = (+stored.textContent)*(+screen.textContent);
            stored.textContent = "";
        } else if (operator == "/"){
            screen.textContent = (+stored.textContent)/(+screen.textContent);
            stored.textContent = "";    
        }
    })

})();
