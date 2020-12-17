
const myName: string = "Michael";
const myText: string = "My simple Text";
const myTextAgain: string = "Hello World";
const greeting: string = `Welcome back ${myName}`;


const myAge: number = 47;
const hexNumber: number = 0x4242;
// binary and octal numbers will converted to decimal by the typescript transpiler
const binaryNumber: number = 0b101011100;
const octalNumber: number = 0o23535;

const isTaskDone: boolean = true;
const isGreaterThen: boolean = 10 > 9;

// Array
const numbers: number[] = [1,2,3,4,5,6];
const booleans: Array<boolean> = [true, true, true, false];


// Tuple
let person: [string, number];
person = ["Michael", 47];

console.log (`My name is ${person[0]} and my age is ${person[1]}`);


// Enum
enum ErrorLevel {
	Info,
	Debug,
	Warning,
	Error,
	Critical,
};

console.log(`Error Level: ${ErrorLevel.Error}`);
console.log(`Error Level: ${ErrorLevel[3]}`);

enum Color {
	Red   = '#FF0000',
	Green = '#00FF00',
	Blue  = '#0000FF',
};

console.log(`Color: ${Color.Red}`);


// Any
let maybeIs: any = 4;
maybeIs = 'a string?';
maybeIs = true;

// Void
function logThis(str: string): void {
	console.log(str);
}

logThis("Hello World");


// Interface
interface IPerson {
	name: string;
	lastname: string;
	age: number;
}

const me: IPerson = {
	name: "Michael",
	lastname: "Jentsch", 
	age: 48,
}


// object as function input
function greetingUser1 (user: {name: string, lastname: string})
{
	console.log(`Hello, ${user.name} ${user.lastname}`);
}

function greetingUser2 (user: IPerson)
{
	console.log(`Hello, ${user.name} ${user.lastname}`);
}

greetingUser1(me);
greetingUser2(me);

// function
// Issue on page 50 (Functions)
// const sumOfValues: (a:number, b:number): number = (a: number, b:number): number => a + b;
const sumOfValues: (a:number, b:number) => number = (a: number, b:number): number => a + b;

console.dir(sumOfValues(4,5));

// function 1 will return function 2. Function 2 can add the values from function 1 and function 2 - crazy 
const complexFunction: (a: number) => (b:number) => number = (a: number): (b:number) => number => (b:number): number => a + b;
console.dir(complexFunction(4)(5));

// Interfaces (duck typing or structural sub-typing)
function greetingStudent1(student: {name: string}) {
	console.log (`01 - Hello Student ${student.name}`);
}

const newStudent1 = {name: "Michael"};
greetingStudent1(newStudent1);

// Better interface management
interface IStudent {
	name: string;
	course?: string;
	readonly university: string;
}

function greetingStudent2(student: IStudent) {
	console.log (`02 - Hello Student ${student.name}`);
	if (student.course) {
		console.log(`02 - Welcome to the ${student.course}' semester`);
	}
}

const newStudent2: IStudent = {
	name: "Michael",
	university: "UDF",
};

greetingStudent2(newStudent2);
