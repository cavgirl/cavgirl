pubcoder.projectID = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.id = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.title = "HISTORY GALLERY DIGITAL TRAIL";
pubcoder.page.id = 1690;
pubcoder.page.title = "63";
pubcoder.page.number = 63;
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
var obj1722_onLoad_activeActionGroupIndex = -1;
var obj1722_onLoad_runningActionsCount = 0;
var obj1722_onLoad_loopCount = 0;
var obj1768_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj1768_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj1768_SCEventCounterReachedTargetValue_loopCount = 0;
var obj3948_onTap_activeActionGroupIndex = -1;
var obj3948_onTap_runningActionsCount = 0;
var obj3948_onTap_loopCount = 0;
var obj1833_onShow_activeActionGroupIndex = -1;
var obj1833_onShow_runningActionsCount = 0;
var obj1833_onShow_loopCount = 0;
var obj1883_onTap_activeActionGroupIndex = -1;
var obj1883_onTap_runningActionsCount = 0;
var obj1883_onTap_loopCount = 0;
var obj1886_onTap_activeActionGroupIndex = -1;
var obj1886_onTap_runningActionsCount = 0;
var obj1886_onTap_loopCount = 0;
var obj1889_onTap_activeActionGroupIndex = -1;
var obj1889_onTap_runningActionsCount = 0;
var obj1889_onTap_loopCount = 0;
var obj1892_onTap_activeActionGroupIndex = -1;
var obj1892_onTap_runningActionsCount = 0;
var obj1892_onTap_loopCount = 0;
var obj1895_onTap_activeActionGroupIndex = -1;
var obj1895_onTap_runningActionsCount = 0;
var obj1895_onTap_loopCount = 0;
var obj1898_onTap_activeActionGroupIndex = -1;
var obj1898_onTap_runningActionsCount = 0;
var obj1898_onTap_loopCount = 0;
var obj1901_onTap_activeActionGroupIndex = -1;
var obj1901_onTap_runningActionsCount = 0;
var obj1901_onTap_loopCount = 0;
var obj15948_onLoad_activeActionGroupIndex = -1;
var obj15948_onLoad_runningActionsCount = 0;
var obj15948_onLoad_loopCount = 0;
var obj16105_onTap_activeActionGroupIndex = -1;
var obj16105_onTap_runningActionsCount = 0;
var obj16105_onTap_loopCount = 0;
var obj16107_onTap_activeActionGroupIndex = -1;
var obj16107_onTap_runningActionsCount = 0;
var obj16107_onTap_loopCount = 0;
var obj16107_onShow_activeActionGroupIndex = -1;
var obj16107_onShow_runningActionsCount = 0;
var obj16107_onShow_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj1768_counterValue = 0;
var obj1768_counterTargetValue = 7;
var obj1768_counterCanExceedTargetValue = false;
var obj15948_counterValue = 0;
var obj15948_counterTargetValue = 2;
var obj15948_counterCanExceedTargetValue = false;
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
		
obj1722_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1722_onLoad_activeActionGroupIndex = -1;
		$("#obj1722").trigger("obj1722_onLoad_ended");
		
		return;
	}
	window.obj1722_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_1832();
function wait_1832() {
	window.obj1722_onLoad_runningActionsCount = obj1722_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj1722_onLoad_runningActionsCount = window.obj1722_onLoad_runningActionsCount - 1;
if (window.obj1722_onLoad_runningActionsCount == 0) {
	obj1722_onLoad_actionGroup1();
}
	}, 500);
}












};
obj1722_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1722_onLoad_activeActionGroupIndex = -1;
		$("#obj1722").trigger("obj1722_onLoad_ended");
		
		return;
	}
	window.obj1722_onLoad_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj3950 
hide_1749();
function hide_1749() {
	window.obj1722_onLoad_runningActionsCount = obj1722_onLoad_runningActionsCount + 1;
	$("#obj3950").fadeOut(1000, function() {
			setTimeout(function() {
				window.obj1722_onLoad_runningActionsCount = window.obj1722_onLoad_runningActionsCount - 1;
if (window.obj1722_onLoad_runningActionsCount == 0) {
	obj1722_onLoad_actionGroup2();
}
			}, 1);
		}
	);
}















//	action: increment counter
//	target: obj1768 
incrementCounter_1774();
function incrementCounter_1774() {
	window.obj1722_onLoad_runningActionsCount = obj1722_onLoad_runningActionsCount + 1;

	var oldValue = obj1768_counterValue;
	obj1768_counterValue = obj1768_counterValue + 1;
	if (! obj1768_counterCanExceedTargetValue && obj1768_counterValue > obj1768_counterTargetValue) {
		obj1768_counterValue = obj1768_counterTargetValue;
	}
	if (oldValue != obj1768_counterValue) {
		$("#obj1768").trigger('SCEventCounterValueChange');
		$("#obj1768").trigger('SCEventCounterIncrease');
		if (obj1768_counterValue == obj1768_counterTargetValue)
			$("#obj1768").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj1722_onLoad_runningActionsCount = window.obj1722_onLoad_runningActionsCount - 1;
if (window.obj1722_onLoad_runningActionsCount == 0) {
	obj1722_onLoad_actionGroup2();
} }, 1);
}





};
obj1722_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1722_onLoad_activeActionGroupIndex = -1;
		$("#obj1722").trigger("obj1722_onLoad_ended");
		
		return;
	}
	window.obj1722_onLoad_activeActionGroupIndex = 2;
	








