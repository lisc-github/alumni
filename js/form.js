/**
 * Created by admin on 2017/2/7.
 */
$(window).ready(readyHandler);
function readyHandler() {
    (function () {
        $("form").submit(submitHandler);
        var oName = $("input[name='name']");
        var oPhone_number = $("input[name='phone_number']");
        var oTime = $("input[name='time']");
        var oProgram = $("input[name='program']");
        function submitHandler() {
            if(!$.trim(oName.val())||(oName.attr("class")&&oName.attr("class").indexOf('placeholder')!=-1)){
                oName.parent().find(".return_red").html("请输入姓名");
                oName.focus();
                return false;
            }
            else{
                oName.parent().find(".return_red").html("");
            }
            if(!$.trim(oPhone_number.val())||(oPhone_number.attr("class")&&oPhone_number.attr("class").indexOf('placeholder')!=-1)){
                oPhone_number.parent().find(".return_red").html("请输入手机号");
                oPhone_number.focus();
                return false;
            }
            else{
                oPhone_number.parent().find(".return_red").html("");
            }
            if(!$.trim(oTime.val())||(oTime.attr("class")&&oTime.attr("class").indexOf('placeholder')!=-1)){
                oTime.parent().find(".return_red").html("请输入活动时间");
                oTime.focus();
                return false;
            }
            else{
                oTime.parent().find(".return_red").html("");
            }
            if(!$.trim(oProgram.val())||(oProgram.attr("class")&&oProgram.attr("class").indexOf('placeholder')!=-1)){
                oProgram.parent().find(".return_red").html("请输入报名项目");
                oProgram.focus();
                return false;
            }
            else{
                oProgram.parent().find(".return_red").html("");
            }
        }

        $("form input").each(function () {
            $(this).on("change",function () {
                $(this).prev().html('');
            })
        })
    })()

}