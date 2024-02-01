const fibonacci = function(n) {
    if (n < 0) return "OOPS";

    let a = 0;
    let b = 1;
    let c = 0;

    for (let i = 1; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return a;
};

/*
1 1 2 3 5 8

0 + 1 = 1
    1 + 1 = 2
        1 + 2 = 3
            2 + 3 = 5
                3 + 5 = 8

1 < 5
c = 1, a = 1, b =1

2 < 5
c = 2, a = 1, b = 2

3 < 5
c = 3, a = 2, b = 3

4 < 5
c = 5, a = 3, b = 5

*/

// Do not edit below this line
module.exports = fibonacci;
