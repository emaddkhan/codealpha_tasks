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

// ----SPREAD OPERATER----
//spread operater array ko copy krne k liye use hota hai
//copy krne ka trika ye hai k me woh bracket likhoo ga jisse me copy krna chata hoo uske ander teen dotss lgaoo ga ...or uske sath array
//ka name likh doo ga jisko copy krna hai
var arr = [1,2,3,4,5];
var copy = [...arr];
copy.pop();

var state = {name:"emad",age:"18"}
var data = {...state}
data.age="19"