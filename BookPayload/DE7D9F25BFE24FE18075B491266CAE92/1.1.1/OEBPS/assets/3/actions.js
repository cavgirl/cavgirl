pubcoder.projectID = "9706FB5C04CD460A85938C3898CAD20C";
pubcoder.project.id = "9706FB5C04CD460A85938C3898CAD20C";
pubcoder.project.title = "Medieval Resources";
pubcoder.page.id = 5243;
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
var obj5246_onLoad_activeActionGroupIndex = -1;
var obj5246_onLoad_runningActionsCount = 0;
var obj5246_onLoad_loopCount = 0;
var obj5269_onTap_activeActionGroupIndex = -1;
var obj5269_onTap_runningActionsCount = 0;
var obj5269_onTap_loopCount = 0;
var obj5272_onTap_activeActionGroupIndex = -1;
var obj5272_onTap_runningActionsCount = 0;
var obj5272_onTap_loopCount = 0;
var obj5275_onTap_activeActionGroupIndex = -1;
var obj5275_onTap_runningActionsCount = 0;
var obj5275_onTap_loopCount = 0;
var obj5278_onTap_activeActionGroupIndex = -1;
var obj5278_onTap_runningActionsCount = 0;
var obj5278_onTap_loopCount = 0;
var obj5290_onShow_activeActionGroupIndex = -1;
var obj5290_onShow_runningActionsCount = 0;
var obj5290_onShow_loopCount = 0;
var obj5724_onTap_activeActionGroupIndex = -1;
var obj5724_onTap_runningActionsCount = 0;
var obj5724_onTap_loopCount = 0;
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
		
obj5246_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5246_onLoad_activeActionGroupIndex = -1;
		$("#obj5246").trigger("obj5246_onLoad_ended");
		
		return;
	}
	window.obj5246_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_6796();
function wait_6796() {
	window.obj5246_onLoad_runningActionsCount = obj5246_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj5246_onLoad_runningActionsCount = window.obj5246_onLoad_runningActionsCount - 1;
if (window.obj5246_onLoad_runningActionsCount == 0) {
	obj5246_onLoad_actionGroup1();
}
	}, 100);
}












};
obj5246_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5246_onLoad_activeActionGroupIndex = -1;
		$("#obj5246").trigger("obj5246_onLoad_ended");
		
		return;
	}
	window.obj5246_onLoad_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj5278 
