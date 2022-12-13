//STRICT MODE
'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if(hasDriversLicense) console.log(`i can drive`);

//const interface = 'audio';//
//const private = 543;//
//const if = 789;//
*/

//FUNCTIONS
//decalring the function
/*
function logger(){
    console.log(`My name is JC`);
}

//calling, invoking the function
logger();
logger();
logger();


function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 9);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(7, 6);
console.log(appleOrangeJuice);
*/

//FUNCTION DECLARATION VS. EXPRESSION
/*
//function declaration
function calcAge1(birthYear){
    return 2037 - birthYear;
}

const age1 = calcAge1(1997);


//function expression
const calcAge2 = function(birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);
*/

//ARROW FUNCTION
/*
const calcAge3 = birthYear => 2037 - birthYear;//declaring function
//const age3 = calcAge3(1991);// puting the value of calcAge3 cludes variable
console.log(calcAge3(1991));// logging the variable calcAge3

const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1991));


const yearsUntilRetirements = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirements(1997, 'JC'));
console.log(yearsUntilRetirements(1998, 'JB'));
*/

//FUNCTIONS CALLING OTHER FUNCTIONS
/*
//2nd function
const cutPieces = function(fruit){
    return fruit * 4;
}

//1st function
function fruitProcessor(apples, oranges) {

    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
};
console.log(fruitProcessor(2, 3)); // Juice with 8 apples and 12 oranges.
*/

//REVIEWING FUNCTION
/*
const calcAge = function (birthYear) {
    return 2022 - birthYear;
}

const yearsUntilRetirements = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired.`);
        return -1;
    }
}

yearsUntilRetirements(1991, 'Jonas');//Jonas retires in 34 years
yearsUntilRetirements(1970, 'Joe');//Joe retires in 13 years
*/

//3 TYPES OF FUNCTION
/*
//function decalration
function calcAge(birthYear) {
    return 2037 - birthYear;
}

//function expression
const calcAge = function (birthYear){
    return 2037 - birthYear;
};

// arrow function 
const calcAge = (birthYear) => 2037 - birthYear;
*/
/*
function calcAge(birthYear, firstName) {
    const age = 2037 - birthYear;
    console.log(`${firstName} is ${age} years old`);
    return age;
}

calcAge(1991, 'Jonas');
*/

// CODING CHALLENGE 1

//TEST DATA 1
/*
const calcAverage = (a, b, c) => (a + b + c)/ 3; 

// calculating average
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

//knowing which team wins
const checkWinner = function (avgDolphins, avgKoalas){
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
}

checkWinner(scoreDolphins, scoreKoalas);// no team wins
checkWinner(576, 111); // Dolphins win (576 vs. 111)

//TEST DATA 2

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);// 60, 28
checkWinner(scoreDolphins, scoreKoalas);//Dolphins win (60 vs. 28)
*/


//ARRAY
/*
const years = new Array(1992, 1993, 1994);

console.log(years);//[1992, 1993, 1994]

const friends = ['JC', 'Georgette', 'Jereme'];
console.log(friends[0]);// JC

console.log(friends.length);// 3
console.log(friends[friends.length - 1]);// Jereme

friends[0] = 'Juan';
console.log(friends); // ['Juan', 'Georgette', 'Jereme']


const firstName = 'JC';
const pogi = [firstName, 'Lipa', 2022-1997, 'teacher', friends];

console.log(pogi);// ['JC', 'Lipa', 25, 'teacher', Array(3)]

//Exercise

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearss = [1990, 1967, 2002, 2010, 2018];

const ages = [calcAge(yearss[0]), calcAge(yearss[3]), calcAge(yearss[yearss.length - 1])]; 
console.log(ages); // (3) [47, 27, 19]

//another way

const age1 = calcAge(yearss[0]);
const age2 = calcAge(yearss[3]);
const age3 = calcAge(yearss[yearss.length - 1]);

console.log(age1, age2, age3);// 47 27 19
*/



