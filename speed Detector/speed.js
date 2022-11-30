//decrearing and calling the prompt fuction from json modules
const prompt=require("prompt-sync")();
//requesting the user to input the speed
let speedInput=prompt("Enter speed in Km/hr:");
//main functionality of the code
function getSpeed(){
    //parsing the input to avariable
    let speed=speedInput;
    //speed  grater than or equal to 0 and less than or equal to 70
    if(speed>=0 && speed<=70){
        console.log('Ok');
    }
    //speed more than 70
    else if(speed>70){
        //calling the points fuction 
      points();   
    }
}
//calculating points for the speed more than 70
function points(){
    let speed=speedInput;
    //computing the points 1 point=5km/hr
   let point=(speed-70)/5;
   //points less than 12
    if(point<12){
        console.log(`points:${point}`);
    }
    //points more than or equal 12 points
    else if(point>=12){
        console.log(`points:${point}`);
        console.log('License suspended');
    }
    }
    //calling the getSpeed function
getSpeed(); 