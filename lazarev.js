// * * Selecting elements
let imageEffectDivs = document.querySelectorAll(".image-effect-div");
let playBtn = document.querySelector(".play-icon i");
let page4ImageDiv1 = document.querySelector(".page4-image1");
let page4ImageDiv2 = document.querySelector(".page4-image2");
let page4Img = document.querySelector(".page4-image1 img");
let page4Video = document.querySelector(".page4-image1 video");
let secondImg = document.querySelector("#page4-secondImg");
let secondVideo = document.querySelector("#page4-secondVideo");
let firstVideo = document.getElementById("first-video");

// * Function for setting up LocomotiveScroll animationFor Heading

function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    tablet: { smooth: true },

    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

// ** Function for nav animation
function navAnimation() {
  let nav = document.querySelector("nav");
  nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline();
    // * Expand navigation
    tl.to(".nav-bottom", {
      height: "25vh",
      duration: 0.3,
      ease: "power3.out",
    });
    // * Display navigation items
    gsap.to(".nav-part2 h5", {
      display: "block",
      duration: 0.1,
      delay: -0.5,
      ease: "power3.out",
    });
    // * Animate navigation item spans
    gsap.to(".nav-part2 h5 span", {
      y: 0,
      duration: 0.1,
      delay: -0.05,
      stagger: {
        amount: 0.6,
      },
    });
  });
  nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline();
    // * Reset navigation item spans
    tl.to(".nav-part2 h5 span", {
      y: 30,
      duration: 0.1,
      stagger: {
        amount: 0.1,
      },
    });
    // * Collapse navigation
    tl.to(".nav-bottom", {
      height: 0,
      duration: 0.3,
      ease: "power3.out",
    });
    // * Hide navigation items
    tl.to(".nav-part2 h5", {
      display: "none",
      duration: 0.1,
    });
  });
}

// * Function for image hover effect
function imageEffect() {
  imageEffectDivs.forEach((div) => {
    let image = div.querySelector("img");
    div.addEventListener("mouseenter", function () {
      // * Show image with animation
      gsap.to(image, {
        scale: 1,
        opacity: 1,
        display: "block",
        duration: 0.6,
        ease: "power1.out",
      });
    });

    div.addEventListener("mouseleave", function () {
      // * Hide image with animation
      gsap.to(image, {
        scale: 0,
        opacity: 0,
        display: "none",
        duration: 0.6,
        ease: "power1.out",
      });
    });
    div.addEventListener("mousemove", function (event) {
      // * Move image with mouse movement
      gsap.to(image, {
        x: event.clientX - div.getBoundingClientRect().x,
        y: event.clientY - div.getBoundingClientRect().y,
        ease: "power2.out",
      });
    });
  });
}

// * Function for SplitText effect

function splitEffect() {
  let split = new SplitType("#page1 h1");
  gsap.to(".char", {
    y: 0,
    stagger: 0.03,
    duration: 0.1,
    ease: "power3.out",
  });
}
function svgAnimation() {
  let svg = document.querySelector("#svg");
  setTimeout(() => {
    svg.style.opacity = 1;
    svg.style.transform = "scale(1)";
  }, 600);
}

function playVdieo() {
  // * Show play button text on hover
  playBtn.addEventListener("mouseenter", function () {
    gsap.to(".play-icon p", {
      y: 0,
      opacity: 1,
      duration: 0.3,
    });
  });

  // * Hide play button text on mouse leave
  playBtn.addEventListener("mouseleave", function () {
    gsap.to(".play-icon p", {
      y: 5,
      opacity: 0,
      duration: 0.3,
    });
  });

  // * Play video on play button click
  playBtn.addEventListener("click", function () {
    firstVideo.play().catch(function (error) {
      console.error("Play failed:", error);
    });
    // * Show video with animation
    gsap.to(firstVideo, {
      transform: "scaleX(1) scaleY(1) ",
      transformOrigin: "50% 60%",
      opacity: 1,
      borderRadius: 0,
      duration: 0.8,
      ease: "power3.in",
    });
  });

  // * Hide video on video click
  firstVideo.addEventListener("click", function () {
    firstVideo.load();
    // * Hide video with animation
    gsap.to(firstVideo, {
      transform: "scaleX(0.7) scaleY(0)",
      opacity: 0,
      duration: 0.1,
      borderRadius: "30px",
    });
  });
}

