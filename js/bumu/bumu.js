/**
 * Created by Administrator on 2017/7/18.
 */

var RESPONSE_OK_CODE = "1000";

//json格式转换为字符串
var jsonParseParam = function (param, key) {
    var paramStr = "";

    if (param instanceof String || param instanceof Number || param instanceof Boolean) {
        paramStr += "&" + key + "=" + encodeURIComponent(param);
    }
    else {
        $.each(param, function (i) {
            var k = key == null ? i : key + (param instanceof Array ? "[" + i + "]" : "." + i);
            paramStr += '&' + jsonParseParam(this, k);
        });
    }

    return paramStr.substr(1);


};

//post
var post = function (url, data, succFun, errFun) {
    $.ajax({
        url: url,
        type: "post",
        data: JSON.stringify(data),
        success: function (data) {
            succFun(data)
        },
        error: function (error) {
            errFun(error)
        }
    })
};

//get
var get = function (url, succFun, errFun) {
    $.ajax({
        url: url,
        type: "get",
        data: {},
        success: function (data) {
            succFun(data)
        },
        error: function (error) {
            errFun(error)
        }
    })
};

//jsonp格式
var jsonp_get = function (url, sucFun, errFun) {
    $.ajax({
        type: "GET",
        url: url,
        async: false,//同步
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: "data", //方法名称
        timeout: 5000,
        success: function (data) {
            //alert(JSON.stringify(data));
            sucFun(data);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            errFun(XMLHttpRequest)
        }
    });
};

var ajaxSetup = function () {
    $.ajaxSetup({
        accept: 'application/json',
        cache: false,
        contentType: 'application/json;charset=UTF-8'
    });
};

//get
var bmWebsiteGet = function (url, successFunc, errorFunc) {

    ajaxSetup();
    $.ajax({
        url: url,
        type: 'GET',
        success: function (data, status, jqXHR) {

            // setTimeout(function () {
            //     loadingRemove();//加载中 - 移除logo
            // }, 500);
            // if (data.code === ERR_CODE_VALIDATION) {
            //     var errors = data.result;
            //     var errStr = data.msg;
            //     if (errors) {
            //         for (var i = 0; i < errors.length; i++) {
            //             var err = errors[i];
            //             errStr += "<br/>" + getValidationTargetNameByKey(err.key) + "-" + err.msg;
            //         }
            //         toastr.error(errStr);
            //     }
            // }
            // else if (data["code"] === PERMISSION_DENIED_CODE) {
            //     toastr.error("接口没有访问权限");
            // }
            // else if (data["code"] === SESSION_TIMEOUT_CODE) {
            //     location.href = "login";
            // }
            // else {
            //     if (successFunc) {
            //         successFunc(data);
            //     }
            // }

            if (successFunc) {
                successFunc(data);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrow) {

            // setTimeout(function () {
            //     loadingRemove();//加载中 - 移除logo
            // }, 500);

            // toastr.error("请求异常");
            // if (errorFunc)
            //     errorFunc(XMLHttpRequest);

            var flag = ajax_msg(XMLHttpRequest);//判断ajax 异常错误

            if (flag) {
                if (errorFunc)
                    errorFunc();
            }

        }
    });

};

//判断ajax 异常错误
var ajax_msg = function (req) {
    // console.info("请求失败：状态码 ---- " + req.status);
    // console.log(req);

    var status = req.status;
    var msg = "";

    switch (status) {
        case 200:
            msg = "";
            break;
        case 404:
            msg = "接口无法请求(url不对)";
            break;
        case 500:
            msg = "系统错误";
            break;
        default:
            msg = "接口请求失败";//
            break;
    }

    if (msg) {
        toastr.warning(msg + "(" + req.status + ")");
        return false;
    }
    else {
        return true;
    }

};

//将 时间戳转换格式 为 YYYY-MM-DD HH:MM:SS
var timeInit1 = function (time) {
    var timeList = "";

    if (!time) {

    }
    else {
        time = parseInt(time);
        //转换为 YYYY/MM/DD HH:MM:SS
        var data = new Date(time);

        var year = data.getFullYear();
        var month = data.getMonth();
        month += 1;
        month = month < 10 ? "0" + month : month;
        var day = data.getDate();
        day = day < 10 ? "0" + day : day;

        var hour = data.getHours();
        hour = hour < 10 ? "0" + hour : hour;
        var minute = data.getMinutes();
        minute = minute < 10 ? "0" + minute : minute;
        var second = data.getSeconds();
        second = second < 10 ? "0" + second : second;

        timeList = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    }

    return timeList;

};

var getUrl = function () {
    var url = location.search;//如果 后缀为#，则不适用，要用 location.href
    if (url.indexOf("?") > -1) {
        var params = url.substr(url.indexOf("?") + 1, url.length).split("&");

        for (var i = 0; i < params.length; i++) {
            var param = params[i].split("=");
            sessionStorage.setItem(param[0], param[1]);

        }
    }
};

//错误提示
var Error = function (obj) {

    if (typeof obj == "undefined") {
        toastr.error("请求异常,请联系管理员");
    }
    else if (typeof obj == "string") {
        toastr.error("提示：" + obj);
    }
    else {
        if (obj.status) {
            if (obj.status == 500)
                toastr.error("系统错误，请联系管理员！");
            else {
                toastr.error("请求异常");
            }
        }
        else {
            toastr.error(JSON.stringify(obj))
        }
    }

};

/**
 * 准备统计代码
 */

var cnzzId = "1259955107";
var cnzz_protocol = (('https:' === document.location.protocol) ? ' https://' : 'http://');
var cnzzStr = "%3Cspan %3E %3C/span%3E" +
    "%3Cscript src='" + cnzz_protocol +
    "s95.cnzz.com/z_stat.php%3Fid%3D" + cnzzId +
    "%26show%3Dpic1' type='text/javascript'%3E%3C/script%3E";
// document.write(unescape(cnzzStr));


