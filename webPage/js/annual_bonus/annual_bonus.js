/**
 * Created by Administrator on 2017/11/2.
 */


$(function () {
    $(".bg").height($(window).height());

    var doma = document.getElementById("btn_sure");
    doma.addEventListener('touchstart', function () {
    }, false);

});

//进入计算结果页
var goResult = function () {

    showLoadingToast("计算中...");

    var $annual_bonus = $.trim($(".annual_bonus input").val());
    console.log(parseFloat($annual_bonus));

    if (!parseFloat($annual_bonus)) {
        hideLoadingToast();

        showMsgToast("请输入数字");
        setTimeout(function () {
            hideMsgToast();
        }, 1000);

        return
    }

    sessionStorage.setItem("salary", $annual_bonus);//赋值 金额

    setTimeout(function () {
        hideLoadingToast();
    }, 1000);

    location.href = "calc_result.html";
};