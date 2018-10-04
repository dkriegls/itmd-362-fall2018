// jQuery 3.x-style ready event and locally scoped $
jQuery(function ($) {
    $('html').removeClass('nojs');
    $("html").addClass("hasjs");
    $("#email").on("focus", function () {
        $("#input-email label").addClass("active");
    });
    $("#email").on("blur", function () {
        if ($("#email").val().length === 0) {
            $("#input-email label").removeClass("active");
        }
    });
    $("#alt-box").on("click", function () {
        $("#age-verification").prop("checked", true);
        $("#alt-box").html("<p>&#10004;</p>");
    });
});
