const h5Timer = document.querySelector("#line1Part1 h5");

function loaderTimer(){
    var grow = 0;
     setInterval(function(){
    if(grow<100){
        h5Timer.innerHTML=grow++
    }else{
        h5Timer.innerHTML=grow
    }
},33)
}

var tl = gsap.timeline();
tl.from(".line h1",{
    y:150,
    stagger:0.2,
    duration:0.6,
    delay:0.5,
})
tl.from("#line1Part1, .line h2",{
    opacity:0,
    onStart:function(){loaderTimer()},
})
tl.to("#loader",{
    opacity:0,
    delay:4,
    duration:0.2,
})
gsap.from("#page1",{
    y:1600,
    duration:0.5,
    delay:0.2,
    opacity:0,
    ease:Power4,
})
tl.to("#loader",{
    display:"none",
    delay:4.5,
})