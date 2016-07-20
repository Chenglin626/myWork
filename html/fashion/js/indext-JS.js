$(function(){

    $('.nav').css('display','block')
    $('.nav2').css('display','none');
    $('.anliu').css('display','block')

    var tNum=0;
    var timer;
    function autoplay() {

        tNum++;
        if (tNum>5) {
            tNum=1
            $('.fytu').stop().animate({
                'marginLeft': -960+'px'
            },3000);
        }

        var tuw = tNum - 1;
        $('.nav-top').eq(tuw).css('display','block');
        $('.nav-top').eq(tuw).siblings('.nav-top').css('display','none');

        $('.anliu li').eq(tuw).addClass('current').siblings().removeClass('current');

        var move = ( tNum*-1920 ) + 960;
        $('.fytu').stop().animate({
            'marginLeft': '' + move + 'px'
        },500);


    };

    timer = setInterval( autoplay, 4000 );

    $('.nav').hover( function(event) {
        clearInterval(timer);
    },function(event) {
        clearInterval(timer);
        timer = setInterval ( autoplay, 4000 );
    });

    $('.anliu li a').click( function(event){

        $(this).parent().addClass('current').siblings().removeClass('current');
        var m = $(this).parent().index()+1;
        var move = ( m*-1920 ) + 960;
        $('.fytu').stop().animate({
            'marginLeft': '' + move + 'px'
        },500);
        tNum = m;
    });

    $('.nav-top').hover(function(event){
        $('.nav-top').css({
            'color': '#FB9438',
            'opacity': '0.8'
        });
    }, function(event){
        $('.nav-top').css({
            'color':' #FEF6F2',
            'opacity': '0.7'
        });
    });

    var bzliu = $('.nav').offset().top;
    $(window).scroll(function(event){
        if ( $(window).scrollTop() > bzliu ){
            $('.nav').addClass('navfixed');

        } else {
			$('.nav').removeClass('navfixed');
		}

        if ( $(window).scrollTop() >= 1079 ) {
            $('.dinwei1').addClass('fixedw1');
            $('.top-jt').hide();
        } else {
            $('.dinwei1').removeClass('fixedw1');
            $('.top-jt').show();
        }
    });

    $(window).scroll(function(){

        if ( $(window).scrollTop() > 1080 ) {
            $('.dinwei2').addClass('dw2ra');
        } else {
			$('.dinwei2').removeClass('dw2ra');
		}
    });

    $('.top-jt').click(function(){
        $('html,body').stop().animate({
            'scrollTop': 1079
        },500);
    })

    var gao = $(window).height()*2;
    $(window).scroll( function(event){
        if ( $(window).scrollTop() > gao ) {
            $('.youjt').show();
        } else {
			$('.youjt').hide();
		}
    });

    $('.youjt').click( function(event){
        $('html,body').stop().animate({
            'scrollTop': 0
        },500)
    });

    var clu=0;
    var cliutimer;

    function clplay(){
        clu++;
        if ( clu>3 ) {
            clu=0;
            $('.cliu-1 ul').stop().animate({'left':'0'},500);
        }
        var clumove = (clu*-1200);
        $('.cliu-1 ul').stop().animate({
            'left': ''+clumove+'px'
        }, 500)
        var wzarry= ['黄晓明：一个演员的修行之道','“大胆爱，在一起”幸福主题','封面人物 | 张静初：不忘初心','Ella：有态度不怕“不正常”']
        var w = clu;
        if ( w>3 ) w=0;
        $('.wz1 b').html(''+wzarry[w]+'')
    };

    $('.wz1 i').click( function(event){
        clplay()
    });

    cliutimer = setInterval ( clplay, 5000);
    $('.wz1').hover( function(event){
        clearInterval(cliutimer);
    }, function(event){
        cliutimer=setInterval( clplay, 5000);
    });

    $('.xcwz').hover( function(event){
        $(this).children('.xf').stop().fadeToggle();
        $(this).children('a').css({'background':'#F4F4F4','color':'#FF8004'});
    }, function(){
        $(this).children('.xf').stop().fadeToggle();
        $(this).children('a').css({'background':'#B9B9B9','color':'#FCFCFC'});
    });
	
    var tr = 0
    $('.cliu-2 .right').click( function(event){
        tr++;
        if(tr>12){
            tr=0;
            $('.cliu-2 ul').stop().animate({'left':'0'}, 500);
        };
        move = tr*-300;
        $('.cliu-2 ul').stop().animate({'left':''+move+''}, 500)

        if( tr==0 ) {
            $('.cliu-2 .right').parent().find('.lbt li').eq(0).addClass('current').siblings().removeClass('current');
        } else if ( tr==4 ) {
            $('.cliu-2 .right').parent().find('.lbt li').eq(1).addClass('current').siblings().removeClass('current');
        } else if ( tr==8 ) {
            $('.cliu-2 .right').parent().find('.lbt li').eq(2).addClass('current').siblings().removeClass('current');
        } else if ( tr==12 ) {
            $('.cliu-2 .right').parent().find('.lbt li').eq(3).addClass('current').siblings().removeClass('current');
        }
    });

    var tl = 0;
    $('.cliu-2 .left').click(function(event){
        tl--;
        if ( tl<0 ) {
            tl=12;
            $('.cliu-2 ul').stop().animate({'left': '-3600'},500);
        };
        move = tl*-300;
        $('.cliu-2 ul').stop().animate({'left': ''+move+''},500)

        if( tl==12 ) {
            $('.cliu-2 .right').parent().find('.lbt li').eq(3).addClass('current').siblings().removeClass('current');
        } else if ( tl==8 ) {
            $('.cliu-2 .right').parent().find('.lbt li').eq(2).addClass('current').siblings().removeClass('current');
        } else if ( tl==4 ){
            $('.cliu-2 .right').parent().find('.lbt li').eq(1).addClass('current').siblings().removeClass('current');
        } else if ( tl==0 ){
            $('.cliu-2 .right').parent().find('.lbt li').eq(0).addClass('current').siblings().removeClass('current');
        }
    });

    $('.lbt li a').click( function(event){

        $(this).parent().addClass('current').siblings().removeClass('current');
        var i=$(this).parent().index();
        var move=$(this).parent().index()*-1200;

        $('.cliu-2 ul').stop().animate({'left':''+move+'px'}, 500);
        
        tl=i*4
        tr=i*4
    });
    
    $('.nx').hover( function(event){
        $(this).children('.infor').stop().animate({'bottom':'0'},500);
        $(this).children('.infor').find('h3').fadeTo('0',0.9).css({'color':'#FA8000'}).fadeTo('500',1);
    }, function(event){
        $(this).children('.infor').stop().animate({'bottom':'-80'},500);
        $(this).children('.infor').find('h3').fadeTo('0',0.9).css({'color':'#F3FFFF'}).fadeTo('500',1);
    });

    $('.drdc li').hover(function(event){
        $(this).children('.tuwen').stop().fadeIn();
        $(this).children('.xin').fadeTo('0',0.8).css({'backgroundColor':'#FD8A1A'}).fadeTo('400',1).find('*').css('color','#fff');
    },function(event){
        $(this).children('.tuwen').stop().fadeOut();
        $(this).children('.xin').fadeTo('0',0.8).css({'backgroundColor':'#E6E6E6'}).fadeTo('400',1).find('*').css('color','#666666');
    });

    var wsp = 0;
    $('.qfwsp').children('.right').click(function(event){
        wsp++;
        if( wsp > 12 ) {
            wsp=0;
            $('.drdc').stop().animate({'left':'0'},500);
        };
        var move = wsp*-300;
        $('.drdc').stop().animate({'left':''+move+'px'}, 500);

        if( wsp==0 ) {
            $('.qfwsp .right').parent().find('.drdc2 li').eq(0).addClass('current').siblings().removeClass('current');
        } else if ( wsp==4 ) {
            $('.qfwsp .right').parent().find('.drdc2 li').eq(1).addClass('current').siblings().removeClass('current');
        } else if ( wsp==8 ) {
            $('.qfwsp .right').parent().find('.drdc2 li').eq(2).addClass('current').siblings().removeClass('current');
        } else if ( wsp==12 ) {
            $('.qfwsp .right').parent().find('.drdc2 li').eq(3).addClass('current').siblings().removeClass('current');
        }
    });

    var wr = 0;
    $('.qfwsp .left').click(function(event){
        wr--;
        if ( wr < 0 ){
            wr=12;
            $('.drdc').stop().animate({'left':'-3600'},500);
        }
        var move = wr*-300;
        $('.drdc').stop().animate({'left':''+move+'px'},500);

        if( wr==12 ) {
            $('.qfwsp .left').parent().find('.drdc2 li').eq(3).addClass('current').siblings().removeClass('current');
        } else if ( wr==8 ) {
            $('.qfwsp .left').parent().find('.drdc2 li').eq(2).addClass('current').siblings().removeClass('current');
        } else if ( wr==4 ) {
            $('.qfwsp .left').parent().find('.drdc2 li').eq(1).addClass('current').siblings().removeClass('current');
        } else if ( wr==0 ) {
            $('.qfwsp .left').parent().find('.drdc2 li').eq(0).addClass('current').siblings().removeClass('current');
        }
    });

    $('.drdc2 li a').click(function(event){
        $(this).parent().addClass('current').siblings().removeClass('current');
        var move = $(this).parent().index()*-1200;
        var i = $(this).parent().index();
        $('.drdc').stop().animate({'left':''+move+'px'},500);
        wsp = i*4;
        wr = i*4;
    })
    
    $('#wenb').focus(function(){
        if( $('#wenb').val()=='请输入搜索内容...' ) {
            $('#wenb').val('');
            $('#wenb').css('color','#333');
        }
    });

    $('#wenb').blur(function(){
        if( $('#wenb').val()=='' ) {
            $('#wenb').val('请输入搜索内容...');
            $('#wenb').css('color','#ccc');
        }
    });

})





























