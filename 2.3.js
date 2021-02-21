// Complete the findNextSquare method that finds the next integral perfect square after the one
// passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is
// also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the
// parameter is positive.

function findNextSquare(n){
    return Math.sqrt(n)%1===0 ? Math.pow(Math.sqrt(n)+1,2) : -1
}
console.log(findNextSquare(10))
console.log(findNextSquare(144))
console.log(findNextSquare(121))