//	action: wait
wait_1754();
function wait_1754() {
	window.obj1722_onLoad_runningActionsCount = obj1722_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj1722_onLoad_runningActionsCount = window.obj1722_onLoad_runningActionsCount - 1;
if (window.obj1722_onLoad_runningActionsCount == 0) {
	obj1722_onLoad_actionGroup3();
}
	}, 200);
}












};
obj1722_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1722_onLoad_activeActionGroupIndex = -1;
		$("#obj1722").trigger("obj1722_onLoad_ended");
		
		return;
	}
	window.obj1722_onLoad_activeActionGroupIndex = 3;
	

//	action: hide
//	target: obj3952 
hide_1756();
function hide_1756() {
	window.obj1722_onLoad_runningActionsCount = obj1722_onLoad_runningActionsCount + 1;
	$("#obj3952").fadeOut(1000, function() {
			setTimeout(function() {
				window.obj1722_onLoad_runningActionsCount = window.obj1722_onLoad_runningActionsCount - 1;
if (window.obj1722_onLoad_runningActionsCount == 0) {
	obj1722_onLoad_actionGroup4();
}
			}, 1);
		}
	);
}















//	action: increment counter
//	target: obj1768 
incrementCounter_1770();
function incrementCounter_1770() {
	window.obj1722_onLoad_runningActionsCount = obj1722_onLoad_runningActionsCount + 1;

	var oldValue = obj1768_counterValue;
	obj1768_counterValue = obj1768_counterValue + 1;
	if (! obj1768_counterCanExceedTargetValue && obj1768_counterValue > obj1768_counterTargetValue) {
		obj1768_counterValue = obj1768_counterTargetValue;
	}
	if (oldValue != obj1768_counterValue) {
		$("#obj1768").trigger('SCEventCounterValueChange');
		$("#obj1768").trigger('SCEventCounterIncrease');
		if (obj1768_counterValue == obj1768_counterTargetValue)
			$("#obj1768").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj1722_onLoad_runningActionsCount = window.obj1722_onLoad_runningActionsCount - 1;
if (window.obj1722_onLoad_runningActionsCount == 0) {
	obj1722_onLoad_actionGroup4();
} }, 1);
}





};
obj1722_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1722_onLoad_activeActionGroupIndex = -1;
		$("#obj1722").trigger("obj1722_onLoad_ended");
		
		return;
	}
	window.obj1722_onLoad_activeActionGroupIndex = 4;
	








//	action: wait
wait_1757();
function wait_1757() {
	window.obj1722_onLoad_runningActionsCount = obj1722_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj1722_onLoad_runningActionsCount = window.obj1722_onLoad_runningActionsCount - 1;
if (window.obj1722_onLoad_runningActionsCount == 0) {
	obj1722_onLoad_actionGroup5();
}
	}, 200);
}












};
obj1722_onLoad_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1722_onLoad_activeActionGroupIndex = -1;
		$("#obj1722").trigger("obj1722_onLoad_ended");
		
		return;
	}
	window.obj1722_onLoad_activeActionGroupIndex = 5;
	

//	action: hide
//	target: obj3954 
hide_1758();
function hide_1758() {
	window.obj1722_onLoad_runningActionsCount = obj1722_onLoad_runningActionsCount + 1;
	$("#obj3954").fadeOut(1000, function() {
			setTimeout(function() {
				window.obj1722_onLoad_runningActionsCount = window.obj1722_onLoad_runningActionsCount - 1;
if (window.obj1722_onLoad_runningActionsCount == 0) {
	obj1722_onLoad_actionGroup6();
}
			}, 1);
		}
	);
}















//	action: increment counter
//	target: obj1768 
incrementCounter_1771();
function incrementCounter_1771() {
	window.obj1722_onLoad_runningActionsCount = obj1722_onLoad_runningActionsCount + 1;

	var oldValue = obj1768_counterValue;
	obj1768_counterValue = obj1768_counterValue + 1;
	if (! obj1768_counterCanExceedTargetValue && obj1768_counterValue > obj1768_counterTargetValue) {
		obj1768_counterValue = obj1768_counterTargetValue;
	}
	if (oldValue != obj1768_counterValue) {
		$("#obj1768").trigger('SCEventCounterValueChange');
		$("#obj1768").trigger('SCEventCounterIncrease');
		if (obj1768_counterValue == obj1768_counterTargetValue)
			$("#obj1768").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj1722_onLoad_runningActionsCount = window.obj1722_onLoad_runningActionsCount - 1;
if (window.obj1722_onLoad_runningActionsCount == 0) {
	obj1722_onLoad_actionGroup6();
} }, 1);
}





};
obj1722_onLoad_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1722_onLoad_activeActionGroupIndex = -1;
		$("#obj1722").trigger("obj1722_onLoad_ended");
		
		return;
	}
	window.obj1722_onLoad_activeActionGroupIndex = 6;
	








