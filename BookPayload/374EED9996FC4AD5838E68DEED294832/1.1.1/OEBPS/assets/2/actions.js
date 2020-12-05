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
var obj4126_onTap_activeActionGroupIndex = -1;
var obj4126_onTap_runningActionsCount = 0;
var obj4126_onTap_loopCount = 0;
var obj4124_onTap_activeActionGroupIndex = -1;
var obj4124_onTap_runningActionsCount = 0;
var obj4124_onTap_loopCount = 0;
var obj4122_onTap_activeActionGroupIndex = -1;
var obj4122_onTap_runningActionsCount = 0;
var obj4122_onTap_loopCount = 0;
var obj4120_onTap_activeActionGroupIndex = -1;
var obj4120_onTap_runningActionsCount = 0;
var obj4120_onTap_loopCount = 0;
var obj4293_onShow_activeActionGroupIndex = -1;
var obj4293_onShow_runningActionsCount = 0;
var obj4293_onShow_loopCount = 0;
var obj4303_onShow_activeActionGroupIndex = -1;
var obj4303_onShow_runningActionsCount = 0;
var obj4303_onShow_loopCount = 0;
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



















};
obj2020_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2020_onLoad_activeActionGroupIndex = -1;
		$("#obj2020").trigger("obj2020_onLoad_ended");
		
		return;
	}
	window.obj2020_onLoad_activeActionGroupIndex = 2;
	








//	action: wait
wait_4284();
function wait_4284() {
	window.obj2020_onLoad_runningActionsCount = obj2020_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj2020_onLoad_runningActionsCount = window.obj2020_onLoad_runningActionsCount - 1;
if (window.obj2020_onLoad_runningActionsCount == 0) {
	obj2020_onLoad_actionGroup3();
}
	}, 5000);
}












};
obj2020_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2020_onLoad_activeActionGroupIndex = -1;
		$("#obj2020").trigger("obj2020_onLoad_ended");
		
		return;
	}
	window.obj2020_onLoad_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_4673();
function switchText_4673() {
	window.obj2020_onLoad_runningActionsCount = obj2020_onLoad_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p>I came to Carrickfergus in a big ship. <span class=\"apple-converted-space\"><br /></span></p>";
	var switchTextFunction = function () {
		$("#obj4281").html(newHtml);
		setTimeout(function () {
			window.obj2020_onLoad_runningActionsCount = window.obj2020_onLoad_runningActionsCount - 1;
if (window.obj2020_onLoad_runningActionsCount == 0) {
	obj2020_onLoad_actionGroup4();
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
obj2020_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2020_onLoad_activeActionGroupIndex = -1;
		$("#obj2020").trigger("obj2020_onLoad_ended");
		
		return;
	}
	window.obj2020_onLoad_activeActionGroupIndex = 4;
	








//	action: wait
wait_4674();
function wait_4674() {
	window.obj2020_onLoad_runningActionsCount = obj2020_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj2020_onLoad_runningActionsCount = window.obj2020_onLoad_runningActionsCount - 1;
if (window.obj2020_onLoad_runningActionsCount == 0) {
	obj2020_onLoad_actionGroup5();
}
	}, 5000);
}












};
obj2020_onLoad_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2020_onLoad_activeActionGroupIndex = -1;
		$("#obj2020").trigger("obj2020_onLoad_ended");
		
		return;
	}
	window.obj2020_onLoad_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_4675();
function switchText_4675() {
	window.obj2020_onLoad_runningActionsCount = obj2020_onLoad_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p>Now I live in the Friary with the brothers.</p>";
	var switchTextFunction = function () {
		$("#obj4281").html(newHtml);
		setTimeout(function () {
			window.obj2020_onLoad_runningActionsCount = window.obj2020_onLoad_runningActionsCount - 1;
if (window.obj2020_onLoad_runningActionsCount == 0) {
	obj2020_onLoad_actionGroup6();
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
obj2020_onLoad_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2020_onLoad_activeActionGroupIndex = -1;
		$("#obj2020").trigger("obj2020_onLoad_ended");
		
		return;
	}
	window.obj2020_onLoad_activeActionGroupIndex = 6;
	








//	action: wait
wait_4676();
function wait_4676() {
	window.obj2020_onLoad_runningActionsCount = obj2020_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj2020_onLoad_runningActionsCount = window.obj2020_onLoad_runningActionsCount - 1;
if (window.obj2020_onLoad_runningActionsCount == 0) {
	obj2020_onLoad_actionGroup7();
}
	}, 5000);
}












};
obj2020_onLoad_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2020_onLoad_activeActionGroupIndex = -1;
		$("#obj2020").trigger("obj2020_onLoad_ended");
		
		return;
	}
	window.obj2020_onLoad_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_4678();
