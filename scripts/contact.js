// Single line comment in JavaScript
/**
 * multi-
 * line
 * comments
 */
// This is external JS

 //to print some values in the console
 // Methods of console object
//  console.log('Hello World!!');
//  console.error('Oh my there is an error');
//  console.warn('This is just a warning not an error');
//  console.info('This is an info ');

 // Methods of Window object
 //alert('This is a pop up message');
 //prompt('Please enter your name');
 //confirm('Do you confirm JS?');

 // Variables:
 name; // variable declaration
 name="Pushpinder Kaur"; // variable assignment
 var age=27;
 age=25;// re-assignation of value to a variable
 let occupation="Software Consultant";

 const pi=3.14;
 //pi=22/7;// this gives error as you cannot re-assign to a constant
//  console.log(name);
//  console.log(occupation);
//  console.log(age);
//  console.log(pi);


// Datatypes:
var a;
console.log(a);// undefined as no valuse is assigned to it
a=5;
var b ='5';
console.log(a==b);// returns true because == check for value not for type
console.log(a===b); //returns false because === check for value and also for type

// TRUTHY vs FALSY:
// There are 6 falsy values which are coerced by JS as false
// undefined, NaN, 0, false, null, ""
console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(Boolean(0));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(1));
console.log(a+b);
console.log(b+a);