//	action: wait
wait_1759();
function wait_1759() {
	window.obj1722_onLoad_runningActionsCount = obj1722_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj1722_onLoad_runningActionsCount = window.obj1722_onLoad_runningActionsCount - 1;
if (window.obj1722_onLoad_runningActionsCount == 0) {
	obj1722_onLoad_actionGroup7();
}
	}, 200);
}












};
obj1722_onLoad_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1722_onLoad_activeActionGroupIndex = -1;
		$("#obj1722").trigger("obj1722_onLoad_ended");
		
		return;
	}
	window.obj1722_onLoad_activeActionGroupIndex = 7;
	

//	action: hide
//	target: obj3956 
hide_1760();
function hide_1760() {
	window.obj1722_onLoad_runningActionsCount = obj1722_onLoad_runningActionsCount + 1;
	$("#obj3956").fadeOut(1000, function() {
			setTimeout(function() {
				window.obj1722_onLoad_runningActionsCount = window.obj1722_onLoad_runningActionsCount - 1;
if (window.obj1722_onLoad_runningActionsCount == 0) {
	obj1722_onLoad_actionGroup8();
}
			}, 1);
		}
	);
}















//	action: increment counter
//	target: obj1768 
incrementCounter_1772();
function incrementCounter_1772() {
	window.obj1722_onLoad_runningActionsCount = obj1722_onLoad_runningActionsCount + 1;

	var oldValue = obj1768_counterValue;
	obj1768_counterValue = obj1768_counterValue + 1;
	if (! obj1768_counterCanExceedTargetValue && obj1768_counterValue > obj1768_counterTargetValue) {
		obj1768_counterValue = obj1768_counterTargetValue;
	}
	if (oldValue != obj1768_counterValue) {
		$("#obj1768").trigger('SCEventCounterValueChange');
		$("#obj1768").trigger('SCEventCounterIncrease');
		if (obj1768_counterValue == obj1768_counterTargetValue)
			$("#obj1768").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj1722_onLoad_runningActionsCount = window.obj1722_onLoad_runningActionsCount - 1;
if (window.obj1722_onLoad_runningActionsCount == 0) {
	obj1722_onLoad_actionGroup8();
} }, 1);
}





};
obj1722_onLoad_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1722_onLoad_activeActionGroupIndex = -1;
		$("#obj1722").trigger("obj1722_onLoad_ended");
		
		return;
	}
	window.obj1722_onLoad_activeActionGroupIndex = 8;
	








//	action: wait
wait_1761();
function wait_1761() {
	window.obj1722_onLoad_runningActionsCount = obj1722_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj1722_onLoad_runningActionsCount = window.obj1722_onLoad_runningActionsCount - 1;
if (window.obj1722_onLoad_runningActionsCount == 0) {
	obj1722_onLoad_actionGroup9();
}
	}, 200);
}












};
obj1722_onLoad_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1722_onLoad_activeActionGroupIndex = -1;
		$("#obj1722").trigger("obj1722_onLoad_ended");
		
		return;
	}
	window.obj1722_onLoad_activeActionGroupIndex = 9;
	

//	action: hide
//	target: obj3958 
hide_1762();
function hide_1762() {
	window.obj1722_onLoad_runningActionsCount = obj1722_onLoad_runningActionsCount + 1;
	$("#obj3958").fadeOut(1000, function() {
			setTimeout(function() {
				window.obj1722_onLoad_runningActionsCount = window.obj1722_onLoad_runningActionsCount - 1;
if (window.obj1722_onLoad_runningActionsCount == 0) {
	obj1722_onLoad_actionGroup10();
}
			}, 1);
		}
	);
}















//	action: increment counter
//	target: obj1768 
incrementCounter_1773();
function incrementCounter_1773() {
	window.obj1722_onLoad_runningActionsCount = obj1722_onLoad_runningActionsCount + 1;

	var oldValue = obj1768_counterValue;
	obj1768_counterValue = obj1768_counterValue + 1;
	if (! obj1768_counterCanExceedTargetValue && obj1768_counterValue > obj1768_counterTargetValue) {
		obj1768_counterValue = obj1768_counterTargetValue;
	}
	if (oldValue != obj1768_counterValue) {
		$("#obj1768").trigger('SCEventCounterValueChange');
		$("#obj1768").trigger('SCEventCounterIncrease');
		if (obj1768_counterValue == obj1768_counterTargetValue)
			$("#obj1768").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj1722_onLoad_runningActionsCount = window.obj1722_onLoad_runningActionsCount - 1;
if (window.obj1722_onLoad_runningActionsCount == 0) {
	obj1722_onLoad_actionGroup10();
} }, 1);
}





};
obj1722_onLoad_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1722_onLoad_activeActionGroupIndex = -1;
		$("#obj1722").trigger("obj1722_onLoad_ended");
		
		return;
	}
	window.obj1722_onLoad_activeActionGroupIndex = 10;
	








