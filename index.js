const bill = document.querySelector('#bill')

// const billValue = Number(bill.value);
const fivePct = document.querySelector('#fivePct')
const tenPct = document.querySelector('#tenPct')
const fifteenPct = document.querySelector('#fifteenPct')
const twentyPct = document.querySelector('#twentyPct')
const twentyfivePct = document.querySelector('#twentyfivePct')
let tip = document.querySelectorAll('input[name="tipPct"]')
const customPct = document.querySelector('#customPct')
const numPeople = document.querySelector('#numPeople')
// const eachTipAmount = document.querySelector('.eachTipAmount')
// const eachTotalAmount = document.querySelector('.eachTotalAmount')
const customInput = document.querySelector('.customInput')
const customInputArea = document.querySelector('#customInputArea')
const eachTipDisplay = document.querySelector('#eachTipDisplay')
const eachTotalDisplay = document.querySelector('#eachTotalDisplay')

const numPeopleErrorMsg = document.querySelector('.numPeopleErrorMsg')



// function tipPct() {
//     for (let i = 0; i < tip.length; i++) {
//         tip[i].addEventListener('change', function () {
//             let tipPct = (tip[i].value)
//         })
//     }
// }

tipPct = 0;


function calculate() {
    if (fivePct.checked) {
        tipPct = .05;
    }
    if (tenPct.checked) {
        tipPct = .1;
    }
    if (fifteenPct.checked) {
        tipPct = .15;
    }
    if (twentyPct.checked) {
        tipPct = .2;
    }
    if (twentyfivePct.checked) {
        tipPct = .25;
    }
    if (customPct.checked) {
        customInput.style.display = 'flex'
        tipPct = Number(customInputArea.value) / 100
    }
    if (!customPct.checked) {
        customInput.style.display = 'none'
    }
    console.log(tipPct)
    const tipValue = Number(bill.value) * tipPct
    const billPlusTip = Number(bill.value) + tipValue
    const tipPerPerson = tipValue / Number(numPeople.value)
    const totalPerPerson = billPlusTip / Number(numPeople.value)
    eachTipDisplay.textContent = `$${tipPerPerson.toFixed(2)}`;
    if (tipPerPerson === Infinity || tipPerPerson === NaN || Number(numPeople.value) === 0) {
        eachTipDisplay.textContent = '$--'
    }
    eachTotalDisplay.textContent = `$${totalPerPerson.toFixed(2)}`;
    if (totalPerPerson === Infinity || totalPerPerson === NaN || Number(numPeople.value) === 0) {
        eachTotalDisplay.textContent = '$--'
    }
}

for (let i = 0; i < tip.length; i++) {
    tip[i].addEventListener('change', function () {
        calculate();
    })
}

customInputArea.addEventListener('change', function () {
    calculate();
})

bill.addEventListener('change', function () {
    calculate();
})

numPeople.addEventListener('change', function () {
    calculate();
})








