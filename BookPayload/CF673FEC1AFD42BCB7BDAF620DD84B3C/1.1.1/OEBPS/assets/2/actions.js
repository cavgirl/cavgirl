pubcoder.projectID = "9706FB5C04CD460A85938C3898CAD20C";
pubcoder.project.id = "9706FB5C04CD460A85938C3898CAD20C";
pubcoder.project.title = "Medieval Resources";
pubcoder.page.id = 2;
pubcoder.page.title = "2";
pubcoder.page.number = 2;
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
var obj2020_onLoad_activeActionGroupIndex = -1;
var obj2020_onLoad_runningActionsCount = 0;
var obj2020_onLoad_loopCount = 0;
var obj4120_onTap_activeActionGroupIndex = -1;
var obj4120_onTap_runningActionsCount = 0;
var obj4120_onTap_loopCount = 0;
var obj4124_onTap_activeActionGroupIndex = -1;
var obj4124_onTap_runningActionsCount = 0;
var obj4124_onTap_loopCount = 0;
var obj4126_onTap_activeActionGroupIndex = -1;
var obj4126_onTap_runningActionsCount = 0;
var obj4126_onTap_loopCount = 0;
var obj4122_onTap_activeActionGroupIndex = -1;
var obj4122_onTap_runningActionsCount = 0;
var obj4122_onTap_loopCount = 0;
var obj4303_onShow_activeActionGroupIndex = -1;
var obj4303_onShow_runningActionsCount = 0;
var obj4303_onShow_loopCount = 0;
var obj5749_onTap_activeActionGroupIndex = -1;
var obj5749_onTap_runningActionsCount = 0;
var obj5749_onTap_loopCount = 0;
var obj5737_onTap_activeActionGroupIndex = -1;
var obj5737_onTap_runningActionsCount = 0;
var obj5737_onTap_loopCount = 0;
var obj5735_onTap_activeActionGroupIndex = -1;
var obj5735_onTap_runningActionsCount = 0;
var obj5735_onTap_loopCount = 0;
var obj5732_onTap_activeActionGroupIndex = -1;
var obj5732_onTap_runningActionsCount = 0;
var obj5732_onTap_loopCount = 0;
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
		
obj2020_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2020_onLoad_activeActionGroupIndex = -1;
		$("#obj2020").trigger("obj2020_onLoad_ended");
		
		return;
	}
	window.obj2020_onLoad_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj4271 
