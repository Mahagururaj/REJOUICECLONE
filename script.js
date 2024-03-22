gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


function cursorEffect() {
    var page1Cont = document.querySelector(".page1-content")
    var cursor = document.querySelector(".cursor")
    page1Cont.addEventListener("mousemove", function (dets) {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y
        })
    })

    page1Cont.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            scale: 1,
        })
    })

    page1Cont.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 0,
        })

    })
}
cursorEffect()

function page2Anima() {
    gsap.from(".elem h1 .up span", {
        y: 120,
        stagger: 0.1,
        duration: 2,
        scrollTrigger: {
            opacity:0,
            trigger: ".page2-bottm",
            scroller: ".main",
            start: "top 47%",
            end: "top 45%",
            scrub: 2,
            markers: false
        }

    })

    gsap.from(".page2-cont h3", {
        y: 10,
        stagger: 0.5,
        duration: 2,
        scrollTrigger: {
            trigger: ".page2",
            scroller: ".main",
            start: "top 47%",
            end: "top 45%",
            scrub: 2,
            markers: false

    }
})

}
page2Anima()

function page3Anime(){
    gsap.from(".page3-elem h1 .p3-up span", {
        y: 120,
        stagger: 0.1,
        duration: 2,
        scrollTrigger: {
            opacity:0,
            trigger: ".page3-bottm",
            scroller: ".main",
            start: "top 50%",
            end: "top 45%",
            scrub: 2,
            markers: false
        }

    })
}
page3Anime()

function page4Anime(){
    gsap.from(".page4-elem h1 .p4-up span", {
        y: 120,
        stagger: 0.1,
        duration: 2,
        scrollTrigger: {
            opacity:0,
            trigger: ".page4-bottm",
            scroller: ".main",
            start: "top 50%",
            end: "top 45%",
            scrub: 2,
            markers: false
        }

    })
}
page4Anime()

function swiperAnime(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction:false,
        },
      });
}
swiperAnime()

 var tl = gsap.timeline()

tl.from(".loader h3",{
  x:40,
  opacity:0,
  duration:1,
  stagger:0.2
})
tl.to(".loader h3",{
  x:-30,
  opacity:0,
  duration:1,
  stagger:-0.2
})
tl.to(".loader",{
  opacity:0,
  display:"none",
})
tl.from(".page1-content h1 span",{
    y:100,
    opacity:0,
    stagger:0.1,
    delay:-0.5
  })

  function page6Anime(){
    var t2 = gsap.timeline()
    t2.from(".second .second-one, .footer-top .first, .second .second-two", {
        y: -90,
        stagger: 0.1,
        duration: 2,
        scrollTrigger: {
            opacity:0,
            trigger: ".footer",
            scroller: ".main",
            start: "top 70%",
            end: "top 70%",
            scrub: 2,
            markers: false
        }

    })
    gsap.from(".footer-bottom h1 span", {
        y: -120,
        stagger: 0.1,
        duration: 2,
        scrollTrigger: {
            opacity:0,
            trigger: ".span1",
            scroller: ".main",
            start: "top 70%",
            end: "top 70%",
            scrub: 2,
            markers: false
        }

    })
}
page6Anime()