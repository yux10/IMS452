(function(){

    //        main 区域tab切换
    $(".con").eq(0).show();
    $(".tab_btn span").click(function(){
        $(".tab_btn span").removeClass("light_font");
        $(this).addClass('light_font');

        var num =$(".tab_btn span").index(this);
        $(".con").hide();
        $(".con").eq(num).show().slblings().hide();
    })




//        游戏类型选择
    function select() {
        $(document).click(function () {
            $(".select_module_con ul").slideUp();
        })
        var module = $(".select_result");
        module.click(function (e) {
            e.stopPropagation();
            var ul = $(this).next();
            ul.stop().slideToggle();
            ul.children().click(function (e) {
                e.stopPropagation();
                $(this).parent().prev().children("span").text($(this).text());
                ul.stop().slideUp();
            })
        })
    }
    $(function () {
        select();
    })

})();
