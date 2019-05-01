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

//Given: an array containing hashes of names
//Return: a string formatted as a list of names separated by commas except for the last two names,
// which should be separated by an ampersand.
// ex. list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'
// list([])
// returns ''

function list(names){
  names.map(&:inspect).join(', ')//your code here
}

//build a tower with astricks

function towerBuilder(nFloors) {
  if(nFloors > 0){
    var astArray = [];
    var ast = '*';
    if(nFloors == 1){
      return ast;
    }
    if(nFloors > 1){
      for(var n = 0;n < nFloors;n++){

      }
    }
  }
  else{
    return false
  }
}

//A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more capitals letters.
//The 1st letter of a code is the capital letter of the book category.
//In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

function stockList(listOfArt, listOfCat){
  const finalAnswer = "";
  const amounts = [];
  for(var i = 0; i < listOfCat.length; i++){
    const category = listOfCat[i];
    for(var n = 0; n < listOfArt.length; n++){
      const art = listOfArt[n];
      const splitArt = art.split(' ');
      const amount = splitArt[1];
      const indiviualCat = splitArt[0];
      const firstLetter = indiviualCat.split('');
      if(firstLetter[0] == category){
        amounts.push(firstLetter[0] + ":" + amount);
      }
    }
  }
  if(amounts.length > 0){

  }
}
