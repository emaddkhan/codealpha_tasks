gsap.to("#page2 h1",{
    transform:"translateX(-140%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 0",
        end:"top -100%",
        scrub:5,
        pin:true,
    }
})