pubcoder.projectID = "9706FB5C04CD460A85938C3898CAD20C";
pubcoder.project.id = "9706FB5C04CD460A85938C3898CAD20C";
pubcoder.project.title = "Medieval Resources";
pubcoder.page.id = 4800;
pubcoder.page.title = "3";
pubcoder.page.number = 3;
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
var obj4801_onLoad_activeActionGroupIndex = -1;
var obj4801_onLoad_runningActionsCount = 0;
var obj4801_onLoad_loopCount = 0;
var obj4827_onTap_activeActionGroupIndex = -1;
var obj4827_onTap_runningActionsCount = 0;
var obj4827_onTap_loopCount = 0;
var obj4830_onTap_activeActionGroupIndex = -1;
var obj4830_onTap_runningActionsCount = 0;
var obj4830_onTap_loopCount = 0;
var obj4833_onTap_activeActionGroupIndex = -1;
var obj4833_onTap_runningActionsCount = 0;
var obj4833_onTap_loopCount = 0;
var obj4837_onTap_activeActionGroupIndex = -1;
var obj4837_onTap_runningActionsCount = 0;
var obj4837_onTap_loopCount = 0;
var obj4856_onShow_activeActionGroupIndex = -1;
var obj4856_onShow_runningActionsCount = 0;
var obj4856_onShow_loopCount = 0;
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
		
obj4801_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4801_onLoad_activeActionGroupIndex = -1;
		$("#obj4801").trigger("obj4801_onLoad_ended");
		
		return;
	}
	window.obj4801_onLoad_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj4833 
