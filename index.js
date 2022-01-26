const bill = document.querySelector('#bill')
// const billValue = Number(bill.value);
// const fivePct = document.querySelector('#fivePct')
// const tenPct = document.querySelector('#tenPct')
// const fifteenPct = document.querySelector('#fifteenPct')
// const twentyPct = document.querySelector('#twentyPct')
// const twentyfivePct = document.querySelector('#twentyfivePct')
let tip = document.querySelectorAll('input[name="tipPct"]')
// const customPct = document.querySelector('#customPct')
const numPeople = document.querySelector('#numPeople')
const eachTipDisplay = document.querySelector('.eachTipAmount')
const eachTotalDisplay = document.querySelector('.eachTotalAmount')
const customInput = document.querySelector('.customInput')
const customInputArea = document.querySelector('#customInputArea')

const numPeopleErrorMsg = document.querySelector('.numPeopleErrorMsg')

for (let i = 0; i < tip.length; i++) {
    tip[i].addEventListener('change', function () {
        let totalTip = this.value / 100;
        console.log(totalTip)
        if (this.value === 'custom') {
            customInput.style.display = 'block';
        } if (this.value !== 'custom') {
            customInput.style.display = 'none';
        }
    })
}

numPeople.addEventListener('change', function () {
    if (numPeople.value <= 0) {
        numPeopleErrorMsg.style.display = 'block'
        const numPeopleInputArea = document.querySelector('.numPeopleInputArea')
        numPeopleInputArea.style.border = '1px solid hsl(9, 56%, 78%)'
        numPeopleInputArea.style.borderRadius = '4px'
    }
})

customInputArea.addEventListener('change', function () {
    let totalTip = Number(this.value) / 100;
    console.log(totalTip)
})

// customPct.addEventListener('change', function () {
// })