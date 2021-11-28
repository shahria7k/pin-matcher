function getPin() {
    const pin = Math.round(Math.random() * 1000000);
    const pinString = pin + "";
    if (pinString.length == 6) {
        return pin;
    } else {
        console.log("missed");
        return getPin();
    }
}
function genaratePin() {
    document.getElementById('display-pin').value = getPin();
};
const keyPad = document.getElementById('key-pad');
keyPad.addEventListener('click', e => {
    const number = e.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == "C") {
            calcInput.value = "";
        }

        if (number == "<") {
            let previousCalc = calcInput.value;
            if (previousCalc.length > 0) {
                previousCalc = previousCalc.toString().split("");
                previousCalc.pop();
                previousCalc = previousCalc.join("");
                console.log(previousCalc);
                calcInput.value = previousCalc;
            };

        }
    } else {
        const previousCalc = calcInput.value;
        const newCalc = previousCalc + number;
        calcInput.value = newCalc;
    }
});
function verifyPin() {
    const genaratedPin = document.getElementById("display-pin").value;
    const currentPin = document.getElementById('typed-numbers').value;
    const failMsg = document.getElementById("verify-fail");
    const okMsg = document.getElementById("verify-pass");
    if (genaratedPin == currentPin) {
        failMsg.style.display = "none";
        okMsg.style.display = "block";
    } else {
        failMsg.style.display = "block";
        okMsg.style.display = "none";
    }
}
console.log(Math.pow(4, 0.5) + "spiderman" + "987" + Math.sqrt(9));
{
    function generatePin() { return Math.floor(Math.random() * 90000) + 10000; }
    console.log(generatePin());
    console.log(!isNaN('10X'));
    const product = 5; const price = '7'; const subTotal = product * price; const tax = subTotal / 10; const total = subTotal + tax;
    console.log(total);
    console.log(5 * '6');

}
console.log([1, 2, 4].includes(5));
const task = "Practice Makes a person perfect";

const index = task.toLowerCase().indexOf("M");
console.log(index);
const str1 = 'Bangladesh is a beautiful country.'; console.log(str1.endsWith("country"));
const str = 'I love coding more than eating.';
console.log(str.slice(2, 7).split(''));
for (let i== 0; i < 10; i++) { }