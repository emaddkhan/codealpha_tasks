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
// tb ye chalega
//actually you are writing asynchronus code.. 
// ye sb hi use hi tb kia jate hain jb apko aisa code likhna ho jisme kuch time lgta hai