//Code with Mosh
// Javascript Arrays

const numbers =[3, 4];

numbers.push(5,6); 
// Pushes Elements to the end of the Array.

numbers.unshift(1,2);
// Pushes Elements to the beginning of the Array.

numbers.splice(2, 0, 'a', 'b');
//Splice method inserts elements according to index of the array.
// console.log(numbers);

const digits = [1, 2, 3, 1, 4];
// console.log(digits.indexOf(1));
//indexOf allows you to find the index of the element within the array.
// console.log(digits.lastIndexOf(1));

// console.log(digits.includes(2));
//includes run a Boolean the declare whether the array includes that element.

const courses = [
  {id:1, name: 'a'},
  {id:2, name: 'b'},
]

const course = courses.find(function(course){
  return course.name === 'a';
});
//find method uses a function similiar to a callback with an element within the array.
// console.log(course);

const theseNumbers = [1,2,3,4];

// const last = theseNumbers.pop();
//pop method removes last element within the array.
// console.log(theseNumbers);
// console.log(last);

// const beginning = theseNumbers.shift();
//shift method removes last element within the array.
// console.log(theseNumbers);

theseNumbers.splice(2,2)
//splice method removes starting the index, then how many elements from the index. 
// console.log(theseNumbers);


//Emptying an Array
let myNumbers = [2,0,1,9];

//solution #1
// myNumbers =[];

//solution #2
// myNumbers.length = 0;

//solution #3
// myNumbers.splice(0, myNumbers.length);

// solution #4 not optimal
// while (myNumbers.length > 0)
// myNumbers.pop();

// console.log(myNumbers);

//Combining Arrays
const first = [1,2,3];
const second = [4,5,6];

// first.concat(second);

//Spread Operator
const combined =[...first, 8, ...second];
console.log(combined);
//spread operator get all element from the array thats is declared.


//LEFT OFF interating Array 
let thisArray = ['elephant', 1, 2, '22'];
// console.log(thisArray);

function sumMix(arr){
  let newArr = [];

  for(i =0; i< arr.length; i++){
    if(typeOf([i] === 'number')
      newArr.push([i]);
  }
  return newArr
}
sumMix(thisArray);


