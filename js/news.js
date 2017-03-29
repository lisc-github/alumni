/**
 * Created by admin on 2017/1/26.
 */
$(window).ready(readyHandler);
function readyHandler() {

    (function () {
        //  翻页
        $(".news1 .pages a").each(function (i) {
            $(this).click(function () {
                $(".news1 .pages a").each(function () {
                    $(this).removeClass("_active");
                });
                $(this).addClass("_active");
                $(".con").css("top",-$(".news1 .content p").eq(8*i).position().top);
            })
        });
        $(".news1 .previous").click(function () {
            $(".news1 .pages a").each(function (i) {
                if($(this).hasClass("_active")){
                    if(i!=0){
                        $(".news1 .pages a").eq(i-1).click();
                    }
                }
            })
        });
        $(".news1 .next").click(function () {
            $(".news1 .pages a").each(function (i) {
                if($(this).hasClass("_active")){
                    if(i!=$(".news1 .pages a").length-1){
                        $(".news1 .pages a").eq(i+1).click();
                    }
                }
            })
        });
    })()

}