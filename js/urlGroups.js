// var $host = "http://localhost:8086/arya-admin/";
// var $host = "http://192.168.13.248:9015/arya-admin/";
// var $host = "http://192.168.13.248:5872/arya/";//获取接口前缀
var $host = getInterface();//获取接口前缀

var urlGroups = {

    //招聘
    recruit: {
        list: $host + "admin/officialwebsite/recruit/list"
    },

    //新闻
    news: {
        list: $host + "admin/officialwebsite/news/list",
        detail: $host + "admin/officialwebsite/news/id"
    }

};
