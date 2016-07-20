
$(function(){
    $(window).scroll(function(event){
        var g=$(window).scrollTop();
        if(g>$(window).height()){
            $('.youjt').show();
        } else {
			$('.youjt').hide();
		}
    });

    $('.youjt').click(function() {
        $('html,body').animate({
            'scrollTop': 0
        }, 500)
    });
});