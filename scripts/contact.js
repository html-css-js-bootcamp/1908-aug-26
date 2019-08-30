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
// name; // variable declaration -> Global variable
// name="Pushpinder Kaur"; // variable assignment
// var age=27;
// age=25;// re-assignation of value to a variable
// let occupation="Software Consultant";

// const pi=3.14;
 //pi=22/7;// this gives error as you cannot re-assign to a constant
//  console.log(name);
//  console.log(occupation);
//  console.log(age);
//  console.log(pi);


// Datatypes:
//var a;
//console.log(a);// undefined as no valuse is assigned to it
//a=5;
//var b ='5';
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

/// infinite loops- if the condition is forever true loop enters a deadlock and it will keep on running infinitely
/*while(true){

}
for(;;){

}*/

// FUNCTIONS
// let a=10;// hardcoded values
// let b=20;
// let c;
// Named Function
// function add()//function specification/declaration 
// { 
//     //function body/definition
//     c=a+b;
//     console.log(`Sum of ${a} and ${b} is ${c}`);//using template literal which is new ES6 is used for string interpolation
//     //console.log("Sum of "+a + " and "+b +" is "+c);
// }

//You can also hold the function's reference in a variable and call the variable with paranthesis instead of function
/*var Add=function add()
{ 
    c=a+b;
    console.log(`Sum of ${a} and ${b} is ${c}`);//using template literal which is new ES6 is used for string interpolation
};*/
// calling/invoking a function
// Add();
// console.log(Add);


// a function with parameters which returns the result
/*function Add(x,y){
    return x+y;
}*/

//Anonymous function
// var Add=function(x,y){
//     return x+y;
// }

//Arrow function
// var Add=(x,y)=>x+y;
// var result=Add(a,b);
// console.log(result);

//Callback functions
/*function name(fName, mName, lName){    
    //console.log(fullname);// this is not accessible because it is outside block scope
    if(mName !="" || mName != null || mName != undefined){
        var fullname=`${fName} ${mName} ${lName}`;
        //console.log(fullname);// it is accessible because of block scope
        return fullname;
    }
    else{
        return `${fName} ${lName}`;
    }
    
 }*/

//                        optional parameter    callback function
//                                 vvv             vvv
/*function show(firstName, middleName="", lastName, callbackFunction){
    //         calling callback functtion
    //            vvv      
    let fullName=callbackFunction(firstName,middleName,lastName);
    console.log(fullName);
}
show("Pushpinder","Kaur","Kalsi",name);*/

//IIFE
/*(function(firstName, middleName="", lastName, callbackFunction){
    console.log(firstName);// it is accessible here as it in within function scope
    //debugger;->to debug the program-> the program will start from here
    //         calling callback functtion
    //            vvv      
    let fullName=callbackFunction(firstName,middleName,lastName);
    console.log(fullName);
})("Pushpinder","Kaur","Kalsi",name);*/

//console.log(firstName);// -> this gives error as it is function scoped.
//you can call a named function as many times as you want to
/*add();
add();
add();
add();
*/
/*var globalScopevariable="global value";
(function testScope(){
    console.log(globalScopevariable);
    {
        console.log(globalScopevariable);
        //block-anygthing within {} makes a block. Eg if block, for loop block
        let blockVariable="block Variable Value"; // let does not allow to access a value outside the block i.e. let is block scoped
        var functionVariable="function Variable Value"; // var is function scoped
        console.log(blockVariable);
    }
    //outside block scope
    //console.log(blockVariable); // this gives error as it is outside block scope
    console.log(functionVariable); // this is accessible because it is function scoped

})();
console.log(functionVariable); // this is not accessible because it is function scoped

console.log(globalScopevariable);
*/


// Objects in JS
// create an object using Object Literal Notation (common way of creating objects)
//var person={};// empty object
//console.log(typeof person);

/*var person={
//property value
//   v      v 
    ssn : "1234567",
    //property
    name : {
        firstname : "Pushpinder",
        lastName : "Kaur"
    },
    address : {
        street1 : '11730 Plaza America Dr',
        street2 : '#205',
        city : "Reston",
        state : 'VA',
        zipcode : '20190'
    },
    //method
    work : function(){
        console.log('This person works for Revature as Software consultant');
    },
    bio: function(){
        //      this points to current object in the current scope
        //              vv
        let fullname= this.name.firstname + ' '+this.name.lastName;
        let fullAddress = this.address.street1+' '+this.address.street2+' '+this.address.city+' '+this.address.state+' '+this.address.zipcode;
        return `${fullname}'s address is ${fullAddress}, SSN is ${this.ssn}`
    }
}
//dot notation
//console.log(person.ssn +'-'+person.name.firstname);

//bracket notation
person.ssn="7654321";//change property of an object;
//add another property to object
person.hobby="Playing badmontion";
console.log(person['ssn'] +'-'+person['name']['firstname']+ ' hobby is '+person['hobby']);
console.log(person.bio());
*/

//ARRAYS
//var employees=[];//empty array
//console.log(typeof employees); Array is deriverd from object

let employees=['Mark','Jean','Fabrice','Rose','Teena','Anifat',123];
console.log(employees[0]);//access first element
employees[2]="Mansour";// assign a new value
console.log(employees[2]);//access third element
console.log(employees.length);//this gives you number of elements of the array

//Operations of array

//to add an element from last
// employees.push('Tammi');
//use pop to remove an element from last
// employees.pop();

//to remove first element from array
// employees.shift();

//to insert element from the beginning of the array
// employees.unshift('Richard');

// employees.splice(4,1);

// //employees.reverse();
//to convert an array to string

// iterate elements of the array
//in forward direction
// for(let i=0;i<employees.length;i++){
//     console.log(employees[i]);
// }

//in backward direction
/*for(let j=employees.length-1;j>=0;j--){
    console.log(employees[j]);
}
console.log(employees.toString());// this gives comma separated values of an array
*/

//PALINDROME PROBLEM
// MADAM, RACECAR, NUN, MOM, WOW, BOB, LEVEL, MALAYALAM
function isPalindrome(str){
    var lengthStr=str.length;// this gives the length of the string
    var midpoint=Math.floor(lengthStr/2); //calculate the mid of the string
    for(let i=0;i<midpoint;i++){
        if(str[i]!==str[lengthStr-1-i]){
            return false;
        }
    }
    return true;
}
let str=prompt('Enter a string to check if it is a Palindrome');
console.log(isPalindrome(str));