function switchText_4678() {
	window.obj2020_onLoad_runningActionsCount = obj2020_onLoad_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p>Time for some fun around Carrickfergus! </p>";
	var switchTextFunction = function () {
		$("#obj4281").html(newHtml);
		setTimeout(function () {
			window.obj2020_onLoad_runningActionsCount = window.obj2020_onLoad_runningActionsCount - 1;
if (window.obj2020_onLoad_runningActionsCount == 0) {
	obj2020_onLoad_actionGroup8();
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
obj2020_onLoad_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2020_onLoad_activeActionGroupIndex = -1;
		$("#obj2020").trigger("obj2020_onLoad_ended");
		
		return;
	}
	window.obj2020_onLoad_activeActionGroupIndex = 8;
	








//	action: wait
wait_4679();
function wait_4679() {
	window.obj2020_onLoad_runningActionsCount = obj2020_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj2020_onLoad_runningActionsCount = window.obj2020_onLoad_runningActionsCount - 1;
if (window.obj2020_onLoad_runningActionsCount == 0) {
	obj2020_onLoad_actionGroup9();
}
	}, 5000);
}












};
obj2020_onLoad_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2020_onLoad_activeActionGroupIndex = -1;
		$("#obj2020").trigger("obj2020_onLoad_ended");
		
		return;
	}
	window.obj2020_onLoad_activeActionGroupIndex = 9;
	

