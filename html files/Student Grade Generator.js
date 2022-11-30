const calculate = () => {
    // Getting input from user into height variable.
    let marks = document.querySelector("#marks").value;
    let grades = "";
 
    // Input is string so typecasting is necessary. */
    let totalgrades =
       parseFloat(marks) +
      
 
    
    if (percentage <= 100 && percentage >= 80) {
       grades = "A";
    } else if (percentage <= 79 && percentage >= 60) {
       grades = "B";
    } else if (percentage <= 59 && percentage >= 40) {
       grades = "C";
    } else {
       grades = "F";
    }
 
 };
