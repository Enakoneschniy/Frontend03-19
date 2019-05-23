'use strict';
/*let phone = document.querySelector('.contact-button.link-phone');
if(!!phone) {
    phone.dispatchEvent(new Event('click'));
}*/
class EventListeners {
    constructor(debugMessage = 'test') {
        this.debugMessage = debugMessage;
    }

    onCalc(event) {
        event.preventDefault();
        const aInput = event.target.querySelector('input[name="a"]');
        const a = parseFloat(aInput.value);
        const bInput = event.target.querySelector('input[name="b"]');
        const b = parseFloat(bInput.value);
        const operationSelect = event.target.querySelector('select[name="operation"]');
        const operation = operationSelect.value;
        const result = eval(`${a} ${operation} ${b}`);
        document.getElementById('result').innerHTML = `<strong>Result:</strong> ${result}`;
        //console.log(this.debugMessage, eval(`${a} ${operation} ${b}`));
    }
}

const calcForm = document.getElementById('calc');
const listeners = new EventListeners('calcForm');

calcForm.addEventListener('submit', listeners.onCalc.bind(listeners));

// calcForm.removeEventListener('click', onCalc);










