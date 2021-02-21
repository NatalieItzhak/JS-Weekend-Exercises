// Write a function called repeat_str which repeats the given string src exactly count times.

let repeatStr = (num, str) => {
    let word = '';
    let i = 0;
    while (i < num)
    {
        word += str;
        ++i;
    }

    return (word);
}
console.log(repeatStr(3,'natalie'));