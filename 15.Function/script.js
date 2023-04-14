///////////// 1.Return the First Element in an Array.
// Create a function called "getFirstValue()" that takes an array containing only numbers and return the first element.

// result seem like this:
// getFirstValue([1, 2, 3])  // 1
// getFirstValue([80, 5, 100]) // 80
// getFirstValue([-50, 0, 50]) // -50


const arr1 = [1, 2, 3];
const arr2 = [80, 5, 100];
const arr3 = [-50, 0, 50];

const getFirstValue = function (allArray) {
  return allArray[0];
};
console.log(getFirstValue(arr1));
console.log(getFirstValue(arr2));
console.log(getFirstValue(arr3));



////////////// 2.Return the Last Element in an Array.
// Create a function called "getLastItem()" that accepts an array and returns the last item in the array.
// Don't forget to return the result.

// getLastItem([1, 2, 3])  // 3
// getLastItem([1, 2, 3])  // duck
// getLastItem([true, false, true]) //true

const arr4 = [1, 2, 3];
const arr5 = [1, 2, "duck"];
const arr6 = [true, false, true];

const getLastItem = function (allArray2) {
  return allArray2[2];
};
console.log(getLastItem(arr4));
console.log(getLastItem(arr5));
console.log(getLastItem(arr6));

////////////// 3.Find the Index
// Create a function that takes an array and a string as arguments and returns the index of the string (used: Function Expression).
// Don't forget to return the result.

// findIndex(["hi", "edabit", "fgh", "abc"], "fgh") //
// findIndex(["Red", "blue", "Blue", "Green"], "blue") // 1
// findIndex(["a", "g", "y", "d"], "d")  // 3
// findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") // 0

const arr7 = ["hi", "edabit", "fgh", "abc"];
const arr8 = ["Red", "blue", "Blue", "Green"];
const arr9 = ["a", "g", "y", "d"];
const arr10 = ["Pineapple", "Orange", "Grape", "Apple"];
const str = [];   /////

const findIndex = function (Arr, Str) {
  for (num of Arr) {
    if ((num = Str)) {
    }
  }
  return num;
  // console.push
};
console.log(findIndex(arr7, str));
console.log(findIndex(arr8, str));
console.log(findIndex(arr9, str));
console.log(findIndex(arr10, str));

/////////////// 4.Return the Sum of Two Numbers.
// Create a function that called "addition()" takes two numbers as arguments and returns their sum.(used: Parameter)
// Don't forget to return the result.

// addition(3, 2) // 5
// addition(-3, -6) // -9
// addition(7, 3) // 10

function addition(a,b) {
    return a+b;
}
console.log(addition(3,2));
console.log(addition(-3,-6));
console.log(addition(7,3));

/////////////// 5.Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false. (used: Arrow function)

// lessThan100(22, 15) // true
// //22+15=37
// lessThan100(83, 34) // false
// //83+34=117
// lessThan100(3, 77) // true

const lessThan100 = (a, b) => {
  if (a + b < 100) {
    return true;
  } else {
    return false;
  }
};
console.log(lessThan100(22, 15));
console.log(lessThan100(83, 34));
console.log(lessThan100(3, 77));

//////////////// 6.Volume of a Box
// Create a function that takes an object argument sizes (contains width, length, height keys)
//  and returns the multiplication sizes of the box.
// Don't forget to return the result.

// volumeOfBox({ width: 2, length: 5, height: 1 }) // 10

// volumeOfBox({ width: 4, length: 2, height: 2 }) // 16

// volumeOfBox({ width: 2, length: 3, height: 5 }) // 30


function volumeOfBox(width, length, height) {
  return width * length * height;
}
console.log(volumeOfBox(2, 5, 1));
console.log(volumeOfBox(4, 2, 2));
console.log(volumeOfBox(2, 3, 5));

///////////////// 7.Basketball Points
// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
// Create a function called "points(twoPointers, threePointers)" and add two parameters to it.

// points(1, 1) // 5
// points(7, 5) // 29
// points(38, 8) // 100

function basketball(twoPointers, threePointers) {
  return twoPointers * 2 + threePointers * 3;
}
console.log(basketball(1, 1));
console.log(basketball(7, 5));
console.log(basketball(38, 8));

// 8.Create a function called 'fillInfo()', which is used to change "my name" to 'Ulfat' ,'my surname' to 'Zakirli', 'my city' to 'Baku'.
// (used: for...of).
// const arr5 = [
//     {
//         name: 'my name',
//         surname: 'my surname',
//         city: 'my city'
//     },
//     {
//         name: 'my name',
//         surname: 'my surname',
//         city: 'my city'
//     },
//     {
//         name: 'my name',
//         surname: 'my surname',
//         city: 'my city'
//     }
// ]

const arr11 = [
  {
      name: 'my name',
      surname: 'my surname',
      city: 'my city'
  },
  {
      name: 'my name',
      surname: 'my surname',
      city: 'my city'
  },
  {
      name: 'my name',
      surname: 'my surname',
      city: 'my city'
  }
]
function fillInfo(name,surname,city) {
  for(let num of arr11) {
     console.log(name,surname,city);
  }
}
fillInfo('Myname', 'mySurname','MyCity')