// Well met with Fibonacci bigger brother, AKA Tribonacci.
// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3
// (instead of 2) numbers of the sequence to generate the next.

let tribonacci = (arr, num) => {
    let i = 3;
    if (num === 0) {
        return ([]);
    }
    while (i < num) {
        arr.push(arr[i - 1] + arr[i - 2] + arr[i - 3]);
        ++i;
    }
    return (arr);
}
console.log(tribonacci([1, 1, 1], 20));