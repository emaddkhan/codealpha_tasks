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
    }, 33);
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
    delay: 4,
    duration: 0.2,
  });
  tl.from("#page1", {
    y: 1600,
    duration: 0.5,
    opacity: 0,
    ease: Power4,
  });

  tl.to("#loader", {
    display: "none",
  });
}
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
        top: posY
    });

    requestAnimationFrame(animateCursor);
}

animateCursor();
