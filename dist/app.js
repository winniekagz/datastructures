"use strict";
function add(n1, n2, showResult) {
    if (showResult) {
        console.log(n2 + n2);
        let result;
        if (typeof n1 === "number" && typeof n2 === "number") {
            result = n1 + n2;
            return result;
        }
        else {
            result = n1.toString() + n2.toString();
            return result;
        }
    }
}
const resulttr = add("12", 20, true);
console.log("result", resulttr);
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READONLY"] = 1] = "READONLY";
    Role[Role["OWNER"] = 2] = "OWNER";
})(Role || (Role = {}));
;
// objects
const person = {
    name: "winfred",
    age: 23,
    hobbies: ["swinning", "travelling", "reading"],
    // roles:Role.ADMIN,
    role: [1, "owner"],
    userTuple: [15, "users"]
};
person.role.push("admin");
console.log(person);
// arrays
let newArr;
newArr = ["winnie"];
// for (const hobby of person.hobbies){
//    console.log(hobby.toUpperCase())
// }
// person.roles===0?console.log("is Admin"):
// person.roles===1?console.log("is read Only"):
// person.roles===2?console.log("is Owner"):
// console.log("does not exist")
var operrators;
(function (operrators) {
    operrators[operrators["SUM"] = 0] = "SUM";
    operrators[operrators["MULTIPLICATION"] = 1] = "MULTIPLICATION";
    operrators[operrators["SUBTRACTION"] = 2] = "SUBTRACTION";
    operrators[operrators["DIVISION"] = 3] = "DIVISION";
})(operrators || (operrators = {}));
// colon afetr the functions shows the return type of the function
function calculator(number1, number2) {
    return number1 + number2;
    console.log("resulttt", number1 + number2);
}
const p = calculator(10, 20);
console.log("resultttp", p);
