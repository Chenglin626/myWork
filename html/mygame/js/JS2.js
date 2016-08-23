var oUl = document.getElementById('pic_frame');
var aLi = document.getElementsByTagName('li');
var oSpLi;

oUl.startCtr = true;

var gameStep = document.getElementById('step');
var gameBeginBtn = document.getElementById('begin_control');
var picChange = document.getElementById('pic_change');

var bgData = [ 'bg1.png', 'bg2.png', 'bg3.png', 'bg4.png' ];
oUl.urlNum = 0;

var bgWrap = document.getElementById('bg_list');
var bgUrl = document.getElementById('bg').getElementsByTagName('div');
var bgBtn = document.getElementById('bg_btn').getElementsByTagName('div');

var bgFin = document.getElementById('pic_show').getElementsByTagName('div')[0];

bgUrl.that = bgUrl[0];
addClass( 'active', bgUrl.that );


function gameInt() {
	oUl.startCtr = true;
	
	var str = '';
	for ( var i = 0; i < 9; i++ ) {
		str += '<li><div></div><div></div></li>';
	}
	oUl.innerHTML = str;
	
	for ( var i = 0; i < aLi.length; i++ ) {
		aLi[i].children[0].style.background = 'url(img/' + bgData[ oUl.urlNum ] + ') -' + i%3 * 200 + 'px -' + Math.floor(i/3) * 150 + 'px';
	}
	bgFin.style.background = 'url(img/mini_' + bgData[ oUl.urlNum ] + ')';
	
};

gameInt();

gameBeginBtn.onclick = gameBegin;

function gameBegin() {
	if ( oUl.startCtr ) {
		oUl.startCtr = false;
		
		picChange.style.color = '#666';
		
		addClass( 'closeBtn', gameBeginBtn );
		
		gameStep.step = 0;
		
		var time = 6;
		var sp = getRandomNum( aLi.length );
		
		var arrList = getRandomArr( aLi.length, sp );
		var arrLi = [];
		
		oSpLi = aLi[sp];
		oSpLi.gamerArr = [];
		
		
		setIndex( aLi );
		for ( var i = 0; i < aLi.length; i++ ) {
			aLi[i].password = i;
			arrLi.push( aLi[arrList[i]]);
		}
		
		clearInterval( oUl.timer );
		oUl.timer = setInterval( function () {

			time --;
			
			switch ( time ) {
				case 5:
					gameStep.innerHTML = time - 2;
					break;
				case 4:
					gameStep.innerHTML = time - 2;
					for ( var i = 0; i < aLi.length; i++ ) {
						addClass( 'tBack', aLi[i] );
					}
					break;
				case 3:
					gameStep.innerHTML = time - 2;
					for ( var i = 0; i < arrLi.length; i++ ) {
						oUl.appendChild( arrLi[i]);
					}
					setIndex( aLi );
					break;
				
				case 2:
					for ( var i = 0; i < aLi.length; i++ ) {
						removeClass( 'tBack', aLi[i] );
					}
					gameStep.innerHTML = 'Ready';
					
					break;
				case 1:
					
					
					addClass( 'tBackHidden', oSpLi );
					
					gameStep.innerHTML = 'Go';
					break;
				case 0:
					
					for ( var i = 0; i < aLi.length; i++ ) {
						if ( aLi[i] != oSpLi ) {
							aLi[i].style.webkitTransition = '0.1s';
							aLi[i].style.transition = '0.1s';
						} else {
							aLi[i].style.webkitTransition = '0s';
							aLi[i].style.transition = '0s';
						}
					}
					
					picChange.style.color = '#000';
					
					removeClass( 'closeBtn', gameBeginBtn );
					gameBeginBtn.innerHTML = '重新开始';
					gameStep.innerHTML = gameStep.step = 0;
					gamerReset();
					clearInterval( oUl.timer );
			}
		}, 1000);
		
	} else {
		if ( oSpLi.gamerCtr ) {
			if ( confirm('确定重新开始？')){
				gameInt();
				gameBegin();
			}
		}
	}
	
};

function gamerReset () {
	if ( oSpLi.gamerArr.length != 0 ) {
		for ( var i = 0; i < oSpLi.gamerArr.length; i++ ) {
			removeEvent( oSpLi.gamerArr[i], 'click', getClick );

		}
		removeEvent( document.documentElement, 'keydown', getKey );
		oSpLi.gamerArr = [];
	}
		
	if ( oSpLi.index%3 != 0 ) {
		var leftnum = oSpLi.index - 1;
		addEvent( aLi[ leftnum ], 'click', getClick );

		oSpLi.gamerArr.push( aLi[ leftnum ]);
	} else {
		oSpLi.gamerArr.push('');
	}
	
	if ( Math.floor(oSpLi.index/3) != 0 ) {
		var topnum = oSpLi.index - 3;
		addEvent( aLi[ topnum ], 'click', getClick );

		oSpLi.gamerArr.push( aLi[ topnum ]);
	} else {
		oSpLi.gamerArr.push('');
	}
	
	if ( oSpLi.index%3 != 2 ) {
		var rigthnum = oSpLi.index + 1;
		addEvent( aLi[ rigthnum ], 'click', getClick );

		oSpLi.gamerArr.push( aLi[ rigthnum ]);
	} else {
		oSpLi.gamerArr.push('');
	}
	
	if ( Math.floor(oSpLi.index/3) != 2 ) {
		var bottomnum = oSpLi.index + 3;
		addEvent( aLi[ bottomnum ], 'click', getClick );

		oSpLi.gamerArr.push( aLi[ bottomnum ]);
	} else {
		oSpLi.gamerArr.push('');
	}
	
	addEvent( document.documentElement, 'keydown', getKey );
	
	oSpLi.gamerCtr = true;
	
};
	
