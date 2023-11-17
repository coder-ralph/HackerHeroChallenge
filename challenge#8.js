// Create a function that prints/logs all the even numbers from 4 to 22.
// Have it also return the sum of all the numbers that were printed.

function printEven4to22() {
  let sum = 0;

  for (let i = 4; i <= 22; i += 2) {
    console.log(i);
    sum += i;
  }

  return sum;
}

// Call the function to see the output and get the sum
const sumResult = printEven4to22();
console.log("Sum of even numbers:", sumResult);
