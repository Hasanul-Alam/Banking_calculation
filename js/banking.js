function amount(inputId) {
    const amountText = document.getElementById(inputId);
    const amountValue = amountText.value;
    const amountNumber = parseFloat(amountValue);

    //Clear the input field
    amountText.value = '';

    return amountNumber;
}



document.getElementById('deposit_btn').addEventListener('click', function () {
    // const depositInputValue = document.getElementById('deposit_input');
    // const depositAmount = depositInputValue.value;
    // const depositAmountNumber = parseFloat(depositAmount);

    //Calling the function
    const depositAmountNumber = amount('deposit_input');


    const currentDeposit = document.getElementById('deposit_total');
    const currentDepositText = currentDeposit.innerText;
    const currentDepositNumber = parseFloat(currentDepositText);

    const newDepositAmount = currentDepositNumber + depositAmountNumber;
    currentDeposit.innerText = newDepositAmount;

    //Increasing the main balance with the deposit

    const currentBlance = document.getElementById('balance_total');
    const currentBlanceText = currentBlance.innerText;
    const currentBlanceNumber = parseFloat(currentBlanceText);

    const newBalanceTotal = depositAmountNumber + currentBlanceNumber;
    currentBlance.innerText = newBalanceTotal;


});

//Calculating withdraw

document.getElementById('withdraw_btn').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw_input');
    // const withdrawInputValue = withdrawInput.value;
    // const withdrawInputNumber = parseFloat(withdrawInputValue);

    const withdrawInputNumber = amount('withdraw_input');

    const currentWithdrawValue = document.getElementById('withdraw_total');
    const currentWithdrawText = currentWithdrawValue.innerText;
    const currentWithdrawNumber = parseFloat(currentWithdrawText);

    const newWithdrawTotal = withdrawInputNumber + currentWithdrawNumber;
    currentWithdrawValue.innerText = newWithdrawTotal;

    //Decreasing the main balance with the withdraw

    const currentBlance = document.getElementById('balance_total');
    const currentBlanceText = currentBlance.innerText;
    const currentBlanceNumber = parseFloat(currentBlanceText);

    const newBalanceTotal = currentBlanceNumber - withdrawInputNumber;
    currentBlance.innerText = newBalanceTotal;
});