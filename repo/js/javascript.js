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

alert( "2" =='2' );  // true
alert( "2" == 2 );  // true
alert( null == undefined ); // true
alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true



let str = "Hello";
let str2 = 'Single quotes are ok too';
console.log(`can embed another ${str}` ); 