$(document).ready(function(){

    // 페이지 로딩 후 최상단으로 이동
    $(window).on('beforeunload', function() {
        $(window).scrollTop(0);
      });

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
    });

    //스크롤 방향 감지
    let lastScrollTop = 0;
    $(window).scroll(function(event){
        let st = $(this).scrollTop();
        if (st > lastScrollTop){
        $('.top-btn').removeClass('up').addClass('down');
        } else {
        $('.top-btn').removeClass('down').addClass('up');
        }
        lastScrollTop = st;
    });

    //스크롤 방향이 아래일 경우 클릭하면 페이지 하단으로 이동
    $(document).on('click', '.top-btn.down', function(){
        $('html, body').animate({scrollTop: $(document).height()}, 'slow');
        return false;
      });

    //스크롤 방향이 위일 경우 클릭하면 페이지 상단으로 이동
    $(document).on('click', '.top-btn.up', function(){
        $('html, body').animate({scrollTop: 0}, 'slow');
        return false;
    });

    // 로딩 페이지를 띄우기 전에 스크롤을 막습니다.
    $('body').addClass('body-fixed')

    setTimeout(function() {
        $('body').removeClass('body-fixed');
    }, 3000);

});