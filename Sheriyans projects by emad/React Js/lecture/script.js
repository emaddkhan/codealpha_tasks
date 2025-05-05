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
var arr=[12,function(){},33];
// var [first,sec]=arr; //iska matlab ye k arr me jo 12 hai usko mene first ka name de dia or jo function hai mene usko sec name dedia crazy nah
// agr mujy arr ka pehla or teesra element nikalna hai toh woh aese krenge
var [chacha,,chachi]=arr;//chacha me pehli value or chachi me teesri value agi or mujy array ki dusri value nhi chahiye the tho use men blank chordia
