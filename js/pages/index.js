/**
 * Created by Administrator on 2016/6/24.
 *
 */

// var $interface;

var mySwiper;

var index = {

    init: function () {

        index.pageInit(); //页面初始化
        index.bannerListInit(); //banner 初始化
        index.customerImgInit(); //我们的客户 img 初始化

        $(window).resize(function () {
            index.pageInit();
        });

    },

    //页面初始化
    pageInit: function () {
        var $w_width = $(window).width();
        var $w_content_width = document.body.clientWidth;
        var $width = $w_width > $w_content_width ? $w_width : $w_content_width;

        //banner图片宽高
        var banner_Height = $width * 592 / 1903;
        $(".content .banner_list").css("height", banner_Height);

        //"为什么选择我们" 内容样式
        $(".content .choose_us_reason_container .list .item").each(function () {
            var item_width = $(this).width();
            var spn_1_width = $(this).find(".spn_1").width();

            var left = (item_width - spn_1_width) / 2;
            $(this).find(".spn_1").css("left", left);

        });

    },

    //banner、轮播图 初始化
    bannerListInit: function () {
        mySwiper = new Swiper('.banner_container', {
            //自动切换的时间间隔（单位ms），不设定该参数slide不会自动切换。
            autoplay: 2000,
            // disableOnInteraction: false,//操作swiper后不会停止轮播
            initialSlide: 0,//设定初始化时slide的索引。
            direction: 'horizontal',//Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)
            speed: 300,//滑动速度，即slider自动滑动开始到结束的时间（单位ms）
            grabCursor: true,//设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。
            setWrapperSize: true,//开启这个设定会在Wrapper上添加等于slides相加的宽高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。

            slidesOffsetBefore: 0,//设定slide与左边框的预设偏移量（单位px）。
            slidesOffsetAfter: 0,//设定slide与右边框的预设偏移量（单位px）。
            freeMode: false,//默认为false   false：一次滑一个 true：滑到哪里算哪里
            freeModeSticky: true,//使得freeMode也能自动贴合。 滑动模式下也可以贴合
            effect: 'slide',//slide的切换效果，默认为"slide"（位移切换），"fade"（淡入）"cube"（方块）"coverflow"（3d流）。
            loop: true,//是否循环
            preventLinksPropagation: false,//阻止click冒泡。拖动Swiper时阻止click事件。


            //分页器
            pagination: '.swiper-pagination',

            //前进后退按钮
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // },
            prevButton: '.swiper-button-prev',
            nextButton: '.swiper-button-next',

            // //事件
            // on: {
            //     slideChange: function () {
            //         console.log(this.activeIndex);
            //     },
            //     click: function () {
            //         console.log("click")
            //     }
            // }

        });
    },

    //我们的客户 初始化
    customerImgInit: function () {

        var mySwiper = new Swiper('.customer_img_list_container', {

            //自动切换的时间间隔（单位ms），不设定该参数slide不会自动切换。
            // autoplay: {
            //     delay: 10000,//5秒切换一次
            //     disableOnInteraction: false,//操作swiper后不会停止轮播
            // },
            autoplay: 5000,
            // disableOnInteraction: false,//操作swiper后不会停止轮播

            initialSlide: 0,//设定初始化时slide的索引。
            direction: 'horizontal',//Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)
            speed: 300,//滑动速度，即slider自动滑动开始到结束的时间（单位ms）
            autoplayDisableOnInteraction: false,//用户操作swiper之后，是否禁止autoplay。默认为true：停止。
            grabCursor: true,//设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。
            setWrapperSize: true,//开启这个设定会在Wrapper上添加等于slides相加的宽高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。

            slidesOffsetBefore: 0,//设定slide与左边框的预设偏移量（单位px）。
            slidesOffsetAfter: 0,//设定slide与右边框的预设偏移量（单位px）。
            freeMode: false,//默认为false   false：一次滑一个 true：滑到哪里算哪里
            freeModeSticky: true,//使得freeMode也能自动贴合。 滑动模式下也可以贴合
            // slidesPerView: 4,//一页 显示的个数
            effect: 'slide',//slide的切换效果，默认为"slide"（位移切换），"fade"（淡入）"cube"（方块）"coverflow"（3d流）。
            loop: true,

        });

        // console.log(mySwiper.navigation.nextEl)

        $('.customer_container .left_direction').click(function () {
            mySwiper.slidePrev();
        });
        $('.customer_container .right_direction').click(function () {
            mySwiper.slideNext();
        });


    },

    //显示 音频文件
    showMedia: function () {

        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
        var isIE = userAgent.indexOf("compatible") > -1 &&
            userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
        if (isIE) {
            var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
            reIE.test(userAgent);
            var fIEVersion = parseFloat(RegExp["$1"]);

            if (fIEVersion < 10) {
                $(".media_layer").css("display", "block");
            }
            else {
                $(".media_layer").css("display", "flex");
            }
        }
        else {
            $(".media_layer").css("display", "flex");
        }

        var video = document.getElementById("bm_video");
        video.currentTime = 0;
        video.play();

    },

    //隐藏 音频文件
    hideMedia: function () {
        $(".media_layer").css("display", "none");
        var video = document.getElementById("bm_video");
        video.pause();
    },

    //进入指定的页面
    goPage: function (type) {

        location.href = urlByType(type);//获取跳转链接

    },

    //轮播图跳转指定的页面
    goPageBySwiper: function (url) {
        location.href = $host + url;
    }


};

