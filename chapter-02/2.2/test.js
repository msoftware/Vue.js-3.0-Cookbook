var myName = "Michael";
var myText = "My simple Text";
var myTextAgain = "Hello World";
var greeting = "Welcome back " + myName;
var myAge = 47;
var hexNumber = 0x4242;
// binary and octal numbers will converted to decimal by the typescript transpiler
var binaryNumber = 348;
var octalNumber = 10077;
var isTaskDone = true;
var isGreaterThen = 10 > 9;
// Array
var numbers = [1, 2, 3, 4, 5, 6];
var booleans = [true, true, true, false];
// Tuple
var person;
person = ["Michael", 47];
console.log("My name is " + person[0] + " and my age is " + person[1]);
// Enum
var ErrorLevel;
(function (ErrorLevel) {
    ErrorLevel[ErrorLevel["Info"] = 0] = "Info";
    ErrorLevel[ErrorLevel["Debug"] = 1] = "Debug";
    ErrorLevel[ErrorLevel["Warning"] = 2] = "Warning";
    ErrorLevel[ErrorLevel["Error"] = 3] = "Error";
    ErrorLevel[ErrorLevel["Critical"] = 4] = "Critical";
})(ErrorLevel || (ErrorLevel = {}));
;
console.log("Error Level: " + ErrorLevel.Error);
console.log("Error Level: " + ErrorLevel[3]);
var Color;
(function (Color) {
    Color["Red"] = "#FF0000";
    Color["Green"] = "#00FF00";
    Color["Blue"] = "#0000FF";
})(Color || (Color = {}));
;
console.log("Color: " + Color.Red);
// Any
var maybeIs = 4;
maybeIs = 'a string?';
maybeIs = true;
// Void
function logThis(str) {
    console.log(str);
}
logThis("Hello World");
var me = {
    name: "Michael",
    lastname: "Jentsch",
    age: 48
};
// object as function input
function greetingUser1(user) {
    console.log("Hello, " + user.name + " " + user.lastname);
}
function greetingUser2(user) {
    console.log("Hello, " + user.name + " " + user.lastname);
}
greetingUser1(me);
greetingUser2(me);
// function
// Issue on page 50 (Functions)
// const sumOfValues: (a:number, b:number): number = (a: number, b:number): number => a + b;
var sumOfValues = function (a, b) { return a + b; };
console.dir(sumOfValues(4, 5));
// function 1 will return function 2. Function 2 can add the values from function 1 and function 2 - crazy 
var complexFunction = function (a) { return function (b) { return a + b; }; };
console.dir(complexFunction(4)(5));
// Interfaces (duck typing or structural sub-typing)
function greetingStudent1(student) {
    console.log("01 - Hello Student " + student.name);
}
var newStudent1 = { name: "Michael" };
greetingStudent1(newStudent1);
function greetingStudent2(student) {
    console.log("02 - Hello Student " + student.name);
    if (student.course) {
        console.log("02 - Welcome to the " + student.course + "' semester");
    }
}
var newStudent2 = {
    name: "Michael",
    university: "UDF"
};
greetingStudent2(newStudent2);
