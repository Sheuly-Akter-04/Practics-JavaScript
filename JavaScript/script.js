window.alert("Java Script");
alert("JavaScript");
var nam = "Sheuly";
var age;
age = 23;
var number = 2.2721;
let b;
a = 15;
b = "s";

var x = "It";
var y = " Js";
var z = x + y;

var text = prompt("Enter your name :");
var p = "Smile";
p = p.toUpperCase();

var ab = 3;
ab += 6; // ab = ab+6
document.write("Assignment oparator = ", ab, "<br>");
//Assignment oparator -> =, +=, -=, *=, /=, %=, **=
//Arithmetic oparator -> +, -, *, /, **(exponent), %(modulus), ++

var num1 = prompt("Enter number: <br>");//For not assign fixed value
var num2 = 3;
num1 = parseInt(num1, 10);//For full number & parsefloat for float number

//////
var sum, sub;
sum = num1 + num2;
sub = num1 - num2;
document.write("sum = " + sum, "<br>");
document.write("sub = " + sub, "<br>");

//////////
var base = parseFloat(prompt("Base value = "));
var height = parseInt(prompt("Height = "));
var area = base * height;
document.write("Area = " + area, "<br>");

////////
var farn = parseFloat(prompt("Fahrenheit ="));
var cels = (farn - 32) * (5 / 9);// Temperature change
document.write("Celsius value = " + cels, "<br>");

///////
var nu = 2;
if (nu % 2 == 0)
    document.write("Even <br>");
if (nu % 2 != 0)
    document.write("Odd <br>");

//////
var nm = prompt("Enter if num : <br>");
if (nm > 0)
    document.write("Positive <br>");
if (nm < 0)
    document.write("Negative <br>");

//////
var marks = prompt("Enter marks: <br>");
if (marks >= 90)
    document.write("A+ <br>");
else if (marks >= 85)
    document.write("A <br>");
else (marks >= 80)
document.write("B+ <br>");

/////
var mark = prompt("Enter mark: <br>");
if (mark > 100 || mark < 0)// || will be true if one is true
    document.write("Invalid mark <br>");
else if (mark >= 90 && mark <= 100)// if 1 condition false then whole false
    document.write("A+ <br>");
else if (mark >= 85 && mark <= 90)
    document.write("A <br>");
else (mark >= 80 && mark <= 85)
document.write("B+ <br>");

/////
var digit = prompt("Enter switch: <br.");
switch (digit) {
    case "0":
        document.write("Zero <br>");
        break;
    case "1":
        document.write("One <br>");
        break;
    default:
        document.write("Not digit <br>");
}

//////
for (var c = 1; c <= 5; c = c + 1)// starting, condition, update
{
    document.write("<h1> For loop </h1> <br>");
}
document.write("End <br>");
////
for (var d = 1; d <= 27; d = d + 1)// starting, condition, update
{
    document.write(" " + d, "<br>");
}
document.write("End <br>");

////
var add = 0;// 1+2+3+4... =
for (var e = 1; e <= 5; e = e + 1) {
    add = add + e;
}
document.write(add);

//////
for (var f = 1; f <= 10; f++)// starting, condition, update
{
    if (f == 10) {
        continue;
    }
}
document.write(" " + f, "<br>");
document.write("Last <br>");

////Ternary operator alternative of if/else
var nm = Number(prompt("Ternary operator number:"));
var result = nam > 0 ? "posi-tive" : "Nega-tive"
document.write(result);
//// Function Creation
function sqaure(f) {
    var ff = nn * nn;
    document.write("ff = " + ff + "<br>");
}
sqaure(5); // function calling

//// Function Creation
function addition(ff, ee) {
    var fff = ff + ee;
    document.write("Function sum = " + fff, "<br>");
}
addition(5, 6);

//// Immediately Function (IIFEs)
(function addition(msg) {
    document.write(msg, "<br>");
})("Happy");

/// Function Expression
var g = function h(mg) {
    document.write(mg, "<br>");
};
h("Happy");

///// Array
var names = new Array(2);
names[0] = "Sheuly";
names[1] = "Niishat";
///// Array; push & pop
var hh = ["a", "b"];
document.write(hh.length);
hh.push("a");// inside
document.write(hh.length);
hh.pop()//out the last one
document.write(hh);
//// Array concation
var sub1 = ["Web", "Js"];
var sub2 = ["C", "C++"];
var sub = sub1.concat(sub2);
document.write(sub);

