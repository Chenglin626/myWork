$(function(){

	//获取导航的标准流离document的0，0点的距离..
	var bzliu = $('nav').offset().top;
	$(window).scroll( function(event){
		if( $(window).scrollTop() >= bzliu ){
			$('nav').addClass('navfixed');
			$('.head').addClass('headfixed');
			var be = bzliu;
			$('.headfixed').css({'top':-be})
		} else {
			$('nav').removeClass('navfixed');
			$('.head').removeClass('headfixed');
			$('.head').css({'top': 0})
		}

		if( $(window).scrollTop() > bzliu ){
			$('.main').addClass('relemain');
			var bn = bzliu;
			$('.relemain').css({'top': bn+120})
		} else {
			$('.main').removeClass('relemain');
			$('.main').css({'top': 122});
		}
	})
})