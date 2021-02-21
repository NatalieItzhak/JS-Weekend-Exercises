// filter
let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

let bigCities = cities.filter(function (e) {
    return e.population > 3000000;
});
console.log(bigCities);


// ForEach

const colors = ['blue', 'green', 'white'];

function iterate(item, index, array) {
  console.log(item);
  if (index === array.length - 1) {
    console.log('The last iteration!');
  }
}

colors.forEach(iterate);

// Map

const numbers = [1,2,3];
const result = numbers.map(function(val, index, array) {
    console.log('val :', val, 'index :', index, 'array :', array);
    return (val * 2);
});

console.log(result)
