const bill = document.querySelector('#bill')

// const billValue = Number(bill.value);
const fivePct = document.querySelector('#fivePct')
const tenPct = document.querySelector('#tenPct')
const fifteenPct = document.querySelector('#fifteenPct')
const twentyPct = document.querySelector('#twentyPct')
const twentyfivePct = document.querySelector('#twentyfivePct')
let tip = document.querySelectorAll('input[name="tipPct"]')
// const customPct = document.querySelector('#customPct')
const numPeople = document.querySelector('#numPeople')
// const eachTipAmount = document.querySelector('.eachTipAmount')
// const eachTotalAmount = document.querySelector('.eachTotalAmount')
const customInput = document.querySelector('.customInput')
const customInputArea = document.querySelector('#customInputArea')
const eachTipDisplay = document.querySelector('#eachTipDisplay')
const eachTotalDisplay = document.querySelector('#eachTotalDisplay')

const numPeopleErrorMsg = document.querySelector('.numPeopleErrorMsg')



function tipPct() {
    for (let i = 0; i < tip.length; i++) {
        tip[i].addEventListener('change', function () {
            let tipPct = (tip[i].value)
        })
    }
}


function calculate() {
    const tipValue = Number(bill.value) * tipPct
    const billPlusTip = Number(bill.value) + tipValue
    const tipPerPerson = tipValue / Number(numPeople.value)
    const totalPerPerson = billPlusTip / Number(numPeople.value)
    eachTipDisplay.textContent = tipPerPerson;
    eachTotalDisplay.textContent = totalPerPerson;
}

bill.addEventListener('change', function () {
    calculate();
})

// for (let i = 0; i < tip.length; i++) {
//     tip[i].addEventListener('change', function () {
//         calculate();
//     })
//     tipValue();
// }

numPeople.addEventListener('change', function () {
    calculate();
})





// for (let i = 0; i < tip.length; i++) {
//     tip[i].addEventListener('change', function tipPct() {
//         let totalTipPct = this.value / 100;
//         console.log(totalTipPct)
//         if (this.value === 'custom') {
//             customInput.style.display = 'block';
//             customInputArea.addEventListener('change', function () {
//                 let totalTipPct = Number(this.value) / 100;
//                 console.log(totalTipPct)
//                 if (totalTipPct === NaN || totalTipPct < 0) {
//                     alert('ENTER A VALID PERCENT')
//                 }

//             })
//         } if (this.value !== 'custom') {
//             customInput.style.display = 'none';
//         }

//     })
// }

// numPeople.addEventListener('change', function numPeople() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (numPeople.value <= 0) {
//                 numPeopleErrorMsg.style.display = 'block'
//                 const numPeopleInputArea = document.querySelector('.numPeopleInputArea')
//                 numPeopleInputArea.style.border = '1px solid hsl(9, 56%, 78%)'
//                 numPeopleInputArea.style.borderRadius = '4px'
//             }
//             let people = Number(this.value)
//             console.log(people)
//         }, delay)
//     })
// })

// bill.addEventListener('change', function billAmount() {
//     let billValue = Number(this.value)
//     console.log(billValue)

// })

// function calculation() {
//     let tipPct = tipPct();
//     let people = numPeople();
//     let billAmount = billAmount();
//     let tipPerPerson = (billAmount + (billAmount * tipPct)) / people
//     console.print(tipPerPerson)
// }