// * Function for video interaction
function videoEffect() {
  // * Handle hover effect and video interaction for page 4 image 1
  page4ImageDiv1.addEventListener("mouseenter", function () {
    videoCursor1();
    gsap.to(".videoCursor1", {
      transform: "scale(1) ",
      duration: 0.5,
      ease: "power3.out",
    });
    page4Img.style.display = "none";
    page4Video.play();
    page4Video.style.zIndex = "20";
  });

  page4ImageDiv1.addEventListener("mouseleave", function () {
    videoCursor1();
    gsap.to(".videoCursor1", {
      transform: "scale(0)",
      duration: 0.5,
      ease: "power3.out",
    });
    page4Img.style.display = "block";
    page4Video.load();
    page4Video.style.zIndex = "5";
  });

  // * Handle hover effect and video interaction for page 4 image 2
  page4ImageDiv2.addEventListener("mouseenter", function () {
    videoCursor2();
    gsap.to(".videoCursor2", {
      transform: "scale(1) ",
      duration: 0.5,
      ease: "power3.out",
    });
    secondVideo.play();
    secondImg.style.display = "none";
    secondVideo.style.zIndex = "20";
  });

  page4ImageDiv2.addEventListener("mouseleave", function () {
    gsap.to(".videoCursor2", {
      transform: "scale(0)",
      duration: 0.5,
      ease: "power3.out",
    });
    secondImg.style.display = "block";
    secondVideo.load();
    secondVideo.style.zIndex = "5";
  });
}

// * Function to move video cursor for page 4 image 1
function videoCursor1() {
  let videoCursor1 = document.querySelector(".videoCursor1");
  page4ImageDiv1.addEventListener("mousemove", function (event) {
    gsap.to(videoCursor1, {
      x: event.clientX - page4ImageDiv1.getBoundingClientRect().x,
      y: event.clientY - page4ImageDiv1.getBoundingClientRect().y,
      duration: 2,
      ease: "Power3.out",
    });
  });
}

// * Function to move video cursor for page 4 image 2
function videoCursor2() {
  let videoCursor2 = document.querySelector(".videoCursor2");
  page4ImageDiv2.addEventListener("mousemove", function (event) {
    gsap.to(videoCursor2, {
      x: event.clientX - page4ImageDiv2.getBoundingClientRect().x,
      y: event.clientY - page4ImageDiv2.getBoundingClientRect().y,
      duration: 0.3,
      ease: "Power3.out",
    });
  });
}

// * calling all functions
// locomotiveAnimation();
playVdieo();

function checkScreenSize() {
  if (window.innerWidth > 576) {
    splitEffect();
    navAnimation();
    videoEffect();
    imageEffect();
    svgAnimation();
  } else {
    let pageHeading = document.querySelector("#page1 h1");
    pageHeading.innerHTML = `AI & ML Product Design Agency`;
    document.querySelectorAll(".nav-part2").forEach((element) => {
      const parent = element.parentNode;
      while (element.firstChild) {
        parent.insertBefore(element.firstChild, element);
      }
      element.remove();
    });
  }
}

window.onload = checkScreenSize;

window.onresize = checkScreenSize;
checkScreenSize();

function resNavAnim() {
  let responsiveNav = document.querySelector(".responsive-nav");
  let hamburger = document.querySelector("#bar");
  let line1 = document.querySelector("#line1");
  let line2 = document.querySelector("#line2");

  hamburger.addEventListener("click", () => {
    line1.classList.toggle("toggle-line1");
    line2.classList.toggle("toggle-line2");
    toggle = 0;
    let tl = gsap.timeline();
    if (line1.classList.contains("toggle-line1")) {
      tl.to(responsiveNav, {
        opacity: 1,
        display: "block",
        duration: 0.2,
        ease: "power3.out",
      });
      tl.from(".responsive-nav h5 span", {
        y: 30,
        opacity: 0,
        duration: 0.3,
        delay: -0.1,
        stagger: {
          amount: 0.6,
        },
      });
    } else {
      tl.to(responsiveNav, {
        opacity: 0,
        display: "none",
        duration: .5,
        ease: "power3.out",
      });
      tl.to(".responsive-nav h5 span", {
        y: 0,
        opacity: 1,
        duration: 0.3,
        stagger: {
          amount: 0.6,
        },
      });
    }
  });
}
resNavAnim();
