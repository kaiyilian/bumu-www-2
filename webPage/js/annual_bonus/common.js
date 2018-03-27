/**
 * Created by Administrator on 2017/11/2.
 */


/**
 * 显示加载等待toast
 * @param content
 */
function showLoadingToast(content) {
    if (!content) {
        content = "加载中";
    }
    var $divToast = $("#loadingToast");
    $divToast.find(".weui_toast_content").text(content);
    $divToast.show();
}

/**
 * 隐藏等待toast
 */
function hideLoadingToast() {
    var $divToast = $("#loadingToast");
    $divToast.hide();
}

//显示提示语
var showMsgToast = function (msg) {
    if (!msg) {
        msg = "已完成";
    }
    var $divToast = $("#toast");
    $divToast.find(".weui_toast_content").text(msg);
    $divToast.show();
};

//隐藏提示语
var hideMsgToast = function () {
    var $divToast = $("#toast");
    $divToast.hide();
};