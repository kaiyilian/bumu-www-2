/**
 * Created by Administrator on 2017/11/2.
 */

var salary = 0;//应发工资

$(function () {

    initPage(); //页面初始化
    showLoadingToast("计算中...");

    calc_result();//计算薪资结果

});

//页面初始化
var initPage = function () {
    var $bg_1 = $(".bg_1");
    var bg_1_height = $bg_1.width() * 501 / 712;
    $bg_1.height(bg_1_height);

    var $bg_2 = $(".bg_2");
    var bg_2_height = $bg_2.width() * 163 / 504;
    $bg_2.height(bg_2_height);


    var $calc_result = $(".calc_result");
    var calc_result_height = $calc_result.width();
    $calc_result.height(calc_result_height);

    var $bg_4 = $(".bg_4");
    var bg_4_height = $bg_4.width() * 362 / 500;
    $bg_4.height(bg_4_height);
};

//计算薪资结果
var calc_result = function () {
    salary = sessionStorage.getItem("salary");
    salary = salary ? parseFloat(salary) : 25000;

    //标准
    var calc_standard_tax = tax(salary - 3500);//标准税
    calc_standard_tax = calc_standard_tax.toFixed(2);
    var calc_standard_get = salary - calc_standard_tax;//标准到手
    calc_standard_get = calc_standard_get.toFixed(2);

    //规则A
    var calc_a_tax = tax(salary - 7500);
    var calc_a_get = salary - calc_a_tax;//到手
    calc_a_get = calc_a_get.toFixed(2);
    var calc_a_save = calc_a_get - calc_standard_get;//节约
    calc_a_save = calc_a_save.toFixed(2);

    //规则B
    var calc_b_get = salary - calc_standard_tax + calc_standard_tax * 0.25;//到手
    calc_b_get = calc_b_get.toFixed(2);
    var calc_b_save = calc_b_get - calc_standard_get;//节约
    calc_b_save = calc_b_save.toFixed(2);

    //规则C
    var calc_c_get;
    if (salary > 17500) {
        calc_c_get = salary - (salary - 17500) * 0.03;//到手
    }
    else {
        calc_c_get = salary//到手
    }
    calc_c_get = calc_c_get.toFixed(2);
    var calc_c_save = calc_c_get - calc_standard_get;//节约
    calc_c_save = calc_c_save.toFixed(2);

    //规则D
    var calc_d_get = salary * 0.93;//到手
    calc_d_get = calc_d_get.toFixed(2);
    var calc_d_save = calc_d_get - calc_standard_get;//节约
    calc_d_save = calc_d_save.toFixed(2);

    var $calc_result = $(".calc_result");
    $calc_result.find(".calc_standard").find("div").first().text("到手 " + calc_standard_get);
    $calc_result.find(".calc_a").find("div").first().text("到手 " + calc_a_get);
    $calc_result.find(".calc_a").find("div").last().text("节约 " + calc_a_save);
    $calc_result.find(".calc_b").find("div").first().text("到手 " + calc_b_get);
    $calc_result.find(".calc_b").find("div").last().text("节约 " + calc_b_save);
    $calc_result.find(".calc_c").find("div").first().text("到手 " + calc_c_get);
    $calc_result.find(".calc_c").find("div").last().text("节约 " + calc_c_save);
    $calc_result.find(".calc_d").find("div").first().text("到手 " + calc_d_get);
    $calc_result.find(".calc_d").find("div").last().text("节约 " + calc_d_save);

    hideLoadingToast();
};

//税收
var tax = function (m) {

    var r = 0;//税

    m = parseFloat(m);
    if (m < 0) {
        m = 0;
    }

    if (m <= 1500) {
        r = m * 0.03;
    }
    else if (m <= 4500) {
        r = m * 0.1 - 105
    }
    else if (m <= 9000) {
        r = m * 0.2 - 555;
    }
    else if (m <= 35000) {
        r = m * 0.25 - 1005;
    }
    else if (m <= 55000) {
        r = m * 0.3 - 2755;
    }
    else if (m <= 80000) {
        r = m * 0.35 - 5505;
    }
    else {
        r = m * 0.45 - 13505;
    }

    return r;
};