//	action: wait
wait_1763();
function wait_1763() {
	window.obj1722_onLoad_runningActionsCount = obj1722_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj1722_onLoad_runningActionsCount = window.obj1722_onLoad_runningActionsCount - 1;
if (window.obj1722_onLoad_runningActionsCount == 0) {
	obj1722_onLoad_actionGroup11();
}
	}, 200);
}












};
obj1722_onLoad_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1722_onLoad_activeActionGroupIndex = -1;
		$("#obj1722").trigger("obj1722_onLoad_ended");
		
		return;
	}
	window.obj1722_onLoad_activeActionGroupIndex = 11;
	

//	action: hide
//	target: obj3960 
hide_1764();
function hide_1764() {
	window.obj1722_onLoad_runningActionsCount = obj1722_onLoad_runningActionsCount + 1;
	$("#obj3960").fadeOut(1000, function() {
			setTimeout(function() {
				window.obj1722_onLoad_runningActionsCount = window.obj1722_onLoad_runningActionsCount - 1;
if (window.obj1722_onLoad_runningActionsCount == 0) {
	obj1722_onLoad_actionGroup12();
}
			}, 1);
		}
	);
}















//	action: increment counter
//	target: obj1768 
incrementCounter_1775();
function incrementCounter_1775() {
	window.obj1722_onLoad_runningActionsCount = obj1722_onLoad_runningActionsCount + 1;

	var oldValue = obj1768_counterValue;
	obj1768_counterValue = obj1768_counterValue + 1;
	if (! obj1768_counterCanExceedTargetValue && obj1768_counterValue > obj1768_counterTargetValue) {
		obj1768_counterValue = obj1768_counterTargetValue;
	}
	if (oldValue != obj1768_counterValue) {
		$("#obj1768").trigger('SCEventCounterValueChange');
		$("#obj1768").trigger('SCEventCounterIncrease');
		if (obj1768_counterValue == obj1768_counterTargetValue)
			$("#obj1768").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj1722_onLoad_runningActionsCount = window.obj1722_onLoad_runningActionsCount - 1;
if (window.obj1722_onLoad_runningActionsCount == 0) {
	obj1722_onLoad_actionGroup12();
} }, 1);
}





};
obj1722_onLoad_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1722_onLoad_activeActionGroupIndex = -1;
		$("#obj1722").trigger("obj1722_onLoad_ended");
		
		return;
	}
	window.obj1722_onLoad_activeActionGroupIndex = 12;
	








//	action: wait
wait_1765();
function wait_1765() {
	window.obj1722_onLoad_runningActionsCount = obj1722_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj1722_onLoad_runningActionsCount = window.obj1722_onLoad_runningActionsCount - 1;
if (window.obj1722_onLoad_runningActionsCount == 0) {
	obj1722_onLoad_actionGroup13();
}
	}, 200);
}












};
obj1722_onLoad_actionGroup13 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1722_onLoad_activeActionGroupIndex = -1;
		$("#obj1722").trigger("obj1722_onLoad_ended");
		
		return;
	}
	window.obj1722_onLoad_activeActionGroupIndex = 13;
	

//	action: hide
//	target: obj3962 
hide_1766();
function hide_1766() {
	window.obj1722_onLoad_runningActionsCount = obj1722_onLoad_runningActionsCount + 1;
	$("#obj3962").fadeOut(1000, function() {
			setTimeout(function() {
				window.obj1722_onLoad_runningActionsCount = window.obj1722_onLoad_runningActionsCount - 1;
if (window.obj1722_onLoad_runningActionsCount == 0) {
	obj1722_onLoad_actionGroup14();
}
			}, 1);
		}
	);
}















//	action: increment counter
//	target: obj1768 
incrementCounter_1776();
function incrementCounter_1776() {
	window.obj1722_onLoad_runningActionsCount = obj1722_onLoad_runningActionsCount + 1;

	var oldValue = obj1768_counterValue;
	obj1768_counterValue = obj1768_counterValue + 1;
	if (! obj1768_counterCanExceedTargetValue && obj1768_counterValue > obj1768_counterTargetValue) {
		obj1768_counterValue = obj1768_counterTargetValue;
	}
	if (oldValue != obj1768_counterValue) {
		$("#obj1768").trigger('SCEventCounterValueChange');
		$("#obj1768").trigger('SCEventCounterIncrease');
		if (obj1768_counterValue == obj1768_counterTargetValue)
			$("#obj1768").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj1722_onLoad_runningActionsCount = window.obj1722_onLoad_runningActionsCount - 1;
if (window.obj1722_onLoad_runningActionsCount == 0) {
	obj1722_onLoad_actionGroup14();
} }, 1);
}





};
obj1722_onLoad_actionGroup14 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1722_onLoad_activeActionGroupIndex = -1;
		$("#obj1722").trigger("obj1722_onLoad_ended");
		
		return;
	}
	window.obj1722_onLoad_activeActionGroupIndex = 14;
	





















};
obj1768_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1768_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj1768").trigger("obj1768_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj1768_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1833 
show_1847();
function show_1847() {
	window.obj1768_SCEventCounterReachedTargetValue_runningActionsCount = obj1768_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj1833").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1768_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1768_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1768_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1768_SCEventCounterReachedTargetValue_actionGroup1();
}
				$("#obj1833").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj1768_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1768_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj1768").trigger("obj1768_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj1768_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	





















};
obj3948_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3948_onTap_activeActionGroupIndex = -1;
		$("#obj3948").trigger("obj3948_onTap_ended");
		
		return;
	}
	window.obj3948_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page65
