// Number of people in the bus
// There is a bus moving in the city, and it takes and drop some people in each bus stop.
// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two
// items which represent number of people get into bus (The first item) and number of people get
// off the bus (The second item) in a bus stop.
// Your task is to return number of people who are still in the bus after the last bus station (after
// the last array). Even though it is the last bus stop, the bus is not empty and some people are still
// in the bus, and they are probably sleeping there :D
// Take a look on the test cases.
// Please keep in mind that the test cases ensure that the number of people in the bus is always
// >= 0. So the return integer can't be negative.
// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

// let nums=[[2,0],[4,2],[5,3],[1,4]]
// peopleOnTheBus = nums.reduce((l, [wentOn, wentOff]) => {
//     return ((l + wentOn) - wentOff);
// });



let peopleLeftInTheBus = function (busStops) {
    let totalPpl = 0;
    for (let i = 0; i < busStops.length; i++) {
        let currentStop = busStops[i];
        let peopleIn = currentStop[0];
        let peopleOff = currentStop[1];
        totalPpl += peopleIn;
        totalPpl -= peopleOff;
    }
    return totalPpl;
}
console.log(peopleLeftInTheBus([[2, 0], [4, 2], [5, 3], [10, 7]], 3))
console.log(peopleLeftInTheBus([[5, 0], [7, 6], [6, 8], [3, 4]], 2))
console.log(peopleLeftInTheBus([[8, 0], [3, 2], [3, 3], [10, 13]], 5))