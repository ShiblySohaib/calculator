buttons = document.querySelectorAll("button");
output = document.querySelector("#output");
let operator = "",
    number = 0,
    previous = 0;
str = "";
buttons.forEach((button) => {
    button.onclick = (e) => {
        if (e.target.className == "ac") {
            reset();
            output.textContent = number;
        } else if (e.target.className == "number") {
            if (str.length < 10) {
                str += e.target.textContent;
                number = Number(str);
                output.textContent = str;
            }
        } else if (e.target.className == "del") {
            str = str.slice(0, -1);
            number = Number(str);
            output.textContent = str;
        } else if (e.target.className == "operator") {
            if (operator) {
                calculate();
            }
            operator = e.target.textContent;
            previous = number;
            str = "";
        } else if (e.target.className == "percent") {
            let result = number / 100;
            reset();
            number = result;
            str = String(result);
            output.textContent = result;
        } 
        else if (e.target.className == "switch" && number!=0) {
            if(number<0){
                str=str.slice(1,);
                number = Number(str);
            }
            else{
                str = '-'+str;
                number = Number(str);
            }
            output.textContent = str;
        }else if (e.target.className == "equal") {
            calculate();
            operator = e.target.textContent;
        }
    };
});

function reset() {
    str = "";
    operator = "";
    number = 0;
    previous = 0;
}
function calculate() {
    if (operator == "+") {
        let result = previous + number;
        output.textContent = result;
        reset();
        number = result;
    } else if (operator == "-") {
        let result = previous - number;
        output.textContent = result;
        reset();
        number = result;
    } else if (operator == "*") {
        let result = previous * number;
        output.textContent = result;
        reset();
        number = result;
    } else if (operator == "/") {
        let result = previous / number;
        output.textContent = result;
        reset();
        number = result;
    }
    if (output.textContent.length > 10) {
        let tmp = Number(output.textContent);
        if(tmp>9999999999 || tmp<-9999999999)
            tmp = tmp.toExponential(2);
        else
            tmp = String(tmp).slice(0,10);
        output.textContent = tmp;
    }
}