goToPage_14595();
function goToPage_14595() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../65/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(65))},200);
	}
}





















};
obj3948_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3948_onTap_activeActionGroupIndex = -1;
		$("#obj3948").trigger("obj3948_onTap_ended");
		
		return;
	}
	window.obj3948_onTap_activeActionGroupIndex = 1;
	





















};
obj1833_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1833_onShow_activeActionGroupIndex = -1;
		$("#obj1833").trigger("obj1833_onShow_ended");
		
		return;
	}
	window.obj1833_onShow_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj3948 
show_3593();
function show_3593() {
	window.obj1833_onShow_runningActionsCount = obj1833_onShow_runningActionsCount + 1;
	$("#obj3948").fadeIn(500, function() {
			setTimeout(function() {
				window.obj1833_onShow_runningActionsCount = window.obj1833_onShow_runningActionsCount - 1;
if (window.obj1833_onShow_runningActionsCount == 0) {
	obj1833_onShow_actionGroup1();
}
				$("#obj3948").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj1833_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1833_onShow_activeActionGroupIndex = -1;
		$("#obj1833").trigger("obj1833_onShow_ended");
		
		return;
	}
	window.obj1833_onShow_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj1833 
rotate_1848();
function rotate_1848() {
	window.obj1833_onShow_runningActionsCount = obj1833_onShow_runningActionsCount + 1;
	
	var targetObjectId = "#obj1833";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1833';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '7.048245';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_1848_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1848_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1848_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1848_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1848_completed() {
	setTimeout(function() {
		window.obj1833_onShow_runningActionsCount = window.obj1833_onShow_runningActionsCount - 1;
if (window.obj1833_onShow_runningActionsCount == 0) {
	obj1833_onShow_actionGroup2();
}
	}, 1);
}














};
obj1833_onShow_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1833_onShow_activeActionGroupIndex = -1;
		$("#obj1833").trigger("obj1833_onShow_ended");
		
		return;
	}
	window.obj1833_onShow_activeActionGroupIndex = 2;
	







//	action: rotate 
//	target: obj1833 
rotate_1849();
function rotate_1849() {
	window.obj1833_onShow_runningActionsCount = obj1833_onShow_runningActionsCount + 1;
	
	var targetObjectId = "#obj1833";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1833';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-8.970629';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_1849_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1849_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1849_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1849_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1849_completed() {
	setTimeout(function() {
		window.obj1833_onShow_runningActionsCount = window.obj1833_onShow_runningActionsCount - 1;
if (window.obj1833_onShow_runningActionsCount == 0) {
	obj1833_onShow_actionGroup3();
}
	}, 1);
}














};
obj1833_onShow_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1833_onShow_activeActionGroupIndex = -1;
		$("#obj1833").trigger("obj1833_onShow_ended");
		
		return;
	}
	window.obj1833_onShow_activeActionGroupIndex = 3;
	







//	action: rotate 
//	target: obj1833 
rotate_1850();
function rotate_1850() {
	window.obj1833_onShow_runningActionsCount = obj1833_onShow_runningActionsCount + 1;
	
	var targetObjectId = "#obj1833";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1833';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-0.1925747';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_1850_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1850_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1850_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1850_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1850_completed() {
	setTimeout(function() {
		window.obj1833_onShow_runningActionsCount = window.obj1833_onShow_runningActionsCount - 1;
if (window.obj1833_onShow_runningActionsCount == 0) {
	obj1833_onShow_actionGroup4();
}
	}, 1);
}














};
obj1833_onShow_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1833_onShow_activeActionGroupIndex = -1;
		$("#obj1833").trigger("obj1833_onShow_ended");
		
		return;
	}
	window.obj1833_onShow_activeActionGroupIndex = 4;
	








