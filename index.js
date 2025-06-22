//Create variable that multiply variables
let num1 = 31;
let num2 = 2;
let multiply = num1 * num2;

//Create a variable called random to generate a random integer greater than 0 and less than or equql to 10
let random;
random = Math.floor(Math.random() * 10) + 1;

/* Math.random() gives a float between 0 (inclusive) and 1 (exclusive)
Math.random() * 10 gives a float between 0 and 9.999...
Math.floor() rounds down to the nearest integer (0 to 9)
Adding 1 shifts the range to 1 to 10
*/

//calculate the remainder of dividing variable num3 by num4
let num3 = 28;
let num4 = 6;
let mod = num3 % num4;

//Create a variable called max that finds the highest number in a set; the value returned should be 20.
let numSeries = [1, 2, 4, 8, 16, 20];
let max = Math.max(...numSeries);