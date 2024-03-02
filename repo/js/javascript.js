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