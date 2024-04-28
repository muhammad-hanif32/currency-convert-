#!/usr/bin/env node

import inquirer from "inquirer";

const currency: any = {
    USD: 1,
    EUR: 0.94,
    GBP: 0.80,
    INR: 83.29,
    PKR: 277.31,
};

let user_answer = await inquirer.prompt(
[
    {
    name:"from",
    message:"Enter From Currency",
    type:"list",
    choices:['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name:'to',
        message:'Enter Your Currency',
        type:'list',
        choices:['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name:'Amount',
        message:'Enter Your Amount',
        type:'number'
    }
]
);

let fromAmount = currency[user_answer.from]
let toAmount = currency[user_answer.to]
let Amount = user_answer.Amount
let baseAmount = Amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);
