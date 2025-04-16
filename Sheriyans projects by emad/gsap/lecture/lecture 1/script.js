
// // gsap.to(".box",{
// //     x:1000,
// //     duration:2,
// //     rotation:360,
// //     borderRadius:"50%",
// //     backgroundColor:"orange",
// //     delay:1,
// // })
// gsap.from(".box",{
//     x:1000,
//     duration:2,
//     rotation:360,
//     borderRadius:"50%",
//     backgroundColor:"orange",
//     delay:1,
// })


//----------------------------------------------------*-Timeline-*-------------------------------------------------------------------*
//toh gsap me timeline kia cheez hai bhai dekho agr mujy teen divs ko animaate krna hai or me chahta hoo teeno aik k baad aik aik krke 
//animate hon toh me delay dene k bajay timeline doo chalo ab example se dekhte hain
var tl = gsap.timeline();

tl.to(".box1",{
    x:1000,
    scale:0.5,
    rotation:360,
    duration:2,
})
tl.to(".box2",{
    x:1000,
    scale:0.5,
    rotation:360,
    duration:2,
})
tl.to(".box3",{
    x:1000,
    scale:0.5,
    rotation:360,
    duration:2,
})