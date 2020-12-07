pubcoder.projectID = "9706FB5C04CD460A85938C3898CAD20C";
pubcoder.project.id = "9706FB5C04CD460A85938C3898CAD20C";
pubcoder.project.title = "Medieval Resources";
pubcoder.page.id = 858;
pubcoder.page.title = "7";
pubcoder.page.number = 7;
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
var obj4549_onTap_activeActionGroupIndex = -1;
var obj4549_onTap_runningActionsCount = 0;
var obj4549_onTap_loopCount = 0;
var obj1316_onTap_activeActionGroupIndex = -1;
var obj1316_onTap_runningActionsCount = 0;
var obj1316_onTap_loopCount = 0;
var obj1341_onTouchDown_activeActionGroupIndex = -1;
var obj1341_onTouchDown_runningActionsCount = 0;
var obj1341_onTouchDown_loopCount = 0;
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
var obj4576_onTap_activeActionGroupIndex = -1;
var obj4576_onTap_runningActionsCount = 0;
var obj4576_onTap_loopCount = 0;
var obj3480_onTap_activeActionGroupIndex = -1;
var obj3480_onTap_runningActionsCount = 0;
var obj3480_onTap_loopCount = 0;
var obj4490_onTap_activeActionGroupIndex = -1;
var obj4490_onTap_runningActionsCount = 0;
var obj4490_onTap_loopCount = 0;
var obj4538_onLoad_activeActionGroupIndex = -1;
var obj4538_onLoad_runningActionsCount = 0;
var obj4538_onLoad_loopCount = 0;
var obj4557_onLoad_activeActionGroupIndex = -1;
var obj4557_onLoad_runningActionsCount = 0;
var obj4557_onLoad_loopCount = 0;
var obj4531_onTap_activeActionGroupIndex = -1;
var obj4531_onTap_runningActionsCount = 0;
var obj4531_onTap_loopCount = 0;
var obj4097_onTap_activeActionGroupIndex = -1;
var obj4097_onTap_runningActionsCount = 0;
var obj4097_onTap_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj4566_counterValue = 0;
var obj4566_counterTargetValue = 2;
var obj4566_counterCanExceedTargetValue = false;
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
		
obj4549_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4549_onTap_activeActionGroupIndex = -1;
		$("#obj4549").trigger("obj4549_onTap_ended");
		
		return;
	}
	window.obj4549_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj4538 
