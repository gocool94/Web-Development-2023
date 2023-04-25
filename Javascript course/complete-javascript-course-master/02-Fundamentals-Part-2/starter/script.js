"use strict";
//  Functions

console.log("Hello");

function logger() {
  console.log("My name is Gokul");
}

logger();

function addition(num1, num2) {
  console.log(num1);
  console.log(num2);

  const sum = num1 + num2;

  console.log(sum);
}

addition(3, 4);

/*
LECTURE: Functions
1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'

2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console


*/

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its
    capital city is ${capitalCity}`;
}

console.log(describeCountry("india", 23, "Delhi"));
console.log(describeCountry("Australia", 34, "Sydney"));
console.log(describeCountry("France", 223, "d"));

//DRY -> Dont repeat yourself -> use of functions and OOPS concepts

// Function Decralations and expression

const calculateAge = function (BornYear) {
  return 2023 - BornYear;
};

console.log(calculateAge(1994));

// Function declaration can be called before but for function expression you cannot call before declaring

/*

LECTURE: Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population
2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations)

*/
function percentageOfWorld1(population) {
  const worldPopulation = 7900;
  const populationPercent = worldPopulation / population;
  return populationPercent;
}

const PopulationPercentage = function (population) {
  return population / 7900;
};

console.log(PopulationPercentage(1200));

//Arrow function

const age_value = (birthyear) => 2023 - birthyear;
console.log(age_value(1994));

const subration = (num1, num2) => num2 - num1;
console.log(subration(3, 1));

const calculation = (num1, num2) => {
  console.log(`Addition value is ${num1 + num2}`);
  console.log(`subration value is ${num1 - num2}`);
  console.log(`multiplication value is ${num1 * num2}`);
  console.log(`Division value is ${num1 / num2}`);
};

calculation(10, 20);

/*
LECTURE: Arrow Functions
1. Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3'
*/

const percentageOfWorld3 = (population) => 7900 / population;

console.log(percentageOfWorld3(1000));

//Function calling other functions.

/*
LECTURE: Functions Calling Other Functions
1. Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice
*/

function describePopulation(country, population) {
  return `${country} has ${population} million people which is about ${population_percent(
    population
  )} of the wworld`;
}

const population_percent = (numberofppl) => 7800 / numberofppl;

console.log(describePopulation("india", 2800));

/*
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B,okay  for A >= 2 * B.
Apply this to the team's averageokay  😉

*/

const calcAverage = (score1, score2, score3) => score1 + score2 + score3 / 3;

const Dolphins_Average = calcAverage(44, 23, 72);
const Koalas_Average = calcAverage(65, 54, 49);
console.log(Dolphins_Average);
console.log(Koalas_Average);
function checkWinner(Dolphins_Average, Koalas_Average) {
  if (Dolphins_Average >= Koalas_Average * 2) {
    console.log("Dolphins win");
  } else if (Dolphins_Average * 2 <= Koalas_Average) {
    console.log("Koalas win");
  } else {
    console.log("Draw");
  }
}
checkWinner(Dolphins_Average, Koalas_Average);

//Arrays

const Friends = ["Amar", "Vineeth", "Avimon", "Arun Kumar", "Bellu"];
console.log(Friends[0]);

console.log(Friends.length);
console.log(Friends[Friends.length - 1]);

//Array Methods

Friends.push("Akhil");

Friends.unshift("Appa"); //unshift to the first value

Friends.pop(); // Removes last element

Friends.indexOf("Amar"); // provides the index
Friends.includes("Amar"); // checks if the value is present or not

/*
LECTURE: Introduction to Arrays
1. Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a
variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function
'percentageOfWorld1' that you created earlier to compute the 4
percentage values
*/

const population_of_contries = [23, 222, 3333, 1212212, 134234];

console.log(population_of_contries.length === 4);

console.log(population_percent(population_of_contries[0]));
console.log(population_percent(population_of_contries[1]));
console.log(population_percent(population_of_contries[2]));
console.log(population_percent(population_of_contries[3]));

const percentagess = [
  population_percent(population_of_contries[0]),
  population_percent(population_of_contries[1]),
  population_percent(population_of_contries[2]),
  population_percent(population_of_contries[3]),
];
console.log(percentagess);

/*

LECTURE: Basic Array Operations (Methods)
1. Create an array containing all the neighbouring countries of a country of your
choice. Choose a country which has at least 2 or 3 neighbours. Store the array
into a variable called 'neighbours'
2. At some point, a new country called 'Utopia' is created in the neighbourhood of
your selected country. So add it to the end of the 'neighbours' array
3. Unfortunately, after some time, the new country is dissolved. So remove it from
the end of the array
4. If the 'neighbours' array does not include the country ‘Germany’, log to the
console: 'Probably not a central European country :D'
5. Change the name of one of your neighbouring countries. To do that, find the
index of the country in the 'neighbours' array, and then use that index to
change the array at that index position. For example, you can search for
'Sweden' in the array, and then replace it with 'Republic of Sweden'.

*/

const neighbourhood = ["Pakistan", "Srilanka", "China", "Bangaladesh"];
neighbourhood.push("Utopia");
neighbourhood.pop();
neighbourhood.includes("Germany");

const gokul = {
  age: 29,
  spouseName: "Niranjhani",
  livesIn: "Bangalore",
  worksIn: "Xyram",
  friends: ["amar", "avi", "bellu"],
};
console.log(gokul);
console.log(gokul.worksIn);

const numberoffriends = gokul.friends.length;

const bestfriend = gokul["friends"][0];

console.log(numberoffriends);
console.log(bestfriend);

/*

LECTURE: Introduction to Objects
1. Create an object called 'myCountry' for a country of your choice, containing
properties 'country', 'capital', 'language', 'population' and
'neighbours' (an array like we used in previous assignments)
LECTURE: Dot vs. Bracket Notation
1. Using the object from the previous assignment, log a string like this to the
console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
and a capital called Helsinki.'
2. Increase the country's population by two million using dot notation, and then
decrease it by two million using brackets notation.
*/

const myCountryValue = {
  country: "India",
  capital: "Delhi",
  language: ["Tamil", "Hindi", "English", "Telugu", "Urudu"],
  population: 33,
  neighbours: ["Bangladesh", "Pakistan", "Srilanka", "China"],
};

console.log(`${myCountryValue.country} has ${myCountryValue.population} million ${myCountryValue.language[0]}-speaking people, ${myCountryValue.neighbours.length} neighbouring countries
and a capital called ${myCountryValue.country}`);

const gokul_2 = {
  BirthYear: 1994,
  livesIn: "Bangalore",
  worksIn: "Xyram",
  friends: ["amar", "avi", "bellu"],

  calcValue: function (BirthYear) {
    return BirthYear - 1994;
  },

  detailed_value: function () {
    this.details = `Born in ${this.BirthYear} & lives in ${this.livesIn}`;
    return this.details;
  },

  hello: function () {
    this.Bestfriends = `${this.BirthYear} - 20000`;
    return this.Bestfriends;
  },
};

console.log(gokul_2.detailed_value());
console.log(gokul_2.calcValue(2023));
console.log(gokul_2.details);
console.log(gokul_2.hello());
console.log(gokul.Bestfriends);

/* 46 Loops

for loop keeps running while the condition is true


*/

for (let i = 0; i <= 10; i++) {
  console.log(`Let the number is ${i}`);
}

/*


Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array */

function calcTip(tip, amount) {
  var amount = amount * (tip / 100);
  return amount;
}

const bills = [122, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [12, 13, 14, 15, 16, 11, 78, 9, 22, 22];
let totals = [];

for (let i = 0; i < bills.length; i++) {
  totals.push(tips[i] + bills[i]);
}

console.log(totals);

function calcAver(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  let average = sum / array.length;

  return average;
}

console.log(calcAver([122, 295, 176, 440, 37, 105, 10, 1100, 86, 52]));

/*
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
GOOD LUCK 😀

*/

const Mark_object = {
  fullName: "Mark",
  mass: 78,
  height: 1.69,
  calcbmi: function () {
    this.bmi = this.mass / this.height ** 2;

    return this.bmi;
  },
};

const John_object = {
  fullName: "John",
  mass: 92,
  height: 1.95,
  calcbmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
console.log(Mark_object.calcbmi());
console.log(Mark_object.bmi);

console.log(John_object.calcbmi());
console.log(John_object.bmi);
