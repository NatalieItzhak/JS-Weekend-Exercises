
// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same
// string with all even indexed characters in each word upper cased, and all odd indexed
// characters in each word lower cased. The indexing just explained is zero based, so the zero-ith
// index is even, therefore that character should be upper cased.
// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only
// be present if there are multiple words. Words will be separated by a single space(' ').
// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"


function toWeirdCase(string){
    // split string by word with a space
      return string.split(' ').map(function(word){
    // split word by letter and index without a space
        return word.split('').map(function(letter, index){
    // if index of the letter is even, change it to uppercase    
    // if not, leave it lowercase
          return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
    // join the same way we split earlier      
        }).join('');
      }).join(' ');
    }

    console.log(toWeirdCase("natalie itzhak"))