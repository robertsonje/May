$(function() {
    $("#p1").click(function () {
        $(this).hide();
    });
    $("#p2").mouseleave(function() {
        alert("Goodbye!");
    });
});