$(document).ready(function(){

    $("ul.gnb>li").hover(function(){
        $(this).find("ul.sub").stop().slideDown();
    }, function(){
        $(this).find("ul.sub").stop().slideUp();
    });


    $("ul.slider li").eq(0).siblings().css({top:"-300px"});
    var slideIndex=0;
    setInterval(function(){
   
        if(slideIndex<2){
        slideIndex++;
    }else{
        slideIndex=0;
    }
    $("ul.slider li").eq(slideIndex).siblings().animate({top:"-300px"}, 300);
    $("ul.slider li").eq(slideIndex).animate({top:"0"}, 300);

    }, 3000);
    

    // 공지사항 갤러리 탭
    $(".con1 h2").click(function(){
        $(".con1 h2").removeClass("on");
        $(this).addClass("on");
        // 1) 전체적인 h2 on 사라짐
        // 2) ".con1 h2"중에서 클릭한 나는 on 추가
        $(".con1 ul").removeClass("on")
        $(this).next("ul").addClass("on")
        // 나(h2) 다음에 오는 ul class를 보이기
    });

    // 모달
    $("ul.notice li").eq(0).click(function(){
        $(".modal").fadeIn();
    });

    $("#btn").click(function(){
        $(".modal").fadeOut();
    });

});