//	action: loop
loop_obj1833_onShow();
function loop_obj1833_onShow() {
	var loopCount = 1;
	window.obj1833_onShow_loopCount = window.obj1833_onShow_loopCount + 1;
	if (loopCount != 0 && window.obj1833_onShow_loopCount > loopCount) {
		window.obj1833_onShow_loopCount = 0
		obj1833_onShow_actionGroup5();
	} else {
		obj1833_onShow_actionGroup0();
	}
}













};
obj1833_onShow_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1833_onShow_activeActionGroupIndex = -1;
		$("#obj1833").trigger("obj1833_onShow_ended");
		
		return;
	}
	window.obj1833_onShow_activeActionGroupIndex = 5;
	





















};
obj1883_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1883_onTap_activeActionGroupIndex = -1;
		$("#obj1883").trigger("obj1883_onTap_ended");
		
		return;
	}
	window.obj1883_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page10
goToPage_2106();
function goToPage_2106() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../10/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(10))},200);
	}
}





















};
obj1883_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1883_onTap_activeActionGroupIndex = -1;
		$("#obj1883").trigger("obj1883_onTap_ended");
		
		return;
	}
	window.obj1883_onTap_activeActionGroupIndex = 1;
	





















};
obj1886_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1886_onTap_activeActionGroupIndex = -1;
		$("#obj1886").trigger("obj1886_onTap_ended");
		
		return;
	}
	window.obj1886_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page19
goToPage_2107();
function goToPage_2107() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../19/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(19))},200);
	}
}





















};
obj1886_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1886_onTap_activeActionGroupIndex = -1;
		$("#obj1886").trigger("obj1886_onTap_ended");
		
		return;
	}
	window.obj1886_onTap_activeActionGroupIndex = 1;
	





















};
obj1889_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1889_onTap_activeActionGroupIndex = -1;
		$("#obj1889").trigger("obj1889_onTap_ended");
		
		return;
	}
	window.obj1889_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page26
goToPage_2108();
function goToPage_2108() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../26/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(26))},200);
	}
}





















};
obj1889_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1889_onTap_activeActionGroupIndex = -1;
		$("#obj1889").trigger("obj1889_onTap_ended");
		
		return;
	}
	window.obj1889_onTap_activeActionGroupIndex = 1;
	





















};
obj1892_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1892_onTap_activeActionGroupIndex = -1;
		$("#obj1892").trigger("obj1892_onTap_ended");
		
		return;
	}
	window.obj1892_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page35
goToPage_2109();
function goToPage_2109() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../35/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(35))},200);
	}
}





















};
obj1892_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1892_onTap_activeActionGroupIndex = -1;
		$("#obj1892").trigger("obj1892_onTap_ended");
		
		return;
	}
	window.obj1892_onTap_activeActionGroupIndex = 1;
	





















};
obj1895_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1895_onTap_activeActionGroupIndex = -1;
		$("#obj1895").trigger("obj1895_onTap_ended");
		
		return;
	}
	window.obj1895_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page42
goToPage_2110();
function goToPage_2110() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../42/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(42))},200);
	}
}





















};
obj1895_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1895_onTap_activeActionGroupIndex = -1;
		$("#obj1895").trigger("obj1895_onTap_ended");
		
		return;
	}
	window.obj1895_onTap_activeActionGroupIndex = 1;
	





















};
obj1898_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1898_onTap_activeActionGroupIndex = -1;
		$("#obj1898").trigger("obj1898_onTap_ended");
		
		return;
	}
	window.obj1898_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page54
goToPage_2111();
function goToPage_2111() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../54/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(54))},200);
	}
}





















};
obj1898_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1898_onTap_activeActionGroupIndex = -1;
		$("#obj1898").trigger("obj1898_onTap_ended");
		
		return;
	}
	window.obj1898_onTap_activeActionGroupIndex = 1;
	





















};
obj1901_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1901_onTap_activeActionGroupIndex = -1;
		$("#obj1901").trigger("obj1901_onTap_ended");
		
		return;
	}
	window.obj1901_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page61
goToPage_2112();
function goToPage_2112() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../61/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(61))},200);
	}
}





















};
obj1901_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1901_onTap_activeActionGroupIndex = -1;
		$("#obj1901").trigger("obj1901_onTap_ended");
		
		return;
	}
	window.obj1901_onTap_activeActionGroupIndex = 1;
	





















};
obj15948_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15948_onLoad_activeActionGroupIndex = -1;
		$("#obj15948").trigger("obj15948_onLoad_ended");
		
		return;
	}
	window.obj15948_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_15951();
function wait_15951() {
	window.obj15948_onLoad_runningActionsCount = obj15948_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj15948_onLoad_runningActionsCount = window.obj15948_onLoad_runningActionsCount - 1;
if (window.obj15948_onLoad_runningActionsCount == 0) {
	obj15948_onLoad_actionGroup1();
}
	}, 600000);
}












};
obj15948_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15948_onLoad_activeActionGroupIndex = -1;
		$("#obj15948").trigger("obj15948_onLoad_ended");
		
		return;
	}
	window.obj15948_onLoad_activeActionGroupIndex = 1;
	