show_4279();
function show_4279() {
	var element = "#obj4271";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj2020_onLoad_runningActionsCount = obj2020_onLoad_runningActionsCount + 1;

	var animationType = "bounceInLeft";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj2020_onLoad_runningActionsCount = window.obj2020_onLoad_runningActionsCount - 1;
if (window.obj2020_onLoad_runningActionsCount == 0) {
	obj2020_onLoad_actionGroup1();
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
		window.obj2020_onLoad_runningActionsCount = window.obj2020_onLoad_runningActionsCount - 1;
if (window.obj2020_onLoad_runningActionsCount == 0) {
	obj2020_onLoad_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj2020_onLoad_runningActionsCount = window.obj2020_onLoad_runningActionsCount - 1;
if (window.obj2020_onLoad_runningActionsCount == 0) {
	obj2020_onLoad_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj2020_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2020_onLoad_activeActionGroupIndex = -1;
		$("#obj2020").trigger("obj2020_onLoad_ended");
		
		return;
	}
	window.obj2020_onLoad_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj5732 
show_5739();
function show_5739() {
	var element = "#obj5732";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj2020_onLoad_runningActionsCount = obj2020_onLoad_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj2020_onLoad_runningActionsCount = window.obj2020_onLoad_runningActionsCount - 1;
if (window.obj2020_onLoad_runningActionsCount == 0) {
	obj2020_onLoad_actionGroup2();
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
		window.obj2020_onLoad_runningActionsCount = window.obj2020_onLoad_runningActionsCount - 1;
if (window.obj2020_onLoad_runningActionsCount == 0) {
	obj2020_onLoad_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj2020_onLoad_runningActionsCount = window.obj2020_onLoad_runningActionsCount - 1;
if (window.obj2020_onLoad_runningActionsCount == 0) {
	obj2020_onLoad_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj4371 
show_4280();
function show_4280() {
	var element = "#obj4371";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj2020_onLoad_runningActionsCount = obj2020_onLoad_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj2020_onLoad_runningActionsCount = window.obj2020_onLoad_runningActionsCount - 1;
if (window.obj2020_onLoad_runningActionsCount == 0) {
	obj2020_onLoad_actionGroup2();
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
		window.obj2020_onLoad_runningActionsCount = window.obj2020_onLoad_runningActionsCount - 1;
if (window.obj2020_onLoad_runningActionsCount == 0) {
	obj2020_onLoad_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(500, function() {
	// 		setTimeout(function() {
	// 			window.obj2020_onLoad_runningActionsCount = window.obj2020_onLoad_runningActionsCount - 1;
if (window.obj2020_onLoad_runningActionsCount == 0) {
	obj2020_onLoad_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj4281 
show_4283();
function show_4283() {
	var element = "#obj4281";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj2020_onLoad_runningActionsCount = obj2020_onLoad_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 700;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj2020_onLoad_runningActionsCount = window.obj2020_onLoad_runningActionsCount - 1;
if (window.obj2020_onLoad_runningActionsCount == 0) {
	obj2020_onLoad_actionGroup2();
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
		window.obj2020_onLoad_runningActionsCount = window.obj2020_onLoad_runningActionsCount - 1;
if (window.obj2020_onLoad_runningActionsCount == 0) {
	obj2020_onLoad_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(700, function() {
	// 		setTimeout(function() {
	// 			window.obj2020_onLoad_runningActionsCount = window.obj2020_onLoad_runningActionsCount - 1;
if (window.obj2020_onLoad_runningActionsCount == 0) {
	obj2020_onLoad_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj5730 
show_5734();
function show_5734() {
	var element = "#obj5730";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj2020_onLoad_runningActionsCount = obj2020_onLoad_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj2020_onLoad_runningActionsCount = window.obj2020_onLoad_runningActionsCount - 1;
if (window.obj2020_onLoad_runningActionsCount == 0) {
	obj2020_onLoad_actionGroup2();
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
		window.obj2020_onLoad_runningActionsCount = window.obj2020_onLoad_runningActionsCount - 1;
if (window.obj2020_onLoad_runningActionsCount == 0) {
	obj2020_onLoad_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj2020_onLoad_runningActionsCount = window.obj2020_onLoad_runningActionsCount - 1;
if (window.obj2020_onLoad_runningActionsCount == 0) {
	obj2020_onLoad_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj2020_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2020_onLoad_activeActionGroupIndex = -1;
		$("#obj2020").trigger("obj2020_onLoad_ended");
		
		return;
	}
	window.obj2020_onLoad_activeActionGroupIndex = 2;
	





















};
obj4120_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4120_onTap_activeActionGroupIndex = -1;
		$("#obj4120").trigger("obj4120_onTap_ended");
		
		return;
	}
	window.obj4120_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page9
goToPage_4129();
function goToPage_4129() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../9/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(9))},200);
	}
}





















};
obj4120_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4120_onTap_activeActionGroupIndex = -1;
		$("#obj4120").trigger("obj4120_onTap_ended");
		
		return;
	}
	window.obj4120_onTap_activeActionGroupIndex = 1;
	





















};
obj4124_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4124_onTap_activeActionGroupIndex = -1;
		$("#obj4124").trigger("obj4124_onTap_ended");
		
		return;
	}
	window.obj4124_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page12
goToPage_4131();
function goToPage_4131() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../12/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(12))},200);
	}
}





















};
obj4124_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4124_onTap_activeActionGroupIndex = -1;
		$("#obj4124").trigger("obj4124_onTap_ended");
		
		return;
	}
	window.obj4124_onTap_activeActionGroupIndex = 1;
	





















};
obj4126_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4126_onTap_activeActionGroupIndex = -1;
		$("#obj4126").trigger("obj4126_onTap_ended");
		
		return;
	}
	window.obj4126_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page6
goToPage_4130();
function goToPage_4130() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../6/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(6))},200);
	}
}





















};
obj4126_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4126_onTap_activeActionGroupIndex = -1;
		$("#obj4126").trigger("obj4126_onTap_ended");
		
		return;
	}
	window.obj4126_onTap_activeActionGroupIndex = 1;
	





















};
obj4122_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4122_onTap_activeActionGroupIndex = -1;
		$("#obj4122").trigger("obj4122_onTap_ended");
		
		return;
	}
	window.obj4122_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page4
