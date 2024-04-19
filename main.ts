#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";




console.log(chalk.bold.bgBlackBright("\n \t\t Welcome To CodeWithHamza - CLI Number Guessing Game"));
console.log("=".repeat(60));


const randomNumber =Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([
    {
        name:"userGuessedNumber",
        type:"number",
        message:"Enter Your Guess Number(Number Limit from 1 To 10):"
    },
]);

if(answer.userGuessedNumber === randomNumber){
    console.log(chalk.bold.bgGreenBright("Congratulation ! You Guess A Correct Number."));
}
else{
    console.log(chalk.bold.blue("Sorry ! You Guess A Wrong Number."));
    
}