// BASIC ARRAY OPERATIONS
/*
//Adding Elements In Array

// push - add elements on the last array

const friends = ['John', 'Georgette', 'JC'];
friends.push('Mika');
const newLength = friends.push('Mika');
console.log(friends);//(5) ['John', 'Georgette', 'JC', 'Mika', 'Mika']
console.log(newLength); // 5
//

//unshift - add element at the beginning of array

friends.unshift('Yoko');
console.log(friends);//(6) ['Yoko', 'John', 'Georgette', 'JC', 'Mika', 'Mika']


//Removing Elements In Array

//pop - remove elements on the last array
friends.pop()
console.log(friends);//(5) ['Yoko', 'John', 'Georgette', 'JC', 'Mika']
friends.pop()
console.log(friends);// (4) ['Yoko', 'John', 'Georgette', 'JC']
friends.shift()
console.log(friends);// (3) ['John', 'Georgette', 'JC']
friends.shift()
console.log(friends);// (2) ['Georgette', 'JC']

//order of position
console.log(friends.indexOf('JC'));//1
console.log(friends.indexOf('Georgette'));// 0
console.log(friends.indexOf('Yoko')); // -1

//includes 
console.log(friends.includes('JC'));// true
console.log(friends.includes('Georgette'));// true
console.log(friends.includes('Yoko')); // false
friends.push('Yoko');
console.log(friends.includes('Yoko'));//true

if (friends.includes('Mika')) {
    console.log('You have a friend called Mika');
} else {
    console.log('You dont have a friend called Mika');
}//You dont have a friend called Mika
*/


//CODING CHALLENGE 2
/*
const calcTip = function (bill) {
    return bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
//(3) [125, 555, 44] 
//(3) [18.75, 111, 8.8] 
//(3) [143.75, 666, 52.8]
*/


// INTRODUCTION TO OBJECTS

/*
const jonasArray = [
    'John',
    'Lipa',
    25,
    'teacher'
    ['PJ', 'Jereme', 'JC']
];

console.log(jonasArray);

const jonas = {
    firstName: 'John',
    lastName: 'Lipa',
    age: 25,
    job: 'teacher',
    friends: ['PJ', 'Jereme', 'JC']
};

console.log(jonas);
*/


// DOT VS. BRACKET NOTATION

/*
const jonas = {
    firstName: 'John',
    lastName: 'Lipa',
    age: 25,
    job: 'teacher',
    friends: ['PJ', 'Jereme', 'JC']
};


// in dot notation, it needs real property name
console.log(jonas); //{firstName: 'John', lastName: 'Lipa', age: 25, job: 'teacher', friends: Array(3)}
console.log(jonas.lastName); // Lipa
console.log(jonas['lastName']); // Lipa


//// in bracker notation, it doesn't need real property name, computed is okay
const nameKey = 'Name';
console.log(jonas['first' + nameKey]); // John
console.log(jonas['last' + nameKey]); // Lipa

/*const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]); 
} else {
    console.log('wrong request! Choose between firstName, lastName, age, job, and friends')
}*/

/*
jonas.location = 'Manila';
jonas.twitter = '@jonaslipa';
jonas['food'] = 'adobo';
console.log(jonas); // age: 25 firstName: "John" food: "adobo" friends: (3) ['PJ', 'Jereme', 'JC' job: "teacher" lastName: "Lipa" location: "Manila" twitter: "@jonaslipa" [[Prototype]]: Object


// Challenge

// "Jonas has 3 friends, and his bestfriend is called PJ"
/*
console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`);
*/


//OBJECT METHOD

// const jonas = {
//     firstName: 'John',
//     lastName: 'Lipa',
//     birthYear: 1997,
//     job: 'teacher',
//     friends: ['PJ', 'Jereme', 'JC'],
//     hasDriversLicense: false,

//     // // calcAge: function() {
//     // //     console.log(this);//{firstName: 'John', lastName: 'Lipa', age: 25, birthYear: 1997, job: 'teacher', …}
//     // //     return 2037 - this.birthYear;
//     // }

//     calcAge: function() {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     }, // you can put a function expression inside object
//     // this.age kasi nasa loob naman sya ng object na jonas. pinaltan mo yung jonas ng this.

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()} year-old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//     }// you use ':' kasi nasa loob yung function ng object
// };

// // console.log(jonas.calcAge(1991));// 46
// // console.log(jonas['calcAge'](1992));// 45
// // console.log(jonas.calcAge());// 40
// //console.log(jonas.this.age);//40


// // Challenge
// // "John is a 40 yer-old teacher, and he has  a/no driver's license"

// console.log(jonas.getSummary()); // John is a 40 year-old teacher, and he has no driver's license


// CODING CHALLENGE 3


// const mark = {
//     firstName:'Mark',
//     lastName: 'Miller',
//     weight: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.bmi = this.weight / this.height ** 2;
//         return this.bmi;
//     },
// };

// const john = {
//     firstName:'John',
//     lastName: 'Smith',
//     weight: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.bmi = this.weight / this.height ** 2;
//         return this.bmi;
//     },
// };

// mark.calcBMI();
// john.calcBMI();

// console.log(mark.bmi, john.bmi);

