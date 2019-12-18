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
console.log(course);
