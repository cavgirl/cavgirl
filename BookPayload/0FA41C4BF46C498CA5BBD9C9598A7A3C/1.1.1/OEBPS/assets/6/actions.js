pubcoder.projectID = "9706FB5C04CD460A85938C3898CAD20C";
pubcoder.project.id = "9706FB5C04CD460A85938C3898CAD20C";
pubcoder.project.title = "Medieval Resources";
pubcoder.page.id = 6;
pubcoder.page.title = "6";
pubcoder.page.number = 6;
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
var obj1596_onTap_activeActionGroupIndex = -1;
var obj1596_onTap_runningActionsCount = 0;
var obj1596_onTap_loopCount = 0;
var obj1577_onTap_activeActionGroupIndex = -1;
var obj1577_onTap_runningActionsCount = 0;
var obj1577_onTap_loopCount = 0;
var obj1573_onTap_activeActionGroupIndex = -1;
var obj1573_onTap_runningActionsCount = 0;
var obj1573_onTap_loopCount = 0;
var obj1569_onTap_activeActionGroupIndex = -1;
var obj1569_onTap_runningActionsCount = 0;
var obj1569_onTap_loopCount = 0;
var obj1565_onTap_activeActionGroupIndex = -1;
var obj1565_onTap_runningActionsCount = 0;
var obj1565_onTap_loopCount = 0;
var obj1561_onTap_activeActionGroupIndex = -1;
var obj1561_onTap_runningActionsCount = 0;
var obj1561_onTap_loopCount = 0;
var obj1557_onTap_activeActionGroupIndex = -1;
var obj1557_onTap_runningActionsCount = 0;
var obj1557_onTap_loopCount = 0;
var obj1553_onTap_activeActionGroupIndex = -1;
var obj1553_onTap_runningActionsCount = 0;
var obj1553_onTap_loopCount = 0;
var obj1548_onTap_activeActionGroupIndex = -1;
var obj1548_onTap_runningActionsCount = 0;
var obj1548_onTap_loopCount = 0;
var obj1544_onTap_activeActionGroupIndex = -1;
var obj1544_onTap_runningActionsCount = 0;
var obj1544_onTap_loopCount = 0;
var obj1540_onTap_activeActionGroupIndex = -1;
var obj1540_onTap_runningActionsCount = 0;
var obj1540_onTap_loopCount = 0;
var obj2049_onTap_activeActionGroupIndex = -1;
var obj2049_onTap_runningActionsCount = 0;
var obj2049_onTap_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
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
		
obj1596_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1596_onTap_activeActionGroupIndex = -1;
		$("#obj1596").trigger("obj1596_onTap_ended");
		
		return;
	}
	window.obj1596_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1596 
