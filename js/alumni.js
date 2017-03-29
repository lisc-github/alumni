/**
 * Created by admin on 2017/1/24.
 */
$(window).ready(readyHandler);
function readyHandler(){

    (function() {
        $(".nav .box ul").each(function () {
            $(this).hover(function () {
                var num = $(this).children().length;
                $(this).css("height",40*num+"px");
            },function () {
                $(this).css("height","40px");

            })
        });

        var i=0;
        var timer = setInterval(function () {
            $(".pics").animate({"left": '-100%'},4000,function () {
                $(this).children().first().insertAfter($(this).children().last());
                $(this).css("left","0");
            });
        },8000);


        $(".login a").each(function (i) {
            $(this).click(function () {
                if(i==0){
                    $(".sub").css("display","none");
                    $(".log").css("display","block");
                }
                else{
                    $(".log").css("display","none");
                    $(".sub").css("display","block");
                }
                $(".login a").each(function (){
                    $(this).css({"background":"none","color":"#000"});
                })
                $(this).css({"background":"#7286d4","color":"#fff"});
            })
        });


        //登录注册验证
        $(".log form").on("submit",submitHandler1);
        function submitHandler1(){
            var flag=true;
            return check();
            function check() {
                $(".l_must").each(function () {
                    if(!$.trim($(this).val())){
                        $(this).css("border","1px solid red");
                        flag = false;
                    }
                });
                return flag;
            }
        }
        $(".sub form").on("submit",submitHandler2);
        function submitHandler2(){
            var flag=true;
            return check();
            function check() {
                $(".s_must").each(function () {
                    if(!$.trim($(this).val())){
                        $(this).css("border","1px solid red");
                        flag = false;
                    }
                });
                if($(".sub .password").eq(0).val()!=$(".sub .password").eq(1).val()){
                    flag = false;
                    $(".sub .password").each(function () {
                        $(this).css("border-color","yellow");

                    })
                }
                return flag;
            }
        }
        //邮箱验证
        function reg(str){
            return (/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/).test(str);


        }
        $(".l_must,.s_must").each(function () {
            $(this).on("keyup",function () {
                $(this).css("border","1px solid #ccc");
            })
        })

        $(".get_code").click(function () {
            var email = $(this).parent().prev().val();
            if(reg(email)){
                $(this).attr("disabled","true");
                var i=60;
                var timer = setInterval(function () {
                    i--;
                    $(".get_code").val(i+"s后重新获取");
                    if(i==0){
                        clearInterval(timer);
                        $(".get_code").removeAttr("disabled");
                        $(".get_code").val("获取验证码");
                    }
                },1000)
            }
            else{
                alert('请输入正确的邮箱格式');
            }
        })
    })()

}
























