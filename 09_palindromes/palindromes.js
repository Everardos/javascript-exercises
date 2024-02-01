const palindromes = function (string) {
    let newString = string.toLowerCase().replaceAll(/[^\w]/g, "");
    const reversedString = newString.split("").reverse().join("");
    if (newString === reversedString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
