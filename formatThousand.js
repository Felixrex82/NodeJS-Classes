const prompt = require("prompt-sync")();

const number = prompt("Enter any number: ")

const formatThousand = number.toLocaleString();

console.log(formatThousand)
