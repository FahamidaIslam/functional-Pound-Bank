// 1. get the element by id
// 2. get the value from the element
// 3.convert String value to a Number


document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDeposit = getInputValueById('deposit-field');
    const oldDeposit = getElementValueById('deposit-amount');
    if (isNaN(newDeposit)) {
        alert('invalid amount')
        return;
    }
    const deposit_Total = newDeposit + oldDeposit;
    setTextElementValueById('deposit-amount', deposit_Total);


    const prevousBalance = getElementValueById('blance-amount');
    const newBalance = newDeposit + prevousBalance;
    setTextElementValueById('blance-amount', newBalance);
})