show_4819();
function show_4819() {
	var element = "#obj4833";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj4801_onLoad_runningActionsCount = obj4801_onLoad_runningActionsCount + 1;

	var animationType = "rotateIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj4801_onLoad_runningActionsCount = window.obj4801_onLoad_runningActionsCount - 1;
if (window.obj4801_onLoad_runningActionsCount == 0) {
	obj4801_onLoad_actionGroup1();
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
		window.obj4801_onLoad_runningActionsCount = window.obj4801_onLoad_runningActionsCount - 1;
if (window.obj4801_onLoad_runningActionsCount == 0) {
	obj4801_onLoad_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj4801_onLoad_runningActionsCount = window.obj4801_onLoad_runningActionsCount - 1;
if (window.obj4801_onLoad_runningActionsCount == 0) {
	obj4801_onLoad_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj4801_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4801_onLoad_activeActionGroupIndex = -1;
		$("#obj4801").trigger("obj4801_onLoad_ended");
		
		return;
	}
	window.obj4801_onLoad_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj4827 
show_4821();
function show_4821() {
	var element = "#obj4827";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj4801_onLoad_runningActionsCount = obj4801_onLoad_runningActionsCount + 1;

	var animationType = "rotateIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj4801_onLoad_runningActionsCount = window.obj4801_onLoad_runningActionsCount - 1;
if (window.obj4801_onLoad_runningActionsCount == 0) {
	obj4801_onLoad_actionGroup2();
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
		window.obj4801_onLoad_runningActionsCount = window.obj4801_onLoad_runningActionsCount - 1;
if (window.obj4801_onLoad_runningActionsCount == 0) {
	obj4801_onLoad_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj4801_onLoad_runningActionsCount = window.obj4801_onLoad_runningActionsCount - 1;
if (window.obj4801_onLoad_runningActionsCount == 0) {
	obj4801_onLoad_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj4801_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4801_onLoad_activeActionGroupIndex = -1;
		$("#obj4801").trigger("obj4801_onLoad_ended");
		
		return;
	}
	window.obj4801_onLoad_activeActionGroupIndex = 2;
	

//	action: show 
//	target: obj4837 
show_4822();
function show_4822() {
	var element = "#obj4837";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj4801_onLoad_runningActionsCount = obj4801_onLoad_runningActionsCount + 1;

	var animationType = "rotateIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj4801_onLoad_runningActionsCount = window.obj4801_onLoad_runningActionsCount - 1;
if (window.obj4801_onLoad_runningActionsCount == 0) {
	obj4801_onLoad_actionGroup3();
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
		window.obj4801_onLoad_runningActionsCount = window.obj4801_onLoad_runningActionsCount - 1;
if (window.obj4801_onLoad_runningActionsCount == 0) {
	obj4801_onLoad_actionGroup3();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj4801_onLoad_runningActionsCount = window.obj4801_onLoad_runningActionsCount - 1;
if (window.obj4801_onLoad_runningActionsCount == 0) {
	obj4801_onLoad_actionGroup3();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj4801_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4801_onLoad_activeActionGroupIndex = -1;
		$("#obj4801").trigger("obj4801_onLoad_ended");
		
		return;
	}
	window.obj4801_onLoad_activeActionGroupIndex = 3;
	

//	action: show 
//	target: obj4830 
show_4823();
function show_4823() {
	var element = "#obj4830";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj4801_onLoad_runningActionsCount = obj4801_onLoad_runningActionsCount + 1;

	var animationType = "rotateIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj4801_onLoad_runningActionsCount = window.obj4801_onLoad_runningActionsCount - 1;
if (window.obj4801_onLoad_runningActionsCount == 0) {
	obj4801_onLoad_actionGroup4();
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
		window.obj4801_onLoad_runningActionsCount = window.obj4801_onLoad_runningActionsCount - 1;
if (window.obj4801_onLoad_runningActionsCount == 0) {
	obj4801_onLoad_actionGroup4();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj4801_onLoad_runningActionsCount = window.obj4801_onLoad_runningActionsCount - 1;
if (window.obj4801_onLoad_runningActionsCount == 0) {
	obj4801_onLoad_actionGroup4();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj4801_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4801_onLoad_activeActionGroupIndex = -1;
		$("#obj4801").trigger("obj4801_onLoad_ended");
		
		return;
	}
	window.obj4801_onLoad_activeActionGroupIndex = 4;
	

//	action: show 
//	target: obj4856 
show_4824();
function show_4824() {
	var element = "#obj4856";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj4801_onLoad_runningActionsCount = obj4801_onLoad_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj4801_onLoad_runningActionsCount = window.obj4801_onLoad_runningActionsCount - 1;
if (window.obj4801_onLoad_runningActionsCount == 0) {
	obj4801_onLoad_actionGroup5();
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
		window.obj4801_onLoad_runningActionsCount = window.obj4801_onLoad_runningActionsCount - 1;
if (window.obj4801_onLoad_runningActionsCount == 0) {
	obj4801_onLoad_actionGroup5();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj4801_onLoad_runningActionsCount = window.obj4801_onLoad_runningActionsCount - 1;
if (window.obj4801_onLoad_runningActionsCount == 0) {
	obj4801_onLoad_actionGroup5();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj4801_onLoad_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4801_onLoad_activeActionGroupIndex = -1;
		$("#obj4801").trigger("obj4801_onLoad_ended");
		
		return;
	}
	window.obj4801_onLoad_activeActionGroupIndex = 5;
	





















};
obj4827_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4827_onTap_activeActionGroupIndex = -1;
		$("#obj4827").trigger("obj4827_onTap_ended");
		
		return;
	}
	window.obj4827_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page5
goToPage_4829();
function goToPage_4829() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../5/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(5))},200);
	}
}





















};
obj4827_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4827_onTap_activeActionGroupIndex = -1;
		$("#obj4827").trigger("obj4827_onTap_ended");
		
		return;
	}
	window.obj4827_onTap_activeActionGroupIndex = 1;
	





















};
obj4830_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4830_onTap_activeActionGroupIndex = -1;
		$("#obj4830").trigger("obj4830_onTap_ended");
		
		return;
	}
	window.obj4830_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page10
goToPage_4832();
function goToPage_4832() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../10/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(10))},200);
	}
}





















};
obj4830_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4830_onTap_activeActionGroupIndex = -1;
		$("#obj4830").trigger("obj4830_onTap_ended");
		
		return;
	}
	window.obj4830_onTap_activeActionGroupIndex = 1;
	





















};
obj4833_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4833_onTap_activeActionGroupIndex = -1;
		$("#obj4833").trigger("obj4833_onTap_ended");
		
		return;
	}
	window.obj4833_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page4
goToPage_4835();
function goToPage_4835() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../4/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(4))},200);
	}
}





















};
obj4833_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4833_onTap_activeActionGroupIndex = -1;
		$("#obj4833").trigger("obj4833_onTap_ended");
		
		return;
	}
	window.obj4833_onTap_activeActionGroupIndex = 1;
	





















};
obj4837_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4837_onTap_activeActionGroupIndex = -1;
		$("#obj4837").trigger("obj4837_onTap_ended");
		
		return;
	}
	window.obj4837_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page7
