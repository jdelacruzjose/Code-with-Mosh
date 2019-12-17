// Code With Mosh
// Object Exercise #1
// let Home = {
//  street: '7977 W 12th Ave',
//  city: 'Miami',
//  zipCode: 33014,

// }

// function showAddress(address){
//   return address.city;
// }

// showAddress(Home);


// Object Exercise #2
// Factory Function
// function createNewAddress(street, city, zipCode){
//   return {
//       street: street,
//       city: city,
//       zipCode: zipCode
//   };
// }

// createNewAddress('447 Moreland Ave','Atlanta','30307');

// Contructor Function
function Address(street, city, zipCode){
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

new Address('49 Rue des Abbesses','Montmartre','75018');