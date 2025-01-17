// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Example format of an intern object: 1,examples@you.edu,Example,F
const example = {
  "id": 0,
  "name": "Example",
  "email": "examples@you.edu",
  "gender": "F"
}

// Write your intern objects here:
const newInterns = [
{
  "id": 1,
  "email": "mmelloy0@psu.edu", 
  "firstName": "Mitzi", 
  "gender": "F"
},
  {
    "id": 2,
    "email": "kdiden1@tinypic.com",
    "firstName": "Kennan",
    "gender": "M"
  },
  {
    "id": 3,
    "email": "kmummery2@wikimedia.org",
    "firstName": "Keven",
    "gender": "M"
  }, 
  {
    "id": 4,
    "email": "gmartinson3@illinois.edu",
    "firstName": "Gannie",
    "gender": "M"
  },
  {
    "id": 5,
    "email": "adaine5@samsung.com",
    "firstName": "Antonietta",
    "gender": "F"
  },
];

// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(newInterns[0].firstName);

// Kennan's ID
console.log(newInterns[1].id);

// Keven's email
console.log(newInterns[2].email);

// Gannie's name
console.log(newInterns[3].firstName);

// Antonietta's Gender
console.log(newInterns[4].gender);



// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());

//create a arrow function
console.log(newInterns[2].speak("Hello, my name is ","firstName"));

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));
console.log(newInterns[5].multiplyNums(2,5));

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {}

// Log the parent object's name

// Log the child's age

// Log the name and age of the grandchild

// Have the parent speak

// Have the child speak

// Have the grandchild speak
