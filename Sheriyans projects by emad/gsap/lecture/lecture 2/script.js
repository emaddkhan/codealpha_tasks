gsap.from("#page1 .circle",{
    scale:0,
    duration:1.5,
    rotation:360,
    delay:1,
})
gsap.from("#page2 .circle",{
    scale:0,
    duration:1.5,
    rotation:360,
    scrollTrigger:{
        trigger:"#page2 .circle",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:5,
    }
})