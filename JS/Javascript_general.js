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

//ARRAY LOOPS
let OurBrilliantArray = [2,3,4,5,6];
for (let i = 0; i < OurBrilliantArray.length; i++) {
	let OurArrayMember = OurBrilliantArray[i];
	console.log("Member #:" + i + OurArrayMember);
}

//post 2015 Javascript adds a better way to write the same thing
let OurBrilliantArray = [2,3,4,5,6];
for (let OurArrayMember of OurBrilliantArray) {
	console.log("Member #:" + OurArrayMember);
}

//A function that loops over array members and append a new array only with unique values

function CreateUniqueMemberArray(Array){
	let UniqueMembers = []
	for (let MemberEntry of Array) {
		//If the UniqueMembers don't include the iterated member...
			if (!UniqueMembers.includes(MemberEntry)) {
				UniqueMembers.push(MemberEntry);
			}
		}
	return UniqueMembers;
	}
let OurBrilliantArray = [1,1,2,2,3,3,5,5,6,6,6];
UniqueMemberArray = CreateUniqueMemberArray(OurBrilliantArray)
console.log(UniqueMemberArray)

//Return the position of a specific value in array
let BigArray = ["Hamster","Tank","Mailbox","Bear"]
console.log(BigArray.indexOf("Mailbox"));
//Return the position, but start counting from the other end (maybe faster in a very large array)
console.log(BigArray.lastIndexOf("Mailbox"));

//Slice an array between two indices (start= inclusive end = exclusive)
console.log(["Bear","Fox","Turtle","Ant","Elephant","Horse"].slice(2,4))
//when end index is not given, returns everything after
console.log(["Bear","Fox","Turtle","Ant","Elephant","Horse"].slice(2))

//Concat + Slice = function that removes a certain element
function remove(array, index) {
	return array.slice(0,index).concat(array.slice(index + 1));
}
console.log(remove(["a","b","c","d","e"],3))

//METHODS
//Methods are Object properties that hold function values
let rabbit = {};
rabbit.speak = function(line) {
	console.log(`The rabbit says '${line}'`);
};
rabbit.speak("I actually don't like carrots that much.")

//CLASSES
//A class defines the shape of a type of object (what methods and properties it has). An object of such class is called an Instance.
