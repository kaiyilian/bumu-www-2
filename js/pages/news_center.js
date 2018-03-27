//新闻中心

var news_center = {

    cur_page: 1,//当前页

    init: function () {
        //
        // news_center.newsInit();
        //
        // $(".news_list .item").each(function () {
        //
        //     var _this = $(this);
        //     _this.find(".news_tl").unbind("click").bind("click", function () {
        //
        //         var _this = $(this);
        //         var id = _this.closest(".item").attr("data-id");
        //
        //         if (id) {
        //             location.href = "news_detail.html?id=" + id;
        //         }
        //
        //
        //     })
        //
        // });

        var $news_list = $(".news_list");
        $news_list.empty();

        var obj = {
            page: news_center.cur_page,
            page_size: "10"
        };
        var url = urlGroups.news.list + "?" + jsonParseParam(obj);

        bmWebsiteGet(
            url,
            function (res) {

                if (res.code === RESPONSE_OK_CODE && res.result && res.result.records
                    && res.result.records.length > 0) {
                    $(".content").find(".none").hide().siblings().show();

                    var arr = res.result.records;

                    for (var i = 0; i < arr.length; i++) {
                        var $item = arr[i];
                        var id = $item.id ? $item.id : "";
                        var title = $item.title ? $item.title : "";
                        var author = $item.author ? $item.author : "";
                        var newsContent = $item.newsContent ? $item.newsContent : "";
                        var publishTime = $item.publishTime ? $item.publishTime : "";//发布时间
                        publishTime = timeInit1(publishTime);

                        // sessionStorage.setItem("news_tl_" + id, title);
                        // sessionStorage.setItem("news_author_" + id, author);
                        // sessionStorage.setItem("news_pubTime_" + id, publishTime);
                        // sessionStorage.setItem("news_content_" + id, newsContent);

                        var $item = $("<div>");
                        $item.appendTo($news_list);
                        $item.addClass("item");
                        $item.addClass("col-xs-12");
                        $item.attr("data-id", id);

                        var $row = $("<div>");
                        $row.appendTo($item);
                        $row.addClass("row");

                        var $tl = $("<div>");
                        $tl.appendTo($row);
                        $tl.addClass("news_tl");
                        $tl.addClass("col-xs-8");
                        $tl.text(title);
                        $tl.unbind("click").bind("click", function () {

                            location.href = "news_detail.html?id=" + $(this).closest(".item").attr("data-id");

                        });

                        var $pub_time = $("<div>");
                        $pub_time.appendTo($row);
                        $pub_time.addClass("pub_time");
                        $pub_time.addClass("col-xs-4");
                        $pub_time.text(publishTime);

                    }

                    var total_rows = res.result.total_rows ? res.result.total_rows : 1;
                    news_center.initPage(total_rows);//初始化 分页
                }
                else {
                    $(".content").find(".none").show().siblings().hide();
                }

            },
            function (error) {
                console.log(error);
            }
        )

    },

    //初始化 分页
    initPage: function (total_rows) {

        var total_page = Math.ceil(total_rows / 10);

        var options = {
            bootstrapMajorVersion: 3, //版本
            currentPage: news_center.cur_page, //当前页数
            totalPages: total_page, //总页数
            numberOfPages: 10,
            itemTexts: function (type, page, current) {
                switch (type) {
                    case "first":
                        return "首页";
                    case "prev":
                        return "上一页";
                    case "next":
                        return "下一页";
                    case "last":
                        return "末页";
                    case "page":
                        return page;
                }
            },//点击事件，用于通过Ajax来刷新整个list列表
            onPageClicked: function (event, originalEvent, type, page) {

                // console.log(page)
                news_center.cur_page = page;
                news_center.init();

            }

        };

        $('.paginate-container ul').bootstrapPaginator(options);

    }

};

$(function () {
    news_center.init();
});