/// loop of array
var multi = new Array();
for (var g = 0; g < 5; g++) {
    multi[g] = parseInt(prompt("Multiplication number : <br>"));
}
var mul = 0;
for (var g = 0; g < 5; g++) {
    document.write(multi[g]);
    mul = mul + mul[g];
}
document.write("Multiplication result = " + mul, "<br>");
///// To add or remove elements but not effect on main array
var subject = [aa, bb, cc];
document.write(subject);
subject.splice(2, 1, "abc", "bca", "<br>");//add
document.write(subject);
subject.splice(3);//remove
document.write(subject);

//// Object creation
function emplyee(ne, ag) {/// constuction creation of object
    this.ne = ne;/// multiple object creation
    this.ag = ag;

    this.display = fuction(); {
        document.write(this.ne); /// multiple output creation
        document.write(this.ag);
    }  //build function on constractor
}
var emplyee1 = new emplyee("i", 23);
var employee2 = new emplyee("s", 22);
var employee3 = new emplyee("a", 21);

emplyee1.display();
emplyee3.display();

//// Math object: Math.floor,rounf, sin,max
var k = parseInt(prompt("Enter 1st math object num:"));
var kk = parseInt(prompt("Enter 2nd math object num:"));

var maximum = Math.max(k, kk);
document.write("maximum <br>");
/// Math.floor(Math.random()*6) -> function for value between 0-5
///Math.floor(Math.random()*6) +1 -> function for value between 1-5

/// Gussing Game.. using math object
var numOfWon = 0;
var numOfLost = 0;

for (var lll = 1; lll <= 5; lll++) {
    var l = parseInt(prompt("Enter guess number from 1 to 5: "));//guess number
    var ll = Math.floor(Math.random() * 5) + 1;//random number
    if (l == ll) {
        document.write("Won <br>");
        numOfWon++;
    } else {
        document.write("Lost. Random number was: <br>");
    }
}
document.write("Total number of won" + numOfWon + "<br>");
document.write("Total number of lost" + numOfLost + "<br>");

/////Date object & method
var date = new Date();
document.write(date, "<br>")//Display todays date

var year = date.getFullYear();
document.write(year, "<br>")// Display only full year i 4 digit

var month = date.getMonth();
document.write(month, "<br>")// will be display month (0-11)(jan-dec)

var currentDay = date.getDay();
document.write(currentDay, "<br>")// Current date is showed

var currentHour = date.getHours();
document.write(currentHour, "<br>")// Current hour is showed

//////Document object model (DOM)
var domheading1 = document.getElementById("domheading1 <br>");
domheading1.innerHTML = "DOM";//This is dom heading will be replace by DOM

//// Query Selector -> which is combined of getElementBy Id->(#),TagName(tag name), ClassName->(.)
document.querySelector("a").innerHTML = "This is changed dom";
// to display unorder list hyper text
//document.querySelector("li a").innerHTML = "This is changed dom";
//( parent, child)
/// to change class name
//document.querySelector(".my.div").innerHTML = "This is changed dom";
//in DOM method will be hold get ElementById(), proprrties= innerHTML


/// Onclick event &&& <button onclick="alert('Hiii')">Click it</button>
function onclickmsg() {
    alert("Button");
}

//// for msg multiple button onclick
var mymssg = document.querySelector("#paraId");
function mymsg1() {
    mymssg.innerHTML = "It is clicked button1";
}

var mymssg = document.querySelector("#paraId");
function mymsg2() {
    mymssg.innerHTML = "It is clicked button2";
}
////var mymssg = document.querySelector("#myImg"); for picture shown in button
//function myImg1(){
// mymssg.src = "folder name/pic name.jpg";

/// Image slider or continus changing
var photos = ["img/Flower.jpg", "img/pic.jpg", "img/Night.jpg"];
var imgTag = document.querySelector("img <br>");

var count = 0;
function next() {
    count++;

    if (count >= photos.length) {
        count = 0;
        imgTag.src = photos[count];
    } else {
        imgTag.src = photos[count];
    }

}

function prev() {
    count--;

    if (count < 0) {
        count = photos.length - 1;
        imgTag.src = photos[count];
    } else {
        imgTag.src = photos[count];
    }

}

/// Changing CSS style dynamically
function addStyle() {
    var cssvar = document.querySelector("#paraid");
    cssvar.classList.add("para-style");

    /// document.querySelector("#paraid").style.color = "green"; // work as like previous 2 lines
}
function remStyle() {
    var cssvar = document.querySelector("#paraid");
    cssvar.classList.remove("para-style");
}

