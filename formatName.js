const prompt = require("prompt-sync")();

const name = prompt("What is your Name? ")

const trimName = name.replace(/\s+/g, " ").trim();

const usersName = trimName.split(" ");

// let formatName = usersName.map(function (name) {
//    return name.charAt(0).toUpperCase() + name.slice(1);
// })

let formatName = usersName.map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(" ")

console.log(formatName)




