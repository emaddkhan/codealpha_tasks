// Asynchronus
//  sync-main-call stake code
//  asynchronus code-call back queue
//call back queue se chizein main stack mein ati hain or wahan se chizein chl kr bahi chali jati hain
//conclusion
//synchronus code pehle chalta hai or asynchronus synchronous k baad chalta hai

//event loop check krta rehta hai k kia main stack khali hai ya nhi agr khali ho hai toh woh call-back queue ki cheezein main stack me le aata hai

//agr main stack khali hai or async me 3 tasks hain or un mese 2 task pehle solve hogya toh woh 1 task ka wait nhi krega balke woh main stack
//me jakr kr run ho jayega
//js me koi bhi code jisme kuch time lgta hai,JS me by defsult usse assync code man kr usse side stack me dal dia jata hai
//if you are writing any of them
//setTimeOut() - ye kuch der baad chalta hai

// console.log("hey1")
// console.log("hey2")
// setTimeout(function(){
//     console.log("hey")
// },1000)
// console.log("hey3")

//SetTimeInterval()-ye kuch der baad chalta hai barbar aik particuler interval time me

// var myInterval= setInterval(function(){
//     console.log("hey")
// },1000)
 
//clearinterval setInterval ko rokne k liye use hota hai
// clearInterval(myInterval)
// setTimeout(function(){
//     clearInterval(myInterval)
// },5000)

       //ANOTHER EXAMPLE
    //    var count=0; 
    //    var meraInterval=setInterval(function(){
    //     count++;
    //     console.log(count)
    //     if(count===5){
    //         clearInterval(meraInterval)
    //     }
    //    },1000)

//yeh hr aik second me chaly ga
//Fetch API- ye kisi or url (API) se data lekr aayega ya us url pr dat lekr jayega
     //FETCH API
     //kiu k yeh internet pr jaega or phr data lekr ayega  toh isme time lgta hai is lia JS me isko bt default hi async bnayagaya hai kiu 
     //k fetch ka kaam hai data lana woh bhi kisi url se ab aesa ho skta hai k us url(API) ki website slow toh data lane me lage aur agr fetch synchronous 
     //hota toh uske baad ka code tb tk nhi chalta jb tk k uska data nhi ajata which is a big problem 

    //  fetch(`letter lane wala url`) //-iska matlab humne panchi ko bhej dia letter lane 
    //  .then()  //-.then()ka matlab hai iske andr ka code tb chale ga jb panchi letter le ayega

         //FOR EXAMPLE

        //  fetch(`https://randomuser.me/api/`)
        //  .then(raw=>raw.json())
        //  .then(res=>console.log(res.results[0]))
        //EXAMPLE 2 
        // fetch(`https://jsonplaceholder.typicode.com/posts`)
        // .then(raw=>raw.json())
        // .then(raw=>console.log(raw[0]))
//Axios (or other HTTPs libraries)-ye bhi wahi krega jo Fetch API krta hai bss ye thora zyada developer freindly hai
//in axios you hab=ve to write only one time then()
  //   axios.get(`https://randomuser.me/api/`)
  //   .then(res=>{
  //     var response= res.data.results[0];
  //     console.log(response?.gender,response?.location)})
//promise-iske ander jo code likhoge woh apna kaam krega or woh khud sidestack me chale jayenge us code ko lekr or jb ander se code resolved hojayega 

     //PROMISE
     //promise kya hai?

       //kuch code socho dil me jo k asyn ho yani side stack me jayega or baad me chalega main stack me,ab ye socho k appne ne is code ko likha hai 
       //ab is ka answer kabhi ayega or kabhi nhi toh promise kya hai aap aesa samjho aap promisee k ander koi bhi aesa code likh do jo bhi dil me aye
       //toh promise apko aik parchi deta hai jis pr by default waiting likha hota hai, parchi pr do events hote hain mainly aik ka naam hota hai then 
       //or dusre ka naam hota hai catch, or agr aapka data aagya toh resolved likha jayega waiting parchi pr ki jaga or then chalega,
       //or agr apka data nah aya toh rejected likha jayega waiting ki jaga parchi pr catch chalyga  
    //  const parchi=new Promise(function(resolve,reject){
    //   axios.get(`https://randomuser.me/api/`)
    //   .then(result=>{
    //     const gen =result.data.results[0].gender;
    //     if(gen==="male"){
    //       resolve();
    //     }else{

    //       reject();
    //     }
    //   })
    // })
    // parchi
    // .then(function(){
    //   console.log("male")
    // })
    // .catch(function(){
    //   console.log("female")
    // })