//////Event listener that's means after clicking text it change colour & also remove
document.querySelector("button").addEventListener("click", evenfun); //("listener name" , function)
function evenfun() {
    alert(" Hi Event");
}
var ev = document.querySelector("HII");
ev.addEventListener("click", function () {
    alert("hello");
});

//var ev = document.querySelector("HII");
//ev.addEventListener("mouseover",function(){
//ev.classList.add("para-style");
//});
//ev.addEventListener("mouseout",function(){
// ev.classList.remove("para-style");
//});

// querySelectorAll = use for multiple button

/// DOM event onchange
// Change event
//console.clear();   ---command
const input = document.querySelector("input");
// var , let & const = same
input.addEventListener('change', cangeHandler)

function cangeHandler(s) {
    document.write("Changed name <br>");
}
/// load, unload, scroll, resize, toggle
//load
window.addEventListener('load', function () {
    document.write("load <br>");
}); // window can be replace another object

//unload
window.addEventListener('unload', function () {
    document.write("unload <br>");
});

///scroll
window.addEventListener('scroll', function () {
    document.write("scroll <br>");
});

// resize
window.addEventListener('resize', function () {
    var wwidth = window.outerWidth;
    var hheight = window.outerHeight;
    document.write(`window height: ${hheig}, Window width: ${wwidth}`, "<br>");
});

///toggle used in details elevent of html
var details = document.querySelector("details");
details.addEventListener('toggle', function () {
    document.write("toggle <br>");
});
/// no name of function = function()

/// button or space colour
var int = document.querySelector("int");
int.addEventListener("blur", function () {
    input.style.backgroundColor = "orange";
    input.style.padding = "1.2rem";
});

//// Clipboard Event
const iint = document.querySelector("iint");
int.addEventListener('copy', function () {
    console.log("You have copied the text <br>");
});

/// have to take name

function intName() {
    var h11 = document.createElement('h11 <br>');
    let ttext;
    var nname = prompt("Enter full name: <br>");
    if (nname == null || name == '') {
        ttext = 'No name found';
    } else {
        ttext = nname;
    }
    var textNode = document.createTextNode(ttext);
    h11.appendChild(textNode);
    document.body.appendChild(h11);
}

intName();

///// Set Time out
// setTimeout(()=>{
//     console.log("hii");
// }, 1000);

/// Error handeling -> try, catch, finally, throw

///try (have code) & catch (will be handle whenever try have error otherwise not work) & finally (works those code that want to display always with or without error)
try {
    //code test
    alert("This is for try block <br>");
    alert(m);// it is an error but program will be not stop

} catch (err) {//must have to give a parameter
    //handle error
    alert("Inside the catch block <br>");
    console.log(err);
    //document.write(err);
    console.log(err.name);
    console.log(err.message);
} finally {
    alert("It is 2nd try block <br>");
}

/// Canvas Drawing graphics on web page
var ccan = document.getElementById("mycanvas");
var ctx = ccan.getContext("2d");

ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.strokeRect(10, 10, 380, 280);
ctx.fillStyle = "green";
ctx.fillRect(12, 12, 378, 276);

var centerX = c.width / 2;
var centerY = c.height / 2;

ctx.beginPath();
ctx.arc(centerX, centerY, 80, 0, 2 * Math.PI, false);
ctx.fillStyle = "red";
ctx.fillStyle();
ctx.stroke();

///// ES6 normal things
let eee = 25;
let ef = 30;

// let ssum = eee + ef;
// document.write(`The sum is ${ssum} . and it end `);
document.write(`The sum is ${eee + ef} . and it end `);

let se = "Java Script";
let msg = `This is ${se} document. ES6 start <br>`;
document.write( msg);

/// ES6 function calling
// const, fun name, (parameter), => ,{},fun call/value
const aadd = (xx, yy) => {
    let suum = xx + yy;
    document.write(suum);
}
aadd(27,23);

/// ES6 hosting = default behavior works on var, on strict mode use "use strict" & also declear var
/// default & rest paramenter
function numm(ac, ad, ...az){ //rest parameter sign = ....
  document.write(`ac = ${ac}, ad = ${ad}, az = ${az}`);
}
numm(1,2,3,4,5);

/// Spread operator define = ...





console.log(a);
console.log(b);
document.write("Hi <br>");
document.write(nam, "<br>");
document.write(age, "<br>");
console.log("Hello <br>");
console.log(number.toPrecision(2), "<br>")
document.write(z, "<br>");

document.write("Number of character " + text.length, "<br>");
//library function of string
document.write(p, "<br>");