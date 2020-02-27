var number=prompt("Enter a number");

if(number>=0 && number<=100){

if(number<33){

console.log("Sorry, You Failed : F");

}

else if(number<39.5){

console.log("Passed : D");

}

else if(number<49.5){

console.log("Passed : C");

}

else if(number<59.5){

console.log("Passed : B");

}

else if(number<69.5){

console.log("Passed : A-");

}

else if(number<79.5){

console.log("Passed : A");

}

else{

console.log("Great! : A+");

}

}

else{

console.log("Invalid Input : Put number between 0 to 100");

}