show_5262();
function show_5262() {
	var element = "#obj5278";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj5246_onLoad_runningActionsCount = obj5246_onLoad_runningActionsCount + 1;

	var animationType = "rotateIn";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj5246_onLoad_runningActionsCount = window.obj5246_onLoad_runningActionsCount - 1;
if (window.obj5246_onLoad_runningActionsCount == 0) {
	obj5246_onLoad_actionGroup2();
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
		window.obj5246_onLoad_runningActionsCount = window.obj5246_onLoad_runningActionsCount - 1;
if (window.obj5246_onLoad_runningActionsCount == 0) {
	obj5246_onLoad_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(500, function() {
	// 		setTimeout(function() {
	// 			window.obj5246_onLoad_runningActionsCount = window.obj5246_onLoad_runningActionsCount - 1;
if (window.obj5246_onLoad_runningActionsCount == 0) {
	obj5246_onLoad_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj5246_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5246_onLoad_activeActionGroupIndex = -1;
		$("#obj5246").trigger("obj5246_onLoad_ended");
		
		return;
	}
	window.obj5246_onLoad_activeActionGroupIndex = 2;
	

//	action: show 
//	target: obj5275 
show_5263();
function show_5263() {
	var element = "#obj5275";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj5246_onLoad_runningActionsCount = obj5246_onLoad_runningActionsCount + 1;

	var animationType = "rotateIn";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj5246_onLoad_runningActionsCount = window.obj5246_onLoad_runningActionsCount - 1;
if (window.obj5246_onLoad_runningActionsCount == 0) {
	obj5246_onLoad_actionGroup3();
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
		window.obj5246_onLoad_runningActionsCount = window.obj5246_onLoad_runningActionsCount - 1;
if (window.obj5246_onLoad_runningActionsCount == 0) {
	obj5246_onLoad_actionGroup3();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(500, function() {
	// 		setTimeout(function() {
	// 			window.obj5246_onLoad_runningActionsCount = window.obj5246_onLoad_runningActionsCount - 1;
if (window.obj5246_onLoad_runningActionsCount == 0) {
	obj5246_onLoad_actionGroup3();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj5246_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5246_onLoad_activeActionGroupIndex = -1;
		$("#obj5246").trigger("obj5246_onLoad_ended");
		
		return;
	}
	window.obj5246_onLoad_activeActionGroupIndex = 3;
	

//	action: show 
//	target: obj5269 
show_5264();
function show_5264() {
	var element = "#obj5269";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj5246_onLoad_runningActionsCount = obj5246_onLoad_runningActionsCount + 1;

	var animationType = "rotateIn";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj5246_onLoad_runningActionsCount = window.obj5246_onLoad_runningActionsCount - 1;
if (window.obj5246_onLoad_runningActionsCount == 0) {
	obj5246_onLoad_actionGroup4();
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
		window.obj5246_onLoad_runningActionsCount = window.obj5246_onLoad_runningActionsCount - 1;
if (window.obj5246_onLoad_runningActionsCount == 0) {
	obj5246_onLoad_actionGroup4();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(500, function() {
	// 		setTimeout(function() {
	// 			window.obj5246_onLoad_runningActionsCount = window.obj5246_onLoad_runningActionsCount - 1;
if (window.obj5246_onLoad_runningActionsCount == 0) {
	obj5246_onLoad_actionGroup4();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj5246_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5246_onLoad_activeActionGroupIndex = -1;
		$("#obj5246").trigger("obj5246_onLoad_ended");
		
		return;
	}
	window.obj5246_onLoad_activeActionGroupIndex = 4;
	

//	action: show 
//	target: obj5272 
show_5265();
function show_5265() {
	var element = "#obj5272";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj5246_onLoad_runningActionsCount = obj5246_onLoad_runningActionsCount + 1;

	var animationType = "rotateIn";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj5246_onLoad_runningActionsCount = window.obj5246_onLoad_runningActionsCount - 1;
if (window.obj5246_onLoad_runningActionsCount == 0) {
	obj5246_onLoad_actionGroup5();
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
		window.obj5246_onLoad_runningActionsCount = window.obj5246_onLoad_runningActionsCount - 1;
if (window.obj5246_onLoad_runningActionsCount == 0) {
	obj5246_onLoad_actionGroup5();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(500, function() {
	// 		setTimeout(function() {
	// 			window.obj5246_onLoad_runningActionsCount = window.obj5246_onLoad_runningActionsCount - 1;
if (window.obj5246_onLoad_runningActionsCount == 0) {
	obj5246_onLoad_actionGroup5();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj5246_onLoad_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5246_onLoad_activeActionGroupIndex = -1;
		$("#obj5246").trigger("obj5246_onLoad_ended");
		
		return;
	}
	window.obj5246_onLoad_activeActionGroupIndex = 5;
	

//	action: show 
//	target: obj5290 
show_5266();
function show_5266() {
	var element = "#obj5290";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj5246_onLoad_runningActionsCount = obj5246_onLoad_runningActionsCount + 1;

	var animationType = "bounceInUp";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj5246_onLoad_runningActionsCount = window.obj5246_onLoad_runningActionsCount - 1;
if (window.obj5246_onLoad_runningActionsCount == 0) {
	obj5246_onLoad_actionGroup6();
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
		window.obj5246_onLoad_runningActionsCount = window.obj5246_onLoad_runningActionsCount - 1;
if (window.obj5246_onLoad_runningActionsCount == 0) {
	obj5246_onLoad_actionGroup6();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(500, function() {
	// 		setTimeout(function() {
	// 			window.obj5246_onLoad_runningActionsCount = window.obj5246_onLoad_runningActionsCount - 1;
if (window.obj5246_onLoad_runningActionsCount == 0) {
	obj5246_onLoad_actionGroup6();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj5246_onLoad_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5246_onLoad_activeActionGroupIndex = -1;
		$("#obj5246").trigger("obj5246_onLoad_ended");
		
		return;
	}
	window.obj5246_onLoad_activeActionGroupIndex = 6;
	





















};
obj5269_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5269_onTap_activeActionGroupIndex = -1;
		$("#obj5269").trigger("obj5269_onTap_ended");
		
		return;
	}
	window.obj5269_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page9
goToPage_5271();
function goToPage_5271() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../9/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(9))},200);
	}
}





















};
obj5269_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5269_onTap_activeActionGroupIndex = -1;
		$("#obj5269").trigger("obj5269_onTap_ended");
		
		return;
	}
	window.obj5269_onTap_activeActionGroupIndex = 1;
	





















};
obj5272_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5272_onTap_activeActionGroupIndex = -1;
		$("#obj5272").trigger("obj5272_onTap_ended");
		
		return;
	}
	window.obj5272_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page12
goToPage_5274();
function goToPage_5274() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../12/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(12))},200);
	}
}





















};
obj5272_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5272_onTap_activeActionGroupIndex = -1;
		$("#obj5272").trigger("obj5272_onTap_ended");
		
		return;
	}
	window.obj5272_onTap_activeActionGroupIndex = 1;
	





















};
obj5275_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5275_onTap_activeActionGroupIndex = -1;
		$("#obj5275").trigger("obj5275_onTap_ended");
		
		return;
	}
	window.obj5275_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page6
goToPage_5277();
function goToPage_5277() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../6/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(6))},200);
	}
}





















};
obj5275_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5275_onTap_activeActionGroupIndex = -1;
		$("#obj5275").trigger("obj5275_onTap_ended");
		
		return;
	}
	window.obj5275_onTap_activeActionGroupIndex = 1;
	





















};
obj5278_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5278_onTap_activeActionGroupIndex = -1;
		$("#obj5278").trigger("obj5278_onTap_ended");
		
		return;
	}
	window.obj5278_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page4
