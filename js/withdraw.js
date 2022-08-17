// 1. get the element by id
// 2. get the value from the element
// 3.convert String value to a Number



document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdraw = getInputValueById('withdraw-field');

    const oldWithdraw = getElementValueById('withdraw-amount');
    if (isNaN(newWithdraw)) {
        alert('invalid amount')
        return;
    }
    const total_Withdraw = newWithdraw + oldWithdraw;
    setTextElementValueById('withdraw-amount', total_Withdraw);

    const prevousBalance = getElementValueById('blance-amount');

    if (newWithdraw > prevousBalance) {
        alert('invalid amount')
    }
    const newBalance = prevousBalance - newWithdraw;
    setTextElementValueById('blance-amount', newBalance);
})