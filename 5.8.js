function findLongestWord(str) {
    // Step 1. Split the string into an array of strings
    var strSplit = str.split(' ');
    // var strSplit = "The quick brown fox jumped over the lazy dog".split(' ');
    // var strSplit = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];
      
    // Step 2. Initiate a variable that will hold the length of the longest word
    var longestWord = 0;
  
    // Step 3. Create the FOR loop
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){ // If strSplit[i].length is greater than the word it is compared with...
      longestWord = strSplit[i].length; // ...then longestWord takes this new value
       }
    }
    return longestWord;
}

  console.log(findLongestWord('nice weekend'))