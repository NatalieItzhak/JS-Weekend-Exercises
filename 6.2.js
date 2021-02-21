function countDuplicates(str) {
    var myObj = {},
        counter = 0;    
    for(var i = 0; i < str.length; i++){   

      if(!myObj[str[i]]){
          myObj[str[i]] = 1;
      } 
      else if(myObj[str[i]] < 2) {
          myObj[str[i]]+=1;
          counter++;
      }    
    }
    return counter;
}
console.log(countDuplicates('how are you'))


