// create a function that removes the first and last
// characters of a string. 


let removeFirstAndLast = (str) => {
    let word = str;
    word = word.split('');
    word.pop();
    word.shift();
    word = word.join('');

    return (word);
}
console.log(RemoveFirstAndLast('natalie'));
