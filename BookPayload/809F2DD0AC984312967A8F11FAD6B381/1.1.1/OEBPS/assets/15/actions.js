pubcoder.projectID = "9706FB5C04CD460A85938C3898CAD20C";
pubcoder.project.id = "9706FB5C04CD460A85938C3898CAD20C";
pubcoder.project.title = "Medieval Resources";
pubcoder.page.id = 7932;
pubcoder.page.title = "15";
pubcoder.page.number = 15;
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
var obj7953_onTap_activeActionGroupIndex = -1;
var obj7953_onTap_runningActionsCount = 0;
var obj7953_onTap_loopCount = 0;
var obj7955_onShow_activeActionGroupIndex = -1;
var obj7955_onShow_runningActionsCount = 0;
var obj7955_onShow_loopCount = 0;
var obj7962_onTap_activeActionGroupIndex = -1;
var obj7962_onTap_runningActionsCount = 0;
var obj7962_onTap_loopCount = 0;
var obj7964_onShow_activeActionGroupIndex = -1;
var obj7964_onShow_runningActionsCount = 0;
var obj7964_onShow_loopCount = 0;
var obj7983_onTap_activeActionGroupIndex = -1;
var obj7983_onTap_runningActionsCount = 0;
var obj7983_onTap_loopCount = 0;
var obj7991_onTap_activeActionGroupIndex = -1;
var obj7991_onTap_runningActionsCount = 0;
var obj7991_onTap_loopCount = 0;
var obj8016_onTap_activeActionGroupIndex = -1;
var obj8016_onTap_runningActionsCount = 0;
var obj8016_onTap_loopCount = 0;
var obj4097_onTap_activeActionGroupIndex = -1;
var obj4097_onTap_runningActionsCount = 0;
var obj4097_onTap_loopCount = 0;
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
		
obj7953_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7953_onTap_activeActionGroupIndex = -1;
		$("#obj7953").trigger("obj7953_onTap_ended");
		
		return;
	}
	window.obj7953_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj7955 
show_7974();
function show_7974() {
	var element = "#obj7955";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj7953_onTap_runningActionsCount = obj7953_onTap_runningActionsCount + 1;

	var animationType = "zoomIn";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj7953_onTap_runningActionsCount = window.obj7953_onTap_runningActionsCount - 1;
if (window.obj7953_onTap_runningActionsCount == 0) {
	obj7953_onTap_actionGroup1();
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
		window.obj7953_onTap_runningActionsCount = window.obj7953_onTap_runningActionsCount - 1;
if (window.obj7953_onTap_runningActionsCount == 0) {
	obj7953_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(500, function() {
	// 		setTimeout(function() {
	// 			window.obj7953_onTap_runningActionsCount = window.obj7953_onTap_runningActionsCount - 1;
if (window.obj7953_onTap_runningActionsCount == 0) {
	obj7953_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj7953_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7953_onTap_activeActionGroupIndex = -1;
		$("#obj7953").trigger("obj7953_onTap_ended");
		
		return;
	}
	window.obj7953_onTap_activeActionGroupIndex = 1;
	





















};
obj7955_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7955_onShow_activeActionGroupIndex = -1;
		$("#obj7955").trigger("obj7955_onShow_ended");
		
		return;
	}
	window.obj7955_onShow_activeActionGroupIndex = 0;
	








//	action: wait
wait_7975();
function wait_7975() {
	window.obj7955_onShow_runningActionsCount = obj7955_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj7955_onShow_runningActionsCount = window.obj7955_onShow_runningActionsCount - 1;
if (window.obj7955_onShow_runningActionsCount == 0) {
	obj7955_onShow_actionGroup1();
}
	}, 1000);
}












};
obj7955_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7955_onShow_activeActionGroupIndex = -1;
		$("#obj7955").trigger("obj7955_onShow_ended");
		
		return;
	}
	window.obj7955_onShow_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj7955 
