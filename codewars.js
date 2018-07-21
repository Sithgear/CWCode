// order a sentence that has a digit in each word  "ou5r clow3n i4s  fr6iend who2le th1e"
function order(words){
  var finalArray = [];
  var newArray = words.split(" ");
  for(var i = 0;i < newArray.length;i++){
    var theNum = newArray[i].match(/\d/);
    var theString = newArray[i];
    finalArray[theNum-1] = newArray[i];
  }
  var finalString = finalArray.join(' ');
  return finalString;
}


//You will be given an array which will include both integers and characters.
//Return an array of length 2 with a[0] representing the mean of the ten integers as a floating point number.
//There will always be 10 integers and 10 characters.
//Create a single string with the characters and return it as a[1] while maintaining the original order.
function mean(lst){
  var finalArray = [];
  var numberArray = [];
  var incomingArray = lst;
  for(var i = 0; i < incomingArray.length;i++){
    var character = incomingArray[i].match(/\d/);
    if(character == null){
      finalArray.push(incomingArray[i]);
    }
    else{
      numberArray.push(parseInt(incomingArray[i]));
    }
  }
  var sumOfNums = numberArray.reduce((a, b) => a + b, 0);
  var finalAnswer = [sumOfNums/10, finalArray.join('')];
  return finalAnswer;
}

//You are going to be given a word. Your job is to return the middle character of the word.
//If the word's length is odd, return the middle character.
//If the word's length is even, return the middle 2 characters.
function getMiddle(s)
{
  var finalWord = '';
  var incomingWord = s;
  var stringSplit = s.split('');
  if(stringSplit.length % 2 == 0){
    var newWords = stringSplit.length / 2;
    var lastWords = newWords - 1;
    finalWord = stringSplit[lastWords] + stringSplit[newWords];
  }
  if(stringSplit.length % 2 == 1){
    var newLetter = stringSplit.length / 2;
    finalWord = stringSplit[newLetter - .5];
  }
  return finalWord;
}

//Write a function that takes an array and counts the number of each unique element present.
// ex. count(['james', 'james', 'john'])
//     #=> { 'james': 2, 'john': 1}

function count(array){
  var counts = {};
  array.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
  return counts;
}


//count all the occuring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }
function count (string) {
  // The function code should be here
   return {};
}