// // console.log(`${mark.firstName}'s BMI (${mark.calcBMI()}) is higher than ${john.firstName}'s BMI (${john.calcBMI()}).`);

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s BMI (${john.bmi}).`);
// } else {
//     console.log(`${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s BMI (${mark.bmi}).`);
// };


// FOR LOOP; ITERATION

// for (let rep = 1; rep <=10; rep++) {
//     console.log(`lift weights repetition ${rep}`);
// } // lift weights repetition 1-10


// LOOPING ARRAYS, BREAKING, CONTINUING

// const jc = [
//     'JC',
//     'Lipa',
//     23,
//     'teacher',
//     ['PJ', 'Georgette', 'Mike'],
//     true,
// ];

// const types = [];

// for (let i = 0; i < jc.length; i++) {
//     console.log(jc[i], typeof jc[i]);

//     types[i] = typeof jc[i];
// } // JC string
//  // Lipa string
//  // 23 'number'
//  // teacher string
//  //  true 'boolean'

//  console.log(types); //  ['string', 'string', 'number', 'string', 'object', 'boolean']

//  const years = [1991, 2007, 1969, 2020];
//  const ages = [];

//  for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
//  }
//  console.log(ages); // [46, 30, 68, 17]


//  //continue and break
// // log object only
//  for (let i = 0; i < jc.length; i++){
//     if (typeof jc[i] !== 'object') continue;

//     console.log(jc[i], typeof jc[i]);
//  } // ['PJ', 'Georgette', 'Mike'] 'object'


// //continue with strings
// for (let i = 0; i < jc.length; i++){
//     if (typeof jc[i] !== 'string') continue;

//     console.log(jc[i], typeof jc[i]);
//  } // ['PJ', 'Georgette', 'Mike'] 'object'


//  //break with number
//  for (let i = 0; i < jc.length; i++){
//     if (typeof jc[i] !== 'number') break;

//     console.log(jc[i], typeof jc[i]);
//  } 


// LOOPING BACKWARDS AND LOOPS IN LOOPS
//backward loop
// const jc = [
//      'JC',
//      'Lipa',
//      23,
//      'teacher',
//      ['PJ', 'Georgette', 'Mike'],
//      true,
// ];

// for (let i = jc.length - 1; i >= 0; i--) {
//     console.log(i, jc[i]);
// } // true, ['PJ', 'Georgette', 'Mike'], 'teacher', 23, 'Lipa', 'JC',

// //loop inside a loop
// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`-------- starting exercise ${exercise}`);

//     for (let rep = 1; rep <= 5; rep++) {
//         console.log(`exercise ${exercise}: lifting weight repetition ${rep}`);
//     }
// } // -------- starting exercise 1
// script.js:534 exercise 1: lifting weight repetition 1
// script.js:534 exercise 1: lifting weight repetition 2
// script.js:534 exercise 1: lifting weight repetition 3
// script.js:534 exercise 1: lifting weight repetition 4
// script.js:534 exercise 1: lifting weight repetition 5
  // script.js:531 -------- starting exercise 2
// script.js:534 exercise 2: lifting weight repetition 1
// script.js:534 exercise 2: lifting weight repetition 2
// script.js:534 exercise 2: lifting weight repetition 3
// script.js:534 exercise 2: lifting weight repetition 4
// script.js:534 exercise 2: lifting weight repetition 5
  // script.js:531 -------- starting exercise 3
// script.js:534 exercise 3: lifting weight repetition 1
// script.js:534 exercise 3: lifting weight repetition 2
// script.js:534 exercise 3: lifting weight repetition 3
// script.js:534 exercise 3: lifting weight repetition 4
// script.js:534 exercise 3: lifting weight repetition 5

// WHILE LOOP

//for loop
// for (let rep = 1; rep <= 10; rep++) {
//      console.log(`for: lifting weight repetition ${rep}`);
//     }


// //while loop
// let rep = 1;//counter

// while (rep <= 10) {
//     console.log(`while: lifting weights repetition ${rep}`);
//     rep++;
// };


// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`You rolled a $(dice)`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log ('Loop is about to end...');
// }



// CODING CHALLENGE 4


const calcTip = function (bill) {
    return bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.2;
}

const bills = [ 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
   const tip = calcTip(bills[i]);//calculate the tip using bills value
   tips.push(tip);// putting each calculated tip
   totals.push(tip + bills[i]); // adding tip + bills
};

console.log(bills, tips, totals);


const calcAverage = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage(totals));// 275.19
console.log(calcAverage(tips));// 42.89
