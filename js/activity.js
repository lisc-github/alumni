/**
 * Created by admin on 2017/2/6.
 */
$(window).ready(readyHandler);
function readyHandler() {

    (function() {
        //  翻页
        $(".news1 .pages a").each(function (i) {
            $(this).click(function () {
                $(".news1 .pages a").each(function () {
                    $(this).removeClass("_active");
                });
                $(this).addClass("_active");
                $(".con").css("top",-$(".news1 .content p").eq(10*i).position().top);
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
        $(".news2 .pages a").each(function (j) {
            $(this).click(function () {
                $(".news2 .pages a").each(function () {
                    $(this).removeClass("_active");
                });
                $(this).addClass("_active");
                $(".news2 .con").css("top",-$(".news2 .content p").eq(10*j).position().top);
            })
        });
        $(".news2 .previous").click(function () {
            $(".news2 .pages a").each(function (i) {
                if($(this).hasClass("_active")){
                    if(i!=0){
                        $(".news2 .pages a").eq(i-1).click();
                    }
                }
            })
        });
        $(".news2 .next").click(function () {
            $(".news2 .pages a").each(function (i) {
                if($(this).hasClass("_active")){
                    if(i!=$(".news2 .pages a").length-1){
                        $(".news2 .pages a").eq(i+1).click();
                    }
                }
            })
        });
    })()

}