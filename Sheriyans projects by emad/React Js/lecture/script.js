// ------------------------------------------REACT ESSANTIALS-------------------------------------------------------------****

// ARRAYS:
// [0,1,2,3,4,5,6,7] in react app ne agr [] integer rkh dia hai toh baqi sb bhi integer honge koi 7.1 ya string nhi rkh skte 

//immutable vs muttable
// var arr =[1,2,3,4]
// var arr2=arr;
// arr2.pop();

// react js me apko state naam ki aik cheez mile gi us bnde ko aap mutate nhi krskte matlab ki directly uski value nhi hta skte ya jod skte

// immutable - mean stakte ki current value change nhi krni state ko nayi value dedo direct
// exampole ::
// var state = [1,2,3,4,5]
// state=[1,2,3]

// ----SPREAD OPERATER----***
//spread operater array ko copy krne k liye use hota hai
//copy krne ka trika ye hai k me woh bracket likhoo ga jisse me copy krna chata hoo uske ander teen dotss lgaoo ga ...or uske sath array
//ka name likh doo ga jisko copy krna hai
// var arr = [1,2,3,4,5];
// var copy = [...arr];
// copy.pop();

// var state = {name:"emad",age:"18"}
// var data = {...state}
// data.age="19"
// state=data;

//----DESTRUCTURING----***
// var obj ={name:"harsh",age:18,email:"lalalalalalalala@gmail.com"}
// const {age} = obj;
//another example
// var obj = {name:"jja",social:{
//     facebook:{
//         first:"hah",
//         sec:"jjdj",
//     }
// }}
// now without destructing i want to accese first
// obj.social.facebook.first
// // with destructing
// const {first}=obj.social.facebook;
//or haan app name bhi de skte ho destruct krte hue kese k
// var arr=[12,function(){},33];
// var [first,sec]=arr; //iska matlab ye k arr me jo 12 hai usko mene first ka name de dia or jo function hai mene usko sec name dedia crazy nah
// agr mujy arr ka pehla or teesra element nikalna hai toh woh aese krenge
// var [chacha,,chachi]=arr;//chacha me pehli value or chachi me teesri value agi or mujy array ki dusri value nhi chahiye the tho use men blank chordia


//-----import/export----***
//humlog component bnante hain component matlab page ka hissa matlab navbar,sidebar,cart aik components hain ab masla yeh ata hai ki har
//hisssa alag alag component hai or hum hr component ko alag alag file me rakhte hain
//jese k for example purpuse

// navbar--export 
// sidebar--export 
// car--export 
// or main page me import krlo
//main--import cart,sidebar,navbar
// for export
// function cart(){

// }
// export default cart;
// for import
// import cart from "./script.js"

// -----ARROW FUNCTION(IMPLICIT RETURN)-----***
//  const abcd =()=>{
//  }
//  abcd()
//fat arrow function with one parameter
// const sdfg =(val)=>{
// console.log(val)
// }
// sdfg(12)
// if you have one parameter you can also write it without fat bracket
//like that
// const sdf=val=>{
//     console.log(val)
// }
// sdfg(val)

// ----IMPLICIT RETURN--------*****
// top implicit return ye hai k agr ap koi bhi code return k baad likhte hai  toh woh jahan function call hua hai wahan ajaye ga
//agr ap arrow k baad direct baghair bracket k single line of code return kr date haai toh woh return ho jayegi or agr {} lgate hain toh apko return
//likhna paryga 
// const abcd =()=>"emad";
// console.log("hi"+abcd())
//ab aik tricky si problem
//agr apko koi object return krna hai toh yani
// function asdf = ()=>{name:"emad",age:29}
// asdf()
// toh undefined dega  kiu intrepeter samajh hi nhi payega k ye kia koi body return krwan chah rhe hain ya koi object 
// toh agr koi object return krwana hai toh apko arrow k badd fat bracket() k under object likhna parega tb jake woh return hoga
// const abcd =()=>({name:"emad",age:1234})
// abcd() // now it will return an object


//------MAP FILTER-----***
//dono hi array pr chalte hain or dono ka kam hai hai array pr kuch perfoem krna and "aik naya array return krna"

//map---array me hr element pr kuch perfoam kro or naye array me rakho
//foreach k andr ata hai function or function k andr ati hai value isi tarah map me bhi yhi hota hai jese ki
// map k andr bhi arrow function wali cheezain apply hoti hai jese k map arrow function hai toh agr single parameter hai toh ap uska fat hta
// map k andr return krna zaroori hai kiu k map k under return krne ki wajah se elem naye array me place hote hain
//skte ho or agr koi sngle line ka code hai toh app usse direct arrow k badd bhi likh skte ho baghair return krwaye or koi ek se zyada line
//ka code hai toh uske liye phr return likhna parega
// var arr = [0,1,2,3,4]
// const ans= arr.map(value=>value*2) //isme ye horaha hai k arr ka hr element ayega multiply hoga 12 se or kiu k return horaha hai toh naye
//array me element palce hojaiga 
//hum ye sb  kiu kr rhe hain chalo aik scinario dekhte hain
//state aik array hai usme numbers hain and apko hr number ko + krna hai

// var state = [1,2,3,4,5]
// const ans= state.map((value)=>value+1)

//aik or scinario ye hai k hamare pass aik array hai jisme me 5 se bade numbers me 5 add krdo or baqi k number weese hi rehne do

// var state = [156,1,2,3,5,6,7,8,9,10,11,12,13,14,15]
// const ans = state.map((value)=> value>5?value+5:value)

//map filter me ak hi fark hai matlab k map array k andr k sare elem return krta hai matla k count km kam nhin hoga jb k filter elem ko km kr
//skta hai 

// jb original array ka size km na hona ho wahan map use hota hai
// jb original array ka size km krna hona ho wahan filter use hota hai
///question
//aik array sbhi number ko jo 5 se bare hain 10 add krdo or jo 5 se chotte hain unhe htaa do
//filter k liye ye zaroori hai k agr ap arrow k baad jo value rkh rhe ho woh ya toh true honi chahiye ya false honi chahiye agr app hath se 
//true likhdoge toh array k andr jitne bhi elem honge woh sare return kr dega
// var arr = [1,2,3,4,5,6]
// var ans = arr.filter((elem)=>elem>4)

//ab  mere pass aik object hai or mujy whi data chahiye jiska gender male ho toh iske liye bhi filter use hoga
const arr = [
    {name:"njsj",gender:"male"},
    {name:"njsjncj",gender:"female"},
    {name:"njcknm",gender:"female"},
]
const ans = arr.filter((elem)=>elem.gender==="male");