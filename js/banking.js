function amount(inputId) {
    const amountText = document.getElementById(inputId);
    const amountValue = amountText.value;
    const amountNumber = parseFloat(amountValue);

    //Clear the input field
    amountText.value = '';

    return amountNumber;
}

function totalCalculation(inputId, newAmountNumber) {
    const currentAmount = document.getElementById(inputId);
    const currentAmountText = currentAmount.innerText;
    const currentAmountNumber = parseFloat(currentAmountText);

    const newAmount = currentAmountNumber + newAmountNumber;
    currentAmount.innerText = newAmount;
}

function currentBalance() {
    const currentBalance = document.getElementById('balance_total');
    const currentBalanceText = currentBalance.innerText;
    const currentBalanceNumber = parseFloat(currentBalanceText);
    return currentBalanceNumber;
}

function balanceCalculation(newAmountNumber) {
    const currentBalance = document.getElementById('balance_total');
    /* const currentBlanceText = currentBlance.innerText;
    const currentBlanceNumber = parseFloat(currentBlanceText); */
    const currentBalanceNumber = currentBalance();
    const newBalanceTotal = newAmountNumber + currentBalanceNumber;
    currentBalance.innerText = newBalanceTotal;
}



document.getElementById('deposit_btn').addEventListener('click', function () {
    //Calling the function
    const newAmountNumber = amount('deposit_input');
    if (newAmountNumber > 0) {
        totalCalculation('deposit_total', newAmountNumber);
        balanceCalculation(newAmountNumber);
    }
});

//Calculating withdraw

document.getElementById('withdraw_btn').addEventListener('click', function () {
    const withdrawInputNumber = amount('withdraw_input');
    const currentBalance = currentBalance();
    if (withdrawInputNumber > 0 && withdrawInputNumber <= currentBalance) {
        totalCalculation('withdraw_total', withdrawInputNumber);
        balanceCalculation(withdrawInputNumber * (-1));
    }
});