//	action: goToPage
//	target: page1
goToPage_15952();
function goToPage_15952() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../1/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(1))},200);
	}
}





















};
obj15948_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15948_onLoad_activeActionGroupIndex = -1;
		$("#obj15948").trigger("obj15948_onLoad_ended");
		
		return;
	}
	window.obj15948_onLoad_activeActionGroupIndex = 2;
	





















};
obj16105_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16105_onTap_activeActionGroupIndex = -1;
		$("#obj16105").trigger("obj16105_onTap_ended");
		
		return;
	}
	window.obj16105_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj16105 
hide_16111();
function hide_16111() {
	window.obj16105_onTap_runningActionsCount = obj16105_onTap_runningActionsCount + 1;
	$("#obj16105").fadeOut(0, function() {
			setTimeout(function() {
				window.obj16105_onTap_runningActionsCount = window.obj16105_onTap_runningActionsCount - 1;
if (window.obj16105_onTap_runningActionsCount == 0) {
	obj16105_onTap_actionGroup1();
}
			}, 1);
		}
	);
}
//	action: show 
//	target: obj16107 
show_16112();
function show_16112() {
	window.obj16105_onTap_runningActionsCount = obj16105_onTap_runningActionsCount + 1;
	$("#obj16107").fadeIn(0, function() {
			setTimeout(function() {
				window.obj16105_onTap_runningActionsCount = window.obj16105_onTap_runningActionsCount - 1;
if (window.obj16105_onTap_runningActionsCount == 0) {
	obj16105_onTap_actionGroup1();
}
				$("#obj16107").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj16105_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16105_onTap_activeActionGroupIndex = -1;
		$("#obj16105").trigger("obj16105_onTap_ended");
		
		return;
	}
	window.obj16105_onTap_activeActionGroupIndex = 1;
	





















};
obj16107_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16107_onTap_activeActionGroupIndex = -1;
		$("#obj16107").trigger("obj16107_onTap_ended");
		
		return;
	}
	window.obj16107_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page1
goToPage_16109();
function goToPage_16109() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../1/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(1))},200);
	}
}





















};
obj16107_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16107_onTap_activeActionGroupIndex = -1;
		$("#obj16107").trigger("obj16107_onTap_ended");
		
		return;
	}
	window.obj16107_onTap_activeActionGroupIndex = 1;
	





















};
obj16107_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16107_onTap_activeActionGroupIndex = -1;
		$("#obj16107").trigger("obj16107_onTap_ended");
		
		return;
	}
	window.obj16107_onTap_activeActionGroupIndex = 2;
	





















};
obj16107_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16107_onShow_activeActionGroupIndex = -1;
		$("#obj16107").trigger("obj16107_onShow_ended");
		
		return;
	}
	window.obj16107_onShow_activeActionGroupIndex = 0;
	








//	action: wait
wait_16136();
function wait_16136() {
	window.obj16107_onShow_runningActionsCount = obj16107_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj16107_onShow_runningActionsCount = window.obj16107_onShow_runningActionsCount - 1;
if (window.obj16107_onShow_runningActionsCount == 0) {
	obj16107_onShow_actionGroup1();
}
	}, 3000);
}












};
obj16107_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16107_onShow_activeActionGroupIndex = -1;
		$("#obj16107").trigger("obj16107_onShow_ended");
		
		return;
	}
	window.obj16107_onShow_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj16107 
hide_16137();
function hide_16137() {
	window.obj16107_onShow_runningActionsCount = obj16107_onShow_runningActionsCount + 1;
	$("#obj16107").fadeOut(0, function() {
			setTimeout(function() {
				window.obj16107_onShow_runningActionsCount = window.obj16107_onShow_runningActionsCount - 1;
if (window.obj16107_onShow_runningActionsCount == 0) {
	obj16107_onShow_actionGroup2();
}
			}, 1);
		}
	);
}
//	action: show 
//	target: obj16105 
show_16138();
function show_16138() {
	window.obj16107_onShow_runningActionsCount = obj16107_onShow_runningActionsCount + 1;
	$("#obj16105").fadeIn(0, function() {
			setTimeout(function() {
				window.obj16107_onShow_runningActionsCount = window.obj16107_onShow_runningActionsCount - 1;
if (window.obj16107_onShow_runningActionsCount == 0) {
	obj16107_onShow_actionGroup2();
}
				$("#obj16105").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj16107_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16107_onShow_activeActionGroupIndex = -1;
		$("#obj16107").trigger("obj16107_onShow_ended");
		
		return;
	}
	window.obj16107_onShow_activeActionGroupIndex = 2;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		












/*
 *
 *   obj1722: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1722_onLoad_activeActionGroupIndex != -1) return;
var obj1722_onLoad_runningActionsCount = 0;
var obj1722_onLoad_loopCount = 0;
obj1722_onLoad_actionGroup0();
});








/*
 *
 *   obj1768: Event SCEventCounterReachedTargetValue
 *
 */
$("#obj1768").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj1768_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) return;
var obj1768_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj1768_SCEventCounterReachedTargetValue_loopCount = 0;
obj1768_SCEventCounterReachedTargetValue_actionGroup0();
});




















































/*
 *
 *   obj3948: Event Touch Down
 *
 */
 
$("#obj3948").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3948_onTap_activeActionGroupIndex != -1) return;
var obj3948_onTap_runningActionsCount = 0;
var obj3948_onTap_loopCount = 0;
obj3948_onTap_actionGroup0();
});