goToPage_4128();
function goToPage_4128() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../4/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(4))},200);
	}
}





















};
obj4122_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4122_onTap_activeActionGroupIndex = -1;
		$("#obj4122").trigger("obj4122_onTap_ended");
		
		return;
	}
	window.obj4122_onTap_activeActionGroupIndex = 1;
	





















};
obj4303_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4303_onShow_activeActionGroupIndex = -1;
		$("#obj4303").trigger("obj4303_onShow_ended");
		
		return;
	}
	window.obj4303_onShow_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj4303 
move_4309();
function move_4309() {
	window.obj4303_onShow_runningActionsCount = obj4303_onShow_runningActionsCount + 1;

	var easing = "linear";
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
	var targetObject = $("#obj4303");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 759;
	var moveY = 60;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj4303_onShow_runningActionsCount = window.obj4303_onShow_runningActionsCount - 1;
if (window.obj4303_onShow_runningActionsCount == 0) {
	obj4303_onShow_actionGroup1();
}
		}, 1);
	});
}



















};
obj4303_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4303_onShow_activeActionGroupIndex = -1;
		$("#obj4303").trigger("obj4303_onShow_ended");
		
		return;
	}
	window.obj4303_onShow_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj4305 
show_4310();
function show_4310() {
	var element = "#obj4305";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj4303_onShow_runningActionsCount = obj4303_onShow_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj4303_onShow_runningActionsCount = window.obj4303_onShow_runningActionsCount - 1;
if (window.obj4303_onShow_runningActionsCount == 0) {
	obj4303_onShow_actionGroup2();
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
		window.obj4303_onShow_runningActionsCount = window.obj4303_onShow_runningActionsCount - 1;
if (window.obj4303_onShow_runningActionsCount == 0) {
	obj4303_onShow_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj4303_onShow_runningActionsCount = window.obj4303_onShow_runningActionsCount - 1;
if (window.obj4303_onShow_runningActionsCount == 0) {
	obj4303_onShow_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj4303_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4303_onShow_activeActionGroupIndex = -1;
		$("#obj4303").trigger("obj4303_onShow_ended");
		
		return;
	}
	window.obj4303_onShow_activeActionGroupIndex = 2;
	





















};
obj5749_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5749_onTap_activeActionGroupIndex = -1;
		$("#obj5749").trigger("obj5749_onTap_ended");
		
		return;
	}
	window.obj5749_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj5749 
hide_5762();
function hide_5762() {
	var element = "#obj5749";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5749_onTap_runningActionsCount = obj5749_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj5749_onTap_runningActionsCount = window.obj5749_onTap_runningActionsCount - 1;
if (window.obj5749_onTap_runningActionsCount == 0) {
	obj5749_onTap_actionGroup1();
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
		setTimeout(hide_5762(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj5749_onTap_runningActionsCount = window.obj5749_onTap_runningActionsCount - 1;
if (window.obj5749_onTap_runningActionsCount == 0) {
	obj5749_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj4281 
hide_5754();
function hide_5754() {
	var element = "#obj4281";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5749_onTap_runningActionsCount = obj5749_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj5749_onTap_runningActionsCount = window.obj5749_onTap_runningActionsCount - 1;
if (window.obj5749_onTap_runningActionsCount == 0) {
	obj5749_onTap_actionGroup1();
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
		setTimeout(hide_5754(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj5749_onTap_runningActionsCount = window.obj5749_onTap_runningActionsCount - 1;
if (window.obj5749_onTap_runningActionsCount == 0) {
	obj5749_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj4371 
hide_5755();
function hide_5755() {
	var element = "#obj4371";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5749_onTap_runningActionsCount = obj5749_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj5749_onTap_runningActionsCount = window.obj5749_onTap_runningActionsCount - 1;
if (window.obj5749_onTap_runningActionsCount == 0) {
	obj5749_onTap_actionGroup1();
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
		setTimeout(hide_5755(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj5749_onTap_runningActionsCount = window.obj5749_onTap_runningActionsCount - 1;
if (window.obj5749_onTap_runningActionsCount == 0) {
	obj5749_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj4271 
hide_5756();
function hide_5756() {
	var element = "#obj4271";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5749_onTap_runningActionsCount = obj5749_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOutLeftBig";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj5749_onTap_runningActionsCount = window.obj5749_onTap_runningActionsCount - 1;
if (window.obj5749_onTap_runningActionsCount == 0) {
	obj5749_onTap_actionGroup1();
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
		setTimeout(hide_5756(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj5749_onTap_runningActionsCount = window.obj5749_onTap_runningActionsCount - 1;
if (window.obj5749_onTap_runningActionsCount == 0) {
	obj5749_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj5749_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5749_onTap_activeActionGroupIndex = -1;
		$("#obj5749").trigger("obj5749_onTap_ended");
		
		return;
	}
	window.obj5749_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj4122 
show_5757();
function show_5757() {
	var element = "#obj4122";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj5749_onTap_runningActionsCount = obj5749_onTap_runningActionsCount + 1;

	var animationType = "rotateIn";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj5749_onTap_runningActionsCount = window.obj5749_onTap_runningActionsCount - 1;
if (window.obj5749_onTap_runningActionsCount == 0) {
	obj5749_onTap_actionGroup2();
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
		window.obj5749_onTap_runningActionsCount = window.obj5749_onTap_runningActionsCount - 1;
if (window.obj5749_onTap_runningActionsCount == 0) {
	obj5749_onTap_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(500, function() {
	// 		setTimeout(function() {
	// 			window.obj5749_onTap_runningActionsCount = window.obj5749_onTap_runningActionsCount - 1;
if (window.obj5749_onTap_runningActionsCount == 0) {
	obj5749_onTap_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj5749_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5749_onTap_activeActionGroupIndex = -1;
		$("#obj5749").trigger("obj5749_onTap_ended");
		
		return;
	}
	window.obj5749_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	target: obj4126 
show_5758();
function show_5758() {
	var element = "#obj4126";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj5749_onTap_runningActionsCount = obj5749_onTap_runningActionsCount + 1;

	var animationType = "rotateIn";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj5749_onTap_runningActionsCount = window.obj5749_onTap_runningActionsCount - 1;
if (window.obj5749_onTap_runningActionsCount == 0) {
	obj5749_onTap_actionGroup3();
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
		window.obj5749_onTap_runningActionsCount = window.obj5749_onTap_runningActionsCount - 1;
if (window.obj5749_onTap_runningActionsCount == 0) {
	obj5749_onTap_actionGroup3();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(500, function() {
	// 		setTimeout(function() {
	// 			window.obj5749_onTap_runningActionsCount = window.obj5749_onTap_runningActionsCount - 1;
if (window.obj5749_onTap_runningActionsCount == 0) {
	obj5749_onTap_actionGroup3();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj5749_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5749_onTap_activeActionGroupIndex = -1;
		$("#obj5749").trigger("obj5749_onTap_ended");
		
		return;
	}
	window.obj5749_onTap_activeActionGroupIndex = 3;
	

//	action: show 
//	target: obj4120 
show_5759();
function show_5759() {
	var element = "#obj4120";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj5749_onTap_runningActionsCount = obj5749_onTap_runningActionsCount + 1;

	var animationType = "rotateIn";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj5749_onTap_runningActionsCount = window.obj5749_onTap_runningActionsCount - 1;
if (window.obj5749_onTap_runningActionsCount == 0) {
	obj5749_onTap_actionGroup4();
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
		window.obj5749_onTap_runningActionsCount = window.obj5749_onTap_runningActionsCount - 1;
if (window.obj5749_onTap_runningActionsCount == 0) {
	obj5749_onTap_actionGroup4();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(500, function() {
	// 		setTimeout(function() {
	// 			window.obj5749_onTap_runningActionsCount = window.obj5749_onTap_runningActionsCount - 1;
if (window.obj5749_onTap_runningActionsCount == 0) {
	obj5749_onTap_actionGroup4();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj5749_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5749_onTap_activeActionGroupIndex = -1;
		$("#obj5749").trigger("obj5749_onTap_ended");
		
		return;
	}
	window.obj5749_onTap_activeActionGroupIndex = 4;
	

//	action: show 
//	target: obj4124 
show_5760();
function show_5760() {
	var element = "#obj4124";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj5749_onTap_runningActionsCount = obj5749_onTap_runningActionsCount + 1;

	var animationType = "rotateIn";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj5749_onTap_runningActionsCount = window.obj5749_onTap_runningActionsCount - 1;
if (window.obj5749_onTap_runningActionsCount == 0) {
	obj5749_onTap_actionGroup5();
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
		window.obj5749_onTap_runningActionsCount = window.obj5749_onTap_runningActionsCount - 1;
if (window.obj5749_onTap_runningActionsCount == 0) {
	obj5749_onTap_actionGroup5();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(500, function() {
	// 		setTimeout(function() {
	// 			window.obj5749_onTap_runningActionsCount = window.obj5749_onTap_runningActionsCount - 1;
if (window.obj5749_onTap_runningActionsCount == 0) {
	obj5749_onTap_actionGroup5();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj5749_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5749_onTap_activeActionGroupIndex = -1;
		$("#obj5749").trigger("obj5749_onTap_ended");
		
		return;
	}
	window.obj5749_onTap_activeActionGroupIndex = 5;
	

//	action: show 
//	target: obj4303 
show_5761();
function show_5761() {
	var element = "#obj4303";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj5749_onTap_runningActionsCount = obj5749_onTap_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj5749_onTap_runningActionsCount = window.obj5749_onTap_runningActionsCount - 1;
if (window.obj5749_onTap_runningActionsCount == 0) {
	obj5749_onTap_actionGroup6();
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
		window.obj5749_onTap_runningActionsCount = window.obj5749_onTap_runningActionsCount - 1;
if (window.obj5749_onTap_runningActionsCount == 0) {
	obj5749_onTap_actionGroup6();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(500, function() {
	// 		setTimeout(function() {
	// 			window.obj5749_onTap_runningActionsCount = window.obj5749_onTap_runningActionsCount - 1;
if (window.obj5749_onTap_runningActionsCount == 0) {
	obj5749_onTap_actionGroup6();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj5749_onTap_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5749_onTap_activeActionGroupIndex = -1;
		$("#obj5749").trigger("obj5749_onTap_ended");
		
		return;
	}
	window.obj5749_onTap_activeActionGroupIndex = 6;
	





















};
obj5737_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5737_onTap_activeActionGroupIndex = -1;
		$("#obj5737").trigger("obj5737_onTap_ended");
		
		return;
	}
	window.obj5737_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_5748();
function switchText_5748() {
	window.obj5737_onTap_runningActionsCount = obj5737_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p> </p><p>Time for some fun</p><p>around Carrickfergus! </p>";
	var switchTextFunction = function () {
		$("#obj4281").html(newHtml);
		setTimeout(function () {
			window.obj5737_onTap_runningActionsCount = window.obj5737_onTap_runningActionsCount - 1;
if (window.obj5737_onTap_runningActionsCount == 0) {
	obj5737_onTap_actionGroup1();
}
		}, 1);
	};
	if (fadeTime > 0) {
		var oldHtmlWrapped = "<div id=\"obj4281_old\" style=\"position:absolute; top:0px; width:100%;\">" + $("#obj4281").html() + "</div>";
		var newHtmlWrapped = "<div id=\"obj4281_new\" style=\"position:absolute; top:0px; width:100%; display:none;\">" + newHtml + "</div>";
		$("#obj4281").html(oldHtmlWrapped + newHtmlWrapped);
		$("#obj4281_old").fadeOut(fadeTime);
		$("#obj4281_new").fadeIn(fadeTime, switchTextFunction);
	} else {
		switchTextFunction();
	}
}





};
obj5737_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5737_onTap_activeActionGroupIndex = -1;
		$("#obj5737").trigger("obj5737_onTap_ended");
		
		return;
	}
	window.obj5737_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj5737 
hide_5745();
function hide_5745() {
	var element = "#obj5737";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5737_onTap_runningActionsCount = obj5737_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj5737_onTap_runningActionsCount = window.obj5737_onTap_runningActionsCount - 1;
if (window.obj5737_onTap_runningActionsCount == 0) {
	obj5737_onTap_actionGroup2();
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
		setTimeout(hide_5745(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj5737_onTap_runningActionsCount = window.obj5737_onTap_runningActionsCount - 1;
if (window.obj5737_onTap_runningActionsCount == 0) {
	obj5737_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj5749 
show_5753();
function show_5753() {
	var element = "#obj5749";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj5737_onTap_runningActionsCount = obj5737_onTap_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj5737_onTap_runningActionsCount = window.obj5737_onTap_runningActionsCount - 1;
if (window.obj5737_onTap_runningActionsCount == 0) {
	obj5737_onTap_actionGroup2();
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
		window.obj5737_onTap_runningActionsCount = window.obj5737_onTap_runningActionsCount - 1;
if (window.obj5737_onTap_runningActionsCount == 0) {
	obj5737_onTap_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj5737_onTap_runningActionsCount = window.obj5737_onTap_runningActionsCount - 1;
if (window.obj5737_onTap_runningActionsCount == 0) {
	obj5737_onTap_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj5737_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5737_onTap_activeActionGroupIndex = -1;
		$("#obj5737").trigger("obj5737_onTap_ended");
		
		return;
	}
	window.obj5737_onTap_activeActionGroupIndex = 2;
	





















};
obj5735_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5735_onTap_activeActionGroupIndex = -1;
		$("#obj5735").trigger("obj5735_onTap_ended");
		
		return;
	}
	window.obj5735_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_5747();
function switchText_5747() {
	window.obj5735_onTap_runningActionsCount = obj5735_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p> </p><p>Now I live in the Friary</p><p>with the friars.</p>";
	var switchTextFunction = function () {
		$("#obj4281").html(newHtml);
		setTimeout(function () {
			window.obj5735_onTap_runningActionsCount = window.obj5735_onTap_runningActionsCount - 1;
if (window.obj5735_onTap_runningActionsCount == 0) {
	obj5735_onTap_actionGroup1();
}
		}, 1);
	};
	if (fadeTime > 0) {
		var oldHtmlWrapped = "<div id=\"obj4281_old\" style=\"position:absolute; top:0px; width:100%;\">" + $("#obj4281").html() + "</div>";
		var newHtmlWrapped = "<div id=\"obj4281_new\" style=\"position:absolute; top:0px; width:100%; display:none;\">" + newHtml + "</div>";
		$("#obj4281").html(oldHtmlWrapped + newHtmlWrapped);
		$("#obj4281_old").fadeOut(fadeTime);
		$("#obj4281_new").fadeIn(fadeTime, switchTextFunction);
	} else {
		switchTextFunction();
	}
}





};
obj5735_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5735_onTap_activeActionGroupIndex = -1;
		$("#obj5735").trigger("obj5735_onTap_ended");
		
		return;
	}
	window.obj5735_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj5735 
hide_5743();
function hide_5743() {
	var element = "#obj5735";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5735_onTap_runningActionsCount = obj5735_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj5735_onTap_runningActionsCount = window.obj5735_onTap_runningActionsCount - 1;
if (window.obj5735_onTap_runningActionsCount == 0) {
	obj5735_onTap_actionGroup2();
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
		setTimeout(hide_5743(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj5735_onTap_runningActionsCount = window.obj5735_onTap_runningActionsCount - 1;
if (window.obj5735_onTap_runningActionsCount == 0) {
	obj5735_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj5737 
show_5744();
function show_5744() {
	var element = "#obj5737";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj5735_onTap_runningActionsCount = obj5735_onTap_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj5735_onTap_runningActionsCount = window.obj5735_onTap_runningActionsCount - 1;
if (window.obj5735_onTap_runningActionsCount == 0) {
	obj5735_onTap_actionGroup2();
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
		window.obj5735_onTap_runningActionsCount = window.obj5735_onTap_runningActionsCount - 1;
if (window.obj5735_onTap_runningActionsCount == 0) {
	obj5735_onTap_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj5735_onTap_runningActionsCount = window.obj5735_onTap_runningActionsCount - 1;
if (window.obj5735_onTap_runningActionsCount == 0) {
	obj5735_onTap_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj5735_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5735_onTap_activeActionGroupIndex = -1;
		$("#obj5735").trigger("obj5735_onTap_ended");
		
		return;
	}
	window.obj5735_onTap_activeActionGroupIndex = 2;
	





















};
obj5732_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5732_onTap_activeActionGroupIndex = -1;
		$("#obj5732").trigger("obj5732_onTap_ended");
		
		return;
	}
	window.obj5732_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_5740();
function switchText_5740() {
	window.obj5732_onTap_runningActionsCount = obj5732_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p>I came to Carrickfergus</p><p>in a big ship. <span class=\"apple-converted-space\"><br /></span></p><p> </p>";
	var switchTextFunction = function () {
		$("#obj4281").html(newHtml);
		setTimeout(function () {
			window.obj5732_onTap_runningActionsCount = window.obj5732_onTap_runningActionsCount - 1;
if (window.obj5732_onTap_runningActionsCount == 0) {
	obj5732_onTap_actionGroup1();
}
		}, 1);
	};
	if (fadeTime > 0) {
		var oldHtmlWrapped = "<div id=\"obj4281_old\" style=\"position:absolute; top:0px; width:100%;\">" + $("#obj4281").html() + "</div>";
		var newHtmlWrapped = "<div id=\"obj4281_new\" style=\"position:absolute; top:0px; width:100%; display:none;\">" + newHtml + "</div>";
		$("#obj4281").html(oldHtmlWrapped + newHtmlWrapped);
		$("#obj4281_old").fadeOut(fadeTime);
		$("#obj4281_new").fadeIn(fadeTime, switchTextFunction);
	} else {
		switchTextFunction();
	}
}





};
obj5732_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5732_onTap_activeActionGroupIndex = -1;
		$("#obj5732").trigger("obj5732_onTap_ended");
		
		return;
	}
	window.obj5732_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj5732 
hide_5741();
function hide_5741() {
	var element = "#obj5732";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5732_onTap_runningActionsCount = obj5732_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj5732_onTap_runningActionsCount = window.obj5732_onTap_runningActionsCount - 1;
if (window.obj5732_onTap_runningActionsCount == 0) {
	obj5732_onTap_actionGroup2();
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
		setTimeout(hide_5741(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj5732_onTap_runningActionsCount = window.obj5732_onTap_runningActionsCount - 1;
if (window.obj5732_onTap_runningActionsCount == 0) {
	obj5732_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj5735 
show_5742();
function show_5742() {
	var element = "#obj5735";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj5732_onTap_runningActionsCount = obj5732_onTap_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj5732_onTap_runningActionsCount = window.obj5732_onTap_runningActionsCount - 1;
if (window.obj5732_onTap_runningActionsCount == 0) {
	obj5732_onTap_actionGroup2();
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
		window.obj5732_onTap_runningActionsCount = window.obj5732_onTap_runningActionsCount - 1;
if (window.obj5732_onTap_runningActionsCount == 0) {
	obj5732_onTap_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj5732_onTap_runningActionsCount = window.obj5732_onTap_runningActionsCount - 1;
if (window.obj5732_onTap_runningActionsCount == 0) {
	obj5732_onTap_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj5732_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5732_onTap_activeActionGroupIndex = -1;
		$("#obj5732").trigger("obj5732_onTap_ended");
		
		return;
	}
	window.obj5732_onTap_activeActionGroupIndex = 2;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





/*
 *
 *   obj2020: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2020_onLoad_activeActionGroupIndex != -1) return;
var obj2020_onLoad_runningActionsCount = 0;
var obj2020_onLoad_loopCount = 0;
obj2020_onLoad_actionGroup0();
});












/*
 *
 *   obj4120: Event Touch Down
 *
 */
 
$("#obj4120").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4120_onTap_activeActionGroupIndex != -1) return;
var obj4120_onTap_runningActionsCount = 0;
var obj4120_onTap_loopCount = 0;
obj4120_onTap_actionGroup0();
});







/*
 *
 *   obj4124: Event Touch Down
 *
 */
 
$("#obj4124").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4124_onTap_activeActionGroupIndex != -1) return;
var obj4124_onTap_runningActionsCount = 0;
var obj4124_onTap_loopCount = 0;
obj4124_onTap_actionGroup0();
});







/*
 *
 *   obj4126: Event Touch Down
 *
 */
 
$("#obj4126").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4126_onTap_activeActionGroupIndex != -1) return;
var obj4126_onTap_runningActionsCount = 0;
var obj4126_onTap_loopCount = 0;
obj4126_onTap_actionGroup0();
});







/*
 *
 *   obj4122: Event Touch Down
 *
 */
 
$("#obj4122").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4122_onTap_activeActionGroupIndex != -1) return;
var obj4122_onTap_runningActionsCount = 0;
var obj4122_onTap_loopCount = 0;
obj4122_onTap_actionGroup0();
});




































/*
 *
 *   obj4303: Event Show
 *
 */
 
$("#obj4303").bind('SCEventShow', function(event) {
	if (window.obj4303_onShow_activeActionGroupIndex != -1) return;
var obj4303_onShow_runningActionsCount = 0;
var obj4303_onShow_loopCount = 0;
obj4303_onShow_actionGroup0();
});












/*
 *
 *   obj5749: Event Touch Down
 *
 */
 
$("#obj5749").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5749_onTap_activeActionGroupIndex != -1) return;
var obj5749_onTap_runningActionsCount = 0;
var obj5749_onTap_loopCount = 0;
obj5749_onTap_actionGroup0();
});







/*
 *
 *   obj5737: Event Touch Down
 *
 */
 
$("#obj5737").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5737_onTap_activeActionGroupIndex != -1) return;
var obj5737_onTap_runningActionsCount = 0;
var obj5737_onTap_loopCount = 0;
obj5737_onTap_actionGroup0();
});







/*
 *
 *   obj5735: Event Touch Down
 *
 */
 
$("#obj5735").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5735_onTap_activeActionGroupIndex != -1) return;
var obj5735_onTap_runningActionsCount = 0;
var obj5735_onTap_loopCount = 0;
obj5735_onTap_actionGroup0();
});







/*
 *
 *   obj5732: Event Touch Down
 *
 */
 
$("#obj5732").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5732_onTap_activeActionGroupIndex != -1) return;
var obj5732_onTap_runningActionsCount = 0;
var obj5732_onTap_loopCount = 0;
obj5732_onTap_actionGroup0();
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
	
$("#obj2020").trigger('SCEventShow');
$("#obj4132").trigger('SCEventShow');
$("#obj5732").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});