$(function () {

    index.init();
    // alert(BrowserType())

});


var swiper3 = {

    //banner、轮播图 初始化
    bannerListInit: function () {
        mySwiper = new Swiper('.banner_container', {
            //自动切换的时间间隔（单位ms），不设定该参数slide不会自动切换。
            // autoplay: {
            //     delay: 5000,//5秒切换一次
            //     disableOnInteraction: false,//操作swiper后不会停止轮播
            // },

            autoplay: 2000,
            // disableOnInteraction: false,//操作swiper后不会停止轮播
            initialSlide: 0,//设定初始化时slide的索引。
            direction: 'horizontal',//Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)
            speed: 300,//滑动速度，即slider自动滑动开始到结束的时间（单位ms）
            grabCursor: true,//设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。
            setWrapperSize: true,//开启这个设定会在Wrapper上添加等于slides相加的宽高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。

            slidesOffsetBefore: 0,//设定slide与左边框的预设偏移量（单位px）。
            slidesOffsetAfter: 0,//设定slide与右边框的预设偏移量（单位px）。
            freeMode: false,//默认为false   false：一次滑一个 true：滑到哪里算哪里
            freeModeSticky: true,//使得freeMode也能自动贴合。 滑动模式下也可以贴合
            //slidesPerView: 3,//一页 显示的个数
            effect: 'slide',//slide的切换效果，默认为"slide"（位移切换），"fade"（淡入）"cube"（方块）"coverflow"（3d流）。
            loop: true,//是否循环
            preventLinksPropagation: false,//阻止click冒泡。拖动Swiper时阻止click事件。


            //分页器
            // pagination: {
            //     el: '.swiper-pagination',
            //     // bulletElement: 'li',   //分页器HTML标签
            //     clickable: true,     //点击分页器 控制轮播
            //     // dynamicBullets: true,   //动态分页器，当你的slide很多时，开启后，分页器小点的数量会部分隐藏。
            //     // dynamicMainBullets: 2,  //动态分页器的主指示点的数量
            //     type: 'bullets',      //分页器类型
            //     // renderBullet: function (index, className) {
            //     //     return '<span class="' + className + '">' + (index + 1) + '</span>';
            //     // },
            // },
            pagination: '.swiper-pagination',

            //前进后退按钮
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // },
            prevButton: '.swiper-button-prev',
            nextButton: '.swiper-button-next',

            // //事件
            // on: {
            //     slideChange: function () {
            //         console.log(this.activeIndex);
            //     },
            //     click: function () {
            //         console.log("click")
            //     }
            // }

        });
    },

    //我们的客户 初始化
    customerImgInit: function () {

        var mySwiper = new Swiper('.customer_img_list_container', {

            //自动切换的时间间隔（单位ms），不设定该参数slide不会自动切换。
            // autoplay: {
            //     delay: 10000,//5秒切换一次
            //     disableOnInteraction: false,//操作swiper后不会停止轮播
            // },
            autoplay: 2000,
            // disableOnInteraction: false,//操作swiper后不会停止轮播

            initialSlide: 0,//设定初始化时slide的索引。
            direction: 'horizontal',//Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)
            speed: 300,//滑动速度，即slider自动滑动开始到结束的时间（单位ms）
            autoplayDisableOnInteraction: false,//用户操作swiper之后，是否禁止autoplay。默认为true：停止。
            grabCursor: true,//设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。
            setWrapperSize: true,//开启这个设定会在Wrapper上添加等于slides相加的宽高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。

            slidesOffsetBefore: 0,//设定slide与左边框的预设偏移量（单位px）。
            slidesOffsetAfter: 0,//设定slide与右边框的预设偏移量（单位px）。
            freeMode: false,//默认为false   false：一次滑一个 true：滑到哪里算哪里
            freeModeSticky: true,//使得freeMode也能自动贴合。 滑动模式下也可以贴合
            slidesPerView: 4,//一页 显示的个数
            effect: 'slide',//slide的切换效果，默认为"slide"（位移切换），"fade"（淡入）"cube"（方块）"coverflow"（3d流）。
            loop: true,

        })

        // console.log(mySwiper.navigation.nextEl)

        $('.customer_container .left_direction').click(function () {
            mySwiper.slidePrev();
        });
        $('.customer_container .right_direction').click(function () {
            mySwiper.slideNext();
        });


    },
};
