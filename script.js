// learn GSAP
let cursor = document.querySelector("#cursor")
let cursorblur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", (dets)=>{
    // console.log(dets.x, dets.y)
    cursor.style.left = dets.x -10+ "px"
    cursor.style.top = dets.y -10+ "px"

      cursorblur.style.left = dets.x -100+ "px"
    cursorblur.style.top = dets.y -100+ "px"
    
})

let h4all = document.querySelectorAll('#nav h4')
// console.log(h4all)
h4all.forEach((elem)=>{
    // console.log(elem);
    elem.addEventListener("mouseenter", ()=>{
        cursor.style.scale = 3;
        cursor.style.border = "1px solid white"
        cursor.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", ()=>{
        cursor.style.scale = 1;
        cursor.style.border = "0px solid #3f9dd7"
        cursor.style.backgroundColor = "#258aa5"
    })
    
})



gsap.to("#nav",{
   backgroundColor: "black",
   height:"100px",
   duration: 0.5,
   scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    // markers:true,
    start:"top -10%",
    end:"top -11%",
    scrub:1,
   }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -50%",
        end:"top -80%",
        scrub:2,
    }
})

gsap.from("#about-us img, #about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1,
    }

})


gsap.from(".card",{
   scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 68%",
        scrub:1,
    }

})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4,
    }
})

gsap.from("#colon2",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4,
    }
})
gsap.from("#page4 h1",{
    y:50,
     scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3,
     }
})





