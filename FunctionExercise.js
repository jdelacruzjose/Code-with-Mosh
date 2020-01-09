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

  //  5- Default Parameters
function interest(principal, rate, years){
  return principal * rate/100 * years
}

console.log(interest(10000, 3.5, 5));


  //  6- Getters and Setters
const person = {
  firstName: 'Jose',
  lastName: 'De la Cruz',
  get fullName(){
    return `${person.firstName} ${person.lastName}`
  },
  set fullName(value){
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

person.fullName = 'Jhonny Cruz'

console.log(person.fullName);

  //  7- Try and Catch
  const thePerson = {
  firstName: 'Jose',
  lastName: 'De la Cruz',

  set fullName(value){
    if(typeof value !== 'string');
      throw new Error('Value is not a string.');

    const parts = value.split(' ');
    
    if(parts.length !== 2)
      throw new Error(' Enter a Fisrt and Last name')
    this.firstName = parts[0];
    this.lastName = parts[1];
    }
  };
  try {
    thePerson.fullName = ' ';
  }
  catch(e){
    alert(e);
  }