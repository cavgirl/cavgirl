pubcoder.projectID = "9706FB5C04CD460A85938C3898CAD20C";
pubcoder.project.id = "9706FB5C04CD460A85938C3898CAD20C";
pubcoder.project.title = "Medieval Resources";
pubcoder.page.id = 6747;
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
var obj6763_onTap_activeActionGroupIndex = -1;
var obj6763_onTap_runningActionsCount = 0;
var obj6763_onTap_loopCount = 0;
var obj6758_onTap_activeActionGroupIndex = -1;
var obj6758_onTap_runningActionsCount = 0;
var obj6758_onTap_loopCount = 0;
var obj6753_onTap_activeActionGroupIndex = -1;
var obj6753_onTap_runningActionsCount = 0;
var obj6753_onTap_loopCount = 0;
var obj6748_onTap_activeActionGroupIndex = -1;
var obj6748_onTap_runningActionsCount = 0;
var obj6748_onTap_loopCount = 0;
var obj6790_onLoad_activeActionGroupIndex = -1;
var obj6790_onLoad_runningActionsCount = 0;
var obj6790_onLoad_loopCount = 0;
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
		
obj6763_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6763_onTap_activeActionGroupIndex = -1;
		$("#obj6763").trigger("obj6763_onTap_ended");
		
		return;
	}
	window.obj6763_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page3
goToPage_6792();
function goToPage_6792() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../3/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(3))},200);
	}
}





















};
obj6763_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6763_onTap_activeActionGroupIndex = -1;
		$("#obj6763").trigger("obj6763_onTap_ended");
		
		return;
	}
	window.obj6763_onTap_activeActionGroupIndex = 1;
	





















};
obj6758_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6758_onTap_activeActionGroupIndex = -1;
		$("#obj6758").trigger("obj6758_onTap_ended");
		
		return;
	}
	window.obj6758_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_6760();
function switchText_6760() {
	window.obj6758_onTap_runningActionsCount = obj6758_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p> </p><p>Time for some fun</p><p>around Carrickfergus! </p>";
	var switchTextFunction = function () {
		$("#obj6790").html(newHtml);
		setTimeout(function () {
			window.obj6758_onTap_runningActionsCount = window.obj6758_onTap_runningActionsCount - 1;
if (window.obj6758_onTap_runningActionsCount == 0) {
	obj6758_onTap_actionGroup1();
}
		}, 1);
	};
	if (fadeTime > 0) {
		var oldHtmlWrapped = "<div id=\"obj6790_old\" style=\"position:absolute; top:0px; width:100%;\">" + $("#obj6790").html() + "</div>";
		var newHtmlWrapped = "<div id=\"obj6790_new\" style=\"position:absolute; top:0px; width:100%; display:none;\">" + newHtml + "</div>";
		$("#obj6790").html(oldHtmlWrapped + newHtmlWrapped);
		$("#obj6790_old").fadeOut(fadeTime);
		$("#obj6790_new").fadeIn(fadeTime, switchTextFunction);
	} else {
		switchTextFunction();
	}
}





};
obj6758_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6758_onTap_activeActionGroupIndex = -1;
		$("#obj6758").trigger("obj6758_onTap_ended");
		
		return;
	}
	window.obj6758_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj6758 
