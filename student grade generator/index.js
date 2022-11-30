const prompt=require("prompt-sync")();

function grade(){
    //prompt the user to input marks
  let marks=prompt("Enter marks:");
    //parrsing the input to a variable
    let mark=marks;
    //checking if the marks input is valid
    
    if(mark!==null){
      //when marks is greater than 79 grade is A
        if((mark>79 &&mark<=100)){
            console.log('Grade: A');
        }
        //when marks is greater than 59 and less than or equal to 79 grade is B
        else if(mark>59 && mark<=79){
            console.log("Grade: B")
        }
        //when marks is greater than 49 and less than or equal to 59 grade is C
        else if(mark>49 && mark<=59){
            console.log("Grade: C")
        }
        //when marks is greater than 39 and less than or equal to 49 grade is D
        else if(mark>39 && mark<=49){
            console.log("Grade: D")
        }
        //when marks is greater than 0 and less than or equal to 39 grade is E
        else if(mark<=30 &&mark>-1){
            console.log('Grade: E')
        }
        // marks less than 0 and greater than 100
        else{
            console.log("marks out of range")
        }
    }else if(mark===nill){
        console.log("enter ")
    }
}
    
    

grade();