$(document).ready(function(){
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".intro-bg", {
        ease: 'none',
        opacity: 0,
        scrollTrigger: {
            trigger: ".intro-bg", //기준범위
            start: "1% top", //시작 지점
            end: "bottom bottom",
            scrub: 1, //모션 바운스
            pin:true, //고정
        }
    })
});