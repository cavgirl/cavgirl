pubcoder.projectID = "9706FB5C04CD460A85938C3898CAD20C";
pubcoder.project.id = "9706FB5C04CD460A85938C3898CAD20C";
pubcoder.project.title = "Medieval Resources";
pubcoder.page.id = 858;
pubcoder.page.title = "4";
pubcoder.page.number = 4;
pubcoder.page.alias = "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj1341_onTouchDown_activeActionGroupIndex = -1;
var obj1341_onTouchDown_runningActionsCount = 0;
var obj1341_onTouchDown_loopCount = 0;
var obj1306_onShow_activeActionGroupIndex = -1;
var obj1306_onShow_runningActionsCount = 0;
var obj1306_onShow_loopCount = 0;
var obj1316_onTap_activeActionGroupIndex = -1;
var obj1316_onTap_runningActionsCount = 0;
var obj1316_onTap_loopCount = 0;
var obj1357_onTap_activeActionGroupIndex = -1;
var obj1357_onTap_runningActionsCount = 0;
var obj1357_onTap_loopCount = 0;
var obj1377_onTouchDown_activeActionGroupIndex = -1;
var obj1377_onTouchDown_runningActionsCount = 0;
var obj1377_onTouchDown_loopCount = 0;
var obj1393_onTap_activeActionGroupIndex = -1;
var obj1393_onTap_runningActionsCount = 0;
var obj1393_onTap_loopCount = 0;
var obj1403_onTouchDown_activeActionGroupIndex = -1;
var obj1403_onTouchDown_runningActionsCount = 0;
var obj1403_onTouchDown_loopCount = 0;
var obj1423_onTap_activeActionGroupIndex = -1;
var obj1423_onTap_runningActionsCount = 0;
var obj1423_onTap_loopCount = 0;
var obj1442_onTouchDown_activeActionGroupIndex = -1;
var obj1442_onTouchDown_runningActionsCount = 0;
var obj1442_onTouchDown_loopCount = 0;
var obj1460_onTap_activeActionGroupIndex = -1;
var obj1460_onTap_runningActionsCount = 0;
var obj1460_onTap_loopCount = 0;
var obj2049_onTap_activeActionGroupIndex = -1;
var obj2049_onTap_runningActionsCount = 0;
var obj2049_onTap_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj872_counterValue = 0;
var obj872_counterTargetValue = 2;
var obj872_counterCanExceedTargetValue = false;
 $(window).load(function(){
	window.eventObj = {};
	/*
	 * 
	 * Init SCAnimation
	 * 
	 * 
	 */
	
	/*
	 *
	 *   Init Shake
	 *
	 */
	window.addEventListener('shake', function () {
		
	}, false);
	
	/*
	 *
	 *   Init Masked Images
	 *
	 */
	 
 	/*
	 * 
	 * Init SCPhotogallery
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCQuizMulti
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCDrawer
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWPanZoom
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWMemoryGame
	 * 
	 * 
	 */
	
    
    
	if(! navigator.userAgent.match(/PubCoderHelper/i)) {
		/*
		 *
	 	 *   Action Groups
	 	 *
	 	 */
		
obj1341_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1341_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1341").trigger("obj1341_onTouchDown_ended");
		
		return;
	}
	window.obj1341_onTouchDown_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1341 
hide_1344();
function hide_1344() {
	var element = "#obj1341";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1341_onTouchDown_runningActionsCount = obj1341_onTouchDown_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1341_onTouchDown_runningActionsCount = window.obj1341_onTouchDown_runningActionsCount - 1;
if (window.obj1341_onTouchDown_runningActionsCount == 0) {
	obj1341_onTouchDown_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1344(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1341_onTouchDown_runningActionsCount = window.obj1341_onTouchDown_runningActionsCount - 1;
if (window.obj1341_onTouchDown_runningActionsCount == 0) {
	obj1341_onTouchDown_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1323 
hide_1345();
function hide_1345() {
	var element = "#obj1323";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1341_onTouchDown_runningActionsCount = obj1341_onTouchDown_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1341_onTouchDown_runningActionsCount = window.obj1341_onTouchDown_runningActionsCount - 1;
if (window.obj1341_onTouchDown_runningActionsCount == 0) {
	obj1341_onTouchDown_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1345(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1341_onTouchDown_runningActionsCount = window.obj1341_onTouchDown_runningActionsCount - 1;
if (window.obj1341_onTouchDown_runningActionsCount == 0) {
	obj1341_onTouchDown_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1329 
hide_1346();
function hide_1346() {
	var element = "#obj1329";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1341_onTouchDown_runningActionsCount = obj1341_onTouchDown_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1341_onTouchDown_runningActionsCount = window.obj1341_onTouchDown_runningActionsCount - 1;
if (window.obj1341_onTouchDown_runningActionsCount == 0) {
	obj1341_onTouchDown_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1346(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1341_onTouchDown_runningActionsCount = window.obj1341_onTouchDown_runningActionsCount - 1;
if (window.obj1341_onTouchDown_runningActionsCount == 0) {
	obj1341_onTouchDown_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj1341_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1341_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1341").trigger("obj1341_onTouchDown_ended");
		
		return;
	}
	window.obj1341_onTouchDown_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1355 
show_1369();
function show_1369() {
	var element = "#obj1355";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1341_onTouchDown_runningActionsCount = obj1341_onTouchDown_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1341_onTouchDown_runningActionsCount = window.obj1341_onTouchDown_runningActionsCount - 1;
if (window.obj1341_onTouchDown_runningActionsCount == 0) {
	obj1341_onTouchDown_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1341_onTouchDown_runningActionsCount = window.obj1341_onTouchDown_runningActionsCount - 1;
if (window.obj1341_onTouchDown_runningActionsCount == 0) {
	obj1341_onTouchDown_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1341_onTouchDown_runningActionsCount = window.obj1341_onTouchDown_runningActionsCount - 1;
if (window.obj1341_onTouchDown_runningActionsCount == 0) {
	obj1341_onTouchDown_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj1352 
show_1368();
function show_1368() {
	var element = "#obj1352";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1341_onTouchDown_runningActionsCount = obj1341_onTouchDown_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1341_onTouchDown_runningActionsCount = window.obj1341_onTouchDown_runningActionsCount - 1;
if (window.obj1341_onTouchDown_runningActionsCount == 0) {
	obj1341_onTouchDown_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1341_onTouchDown_runningActionsCount = window.obj1341_onTouchDown_runningActionsCount - 1;
if (window.obj1341_onTouchDown_runningActionsCount == 0) {
	obj1341_onTouchDown_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1341_onTouchDown_runningActionsCount = window.obj1341_onTouchDown_runningActionsCount - 1;
if (window.obj1341_onTouchDown_runningActionsCount == 0) {
	obj1341_onTouchDown_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj1357 
show_1370();
function show_1370() {
	var element = "#obj1357";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1341_onTouchDown_runningActionsCount = obj1341_onTouchDown_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1341_onTouchDown_runningActionsCount = window.obj1341_onTouchDown_runningActionsCount - 1;
if (window.obj1341_onTouchDown_runningActionsCount == 0) {
	obj1341_onTouchDown_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1341_onTouchDown_runningActionsCount = window.obj1341_onTouchDown_runningActionsCount - 1;
if (window.obj1341_onTouchDown_runningActionsCount == 0) {
	obj1341_onTouchDown_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1341_onTouchDown_runningActionsCount = window.obj1341_onTouchDown_runningActionsCount - 1;
if (window.obj1341_onTouchDown_runningActionsCount == 0) {
	obj1341_onTouchDown_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1341_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1341_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1341").trigger("obj1341_onTouchDown_ended");
		
		return;
	}
	window.obj1341_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj1306_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1306_onShow_activeActionGroupIndex = -1;
		$("#obj1306").trigger("obj1306_onShow_ended");
		
		return;
	}
	window.obj1306_onShow_activeActionGroupIndex = 0;
	








//	action: wait
wait_1309();
function wait_1309() {
	window.obj1306_onShow_runningActionsCount = obj1306_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj1306_onShow_runningActionsCount = window.obj1306_onShow_runningActionsCount - 1;
if (window.obj1306_onShow_runningActionsCount == 0) {
	obj1306_onShow_actionGroup1();
}
	}, 5000);
}












};
obj1306_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1306_onShow_activeActionGroupIndex = -1;
		$("#obj1306").trigger("obj1306_onShow_ended");
		
		return;
	}
	window.obj1306_onShow_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj1306 
hide_1310();
function hide_1310() {
	var element = "#obj1306";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1306_onShow_runningActionsCount = obj1306_onShow_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 10000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1306_onShow_runningActionsCount = window.obj1306_onShow_runningActionsCount - 1;
if (window.obj1306_onShow_runningActionsCount == 0) {
	obj1306_onShow_actionGroup2();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1310(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1306_onShow_runningActionsCount = window.obj1306_onShow_runningActionsCount - 1;
if (window.obj1306_onShow_runningActionsCount == 0) {
	obj1306_onShow_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj1306_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1306_onShow_activeActionGroupIndex = -1;
		$("#obj1306").trigger("obj1306_onShow_ended");
		
		return;
	}
	window.obj1306_onShow_activeActionGroupIndex = 2;
	





















};
obj1316_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1316_onTap_activeActionGroupIndex = -1;
		$("#obj1316").trigger("obj1316_onTap_ended");
		
		return;
	}
	window.obj1316_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1316 
hide_1318();
function hide_1318() {
	var element = "#obj1316";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1316_onTap_runningActionsCount = obj1316_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1316_onTap_runningActionsCount = window.obj1316_onTap_runningActionsCount - 1;
if (window.obj1316_onTap_runningActionsCount == 0) {
	obj1316_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1318(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1316_onTap_runningActionsCount = window.obj1316_onTap_runningActionsCount - 1;
if (window.obj1316_onTap_runningActionsCount == 0) {
	obj1316_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1306 
hide_1319();
function hide_1319() {
	var element = "#obj1306";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1316_onTap_runningActionsCount = obj1316_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1316_onTap_runningActionsCount = window.obj1316_onTap_runningActionsCount - 1;
if (window.obj1316_onTap_runningActionsCount == 0) {
	obj1316_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1319(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1316_onTap_runningActionsCount = window.obj1316_onTap_runningActionsCount - 1;
if (window.obj1316_onTap_runningActionsCount == 0) {
	obj1316_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj1341 
show_1387();
function show_1387() {
	var element = "#obj1341";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1316_onTap_runningActionsCount = obj1316_onTap_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1316_onTap_runningActionsCount = window.obj1316_onTap_runningActionsCount - 1;
if (window.obj1316_onTap_runningActionsCount == 0) {
	obj1316_onTap_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1316_onTap_runningActionsCount = window.obj1316_onTap_runningActionsCount - 1;
if (window.obj1316_onTap_runningActionsCount == 0) {
	obj1316_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1316_onTap_runningActionsCount = window.obj1316_onTap_runningActionsCount - 1;
if (window.obj1316_onTap_runningActionsCount == 0) {
	obj1316_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: move
//	target: obj866 
move_1321();
function move_1321() {
	window.obj1316_onTap_runningActionsCount = obj1316_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj866");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=6";
	var moveY = "+=-457";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj1316_onTap_runningActionsCount = window.obj1316_onTap_runningActionsCount - 1;
if (window.obj1316_onTap_runningActionsCount == 0) {
	obj1316_onTap_actionGroup1();
}
		}, 1);
	});
}







//	action: scale
//	target: obj866 
scale_1322();
function scale_1322() {
	window.obj1316_onTap_runningActionsCount = obj1316_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj866";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj866';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '3';
	var scaleYValue = '3';
	var effectDuration = '0';
	var effectEasing = 'ease';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_1322_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1322_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1322_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1322_completed() {
	setTimeout(function() {
		window.obj1316_onTap_runningActionsCount = window.obj1316_onTap_runningActionsCount - 1;
if (window.obj1316_onTap_runningActionsCount == 0) {
	obj1316_onTap_actionGroup1();
}
	}, 1);
}






//	action: Run JavaScript
runjs_1320();
function runjs_1320() {
	window.obj1316_onTap_runningActionsCount = obj1316_onTap_runningActionsCount + 1;

	$("#obj870").css("background-color", "#E2CA5F");
	setTimeout(function() {
		window.obj1316_onTap_runningActionsCount = window.obj1316_onTap_runningActionsCount - 1;
if (window.obj1316_onTap_runningActionsCount == 0) {
	obj1316_onTap_actionGroup1();
}
	}, 1);
}






};
obj1316_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1316_onTap_activeActionGroupIndex = -1;
		$("#obj1316").trigger("obj1316_onTap_ended");
		
		return;
	}
	window.obj1316_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1323 
show_1331();
function show_1331() {
	var element = "#obj1323";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1316_onTap_runningActionsCount = obj1316_onTap_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1316_onTap_runningActionsCount = window.obj1316_onTap_runningActionsCount - 1;
if (window.obj1316_onTap_runningActionsCount == 0) {
	obj1316_onTap_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1316_onTap_runningActionsCount = window.obj1316_onTap_runningActionsCount - 1;
if (window.obj1316_onTap_runningActionsCount == 0) {
	obj1316_onTap_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1316_onTap_runningActionsCount = window.obj1316_onTap_runningActionsCount - 1;
if (window.obj1316_onTap_runningActionsCount == 0) {
	obj1316_onTap_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj1329 
show_1332();
function show_1332() {
	var element = "#obj1329";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1316_onTap_runningActionsCount = obj1316_onTap_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1316_onTap_runningActionsCount = window.obj1316_onTap_runningActionsCount - 1;
if (window.obj1316_onTap_runningActionsCount == 0) {
	obj1316_onTap_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1316_onTap_runningActionsCount = window.obj1316_onTap_runningActionsCount - 1;
if (window.obj1316_onTap_runningActionsCount == 0) {
	obj1316_onTap_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1316_onTap_runningActionsCount = window.obj1316_onTap_runningActionsCount - 1;
if (window.obj1316_onTap_runningActionsCount == 0) {
	obj1316_onTap_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1316_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1316_onTap_activeActionGroupIndex = -1;
		$("#obj1316").trigger("obj1316_onTap_ended");
		
		return;
	}
	window.obj1316_onTap_activeActionGroupIndex = 2;
	





















};
obj1357_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1357_onTap_activeActionGroupIndex = -1;
		$("#obj1357").trigger("obj1357_onTap_ended");
		
		return;
	}
	window.obj1357_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1357 
hide_1359();
function hide_1359() {
	var element = "#obj1357";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1357_onTap_runningActionsCount = obj1357_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1357_onTap_runningActionsCount = window.obj1357_onTap_runningActionsCount - 1;
if (window.obj1357_onTap_runningActionsCount == 0) {
	obj1357_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1359(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1357_onTap_runningActionsCount = window.obj1357_onTap_runningActionsCount - 1;
if (window.obj1357_onTap_runningActionsCount == 0) {
	obj1357_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1352 
hide_1360();
function hide_1360() {
	var element = "#obj1352";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1357_onTap_runningActionsCount = obj1357_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1357_onTap_runningActionsCount = window.obj1357_onTap_runningActionsCount - 1;
if (window.obj1357_onTap_runningActionsCount == 0) {
	obj1357_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1360(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1357_onTap_runningActionsCount = window.obj1357_onTap_runningActionsCount - 1;
if (window.obj1357_onTap_runningActionsCount == 0) {
	obj1357_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj1377 
show_1386();
function show_1386() {
	var element = "#obj1377";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1357_onTap_runningActionsCount = obj1357_onTap_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1357_onTap_runningActionsCount = window.obj1357_onTap_runningActionsCount - 1;
if (window.obj1357_onTap_runningActionsCount == 0) {
	obj1357_onTap_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1357_onTap_runningActionsCount = window.obj1357_onTap_runningActionsCount - 1;
if (window.obj1357_onTap_runningActionsCount == 0) {
	obj1357_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1357_onTap_runningActionsCount = window.obj1357_onTap_runningActionsCount - 1;
if (window.obj1357_onTap_runningActionsCount == 0) {
	obj1357_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: move
//	target: obj866 
move_1366();
function move_1366() {
	window.obj1357_onTap_runningActionsCount = obj1357_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj866");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=6";
	var moveY = "+=171";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj1357_onTap_runningActionsCount = window.obj1357_onTap_runningActionsCount - 1;
if (window.obj1357_onTap_runningActionsCount == 0) {
	obj1357_onTap_actionGroup1();
}
		}, 1);
	});
}







//	action: scale
//	target: obj866 
scale_1367();
function scale_1367() {
	window.obj1357_onTap_runningActionsCount = obj1357_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj866";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj866';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '3';
	var scaleYValue = '3';
	var effectDuration = '0';
	var effectEasing = 'ease';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_1367_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1367_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1367_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1367_completed() {
	setTimeout(function() {
		window.obj1357_onTap_runningActionsCount = window.obj1357_onTap_runningActionsCount - 1;
if (window.obj1357_onTap_runningActionsCount == 0) {
	obj1357_onTap_actionGroup1();
}
	}, 1);
}






//	action: Run JavaScript
runjs_1361();
function runjs_1361() {
	window.obj1357_onTap_runningActionsCount = obj1357_onTap_runningActionsCount + 1;

	$("#obj870").css("background-color", "#373071");
	setTimeout(function() {
		window.obj1357_onTap_runningActionsCount = window.obj1357_onTap_runningActionsCount - 1;
if (window.obj1357_onTap_runningActionsCount == 0) {
	obj1357_onTap_actionGroup1();
}
	}, 1);
}






};
obj1357_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1357_onTap_activeActionGroupIndex = -1;
		$("#obj1357").trigger("obj1357_onTap_ended");
		
		return;
	}
	window.obj1357_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1371 
show_1364();
function show_1364() {
	var element = "#obj1371";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1357_onTap_runningActionsCount = obj1357_onTap_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1357_onTap_runningActionsCount = window.obj1357_onTap_runningActionsCount - 1;
if (window.obj1357_onTap_runningActionsCount == 0) {
	obj1357_onTap_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1357_onTap_runningActionsCount = window.obj1357_onTap_runningActionsCount - 1;
if (window.obj1357_onTap_runningActionsCount == 0) {
	obj1357_onTap_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1357_onTap_runningActionsCount = window.obj1357_onTap_runningActionsCount - 1;
if (window.obj1357_onTap_runningActionsCount == 0) {
	obj1357_onTap_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj1375 
show_1365();
function show_1365() {
	var element = "#obj1375";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1357_onTap_runningActionsCount = obj1357_onTap_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1357_onTap_runningActionsCount = window.obj1357_onTap_runningActionsCount - 1;
if (window.obj1357_onTap_runningActionsCount == 0) {
	obj1357_onTap_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1357_onTap_runningActionsCount = window.obj1357_onTap_runningActionsCount - 1;
if (window.obj1357_onTap_runningActionsCount == 0) {
	obj1357_onTap_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1357_onTap_runningActionsCount = window.obj1357_onTap_runningActionsCount - 1;
if (window.obj1357_onTap_runningActionsCount == 0) {
	obj1357_onTap_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1357_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1357_onTap_activeActionGroupIndex = -1;
		$("#obj1357").trigger("obj1357_onTap_ended");
		
		return;
	}
	window.obj1357_onTap_activeActionGroupIndex = 2;
	





















};
obj1377_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1377_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1377").trigger("obj1377_onTouchDown_ended");
		
		return;
	}
	window.obj1377_onTouchDown_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1371 
hide_1381();
function hide_1381() {
	var element = "#obj1371";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1377_onTouchDown_runningActionsCount = obj1377_onTouchDown_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1377_onTouchDown_runningActionsCount = window.obj1377_onTouchDown_runningActionsCount - 1;
if (window.obj1377_onTouchDown_runningActionsCount == 0) {
	obj1377_onTouchDown_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1381(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1377_onTouchDown_runningActionsCount = window.obj1377_onTouchDown_runningActionsCount - 1;
if (window.obj1377_onTouchDown_runningActionsCount == 0) {
	obj1377_onTouchDown_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1375 
hide_1382();
function hide_1382() {
	var element = "#obj1375";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1377_onTouchDown_runningActionsCount = obj1377_onTouchDown_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1377_onTouchDown_runningActionsCount = window.obj1377_onTouchDown_runningActionsCount - 1;
if (window.obj1377_onTouchDown_runningActionsCount == 0) {
	obj1377_onTouchDown_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1382(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1377_onTouchDown_runningActionsCount = window.obj1377_onTouchDown_runningActionsCount - 1;
if (window.obj1377_onTouchDown_runningActionsCount == 0) {
	obj1377_onTouchDown_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj1377_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1377_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1377").trigger("obj1377_onTouchDown_ended");
		
		return;
	}
	window.obj1377_onTouchDown_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj1377 
hide_1380();
function hide_1380() {
	var element = "#obj1377";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1377_onTouchDown_runningActionsCount = obj1377_onTouchDown_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1377_onTouchDown_runningActionsCount = window.obj1377_onTouchDown_runningActionsCount - 1;
if (window.obj1377_onTouchDown_runningActionsCount == 0) {
	obj1377_onTouchDown_actionGroup2();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1380(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1377_onTouchDown_runningActionsCount = window.obj1377_onTouchDown_runningActionsCount - 1;
if (window.obj1377_onTouchDown_runningActionsCount == 0) {
	obj1377_onTouchDown_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj1388 
show_1383();
function show_1383() {
	var element = "#obj1388";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1377_onTouchDown_runningActionsCount = obj1377_onTouchDown_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1377_onTouchDown_runningActionsCount = window.obj1377_onTouchDown_runningActionsCount - 1;
if (window.obj1377_onTouchDown_runningActionsCount == 0) {
	obj1377_onTouchDown_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1377_onTouchDown_runningActionsCount = window.obj1377_onTouchDown_runningActionsCount - 1;
if (window.obj1377_onTouchDown_runningActionsCount == 0) {
	obj1377_onTouchDown_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1377_onTouchDown_runningActionsCount = window.obj1377_onTouchDown_runningActionsCount - 1;
if (window.obj1377_onTouchDown_runningActionsCount == 0) {
	obj1377_onTouchDown_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj1390 
show_1384();
function show_1384() {
	var element = "#obj1390";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1377_onTouchDown_runningActionsCount = obj1377_onTouchDown_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1377_onTouchDown_runningActionsCount = window.obj1377_onTouchDown_runningActionsCount - 1;
if (window.obj1377_onTouchDown_runningActionsCount == 0) {
	obj1377_onTouchDown_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1377_onTouchDown_runningActionsCount = window.obj1377_onTouchDown_runningActionsCount - 1;
if (window.obj1377_onTouchDown_runningActionsCount == 0) {
	obj1377_onTouchDown_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1377_onTouchDown_runningActionsCount = window.obj1377_onTouchDown_runningActionsCount - 1;
if (window.obj1377_onTouchDown_runningActionsCount == 0) {
	obj1377_onTouchDown_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj1393 
show_1385();
function show_1385() {
	var element = "#obj1393";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1377_onTouchDown_runningActionsCount = obj1377_onTouchDown_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1377_onTouchDown_runningActionsCount = window.obj1377_onTouchDown_runningActionsCount - 1;
if (window.obj1377_onTouchDown_runningActionsCount == 0) {
	obj1377_onTouchDown_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1377_onTouchDown_runningActionsCount = window.obj1377_onTouchDown_runningActionsCount - 1;
if (window.obj1377_onTouchDown_runningActionsCount == 0) {
	obj1377_onTouchDown_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1377_onTouchDown_runningActionsCount = window.obj1377_onTouchDown_runningActionsCount - 1;
if (window.obj1377_onTouchDown_runningActionsCount == 0) {
	obj1377_onTouchDown_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1377_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1377_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1377").trigger("obj1377_onTouchDown_ended");
		
		return;
	}
	window.obj1377_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj1393_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1393_onTap_activeActionGroupIndex = -1;
		$("#obj1393").trigger("obj1393_onTap_ended");
		
		return;
	}
	window.obj1393_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1393 
hide_1396();
function hide_1396() {
	var element = "#obj1393";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1393_onTap_runningActionsCount = obj1393_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1393_onTap_runningActionsCount = window.obj1393_onTap_runningActionsCount - 1;
if (window.obj1393_onTap_runningActionsCount == 0) {
	obj1393_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1396(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1393_onTap_runningActionsCount = window.obj1393_onTap_runningActionsCount - 1;
if (window.obj1393_onTap_runningActionsCount == 0) {
	obj1393_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1390 
hide_1397();
function hide_1397() {
	var element = "#obj1390";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1393_onTap_runningActionsCount = obj1393_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1393_onTap_runningActionsCount = window.obj1393_onTap_runningActionsCount - 1;
if (window.obj1393_onTap_runningActionsCount == 0) {
	obj1393_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1397(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1393_onTap_runningActionsCount = window.obj1393_onTap_runningActionsCount - 1;
if (window.obj1393_onTap_runningActionsCount == 0) {
	obj1393_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj1403 
show_1395();
function show_1395() {
	var element = "#obj1403";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1393_onTap_runningActionsCount = obj1393_onTap_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1393_onTap_runningActionsCount = window.obj1393_onTap_runningActionsCount - 1;
if (window.obj1393_onTap_runningActionsCount == 0) {
	obj1393_onTap_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1393_onTap_runningActionsCount = window.obj1393_onTap_runningActionsCount - 1;
if (window.obj1393_onTap_runningActionsCount == 0) {
	obj1393_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1393_onTap_runningActionsCount = window.obj1393_onTap_runningActionsCount - 1;
if (window.obj1393_onTap_runningActionsCount == 0) {
	obj1393_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: move
//	target: obj866 
move_1399();
function move_1399() {
	window.obj1393_onTap_runningActionsCount = obj1393_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj866");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=6";
	var moveY = "+=342";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj1393_onTap_runningActionsCount = window.obj1393_onTap_runningActionsCount - 1;
if (window.obj1393_onTap_runningActionsCount == 0) {
	obj1393_onTap_actionGroup1();
}
		}, 1);
	});
}







//	action: scale
//	target: obj866 
scale_1400();
function scale_1400() {
	window.obj1393_onTap_runningActionsCount = obj1393_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj866";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj866';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '3';
	var scaleYValue = '3';
	var effectDuration = '0';
	var effectEasing = 'ease';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_1400_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1400_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1400_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1400_completed() {
	setTimeout(function() {
		window.obj1393_onTap_runningActionsCount = window.obj1393_onTap_runningActionsCount - 1;
if (window.obj1393_onTap_runningActionsCount == 0) {
	obj1393_onTap_actionGroup1();
}
	}, 1);
}






//	action: Run JavaScript
runjs_1398();
function runjs_1398() {
	window.obj1393_onTap_runningActionsCount = obj1393_onTap_runningActionsCount + 1;

	$("#obj870").css("background-color", "#A46A61");
	setTimeout(function() {
		window.obj1393_onTap_runningActionsCount = window.obj1393_onTap_runningActionsCount - 1;
if (window.obj1393_onTap_runningActionsCount == 0) {
	obj1393_onTap_actionGroup1();
}
	}, 1);
}






};
obj1393_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1393_onTap_activeActionGroupIndex = -1;
		$("#obj1393").trigger("obj1393_onTap_ended");
		
		return;
	}
	window.obj1393_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1412 
show_1401();
function show_1401() {
	var element = "#obj1412";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1393_onTap_runningActionsCount = obj1393_onTap_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1393_onTap_runningActionsCount = window.obj1393_onTap_runningActionsCount - 1;
if (window.obj1393_onTap_runningActionsCount == 0) {
	obj1393_onTap_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1393_onTap_runningActionsCount = window.obj1393_onTap_runningActionsCount - 1;
if (window.obj1393_onTap_runningActionsCount == 0) {
	obj1393_onTap_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1393_onTap_runningActionsCount = window.obj1393_onTap_runningActionsCount - 1;
if (window.obj1393_onTap_runningActionsCount == 0) {
	obj1393_onTap_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj1416 
show_1402();
function show_1402() {
	var element = "#obj1416";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1393_onTap_runningActionsCount = obj1393_onTap_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1393_onTap_runningActionsCount = window.obj1393_onTap_runningActionsCount - 1;
if (window.obj1393_onTap_runningActionsCount == 0) {
	obj1393_onTap_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1393_onTap_runningActionsCount = window.obj1393_onTap_runningActionsCount - 1;
if (window.obj1393_onTap_runningActionsCount == 0) {
	obj1393_onTap_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1393_onTap_runningActionsCount = window.obj1393_onTap_runningActionsCount - 1;
if (window.obj1393_onTap_runningActionsCount == 0) {
	obj1393_onTap_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1393_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1393_onTap_activeActionGroupIndex = -1;
		$("#obj1393").trigger("obj1393_onTap_ended");
		
		return;
	}
	window.obj1393_onTap_activeActionGroupIndex = 2;
	





















};
obj1403_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1403_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1403").trigger("obj1403_onTouchDown_ended");
		
		return;
	}
	window.obj1403_onTouchDown_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1412 
hide_1406();
function hide_1406() {
	var element = "#obj1412";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1403_onTouchDown_runningActionsCount = obj1403_onTouchDown_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1403_onTouchDown_runningActionsCount = window.obj1403_onTouchDown_runningActionsCount - 1;
if (window.obj1403_onTouchDown_runningActionsCount == 0) {
	obj1403_onTouchDown_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1406(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1403_onTouchDown_runningActionsCount = window.obj1403_onTouchDown_runningActionsCount - 1;
if (window.obj1403_onTouchDown_runningActionsCount == 0) {
	obj1403_onTouchDown_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1416 
hide_1407();
function hide_1407() {
	var element = "#obj1416";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1403_onTouchDown_runningActionsCount = obj1403_onTouchDown_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1403_onTouchDown_runningActionsCount = window.obj1403_onTouchDown_runningActionsCount - 1;
if (window.obj1403_onTouchDown_runningActionsCount == 0) {
	obj1403_onTouchDown_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1407(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1403_onTouchDown_runningActionsCount = window.obj1403_onTouchDown_runningActionsCount - 1;
if (window.obj1403_onTouchDown_runningActionsCount == 0) {
	obj1403_onTouchDown_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj1403_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1403_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1403").trigger("obj1403_onTouchDown_ended");
		
		return;
	}
	window.obj1403_onTouchDown_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj1403 
hide_1411();
function hide_1411() {
	var element = "#obj1403";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1403_onTouchDown_runningActionsCount = obj1403_onTouchDown_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1403_onTouchDown_runningActionsCount = window.obj1403_onTouchDown_runningActionsCount - 1;
if (window.obj1403_onTouchDown_runningActionsCount == 0) {
	obj1403_onTouchDown_actionGroup2();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1411(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1403_onTouchDown_runningActionsCount = window.obj1403_onTouchDown_runningActionsCount - 1;
if (window.obj1403_onTouchDown_runningActionsCount == 0) {
	obj1403_onTouchDown_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj1418 
show_1408();
function show_1408() {
	var element = "#obj1418";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1403_onTouchDown_runningActionsCount = obj1403_onTouchDown_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1403_onTouchDown_runningActionsCount = window.obj1403_onTouchDown_runningActionsCount - 1;
if (window.obj1403_onTouchDown_runningActionsCount == 0) {
	obj1403_onTouchDown_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1403_onTouchDown_runningActionsCount = window.obj1403_onTouchDown_runningActionsCount - 1;
if (window.obj1403_onTouchDown_runningActionsCount == 0) {
	obj1403_onTouchDown_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1403_onTouchDown_runningActionsCount = window.obj1403_onTouchDown_runningActionsCount - 1;
if (window.obj1403_onTouchDown_runningActionsCount == 0) {
	obj1403_onTouchDown_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj1420 
show_1409();
function show_1409() {
	var element = "#obj1420";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1403_onTouchDown_runningActionsCount = obj1403_onTouchDown_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1403_onTouchDown_runningActionsCount = window.obj1403_onTouchDown_runningActionsCount - 1;
if (window.obj1403_onTouchDown_runningActionsCount == 0) {
	obj1403_onTouchDown_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1403_onTouchDown_runningActionsCount = window.obj1403_onTouchDown_runningActionsCount - 1;
if (window.obj1403_onTouchDown_runningActionsCount == 0) {
	obj1403_onTouchDown_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1403_onTouchDown_runningActionsCount = window.obj1403_onTouchDown_runningActionsCount - 1;
if (window.obj1403_onTouchDown_runningActionsCount == 0) {
	obj1403_onTouchDown_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj1423 
show_1410();
function show_1410() {
	var element = "#obj1423";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1403_onTouchDown_runningActionsCount = obj1403_onTouchDown_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1403_onTouchDown_runningActionsCount = window.obj1403_onTouchDown_runningActionsCount - 1;
if (window.obj1403_onTouchDown_runningActionsCount == 0) {
	obj1403_onTouchDown_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1403_onTouchDown_runningActionsCount = window.obj1403_onTouchDown_runningActionsCount - 1;
if (window.obj1403_onTouchDown_runningActionsCount == 0) {
	obj1403_onTouchDown_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1403_onTouchDown_runningActionsCount = window.obj1403_onTouchDown_runningActionsCount - 1;
if (window.obj1403_onTouchDown_runningActionsCount == 0) {
	obj1403_onTouchDown_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1403_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1403_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1403").trigger("obj1403_onTouchDown_ended");
		
		return;
	}
	window.obj1403_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj1423_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1423_onTap_activeActionGroupIndex = -1;
		$("#obj1423").trigger("obj1423_onTap_ended");
		
		return;
	}
	window.obj1423_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1423 
hide_1426();
function hide_1426() {
	var element = "#obj1423";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1423_onTap_runningActionsCount = obj1423_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1423_onTap_runningActionsCount = window.obj1423_onTap_runningActionsCount - 1;
if (window.obj1423_onTap_runningActionsCount == 0) {
	obj1423_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1426(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1423_onTap_runningActionsCount = window.obj1423_onTap_runningActionsCount - 1;
if (window.obj1423_onTap_runningActionsCount == 0) {
	obj1423_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1420 
hide_1427();
function hide_1427() {
	var element = "#obj1420";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1423_onTap_runningActionsCount = obj1423_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1423_onTap_runningActionsCount = window.obj1423_onTap_runningActionsCount - 1;
if (window.obj1423_onTap_runningActionsCount == 0) {
	obj1423_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1427(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1423_onTap_runningActionsCount = window.obj1423_onTap_runningActionsCount - 1;
if (window.obj1423_onTap_runningActionsCount == 0) {
	obj1423_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}

//	action: move
//	target: obj866 
move_1429();
function move_1429() {
	window.obj1423_onTap_runningActionsCount = obj1423_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj866");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=332";
	var moveY = "+=490";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj1423_onTap_runningActionsCount = window.obj1423_onTap_runningActionsCount - 1;
if (window.obj1423_onTap_runningActionsCount == 0) {
	obj1423_onTap_actionGroup1();
}
		}, 1);
	});
}







//	action: scale
//	target: obj866 
scale_1430();
function scale_1430() {
	window.obj1423_onTap_runningActionsCount = obj1423_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj866";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj866';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '3';
	var scaleYValue = '3';
	var effectDuration = '0';
	var effectEasing = 'ease';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_1430_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1430_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1430_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1430_completed() {
	setTimeout(function() {
		window.obj1423_onTap_runningActionsCount = window.obj1423_onTap_runningActionsCount - 1;
if (window.obj1423_onTap_runningActionsCount == 0) {
	obj1423_onTap_actionGroup1();
}
	}, 1);
}






//	action: Run JavaScript
runjs_1428();
function runjs_1428() {
	window.obj1423_onTap_runningActionsCount = obj1423_onTap_runningActionsCount + 1;

	$("#obj870").css("background-color", "#DCC1B7");
	setTimeout(function() {
		window.obj1423_onTap_runningActionsCount = window.obj1423_onTap_runningActionsCount - 1;
if (window.obj1423_onTap_runningActionsCount == 0) {
	obj1423_onTap_actionGroup1();
}
	}, 1);
}






};
obj1423_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1423_onTap_activeActionGroupIndex = -1;
		$("#obj1423").trigger("obj1423_onTap_ended");
		
		return;
	}
	window.obj1423_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1442 
show_1452();
function show_1452() {
	var element = "#obj1442";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1423_onTap_runningActionsCount = obj1423_onTap_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1423_onTap_runningActionsCount = window.obj1423_onTap_runningActionsCount - 1;
if (window.obj1423_onTap_runningActionsCount == 0) {
	obj1423_onTap_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1423_onTap_runningActionsCount = window.obj1423_onTap_runningActionsCount - 1;
if (window.obj1423_onTap_runningActionsCount == 0) {
	obj1423_onTap_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1423_onTap_runningActionsCount = window.obj1423_onTap_runningActionsCount - 1;
if (window.obj1423_onTap_runningActionsCount == 0) {
	obj1423_onTap_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj1433 
show_1431();
function show_1431() {
	var element = "#obj1433";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1423_onTap_runningActionsCount = obj1423_onTap_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1423_onTap_runningActionsCount = window.obj1423_onTap_runningActionsCount - 1;
if (window.obj1423_onTap_runningActionsCount == 0) {
	obj1423_onTap_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1423_onTap_runningActionsCount = window.obj1423_onTap_runningActionsCount - 1;
if (window.obj1423_onTap_runningActionsCount == 0) {
	obj1423_onTap_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1423_onTap_runningActionsCount = window.obj1423_onTap_runningActionsCount - 1;
if (window.obj1423_onTap_runningActionsCount == 0) {
	obj1423_onTap_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj1440 
show_1432();
function show_1432() {
	var element = "#obj1440";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1423_onTap_runningActionsCount = obj1423_onTap_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1423_onTap_runningActionsCount = window.obj1423_onTap_runningActionsCount - 1;
if (window.obj1423_onTap_runningActionsCount == 0) {
	obj1423_onTap_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1423_onTap_runningActionsCount = window.obj1423_onTap_runningActionsCount - 1;
if (window.obj1423_onTap_runningActionsCount == 0) {
	obj1423_onTap_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1423_onTap_runningActionsCount = window.obj1423_onTap_runningActionsCount - 1;
if (window.obj1423_onTap_runningActionsCount == 0) {
	obj1423_onTap_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1423_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1423_onTap_activeActionGroupIndex = -1;
		$("#obj1423").trigger("obj1423_onTap_ended");
		
		return;
	}
	window.obj1423_onTap_activeActionGroupIndex = 2;
	





















};
obj1442_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1442_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1442").trigger("obj1442_onTouchDown_ended");
		
		return;
	}
	window.obj1442_onTouchDown_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1433 
hide_1445();
function hide_1445() {
	var element = "#obj1433";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1442_onTouchDown_runningActionsCount = obj1442_onTouchDown_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1442_onTouchDown_runningActionsCount = window.obj1442_onTouchDown_runningActionsCount - 1;
if (window.obj1442_onTouchDown_runningActionsCount == 0) {
	obj1442_onTouchDown_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1445(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1442_onTouchDown_runningActionsCount = window.obj1442_onTouchDown_runningActionsCount - 1;
if (window.obj1442_onTouchDown_runningActionsCount == 0) {
	obj1442_onTouchDown_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1440 
hide_1446();
function hide_1446() {
	var element = "#obj1440";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1442_onTouchDown_runningActionsCount = obj1442_onTouchDown_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1442_onTouchDown_runningActionsCount = window.obj1442_onTouchDown_runningActionsCount - 1;
if (window.obj1442_onTouchDown_runningActionsCount == 0) {
	obj1442_onTouchDown_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1446(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1442_onTouchDown_runningActionsCount = window.obj1442_onTouchDown_runningActionsCount - 1;
if (window.obj1442_onTouchDown_runningActionsCount == 0) {
	obj1442_onTouchDown_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj1442_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1442_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1442").trigger("obj1442_onTouchDown_ended");
		
		return;
	}
	window.obj1442_onTouchDown_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj1442 
hide_1450();
function hide_1450() {
	var element = "#obj1442";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1442_onTouchDown_runningActionsCount = obj1442_onTouchDown_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1442_onTouchDown_runningActionsCount = window.obj1442_onTouchDown_runningActionsCount - 1;
if (window.obj1442_onTouchDown_runningActionsCount == 0) {
	obj1442_onTouchDown_actionGroup2();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1450(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1442_onTouchDown_runningActionsCount = window.obj1442_onTouchDown_runningActionsCount - 1;
if (window.obj1442_onTouchDown_runningActionsCount == 0) {
	obj1442_onTouchDown_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj1453 
show_1447();
function show_1447() {
	var element = "#obj1453";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1442_onTouchDown_runningActionsCount = obj1442_onTouchDown_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1442_onTouchDown_runningActionsCount = window.obj1442_onTouchDown_runningActionsCount - 1;
if (window.obj1442_onTouchDown_runningActionsCount == 0) {
	obj1442_onTouchDown_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1442_onTouchDown_runningActionsCount = window.obj1442_onTouchDown_runningActionsCount - 1;
if (window.obj1442_onTouchDown_runningActionsCount == 0) {
	obj1442_onTouchDown_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1442_onTouchDown_runningActionsCount = window.obj1442_onTouchDown_runningActionsCount - 1;
if (window.obj1442_onTouchDown_runningActionsCount == 0) {
	obj1442_onTouchDown_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj1457 
show_1448();
function show_1448() {
	var element = "#obj1457";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1442_onTouchDown_runningActionsCount = obj1442_onTouchDown_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1442_onTouchDown_runningActionsCount = window.obj1442_onTouchDown_runningActionsCount - 1;
if (window.obj1442_onTouchDown_runningActionsCount == 0) {
	obj1442_onTouchDown_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1442_onTouchDown_runningActionsCount = window.obj1442_onTouchDown_runningActionsCount - 1;
if (window.obj1442_onTouchDown_runningActionsCount == 0) {
	obj1442_onTouchDown_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1442_onTouchDown_runningActionsCount = window.obj1442_onTouchDown_runningActionsCount - 1;
if (window.obj1442_onTouchDown_runningActionsCount == 0) {
	obj1442_onTouchDown_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj1460 
show_1449();
function show_1449() {
	var element = "#obj1460";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1442_onTouchDown_runningActionsCount = obj1442_onTouchDown_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1442_onTouchDown_runningActionsCount = window.obj1442_onTouchDown_runningActionsCount - 1;
if (window.obj1442_onTouchDown_runningActionsCount == 0) {
	obj1442_onTouchDown_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1442_onTouchDown_runningActionsCount = window.obj1442_onTouchDown_runningActionsCount - 1;
if (window.obj1442_onTouchDown_runningActionsCount == 0) {
	obj1442_onTouchDown_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1442_onTouchDown_runningActionsCount = window.obj1442_onTouchDown_runningActionsCount - 1;
if (window.obj1442_onTouchDown_runningActionsCount == 0) {
	obj1442_onTouchDown_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1442_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1442_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1442").trigger("obj1442_onTouchDown_ended");
		
		return;
	}
	window.obj1442_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj1460_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1460_onTap_activeActionGroupIndex = -1;
		$("#obj1460").trigger("obj1460_onTap_ended");
		
		return;
	}
	window.obj1460_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page5
goToPage_1471();
function goToPage_1471() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../5/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(5))},200);
	}
}





















};
obj1460_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1460_onTap_activeActionGroupIndex = -1;
		$("#obj1460").trigger("obj1460_onTap_ended");
		
		return;
	}
	window.obj1460_onTap_activeActionGroupIndex = 1;
	





















};
obj2049_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2049_onTap_activeActionGroupIndex = -1;
		$("#obj2049").trigger("obj2049_onTap_ended");
		
		return;
	}
	window.obj2049_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page1
goToPage_2051();
function goToPage_2051() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../1/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(1))},200);
	}
}





















};
obj2049_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2049_onTap_activeActionGroupIndex = -1;
		$("#obj2049").trigger("obj2049_onTap_ended");
		
		return;
	}
	window.obj2049_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		

























/*
 *
 *   obj1341: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1341");
	var winTarget = document.getElementById("obj1341");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1341").one(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1341_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1341_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1341_onTouchDown_activeActionGroupIndex != -1) return;
var obj1341_onTouchDown_runningActionsCount = 0;
var obj1341_onTouchDown_loopCount = 0;
obj1341_onTouchDown_actionGroup0();
});







/*
 *
 *   obj1306: Event Show
 *
 */
 
$("#obj1306").bind('SCEventShow', function(event) {
	if (window.obj1306_onShow_activeActionGroupIndex != -1) return;
var obj1306_onShow_runningActionsCount = 0;
var obj1306_onShow_loopCount = 0;
obj1306_onShow_actionGroup0();
});





/*
 *
 *   obj1316: Event Touch Down
 *
 */
 
$("#obj1316").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1316_onTap_activeActionGroupIndex != -1) return;
var obj1316_onTap_runningActionsCount = 0;
var obj1316_onTap_loopCount = 0;
obj1316_onTap_actionGroup0();
});



































/*
 *
 *   obj1357: Event Touch Down
 *
 */
 
$("#obj1357").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1357_onTap_activeActionGroupIndex != -1) return;
var obj1357_onTap_runningActionsCount = 0;
var obj1357_onTap_loopCount = 0;
obj1357_onTap_actionGroup0();
});






















/*
 *
 *   obj1377: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1377");
	var winTarget = document.getElementById("obj1377");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1377").one(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1377_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1377_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1377_onTouchDown_activeActionGroupIndex != -1) return;
var obj1377_onTouchDown_runningActionsCount = 0;
var obj1377_onTouchDown_loopCount = 0;
obj1377_onTouchDown_actionGroup0();
});




















/*
 *
 *   obj1393: Event Touch Down
 *
 */
 
$("#obj1393").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1393_onTap_activeActionGroupIndex != -1) return;
var obj1393_onTap_runningActionsCount = 0;
var obj1393_onTap_loopCount = 0;
obj1393_onTap_actionGroup0();
});








/*
 *
 *   obj1403: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1403");
	var winTarget = document.getElementById("obj1403");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1403").one(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1403_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1403_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1403_onTouchDown_activeActionGroupIndex != -1) return;
var obj1403_onTouchDown_runningActionsCount = 0;
var obj1403_onTouchDown_loopCount = 0;
obj1403_onTouchDown_actionGroup0();
});


































/*
 *
 *   obj1423: Event Touch Down
 *
 */
 
$("#obj1423").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1423_onTap_activeActionGroupIndex != -1) return;
var obj1423_onTap_runningActionsCount = 0;
var obj1423_onTap_loopCount = 0;
obj1423_onTap_actionGroup0();
});





























/*
 *
 *   obj1442: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1442");
	var winTarget = document.getElementById("obj1442");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1442").one(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1442_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1442_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1442_onTouchDown_activeActionGroupIndex != -1) return;
var obj1442_onTouchDown_runningActionsCount = 0;
var obj1442_onTouchDown_loopCount = 0;
obj1442_onTouchDown_actionGroup0();
});













/*
 *
 *   obj1460: Event Touch Down
 *
 */
 
$("#obj1460").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1460_onTap_activeActionGroupIndex != -1) return;
var obj1460_onTap_runningActionsCount = 0;
var obj1460_onTap_loopCount = 0;
obj1460_onTap_actionGroup0();
});







/*
 *
 *   obj2049: Event Touch Down
 *
 */
 
$("#obj2049").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2049_onTap_activeActionGroupIndex != -1) return;
var obj2049_onTap_runningActionsCount = 0;
var obj2049_onTap_loopCount = 0;
obj2049_onTap_actionGroup0();
});




		
		
		/*
		 *
	 	 *  Page is ready to be played
	 	 *
	 	 */
		if (askAudioPermission) {
	$("#SCAudioPermissionAllowButton").click(function () {
		$( "audio" ).each(function( index ) {
			this.play();
			this.pause();
		});
		$(window).trigger(PubCoder.Events.PagePlay);
	});
	$("#SCAudioPermissionCancelButton").click(function () {
		$(window).trigger(PubCoder.Events.PagePlay);
	});
	var remodalInst = $('[data-remodal-id=SCAudioPermissionAlert]').remodal().open();
} else {
	setTimeout(function() {
		$(window).trigger(PubCoder.Events.PagePlay);
	}, 200);
}
	 }
});
var orientationDevice = getOrientation(PubCoder.isAndroidReader);
$(window).on(PubCoder.Events.PagePlay, function() {
	
$("#obj866").trigger('SCEventShow');
$("#obj870").trigger('SCEventShow');
$("#obj1306").trigger('SCEventShow');
$("#obj1316").trigger('SCEventShow');
$("#obj2049").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});