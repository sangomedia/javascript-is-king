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

const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);
    
    
    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
        console.log("Invalid number of lines, please try again.");
    }  else{
        return numberOfLines;
    }
    }
}

const getBet = (balance) => {
    while (true) {
        const bet = prompt("Enter the total bet: ");
        const numberBet = parseFloat(bet);
    
    
    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance) {
        console.log("Invalid bet, please try again.");
    }  else{
        return numberBet;
    }
    }
}

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance);
