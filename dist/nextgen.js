"use strict";
const username = "winnie";
let age = 23;
const x = (name = "kagendo", age) => {
    //  name=name,
    age = age;
    console.log(`my name is ${name}.I am ${age} years old`);
};
x("kagz", 23);
const printOutput = output => console.log(output);
const button = document.querySelector("button");
if (button) {
    button.addEventListener("click", event => console.log(event));
}
printOutput(23);
// spreadoperatiors
const hobies = ["swimming", "swinging"];
const newh = ["hiking"];
newh.push(...hobies);
console.log("newh", newh);
// one can also use spereadoperator to create a copy
// eg person
const personn = {
    fname: "kagendo",
    page: 24
};
const copied = Object.assign({}, personn);
const addd = (...numbers) => {
    // let result=0;
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumber = addd(1, 67, 12, 3);
console.log(addedNumber);
// array destructuring
const [hobby1, hobby2, ...remaining] = hobies;
const { fname, page } = personn;
//  personn.hobbies=hobies
// classes&interfaces
