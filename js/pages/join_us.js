/**
 * Created by Administrator on 2016/6/28.
 */

var join_us = {

    init: function () {

        join_us.initRecruitList(); //获取列表
        join_us.initPage();

        $(window).resize(function () {
            join_us.initPage();
        });

    },

    //获取列表
    initRecruitList: function () {
        var $post_container = $(".content").find(".post_container");

        var obj = {
            page: 1,
            page_size: 10
        };
        var url = urlGroups.recruit.list + "?" + jsonParseParam(obj);

        bmWebsiteGet(
            url,
            function (res) {
                // console.log(res);

                if (res.code === RESPONSE_OK_CODE && res.result && res.result.records
                    && res.result.records.length > 0) {
                    $post_container.find(".none").hide().siblings().show();

                    var arr = res.result.records;

                    //岗位名称
                    var $post_name_list = $post_container.find(".post_name_list");
                    $post_name_list.empty();

                    for (var i = 0; i < arr.length; i++) {
                        var $item = arr[i];
                        var name = $item.jobName ? $item.jobName : "";
                        var jobDuty = $item.jobDuty ? $item.jobDuty : "";//岗位职责
                        var jobRequire = $item.jobRequire ? $item.jobRequire : "";//岗位需求

                        sessionStorage.setItem("recruit_name_" + i, name);//岗位名称
                        sessionStorage.setItem("recruit_duty_" + i, jobDuty);//岗位职责
                        sessionStorage.setItem("recruit_require_" + i, jobRequire);//岗位需求

                        var $spn = $("<span>");
                        $spn.appendTo($post_name_list);
                        $spn.addClass("post_name_item");
                        $spn.text(name);
                        $spn.unbind("click").bind("click", function () {

                            $(this).addClass("active").siblings(".post_name_item").removeClass("active");

                            var $post_content_list = $post_container.find(".post_content_list");
                            var $post_content_item = $post_content_list.find(".post_content_item");

                            var i = $(this).index();
                            // console.log(i);

                            $post_content_item.find(".name").text(sessionStorage.getItem("recruit_name_" + i));
                            $post_content_item.find(".post_duty").html(sessionStorage.getItem("recruit_duty_" + i));
                            $post_content_item.find(".post_require").html(sessionStorage.getItem("recruit_require_" + i));

                        });

                    }

                    $post_name_list.find(".post_name_item:first").click();

                }
                else {
                    $post_container.find(".none").show().siblings().hide();
                }

            },
            function (error) {
                console.log(error);
            }
        );

    },

    initPage: function () {

        //title_container  样式初始化
        var T_width = $(".title_container").width();
        var I_width = $(".title_container .sec_title").width();
        var left = (T_width - I_width) / 2;
        $(".title_container .sec_title").css("left", left);

    }


};

$(function () {
    join_us.init();
});
