const sumAll = function(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number" || num1 < 0 || num2 < 0) return "ERROR";
    let smallNum = num1;
    let bigNum = num2;
    if (num1 > num2) {
        smallNum = num2;
        bigNum = num1;
    }
    let output = 0
    for (let i = smallNum; i <= bigNum; i++) {
        output += i;
    }
    return output;
};

// Do not edit below this line
module.exports = sumAll;
