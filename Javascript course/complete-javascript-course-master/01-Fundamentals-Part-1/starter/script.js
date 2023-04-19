// This is said to be an inline script
let js = "Amazing";
alert(js);

console.log(40 + 9 + 1119);

let firstname = "Gokul";
let lastname = "Dharani";

firstname = "K";

alert(firstname);
alert(lastname);

let newLine = 27;
let PI = 3.145;

/*ASSIGNMENT - 01

LECTURE: Values and Variables
1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
2. Log their values to the console

*/

let country = "India";
let continent = "Asia";
let population = 500000;
console.log(typeof population);
console.log(
  " In " +
    country +
    "of the continent" +
    continent +
    "we have " +
    population +
    "people"
);

// Datatypes
/*
1) Number  -> float and int
2) String -> sequence of characters
3) Boolean -> True / False
4) undefined -> Value not yet defined
5) Null -> Means of empty Value
6) Symbol -> value is unique and cannot be changed 
7) BigInt -> Larger than normal int

*/

/*
LECTURE: Data Types
1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console
*/
let isIsland = false;
let language;

console.log(isIsland, population, country, language);

// Three variables declration in variables

var oldkeyword = "This is how its done in old days";
let newKeyword = "variable declaration";
const constantKeyword = "This is a constant";

/*
LECTURE: let, const and var
1. Set the value of 'language' to the language spoken where you live (some
countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never
change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens
*/
let languages = "Tamil";
const country_stay = "india"; // immutable and cannot create empty const variable

/*
LECTURE: Basic Operators
1. If your country split in half, and each half would contain half the population,
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than
Finland?
4. The average population of a country is 33 million people. Does your country
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese'
*/

let population_in_half = population / 2;
population++;
let Finland_population = 30000000;
console.log(population);
console.log(population > Finland_population);
let description =
  country +
  " is in " +
  continent +
  " ,and its " +
  population +
  " million people speak " +
  languages;
console.log(description);
//console.log(now);

let x, y;

/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.

*/

let mark_mass = 78;
let marks_height = 1.69;

let john_mass = 85;
let john_height = 1.88;

var bmi_mark;
var bmi_john;

bmi_mark = mark_mass / marks_height ** 2;
bmi_john = john_mass / john_height ** 2;

console.log(bmi_mark > bmi_john);
console.log(bmi_john);
console.log(bmi_mark);

if (bmi_mark > bmi_john) {
  console.log("Mark BMI is higher");
} else {
  console.log("John BMI is higher ");
}

console.log(` I 'm ${bmi_john}, this is  another guys ${bmi_mark}`);

const age = 19;
if (age > 18) {
  console.log("You are eligible to vote");
} else {
  const yearsleft = 18 - age;
  console.log(
    `You are not eligible to vote you only have ${yearsleft} age left..`
  );
} // Sring and template literals

//Type conversion

let num = "20";

num = Number(num);

//5 falsy valyes

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean({}));

//22 eqauality operators

// === Strict equality operator
// == non strict  18 == '18'
let numer = prompt("Enter the number");
console.log(numer);

if (numer === 13) {
  console.log(123);
} else if (numer == 13) {
  console.log("Hello");
} else {
  console.log(12345);
}

// !== // Strict version
// != // loose version

/*

Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

*/
