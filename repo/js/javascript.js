let counter = 1;
alert( 2 * ++counter );

let count = 1;
alert( 2 * count++ );

let abc = 1;
abc++
alert( 2 * abc );

let apples = "2";
let oranges = "3";
alert( +apples + +oranges ); 

alert( "2" =='2' );  
alert( "2" == 2 );  

alert( null > 0 );  // (1) false
alert( null == 0 ); // // The values null and undefined equal == each other and do not equal any other value.
alert( null >= 0 ); // For maths and other comparisons < > <= >=      null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN. 

alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)

alert( null == undefined ); // The values null and undefined equal == each other and do not equal any other value.


let str = "Hello";
let str2 = 'Single quotes are ok too';
console.log(`can embed another ${str}` ); 

// let and cont for a variable can only be used once. need to name a new variable accordingly when using let and const
// var x =1; var x=2; x will be 2 ie var can be used multiple times for same x
// let and const can be used only within a block {}

var x = -1
function example() {
    var x = 0; // Variable x declared and initialized to 0 using var
    if (true) {
        var x = 1; // A new variable x is declared and initialized to 1, shadowing the outer variable x
        let y = 2; // Variable y declared and initialized to 2 using let
        console.log(x); // Output: 1
        console.log(y); // Output: 2
    }
  
    console.log(x); // Output: 1
    console.log(y); // This line would cause a ReferenceError, as y is declared using let and is not accessible here
}

console.log(x); // Output: -1
console.log(y); // This line would cause a ReferenceError, as y is declared using let and is not accessible here
