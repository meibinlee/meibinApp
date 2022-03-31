'use strict';

    var $window = $(window);

    function run()
    {
        var fName = arguments[0],
        aArgs = Array.prototype.slice.call(arguments, 1);
        try {
            fName.apply(window, aArgs);
        } catch(err) {
        }
    };

    /* chart
    ================================================== */
    function _chart ()
    {
        $('.b-skills').appear(function() {
            setTimeout(function() {
                $('.chart').easyPieChart({
                    easing: 'easeOutElastic',
                    delay: 3000,
                    barColor: '#369670',
                    trackColor: '#fff',
                    scaleColor: false,
                    lineWidth: 21,
                    trackWidth: 21,
                    size: 250,
                    lineCap: 'round',
                    onStep: function(from, to, percent) {
                        this.el.children[0].innerHTML = Math.round(percent);
                    }
                });
            }, 150);
        });
    };


    $(window).scroll(function() { 
        if ($(this).scrollTop() > 0) {    
            $(document).ready(function() {
                run(_chart);
            });
        } 
    });


    /* scroll to top
    ================================================== */

    $(document).ready(function(){
        $(window).scroll(function () {
                if ($(this).scrollTop() > 50) {
                    $('#back-to-top').fadeIn();
                } else {
                    $('#back-to-top').fadeOut();
                }
            });
            // scroll body to 0px on click
            $('#back-to-top').click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 400);
                return false;
            });
    });

    window.addEventListener("wheel", function(e){
        e.preventDefault();
    },{passive : false});
    var $html = $("html");
 
    var page = 1;
     
    var lastPage = $(".home").length;
     
    $html.animate({scrollTop:0},10);

    $(window).on("wheel", function(e){
 
        if($html.is(":animated")) return;
     
        if(e.originalEvent.deltaY > 0){
            if(page== lastPage) return;
     
            page++;
        }else if(e.originalEvent.deltaY < 0){
            if(page == 1) return;
     
            page--;
        }
        var posTop = (page-1) * $(window).height();
     
        $html.animate({scrollTop : posTop});
     
    });
    