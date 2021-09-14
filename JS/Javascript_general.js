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
	return Arg_1+Arg_2;
}