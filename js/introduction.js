var introduction_1 = $(window).scrollTop();
    // console.log(introduction_1);
    var introduction_3 = $(window).scrollTop() + $('#introduction_1').height();
    // console.log(introduction_3);
    // var introduction_3 = $("main#introduction_1").height();
    // console.log($('#introduction_1').height());
    // console.log($('#introduction_3').height());

    $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll < introduction_3) {
        $("#introduction_2").addClass("nondisplay");
    } 
    else {
        $("#introduction_2").removeClass("nondisplay");
    }
});
