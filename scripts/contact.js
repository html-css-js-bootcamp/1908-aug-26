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
//console.log(a);// undefined as no valuse is assigned to it
a=5;
var b ='5';
//console.log(a==b);// returns true because == check for value not for type
//console.log(a===b); //returns false because === check for value and also for type

// TRUTHY vs FALSY:
// There are 6 falsy values which are coerced by JS as false
// undefined, NaN, 0, false, null, ""
// console.log(Boolean(""));
// console.log(Boolean(NaN));
// console.log(Boolean(0));
// console.log(Boolean(false));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(1));
// console.log(a+b);
// console.log(b+a);

//console.log(a);
//a++;// a=a+1
//console.log(++a);// pre-increment which will firstly increase the value of a and then you would be able to read the increment value
//console.log(a++);// pot-increment which will firstly read the value of a and then you would be able to increase the value of a by 1

// CONDITIONALS:
// Write a program to check if a number is even or odd
// prompt returns a string value
/*var num=prompt('Please enter a number to be checked for even or odd');
//convert or typecast string to a number
console.log(typeof num);
num = Number(num);
console.log(typeof num);
if(num % 2==0){
    //enters if condition is true
    //``->backtick is used for template literals (ES6 new feature) which is used for string interpolation (by adding variables )
    console.log(`${num} is even`);
}
else{
    //enters if condition is false
    console.log(`${num} is odd`);
}*/

// Write a program to give grades based on the marks
/**
 * marks>=90 - A
 * marks>70 && marks <90 - B
 * marks>50 && marks <70 - C
 * marks>30 && marks <50 - D
 * marks < 30 - F
 */

/*var marks=prompt('Enter your marks obtained');
marks=Number(marks);
var grade;
if(marks>=90 && marks<=100){
    grade='A';
}
else if(marks>70 && marks <90){
    grade='B';
}
else if(marks>50 && marks <70){
    grade='C';
}
else if(marks>30 && marks <50){
    grade='D';
}
else{
    grade="F";
}
console.log(`your grade is ${grade}`);
*/

// SWITCH 

// LOOPS
// W.a.p. to print numbers 1 to 10
//1. While
    //1.1 initialization
    /*var i=1;
    while(i<11){ //1.2 condition check
        console.log(i);
        i++;//1.3 increment the value of i by 1 
    }*/
//2. do-while
/*var i=1;
    do{
        console.log(i);
        i++;
    }
    while(i<11)*/
//3. for loop
/*for(var i=1;i<11;i++){
    console.log(i);
}*/

// W.a.p for fizzbuzz for number 1 to 100
/*for(var x=1;x<=100;x++){
    if(x%3==0 && x%5==0){
        console.log('fizzbuzz');
    }
    else if(x%3==0){
        console.log('fizz');
    }
    else if(x%5==0){
        console.log('buzz');
    }
    else{
        console.log(x);
    }
}*/

/// infinit loops- if the condition is forever true loop enters a deadlock and it will keep on running infinitely
/*while(true){

}
for(;;){

}*/