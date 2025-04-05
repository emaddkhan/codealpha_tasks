// variable and constants 
// variable and constant dono aik container hai mgr agr hum variable me jo data save krein woh hum baad me change kr skte hain magr agr hum 
// constant me data save krein toh woh hum baat me change nhi kr skte

//intrepater and compiler
// interepator or compiler dono translater hai jo hamre english code ko 0 or 1 me translate krtein hain or dono me ye fark hai k
// intrepater task jaldi solve krta hain or run slow krta hai
// or compiler task deir se solve krta hai or run deir se krta hai
// Js by default intrepator language hai
// JIT compiler woh compiler hai jo dono ki power use krta hai yani intepator ki jaldi solve krne wali or compiler ki jaldi run krne wali

//windows
// js kuch function jo brrowsers se borrow krta hai woh functions windows kehlate hain by default woh js language ka hiss nhi hote for example
// alert, console, prompt etc


// DATA TYPES

// primitive and refernce datatypes


// primitive datatypes are 12 , 12.3 , null, undefined, true ,false
//reference datatypes are [],{},() for example 
// var a = ( );
// var b=[];
// var c={};
// var d=function(){};

// primitive actual me values ko copy krdeta hai matlab kai
// let a =12;
// let b=a+2;
// so the answere will be 14;
// on other side refernece does not copy the values it only act on the first values
// var arr = [1,2,3,4,5]
// var b = arr;
// agr me b ki value me se last value htao toh woh arr ki value me se bhi last value hta dega ye hoti reference types
// b.pop();
// toh b ka answere ho ga [1,2,3,4]
// pr ab arr ka bhi answere [1,2,3,4] hi hoga
// or jo pop() hai woh array ki last valye hatane k liye use hota hai 
// agr hume refernce type ko actuall me copy krna hai toh hame spread operator use krna hoga
// matlab k 
// var arr = [1,2,3,4,5]
// var b =[...arr] in teen dots ka matlab hai jo value ... k bad likhi hai uski sari values copy krk isme le aao



// conditionals = if else ,else-if, ternary operators , switch operators
// agr app ko koi decision lena hai ho k aage ka execution kesa hoga toh waha pr if else use hota hai
//if me ya toh true hoga ya false 
//truthy anf falsy value
//har value ko true ya false bnaya ja skta hai ,ye depend krta hai k agr woh value truthy hai toh woh true bnegi ,or agr woh falsy hai toh false bnegi

//falsy values are    null,undefined,"",'',0,document.all,NaN
//baqi sari values truthy


// loops = repeat
//types of loops are
//for while do-while foreach forin forof
// for(start;end;change){

// }
//agr mujy 5 panch bar lop chalana hai toh woh ese hoga k num ki value me dedoon ga 17 toh or me boloon ga ki jab is ki last value 22 hogai toh loop end hojaye
//or isme num++ ka matlab hai k value me +1 hoga
//questions
//1)num ki akhri value kia hoi
// answere:17
//2) num ki akhri value jiskliye loop chala ho
//answere:16
// for(var num=17 ;num>22 ;num++){

// }

// //1 - 10
// for(var i=1;i<11; i++){

// }
// //20 - 50
// for(var i=20; i<51; i++){
    
// }
// //20 - 45
// for(var i=20; i<46; i++){
    
// }
// //20 - 5
// for(var i=20; i>4; 1--){
    
// }
// //5 - 1
// for(var i = 5; i>0; i--){
    
// }

//WHILE loop
// start;
// while(end){
//     change
// }
//1-10
// var i = 1;
// while(i<11){
//    i++
// }
// //20-45
// var i = 20
// while(i<46){
//     i++
// }
// //45-55
// var i = 45
// while(i<56){
//     i++
// }
// //55-45
// var i = 55;
// while(i>44){
//     i--
// }
// //20-1
// var i = 20;
// while(i>0){
//     i--
// }

//foreach loop
//foreach ek normal loop nhi hai hai for ya ehile ki tarah jo numnbers pr chalta ho yani start or end pr chaly,for each loop sirf array pe chalta hai


//FUNCTION
// javscripts has two types es5 and es6
//es5 has three types of function which are
//1)function statments, 2)funtion expression ,3)annonymous function
//es6 has one type of function which is    fat arrow function and it has three types
//a)basic fat arrow
//b)fat arrow with one param
//c)fat arrow with implicit return

