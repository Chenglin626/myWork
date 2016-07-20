$(function(){
	var key = 0;
	var flag = true;
	
	$(window).mousewheel(function(event,num){
		
		if(!$('.wrap').is(':animated')){

			key = key - num;

			if( key > 5 ) key = 5;
			if( key < 0 ) key = 0

			$('.wrap').stop().animate({'top':-key*100+'%'},1000);
			
			$('.nav li').removeClass('current').eq(key).addClass('current');
            dhua();

		}



	});

	var span = '<span></span>';

	$('.nav li').append(span);

	var arr = ['首页','营销手段','服务优势','特色功能','技术优势','申请加入'];

	$('.nav li span').each(function(index, el) {
		
		$(this).html(arr[index]);

	});

	$('.nav li').on({
		mouseover : function(){
			$(this).children('span').css({
				'visibility':'visible',
				'right':'20px',
				'opacity':1
			})
		},
		
		mouseout : function(){
			$(this).children('span').css({
				'visibility':'hidden',
				'right':'50px',
				'opacity':0
			})
		},
		
		click : function(){
			
			key = $(this).index();

			$('.wrap').stop().animate({'top':-key*100+'%'},1000);

			$(this).addClass('current').siblings().removeClass('current');
            dhua();
		}
	})

    dhua();

    function dhua(){
        $('.page').addClass('Tlin').eq(key).removeClass('Tlin');
    }

})