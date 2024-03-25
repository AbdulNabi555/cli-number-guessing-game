#! /usr/bin/dev node
import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([{
        name: "UserGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10.",
    }]);
if (answer.UserGuessedNumber === randomNumber) {
    console.log("Congratulations, You guessed correct number.");
}
else {
    console.log("Sorry, You guessed wrong number.");
}
