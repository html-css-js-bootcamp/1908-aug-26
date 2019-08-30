# Introduction to JavaScript
### JavaScript?
- It is not Java(its a different programming language which comes under server-side tech)
- It is a Programming language, which is majorly used for front-end technologies.
- It was earlier know as LiveScript. But when Java became super popular they renamed it to JavaScript.
- Further JavaScript became popular and standardised by ECMA(association which maintains standardization of programming languages)
- Since then JS is also known as ECMAScript.
- ES5 - ECMAScript2012, ES6- ECMAScript2015, ES7 ECMAScript 2016.... ES10 ECMAScript 2019
- ES5 or ES6 are more popular in industry because most of browsers support.

### Why JavaScript?
- HTML is used for creating a webpage, CSS adds appealing look and feel to web page but JavaScript
    is used to add behaviour to a web page.

### What JavaScript can do?
- JS can create prompts.
- JS can make HTML elements respond to some action.
- JS can add HTML elements on fly.
- JS can remove HTML elements on fly.
- JS can make a call to server or interact with server using XMLHTTPRequest object.
- JS can enable using 3rd party Apis. Eg: incorporate google maps.
- JS can store values at client side.
- There is a lot that JS can do.

### Features/characterstics of JavaScript:
- It is interpretted (because the interpreter reads it line by line) not compiled(converts source code into another form before running).
- It is loosely-typed, because JS variables can bold value of any type.
- It is case-sensitive. `Man` and `man` are treated differently.
- It can call to a server by making Ajax calls.

### Where JavaScript code is executed?
- JS code is first interpreted by the browser Engine then run by it.
- Every browser have their own engines. Eg: Chrome(V8), IE(Chakra), Firefox(Spider Monkey).

## Variables and Datatypes
Variables: they are used to store a value. They values are stored in memory of a browser
    ```name="Pushpinder Kaur";
    age=27;
    isLive=true;```
- we can also create variable by using `var` or `let` keyword
    `var name;`//declaration of the variable
    `name="Pushpinder"` // allocation/assignation of a value
- Datatypes :
    - String - collection of characters; 
        `name="Pushpinder Kaur";` 
    - Number - integers, real numbers, decimal, infinity, - infinity, NaN
    - Boolean - true or false
    - Object - complex datatype
    - Null - Empty or nothing
    - function - derived from object
    - undefined - when  no value is assigned to a variable

### Operators and Truth Tables
- (binary- applied on 2 or more)
    - Arithmatic- +,-,/,*,% (modulus- gives you the remainder on division)
    - Logical- &&,||,!, ^ 
    - lets say we have 2 variables a and b with some boolean value: 

       -  AND - &&
        ```
        a  |  b  | a&&b
        ----------------
         T |  T  |  T
         T |  F  |  F
         F |  T  |  F
         F |  F  |  F
         ```

        - OR -||
        ```
        a  |  b  | a||b
        ----------------
         T |  T  |  T
         T |  F  |  T
         F |  T  |  T
         F |  F  |  F
         ```

       - NOT - ! - It is also known as negation
       ```
        a  | !a
        -------
        T  | F
        F  | T
        ```
        - XOR - ^
        ```
        a  |  b  | a^b
        ----------------
         T |  T  |  F
         T |  F  |  T
         F |  T  |  T
         F |  F  |  F
         ```

    - Assignment- =, +=, -+,*=,/=
        Eg: a += 1 => a=a+1;
    - Comparison- >,<,>=,<=,==,= = =

- (unary operators- applies to single variable)
    - increment ++
        - post-increment - a++
        - pre-increment - ++a
    - decrement --
        - post-decrement - a--
        - pre-decrement - --a
    - not ! - negation
        !a
    - typeof - tell the variable's datatype    

- Strings: Its an array (collection) of character. We can use " " or ' ' to represent string value.
    In JS there are some in built operations that we can do with strings.
    toUpperCase() - converts string's current case to UPPERCASE.
    toLowerCase() - cunverts string's current case to lowercase.
    charAt() - Returns characters at the specified position.
    some more - splice(), join(), trim() etc.....

### Conditionals
- They are used to check Conditions basically used as checkpoints.
- in JS there are 4 Conditionals:
    - if
    - if-else
    - else-if
    - switch
### Loops: for, while, do-while :
    - Repetiton/iteration

### Functions 
- Operations which are performed in code/programming can be encapsulated in a function. You can also say that - it encloses logic of the program.
- You can reuse them as many times as you want.
- There are different types of functions in JS:
        - Named functions : A function which has a name and can be called as many times as we want to.
        - Anonymous functions : A function which has no name and created for single use. They are better in performance than named function as they are not stored in the memory for longer.
        - Arrow functions (new in ES6) : These are the shorthand notation of anonymous functions and they are       even better than anonymous functions.
        - functions with parameters : They are used for modular programming to make functions even more loosely coupled.
        - function which returns values : They return values based on the operation performed.
        - callback functions : A function which is passed as a parameter to another function
        - IIFE(Immediate Invoked Function Expressions) functions : a function is called with declaration itself.

### Debugger Breakpoints in Devtools
- Step into (F11), Step Over (F10), Step Out (Shift F11)
### Scopes 
- Scopes means lifetime of a variable/object/function. In JS there are 3 types of Scopes:
    - Global Scope: They are accessible anywhere in the program. Generally they are declared outside function. 
    - function Scope: They are accessible anywhere within the function.
    - block Scope -> They are most restrictive in scope and can only be accessed with in a block.
-Note: var is function scoped and let is block scope.

### Objects
- Everything in Java is direclty or indirectly Object.
- Objects: collections of related items like variable and functions which are known as properties and methods of an objects respectively.
    -Eg: global objects : console, window, document, Math.
- To create custom object first understand the requirement of the object.
- To create an object understand the properties (static or dynamic) of and object and its behavior (methods or function in JS).
- Eg: Car
    - properties of the car : static [ license plate, chasis number], dynamic [speed, mileage]
    - behaviour : transport
- Eg: person
    - properties: name, ssn, address
    - behavior: work, bio

### Arrays
- they are collection of items in list manner which are placed in contigious memory location.
### Introduction to DOM Manipulation
### Introduction to Event Handling
### Practice JS Flow Control Algorithms
### Implement Bubblesort
    - there are many Algorithms to sort and array. Eg: linear sort, bucket sort, merge sort, bubble sort, radix sort, binary tree sort etc....
    1st Pass:[23,45,12,65,34,89,86,49]-> [23,45,12,65,34,89,86,49]-> [23,12,45,65,34,89,86,49]->[23,12,45,65,34,89,86,49]->[23,12,45,34,65,89,86,49]->[23,12,45,34,65,89,86,49]->[23,12,45,34,65,86,89,49]->[23,12,45,34,65,86,49,89]
              ^   ^                           ^   ^                           ^  ^                         ^  ^                           ^  ^                          ^ ^                           ^ ^

    2nd pass: [23,12,45,34,65,86,49,89]-> [12,23,45,34,65,86,49,89]-> [12,23,45,34,65,86,49,89]...............................
                ^  ^                           ^  ^                           ^  ^


    last pass:.................... [12,23,34,45,49,65,86,89]    