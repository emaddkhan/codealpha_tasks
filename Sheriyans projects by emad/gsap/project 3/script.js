function loadindAnimation() {
  const h5Timer = document.querySelector("#line1Part1 h5");

  function loaderTimer() {
    let grow = 0;
    setInterval(function () {
      if (grow < 100) {
        h5Timer.innerHTML = grow++;
      } else {
        h5Timer.innerHTML = grow;
      }
    }, 1);//baad me iski value bhi 33ms krdena
  }

  const tl = gsap.timeline();

  tl.from(".line h1", {
    y: 150,
    stagger: 0.2,
    duration: 0.6,
    delay: 0.5,
  });

  tl.from("#line1Part1", {
    opacity: 0,
    onStart: function () {
      loaderTimer();
    },
  });
  tl.to(" .line h2", {
    animationName: "lineH2",
    opacity: 1,
  });

  tl.to("#loader", {
    opacity: 0,
    delay: 0, //duration baad me 4 krdena
    duration: 0.2,
  });
  tl.from("#page1", {
    y: 1600,
    duration: 0.2,
    opacity: 0,
    ease: Power4,
  });

  tl.to("#loader", {
    display: "none",
  });
  tl.from("#nav",{
    opacity:0,
  })
  tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero3 h3,#hero4 h1",{
    y:120,
    stagger:0.1,
  })
}
function cursorAnimation() {
  const cursor = document.querySelector("#cursor");
  let mouseX = 0;
  let mouseY = 0;
  let posX = 0;
  let posY = 0;
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    posX += (mouseX - posX) * 0.1;
    posY += (mouseY - posY) * 0.1;

    gsap.set(cursor, {
      left: posX,
      top: posY,
    });

    requestAnimationFrame(animateCursor);
  }

  animateCursor();
  Shery.makeMagnet("#navPart2 h4", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}
loadindAnimation();
cursorAnimation();
