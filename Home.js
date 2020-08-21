var str = 'This is a variable';
var num = 3.14159265;
var div=int/2;
var rem=int%2;
var int=5;
var float=0.5;
var multiply=int*float;

//input
//var name=prompt('What is your name?');

//change the HTML
//document.getElementById('ID').innerHTML='Hello '+name;

function Increase(num, amount=1) {
    return num+amount;
}
function Decrease(num, amount=1) {
    return num-amount;
}

function greet(){
    name=prompt('What is your name?');
    greetings=['Hello', 'Hey there', 'Hi'];
    greeting=greetings[Math.floor(Math.random() * greetings.length)];
    document.getElementById('ID').innerHTML=greeting+' '+name;
}

//greet()
function FOR(){
    for(var i=1; i<101; i++){
        console.log(i);
    }
}
function WHILE(){
    let w=0;
    while (w<100){
        w++;
        console.log(w);
    }
}

//Dictionary is called an object
//keys in dictionary are variables not strings
//When you call a key from a dictionary it is a string
let dict={first:'Santiago', last:'Vira'};

let newline='\n';
let string = 'Hello World!';
let length=string.length;
let I = string.indexOf('World');

// let variable1=value1, variable2=value2 NOT let variable1, variable2=value1, value2
// var makes global variables, let makes locals that cant be redefined
let FIRST=string.split(' ')[0], LAST=string.split(' ')[1];
console.log('First:'+FIRST+newline+'Last:'+LAST);


let first=string.slice(0,string.indexOf(' '));
let last=string.slice(string.indexOf(' ')+1, string.length-1);

//alert('First:'+first+newline+'Last'+last);

let UP=string.toUpperCase();
let LOW=string.toLowerCase();

let AT=string.charAt(10);
let AT2=string[10];


//text:id='emails'
//entry:id='Email'
let emails='';
function getInputValue(){
    emails+=document.getElementById("Email").value+'<br>';
    document.getElementById('emails').innerHTML=emails;
}