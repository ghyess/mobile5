$(document).ready(function(){
    var wd = parseInt($("#vs").width());
    var sw = true;
    var intv = setInterval(function(){ nAni(); }, 3000);
    
//슬라이드    
    function nAni() {
        $("#vs .imgBox").not(":animated").animate({"margin-left" : -wd+"px"}, 800, function(){
            $("#vs .imgBox li").eq(0).appendTo($("#vs .imgBox"));
            $("#vs .imgBox").css("margin-left", "0px");
            $("#vs .btn_list .Btn").removeClass("on");
            $("#vs .btn_list .Btn").eq(0).appendTo($("#vs .btn_list"));
            $("#vs .btn_list .Btn").eq(0).addClass("on");
        });
    }
    $("#vs .Btn").click(function(){
       clearInterval(intv);
       var idx=$(this).index();
        for(var i=0;i<idx-2;i++){
            $("#vs .imgBox li").eq(0).appendTo($("#vs .imgBox"));
            $("#vs .btn_list .Btn").eq(0).appendTo($("#vs .btn_list"));
        }
        nAni();
        intv=setInterval(function(){ nAni(); }, 3000);
    });
    $("#vs .stop").click(function(){
        if(sw==true){
            clearInterval(intv);
            $(this).addClass("Stop_on");
        } else {
            $(this).removeClass("Stop_on");
            nAni();
            intv=setInterval(function(){ nAni(); }, 3000);
        }
        sw= !sw;
    });
});

//메뉴+서브
$(document).ready(function(){
   $("#gnb .sb_tit>strong>a").removeAttr("href");
    
    //gnb 버튼
    $("#hd .menu_bt").click(function(){
       $("#gnb").addClass("on");
        $(".gnb_bg").addClass("act");
    });
    $("#hd #close").click(function(){
       $("#gnb").removeClass("on"); 
        $(".gnb_bg").removeClass("act");
    });
    
    //메뉴
    $("#gnb .menu #first").click(function(){
       $("#my_page").toggleClass("on");
        $(this).siblings().find(".sub").css("display", "none");
    });
    $("#gnb .menu #sec").click(function(){
       $("#menu_card").toggleClass("on");
        $(this).siblings().find(".sub").css("display", "none");
    });
    $("#gnb .menu #third").click(function(){
       $("#benefits").toggleClass("on");
        $(this).siblings().find(".sub").css("display", "none");
    });
    $("#gnb .menu #four").click(function(){
       $("#fan").toggleClass("on");
        $(this).siblings().find(".sub").css("display", "none");
    });
    $("#gnb .menu #fifth").click(function(){
       $("#cs").toggleClass("on");
        $(this).siblings().find(".sub").css("display", "none");
    });

    
    //서브
    $("#gnb .sb_tit").click(function(){
       $(this).find(".sub_list").not().slideDown(600);
        $(this).siblings().find(".sub_list").not().slideUp(500);
    });
});