hide_7976();
function hide_7976() {
	var element = "#obj7955";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7955_onShow_runningActionsCount = obj7955_onShow_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj7955_onShow_runningActionsCount = window.obj7955_onShow_runningActionsCount - 1;
if (window.obj7955_onShow_runningActionsCount == 0) {
	obj7955_onShow_actionGroup2();
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
		setTimeout(hide_7976(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj7955_onShow_runningActionsCount = window.obj7955_onShow_runningActionsCount - 1;
if (window.obj7955_onShow_runningActionsCount == 0) {
	obj7955_onShow_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj7955_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7955_onShow_activeActionGroupIndex = -1;
		$("#obj7955").trigger("obj7955_onShow_ended");
		
		return;
	}
	window.obj7955_onShow_activeActionGroupIndex = 2;
	





















};
obj7962_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7962_onTap_activeActionGroupIndex = -1;
		$("#obj7962").trigger("obj7962_onTap_ended");
		
		return;
	}
	window.obj7962_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj7964 
show_7969();
function show_7969() {
	var element = "#obj7964";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj7962_onTap_runningActionsCount = obj7962_onTap_runningActionsCount + 1;

	var animationType = "zoomIn";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj7962_onTap_runningActionsCount = window.obj7962_onTap_runningActionsCount - 1;
if (window.obj7962_onTap_runningActionsCount == 0) {
	obj7962_onTap_actionGroup1();
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
		window.obj7962_onTap_runningActionsCount = window.obj7962_onTap_runningActionsCount - 1;
if (window.obj7962_onTap_runningActionsCount == 0) {
	obj7962_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(500, function() {
	// 		setTimeout(function() {
	// 			window.obj7962_onTap_runningActionsCount = window.obj7962_onTap_runningActionsCount - 1;
if (window.obj7962_onTap_runningActionsCount == 0) {
	obj7962_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj7962_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7962_onTap_activeActionGroupIndex = -1;
		$("#obj7962").trigger("obj7962_onTap_ended");
		
		return;
	}
	window.obj7962_onTap_activeActionGroupIndex = 1;
	








//	action: wait
wait_8006();
function wait_8006() {
	window.obj7962_onTap_runningActionsCount = obj7962_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj7962_onTap_runningActionsCount = window.obj7962_onTap_runningActionsCount - 1;
if (window.obj7962_onTap_runningActionsCount == 0) {
	obj7962_onTap_actionGroup2();
}
	}, 300);
}












};
obj7962_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7962_onTap_activeActionGroupIndex = -1;
		$("#obj7962").trigger("obj7962_onTap_ended");
		
		return;
	}
	window.obj7962_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	target: obj7962 
hide_7970();
function hide_7970() {
	var element = "#obj7962";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7962_onTap_runningActionsCount = obj7962_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj7962_onTap_runningActionsCount = window.obj7962_onTap_runningActionsCount - 1;
if (window.obj7962_onTap_runningActionsCount == 0) {
	obj7962_onTap_actionGroup3();
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
		setTimeout(hide_7970(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj7962_onTap_runningActionsCount = window.obj7962_onTap_runningActionsCount - 1;
if (window.obj7962_onTap_runningActionsCount == 0) {
	obj7962_onTap_actionGroup3();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj7949 
hide_7971();
function hide_7971() {
	var element = "#obj7949";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7962_onTap_runningActionsCount = obj7962_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj7962_onTap_runningActionsCount = window.obj7962_onTap_runningActionsCount - 1;
if (window.obj7962_onTap_runningActionsCount == 0) {
	obj7962_onTap_actionGroup3();
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
		setTimeout(hide_7971(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj7962_onTap_runningActionsCount = window.obj7962_onTap_runningActionsCount - 1;
if (window.obj7962_onTap_runningActionsCount == 0) {
	obj7962_onTap_actionGroup3();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj7977 
hide_7981();
function hide_7981() {
	var element = "#obj7977";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7962_onTap_runningActionsCount = obj7962_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj7962_onTap_runningActionsCount = window.obj7962_onTap_runningActionsCount - 1;
if (window.obj7962_onTap_runningActionsCount == 0) {
	obj7962_onTap_actionGroup3();
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
		setTimeout(hide_7981(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj7962_onTap_runningActionsCount = window.obj7962_onTap_runningActionsCount - 1;
if (window.obj7962_onTap_runningActionsCount == 0) {
	obj7962_onTap_actionGroup3();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj7962_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7962_onTap_activeActionGroupIndex = -1;
		$("#obj7962").trigger("obj7962_onTap_ended");
		
		return;
	}
	window.obj7962_onTap_activeActionGroupIndex = 3;
	

//	action: show 
//	target: obj7979 
show_7982();
function show_7982() {
	var element = "#obj7979";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj7962_onTap_runningActionsCount = obj7962_onTap_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj7962_onTap_runningActionsCount = window.obj7962_onTap_runningActionsCount - 1;
if (window.obj7962_onTap_runningActionsCount == 0) {
	obj7962_onTap_actionGroup4();
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
		window.obj7962_onTap_runningActionsCount = window.obj7962_onTap_runningActionsCount - 1;
if (window.obj7962_onTap_runningActionsCount == 0) {
	obj7962_onTap_actionGroup4();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj7962_onTap_runningActionsCount = window.obj7962_onTap_runningActionsCount - 1;
if (window.obj7962_onTap_runningActionsCount == 0) {
	obj7962_onTap_actionGroup4();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj7947 
show_7972();
function show_7972() {
	var element = "#obj7947";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj7962_onTap_runningActionsCount = obj7962_onTap_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj7962_onTap_runningActionsCount = window.obj7962_onTap_runningActionsCount - 1;
if (window.obj7962_onTap_runningActionsCount == 0) {
	obj7962_onTap_actionGroup4();
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
		window.obj7962_onTap_runningActionsCount = window.obj7962_onTap_runningActionsCount - 1;
if (window.obj7962_onTap_runningActionsCount == 0) {
	obj7962_onTap_actionGroup4();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj7962_onTap_runningActionsCount = window.obj7962_onTap_runningActionsCount - 1;
if (window.obj7962_onTap_runningActionsCount == 0) {
	obj7962_onTap_actionGroup4();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj7983 
show_8002();
function show_8002() {
	var element = "#obj7983";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj7962_onTap_runningActionsCount = obj7962_onTap_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj7962_onTap_runningActionsCount = window.obj7962_onTap_runningActionsCount - 1;
if (window.obj7962_onTap_runningActionsCount == 0) {
	obj7962_onTap_actionGroup4();
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
		window.obj7962_onTap_runningActionsCount = window.obj7962_onTap_runningActionsCount - 1;
if (window.obj7962_onTap_runningActionsCount == 0) {
	obj7962_onTap_actionGroup4();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj7962_onTap_runningActionsCount = window.obj7962_onTap_runningActionsCount - 1;
if (window.obj7962_onTap_runningActionsCount == 0) {
	obj7962_onTap_actionGroup4();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj7962_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7962_onTap_activeActionGroupIndex = -1;
		$("#obj7962").trigger("obj7962_onTap_ended");
		
		return;
	}
	window.obj7962_onTap_activeActionGroupIndex = 4;
	





















};
obj7964_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7964_onShow_activeActionGroupIndex = -1;
		$("#obj7964").trigger("obj7964_onShow_ended");
		
		return;
	}
	window.obj7964_onShow_activeActionGroupIndex = 0;
	








//	action: wait
wait_7967();
function wait_7967() {
	window.obj7964_onShow_runningActionsCount = obj7964_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj7964_onShow_runningActionsCount = window.obj7964_onShow_runningActionsCount - 1;
if (window.obj7964_onShow_runningActionsCount == 0) {
	obj7964_onShow_actionGroup1();
}
	}, 500);
}












};
obj7964_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7964_onShow_activeActionGroupIndex = -1;
		$("#obj7964").trigger("obj7964_onShow_ended");
		
		return;
	}
	window.obj7964_onShow_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj7964 
hide_7968();
function hide_7968() {
	var element = "#obj7964";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7964_onShow_runningActionsCount = obj7964_onShow_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj7964_onShow_runningActionsCount = window.obj7964_onShow_runningActionsCount - 1;
if (window.obj7964_onShow_runningActionsCount == 0) {
	obj7964_onShow_actionGroup2();
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
		setTimeout(hide_7968(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj7964_onShow_runningActionsCount = window.obj7964_onShow_runningActionsCount - 1;
if (window.obj7964_onShow_runningActionsCount == 0) {
	obj7964_onShow_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj7964_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7964_onShow_activeActionGroupIndex = -1;
		$("#obj7964").trigger("obj7964_onShow_ended");
		
		return;
	}
	window.obj7964_onShow_activeActionGroupIndex = 2;
	





















};
obj7983_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7983_onTap_activeActionGroupIndex = -1;
		$("#obj7983").trigger("obj7983_onTap_ended");
		
		return;
	}
	window.obj7983_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj7964 
show_7985();
function show_7985() {
	var element = "#obj7964";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj7983_onTap_runningActionsCount = obj7983_onTap_runningActionsCount + 1;

	var animationType = "zoomIn";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj7983_onTap_runningActionsCount = window.obj7983_onTap_runningActionsCount - 1;
if (window.obj7983_onTap_runningActionsCount == 0) {
	obj7983_onTap_actionGroup1();
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
		window.obj7983_onTap_runningActionsCount = window.obj7983_onTap_runningActionsCount - 1;
if (window.obj7983_onTap_runningActionsCount == 0) {
	obj7983_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(500, function() {
	// 		setTimeout(function() {
	// 			window.obj7983_onTap_runningActionsCount = window.obj7983_onTap_runningActionsCount - 1;
if (window.obj7983_onTap_runningActionsCount == 0) {
	obj7983_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj7983_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7983_onTap_activeActionGroupIndex = -1;
		$("#obj7983").trigger("obj7983_onTap_ended");
		
		return;
	}
	window.obj7983_onTap_activeActionGroupIndex = 1;
	








//	action: wait
wait_8007();
function wait_8007() {
	window.obj7983_onTap_runningActionsCount = obj7983_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj7983_onTap_runningActionsCount = window.obj7983_onTap_runningActionsCount - 1;
if (window.obj7983_onTap_runningActionsCount == 0) {
	obj7983_onTap_actionGroup2();
}
	}, 300);
}












};
obj7983_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7983_onTap_activeActionGroupIndex = -1;
		$("#obj7983").trigger("obj7983_onTap_ended");
		
		return;
	}
	window.obj7983_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	target: obj7983 
hide_7986();
function hide_7986() {
	var element = "#obj7983";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7983_onTap_runningActionsCount = obj7983_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj7983_onTap_runningActionsCount = window.obj7983_onTap_runningActionsCount - 1;
if (window.obj7983_onTap_runningActionsCount == 0) {
	obj7983_onTap_actionGroup3();
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
		setTimeout(hide_7986(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj7983_onTap_runningActionsCount = window.obj7983_onTap_runningActionsCount - 1;
if (window.obj7983_onTap_runningActionsCount == 0) {
	obj7983_onTap_actionGroup3();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj7947 
hide_7987();
function hide_7987() {
	var element = "#obj7947";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7983_onTap_runningActionsCount = obj7983_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj7983_onTap_runningActionsCount = window.obj7983_onTap_runningActionsCount - 1;
if (window.obj7983_onTap_runningActionsCount == 0) {
	obj7983_onTap_actionGroup3();
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
		setTimeout(hide_7987(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj7983_onTap_runningActionsCount = window.obj7983_onTap_runningActionsCount - 1;
if (window.obj7983_onTap_runningActionsCount == 0) {
	obj7983_onTap_actionGroup3();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj7979 
hide_7988();
function hide_7988() {
	var element = "#obj7979";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7983_onTap_runningActionsCount = obj7983_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj7983_onTap_runningActionsCount = window.obj7983_onTap_runningActionsCount - 1;
if (window.obj7983_onTap_runningActionsCount == 0) {
	obj7983_onTap_actionGroup3();
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
		setTimeout(hide_7988(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj7983_onTap_runningActionsCount = window.obj7983_onTap_runningActionsCount - 1;
if (window.obj7983_onTap_runningActionsCount == 0) {
	obj7983_onTap_actionGroup3();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj7983_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7983_onTap_activeActionGroupIndex = -1;
		$("#obj7983").trigger("obj7983_onTap_ended");
		
		return;
	}
	window.obj7983_onTap_activeActionGroupIndex = 3;
	

//	action: show 
//	target: obj7999 
show_7989();
function show_7989() {
	var element = "#obj7999";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj7983_onTap_runningActionsCount = obj7983_onTap_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj7983_onTap_runningActionsCount = window.obj7983_onTap_runningActionsCount - 1;
if (window.obj7983_onTap_runningActionsCount == 0) {
	obj7983_onTap_actionGroup4();
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
		window.obj7983_onTap_runningActionsCount = window.obj7983_onTap_runningActionsCount - 1;
if (window.obj7983_onTap_runningActionsCount == 0) {
	obj7983_onTap_actionGroup4();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj7983_onTap_runningActionsCount = window.obj7983_onTap_runningActionsCount - 1;
if (window.obj7983_onTap_runningActionsCount == 0) {
	obj7983_onTap_actionGroup4();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj7946 
show_7990();
function show_7990() {
	var element = "#obj7946";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj7983_onTap_runningActionsCount = obj7983_onTap_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj7983_onTap_runningActionsCount = window.obj7983_onTap_runningActionsCount - 1;
if (window.obj7983_onTap_runningActionsCount == 0) {
	obj7983_onTap_actionGroup4();
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
		window.obj7983_onTap_runningActionsCount = window.obj7983_onTap_runningActionsCount - 1;
if (window.obj7983_onTap_runningActionsCount == 0) {
	obj7983_onTap_actionGroup4();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj7983_onTap_runningActionsCount = window.obj7983_onTap_runningActionsCount - 1;
if (window.obj7983_onTap_runningActionsCount == 0) {
	obj7983_onTap_actionGroup4();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj7991 
show_8003();
function show_8003() {
	var element = "#obj7991";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj7983_onTap_runningActionsCount = obj7983_onTap_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj7983_onTap_runningActionsCount = window.obj7983_onTap_runningActionsCount - 1;
if (window.obj7983_onTap_runningActionsCount == 0) {
	obj7983_onTap_actionGroup4();
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
		window.obj7983_onTap_runningActionsCount = window.obj7983_onTap_runningActionsCount - 1;
if (window.obj7983_onTap_runningActionsCount == 0) {
	obj7983_onTap_actionGroup4();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj7983_onTap_runningActionsCount = window.obj7983_onTap_runningActionsCount - 1;
if (window.obj7983_onTap_runningActionsCount == 0) {
	obj7983_onTap_actionGroup4();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj7983_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7983_onTap_activeActionGroupIndex = -1;
		$("#obj7983").trigger("obj7983_onTap_ended");
		
		return;
	}
	window.obj7983_onTap_activeActionGroupIndex = 4;
	





















};
obj7991_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7991_onTap_activeActionGroupIndex = -1;
		$("#obj7991").trigger("obj7991_onTap_ended");
		
		return;
	}
	window.obj7991_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj7964 
show_7993();
function show_7993() {
	var element = "#obj7964";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj7991_onTap_runningActionsCount = obj7991_onTap_runningActionsCount + 1;

	var animationType = "zoomIn";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj7991_onTap_runningActionsCount = window.obj7991_onTap_runningActionsCount - 1;
if (window.obj7991_onTap_runningActionsCount == 0) {
	obj7991_onTap_actionGroup1();
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
		window.obj7991_onTap_runningActionsCount = window.obj7991_onTap_runningActionsCount - 1;
if (window.obj7991_onTap_runningActionsCount == 0) {
	obj7991_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(500, function() {
	// 		setTimeout(function() {
	// 			window.obj7991_onTap_runningActionsCount = window.obj7991_onTap_runningActionsCount - 1;
if (window.obj7991_onTap_runningActionsCount == 0) {
	obj7991_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj7991_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7991_onTap_activeActionGroupIndex = -1;
		$("#obj7991").trigger("obj7991_onTap_ended");
		
		return;
	}
	window.obj7991_onTap_activeActionGroupIndex = 1;
	








//	action: wait
wait_8008();
function wait_8008() {
	window.obj7991_onTap_runningActionsCount = obj7991_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj7991_onTap_runningActionsCount = window.obj7991_onTap_runningActionsCount - 1;
if (window.obj7991_onTap_runningActionsCount == 0) {
	obj7991_onTap_actionGroup2();
}
	}, 300);
}












};
obj7991_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7991_onTap_activeActionGroupIndex = -1;
		$("#obj7991").trigger("obj7991_onTap_ended");
		
		return;
	}
	window.obj7991_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	target: obj7991 
hide_7994();
function hide_7994() {
	var element = "#obj7991";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7991_onTap_runningActionsCount = obj7991_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj7991_onTap_runningActionsCount = window.obj7991_onTap_runningActionsCount - 1;
if (window.obj7991_onTap_runningActionsCount == 0) {
	obj7991_onTap_actionGroup3();
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
		setTimeout(hide_7994(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj7991_onTap_runningActionsCount = window.obj7991_onTap_runningActionsCount - 1;
if (window.obj7991_onTap_runningActionsCount == 0) {
	obj7991_onTap_actionGroup3();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj7947 
hide_7995();
function hide_7995() {
	var element = "#obj7947";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7991_onTap_runningActionsCount = obj7991_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj7991_onTap_runningActionsCount = window.obj7991_onTap_runningActionsCount - 1;
if (window.obj7991_onTap_runningActionsCount == 0) {
	obj7991_onTap_actionGroup3();
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
		setTimeout(hide_7995(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj7991_onTap_runningActionsCount = window.obj7991_onTap_runningActionsCount - 1;
if (window.obj7991_onTap_runningActionsCount == 0) {
	obj7991_onTap_actionGroup3();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj7999 
hide_7996();
function hide_7996() {
	var element = "#obj7999";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7991_onTap_runningActionsCount = obj7991_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj7991_onTap_runningActionsCount = window.obj7991_onTap_runningActionsCount - 1;
if (window.obj7991_onTap_runningActionsCount == 0) {
	obj7991_onTap_actionGroup3();
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
		setTimeout(hide_7996(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj7991_onTap_runningActionsCount = window.obj7991_onTap_runningActionsCount - 1;
if (window.obj7991_onTap_runningActionsCount == 0) {
	obj7991_onTap_actionGroup3();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj7946 
hide_8004();
function hide_8004() {
	var element = "#obj7946";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7991_onTap_runningActionsCount = obj7991_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj7991_onTap_runningActionsCount = window.obj7991_onTap_runningActionsCount - 1;
if (window.obj7991_onTap_runningActionsCount == 0) {
	obj7991_onTap_actionGroup3();
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
		setTimeout(hide_8004(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj7991_onTap_runningActionsCount = window.obj7991_onTap_runningActionsCount - 1;
if (window.obj7991_onTap_runningActionsCount == 0) {
	obj7991_onTap_actionGroup3();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj7953 
hide_8005();
function hide_8005() {
	var element = "#obj7953";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7991_onTap_runningActionsCount = obj7991_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj7991_onTap_runningActionsCount = window.obj7991_onTap_runningActionsCount - 1;
if (window.obj7991_onTap_runningActionsCount == 0) {
	obj7991_onTap_actionGroup3();
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
		setTimeout(hide_8005(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj7991_onTap_runningActionsCount = window.obj7991_onTap_runningActionsCount - 1;
if (window.obj7991_onTap_runningActionsCount == 0) {
	obj7991_onTap_actionGroup3();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj7991_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7991_onTap_activeActionGroupIndex = -1;
		$("#obj7991").trigger("obj7991_onTap_ended");
		
		return;
	}
	window.obj7991_onTap_activeActionGroupIndex = 3;
	

//	action: show 
//	target: obj8012 
show_8014();
function show_8014() {
	var element = "#obj8012";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj7991_onTap_runningActionsCount = obj7991_onTap_runningActionsCount + 1;

	var animationType = "zoomIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj7991_onTap_runningActionsCount = window.obj7991_onTap_runningActionsCount - 1;
if (window.obj7991_onTap_runningActionsCount == 0) {
	obj7991_onTap_actionGroup4();
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
		window.obj7991_onTap_runningActionsCount = window.obj7991_onTap_runningActionsCount - 1;
if (window.obj7991_onTap_runningActionsCount == 0) {
	obj7991_onTap_actionGroup4();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj7991_onTap_runningActionsCount = window.obj7991_onTap_runningActionsCount - 1;
if (window.obj7991_onTap_runningActionsCount == 0) {
	obj7991_onTap_actionGroup4();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj8010 
show_8015();
function show_8015() {
	var element = "#obj8010";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj7991_onTap_runningActionsCount = obj7991_onTap_runningActionsCount + 1;

	var animationType = "zoomIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj7991_onTap_runningActionsCount = window.obj7991_onTap_runningActionsCount - 1;
if (window.obj7991_onTap_runningActionsCount == 0) {
	obj7991_onTap_actionGroup4();
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
		window.obj7991_onTap_runningActionsCount = window.obj7991_onTap_runningActionsCount - 1;
if (window.obj7991_onTap_runningActionsCount == 0) {
	obj7991_onTap_actionGroup4();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj7991_onTap_runningActionsCount = window.obj7991_onTap_runningActionsCount - 1;
if (window.obj7991_onTap_runningActionsCount == 0) {
	obj7991_onTap_actionGroup4();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj7991_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7991_onTap_activeActionGroupIndex = -1;
		$("#obj7991").trigger("obj7991_onTap_ended");
		
		return;
	}
	window.obj7991_onTap_activeActionGroupIndex = 4;
	

//	action: show 
//	target: obj8016 
show_8020();
function show_8020() {
	var element = "#obj8016";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj7991_onTap_runningActionsCount = obj7991_onTap_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj7991_onTap_runningActionsCount = window.obj7991_onTap_runningActionsCount - 1;
if (window.obj7991_onTap_runningActionsCount == 0) {
	obj7991_onTap_actionGroup5();
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
		window.obj7991_onTap_runningActionsCount = window.obj7991_onTap_runningActionsCount - 1;
if (window.obj7991_onTap_runningActionsCount == 0) {
	obj7991_onTap_actionGroup5();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj7991_onTap_runningActionsCount = window.obj7991_onTap_runningActionsCount - 1;
if (window.obj7991_onTap_runningActionsCount == 0) {
	obj7991_onTap_actionGroup5();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj7991_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7991_onTap_activeActionGroupIndex = -1;
		$("#obj7991").trigger("obj7991_onTap_ended");
		
		return;
	}
	window.obj7991_onTap_activeActionGroupIndex = 5;
	





















};
obj8016_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8016_onTap_activeActionGroupIndex = -1;
		$("#obj8016").trigger("obj8016_onTap_ended");
		
		return;
	}
	window.obj8016_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page16
goToPage_8019();
function goToPage_8019() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../16/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(16))},200);
	}
}





















};
obj8016_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8016_onTap_activeActionGroupIndex = -1;
		$("#obj8016").trigger("obj8016_onTap_ended");
		
		return;
	}
	window.obj8016_onTap_activeActionGroupIndex = 1;
	





















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
 *   obj7953: Event Touch Down
 *
 */
 
$("#obj7953").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7953_onTap_activeActionGroupIndex != -1) return;
var obj7953_onTap_runningActionsCount = 0;
var obj7953_onTap_loopCount = 0;
obj7953_onTap_actionGroup0();
});








/*
 *
 *   obj7955: Event Show
 *
 */
 
$("#obj7955").bind('SCEventShow', function(event) {
	if (window.obj7955_onShow_activeActionGroupIndex != -1) return;
var obj7955_onShow_runningActionsCount = 0;
var obj7955_onShow_loopCount = 0;
obj7955_onShow_actionGroup0();
});





/*
 *
 *   obj7962: Event Touch Down
 *
 */
 
$("#obj7962").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7962_onTap_activeActionGroupIndex != -1) return;
var obj7962_onTap_runningActionsCount = 0;
var obj7962_onTap_loopCount = 0;
obj7962_onTap_actionGroup0();
});








/*
 *
 *   obj7964: Event Show
 *
 */
 
$("#obj7964").bind('SCEventShow', function(event) {
	if (window.obj7964_onShow_activeActionGroupIndex != -1) return;
var obj7964_onShow_runningActionsCount = 0;
var obj7964_onShow_loopCount = 0;
obj7964_onShow_actionGroup0();
});



















/*
 *
 *   obj7983: Event Touch Down
 *
 */
 
$("#obj7983").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7983_onTap_activeActionGroupIndex != -1) return;
var obj7983_onTap_runningActionsCount = 0;
var obj7983_onTap_loopCount = 0;
obj7983_onTap_actionGroup0();
});







/*
 *
 *   obj7991: Event Touch Down
 *
 */
 
$("#obj7991").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7991_onTap_activeActionGroupIndex != -1) return;
var obj7991_onTap_runningActionsCount = 0;
var obj7991_onTap_loopCount = 0;
obj7991_onTap_actionGroup0();
});




























/*
 *
 *   obj8016: Event Touch Down
 *
 */
 
$("#obj8016").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj8016_onTap_activeActionGroupIndex != -1) return;
var obj8016_onTap_runningActionsCount = 0;
var obj8016_onTap_loopCount = 0;
obj8016_onTap_actionGroup0();
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
	
$("#obj7933").trigger('SCEventShow');
$("#obj7949").trigger('SCEventShow');
$("#obj7953").trigger('SCEventShow');
$("#obj7962").trigger('SCEventShow');
$("#obj7977").trigger('SCEventShow');
$("#obj4097").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});