document.getElementById('deposit_btn').addEventListener('click', function () {
    const depositInputValue = document.getElementById('deposit_input');
    const depositAmount = depositInputValue.value;
    const depositAmountNumber = parseFloat(depositAmount);

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

    //Clear the input field
    depositInputValue.value = '';
});

//Calculating withdraw

document.getElementById('withdraw_btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw_input');
    const withdrawInputValue = withdrawInput.value;
    const withdrawInputNumber = parseFloat(withdrawInputValue);

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

    //Clear the withdraw input field
    withdrawInput.value = '';
});