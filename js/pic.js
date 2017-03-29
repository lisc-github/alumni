var i=0;
var timer = setInterval(function () {
    $(".pic").eq(i).animate({"left": '-25%'},3000,function () {
            $(this).css("left",'25%');
        });
    if(i<2){
        $(".pic").eq(i+1).animate({"left": '0%'},3000);
    }
    else{
        $(".pic").eq(0).animate({"left": '0%'},3000);
    }
    i=(i+1)%3;
},8000);