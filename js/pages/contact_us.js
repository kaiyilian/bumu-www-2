$(function () {

    var myChart = echarts.init(document.getElementById('china-map'));
    var option = {
        // title: {
        //     show: true,
        //     text: "招才进宝全国布点城市",
        //     textStyle: {
        //         color: "#666",
        //         fontWeight: "bold",
        //         fontSize: 16,
        //         verticalAlign: 'middle',
        //         align: "center",
        //         // left:200
        //         width: 300
        //
        //     },
        //     subtext: "请在省份区域查看详细子公司"
        // },
        tooltip: {
            trigger: 'item',
            show: true,//不显示提示标签
            formatter: '{b}', //提示标签格式
            backgroundColor: "rgba(255,255,255,0.6)",//提示标签背景颜色
            textStyle: {color: "#333"}, //提示标签字体颜色
            triggerOn: "mousemove|click",//提示框触发的条件
            borderColor: "orange",
            borderWidth: .5,
            // enterable: true,//鼠标是否可进入提示框浮层中，默认为false，如需详情内交互，如添加链接，按钮，可设置为 true。
            extraCssText: 'box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.3);',
            formatter: function (params) {
                var container = "";

                var p_name = params.name;
                if (p_name) {

                    container = "<div class='p_name'>" + p_name + "</div>";
                    var data = option.series[0].data;
                    for (var i = 0; i < data.length; i++) {
                        if (p_name === data[i].name) {
                            var arr = data[i].arr ? data[i].arr : [];//分公司名称数组

                            if (arr.length > 0) {
                                for (var j = 0; j < arr.length; j++) {
                                    container += "<div class='cpm_item'>" + arr[j] + "</div>";
                                }
                            }
                            else {
                                container += "<div class='cpm_item'>暂无分公司</div>";
                            }
                        }
                    }

                }
                return container
            },
            // position: function (point, params, dom, rect, size) {
            //     // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
            //     var obj = {top: 60};
            //     obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
            //     return obj;
            // }
            // position:['50%', '50%']

        },
        series: [
            {
                type: 'map',
                mapType: 'china',
                label: {
                    normal: {
                        show: true,//显示省份标签
                        textStyle: {color: "#fff"}//省份标签字体颜色
                    },
                    emphasis: {//对应的鼠标悬浮效果
                        show: true,
                        textStyle: {color: "#f78222"}
                    }
                },
                itemStyle: {
                    normal: {
                        borderWidth: .7,//区域边框宽度
                        borderColor: '#fff',//区域边框颜色
                        areaColor: "#f78222",//区域颜色
                    },
                    emphasis: {
                        borderWidth: .7,
                        borderColor: '#f78222',
                        areaColor: "#fff",
                    }
                },
                data: [
                    {
                        name: '北京', selected: false, value: 1,
                        // tooltip: {
                        //     show: false,
                        //     hideDelay: 0
                        // },
                        arr: []
                    },
                    {
                        name: '天津', selected: false, value: 2,
                        arr: [
                            "天津汇嘉人力资源服务有限公司"
                        ]
                    },
                    {
                        name: '上海', selected: false, value: 3,
                        label: {
                            normal: {
                                show: true,//显示省份标签
                                textStyle: {color: "#f7b36a"}//省份标签字体颜色
                            }
                        },
                        arr: [
                            "上海汇倾人力资源有限公司",
                            "上海不木企业管理有限公司"
                        ]
                    },
                    {
                        name: '重庆', selected: false, value: 4,
                        arr: [
                            "上海汇倾人力资源有限公司重庆分公司"
                        ]
                    },
                    {
                        name: '河北', selected: false, value: 5,
                        arr: [
                            "石家庄不木人力资源有限公司"
                        ]
                    },
                    {
                        name: '河南', selected: false, value: 6,
                        arr: [
                            "河南不木人力资源服务有限公司"
                        ]
                    },
                    {
                        name: '云南', selected: false, value: 7,
                        arr: [
                            "云南不木人力资源有限公司"
                        ]
                    },
                    {
                        name: '辽宁', selected: false, value: 8,
                        arr: [
                            "沈阳汇嘉人力资源服务有限公司"
                        ]
                    },
                    {
                        name: '黑龙江', selected: false, value: 9,
                        arr: [
                            "黑龙江汇嘉人力资源有限公司"
                        ]
                    },
                    {
                        name: '湖南', selected: false, value: 10,
                        arr: [
                            "长沙汇广人力资源有限公司"
                        ]
                    },
                    {
                        name: '安徽', selected: false, value: 11,
                        arr: [
                            "合肥汇嘉人力资源有限公司"
                        ]
                    },
                    {
                        name: '山东', selected: false, value: 12,
                        arr: [
                            "青岛不木人力资源有限公司"
                        ]
                    },
                    {
                        name: '新疆', selected: false, value: 13,
                        // tooltip: {
                        //     show: false
                        // },
                        arr: []
                    },
                    {
                        name: '江苏', selected: false, value: 14,
                        arr: [
                            "南京不木劳务服务有限公司",
                            "无锡汇嘉人力资源有限公司"
                        ]
                    },
                    {
                        name: '浙江', selected: false, value: 15,
                        arr: [
                            "杭州汇嘉人力资源有限公司"
                        ]
                    },
                    {
                        name: '江西', selected: false, value: 16,
                        arr: [
                            "江西汇嘉人力资源有限公司"
                        ]
                    },
                    {
                        name: '湖北', selected: false, value: 17,
                        arr: [
                            "武汉汇嘉人力资源有限公司",
                            "武汉汇嘉人力资源有限公司黄石分公司",
                            "武汉汇嘉人力资源有限公司鄂州分公司",
                            "武汉汇嘉人力资源有限公司孝感分公司",
                            "武汉汇嘉人力资源有限公司咸宁分公司",
                            "武汉汇嘉人力资源有限公司黄冈分公司",
                            "武汉汇嘉人力资源有限公司宜昌分公司",
                            "武汉汇嘉人力资源有限公司荆门分公司",
                            "武汉汇嘉人力资源有限公司襄阳分公司",
                            "武汉汇嘉人力资源有限公司随州分公司",
                            "武汉汇嘉人力资源有限公司十堰分公司",
                            "武汉汇嘉人力资源有限公司仙桃分公司",
                            "武汉汇嘉人力资源有限公司恩施分公司",
                            "武汉汇嘉人力资源有限公司潜江分公司",
                            "武汉汇嘉人力资源有限公司天门分公司",
                        ],
                        // tooltip: {
                        //     position: [300, 100]
                        // },
                    },
                    {
                        name: '广西', selected: false, value: 18,
                        arr: [
                            "广西不木人力资源有限公司"
                        ]
                    },
                    {
                        name: '甘肃', selected: false, value: 19,
                        // tooltip: {
                        //     show: false
                        // }
                        arr: []
                    },
                    {
                        name: '山西', selected: false, value: 20,
                        arr: [
                            "山西不木人力资源有限公司"
                        ]
                    },
                    {
                        name: '内蒙古', selected: false, value: 21,
                        arr: [
                            "内蒙古汇诺人力资源有限公司"
                        ]
                    },
                    {
                        name: '陕西', selected: false, value: 22,
                        arr: [
                            "西安汇诺和人力资源有限公司"
                        ]
                    },
                    {
                        name: '吉林', selected: false, value: 23,
                        arr: [
                            "吉林不木人力资源有限公司"
                        ]
                    },
                    {
                        name: '福建', selected: false, value: 24,
                        arr: [
                            "福州不木人力资源有限公司"
                        ]
                    },
                    {
                        name: '贵州', selected: false, value: 25,
                        arr: [
                            "贵州汇诺和人力资源有限公司",
                            "上海汇倾人力资源有限公司清镇分公司"
                        ]
                    },
                    {
                        name: '广东', selected: false, value: 26,
                        arr: [
                            "深圳汇嘉人力资源有限公司",
                            "深圳汇嘉人力资源有限公司广州分公司",
                            "深圳汇嘉人力资源有限公司东莞分公司"
                        ]
                    },
                    {
                        name: '青海', selected: false, value: 27,
                        // tooltip: {
                        //     show: false
                        // }
                        arr: []
                    },
                    {
                        name: '西藏', selected: false, value: 28,
                        // tooltip: {
                        //     show: false
                        // }
                        arr: []
                    },
                    {
                        name: '四川', selected: false, value: 29,
                        arr: [
                            "上海汇倾人力资源有限公司四川分公司",
                            "成都汇翼人力资源服务有限公司"
                        ]
                    },
                    {
                        name: '宁夏', selected: false, value: 30,
                        // tooltip: {
                        //     show: false
                        // }
                        arr: []
                    },
                    {
                        name: '海南', selected: false, value: 31,
                        label: {
                            normal: {
                                show: true,//显示省份标签
                                textStyle: {color: "#f7b36a"}//省份标签字体颜色
                            }
                        },
                        // tooltip: {
                        //     show: false
                        // }
                        arr: []
                    },
                    {
                        name: '台湾', selected: false, value: 32,
                        label: {
                            normal: {
                                show: true,//显示省份标签
                                textStyle: {color: "#f7b36a"}//省份标签字体颜色
                            }
                        },
                        // tooltip: {
                        //     show: false
                        // }
                        arr: []
                    },
                    {
                        name: '香港', selected: false, value: 33,
                        label: {
                            normal: {
                                show: true,//显示省份标签
                                textStyle: {color: "#f7b36a"}//省份标签字体颜色
                            }
                        },
                        // tooltip: {
                        //     show: false
                        // }
                        arr: []
                    },
                    {
                        name: '澳门', selected: false, value: 34,
                        label: {
                            normal: {
                                show: true,//显示省份标签
                                textStyle: {color: "#f7b36a"}//省份标签字体颜色
                            }
                        },
                        arr: []
                        // tooltip: {
                        //     show: false
                        // }
                    },
                    {
                        name: '南海诸岛', selected: false, value: 35,
                        label: {
                            normal: {
                                show: true,//显示省份标签
                                textStyle: {color: "#f7b36a"}//省份标签字体颜色
                            }
                        },
                        // tooltip: {
                        //     show: false
                        // }
                        arr: []
                    }
                ]
            }
        ],
        dataRange: {
            x: '-1000px',//图例横轴位置
            y: '-1000px',//图例纵轴位置
            splitList: [
                {start: 1, end: 1, label: '北京', color: '#e9692c'},
                {start: 2, end: 2, label: '天津', color: '#f29b23'},
                {start: 3, end: 3, label: '上海', color: '#f48f41'},
                {start: 4, end: 4, label: '重庆', color: '#e46e0c'},
                {start: 5, end: 5, label: '河北', color: '#f4a779'},
                {start: 6, end: 6, label: '河南', color: '#f4a779'},
                {start: 7, end: 7, label: '云南', color: '#f58a2c'},
                {start: 8, end: 8, label: '辽宁', color: '#f0863c'},
                {start: 9, end: 9, label: '黑龙江', color: '#f4810c'},
                {start: 10, end: 10, label: '湖南', color: '#f3a678'},
                {start: 11, end: 11, label: '安徽', color: '#f4b46d'},
                {start: 12, end: 12, label: '山东', color: '#f4a779'},
                {start: 13, end: 13, label: '新疆', color: '#f3811e'},
                {start: 14, end: 14, label: '江苏', color: '#f1b56d'},
                {start: 15, end: 15, label: '浙江', color: '#f49d56'},
                {start: 16, end: 16, label: '江西', color: '#f2b36e'},
                {start: 17, end: 17, label: '湖北', color: '#f08328'},
                {start: 18, end: 18, label: '广西', color: '#f2b36e'},
                {start: 19, end: 19, label: '甘肃', color: '#f58a2c'},
                {start: 20, end: 20, label: '山西', color: '#f29b23'},
                {start: 21, end: 21, label: '内蒙古', color: '#f58a2c'},
                {start: 22, end: 22, label: '陕西', color: '#f29b23'},
                {start: 23, end: 23, label: '吉林', color: '#f4810c'},
                {start: 24, end: 24, label: '福建', color: '#f49d56'},
                {start: 25, end: 25, label: '贵州', color: '#f58a2c'},
                {start: 26, end: 26, label: '广东', color: '#f2b36e'},
                {start: 27, end: 27, label: '青海', color: '#f58a2c'},
                {start: 28, end: 28, label: '西藏', color: '#f3811e'},
                {start: 29, end: 29, label: '四川', color: '#f58a2c'},
                {start: 30, end: 30, label: '宁夏', color: '#f3a678'},
                {start: 31, end: 31, label: '海南', color: '#f2b36e'},
                {start: 32, end: 32, label: '台湾', color: '#f7b36a'},
                {start: 33, end: 33, label: '香港', color: '#f2b36e'},
                {start: 34, end: 34, label: '澳门', color: '#f2b36e'},
                {start: 35, end: 35, label: '南海诸岛', color: '#f2b36e'},

            ]
        },//各省地图颜色；start：值域开始值；end：值域结束值；label：图例名称；color：自定义颜色值；
    };

    myChart.setOption(option);
    // myChart.on('mouseover', function (params) {
    //     // var dataIndex = params.dataIndex;
    //     // console.log(params);
    // });
    // myChart.on('click', function (params) {
    //     // var dataIndex = params.dataIndex;
    //     // console.log(dataIndex);
    //     // console.log(params);
    //     //
    //     // myChart.dispatchAction({
    //     //     type: 'showTip',
    //     //     seriesIndex:0 ,//第几条series
    //     //     dataIndex: dataIndex,//第几个tooltip
    //     //     triggerOn: "click",//提示框触发的条件
    //     // })
    //
    // });

});

