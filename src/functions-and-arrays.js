// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(n1,n2)
{
  if(n1>n2)
  {
    return n1;
  }
  else 
  {
    return n2;
  }
}
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words)
{
  var lengthyWord,maxLength=0;
  if(words.length==0)
  {
    return null;
  }
  for(var i=0;i<words.length;i++)
  {
    var lengthOfLengthyWord=words[i].length;
    if(lengthOfLengthyWord>maxLength)
    {
      maxLength=lengthOfLengthyWord;
      lengthyWord = words[i];
    }
  }
  return lengthyWord;
}
// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(price) 
{
  var sum = 0;
  for (var i = 0; i < price.length; i++) 
  {
    sum = sum+price[i];
  }
  return sum;
}
// Progression #4: Calculate the average
function add(array) 
{
  var sum = 0;
  if (array.length == 0)
  {
   return 0;
  }
  else 
  {
    for (var i = 0; i < array.length; i++) 
    {
      if (typeof array[i] === "number") 
      {
        sum = sum+ array[i];
      }
      else if (typeof array[i] === "string") 
      {
        var l = array[i].length;
        sum = sum+ l;
      } 
      else if (typeof array[i] === "boolean") 
      {
        var l = array[i] / 1;
        sum = sum+ l;
      }
      if(typeof array[i] === "array"|| typeof array[i] === "object")
      {
       throw Error("Unsupported data type sir or ma'am");
      }
    }
  }
  return sum;
}
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(numbersAvg) 
{
  var sum = 0;
  if (numbersAvg.length == 0)
  {
   return null;
  }
  for (var i = 0; i < numbersAvg.length; i++) 
  {
    sum = sum+ numbersAvg[i];
  }
  return sum / numbersAvg.length;
}
// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordsArr) {
  if (wordsArr.length == 0) 
  {
    return null;
  } 
  else 
  {
    var sum = 0;
    for (var i = 0; i < wordsArr.length; i++) {
      sum = sum+ wordsArr[i].length;
    }
    return sum / wordsArr.length;
  }
}

function avg(mixedArray) 
{
  if (mixedArray.length == 0) 
  {
    return null;
  }
  else 
  {
    var sum = 0;
    for (var i = 0; i < mixedArray.length; i++) 
    {
      if (typeof mixedArray[i] == "number") 
      {
        sum = sum+ mixedArray[i];
      } 
      else if (typeof mixedArray[i] == "string") 
      {
        var l = mixedArray[i].length;
        sum = sum+ l;
      } 
      else if (typeof mixedArray[i] == "boolean") 
      {
        var l = mixedArray[i];
        sum = sum+ l;
      } 
      else throw Error;
    }
    var result = (sum / mixedArray.length)*100;
    result= parseInt(result);
    var average = result/100;
    return average;
  }
}
// Progression #5: Unique arrays          
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
function uniqueArray(wordsUnique) 
{
  if (wordsUnique.length == 0) 
  {
    return null;
  }
  return wordsUnique.filter((value, index) => wordsUnique.indexOf(value) === index);
}
// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(wordsFind, element) 
{
  if (wordsFind.length == 0) return null;
  for (var i = 0; i < wordsFind.length; i++) 
  {
    if (wordsFind[i] === element) 
    {
    return true;
    }
  }
}
// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function howManyTimesElementRepeated(wordsCount, element) 
{
  if (wordsCount.length == 0)
  {
   return 0;
  }
  var count = 0;
  for (var i = 0; i < wordsCount.length; i++)
    if (wordsCount[i] == element) count++;
  return count;
}
// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
function maximumProduct(matrix) 
{
  var max = 0;
  var result;
  for (var i = 0; i < 8; i++) 
  {
    for (var j = 0; j < 8; j++) 
    {
      if (j - 3 >= 0)
        result =
          matrix[i][j] * matrix[i][j - 1] * matrix[i][j - 2] * matrix[i][j - 3];
      if (max < result) 
        max = result;
    }
    if (i - 3 >= 0) {
      result =
        matrix[i][j] * matrix[i - 1][j] * matrix[i - 2][j] * matrix[i - 3][j];
      if (max < result)
       max = result;
    }
  }
  return max;
}

function maximumProductOfDiagonals(matrix) 
{
  var max = 0;
  var result;
  for (var i = 0; i < 8; i++) 
  {
    for (var j = 0; j < 8; j++) 
    {
      if (j - 3 >= 0 && i - 3 >= 0) 
      {
        result =
          matrix[i][j] *
          matrix[i - 1][j - 1] *
          matrix[i - 2][j - 2] *
          matrix[i - 3][j - 3];
        if (max < result)
         max = result;
      }
    }
  }
  return max;
}