hide_6761();
function hide_6761() {
	var element = "#obj6758";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6758_onTap_runningActionsCount = obj6758_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj6758_onTap_runningActionsCount = window.obj6758_onTap_runningActionsCount - 1;
if (window.obj6758_onTap_runningActionsCount == 0) {
	obj6758_onTap_actionGroup2();
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
		setTimeout(hide_6761(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj6758_onTap_runningActionsCount = window.obj6758_onTap_runningActionsCount - 1;
if (window.obj6758_onTap_runningActionsCount == 0) {
	obj6758_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj6763 
show_6762();
function show_6762() {
	var element = "#obj6763";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj6758_onTap_runningActionsCount = obj6758_onTap_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj6758_onTap_runningActionsCount = window.obj6758_onTap_runningActionsCount - 1;
if (window.obj6758_onTap_runningActionsCount == 0) {
	obj6758_onTap_actionGroup2();
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
		window.obj6758_onTap_runningActionsCount = window.obj6758_onTap_runningActionsCount - 1;
if (window.obj6758_onTap_runningActionsCount == 0) {
	obj6758_onTap_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj6758_onTap_runningActionsCount = window.obj6758_onTap_runningActionsCount - 1;
if (window.obj6758_onTap_runningActionsCount == 0) {
	obj6758_onTap_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj6758_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6758_onTap_activeActionGroupIndex = -1;
		$("#obj6758").trigger("obj6758_onTap_ended");
		
		return;
	}
	window.obj6758_onTap_activeActionGroupIndex = 2;
	





















};
obj6753_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6753_onTap_activeActionGroupIndex = -1;
		$("#obj6753").trigger("obj6753_onTap_ended");
		
		return;
	}
	window.obj6753_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_6755();
function switchText_6755() {
	window.obj6753_onTap_runningActionsCount = obj6753_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p> </p><p>Now I live in the Friary</p><p>with the friars.</p>";
	var switchTextFunction = function () {
		$("#obj6790").html(newHtml);
		setTimeout(function () {
			window.obj6753_onTap_runningActionsCount = window.obj6753_onTap_runningActionsCount - 1;
if (window.obj6753_onTap_runningActionsCount == 0) {
	obj6753_onTap_actionGroup1();
}
		}, 1);
	};
	if (fadeTime > 0) {
		var oldHtmlWrapped = "<div id=\"obj6790_old\" style=\"position:absolute; top:0px; width:100%;\">" + $("#obj6790").html() + "</div>";
		var newHtmlWrapped = "<div id=\"obj6790_new\" style=\"position:absolute; top:0px; width:100%; display:none;\">" + newHtml + "</div>";
		$("#obj6790").html(oldHtmlWrapped + newHtmlWrapped);
		$("#obj6790_old").fadeOut(fadeTime);
		$("#obj6790_new").fadeIn(fadeTime, switchTextFunction);
	} else {
		switchTextFunction();
	}
}





};
obj6753_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6753_onTap_activeActionGroupIndex = -1;
		$("#obj6753").trigger("obj6753_onTap_ended");
		
		return;
	}
	window.obj6753_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj6753 
hide_6756();
function hide_6756() {
	var element = "#obj6753";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6753_onTap_runningActionsCount = obj6753_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj6753_onTap_runningActionsCount = window.obj6753_onTap_runningActionsCount - 1;
if (window.obj6753_onTap_runningActionsCount == 0) {
	obj6753_onTap_actionGroup2();
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
		setTimeout(hide_6756(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj6753_onTap_runningActionsCount = window.obj6753_onTap_runningActionsCount - 1;
if (window.obj6753_onTap_runningActionsCount == 0) {
	obj6753_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj6758 
show_6757();
function show_6757() {
	var element = "#obj6758";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj6753_onTap_runningActionsCount = obj6753_onTap_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj6753_onTap_runningActionsCount = window.obj6753_onTap_runningActionsCount - 1;
if (window.obj6753_onTap_runningActionsCount == 0) {
	obj6753_onTap_actionGroup2();
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
		window.obj6753_onTap_runningActionsCount = window.obj6753_onTap_runningActionsCount - 1;
if (window.obj6753_onTap_runningActionsCount == 0) {
	obj6753_onTap_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj6753_onTap_runningActionsCount = window.obj6753_onTap_runningActionsCount - 1;
if (window.obj6753_onTap_runningActionsCount == 0) {
	obj6753_onTap_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj6753_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6753_onTap_activeActionGroupIndex = -1;
		$("#obj6753").trigger("obj6753_onTap_ended");
		
		return;
	}
	window.obj6753_onTap_activeActionGroupIndex = 2;
	





















};
obj6748_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6748_onTap_activeActionGroupIndex = -1;
		$("#obj6748").trigger("obj6748_onTap_ended");
		
		return;
	}
	window.obj6748_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_6750();
function switchText_6750() {
	window.obj6748_onTap_runningActionsCount = obj6748_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p>I came to Carrickfergus</p><p>in a big ship. <span class=\"apple-converted-space\"><br /></span></p><p> </p>";
	var switchTextFunction = function () {
		$("#obj6790").html(newHtml);
		setTimeout(function () {
			window.obj6748_onTap_runningActionsCount = window.obj6748_onTap_runningActionsCount - 1;
if (window.obj6748_onTap_runningActionsCount == 0) {
	obj6748_onTap_actionGroup1();
}
		}, 1);
	};
	if (fadeTime > 0) {
		var oldHtmlWrapped = "<div id=\"obj6790_old\" style=\"position:absolute; top:0px; width:100%;\">" + $("#obj6790").html() + "</div>";
		var newHtmlWrapped = "<div id=\"obj6790_new\" style=\"position:absolute; top:0px; width:100%; display:none;\">" + newHtml + "</div>";
		$("#obj6790").html(oldHtmlWrapped + newHtmlWrapped);
		$("#obj6790_old").fadeOut(fadeTime);
		$("#obj6790_new").fadeIn(fadeTime, switchTextFunction);
	} else {
		switchTextFunction();
	}
}





};
obj6748_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6748_onTap_activeActionGroupIndex = -1;
		$("#obj6748").trigger("obj6748_onTap_ended");
		
		return;
	}
	window.obj6748_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj6748 
hide_6751();
function hide_6751() {
	var element = "#obj6748";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6748_onTap_runningActionsCount = obj6748_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj6748_onTap_runningActionsCount = window.obj6748_onTap_runningActionsCount - 1;
if (window.obj6748_onTap_runningActionsCount == 0) {
	obj6748_onTap_actionGroup2();
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
		setTimeout(hide_6751(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj6748_onTap_runningActionsCount = window.obj6748_onTap_runningActionsCount - 1;
if (window.obj6748_onTap_runningActionsCount == 0) {
	obj6748_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj6753 
show_6752();
function show_6752() {
	var element = "#obj6753";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj6748_onTap_runningActionsCount = obj6748_onTap_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj6748_onTap_runningActionsCount = window.obj6748_onTap_runningActionsCount - 1;
if (window.obj6748_onTap_runningActionsCount == 0) {
	obj6748_onTap_actionGroup2();
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
		window.obj6748_onTap_runningActionsCount = window.obj6748_onTap_runningActionsCount - 1;
if (window.obj6748_onTap_runningActionsCount == 0) {
	obj6748_onTap_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj6748_onTap_runningActionsCount = window.obj6748_onTap_runningActionsCount - 1;
if (window.obj6748_onTap_runningActionsCount == 0) {
	obj6748_onTap_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj6748_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6748_onTap_activeActionGroupIndex = -1;
		$("#obj6748").trigger("obj6748_onTap_ended");
		
		return;
	}
	window.obj6748_onTap_activeActionGroupIndex = 2;
	





















};
obj6790_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6790_onLoad_activeActionGroupIndex = -1;
		$("#obj6790").trigger("obj6790_onLoad_ended");
		
		return;
	}
	window.obj6790_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_6794();
function wait_6794() {
	window.obj6790_onLoad_runningActionsCount = obj6790_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj6790_onLoad_runningActionsCount = window.obj6790_onLoad_runningActionsCount - 1;
if (window.obj6790_onLoad_runningActionsCount == 0) {
	obj6790_onLoad_actionGroup1();
}
	}, 1000);
}












};
obj6790_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6790_onLoad_activeActionGroupIndex = -1;
		$("#obj6790").trigger("obj6790_onLoad_ended");
		
		return;
	}
	window.obj6790_onLoad_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj6774 
show_6795();
function show_6795() {
	var element = "#obj6774";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj6790_onLoad_runningActionsCount = obj6790_onLoad_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj6790_onLoad_runningActionsCount = window.obj6790_onLoad_runningActionsCount - 1;
if (window.obj6790_onLoad_runningActionsCount == 0) {
	obj6790_onLoad_actionGroup2();
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
		window.obj6790_onLoad_runningActionsCount = window.obj6790_onLoad_runningActionsCount - 1;
if (window.obj6790_onLoad_runningActionsCount == 0) {
	obj6790_onLoad_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj6790_onLoad_runningActionsCount = window.obj6790_onLoad_runningActionsCount - 1;
if (window.obj6790_onLoad_runningActionsCount == 0) {
	obj6790_onLoad_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj6790_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6790_onLoad_activeActionGroupIndex = -1;
		$("#obj6790").trigger("obj6790_onLoad_ended");
		
		return;
	}
	window.obj6790_onLoad_activeActionGroupIndex = 2;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		































/*
 *
 *   obj6763: Event Touch Down
 *
 */
 
$("#obj6763").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6763_onTap_activeActionGroupIndex != -1) return;
var obj6763_onTap_runningActionsCount = 0;
var obj6763_onTap_loopCount = 0;
obj6763_onTap_actionGroup0();
});







/*
 *
 *   obj6758: Event Touch Down
 *
 */
 
$("#obj6758").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6758_onTap_activeActionGroupIndex != -1) return;
var obj6758_onTap_runningActionsCount = 0;
var obj6758_onTap_loopCount = 0;
obj6758_onTap_actionGroup0();
});







/*
 *
 *   obj6753: Event Touch Down
 *
 */
 
$("#obj6753").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6753_onTap_activeActionGroupIndex != -1) return;
var obj6753_onTap_runningActionsCount = 0;
var obj6753_onTap_loopCount = 0;
obj6753_onTap_actionGroup0();
});







/*
 *
 *   obj6748: Event Touch Down
 *
 */
 
$("#obj6748").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6748_onTap_activeActionGroupIndex != -1) return;
var obj6748_onTap_runningActionsCount = 0;
var obj6748_onTap_loopCount = 0;
obj6748_onTap_actionGroup0();
});









/*
 *
 *   obj6790: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj6790_onLoad_activeActionGroupIndex != -1) return;
var obj6790_onLoad_runningActionsCount = 0;
var obj6790_onLoad_loopCount = 0;
obj6790_onLoad_actionGroup0();
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
	
$("#obj6782").trigger('SCEventShow');
$("#obj6778").trigger('SCEventShow');
$("#obj6776").trigger('SCEventShow');
$("#obj6748").trigger('SCEventShow');
$("#obj6790").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});