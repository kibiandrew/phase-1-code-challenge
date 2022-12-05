const prompt=require("prompt-sync")();
//request input
let speed=prompt("Enter speed in Km/hr:");
function speedPoints(){
    //parsing the input to avariable
    // and calculating points for the speed 
    if(speed < 70){
        console.log("Ok!")
    }
    else if (speed >70){
        const Points=((speed-70)/5)
        
        console.log(Math.ceil(Points));
        if(Points>=12){
            console.log("License suspended")
        }
    }
else{
    console.log("please check the speed entered")
}
}
    //calling the getSpeed function
speedPoints(); 