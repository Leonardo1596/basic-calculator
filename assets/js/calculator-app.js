const display = document.querySelector('#display');
let displayValue = [];
const buttons = document.querySelectorAll('.btn');
var clickedButton;
var opr;
var completeDisplay;
let resultCalc;



function clickButtons(button) {
    clickedButton = button;
    addField(clickedButton);
    
}


function setField(value) {
    display.value = value;
}


function addField(value) {
    display.value += value;
}



function operation(input) {
    if (!display.value) {
        return;
    }
    

    displayValue.push(parseFloat(display.value));
    display.value = '';
    document.querySelector('#display').placeholder = input;
    if (input === '*') {
        document.querySelector('#display').placeholder = 'x';

    }
    opr = input;
    console.log(`first value: ${displayValue[0]}`);


}













function del() {
    setField(display.value.slice(0, -1));
    displayValue = [];
    opr = '';
    document.querySelector('#display').placeholder = '0';

}


function reset() {
    display.value = '';
    displayValue = [];
    console.log(displayValue);
    opr = '';
    document.querySelector('#display').placeholder = '0';

}


function result() {
    // const display1 = sessionStorage.getItem('dislay1');
    // const result = display1 + display.value;
    // console.log(result);

    

    if (opr) {
        displayValue.push(parseFloat(display.value));
        console.log(`second value: ${displayValue[1]}`)
        if (displayValue[1] === undefined) {
            return;
        }
        calc();
    }
}

function showOnScreen(resultCalc) {
    document.querySelector('#display').value = resultCalc.toFixed(2);
    console.log(`result: ${resultCalc}`);
    displayValue =[];
}

function calc() {
    if (opr === '+') {
        resultCalc = displayValue[0] + displayValue[1];
        showOnScreen(resultCalc);
    }

    if (opr === '-') {
        resultCalc = parseFloat(displayValue[0]) - parseFloat(displayValue[1]);
        showOnScreen(resultCalc);
    }

    if (opr === 'x') {
        resultCalc = parseFloat(displayValue[0]) * parseFloat(displayValue[1]);
        showOnScreen(resultCalc);
    }

    if (opr === '/') {
        resultCalc = parseFloat(displayValue[0]) / parseFloat(displayValue[1]);
        showOnScreen(resultCalc);
    }

}


document.addEventListener('keyup', function(event) {
    console.log(event.keyCode);
    if (event.keyCode === 13) {
        result();
    }

    if (event.keyCode === 111) {
        operation('/');
        document.querySelector('#display').value = '';
    }

    if (event.keyCode === 106) {
        operation('*');
        document.querySelector('#display').value = '';
    }

    if (event.keyCode === 109) {
        operation('-');
        document.querySelector('#display').value = '';
    }

    if (event.keyCode === 107) {
        operation('+');
        document.querySelector('#display').value = '';
    }

    if (event.keyCode === 27) {
        reset();
    }

})
