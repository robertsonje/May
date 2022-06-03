const operationButton = document.querySelector('#operationButton');
const radioButtons = document.querySelectorAll('input[name="operation"]');
operationButton.addEventListener("click", (e) => {
    e.preventDefault();
    let selectedOperation;
    let x = Number(document.getElementById("firstNumber").value);
    let y = Number(document.getElementById("secondNumber").value);
    let result = 0;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            //e.preventDefault();
            switch(radioButton.value) {
                case "add":
                    result = x + y;
                    break;
                case "subtract":
                    result = x - y;
                    break;
                case "multiply":
                    result = x * y;
                    break;
                case "divide":
                    result = x / y;
                    break;
                default:
            }
        }
    }
    document.getElementById("result").innerHTML = result;
});
