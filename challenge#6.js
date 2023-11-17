// Log positive numbers starting at 50, counting down by fives (exclude 0).

function countdownByFives(){
  for (let i = 50; i > 0; i -= 5) {
    console.log(i);
  }
}

// Call the function to see the output
countdownByFives();