goToPage_5280();
function goToPage_5280() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../4/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(4))},200);
	}
}





















};
obj5278_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5278_onTap_activeActionGroupIndex = -1;
		$("#obj5278").trigger("obj5278_onTap_ended");
		
		return;
	}
	window.obj5278_onTap_activeActionGroupIndex = 1;
	





















};
obj5290_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5290_onShow_activeActionGroupIndex = -1;
		$("#obj5290").trigger("obj5290_onShow_ended");
		
		return;
	}
	window.obj5290_onShow_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj5296 
show_5294();
function show_5294() {
	var element = "#obj5296";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj5290_onShow_runningActionsCount = obj5290_onShow_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj5290_onShow_runningActionsCount = window.obj5290_onShow_runningActionsCount - 1;
if (window.obj5290_onShow_runningActionsCount == 0) {
	obj5290_onShow_actionGroup1();
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
		window.obj5290_onShow_runningActionsCount = window.obj5290_onShow_runningActionsCount - 1;
if (window.obj5290_onShow_runningActionsCount == 0) {
	obj5290_onShow_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj5290_onShow_runningActionsCount = window.obj5290_onShow_runningActionsCount - 1;
if (window.obj5290_onShow_runningActionsCount == 0) {
	obj5290_onShow_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj5290_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5290_onShow_activeActionGroupIndex = -1;
		$("#obj5290").trigger("obj5290_onShow_ended");
		
		return;
	}
	window.obj5290_onShow_activeActionGroupIndex = 1;
	








//	action: wait
wait_5722();
function wait_5722() {
	window.obj5290_onShow_runningActionsCount = obj5290_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj5290_onShow_runningActionsCount = window.obj5290_onShow_runningActionsCount - 1;
if (window.obj5290_onShow_runningActionsCount == 0) {
	obj5290_onShow_actionGroup2();
}
	}, 1000);
}












};
obj5290_onShow_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5290_onShow_activeActionGroupIndex = -1;
		$("#obj5290").trigger("obj5290_onShow_ended");
		
		return;
	}
	window.obj5290_onShow_activeActionGroupIndex = 2;
	

