  //  1- Function Declarations vs Expressions

//Function Declaration
function walk(){
  console.log('walk');
}

//Function Expression
const run = function(){
  console.log('run');
};

let move = run;
// run();
// move();


 //  2- Hoisting
// Hoisting is Javascript default behavior of moving declerations to the top.


  // 3- Arguments
function addSum(){
  let total = 0;
  for (let value of arguments){
    total += value
  } 
  return total
}

// console.log(addSum(2,3,4,3,3,3));


  // 4- The Rest Operator
function Sum(discount, ...args){
  const total = args.reduce((a,b)=> a+b);
  return total * (1 - discount);
}

console.log(Sum(0.1,32,41));