goToPage_4839();
function goToPage_4839() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../7/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(7))},200);
	}
}





















};
obj4837_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4837_onTap_activeActionGroupIndex = -1;
		$("#obj4837").trigger("obj4837_onTap_ended");
		
		return;
	}
	window.obj4837_onTap_activeActionGroupIndex = 1;
	





















};
obj4856_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4856_onShow_activeActionGroupIndex = -1;
		$("#obj4856").trigger("obj4856_onShow_ended");
		
		return;
	}
	window.obj4856_onShow_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj4856 
move_4859();
function move_4859() {
	window.obj4856_onShow_runningActionsCount = obj4856_onShow_runningActionsCount + 1;

	var easing = "bounce-in";
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
	var targetObject = $("#obj4856");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-19";
	var moveY = "+=-448";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj4856_onShow_runningActionsCount = window.obj4856_onShow_runningActionsCount - 1;
if (window.obj4856_onShow_runningActionsCount == 0) {
	obj4856_onShow_actionGroup1();
}
		}, 1);
	});
}



















};
obj4856_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4856_onShow_activeActionGroupIndex = -1;
		$("#obj4856").trigger("obj4856_onShow_ended");
		
		return;
	}
	window.obj4856_onShow_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj4861 
show_4860();
function show_4860() {
	var element = "#obj4861";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj4856_onShow_runningActionsCount = obj4856_onShow_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj4856_onShow_runningActionsCount = window.obj4856_onShow_runningActionsCount - 1;
if (window.obj4856_onShow_runningActionsCount == 0) {
	obj4856_onShow_actionGroup2();
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
		window.obj4856_onShow_runningActionsCount = window.obj4856_onShow_runningActionsCount - 1;
if (window.obj4856_onShow_runningActionsCount == 0) {
	obj4856_onShow_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj4856_onShow_runningActionsCount = window.obj4856_onShow_runningActionsCount - 1;
if (window.obj4856_onShow_runningActionsCount == 0) {
	obj4856_onShow_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj4856_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4856_onShow_activeActionGroupIndex = -1;
		$("#obj4856").trigger("obj4856_onShow_ended");
		
		return;
	}
	window.obj4856_onShow_activeActionGroupIndex = 2;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





/*
 *
 *   obj4801: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj4801_onLoad_activeActionGroupIndex != -1) return;
var obj4801_onLoad_runningActionsCount = 0;
var obj4801_onLoad_loopCount = 0;
obj4801_onLoad_actionGroup0();
});












/*
 *
 *   obj4827: Event Touch Down
 *
 */
 
$("#obj4827").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4827_onTap_activeActionGroupIndex != -1) return;
var obj4827_onTap_runningActionsCount = 0;
var obj4827_onTap_loopCount = 0;
obj4827_onTap_actionGroup0();
});







/*
 *
 *   obj4830: Event Touch Down
 *
 */
 
$("#obj4830").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4830_onTap_activeActionGroupIndex != -1) return;
var obj4830_onTap_runningActionsCount = 0;
var obj4830_onTap_loopCount = 0;
obj4830_onTap_actionGroup0();
});







/*
 *
 *   obj4833: Event Touch Down
 *
 */
 
$("#obj4833").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4833_onTap_activeActionGroupIndex != -1) return;
var obj4833_onTap_runningActionsCount = 0;
var obj4833_onTap_loopCount = 0;
obj4833_onTap_actionGroup0();
});







/*
 *
 *   obj4837: Event Touch Down
 *
 */
 
$("#obj4837").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4837_onTap_activeActionGroupIndex != -1) return;
var obj4837_onTap_runningActionsCount = 0;
var obj4837_onTap_loopCount = 0;
obj4837_onTap_actionGroup0();
});








/*
 *
 *   obj4856: Event Show
 *
 */
 
$("#obj4856").bind('SCEventShow', function(event) {
	if (window.obj4856_onShow_activeActionGroupIndex != -1) return;
var obj4856_onShow_runningActionsCount = 0;
var obj4856_onShow_loopCount = 0;
obj4856_onShow_actionGroup0();
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
	
$("#obj4801").trigger('SCEventShow');
$("#obj4825").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});