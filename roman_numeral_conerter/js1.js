let input = document.getElementById("number");
let button = document.getElementById("convert-btn");
let outputDisplay = document.getElementById("output"); 
const romanObj = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
};

button.addEventListener("click", () => {
    inputToRoman(input.value);
    input.value = "";
});

function inputToRoman(num) {
    let number = parseInt(num);

    if (num.trim().length == 0) {
        outputDisplay.textContent = "Please input a valid number";
        return;
    }
    if (number > 4999 || number < 1) {
        outputDisplay.textContent = "Out of range";
    } else {
        outputDisplay.textContent = "";
        let result = ""; 
        let romanValues = Object.keys(romanObj);
        romanValues.forEach((key) => {
            while (romanObj[key] <= number) { 
                number -= romanObj[key];
                result += key;
            }
        });
        outputDisplay.textContent = result;
    }
}

button.addEventListener("keyup", () => {
    outputDisplay.style.display = "none";
});
