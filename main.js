function page1animation(){
var tl = gsap.timeline()

tl.from("nav h1, nav h4, nav button",{
    y:-30,
    opacity:0,
    delay:0.5,
    duration:0.8,
    stagger:0.2
})

tl.from(".center-1 h1",{
    x:-1000,
    opacity:0,
    duration:0.5
})

tl.from(".center-1 p",{
    x:-500,
    opacity:0,
    duration:0.4
})

tl.from(".center-1 button",{
    opacity:0,
    duration:0.4
})

tl.from(".center-2 img",{
    opacity:0,
    duration:0.5,
    x:200
},"-=0.2")

tl.from(".sec-bottom-1 img",{
    opacity:0,
    y:30,
    stagger:0.5,
    duration:0.5
})

}


function page2animation(){
var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section-2",
        scroller:"body",
        start:"top 50%",
        scrub:2,
        end:"top -50"
    }
})

tl2.from(".services",{
    y:30,
    opacity:0,
    duration:0.5
})

tl2.from(".elem.line1.left",{
    x:-300,
    opacity:0,
    duration:1
},"anim")

tl2.from(".elem.line1.right",{
    x:300,
    opacity:0,
    duration:1
},"anim")

tl2.from(".elem.line2.left",{
    x:-300,
    opacity:0,
    duration:2
},"anim")

tl2.from(".elem.line2.right",{
    x:300,
    opacity:0,
    duration:2
},"anim1")

tl2.from(".elem.line3.left",{
    x:-300,
    opacity:0,
    duration:3
},"anim2")

tl2.from(".elem.line3.right",{
    x:300,
    opacity:0,
    duration:3
},"anim2")

}


page1animation()

page2animation()