// 1. Deposit some money
// 2. Determine number of lines to bet on.
// 3. Collect a bet amount.
// 4. Spin the slot machine
// 5. check if the user won.
// 6. Give the user their winnins
// 7. play again.

const prompt = require("prompt-sync")();

const deposit = () => {
    while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);


if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
    console.log("Please enter a valid deposit amount.");
}  else{
    return numberDepositAmount;
}
}
};

const depositAmount = deposit();
console.log(depositAmount);