// js me function normal programing jese nhi hote hain iska matlab js me function bnane k liye type nhi btana padta bss apko function word likhna padega
// and function ko koi naam deke bna skte ho
//indepth - Js me functions ko first class function ka darja diya gya hai, jiska matlab hai,ki js me functions ko value/variable ki tarah treat 
// kiya ja skta hai

//question
//what is fuuncton
//koi esa code jo apko bar bar use krna ho or aesa code jo usi waqt nah chalan ho pr baad me chalan ho usse functions me daal skte hain
//for example
// function abcd(){
//     console.log("hello")
// }
// abcd()
// why we need function
// to reuse or code the code which we need to use in future at some points
//how to use
//function abcd(){  your code }
//extras we should know
//parameters and arguments
// while making the function the pass in the brackets is called param
// function abcd(){

// }
// abcd(12);
// //while running the function the value in bracket is argument 
// // for example
// // function absd(param){

// // }
// // absd(argument)
// // and if you give any value in argument it will accept in param


// //prep for interview

// function abcd(){
//     //statement function
// }

// var efg = function(){
//     //function expression
// }

// function(){
//     //annoymous function
// }

// //fat arrow
// var hijk = ()=>{

// }

// // fat arrow with single parameter
// // in single parameter app iska fat() hata sakte ho
// var jo = a =>{

// }
// jo(12);



// //return - ka matlab hua jahan pe bhi return agega uske age jo bhi lekhoge woh jayega jahan pr function call hua tha ,return functions k ander lgta hai
// // jab bhi fuction kuch bhi return nhi kta woh undefined return krta hai
// function abcd(){
//     return 12;
// }
// abcd()


// //fat arrow with implicit return
// var abcd = ()=>"emad"

// //fat arrow
// var a=()=>{
//     return 12
// }
// a();


//undefined is a value
// ye value tab di jati hai jab variable ko koi value na di gai ho, iska matlab hai,hai k yeh aik garbaje value ki tarah treat ki jati hai,app ise default
//vale bhi keh skte ho
//not defined is an error
//koi particuler variable/element ko use krna withouts its declaration that's give an error
//null is an value
//this is also a vvalue which resolve like,not found
//null is recive when something is not found


//ARRAYS

//what
//jab bhi apko ek ya ekse zyada values aik sath save krni ho
//EXAMPLE
//simple method
// var user1 = "asd",
// var user2 = "sdf",
// var user3 = "dfg",
// var user4 = "fgh",
// var user5 = "ghj",
// //ARRAY METHOD
// var user =["asd","sdf",'dfg',"fgh",'ghj']
// console.log[user(0)]
// the answere will be "asd"
//in array counting starts from 0
//how
// var arr = [1,2,function(){},[],"jbhsd"]
//why
//lot of data have more then one value to keep data altoghether we use array

//LOOP WITH ARRAY
// var arr = [1,2,3,4,5];
//how to loop an array
// arr.forEach(function(elem){
//     console.log("emad")
// })
//how to loop an array and do something with eacch element
// arr.forEach(function(val){
//     console.log(val+1)
// })


//OBJECTS
//what
//object ek tareeka jisse se hum aik identity ki details ko ek sath rakh sakte hain
//kahin logo ka data = array
//aik bnde ka kahin sara data = object
//how
// var obj ={};
// var obj2 = new Object();
//when and why
// var obj = {
//     name:"emad",
//     age:18,
//     email:"kuch@kuch.com",
//     contact:03097444454
// };
//how to access obj element
//i want to access age element in obj
// obj.age
//SYNCHRONOUS me code line by line chalta hai
//ASYNCHRONOUS me code line by line nhi chalta sara async code aik sath shuru krdia jata hai jo pehle complete ho jaye uska answere complete krdia jata hai








//ADVANCE JAVASCRIPT CONCEPTS
//this call apply blind
//this keyword JS me one of the most suspensfull keyword hai
//keyword ka matlab hota hai esa waord jiska koi matlab ho programming language me
//for example
// for , var , if are keyword
//and chacha,asd,kjfd are not keywords

//this ki value bar bar badal skti hai alag conditions me,sari conditions ko seekh jao toh this ko samajh jaoge

//this

//global -window
console.log(this)
//function -window
function abcd (){
    console.log(this)
}
//method -object
var obj = {
    name :function(){
        console.log(this)
    }
}
obj.name()
//function inside method (es5) -window
var obj2 = {
    sayName:function(){
        function childFunction(){
            console.log(this)
        }
        childFunction()
    }
}
obj2.sayName()
//function inside method (es6) -object
//constructer function me this ki value -new blank object
//event listner me this ki value -that element jispr event listener lga hua ho
