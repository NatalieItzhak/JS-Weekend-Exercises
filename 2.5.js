// Write a program that finds the summation of every number from 1 to num. The number will
// always be a positive integer greater than 0.
let Summation = (num) => {
    let sum=0;
    let i = 1;

    while (i <= num)
    {
        sum += i;
        ++i;
    }
    return (sum);
}

console.log(Summation(10))