//	action: hide
//	target: obj4281 
hide_4287();
function hide_4287() {
	var element = "#obj4281";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2020_onLoad_runningActionsCount = obj2020_onLoad_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj2020_onLoad_runningActionsCount = window.obj2020_onLoad_runningActionsCount - 1;
if (window.obj2020_onLoad_runningActionsCount == 0) {
	obj2020_onLoad_actionGroup10();
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
		setTimeout(hide_4287(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj2020_onLoad_runningActionsCount = window.obj2020_onLoad_runningActionsCount - 1;
if (window.obj2020_onLoad_runningActionsCount == 0) {
	obj2020_onLoad_actionGroup10();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj4371 
hide_4288();
function hide_4288() {
	var element = "#obj4371";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2020_onLoad_runningActionsCount = obj2020_onLoad_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj2020_onLoad_runningActionsCount = window.obj2020_onLoad_runningActionsCount - 1;
if (window.obj2020_onLoad_runningActionsCount == 0) {
	obj2020_onLoad_actionGroup10();
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
		setTimeout(hide_4288(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj2020_onLoad_runningActionsCount = window.obj2020_onLoad_runningActionsCount - 1;
if (window.obj2020_onLoad_runningActionsCount == 0) {
	obj2020_onLoad_actionGroup10();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj4271 
hide_4289();
function hide_4289() {
	var element = "#obj4271";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2020_onLoad_runningActionsCount = obj2020_onLoad_runningActionsCount + 1;
	
	var animationType = "fadeOutLeftBig";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj2020_onLoad_runningActionsCount = window.obj2020_onLoad_runningActionsCount - 1;
if (window.obj2020_onLoad_runningActionsCount == 0) {
	obj2020_onLoad_actionGroup10();
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
		setTimeout(hide_4289(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj2020_onLoad_runningActionsCount = window.obj2020_onLoad_runningActionsCount - 1;
if (window.obj2020_onLoad_runningActionsCount == 0) {
	obj2020_onLoad_actionGroup10();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj2020_onLoad_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2020_onLoad_activeActionGroupIndex = -1;
		$("#obj2020").trigger("obj2020_onLoad_ended");
		
		return;
	}
	window.obj2020_onLoad_activeActionGroupIndex = 10;
	

//	action: show 
//	target: obj4122 
show_4135();
function show_4135() {
	var element = "#obj4122";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj2020_onLoad_runningActionsCount = obj2020_onLoad_runningActionsCount + 1;

	var animationType = "rotateIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj2020_onLoad_runningActionsCount = window.obj2020_onLoad_runningActionsCount - 1;
if (window.obj2020_onLoad_runningActionsCount == 0) {
	obj2020_onLoad_actionGroup11();
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
	obj2020_onLoad_actionGroup11();
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
	obj2020_onLoad_actionGroup11();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj4293 
show_4299();
function show_4299() {
	var element = "#obj4293";
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
	obj2020_onLoad_actionGroup11();
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
	obj2020_onLoad_actionGroup11();
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
	obj2020_onLoad_actionGroup11();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj2020_onLoad_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2020_onLoad_activeActionGroupIndex = -1;
		$("#obj2020").trigger("obj2020_onLoad_ended");
		
		return;
	}
	window.obj2020_onLoad_activeActionGroupIndex = 11;
	

//	action: show 
//	target: obj4126 
show_4136();
function show_4136() {
	var element = "#obj4126";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj2020_onLoad_runningActionsCount = obj2020_onLoad_runningActionsCount + 1;

	var animationType = "rotateIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj2020_onLoad_runningActionsCount = window.obj2020_onLoad_runningActionsCount - 1;
if (window.obj2020_onLoad_runningActionsCount == 0) {
	obj2020_onLoad_actionGroup12();
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
	obj2020_onLoad_actionGroup12();
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
	obj2020_onLoad_actionGroup12();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj2020_onLoad_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2020_onLoad_activeActionGroupIndex = -1;
		$("#obj2020").trigger("obj2020_onLoad_ended");
		
		return;
	}
	window.obj2020_onLoad_activeActionGroupIndex = 12;
	

//	action: show 
//	target: obj4120 
show_4137();
function show_4137() {
	var element = "#obj4120";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj2020_onLoad_runningActionsCount = obj2020_onLoad_runningActionsCount + 1;

	var animationType = "rotateIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj2020_onLoad_runningActionsCount = window.obj2020_onLoad_runningActionsCount - 1;
if (window.obj2020_onLoad_runningActionsCount == 0) {
	obj2020_onLoad_actionGroup13();
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
	obj2020_onLoad_actionGroup13();
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
	obj2020_onLoad_actionGroup13();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj2020_onLoad_actionGroup13 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2020_onLoad_activeActionGroupIndex = -1;
		$("#obj2020").trigger("obj2020_onLoad_ended");
		
		return;
	}
	window.obj2020_onLoad_activeActionGroupIndex = 13;
	

//	action: show 
//	target: obj4124 
show_4138();
function show_4138() {
	var element = "#obj4124";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj2020_onLoad_runningActionsCount = obj2020_onLoad_runningActionsCount + 1;

	var animationType = "rotateIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj2020_onLoad_runningActionsCount = window.obj2020_onLoad_runningActionsCount - 1;
if (window.obj2020_onLoad_runningActionsCount == 0) {
	obj2020_onLoad_actionGroup14();
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
	obj2020_onLoad_actionGroup14();
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
	obj2020_onLoad_actionGroup14();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj2020_onLoad_actionGroup14 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2020_onLoad_activeActionGroupIndex = -1;
		$("#obj2020").trigger("obj2020_onLoad_ended");
		
		return;
	}
	window.obj2020_onLoad_activeActionGroupIndex = 14;
	

//	action: show 
//	target: obj4303 
show_4311();
function show_4311() {
	var element = "#obj4303";
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
	obj2020_onLoad_actionGroup15();
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
	obj2020_onLoad_actionGroup15();
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
	obj2020_onLoad_actionGroup15();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj2020_onLoad_actionGroup15 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2020_onLoad_activeActionGroupIndex = -1;
		$("#obj2020").trigger("obj2020_onLoad_ended");
		
		return;
	}
	window.obj2020_onLoad_activeActionGroupIndex = 15;
	





















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
//	target: page5
goToPage_4130();
function goToPage_4130() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../5/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(5))},200);
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
obj4124_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4124_onTap_activeActionGroupIndex = -1;
		$("#obj4124").trigger("obj4124_onTap_ended");
		
		return;
	}
	window.obj4124_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page10
goToPage_4131();
function goToPage_4131() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../10/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(10))},200);
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
obj4120_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4120_onTap_activeActionGroupIndex = -1;
		$("#obj4120").trigger("obj4120_onTap_ended");
		
		return;
	}
	window.obj4120_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page7
goToPage_4129();
function goToPage_4129() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../7/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(7))},200);
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
obj4293_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4293_onShow_activeActionGroupIndex = -1;
		$("#obj4293").trigger("obj4293_onShow_ended");
		
		return;
	}
	window.obj4293_onShow_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj4293 
move_4296();
function move_4296() {
	window.obj4293_onShow_runningActionsCount = obj4293_onShow_runningActionsCount + 1;

	var easing = "elastic-out";
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
	var targetObject = $("#obj4293");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 556;
	var moveY = 507;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj4293_onShow_runningActionsCount = window.obj4293_onShow_runningActionsCount - 1;
if (window.obj4293_onShow_runningActionsCount == 0) {
	obj4293_onShow_actionGroup1();
}
		}, 1);
	});
}



















};
obj4293_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4293_onShow_activeActionGroupIndex = -1;
		$("#obj4293").trigger("obj4293_onShow_ended");
		
		return;
	}
	window.obj4293_onShow_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj4293 
move_4297();
function move_4297() {
	window.obj4293_onShow_runningActionsCount = obj4293_onShow_runningActionsCount + 1;

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
	var targetObject = $("#obj4293");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 433;
	var moveY = 257;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj4293_onShow_runningActionsCount = window.obj4293_onShow_runningActionsCount - 1;
if (window.obj4293_onShow_runningActionsCount == 0) {
	obj4293_onShow_actionGroup2();
}
		}, 1);
	});
}



















};
obj4293_onShow_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4293_onShow_activeActionGroupIndex = -1;
		$("#obj4293").trigger("obj4293_onShow_ended");
		
		return;
	}
	window.obj4293_onShow_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj4293 
