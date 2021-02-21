let Isogram = str => {

    let letters = str.toLowerCase().split('');

    for (let i = 0; i <= letters.length - 1; ++i)
    {
        if (letters.includes(letters[i], i + 1))
        {
            return (false);
        }
    }
    return (true);
}

console.log(Isogram("Dermatoglyphics"))