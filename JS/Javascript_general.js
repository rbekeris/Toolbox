//Use console
console.log("Hello world!")

//Logical Operators
//AND
true && false // false
true && true // true
//OR
true || false // true
false || false // false
//NOT
!true // false
!false // true
//TERNARY (if true then 1st, if false then 2nd)
console.log(true ? 1:2) // returns 1
console.log(false ? 1:2) // returns 2

//ASSIGNMENT
// Define a variable
let one = 1, two = 2;
const greeting = "Hello";

//FUNCTIONS
//IF 
let ValueOfInterest = 3
if (ValueOfInterest == 3) {
	console.log("Brilliant");
	} else { 
		console.log("Not so Brilliant");
	}

//IF & ELSE IF
let ValueOfInterest = 2 
if (ValueOfInterest == 3) {
	console.log("Brilliant");
	} else if (ValueOfInterest == 2){
		console.log("Almost Brilliant");
		} else {
			console.log("Not so Brilliant");
		}

//LOOP and INCREMENT COUNTER
let number = 2
while(number < 10 ){
	number+=1;
	//number-=1
	//number++
	//number-
	//number*2
	console.log(number)
}

//DEFINE CUSTOM FUNCTION

const FxName = function(ARG_1,ARG_2){
	return ARG_1*ARG_2;
};
console.log(FxName(2,5))

function FxName(Arg_1, Arg_2){
	//default value can be added as Arg_2 = 4
	return Arg_1+Arg_2;
}

const Fxname = (Arg1,Arg2) => {
	return Arg1/Arg2;
};
console.log(Fxname(2,5))

//DATA STRUCTURES

let OurBrilliantArray = [2,3,4,5,6];
console.log(OurBrilliantArray)

//Array has properties

let OurBrilliantArray = [2,3,4,5,6];
console.log(OurBrilliantArray.length)

//Arrat has methods
let OurBrilliantArray = [2,3,4,5,6];
ValueToAdd = 7
//append a value to an array
OurBrilliantArray.push(ValueToAdd);
console.log(OurBrilliantArray)
//remove the last value from an array
OurBrilliantArray.pop();
console.log(OurBrilliantArray)

// ---- OBJECTS
// ---- "You may think of objects as octopuses with any number of tentacles, each of which has a name tattooed on it"
let day1 = {
	AteLunch: false,
	Events: ["Work","Went to store","Ate Chocolate","Ran 5 km"]
};
console.log(day1.AteLunch)

//we can easily add new property and assign a value to it!
day1.BrushedTeeth = true;
console.log(day1.BrushedTeeth)
