$(function () {

    var s = location.hash;
    var s_type = s.split("?")[1] ? (s.split("?")[1].split("=")[1]) : "";
    //初始化人事服务
    initService(s_type);
});

$(window).on("hashchange", function () {//兼容ie8+和手机端
    // console.log(1233)

    var s = location.hash;
    var s_type = s.split("?")[1] ? (s.split("?")[1].split("=")[1]) : "";
    //如果是人事服务
    if (s_type) {
        //初始化人事服务
        initService(s_type);
    }

});

//初始化人事服务
var initService = function (s_type) {

    $(".content .our_service_container .service_name_list .service_name_item").each(function () {

        $(this).click(function () {
            $(this).addClass("active").siblings(".service_name_item").removeClass("active");

            var name = $(this).attr("data-cotainerName");

            $(".content .our_service_container").find("." + name).show()
                .siblings(".service_container").hide();
        });

        if (s_type && s_type === $(this).attr("data-cotainerName")) {
            $(this).click();
        }

    });

};

