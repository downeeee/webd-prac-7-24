$(function(){
    $(".main > li").mouseover(function(){
        $(this).find(".sub").stop().slideDown()
    })//
    $(".main > li").mouseout(function(){
        $(".sub").stop().slideUp()
    })//

        var n=0 //0 1 2 3
    setInterval(function(){
        
        // n=(n+1) % 4
        if(n<3){
            n++
        }else{n=0}
        console.log(n)

        $(".top_move").animate({top:n *(-400)+ "px"},500)
        },3000)

        setInterval(function(){

        },2500)




        //갤러리 공지사항 클릭

        $(".contents h2").click(function(){
            $(".contents h2").removeClass("on");
            $(this).addClass("on")
            $(".contents ul").hide()
            $(this).next().css({display:"flex"})
        })
})//jq end