function getClick () {
	if ( oSpLi.gamerCtr ) {
		oSpLi.gamerCtr = false;
		var b = this.index - oSpLi.index;
		getMove( b );
		
	}
};

function getKey ( ev ) {
	
	ev = ev || window.event;
	
	if ( oSpLi.gamerCtr ) {
		oSpLi.gamerCtr = false;
		
		var b = ''
		
		switch ( ev.keyCode ) {
			case 37:
				if ( oSpLi.gamerArr[2] != 0 ) b = 1;
				break;
			case 38:
				if ( oSpLi.gamerArr[3] != 0 ) b = 3;
				break;
			case 39:
				if ( oSpLi.gamerArr[0] != 0 ) b = -1;
				break;
			case 40:
				if ( oSpLi.gamerArr[1] != 0 ) b = -3;
				break;
		}
		
		if ( b != 0 ) {
			getMove( b );
		} else {
			oSpLi.gamerCtr = true;
		}
		
		
	}
	
	if ( ev.keyCode == 37 || ev.keyCode == 38 || ev.keyCode == 39 || ev.keyCode == 40 ) {
		if ( ev.preventDefault ) {
			ev.preventDefault();
		} else {
			ev.returnValue = false;
		}
	}
	
};

function getMove( num ) {
	var left = parseInt( getStyle( oSpLi, 'left' ));
	var top = parseInt( getStyle( oSpLi, 'top' ));
	var tarLi = aLi[ oSpLi.index + num ];
	
	tarLi.style.left = left + 'px';
	tarLi.style.top = top + 'px';
	
	gameStep.innerHTML = ++gameStep.step;
	
	var time = 2;
	
	clearInterval( oSpLi.timer );
	oSpLi.timer = setInterval ( function () {
		time--;
		if ( time == 1 ) {
			
			if ( tarLi.index > oSpLi.index ) {
				oUl.insertBefore( oSpLi, tarLi );
				oUl.insertBefore( tarLi, aLi[ oSpLi.index ]);
			} else if ( tarLi.index < oSpLi.index ) {
				oUl.insertBefore( tarLi, oSpLi );
				oUl.insertBefore( oSpLi, aLi[ tarLi.index ]);
			}
			
			setIndex( aLi );
		
		} else if ( time == 0 ) {
			
			clearInterval( oSpLi.timer );
			if ( checkPassword()) {
				
				oSpLi.style.transition = '0.1s linear';
				removeClass( 'tBackHidden', oSpLi );
				oUl.startCtr = true;
				gameInt();
				
				if ( confirm( '再来一局' )) {
				
					gameBegin();
				} else {
					gameBeginBtn.innerHTML = '再来一局';
				}
				
			} else {
				gamerReset();
			
			}
		}
		
		
	}, 50);
	
};

function checkPassword() {
	for ( var i = 0; i < aLi.length; i++ ) {
		if ( aLi[i].index != aLi[i].password ) return false;
	}
	return true;
};



for ( var i = 0; i < bgUrl.length; i++ ) {
	bgUrl[i].index = i;
	bgUrl[i].onclick = function () {
		if ( bgUrl.that != this ) {
			if ( bgUrl.that != '' ) removeClass( 'active', bgUrl.that );
			bgUrl.that = this;
			addClass( 'active', bgUrl.that );
		}
	};
}

bgBtn[0].onclick = function () {
	if ( bgUrl.that.index != oUl.urlNum ) {
		oUl.urlNum = bgUrl.that.index;
		if ( aLi[1].password ) {
			for ( var i = 0; i < aLi.length; i++ ) {
				aLi[i].children[0].style.background = 'url(img/' + bgData[ oUl.urlNum ] + ') -' + aLi[i].password%3 * 200 + 'px -' + Math.floor( aLi[i].password/3 ) * 150 + 'px';
			}
			
		} else {
			for ( var i = 0; i < aLi.length; i++ ) {
				aLi[i].children[0].style.background = 'url(img/' + bgData[ oUl.urlNum ] + ') -' + i%3 * 200 + 'px -' + Math.floor(i/3) * 150 + 'px';
			}
		}
		
		bgFin.style.background = 'url(img/mini_' + bgData[ oUl.urlNum ] + ')';
	}
	oUl.startCtr = picChange.startOnOff;
	if ( picChange.moveOnOff ) oSpLi.gamerCtr = picChange.moveOnOff;
	removeClass( 'closeBtn', gameBeginBtn );
	bgWrap.style.display = 'none';
	
};

bgBtn[1].onclick = function () {
	if ( bgUrl.that.index != oUl.urlNum ) {
		removeClass( 'active', bgUrl.that );
		bgUrl.that = bgUrl[oUl.urlNum];
		addClass( 'active', bgUrl.that );
	}
	oUl.startCtr = picChange.startOnOff;
	if ( picChange.moveOnoff ) oSpLi.gamerCtr = picChange.moveOnOff;
	removeClass( 'closeBtn', gameBeginBtn );
	bgWrap.style.display = 'none';
	
};

picChange.onclick = function () {
	if ( oUl.startCtr || oSpLi.gamerCtr ) {
		bgWrap.style.display = 'block';
		addClass( 'closeBtn', gameBeginBtn );
		picChange.startOnOff = oUl.startCtr;
		if ( oSpLi ) picChange.moveOnOff = oSpLi.gamerCtr;
		
		oUl.startCtr = false;
		if ( oSpLi ) picChange.startCtr = false;
	}
};