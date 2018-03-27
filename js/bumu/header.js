/**
 * Created by Administrator on 2017/7/12.
 */

var header = {

    init: function () {

        //一级菜单
        var $navbar_btn = $("header .navbar_container .navbar-btn");

        $navbar_btn.each(function () {

            var $this = $(this);

            $this.unbind("click").bind("click", function () {

                var type = $(this).attr("data-type");
                var has_submenu = $(this).attr("data-submenu");//是否有二级菜单

                //如果没有二级标题
                if (!has_submenu) {
                    location.href = urlByType(type);//获取跳转链接
                }

            });

            $this.find(".dropdown-menu > li > a").unbind("click").bind("click", function (e) {

                e.stopPropagation();

                //检查是否父节点，如果是父节点，则没有跳转事件
                if ($(this).siblings("ul").length > 0) {
                    return
                }

                var url;
                var com_url = $(this).closest(".navbar-btn").attr("data-page");
                var cur_url = $(this).attr("data-page");
                var anchor_point = $(this).attr("data-anchor");

                url = cur_url ? (cur_url += anchor_point ? ("#" + anchor_point) : "")
                    : (com_url ? ( com_url += anchor_point ? ("#" + anchor_point) : "")
                        : "index.html");

                location.href = $host + url;
                //如果有锚点
                // if (anchor_point) {
                //     location.hash = url;
                // }
                // else {
                //     location.href = url;
                // }
            });

        });

        header.initHeader();//header 内容 初始化

        $(window).resize(function () {
            // console.log("header");
            header.initHeader();//header 内容 初始化
        });

    },

    //header 内容 初始化
    initHeader: function () {

        //获取页面 padding
        var $pad = common.pagePadding();

        //header  样式
        $("header .row").css({
            "padding-left": $pad,
            "padding-right": $pad
        });

    },

    //进入一键入职后台
    goKeySass: function () {
        location.href = "https://bumuyun.com/bran-admin/main";
    },

    //跳转到 申请试用 页面
    goTrailApply: function () {

        location.href = urlByType("trail_apply");//获取跳转链接

    },

    //跳转到 首页
    goIndex: function () {

        location.href = urlByType("index");//获取跳转链接

    },

    //跳转到 工资单 页面
    goSalaryPage: function () {

        _czc.push(["_trackEvent", "dianzigongzidan", "入口按钮"]);

        var host = location.host;
        if (host.indexOf("localhost") > -1) {       //本地路径 bran-core的端口
            $interface = "http://" + "localhost:8081" + "/";
        }
        else if (host.indexOf("248") > -1) {
            $interface = "http://192.168.12.220:9990/";
        }
        else if (host.indexOf("bumuyun") > -1) {
            $interface = "https://bumuyun.com/";
        }
        else {
            $interface = "https://bumuyun.com/";
        }

        location.href = $interface + "bran-admin/main";

    }

};

$(function () {

    header.init();

});