hide_4551();
function hide_4551() {
	var element = "#obj4538";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4549_onTap_runningActionsCount = obj4549_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj4549_onTap_runningActionsCount = window.obj4549_onTap_runningActionsCount - 1;
if (window.obj4549_onTap_runningActionsCount == 0) {
	obj4549_onTap_actionGroup1();
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
		setTimeout(hide_4551(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj4549_onTap_runningActionsCount = window.obj4549_onTap_runningActionsCount - 1;
if (window.obj4549_onTap_runningActionsCount == 0) {
	obj4549_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj4529 
hide_4552();
function hide_4552() {
	var element = "#obj4529";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4549_onTap_runningActionsCount = obj4549_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj4549_onTap_runningActionsCount = window.obj4549_onTap_runningActionsCount - 1;
if (window.obj4549_onTap_runningActionsCount == 0) {
	obj4549_onTap_actionGroup1();
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
		setTimeout(hide_4552(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj4549_onTap_runningActionsCount = window.obj4549_onTap_runningActionsCount - 1;
if (window.obj4549_onTap_runningActionsCount == 0) {
	obj4549_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj4531 
hide_4553();
function hide_4553() {
	var element = "#obj4531";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4549_onTap_runningActionsCount = obj4549_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj4549_onTap_runningActionsCount = window.obj4549_onTap_runningActionsCount - 1;
if (window.obj4549_onTap_runningActionsCount == 0) {
	obj4549_onTap_actionGroup1();
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
		setTimeout(hide_4553(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj4549_onTap_runningActionsCount = window.obj4549_onTap_runningActionsCount - 1;
if (window.obj4549_onTap_runningActionsCount == 0) {
	obj4549_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj4549 
hide_4554();
function hide_4554() {
	var element = "#obj4549";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4549_onTap_runningActionsCount = obj4549_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj4549_onTap_runningActionsCount = window.obj4549_onTap_runningActionsCount - 1;
if (window.obj4549_onTap_runningActionsCount == 0) {
	obj4549_onTap_actionGroup1();
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
		setTimeout(hide_4554(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj4549_onTap_runningActionsCount = window.obj4549_onTap_runningActionsCount - 1;
if (window.obj4549_onTap_runningActionsCount == 0) {
	obj4549_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj4549_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4549_onTap_activeActionGroupIndex = -1;
		$("#obj4549").trigger("obj4549_onTap_ended");
		
		return;
	}
	window.obj4549_onTap_activeActionGroupIndex = 1;
	





















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
//	target: obj4576 
show_4579();
function show_4579() {
	var element = "#obj4576";
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
//	target: obj4568 
show_4578();
function show_4578() {
	var element = "#obj4568";
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
obj4576_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4576_onTap_activeActionGroupIndex = -1;
		$("#obj4576").trigger("obj4576_onTap_ended");
		
		return;
	}
	window.obj4576_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1457 
hide_4588();
function hide_4588() {
	var element = "#obj1457";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4576_onTap_runningActionsCount = obj4576_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj4576_onTap_runningActionsCount = window.obj4576_onTap_runningActionsCount - 1;
if (window.obj4576_onTap_runningActionsCount == 0) {
	obj4576_onTap_actionGroup1();
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
		setTimeout(hide_4588(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj4576_onTap_runningActionsCount = window.obj4576_onTap_runningActionsCount - 1;
if (window.obj4576_onTap_runningActionsCount == 0) {
	obj4576_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj4568 
hide_4589();
function hide_4589() {
	var element = "#obj4568";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4576_onTap_runningActionsCount = obj4576_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj4576_onTap_runningActionsCount = window.obj4576_onTap_runningActionsCount - 1;
if (window.obj4576_onTap_runningActionsCount == 0) {
	obj4576_onTap_actionGroup1();
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
		setTimeout(hide_4589(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj4576_onTap_runningActionsCount = window.obj4576_onTap_runningActionsCount - 1;
if (window.obj4576_onTap_runningActionsCount == 0) {
	obj4576_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj4576 
hide_4590();
function hide_4590() {
	var element = "#obj4576";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4576_onTap_runningActionsCount = obj4576_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj4576_onTap_runningActionsCount = window.obj4576_onTap_runningActionsCount - 1;
if (window.obj4576_onTap_runningActionsCount == 0) {
	obj4576_onTap_actionGroup1();
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
		setTimeout(hide_4590(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj4576_onTap_runningActionsCount = window.obj4576_onTap_runningActionsCount - 1;
if (window.obj4576_onTap_runningActionsCount == 0) {
	obj4576_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj4576_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4576_onTap_activeActionGroupIndex = -1;
		$("#obj4576").trigger("obj4576_onTap_ended");
		
		return;
	}
	window.obj4576_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj4584 
show_4592();
function show_4592() {
	var element = "#obj4584";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj4576_onTap_runningActionsCount = obj4576_onTap_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj4576_onTap_runningActionsCount = window.obj4576_onTap_runningActionsCount - 1;
if (window.obj4576_onTap_runningActionsCount == 0) {
	obj4576_onTap_actionGroup2();
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
		window.obj4576_onTap_runningActionsCount = window.obj4576_onTap_runningActionsCount - 1;
if (window.obj4576_onTap_runningActionsCount == 0) {
	obj4576_onTap_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj4576_onTap_runningActionsCount = window.obj4576_onTap_runningActionsCount - 1;
if (window.obj4576_onTap_runningActionsCount == 0) {
	obj4576_onTap_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj4582 
show_4593();
function show_4593() {
	var element = "#obj4582";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj4576_onTap_runningActionsCount = obj4576_onTap_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj4576_onTap_runningActionsCount = window.obj4576_onTap_runningActionsCount - 1;
if (window.obj4576_onTap_runningActionsCount == 0) {
	obj4576_onTap_actionGroup2();
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
		window.obj4576_onTap_runningActionsCount = window.obj4576_onTap_runningActionsCount - 1;
if (window.obj4576_onTap_runningActionsCount == 0) {
	obj4576_onTap_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj4576_onTap_runningActionsCount = window.obj4576_onTap_runningActionsCount - 1;
if (window.obj4576_onTap_runningActionsCount == 0) {
	obj4576_onTap_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj4710 
show_4709();
function show_4709() {
	var element = "#obj4710";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj4576_onTap_runningActionsCount = obj4576_onTap_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj4576_onTap_runningActionsCount = window.obj4576_onTap_runningActionsCount - 1;
if (window.obj4576_onTap_runningActionsCount == 0) {
	obj4576_onTap_actionGroup2();
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
		window.obj4576_onTap_runningActionsCount = window.obj4576_onTap_runningActionsCount - 1;
if (window.obj4576_onTap_runningActionsCount == 0) {
	obj4576_onTap_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj4576_onTap_runningActionsCount = window.obj4576_onTap_runningActionsCount - 1;
if (window.obj4576_onTap_runningActionsCount == 0) {
	obj4576_onTap_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj4576_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4576_onTap_activeActionGroupIndex = -1;
		$("#obj4576").trigger("obj4576_onTap_ended");
		
		return;
	}
	window.obj4576_onTap_activeActionGroupIndex = 2;
	








//	action: wait
wait_4714();
function wait_4714() {
	window.obj4576_onTap_runningActionsCount = obj4576_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj4576_onTap_runningActionsCount = window.obj4576_onTap_runningActionsCount - 1;
if (window.obj4576_onTap_runningActionsCount == 0) {
	obj4576_onTap_actionGroup3();
}
	}, 3000);
}












};
obj4576_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4576_onTap_activeActionGroupIndex = -1;
		$("#obj4576").trigger("obj4576_onTap_ended");
		
		return;
	}
	window.obj4576_onTap_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_4715();
function switchText_4715() {
	window.obj4576_onTap_runningActionsCount = obj4576_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p>Just wait until you see what I’ve done to the windows!</p>";
	var switchTextFunction = function () {
		$("#obj4710").html(newHtml);
		setTimeout(function () {
			window.obj4576_onTap_runningActionsCount = window.obj4576_onTap_runningActionsCount - 1;
if (window.obj4576_onTap_runningActionsCount == 0) {
	obj4576_onTap_actionGroup4();
}
		}, 1);
	};
	if (fadeTime > 0) {
		var oldHtmlWrapped = "<div id=\"obj4710_old\" style=\"position:absolute; top:0px; width:100%;\">" + $("#obj4710").html() + "</div>";
		var newHtmlWrapped = "<div id=\"obj4710_new\" style=\"position:absolute; top:0px; width:100%; display:none;\">" + newHtml + "</div>";
		$("#obj4710").html(oldHtmlWrapped + newHtmlWrapped);
		$("#obj4710_old").fadeOut(fadeTime);
		$("#obj4710_new").fadeIn(fadeTime, switchTextFunction);
	} else {
		switchTextFunction();
	}
}





};
obj4576_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4576_onTap_activeActionGroupIndex = -1;
		$("#obj4576").trigger("obj4576_onTap_ended");
		
		return;
	}
	window.obj4576_onTap_activeActionGroupIndex = 4;
	

//	action: show 
//	target: obj3480 
show_4596();
function show_4596() {
	var element = "#obj3480";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj4576_onTap_runningActionsCount = obj4576_onTap_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj4576_onTap_runningActionsCount = window.obj4576_onTap_runningActionsCount - 1;
if (window.obj4576_onTap_runningActionsCount == 0) {
	obj4576_onTap_actionGroup5();
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
		window.obj4576_onTap_runningActionsCount = window.obj4576_onTap_runningActionsCount - 1;
if (window.obj4576_onTap_runningActionsCount == 0) {
	obj4576_onTap_actionGroup5();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj4576_onTap_runningActionsCount = window.obj4576_onTap_runningActionsCount - 1;
if (window.obj4576_onTap_runningActionsCount == 0) {
	obj4576_onTap_actionGroup5();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj4576_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4576_onTap_activeActionGroupIndex = -1;
		$("#obj4576").trigger("obj4576_onTap_ended");
		
		return;
	}
	window.obj4576_onTap_activeActionGroupIndex = 5;
	





















};
obj3480_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3480_onTap_activeActionGroupIndex = -1;
		$("#obj3480").trigger("obj3480_onTap_ended");
		
		return;
	}
	window.obj3480_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page8
goToPage_3488();
function goToPage_3488() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../8/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(8))},200);
	}
}





















};
obj3480_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3480_onTap_activeActionGroupIndex = -1;
		$("#obj3480").trigger("obj3480_onTap_ended");
		
		return;
	}
	window.obj3480_onTap_activeActionGroupIndex = 1;
	





















};
obj4490_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4490_onTap_activeActionGroupIndex = -1;
		$("#obj4490").trigger("obj4490_onTap_ended");
		
		return;
	}
	window.obj4490_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj4538 
hide_4541();
function hide_4541() {
	var element = "#obj4538";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4490_onTap_runningActionsCount = obj4490_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj4490_onTap_runningActionsCount = window.obj4490_onTap_runningActionsCount - 1;
if (window.obj4490_onTap_runningActionsCount == 0) {
	obj4490_onTap_actionGroup1();
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
		setTimeout(hide_4541(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj4490_onTap_runningActionsCount = window.obj4490_onTap_runningActionsCount - 1;
if (window.obj4490_onTap_runningActionsCount == 0) {
	obj4490_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj4529 
hide_4542();
function hide_4542() {
	var element = "#obj4529";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4490_onTap_runningActionsCount = obj4490_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj4490_onTap_runningActionsCount = window.obj4490_onTap_runningActionsCount - 1;
if (window.obj4490_onTap_runningActionsCount == 0) {
	obj4490_onTap_actionGroup1();
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
		setTimeout(hide_4542(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj4490_onTap_runningActionsCount = window.obj4490_onTap_runningActionsCount - 1;
if (window.obj4490_onTap_runningActionsCount == 0) {
	obj4490_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj4531 
hide_4543();
function hide_4543() {
	var element = "#obj4531";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4490_onTap_runningActionsCount = obj4490_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj4490_onTap_runningActionsCount = window.obj4490_onTap_runningActionsCount - 1;
if (window.obj4490_onTap_runningActionsCount == 0) {
	obj4490_onTap_actionGroup1();
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
		setTimeout(hide_4543(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj4490_onTap_runningActionsCount = window.obj4490_onTap_runningActionsCount - 1;
if (window.obj4490_onTap_runningActionsCount == 0) {
	obj4490_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj4490 
hide_4544();
function hide_4544() {
	var element = "#obj4490";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4490_onTap_runningActionsCount = obj4490_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj4490_onTap_runningActionsCount = window.obj4490_onTap_runningActionsCount - 1;
if (window.obj4490_onTap_runningActionsCount == 0) {
	obj4490_onTap_actionGroup1();
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
		setTimeout(hide_4544(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj4490_onTap_runningActionsCount = window.obj4490_onTap_runningActionsCount - 1;
if (window.obj4490_onTap_runningActionsCount == 0) {
	obj4490_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj870 
show_4562();
function show_4562() {
	var element = "#obj870";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj4490_onTap_runningActionsCount = obj4490_onTap_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj4490_onTap_runningActionsCount = window.obj4490_onTap_runningActionsCount - 1;
if (window.obj4490_onTap_runningActionsCount == 0) {
	obj4490_onTap_actionGroup1();
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
		window.obj4490_onTap_runningActionsCount = window.obj4490_onTap_runningActionsCount - 1;
if (window.obj4490_onTap_runningActionsCount == 0) {
	obj4490_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj4490_onTap_runningActionsCount = window.obj4490_onTap_runningActionsCount - 1;
if (window.obj4490_onTap_runningActionsCount == 0) {
	obj4490_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj866 
show_4563();
function show_4563() {
	var element = "#obj866";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj4490_onTap_runningActionsCount = obj4490_onTap_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj4490_onTap_runningActionsCount = window.obj4490_onTap_runningActionsCount - 1;
if (window.obj4490_onTap_runningActionsCount == 0) {
	obj4490_onTap_actionGroup1();
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
		window.obj4490_onTap_runningActionsCount = window.obj4490_onTap_runningActionsCount - 1;
if (window.obj4490_onTap_runningActionsCount == 0) {
	obj4490_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj4490_onTap_runningActionsCount = window.obj4490_onTap_runningActionsCount - 1;
if (window.obj4490_onTap_runningActionsCount == 0) {
	obj4490_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj1306 
show_4564();
function show_4564() {
	var element = "#obj1306";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj4490_onTap_runningActionsCount = obj4490_onTap_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj4490_onTap_runningActionsCount = window.obj4490_onTap_runningActionsCount - 1;
if (window.obj4490_onTap_runningActionsCount == 0) {
	obj4490_onTap_actionGroup1();
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
		window.obj4490_onTap_runningActionsCount = window.obj4490_onTap_runningActionsCount - 1;
if (window.obj4490_onTap_runningActionsCount == 0) {
	obj4490_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj4490_onTap_runningActionsCount = window.obj4490_onTap_runningActionsCount - 1;
if (window.obj4490_onTap_runningActionsCount == 0) {
	obj4490_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj4490_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4490_onTap_activeActionGroupIndex = -1;
		$("#obj4490").trigger("obj4490_onTap_ended");
		
		return;
	}
	window.obj4490_onTap_activeActionGroupIndex = 1;
	





















};
obj4538_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4538_onLoad_activeActionGroupIndex = -1;
		$("#obj4538").trigger("obj4538_onLoad_ended");
		
		return;
	}
	window.obj4538_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_4547();
function wait_4547() {
	window.obj4538_onLoad_runningActionsCount = obj4538_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj4538_onLoad_runningActionsCount = window.obj4538_onLoad_runningActionsCount - 1;
if (window.obj4538_onLoad_runningActionsCount == 0) {
	obj4538_onLoad_actionGroup1();
}
	}, 3000);
}












};
obj4538_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4538_onLoad_activeActionGroupIndex = -1;
		$("#obj4538").trigger("obj4538_onLoad_ended");
		
		return;
	}
	window.obj4538_onLoad_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj4531 
show_4548();
function show_4548() {
	var element = "#obj4531";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj4538_onLoad_runningActionsCount = obj4538_onLoad_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj4538_onLoad_runningActionsCount = window.obj4538_onLoad_runningActionsCount - 1;
if (window.obj4538_onLoad_runningActionsCount == 0) {
	obj4538_onLoad_actionGroup2();
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
		window.obj4538_onLoad_runningActionsCount = window.obj4538_onLoad_runningActionsCount - 1;
if (window.obj4538_onLoad_runningActionsCount == 0) {
	obj4538_onLoad_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj4538_onLoad_runningActionsCount = window.obj4538_onLoad_runningActionsCount - 1;
if (window.obj4538_onLoad_runningActionsCount == 0) {
	obj4538_onLoad_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj4538_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4538_onLoad_activeActionGroupIndex = -1;
		$("#obj4538").trigger("obj4538_onLoad_ended");
		
		return;
	}
	window.obj4538_onLoad_activeActionGroupIndex = 2;
	





















};
obj4557_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4557_onLoad_activeActionGroupIndex = -1;
		$("#obj4557").trigger("obj4557_onLoad_ended");
		
		return;
	}
	window.obj4557_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_4560();
function wait_4560() {
	window.obj4557_onLoad_runningActionsCount = obj4557_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj4557_onLoad_runningActionsCount = window.obj4557_onLoad_runningActionsCount - 1;
if (window.obj4557_onLoad_runningActionsCount == 0) {
	obj4557_onLoad_actionGroup1();
}
	}, 3000);
}












};
obj4557_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4557_onLoad_activeActionGroupIndex = -1;
		$("#obj4557").trigger("obj4557_onLoad_ended");
		
		return;
	}
	window.obj4557_onLoad_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj4557 
hide_4561();
function hide_4561() {
	var element = "#obj4557";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4557_onLoad_runningActionsCount = obj4557_onLoad_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj4557_onLoad_runningActionsCount = window.obj4557_onLoad_runningActionsCount - 1;
if (window.obj4557_onLoad_runningActionsCount == 0) {
	obj4557_onLoad_actionGroup2();
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
		setTimeout(hide_4561(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj4557_onLoad_runningActionsCount = window.obj4557_onLoad_runningActionsCount - 1;
if (window.obj4557_onLoad_runningActionsCount == 0) {
	obj4557_onLoad_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj4557_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4557_onLoad_activeActionGroupIndex = -1;
		$("#obj4557").trigger("obj4557_onLoad_ended");
		
		return;
	}
	window.obj4557_onLoad_activeActionGroupIndex = 2;
	





















};
obj4531_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4531_onTap_activeActionGroupIndex = -1;
		$("#obj4531").trigger("obj4531_onTap_ended");
		
		return;
	}
	window.obj4531_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj4538 
hide_4533();
function hide_4533() {
	var element = "#obj4538";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4531_onTap_runningActionsCount = obj4531_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj4531_onTap_runningActionsCount = window.obj4531_onTap_runningActionsCount - 1;
if (window.obj4531_onTap_runningActionsCount == 0) {
	obj4531_onTap_actionGroup1();
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
		setTimeout(hide_4533(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj4531_onTap_runningActionsCount = window.obj4531_onTap_runningActionsCount - 1;
if (window.obj4531_onTap_runningActionsCount == 0) {
	obj4531_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj4529 
hide_4534();
function hide_4534() {
	var element = "#obj4529";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4531_onTap_runningActionsCount = obj4531_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj4531_onTap_runningActionsCount = window.obj4531_onTap_runningActionsCount - 1;
if (window.obj4531_onTap_runningActionsCount == 0) {
	obj4531_onTap_actionGroup1();
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
		setTimeout(hide_4534(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj4531_onTap_runningActionsCount = window.obj4531_onTap_runningActionsCount - 1;
if (window.obj4531_onTap_runningActionsCount == 0) {
	obj4531_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj4490 
hide_4535();
function hide_4535() {
	var element = "#obj4490";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4531_onTap_runningActionsCount = obj4531_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj4531_onTap_runningActionsCount = window.obj4531_onTap_runningActionsCount - 1;
if (window.obj4531_onTap_runningActionsCount == 0) {
	obj4531_onTap_actionGroup1();
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
		setTimeout(hide_4535(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj4531_onTap_runningActionsCount = window.obj4531_onTap_runningActionsCount - 1;
if (window.obj4531_onTap_runningActionsCount == 0) {
	obj4531_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj4531 
hide_4540();
function hide_4540() {
	var element = "#obj4531";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4531_onTap_runningActionsCount = obj4531_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj4531_onTap_runningActionsCount = window.obj4531_onTap_runningActionsCount - 1;
if (window.obj4531_onTap_runningActionsCount == 0) {
	obj4531_onTap_actionGroup1();
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
		setTimeout(hide_4540(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj4531_onTap_runningActionsCount = window.obj4531_onTap_runningActionsCount - 1;
if (window.obj4531_onTap_runningActionsCount == 0) {
	obj4531_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj870 
show_4555();
function show_4555() {
	var element = "#obj870";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj4531_onTap_runningActionsCount = obj4531_onTap_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj4531_onTap_runningActionsCount = window.obj4531_onTap_runningActionsCount - 1;
if (window.obj4531_onTap_runningActionsCount == 0) {
	obj4531_onTap_actionGroup1();
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
		window.obj4531_onTap_runningActionsCount = window.obj4531_onTap_runningActionsCount - 1;
if (window.obj4531_onTap_runningActionsCount == 0) {
	obj4531_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj4531_onTap_runningActionsCount = window.obj4531_onTap_runningActionsCount - 1;
if (window.obj4531_onTap_runningActionsCount == 0) {
	obj4531_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj866 
show_4556();
function show_4556() {
	var element = "#obj866";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj4531_onTap_runningActionsCount = obj4531_onTap_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj4531_onTap_runningActionsCount = window.obj4531_onTap_runningActionsCount - 1;
if (window.obj4531_onTap_runningActionsCount == 0) {
	obj4531_onTap_actionGroup1();
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
		window.obj4531_onTap_runningActionsCount = window.obj4531_onTap_runningActionsCount - 1;
if (window.obj4531_onTap_runningActionsCount == 0) {
	obj4531_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj4531_onTap_runningActionsCount = window.obj4531_onTap_runningActionsCount - 1;
if (window.obj4531_onTap_runningActionsCount == 0) {
	obj4531_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj1306 
show_4565();
function show_4565() {
	var element = "#obj1306";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj4531_onTap_runningActionsCount = obj4531_onTap_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj4531_onTap_runningActionsCount = window.obj4531_onTap_runningActionsCount - 1;
if (window.obj4531_onTap_runningActionsCount == 0) {
	obj4531_onTap_actionGroup1();
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
		window.obj4531_onTap_runningActionsCount = window.obj4531_onTap_runningActionsCount - 1;
if (window.obj4531_onTap_runningActionsCount == 0) {
	obj4531_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj4531_onTap_runningActionsCount = window.obj4531_onTap_runningActionsCount - 1;
if (window.obj4531_onTap_runningActionsCount == 0) {
	obj4531_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj4531_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4531_onTap_activeActionGroupIndex = -1;
		$("#obj4531").trigger("obj4531_onTap_ended");
		
		return;
	}
	window.obj4531_onTap_activeActionGroupIndex = 1;
	





















};
obj4097_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4097_onTap_activeActionGroupIndex = -1;
		$("#obj4097").trigger("obj4097_onTap_ended");
		
		return;
	}
	window.obj4097_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page3
goToPage_4099();
function goToPage_4099() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../3/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(3))},200);
	}
}





















};
obj4097_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4097_onTap_activeActionGroupIndex = -1;
		$("#obj4097").trigger("obj4097_onTap_ended");
		
		return;
	}
	window.obj4097_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		



/*
 *
 *   obj4549: Event Touch Down
 *
 */
 
$("#obj4549").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4549_onTap_activeActionGroupIndex != -1) return;
var obj4549_onTap_runningActionsCount = 0;
var obj4549_onTap_loopCount = 0;
obj4549_onTap_actionGroup0();
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
 *   obj4576: Event Touch Down
 *
 */
 
$("#obj4576").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4576_onTap_activeActionGroupIndex != -1) return;
var obj4576_onTap_runningActionsCount = 0;
var obj4576_onTap_loopCount = 0;
obj4576_onTap_actionGroup0();
});




























/*
 *
 *   obj3480: Event Touch Down
 *
 */
 
$("#obj3480").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3480_onTap_activeActionGroupIndex != -1) return;
var obj3480_onTap_runningActionsCount = 0;
var obj3480_onTap_loopCount = 0;
obj3480_onTap_actionGroup0();
});







/*
 *
 *   obj4490: Event Touch Down
 *
 */
 
$("#obj4490").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4490_onTap_activeActionGroupIndex != -1) return;
var obj4490_onTap_runningActionsCount = 0;
var obj4490_onTap_loopCount = 0;
obj4490_onTap_actionGroup0();
});
















/*
 *
 *   obj4538: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj4538_onLoad_activeActionGroupIndex != -1) return;
var obj4538_onLoad_runningActionsCount = 0;
var obj4538_onLoad_loopCount = 0;
obj4538_onLoad_actionGroup0();
});







/*
 *
 *   obj4557: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj4557_onLoad_activeActionGroupIndex != -1) return;
var obj4557_onLoad_runningActionsCount = 0;
var obj4557_onLoad_loopCount = 0;
obj4557_onLoad_actionGroup0();
});





/*
 *
 *   obj4531: Event Touch Down
 *
 */
 
$("#obj4531").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4531_onTap_activeActionGroupIndex != -1) return;
var obj4531_onTap_runningActionsCount = 0;
var obj4531_onTap_loopCount = 0;
obj4531_onTap_actionGroup0();
});







/*
 *
 *   obj4097: Event Touch Down
 *
 */
 
$("#obj4097").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4097_onTap_activeActionGroupIndex != -1) return;
var obj4097_onTap_runningActionsCount = 0;
var obj4097_onTap_loopCount = 0;
obj4097_onTap_actionGroup0();
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
	
$("#obj4549").trigger('SCEventShow');
$("#obj1316").trigger('SCEventShow');
$("#obj4576").trigger('SCEventShow');
$("#obj4490").trigger('SCEventShow');
$("#obj4529").trigger('SCEventShow');
$("#obj4538").trigger('SCEventShow');
$("#obj4557").trigger('SCEventShow');
$("#obj4097").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});