// Window object :- It represent an open window in a browser .It is browser's object (not javascript) and automatically created by browser.
// It is global object with lots of properties and methods .

// console.log(window);
// console.log("Apna College ");
// window.console.log("Apna College ");    //Window.console.log() are also working similiar to console.log("Apna College "); bcz it is a part of window object already.

// console.log print the values
//while console.dir gives us the properties and method of document or any otehr special objects 

//-------------------------------------------------------------DOM------------------------------------------------------------------------------


// When a web page is laoded, the browser creats a document object model of the page and it is a tree like structure and branches are callled as nodes.

// for print any things of document , simply we have to write document.thing_name
// eg document.body , document.head etc

//DOM have three types of nodes - textNodes , comment node ,  element node

// we can dynammically change our html css with the help of dom 
// eg document.body.style.background = "green" ;
//        document.body.childNodes[1].innertext = "ABCD"


//-------------------------------------------------------------DOM Manipulation--------------------------------------------------------------------

// 1-    Selecting by id 
     // document.getElementById("myId");
     //    eg let Ansh = document.getElementById("Ansh");
     //    console.log(Ansh);


// 2-  Selecting by Class
     // document.getElementByClassName("myClass")  ;
     

// 3-  Selcting by tag
     // document.getElementByTagName("My Tag");
 
// 4- Query Selector (we have  this Best Selector)
     // a> document.querySelector("myId /  myClass / tagName")  // we can select any one of the three from this selector , simply using name of that class or id or tag.
          //return first first element 

     // b> document.querySelectorAll("myId /  myClass / tagName")  
          //returns a node list 
          //we have to add a dot before writing class name and # before id name .
          //eg:   document.querySelector("#myId");
               // document.querySelector(".myClass");
                
// *********************************************properties of elements**************************************************************************************

// nodes have also firstChild and lastChild properties   and we can access them as -----
//   eg elementName.firstChild
//      elementName.lastChild

// we can also access the children of elements  as--------------
//   eg elementName.children   

// *******************************************we can get our html code , tagname  , innerText at run time**************************************************

// 1- tagName :  returns tag for element nodes
     //  eg = elementName.tagName
// 2- innerText : returns the text content of the element  and all its chidren .
     //  eg = elementName.innertext
// 3- innerHTML : returns the plain text or html contents in the elements.
     //  eg = elementName.innerHTML 
// 4- textContent : returns textual content as like innerText but also return hidden elements .    
     //  eg = elementName.textContent


//********************************************we can also change the html code and inner text , color and all at run time****************************************

// elementName.innerText = "Your Text"
// elementName.innerHTML = "Your HTML Code"
// elementName.textContent = "Your content"


//---------------------------------------------------------------------Question------------------------------------------------------------------------------

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " from Apna College students";


//****************************************************************************Attributes******************************************************************************

//  aditional information given to the elements in the form of attributes

//we can access our attributes as.................

// getAttribute("name of that attribute")  //to get atrribute value

//eg -  let div = document.querySelector("div"); // first we get our element whoes attribute we have to access through querySelector
//      console.log(div);

// let id = div.getAttribute("id") ; // we get our attribute
// console.log(id);

//we can set our attributes values also as..............

// setAttribute("attribute" ,"value")    //to set the value

// let para = document.querySelector("h2");
// console.log(para);

// let newClass = para.setAttribute("class" , "newClass");
// console.log(newClass);

//  *****************************************************************Special attribute*********************************************************************************

// nodeValue.style // add inline css not external or internal 

// first we access the node 
// then that node name dot style and properties u want as i want backgroundColor so = "Red"

// let  h2 = document.querySelector("h2");
// console.log(h2);

// h2.style.backgroundColor = "yellow";


// *********************************************************************Insertion****************************************************************************************

// To add the new element first we have to create the element as---------------------

// let el = document.createElement("element name");

// now to add the element first we have to select node in which we want to add element then  we have following methods ----------------------

// 1- node.append(el)  //at the end of the node (inside)
// 2- node.prepend(el)  // at the start of the node (inside)
// 3- node.before(el)   // add before the node (outside)
// 4- node.after(el)   // add after the  node (outside)


//********************************************************************deletion*****************************************************************************************************
 
// node.remove() //remove the node 

//*********************************************************************Question****************************************************************************************************

// let newbtn = document.createElement("button");
// newbtn.innerText = "Click me !";
// newbtn.style.backgroundColor = "red";
// newbtn.style.color = "white";
// console.log(newbtn);

// let body = document.querySelector("body");
// body.prepend(newbtn);


// *************************************************************************Question**************************************************************************************************

let p = document.querySelector("p");
// console.log(p.setAttribute("Class" , "newPara"))   // we can use it here bcz it completly change the class but in my question we have to given that we have to add the class with previous not change so we use------------Class list

// ''''''''''''''''''''''''''''''''class list is the collection of the class attributes of the elements''''''''''''''''''''''''''''
// now we access the classList by simply write the name of element dot classList
// console.log(p.classList) ;
// for add in the classList we write 
p.classList.add("newPara");
console.log(p.classList);
// for remove in the classList we write
//console.log(elementname.classList.remove("Which class u want to remove"))