//	action: show 
//	target: obj5724 
show_5728();
function show_5728() {
	var element = "#obj5724";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj5290_onShow_runningActionsCount = obj5290_onShow_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj5290_onShow_runningActionsCount = window.obj5290_onShow_runningActionsCount - 1;
if (window.obj5290_onShow_runningActionsCount == 0) {
	obj5290_onShow_actionGroup3();
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
		window.obj5290_onShow_runningActionsCount = window.obj5290_onShow_runningActionsCount - 1;
if (window.obj5290_onShow_runningActionsCount == 0) {
	obj5290_onShow_actionGroup3();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj5290_onShow_runningActionsCount = window.obj5290_onShow_runningActionsCount - 1;
if (window.obj5290_onShow_runningActionsCount == 0) {
	obj5290_onShow_actionGroup3();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}














//	action: Switch Text
switchText_5723();
function switchText_5723() {
	window.obj5290_onShow_runningActionsCount = obj5290_onShow_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p>Done?</p><p><span style=\"font-size: 46px;\">Click Here</span></p><p> </p>";
	var switchTextFunction = function () {
		$("#obj5296").html(newHtml);
		setTimeout(function () {
			window.obj5290_onShow_runningActionsCount = window.obj5290_onShow_runningActionsCount - 1;
if (window.obj5290_onShow_runningActionsCount == 0) {
	obj5290_onShow_actionGroup3();
}
		}, 1);
	};
	if (fadeTime > 0) {
		var oldHtmlWrapped = "<div id=\"obj5296_old\" style=\"position:absolute; top:0px; width:100%;\">" + $("#obj5296").html() + "</div>";
		var newHtmlWrapped = "<div id=\"obj5296_new\" style=\"position:absolute; top:0px; width:100%; display:none;\">" + newHtml + "</div>";
		$("#obj5296").html(oldHtmlWrapped + newHtmlWrapped);
		$("#obj5296_old").fadeOut(fadeTime);
		$("#obj5296_new").fadeIn(fadeTime, switchTextFunction);
	} else {
		switchTextFunction();
	}
}





};
obj5290_onShow_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5290_onShow_activeActionGroupIndex = -1;
		$("#obj5290").trigger("obj5290_onShow_ended");
		
		return;
	}
	window.obj5290_onShow_activeActionGroupIndex = 3;
	





















};
obj5724_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5724_onTap_activeActionGroupIndex = -1;
		$("#obj5724").trigger("obj5724_onTap_ended");
		
		return;
	}
	window.obj5724_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page14
goToPage_5727();
function goToPage_5727() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../14/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(14))},200);
	}
}





















};
obj5724_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5724_onTap_activeActionGroupIndex = -1;
		$("#obj5724").trigger("obj5724_onTap_ended");
		
		return;
	}
	window.obj5724_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





/*
 *
 *   obj5246: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj5246_onLoad_activeActionGroupIndex != -1) return;
var obj5246_onLoad_runningActionsCount = 0;
var obj5246_onLoad_loopCount = 0;
obj5246_onLoad_actionGroup0();
});












/*
 *
 *   obj5269: Event Touch Down
 *
 */
 
$("#obj5269").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5269_onTap_activeActionGroupIndex != -1) return;
var obj5269_onTap_runningActionsCount = 0;
var obj5269_onTap_loopCount = 0;
obj5269_onTap_actionGroup0();
});







/*
 *
 *   obj5272: Event Touch Down
 *
 */
 
$("#obj5272").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5272_onTap_activeActionGroupIndex != -1) return;
var obj5272_onTap_runningActionsCount = 0;
var obj5272_onTap_loopCount = 0;
obj5272_onTap_actionGroup0();
});







/*
 *
 *   obj5275: Event Touch Down
 *
 */
 
$("#obj5275").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5275_onTap_activeActionGroupIndex != -1) return;
var obj5275_onTap_runningActionsCount = 0;
var obj5275_onTap_loopCount = 0;
obj5275_onTap_actionGroup0();
});







/*
 *
 *   obj5278: Event Touch Down
 *
 */
 
$("#obj5278").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5278_onTap_activeActionGroupIndex != -1) return;
var obj5278_onTap_runningActionsCount = 0;
var obj5278_onTap_loopCount = 0;
obj5278_onTap_actionGroup0();
});








/*
 *
 *   obj5290: Event Show
 *
 */
 
$("#obj5290").bind('SCEventShow', function(event) {
	if (window.obj5290_onShow_activeActionGroupIndex != -1) return;
var obj5290_onShow_runningActionsCount = 0;
var obj5290_onShow_loopCount = 0;
obj5290_onShow_actionGroup0();
});












/*
 *
 *   obj5724: Event Touch Down
 *
 */
 
$("#obj5724").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5724_onTap_activeActionGroupIndex != -1) return;
var obj5724_onTap_runningActionsCount = 0;
var obj5724_onTap_loopCount = 0;
obj5724_onTap_actionGroup0();
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
	
$("#obj5246").trigger('SCEventShow');
$("#obj5267").trigger('SCEventShow');
$("#obj5724").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});