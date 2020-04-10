$(document).ready(function() {
    $(".design-img").click(function() {
        $(".design-img").hide(1200);
        $("#design").toggle(1200);
        $("#design").show(1200);
    })
    $("#design").click(function() {
        $("#design").hide(1200);
        $(".design-img").toggle(1200);
        $(".design-img").show(1200);
    });
});