hide_1598();
function hide_1598() {
	var element = "#obj1596";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1596_onTap_runningActionsCount = obj1596_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1596_onTap_runningActionsCount = window.obj1596_onTap_runningActionsCount - 1;
if (window.obj1596_onTap_runningActionsCount == 0) {
	obj1596_onTap_actionGroup1();
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
		setTimeout(hide_1598(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1596_onTap_runningActionsCount = window.obj1596_onTap_runningActionsCount - 1;
if (window.obj1596_onTap_runningActionsCount == 0) {
	obj1596_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1522 
hide_1599();
function hide_1599() {
	var element = "#obj1522";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1596_onTap_runningActionsCount = obj1596_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOutDown";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1596_onTap_runningActionsCount = window.obj1596_onTap_runningActionsCount - 1;
if (window.obj1596_onTap_runningActionsCount == 0) {
	obj1596_onTap_actionGroup1();
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
		setTimeout(hide_1599(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1596_onTap_runningActionsCount = window.obj1596_onTap_runningActionsCount - 1;
if (window.obj1596_onTap_runningActionsCount == 0) {
	obj1596_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj1596_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1596_onTap_activeActionGroupIndex = -1;
		$("#obj1596").trigger("obj1596_onTap_ended");
		
		return;
	}
	window.obj1596_onTap_activeActionGroupIndex = 1;
	





















};
obj1577_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1577_onTap_activeActionGroupIndex = -1;
		$("#obj1577").trigger("obj1577_onTap_ended");
		
		return;
	}
	window.obj1577_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1577 
hide_1579();
function hide_1579() {
	var element = "#obj1577";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1577_onTap_runningActionsCount = obj1577_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1577_onTap_runningActionsCount = window.obj1577_onTap_runningActionsCount - 1;
if (window.obj1577_onTap_runningActionsCount == 0) {
	obj1577_onTap_actionGroup1();
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
		setTimeout(hide_1579(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1577_onTap_runningActionsCount = window.obj1577_onTap_runningActionsCount - 1;
if (window.obj1577_onTap_runningActionsCount == 0) {
	obj1577_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1518 
hide_1580();
function hide_1580() {
	var element = "#obj1518";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1577_onTap_runningActionsCount = obj1577_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOutDown";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1577_onTap_runningActionsCount = window.obj1577_onTap_runningActionsCount - 1;
if (window.obj1577_onTap_runningActionsCount == 0) {
	obj1577_onTap_actionGroup1();
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
		setTimeout(hide_1580(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1577_onTap_runningActionsCount = window.obj1577_onTap_runningActionsCount - 1;
if (window.obj1577_onTap_runningActionsCount == 0) {
	obj1577_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj1522 
show_1607();
function show_1607() {
	var element = "#obj1522";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1577_onTap_runningActionsCount = obj1577_onTap_runningActionsCount + 1;

	var animationType = "fadeInDown";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1577_onTap_runningActionsCount = window.obj1577_onTap_runningActionsCount - 1;
if (window.obj1577_onTap_runningActionsCount == 0) {
	obj1577_onTap_actionGroup1();
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
		window.obj1577_onTap_runningActionsCount = window.obj1577_onTap_runningActionsCount - 1;
if (window.obj1577_onTap_runningActionsCount == 0) {
	obj1577_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1577_onTap_runningActionsCount = window.obj1577_onTap_runningActionsCount - 1;
if (window.obj1577_onTap_runningActionsCount == 0) {
	obj1577_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1577_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1577_onTap_activeActionGroupIndex = -1;
		$("#obj1577").trigger("obj1577_onTap_ended");
		
		return;
	}
	window.obj1577_onTap_activeActionGroupIndex = 1;
	





















};
obj1573_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1573_onTap_activeActionGroupIndex = -1;
		$("#obj1573").trigger("obj1573_onTap_ended");
		
		return;
	}
	window.obj1573_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1573 
hide_1575();
function hide_1575() {
	var element = "#obj1573";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1573_onTap_runningActionsCount = obj1573_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1573_onTap_runningActionsCount = window.obj1573_onTap_runningActionsCount - 1;
if (window.obj1573_onTap_runningActionsCount == 0) {
	obj1573_onTap_actionGroup1();
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
		setTimeout(hide_1575(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1573_onTap_runningActionsCount = window.obj1573_onTap_runningActionsCount - 1;
if (window.obj1573_onTap_runningActionsCount == 0) {
	obj1573_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1524 
hide_1576();
function hide_1576() {
	var element = "#obj1524";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1573_onTap_runningActionsCount = obj1573_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOutDown";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1573_onTap_runningActionsCount = window.obj1573_onTap_runningActionsCount - 1;
if (window.obj1573_onTap_runningActionsCount == 0) {
	obj1573_onTap_actionGroup1();
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
		setTimeout(hide_1576(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1573_onTap_runningActionsCount = window.obj1573_onTap_runningActionsCount - 1;
if (window.obj1573_onTap_runningActionsCount == 0) {
	obj1573_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj1518 
show_1606();
function show_1606() {
	var element = "#obj1518";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1573_onTap_runningActionsCount = obj1573_onTap_runningActionsCount + 1;

	var animationType = "fadeInDown";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1573_onTap_runningActionsCount = window.obj1573_onTap_runningActionsCount - 1;
if (window.obj1573_onTap_runningActionsCount == 0) {
	obj1573_onTap_actionGroup1();
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
		window.obj1573_onTap_runningActionsCount = window.obj1573_onTap_runningActionsCount - 1;
if (window.obj1573_onTap_runningActionsCount == 0) {
	obj1573_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1573_onTap_runningActionsCount = window.obj1573_onTap_runningActionsCount - 1;
if (window.obj1573_onTap_runningActionsCount == 0) {
	obj1573_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1573_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1573_onTap_activeActionGroupIndex = -1;
		$("#obj1573").trigger("obj1573_onTap_ended");
		
		return;
	}
	window.obj1573_onTap_activeActionGroupIndex = 1;
	





















};
obj1569_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1569_onTap_activeActionGroupIndex = -1;
		$("#obj1569").trigger("obj1569_onTap_ended");
		
		return;
	}
	window.obj1569_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1569 
hide_1571();
function hide_1571() {
	var element = "#obj1569";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1569_onTap_runningActionsCount = obj1569_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1569_onTap_runningActionsCount = window.obj1569_onTap_runningActionsCount - 1;
if (window.obj1569_onTap_runningActionsCount == 0) {
	obj1569_onTap_actionGroup1();
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
		setTimeout(hide_1571(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1569_onTap_runningActionsCount = window.obj1569_onTap_runningActionsCount - 1;
if (window.obj1569_onTap_runningActionsCount == 0) {
	obj1569_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1526 
hide_1572();
function hide_1572() {
	var element = "#obj1526";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1569_onTap_runningActionsCount = obj1569_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOutDown";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1569_onTap_runningActionsCount = window.obj1569_onTap_runningActionsCount - 1;
if (window.obj1569_onTap_runningActionsCount == 0) {
	obj1569_onTap_actionGroup1();
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
		setTimeout(hide_1572(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1569_onTap_runningActionsCount = window.obj1569_onTap_runningActionsCount - 1;
if (window.obj1569_onTap_runningActionsCount == 0) {
	obj1569_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj1524 
show_1605();
function show_1605() {
	var element = "#obj1524";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1569_onTap_runningActionsCount = obj1569_onTap_runningActionsCount + 1;

	var animationType = "fadeInDown";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1569_onTap_runningActionsCount = window.obj1569_onTap_runningActionsCount - 1;
if (window.obj1569_onTap_runningActionsCount == 0) {
	obj1569_onTap_actionGroup1();
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
		window.obj1569_onTap_runningActionsCount = window.obj1569_onTap_runningActionsCount - 1;
if (window.obj1569_onTap_runningActionsCount == 0) {
	obj1569_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1569_onTap_runningActionsCount = window.obj1569_onTap_runningActionsCount - 1;
if (window.obj1569_onTap_runningActionsCount == 0) {
	obj1569_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1569_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1569_onTap_activeActionGroupIndex = -1;
		$("#obj1569").trigger("obj1569_onTap_ended");
		
		return;
	}
	window.obj1569_onTap_activeActionGroupIndex = 1;
	





















};
obj1565_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1565_onTap_activeActionGroupIndex = -1;
		$("#obj1565").trigger("obj1565_onTap_ended");
		
		return;
	}
	window.obj1565_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1565 
hide_1567();
function hide_1567() {
	var element = "#obj1565";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1565_onTap_runningActionsCount = obj1565_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1565_onTap_runningActionsCount = window.obj1565_onTap_runningActionsCount - 1;
if (window.obj1565_onTap_runningActionsCount == 0) {
	obj1565_onTap_actionGroup1();
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
		setTimeout(hide_1567(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1565_onTap_runningActionsCount = window.obj1565_onTap_runningActionsCount - 1;
if (window.obj1565_onTap_runningActionsCount == 0) {
	obj1565_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1528 
hide_1568();
function hide_1568() {
	var element = "#obj1528";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1565_onTap_runningActionsCount = obj1565_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOutDown";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1565_onTap_runningActionsCount = window.obj1565_onTap_runningActionsCount - 1;
if (window.obj1565_onTap_runningActionsCount == 0) {
	obj1565_onTap_actionGroup1();
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
		setTimeout(hide_1568(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1565_onTap_runningActionsCount = window.obj1565_onTap_runningActionsCount - 1;
if (window.obj1565_onTap_runningActionsCount == 0) {
	obj1565_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj1526 
show_1604();
function show_1604() {
	var element = "#obj1526";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1565_onTap_runningActionsCount = obj1565_onTap_runningActionsCount + 1;

	var animationType = "fadeInDown";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1565_onTap_runningActionsCount = window.obj1565_onTap_runningActionsCount - 1;
if (window.obj1565_onTap_runningActionsCount == 0) {
	obj1565_onTap_actionGroup1();
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
		window.obj1565_onTap_runningActionsCount = window.obj1565_onTap_runningActionsCount - 1;
if (window.obj1565_onTap_runningActionsCount == 0) {
	obj1565_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1565_onTap_runningActionsCount = window.obj1565_onTap_runningActionsCount - 1;
if (window.obj1565_onTap_runningActionsCount == 0) {
	obj1565_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1565_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1565_onTap_activeActionGroupIndex = -1;
		$("#obj1565").trigger("obj1565_onTap_ended");
		
		return;
	}
	window.obj1565_onTap_activeActionGroupIndex = 1;
	





















};
obj1561_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1561_onTap_activeActionGroupIndex = -1;
		$("#obj1561").trigger("obj1561_onTap_ended");
		
		return;
	}
	window.obj1561_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1561 
hide_1563();
function hide_1563() {
	var element = "#obj1561";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1561_onTap_runningActionsCount = obj1561_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1561_onTap_runningActionsCount = window.obj1561_onTap_runningActionsCount - 1;
if (window.obj1561_onTap_runningActionsCount == 0) {
	obj1561_onTap_actionGroup1();
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
		setTimeout(hide_1563(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1561_onTap_runningActionsCount = window.obj1561_onTap_runningActionsCount - 1;
if (window.obj1561_onTap_runningActionsCount == 0) {
	obj1561_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1529 
hide_1564();
function hide_1564() {
	var element = "#obj1529";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1561_onTap_runningActionsCount = obj1561_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOutDown";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1561_onTap_runningActionsCount = window.obj1561_onTap_runningActionsCount - 1;
if (window.obj1561_onTap_runningActionsCount == 0) {
	obj1561_onTap_actionGroup1();
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
		setTimeout(hide_1564(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1561_onTap_runningActionsCount = window.obj1561_onTap_runningActionsCount - 1;
if (window.obj1561_onTap_runningActionsCount == 0) {
	obj1561_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj1528 
show_1603();
function show_1603() {
	var element = "#obj1528";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1561_onTap_runningActionsCount = obj1561_onTap_runningActionsCount + 1;

	var animationType = "fadeInDown";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1561_onTap_runningActionsCount = window.obj1561_onTap_runningActionsCount - 1;
if (window.obj1561_onTap_runningActionsCount == 0) {
	obj1561_onTap_actionGroup1();
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
		window.obj1561_onTap_runningActionsCount = window.obj1561_onTap_runningActionsCount - 1;
if (window.obj1561_onTap_runningActionsCount == 0) {
	obj1561_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1561_onTap_runningActionsCount = window.obj1561_onTap_runningActionsCount - 1;
if (window.obj1561_onTap_runningActionsCount == 0) {
	obj1561_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1561_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1561_onTap_activeActionGroupIndex = -1;
		$("#obj1561").trigger("obj1561_onTap_ended");
		
		return;
	}
	window.obj1561_onTap_activeActionGroupIndex = 1;
	





















};
obj1557_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1557_onTap_activeActionGroupIndex = -1;
		$("#obj1557").trigger("obj1557_onTap_ended");
		
		return;
	}
	window.obj1557_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1557 
hide_1559();
function hide_1559() {
	var element = "#obj1557";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1557_onTap_runningActionsCount = obj1557_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1557_onTap_runningActionsCount = window.obj1557_onTap_runningActionsCount - 1;
if (window.obj1557_onTap_runningActionsCount == 0) {
	obj1557_onTap_actionGroup1();
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
		setTimeout(hide_1559(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1557_onTap_runningActionsCount = window.obj1557_onTap_runningActionsCount - 1;
if (window.obj1557_onTap_runningActionsCount == 0) {
	obj1557_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1530 
hide_1560();
function hide_1560() {
	var element = "#obj1530";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1557_onTap_runningActionsCount = obj1557_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOutDown";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1557_onTap_runningActionsCount = window.obj1557_onTap_runningActionsCount - 1;
if (window.obj1557_onTap_runningActionsCount == 0) {
	obj1557_onTap_actionGroup1();
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
		setTimeout(hide_1560(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1557_onTap_runningActionsCount = window.obj1557_onTap_runningActionsCount - 1;
if (window.obj1557_onTap_runningActionsCount == 0) {
	obj1557_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj1529 
show_1602();
function show_1602() {
	var element = "#obj1529";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1557_onTap_runningActionsCount = obj1557_onTap_runningActionsCount + 1;

	var animationType = "fadeInDown";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1557_onTap_runningActionsCount = window.obj1557_onTap_runningActionsCount - 1;
if (window.obj1557_onTap_runningActionsCount == 0) {
	obj1557_onTap_actionGroup1();
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
		window.obj1557_onTap_runningActionsCount = window.obj1557_onTap_runningActionsCount - 1;
if (window.obj1557_onTap_runningActionsCount == 0) {
	obj1557_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1557_onTap_runningActionsCount = window.obj1557_onTap_runningActionsCount - 1;
if (window.obj1557_onTap_runningActionsCount == 0) {
	obj1557_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1557_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1557_onTap_activeActionGroupIndex = -1;
		$("#obj1557").trigger("obj1557_onTap_ended");
		
		return;
	}
	window.obj1557_onTap_activeActionGroupIndex = 1;
	





















};
obj1553_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1553_onTap_activeActionGroupIndex = -1;
		$("#obj1553").trigger("obj1553_onTap_ended");
		
		return;
	}
	window.obj1553_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1553 
hide_1555();
function hide_1555() {
	var element = "#obj1553";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1553_onTap_runningActionsCount = obj1553_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1553_onTap_runningActionsCount = window.obj1553_onTap_runningActionsCount - 1;
if (window.obj1553_onTap_runningActionsCount == 0) {
	obj1553_onTap_actionGroup1();
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
		setTimeout(hide_1555(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1553_onTap_runningActionsCount = window.obj1553_onTap_runningActionsCount - 1;
if (window.obj1553_onTap_runningActionsCount == 0) {
	obj1553_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1531 
hide_1556();
function hide_1556() {
	var element = "#obj1531";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1553_onTap_runningActionsCount = obj1553_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOutDown";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1553_onTap_runningActionsCount = window.obj1553_onTap_runningActionsCount - 1;
if (window.obj1553_onTap_runningActionsCount == 0) {
	obj1553_onTap_actionGroup1();
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
		setTimeout(hide_1556(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1553_onTap_runningActionsCount = window.obj1553_onTap_runningActionsCount - 1;
if (window.obj1553_onTap_runningActionsCount == 0) {
	obj1553_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj1530 
show_1601();
function show_1601() {
	var element = "#obj1530";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1553_onTap_runningActionsCount = obj1553_onTap_runningActionsCount + 1;

	var animationType = "fadeInDown";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1553_onTap_runningActionsCount = window.obj1553_onTap_runningActionsCount - 1;
if (window.obj1553_onTap_runningActionsCount == 0) {
	obj1553_onTap_actionGroup1();
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
		window.obj1553_onTap_runningActionsCount = window.obj1553_onTap_runningActionsCount - 1;
if (window.obj1553_onTap_runningActionsCount == 0) {
	obj1553_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1553_onTap_runningActionsCount = window.obj1553_onTap_runningActionsCount - 1;
if (window.obj1553_onTap_runningActionsCount == 0) {
	obj1553_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1553_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1553_onTap_activeActionGroupIndex = -1;
		$("#obj1553").trigger("obj1553_onTap_ended");
		
		return;
	}
	window.obj1553_onTap_activeActionGroupIndex = 1;
	





















};
obj1548_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1548_onTap_activeActionGroupIndex = -1;
		$("#obj1548").trigger("obj1548_onTap_ended");
		
		return;
	}
	window.obj1548_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1548 
hide_1550();
function hide_1550() {
	var element = "#obj1548";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1548_onTap_runningActionsCount = obj1548_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1548_onTap_runningActionsCount = window.obj1548_onTap_runningActionsCount - 1;
if (window.obj1548_onTap_runningActionsCount == 0) {
	obj1548_onTap_actionGroup1();
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
		setTimeout(hide_1550(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1548_onTap_runningActionsCount = window.obj1548_onTap_runningActionsCount - 1;
if (window.obj1548_onTap_runningActionsCount == 0) {
	obj1548_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1516 
hide_1551();
function hide_1551() {
	var element = "#obj1516";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1548_onTap_runningActionsCount = obj1548_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOutDown";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1548_onTap_runningActionsCount = window.obj1548_onTap_runningActionsCount - 1;
if (window.obj1548_onTap_runningActionsCount == 0) {
	obj1548_onTap_actionGroup1();
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
		setTimeout(hide_1551(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1548_onTap_runningActionsCount = window.obj1548_onTap_runningActionsCount - 1;
if (window.obj1548_onTap_runningActionsCount == 0) {
	obj1548_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj1531 
show_1600();
function show_1600() {
	var element = "#obj1531";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1548_onTap_runningActionsCount = obj1548_onTap_runningActionsCount + 1;

	var animationType = "fadeInDown";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1548_onTap_runningActionsCount = window.obj1548_onTap_runningActionsCount - 1;
if (window.obj1548_onTap_runningActionsCount == 0) {
	obj1548_onTap_actionGroup1();
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
		window.obj1548_onTap_runningActionsCount = window.obj1548_onTap_runningActionsCount - 1;
if (window.obj1548_onTap_runningActionsCount == 0) {
	obj1548_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1548_onTap_runningActionsCount = window.obj1548_onTap_runningActionsCount - 1;
if (window.obj1548_onTap_runningActionsCount == 0) {
	obj1548_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1548_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1548_onTap_activeActionGroupIndex = -1;
		$("#obj1548").trigger("obj1548_onTap_ended");
		
		return;
	}
	window.obj1548_onTap_activeActionGroupIndex = 1;
	





















};
obj1544_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1544_onTap_activeActionGroupIndex = -1;
		$("#obj1544").trigger("obj1544_onTap_ended");
		
		return;
	}
	window.obj1544_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1544 
hide_1546();
function hide_1546() {
	var element = "#obj1544";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1544_onTap_runningActionsCount = obj1544_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1544_onTap_runningActionsCount = window.obj1544_onTap_runningActionsCount - 1;
if (window.obj1544_onTap_runningActionsCount == 0) {
	obj1544_onTap_actionGroup1();
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
		setTimeout(hide_1546(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1544_onTap_runningActionsCount = window.obj1544_onTap_runningActionsCount - 1;
if (window.obj1544_onTap_runningActionsCount == 0) {
	obj1544_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1532 
hide_1547();
function hide_1547() {
	var element = "#obj1532";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1544_onTap_runningActionsCount = obj1544_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOutDown";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1544_onTap_runningActionsCount = window.obj1544_onTap_runningActionsCount - 1;
if (window.obj1544_onTap_runningActionsCount == 0) {
	obj1544_onTap_actionGroup1();
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
		setTimeout(hide_1547(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1544_onTap_runningActionsCount = window.obj1544_onTap_runningActionsCount - 1;
if (window.obj1544_onTap_runningActionsCount == 0) {
	obj1544_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj1516 
show_1552();
function show_1552() {
	var element = "#obj1516";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1544_onTap_runningActionsCount = obj1544_onTap_runningActionsCount + 1;

	var animationType = "fadeInDown";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1544_onTap_runningActionsCount = window.obj1544_onTap_runningActionsCount - 1;
if (window.obj1544_onTap_runningActionsCount == 0) {
	obj1544_onTap_actionGroup1();
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
		window.obj1544_onTap_runningActionsCount = window.obj1544_onTap_runningActionsCount - 1;
if (window.obj1544_onTap_runningActionsCount == 0) {
	obj1544_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1544_onTap_runningActionsCount = window.obj1544_onTap_runningActionsCount - 1;
if (window.obj1544_onTap_runningActionsCount == 0) {
	obj1544_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1544_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1544_onTap_activeActionGroupIndex = -1;
		$("#obj1544").trigger("obj1544_onTap_ended");
		
		return;
	}
	window.obj1544_onTap_activeActionGroupIndex = 1;
	





















};
obj1540_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1540_onTap_activeActionGroupIndex = -1;
		$("#obj1540").trigger("obj1540_onTap_ended");
		
		return;
	}
	window.obj1540_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1540 
hide_1542();
function hide_1542() {
	var element = "#obj1540";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1540_onTap_runningActionsCount = obj1540_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1540_onTap_runningActionsCount = window.obj1540_onTap_runningActionsCount - 1;
if (window.obj1540_onTap_runningActionsCount == 0) {
	obj1540_onTap_actionGroup1();
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
		setTimeout(hide_1542(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1540_onTap_runningActionsCount = window.obj1540_onTap_runningActionsCount - 1;
if (window.obj1540_onTap_runningActionsCount == 0) {
	obj1540_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1533 
hide_1543();
function hide_1543() {
	var element = "#obj1533";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1540_onTap_runningActionsCount = obj1540_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOutDown";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1540_onTap_runningActionsCount = window.obj1540_onTap_runningActionsCount - 1;
if (window.obj1540_onTap_runningActionsCount == 0) {
	obj1540_onTap_actionGroup1();
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
		setTimeout(hide_1543(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1540_onTap_runningActionsCount = window.obj1540_onTap_runningActionsCount - 1;
if (window.obj1540_onTap_runningActionsCount == 0) {
	obj1540_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj1532 
show_1595();
function show_1595() {
	var element = "#obj1532";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1540_onTap_runningActionsCount = obj1540_onTap_runningActionsCount + 1;

	var animationType = "fadeInDown";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1540_onTap_runningActionsCount = window.obj1540_onTap_runningActionsCount - 1;
if (window.obj1540_onTap_runningActionsCount == 0) {
	obj1540_onTap_actionGroup1();
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
		window.obj1540_onTap_runningActionsCount = window.obj1540_onTap_runningActionsCount - 1;
if (window.obj1540_onTap_runningActionsCount == 0) {
	obj1540_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1540_onTap_runningActionsCount = window.obj1540_onTap_runningActionsCount - 1;
if (window.obj1540_onTap_runningActionsCount == 0) {
	obj1540_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1540_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1540_onTap_activeActionGroupIndex = -1;
		$("#obj1540").trigger("obj1540_onTap_ended");
		
		return;
	}
	window.obj1540_onTap_activeActionGroupIndex = 1;
	





















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
 *   obj1596: Event Touch Down
 *
 */
 
$("#obj1596").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1596_onTap_activeActionGroupIndex != -1) return;
var obj1596_onTap_runningActionsCount = 0;
var obj1596_onTap_loopCount = 0;
obj1596_onTap_actionGroup0();
});














/*
 *
 *   obj1577: Event Touch Down
 *
 */
 
$("#obj1577").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1577_onTap_activeActionGroupIndex != -1) return;
var obj1577_onTap_runningActionsCount = 0;
var obj1577_onTap_loopCount = 0;
obj1577_onTap_actionGroup0();
});














/*
 *
 *   obj1573: Event Touch Down
 *
 */
 
$("#obj1573").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1573_onTap_activeActionGroupIndex != -1) return;
var obj1573_onTap_runningActionsCount = 0;
var obj1573_onTap_loopCount = 0;
obj1573_onTap_actionGroup0();
});














/*
 *
 *   obj1569: Event Touch Down
 *
 */
 
$("#obj1569").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1569_onTap_activeActionGroupIndex != -1) return;
var obj1569_onTap_runningActionsCount = 0;
var obj1569_onTap_loopCount = 0;
obj1569_onTap_actionGroup0();
});














/*
 *
 *   obj1565: Event Touch Down
 *
 */
 
$("#obj1565").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1565_onTap_activeActionGroupIndex != -1) return;
var obj1565_onTap_runningActionsCount = 0;
var obj1565_onTap_loopCount = 0;
obj1565_onTap_actionGroup0();
});














/*
 *
 *   obj1561: Event Touch Down
 *
 */
 
$("#obj1561").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1561_onTap_activeActionGroupIndex != -1) return;
var obj1561_onTap_runningActionsCount = 0;
var obj1561_onTap_loopCount = 0;
obj1561_onTap_actionGroup0();
});














/*
 *
 *   obj1557: Event Touch Down
 *
 */
 
$("#obj1557").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1557_onTap_activeActionGroupIndex != -1) return;
var obj1557_onTap_runningActionsCount = 0;
var obj1557_onTap_loopCount = 0;
obj1557_onTap_actionGroup0();
});














/*
 *
 *   obj1553: Event Touch Down
 *
 */
 
$("#obj1553").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1553_onTap_activeActionGroupIndex != -1) return;
var obj1553_onTap_runningActionsCount = 0;
var obj1553_onTap_loopCount = 0;
obj1553_onTap_actionGroup0();
});














/*
 *
 *   obj1548: Event Touch Down
 *
 */
 
$("#obj1548").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1548_onTap_activeActionGroupIndex != -1) return;
var obj1548_onTap_runningActionsCount = 0;
var obj1548_onTap_loopCount = 0;
obj1548_onTap_actionGroup0();
});














/*
 *
 *   obj1544: Event Touch Down
 *
 */
 
$("#obj1544").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1544_onTap_activeActionGroupIndex != -1) return;
var obj1544_onTap_runningActionsCount = 0;
var obj1544_onTap_loopCount = 0;
obj1544_onTap_actionGroup0();
});














/*
 *
 *   obj1540: Event Touch Down
 *
 */
 
$("#obj1540").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1540_onTap_activeActionGroupIndex != -1) return;
var obj1540_onTap_runningActionsCount = 0;
var obj1540_onTap_loopCount = 0;
obj1540_onTap_actionGroup0();
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
	
$("#obj1520").trigger('SCEventShow');
$("#obj1596").trigger('SCEventShow');
$("#obj1577").trigger('SCEventShow');
$("#obj1573").trigger('SCEventShow');
$("#obj1569").trigger('SCEventShow');
$("#obj1565").trigger('SCEventShow');
$("#obj1561").trigger('SCEventShow');
$("#obj1557").trigger('SCEventShow');
$("#obj1553").trigger('SCEventShow');
$("#obj1548").trigger('SCEventShow');
$("#obj1544").trigger('SCEventShow');
$("#obj1533").trigger('SCEventShow');
$("#obj1540").trigger('SCEventShow');
$("#obj2049").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});