function show(){
    alert('Hello world');   
}

function AddElements(){
    // this will return reference of an element with id btnAdd
    var btnAdd=document.getElementById("btnAdd");
    // this will return reference of an element with id lstInline
    var lstInline=document.querySelector("#lstInline");

    // create a new list item
    var li=document.createElement("li");
    // add text node 
    li.textContent="img";
    // li.innerHTML="img";
    //tie the li to ul
    lstInline.appendChild(li);

}