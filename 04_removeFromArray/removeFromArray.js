const removeFromArray = function(array, ...otherArgs) {
    const argumentsArray = Array.from(arguments).slice(1);
    let newArray = []
    array.forEach((item) => {
        if (argumentsArray.includes(item) === false) {
            newArray.push(item);
        }
    })
    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
