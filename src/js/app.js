import "../css/common.scss";


//添加 todo
$("#btn").on("click", e => {
    if (!$("#input").val() == "") {
        const $div = $("<div>").addClass("item animated zoomInDown").text($("#input").val());
        const $span = $("<span>").addClass("choose");
        $("#input").val("");
        $div.append($span);
        $("#items").prepend($div);
    }
});


//完成按钮
$("#items").on("click", e => { //事件代理在容器上
    const $btn = $(e.target); //通过箭头函数this特性 获取当前点击的btn
    if($btn.html() == ""){  //通过内容是否空 判断点击的不是包容btn的div
    if (!$btn.hasClass("choosed")) {
        $btn.addClass("choosed");
        return ;
    }
    $btn.removeClass("choosed");
    }
});