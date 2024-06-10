const prompt = require("prompt-sync")();

const input = prompt("Enter any number: ")

const toNumber = Number(input)

const formatThousand = toNumber.toLocaleString();

console.log(formatThousand)
