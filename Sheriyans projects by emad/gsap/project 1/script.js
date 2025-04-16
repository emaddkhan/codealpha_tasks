var tl =gsap.timeline();
tl.from("nav h3",{
    y:-50,
    duration:0.8,
    stagger:0.2,
    opacity:0,
})
tl.from("#main h1", {
    x: -1000,
    duration: 0.8,
    opacity: 0,
    stagger: 0.4,
});
tl.from("img",{
    x:100,
    opacity:0,
    duration:0.8,
    stagger:0.4,
    rotation:45,
})
