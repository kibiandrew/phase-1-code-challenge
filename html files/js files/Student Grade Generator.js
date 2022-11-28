const calculate = () => {
    // Getting input from user into height variable.
    let marks = document.querySelector("#marks").value;
    let grades = "";
 
    // Input is string so typecasting is necessary. */
    let totalgrades =
       parseFloat(marks) +
      
 
    // Checking the condition for the providing the
    // grade to student based on percentage
    let percentage = (totalgrades / 100) * 100;
    if (percentage <= 100 && percentage >= 80) {
       grades = "A";
    } else if (percentage <= 79 && percentage >= 60) {
       grades = "B";
    } else if (percentage <= 59 && percentage >= 40) {
       grades = "C";
    } else {
       grades = "F";
    }
    // Checking the values are empty if empty than
    // show please fill them
    if (marks== "") { document.querySelector("#showdata").innerHTML = "Please enter all the fields";
    } else {
       // Checking the condition for the fail and pass
       if (percentage >= 39.5) {
       document.querySelector(
          "#showdata"
       ).innerHTML =
          ` Out of 300 your total is ${totalgrades}
          and percentage is ${percentage}%. <br>
          Your grade is ${grades}. You are Pass. `;
       } else {
          document.querySelector(
             "#showdata"
       ).innerHTML =
          ` Out of 100 your total is ${totalgrades}
          and percentage is ${percentage}%. <br>
          Your grade is ${grades}. You are Fail. `;
       }
    }
 };