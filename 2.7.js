// Your task is to create a function that does four basic .
// The function should take three arguments - operation(string/char), value1(number),
// value2(number).
// The function should return result of numbers after applying the chosen operation.


let fourBasic = (str, num1, num2) => {
    switch (str) {
        case '+':
            return (num1 + num2);
        case '-':
            return (num1 - num2);
        case '*':
            return (num1 * num2);
        case '/':
            return (num2 !== 0) ? parseFloat(num1 / num2) : 'Error';
    }
}

console.log(fourBasic("/", 12, 4))
console.log(fourBasic("*", 5, 2))
console.log(fourBasic("+", 22, 10))
console.log(fourBasic("-", 30, 4))
