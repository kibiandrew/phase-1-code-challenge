const prompt=require("prompt-sync")();
let mark=prompt("please enter marks");
let marks=mark;
function grade(){

if(marks >= 80 && marks <= 100){
console.log("A");
}
else if(marks >= 60 && marks <= 79){
console.log("B");
}
else if(marks >= 50 && marks <=59){
console.log("C");
} 
else if(marks>=40 && marks <= 49){
console.log("D");
}
else if(marks <= 39){
console.log("E");

}
else {
console.log("INVALID MARKS");
}
}
grade() 