$(function (){
    formatTime('.time');
    toggleClass('.nav .col', 'mouseover', 'onBg');


    /**
     * 删除类名
     * @param {*} ele 
     */
    function toggleClass(ele, eventType, className){
        $(ele).on(eventType, function() {
            $(this).children().addClass(className);
            $(this).siblings().children().removeClass(className);
        })
    }

    /**
     * 格式化时间
     * @param {元素类名} ele 
     */
    function formatTime(ele){
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var weeks = "日一二三四五六";
        var week = weeks.charAt(date.getDay());
        $(ele).html(year + "年" + month + "月" + day + "日&nbsp;&nbsp;星期" + week);
    }
});