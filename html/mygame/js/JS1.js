
;function getRandomNum( num ) {
	return Math.floor( num*Math.random() );
};

function getRandomArr ( n, spnum ) {
	var arr = [];
	var tarArr = [];
	var num = 0;
	
	for ( var i = 0; i < n; i++ ) {
		arr.push(i);
		tarArr.push(i);
	}
	
	tarArr.sort( function ( a, b ) {
		return Math.random() - 0.5;
	});
	
	for ( var i = 0; i < n; i++ ) {
		if ( tarArr[i] != spnum ) {
			for ( var j = i + 1; j < n; j++ ) {
				if ( tarArr[j] != spnum && tarArr[j] < tarArr[i] ) num++;
			}
		}
	}
	
	if ( !arrJudge(arr, tarArr) && num%2 != 0 ) {
		tarArr = getRandomArr( n, spnum );
	}
	
	return tarArr;
};

;function arrJudge( arrA, arrB ) {
	if ( arrA.length != arrB.length ) return false;
	for ( var i = 0; i < arrA.length; i++ ) {
		if ( arrA[i] != arrB[i] ) return false;
	}
	return true;
};

;function setIndex ( arrObj ) {
	for ( var i = 0; i < arrObj.length; i++ ) {
		arrObj[i].index = i;
	}
};

;function addClass ( className, elm ) {
	var re = new RegExp( '\\b' + className + '\\b', 'g' );
	if ( !re.test( elm.className )) {
		var reSpace = /\s+/g;
		var reSpaceHL = /^\s|\s&/g
		elm.className += ' ' + className;
		elm.className = elm.className.replace( reSpace, ' ' );
		elm.className = elm.className.replace( reSpaceHL, '' );
	}
};

;function removeClass ( className, elm ) {
	if ( elm.className != null ) {
		var re = new RegExp( '\\b' + className + '\\b', 'g' );
		if ( re.test( elm.className )) {
			var reSpace = /\s+/g;
			var reSpaceHL = /^\s|\s$/g;
			elm.className = elm.className.replace( re, '' );
			elm.className = elm.className.replace( reSpace, ' ' );
			elm.className = elm.className.replace( reSpaceHL, '' );
		}
		
	}
};

;function addEvent( obj, type, fn ){
	if ( obj.addEventListener ) {
		obj.addEventListener( type, fn, false );
	} else {
		if ( !obj['ev'+type+fn]) {
			obj['ev'+type+fn] = function () {
				fn.call(obj);
			};
			obj.attachEvent( 'on'+type, obj['ev'+type+fn]);
		}
	}
};

;function removeEvent( obj, type, fn ) {
	if ( obj.removeEventListener ) {
		obj.removeEventListener( type, fn, false );
	} else if ( obj.detackEvent ) {
		obj.detachEvent( 'on'+type, obj['ev'+type+fn]);
		obj['ev'+type+fn] = null;
	}
};

;function insertAfter( newElement, targetElement ) {
	var parent = targetElement.parentNode;
	if ( parent.lasetChild == targetElement ) {
		parent.appendChild( newElement );
	} else {
		parent.inserBefore( newElement, targetElement.nextSibling );
	}
};

;function addTransitionEnd( obj, fn ) {
	obj.addEventListener( 'webkitTransitionEnd', fn );
	obj.addEventListener( 'mozTransitionEnd', fn );
	obj.addEventListener( 'oTransitionEnd', fn );
	obj.addEventListener( 'transitionend', fn );
};

;function removeTransitionEnd( obj, fn ) {
	obj.removeEventListener( 'webkitTransitionEnd', fn );
	obj.removeEventListener( 'mozTransitionEnd', fn );
	obj.removeEventListener( 'oTransitionEnd', fn );
	obj.removeEventListener( 'transitionend', fn );
};

;function getStyle ( obj, attr ) {
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
};