// tb ye chalega
//actually you are writing asynchronus code.. 
// ye sb hi use hi tb kia jate hain jb apko aisa code likhna ho jisme kuch time lgta hai


                                               //--------------CALLBACKS---------------------*
//callback kuch khas nhi sirf aik function hota hai bss thoda special ye hai k isse pass kia jata hai as an argument jb koi particuler async code chl jaye 

// function abcd(a, b){
//   b()
// }
// abcd(1,function(){console.log("callback")})

//to use kese krna hai
//callback basically aik function toh ap is funcftion me woh sb kuch likh do jo aap ko chalana ho jb answere aajaye aur isse tb chalao 
// jb aap ka async code chal chuka ho

// function doSomeAsyncTask (url,callback){
//   fetch(url)
//   .then(raw=>raw.json())
//   .then(res=>{
//     callback(res)
//   })
// }
// doSomeAsyncTask(`https://randomuser.me/api/`,function(res){
//   console.log(res.results[0].gender,res.results[0].email,res.results[0].name.first)
// })

//----------------------------------------------------*-ASYNC/AWAIT-*-----------------------------------------------
//koi function bnao or uske ander jo bhi dil me async code likh do or jb aap async code likhte ho toh baad wali line pehle chal jati hai kiu k 
//async side stack me hot hai or agr baad wali line async k basis pr hui toh aapka code fail hojaega woh isliye kiu aka code depend krta hai 
//async code pe jo k baad me chale ga sync code chalne k baad
//with asyn/await app async code bhi aise likh skte ho jese aap normal sync code likh rhe ho
//await --- means---agli line tb tk nah chalao jb tk is ka answere nah mil jae lekin await ki aik requirement hai apko await k parent function pr await 
//lagana hoga
// async function abcd() {
//   let a = await fetch(`https://randomuser.me/api/`);
//   a=await a.json()
//   console.log(a)
// }
// abcd()

//----------------------------------------------------*-EVENT LOOP-*-------------------------------------------------
//event loop bar bar check krta hai k kahin main stack khali hai k nhi jb main stack khali ho jata hai to woh callback queue ki chizon ko main stack 
//me lata hai

//-------------------------------------*-CALLBACKS vs PROMISES vs ASYNC/AWAIT-*--------------------------------------
//QUESTION--aik url se data lekr aao or usse console me print kro
//----by callback----
// function dataFetcher (url,callback){
//   axios.get(url)
//   .then(res=>{
//     callback(res)
//   })
// }
// dataFetcher(`https://randomuser.me/api/`,function(res){
//   console.log(res)
// })

//----by promises----
// function dataFetcher(url){
//   const parchi = new Promise(function(resolve,reject){
//     axios.get(url)
//     .then(res=>{
//       resolve(res)
//     })
//   })
//   return parchi;
// }
// dataFetcher(`https://randomuser.me/api/`)
// .then(function(res){
//   console.log(res)
// })

//----by ASYNC/AWAIT-----

// async function dataFetcher(url){
//    const result =await axios.get(url)
//    return await result;
// }
// async function hh(){
//  const data=await dataFetcher(`https://randomuser.me/api/`)
//  console.log(data)
// }
// hh()

//--------------------------------------------------*-GENERATORS-*------------------------------------------------
//app program k execution ko rok skte ho or bol skte ho ab agla step kro
//genrater bnta kese hai???
//koi bhi aam fuction k aage *laga do woh generator bn jata hai for example
// function* printNumbers(){
//   console.log("started")
//   yield 1;
//   console.log("first")
//   yield 2;
//   console.log("second")
//   yield 3;
// }
// const ans =printNumbers();
// console.log(ans.next().value)
// console.log(ans.next().value)
// console.log(ans.next().value)

//--------------------------------------------------*-WEB WORKERS-*------------------------------------------------
//usually hamara pura code single thread pr chalta hai pr kahin baar kuch bare calculations perfoam krne pr jate hai jis ki aap ka mai n thread
//  busy hojata hai ya phr woh kafi zyada loaded ho jata hai toh ap ki baqi task slow hojata hain
//is situation ko achy se handle krne k lia hum web workers use krty hain,aap chaho toh apna koi task web worker ko bhej skte ho jo k jo k dusre thread me
//us ko perfoam krega and apka main threa efficiently baaqi cheezon ko handle kr ske ga
//web worker kesy bnte hain???
//aap apni main js file se data send kr skte ho or ap worker file pe data accept kroge and jo perfoam krna hai kroge and waha se data wapas main file bhejo
//gai and main file me wapas accept kro ge
var nums =Array.from({length:10000},(_,b)=>b+1)
const worker = new Worker("worker.js")
worker.postMessage(nums)
worker.onmessage=function(data){
  console.log(data.data)
}