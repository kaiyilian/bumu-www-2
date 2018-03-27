//新聞详情

var news_detail = {

    init: function () {

        getUrl();//获取地址栏参数

        var $news_info = $(".news_info");
        var id = sessionStorage.getItem("id") ? sessionStorage.getItem("id") : "";

        var obj = {
            id: id
        };
        var url = urlGroups.news.detail + "?" + jsonParseParam(obj);
        bmWebsiteGet(
            url,
            function (res) {

                if (res.code === RESPONSE_OK_CODE && res.result) {
                    var $item = res.result;

                    var title = $item.title ? $item.title : "";
                    var author = $item.author ? $item.author : "";
                    var newsContent = $item.newsContent ? $item.newsContent : "";
                    var publishTime = $item.publishTime ? $item.publishTime : "";
                    publishTime = timeInit1(publishTime);

                    $news_info.find(".n_tl_container").html(title);
                    $news_info.find(".n_author_container .author").html(author);
                    $news_info.find(".n_content_container").html(newsContent);
                    $news_info.find(".n_time_container .pub_time").html(publishTime);

                }
                else {
                    $news_info.html("<div class='none'>暂无新闻详情</div>");
                }
            },
            function (error) {
                $news_info.html("<div class='none'>暂无新闻详情</div>");
            }
        )


    }


};

$(function () {
    news_detail.init();
});
