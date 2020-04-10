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
    $(".dev-img").click(function() {
        $(".dev-img").hide(1200);
        $("#development").toggle(1200);
        $("#development").show(1200);
    })
    $("#development").click(function() {
        $("#development").hide(1200);
        $(".dev-img").toggle(1200);
        $(".dev-img").show(1200);
    });
    $(".product-img").click(function() {
        $(".product-img").hide(1200);
        $("#product").toggle(1200);
        $("#product").show(1200);
    })
    $("#product").click(function() {
        $("#product").hide(1200);
        $(".product-img").toggle(1200);
        $(".product-img").show(1200);
    });
});
$(document).ready(function() {
    $('.text').hover(function() {
            $(this).css({ opacity: '1' });
        },
        function() {
            $(this).css({ opacity: '0' });
        })
});
$(document).ready(function() {
    $('#submission').submit(function(event) {
        var display1 = $('input:first').val();
        var display2 = $('input#mail').val();
        if (display1 && display2 != '') {
            alert('Thank you ' + display1 + ' your subscription is well received');
        } else {
            alert('Invalid input');
        }
        event.preventDefault();
    })
});