/*
 *
 *   obj1833: Event Show
 *
 */
 
$("#obj1833").bind('SCEventShow', function(event) {
	if (window.obj1833_onShow_activeActionGroupIndex != -1) return;
var obj1833_onShow_runningActionsCount = 0;
var obj1833_onShow_loopCount = 0;
obj1833_onShow_actionGroup0();
});





/*
 *
 *   obj1883: Event Touch Down
 *
 */
 
$("#obj1883").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1883_onTap_activeActionGroupIndex != -1) return;
var obj1883_onTap_runningActionsCount = 0;
var obj1883_onTap_loopCount = 0;
obj1883_onTap_actionGroup0();
});







/*
 *
 *   obj1886: Event Touch Down
 *
 */
 
$("#obj1886").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1886_onTap_activeActionGroupIndex != -1) return;
var obj1886_onTap_runningActionsCount = 0;
var obj1886_onTap_loopCount = 0;
obj1886_onTap_actionGroup0();
});







/*
 *
 *   obj1889: Event Touch Down
 *
 */
 
$("#obj1889").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1889_onTap_activeActionGroupIndex != -1) return;
var obj1889_onTap_runningActionsCount = 0;
var obj1889_onTap_loopCount = 0;
obj1889_onTap_actionGroup0();
});







/*
 *
 *   obj1892: Event Touch Down
 *
 */
 
$("#obj1892").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1892_onTap_activeActionGroupIndex != -1) return;
var obj1892_onTap_runningActionsCount = 0;
var obj1892_onTap_loopCount = 0;
obj1892_onTap_actionGroup0();
});







/*
 *
 *   obj1895: Event Touch Down
 *
 */
 
$("#obj1895").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1895_onTap_activeActionGroupIndex != -1) return;
var obj1895_onTap_runningActionsCount = 0;
var obj1895_onTap_loopCount = 0;
obj1895_onTap_actionGroup0();
});







/*
 *
 *   obj1898: Event Touch Down
 *
 */
 
$("#obj1898").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1898_onTap_activeActionGroupIndex != -1) return;
var obj1898_onTap_runningActionsCount = 0;
var obj1898_onTap_loopCount = 0;
obj1898_onTap_actionGroup0();
});







/*
 *
 *   obj1901: Event Touch Down
 *
 */
 
$("#obj1901").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1901_onTap_activeActionGroupIndex != -1) return;
var obj1901_onTap_runningActionsCount = 0;
var obj1901_onTap_loopCount = 0;
obj1901_onTap_actionGroup0();
});









/*
 *
 *   obj15948: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj15948_onLoad_activeActionGroupIndex != -1) return;
var obj15948_onLoad_runningActionsCount = 0;
var obj15948_onLoad_loopCount = 0;
obj15948_onLoad_actionGroup0();
});





/*
 *
 *   obj16105: Event Touch Down
 *
 */
 
$("#obj16105").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16105_onTap_activeActionGroupIndex != -1) return;
var obj16105_onTap_runningActionsCount = 0;
var obj16105_onTap_loopCount = 0;
obj16105_onTap_actionGroup0();
});







/*
 *
 *   obj16107: Event Touch Down
 *
 */
 
$("#obj16107").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16107_onTap_activeActionGroupIndex != -1) return;
var obj16107_onTap_runningActionsCount = 0;
var obj16107_onTap_loopCount = 0;
obj16107_onTap_actionGroup0();
});

/*
 *
 *   obj16107: Event Show
 *
 */
 
$("#obj16107").bind('SCEventShow', function(event) {
	if (window.obj16107_onShow_activeActionGroupIndex != -1) return;
var obj16107_onShow_runningActionsCount = 0;
var obj16107_onShow_loopCount = 0;
obj16107_onShow_actionGroup0();
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
	
$("#obj1691").trigger('SCEventShow');
$("#obj1722").trigger('SCEventShow');
$("#obj3950").trigger('SCEventShow');
$("#obj3952").trigger('SCEventShow');
$("#obj3954").trigger('SCEventShow');
$("#obj3956").trigger('SCEventShow');
$("#obj3958").trigger('SCEventShow');
$("#obj3960").trigger('SCEventShow');
$("#obj3962").trigger('SCEventShow');
$("#obj1883").trigger('SCEventShow');
$("#obj1886").trigger('SCEventShow');
$("#obj1889").trigger('SCEventShow');
$("#obj1892").trigger('SCEventShow');
$("#obj1895").trigger('SCEventShow');
$("#obj1898").trigger('SCEventShow');
$("#obj1901").trigger('SCEventShow');
$("#obj16105").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});