move_4298();
function move_4298() {
	window.obj4293_onShow_runningActionsCount = obj4293_onShow_runningActionsCount + 1;

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
	var targetObject = $("#obj4293");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 747;
	var moveY = 257;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj4293_onShow_runningActionsCount = window.obj4293_onShow_runningActionsCount - 1;
if (window.obj4293_onShow_runningActionsCount == 0) {
	obj4293_onShow_actionGroup3();
}
		}, 1);
	});
}



















};
obj4293_onShow_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4293_onShow_activeActionGroupIndex = -1;
		$("#obj4293").trigger("obj4293_onShow_ended");
		
		return;
	}
	window.obj4293_onShow_activeActionGroupIndex = 3;
	

//	action: hide
//	target: obj4293 
hide_4312();
function hide_4312() {
	var element = "#obj4293";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4293_onShow_runningActionsCount = obj4293_onShow_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj4293_onShow_runningActionsCount = window.obj4293_onShow_runningActionsCount - 1;
if (window.obj4293_onShow_runningActionsCount == 0) {
	obj4293_onShow_actionGroup4();
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
		setTimeout(hide_4312(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj4293_onShow_runningActionsCount = window.obj4293_onShow_runningActionsCount - 1;
if (window.obj4293_onShow_runningActionsCount == 0) {
	obj4293_onShow_actionGroup4();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}

//	action: move
//	target: obj4293 
move_4300();
function move_4300() {
	window.obj4293_onShow_runningActionsCount = obj4293_onShow_runningActionsCount + 1;

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
	var targetObject = $("#obj4293");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1096;
	var moveY = 1085;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj4293_onShow_runningActionsCount = window.obj4293_onShow_runningActionsCount - 1;
if (window.obj4293_onShow_runningActionsCount == 0) {
	obj4293_onShow_actionGroup4();
}
		}, 1);
	});
}



















};
obj4293_onShow_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4293_onShow_activeActionGroupIndex = -1;
		$("#obj4293").trigger("obj4293_onShow_ended");
		
		return;
	}
	window.obj4293_onShow_activeActionGroupIndex = 4;
	





















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
	var targetObject = $("#obj4303");
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
 *   obj4293: Event Show
 *
 */
 
$("#obj4293").bind('SCEventShow', function(event) {
	if (window.obj4293_onShow_activeActionGroupIndex != -1) return;
var obj4293_onShow_runningActionsCount = 0;
var obj4293_onShow_loopCount = 0;
obj4293_onShow_actionGroup0();
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
	$(window).trigger(PubCoder.Events.PageReady);
	
});