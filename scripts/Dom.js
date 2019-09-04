function show(){
    alert('Hello world');   
}

// this will return reference of an element with id btnAdd
    var btnAdd=document.getElementById("btnAdd");
    var btnDelete=document.getElementById("btnDelete");
    var btnDeleteAll=document.getElementById("btnDeleteAll");
    // this will return reference of an element with id lstInline
    var lstInline=document.querySelector("#lstInline");

function AddElements(){
    // create a new list item
    var li=document.createElement("li");
    // add text node 
    li.textContent="img";
    // li.innerHTML="img";
    //tie the li to ul
    lstInline.appendChild(li);
}
function removeAllElements(){

    lstInline.remove(); 
}
function removeElement(){
    var li=document.querySelector("ul>li");
    lstInline.removeChild(li);
}
// binding event to event handler
//                         event     event handler/listener
//                          vvv        vvv                    
btnDelete.addEventListener('click',removeElement);
btnDeleteAll.onclick=removeAllElements;