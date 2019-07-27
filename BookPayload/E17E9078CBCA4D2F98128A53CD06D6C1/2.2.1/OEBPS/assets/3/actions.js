pubcoder.projectID = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.id = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.title = "HISTORY GALLERY DIGITAL TRAIL";
pubcoder.page.id = 9244;
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
var obj14415_onShow_activeActionGroupIndex = -1;
var obj14415_onShow_runningActionsCount = 0;
var obj14415_onShow_loopCount = 0;
var obj14410_onLoad_activeActionGroupIndex = -1;
var obj14410_onLoad_runningActionsCount = 0;
var obj14410_onLoad_loopCount = 0;
var obj14388_onShow_activeActionGroupIndex = -1;
var obj14388_onShow_runningActionsCount = 0;
var obj14388_onShow_loopCount = 0;
var obj9265_onTap_activeActionGroupIndex = -1;
var obj9265_onTap_runningActionsCount = 0;
var obj9265_onTap_loopCount = 0;
var obj9265_onTouchDown_activeActionGroupIndex = -1;
var obj9265_onTouchDown_runningActionsCount = 0;
var obj9265_onTouchDown_loopCount = 0;
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
		
obj14415_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14415_onShow_activeActionGroupIndex = -1;
		$("#obj14415").trigger("obj14415_onShow_ended");
		
		return;
	}
	window.obj14415_onShow_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj14388 
show_14430();
function show_14430() {
	window.obj14415_onShow_runningActionsCount = obj14415_onShow_runningActionsCount + 1;
	$("#obj14388").fadeIn(0, function() {
			setTimeout(function() {
				window.obj14415_onShow_runningActionsCount = window.obj14415_onShow_runningActionsCount - 1;
if (window.obj14415_onShow_runningActionsCount == 0) {
	obj14415_onShow_actionGroup1();
}
				$("#obj14388").trigger('SCEventShow');
			}, 1);
		}
	);
}













//	action: Run JavaScript
runjs_14429();
function runjs_14429() {
	window.obj14415_onShow_runningActionsCount = obj14415_onShow_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj14388"));
	setTimeout(function() {
		window.obj14415_onShow_runningActionsCount = window.obj14415_onShow_runningActionsCount - 1;
if (window.obj14415_onShow_runningActionsCount == 0) {
	obj14415_onShow_actionGroup1();
}
	}, 1);
}






};
obj14415_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14415_onShow_activeActionGroupIndex = -1;
		$("#obj14415").trigger("obj14415_onShow_ended");
		
		return;
	}
	window.obj14415_onShow_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj9265 
show_14433();
function show_14433() {
	window.obj14415_onShow_runningActionsCount = obj14415_onShow_runningActionsCount + 1;
	$("#obj9265").fadeIn(0, function() {
			setTimeout(function() {
				window.obj14415_onShow_runningActionsCount = window.obj14415_onShow_runningActionsCount - 1;
if (window.obj14415_onShow_runningActionsCount == 0) {
	obj14415_onShow_actionGroup2();
}
				$("#obj9265").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj14415_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14415_onShow_activeActionGroupIndex = -1;
		$("#obj14415").trigger("obj14415_onShow_ended");
		
		return;
	}
	window.obj14415_onShow_activeActionGroupIndex = 2;
	





















};
obj14410_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14410_onLoad_activeActionGroupIndex = -1;
		$("#obj14410").trigger("obj14410_onLoad_ended");
		
		return;
	}
	window.obj14410_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_14423();
function wait_14423() {
	window.obj14410_onLoad_runningActionsCount = obj14410_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj14410_onLoad_runningActionsCount = window.obj14410_onLoad_runningActionsCount - 1;
if (window.obj14410_onLoad_runningActionsCount == 0) {
	obj14410_onLoad_actionGroup1();
}
	}, 2000);
}












};
obj14410_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14410_onLoad_activeActionGroupIndex = -1;
		$("#obj14410").trigger("obj14410_onLoad_ended");
		
		return;
	}
	window.obj14410_onLoad_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj14410 
hide_14424();
function hide_14424() {
	window.obj14410_onLoad_runningActionsCount = obj14410_onLoad_runningActionsCount + 1;
	$("#obj14410").fadeOut(1000, function() {
			setTimeout(function() {
				window.obj14410_onLoad_runningActionsCount = window.obj14410_onLoad_runningActionsCount - 1;
if (window.obj14410_onLoad_runningActionsCount == 0) {
	obj14410_onLoad_actionGroup2();
}
			}, 1);
		}
	);
}
//	action: show 
//	target: obj14415 
show_14425();
function show_14425() {
	window.obj14410_onLoad_runningActionsCount = obj14410_onLoad_runningActionsCount + 1;
	$("#obj14415").fadeIn(0, function() {
			setTimeout(function() {
				window.obj14410_onLoad_runningActionsCount = window.obj14410_onLoad_runningActionsCount - 1;
if (window.obj14410_onLoad_runningActionsCount == 0) {
	obj14410_onLoad_actionGroup2();
}
				$("#obj14415").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj14410_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14410_onLoad_activeActionGroupIndex = -1;
		$("#obj14410").trigger("obj14410_onLoad_ended");
		
		return;
	}
	window.obj14410_onLoad_activeActionGroupIndex = 2;
	





















};
obj14388_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14388_onShow_activeActionGroupIndex = -1;
		$("#obj14388").trigger("obj14388_onShow_ended");
		
		return;
	}
	window.obj14388_onShow_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj14386 
show_14391();
function show_14391() {
	window.obj14388_onShow_runningActionsCount = obj14388_onShow_runningActionsCount + 1;
	$("#obj14386").fadeIn(0, function() {
			setTimeout(function() {
				window.obj14388_onShow_runningActionsCount = window.obj14388_onShow_runningActionsCount - 1;
if (window.obj14388_onShow_runningActionsCount == 0) {
	obj14388_onShow_actionGroup1();
}
				$("#obj14386").trigger('SCEventShow');
			}, 1);
		}
	);
}













//	action: Run JavaScript
runjs_14431();
function runjs_14431() {
	window.obj14388_onShow_runningActionsCount = obj14388_onShow_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj14386"));
	setTimeout(function() {
		window.obj14388_onShow_runningActionsCount = window.obj14388_onShow_runningActionsCount - 1;
if (window.obj14388_onShow_runningActionsCount == 0) {
	obj14388_onShow_actionGroup1();
}
	}, 1);
}






};
obj14388_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14388_onShow_activeActionGroupIndex = -1;
		$("#obj14388").trigger("obj14388_onShow_ended");
		
		return;
	}
	window.obj14388_onShow_activeActionGroupIndex = 1;
	








//	action: wait
wait_14392();
function wait_14392() {
	window.obj14388_onShow_runningActionsCount = obj14388_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj14388_onShow_runningActionsCount = window.obj14388_onShow_runningActionsCount - 1;
if (window.obj14388_onShow_runningActionsCount == 0) {
	obj14388_onShow_actionGroup2();
}
	}, 1000);
}












};
obj14388_onShow_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14388_onShow_activeActionGroupIndex = -1;
		$("#obj14388").trigger("obj14388_onShow_ended");
		
		return;
	}
	window.obj14388_onShow_activeActionGroupIndex = 2;
	

//	action: hide
//	target: obj14386 
hide_14393();
function hide_14393() {
	window.obj14388_onShow_runningActionsCount = obj14388_onShow_runningActionsCount + 1;
	$("#obj14386").fadeOut(0, function() {
			setTimeout(function() {
				window.obj14388_onShow_runningActionsCount = window.obj14388_onShow_runningActionsCount - 1;
if (window.obj14388_onShow_runningActionsCount == 0) {
	obj14388_onShow_actionGroup3();
}
			}, 1);
		}
	);
}
//	action: show 
//	target: obj14384 
show_14394();
function show_14394() {
	window.obj14388_onShow_runningActionsCount = obj14388_onShow_runningActionsCount + 1;
	$("#obj14384").fadeIn(0, function() {
			setTimeout(function() {
				window.obj14388_onShow_runningActionsCount = window.obj14388_onShow_runningActionsCount - 1;
if (window.obj14388_onShow_runningActionsCount == 0) {
	obj14388_onShow_actionGroup3();
}
				$("#obj14384").trigger('SCEventShow');
			}, 1);
		}
	);
}













//	action: Run JavaScript
runjs_14432();
function runjs_14432() {
	window.obj14388_onShow_runningActionsCount = obj14388_onShow_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj14384"));
	setTimeout(function() {
		window.obj14388_onShow_runningActionsCount = window.obj14388_onShow_runningActionsCount - 1;
if (window.obj14388_onShow_runningActionsCount == 0) {
	obj14388_onShow_actionGroup3();
}
	}, 1);
}






};
obj14388_onShow_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14388_onShow_activeActionGroupIndex = -1;
		$("#obj14388").trigger("obj14388_onShow_ended");
		
		return;
	}
	window.obj14388_onShow_activeActionGroupIndex = 3;
	





















};
obj9265_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9265_onTap_activeActionGroupIndex = -1;
		$("#obj9265").trigger("obj9265_onTap_ended");
		
		return;
	}
	window.obj9265_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page4
goToPage_9269();
function goToPage_9269() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../4/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(4))},200);
	}
}





















};
obj9265_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9265_onTap_activeActionGroupIndex = -1;
		$("#obj9265").trigger("obj9265_onTap_ended");
		
		return;
	}
	window.obj9265_onTap_activeActionGroupIndex = 1;
	





















};
obj9265_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9265_onTouchDown_activeActionGroupIndex = -1;
		$("#obj9265").trigger("obj9265_onTouchDown_ended");
		
		return;
	}
	window.obj9265_onTouchDown_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page4
goToPage_13093();
function goToPage_13093() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../4/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(4))},200);
	}
}





















};
obj9265_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9265_onTouchDown_activeActionGroupIndex = -1;
		$("#obj9265").trigger("obj9265_onTouchDown_ended");
		
		return;
	}
	window.obj9265_onTouchDown_activeActionGroupIndex = 1;
	





















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
 *   obj14415: Event Show
 *
 */
 
$("#obj14415").bind('SCEventShow', function(event) {
	if (window.obj14415_onShow_activeActionGroupIndex != -1) return;
var obj14415_onShow_runningActionsCount = 0;
var obj14415_onShow_loopCount = 0;
obj14415_onShow_actionGroup0();
});







/*
 *
 *   obj14410: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj14410_onLoad_activeActionGroupIndex != -1) return;
var obj14410_onLoad_runningActionsCount = 0;
var obj14410_onLoad_loopCount = 0;
obj14410_onLoad_actionGroup0();
});






/*
 *
 *   obj14388: Event Show
 *
 */
 
$("#obj14388").bind('SCEventShow', function(event) {
	if (window.obj14388_onShow_activeActionGroupIndex != -1) return;
var obj14388_onShow_runningActionsCount = 0;
var obj14388_onShow_loopCount = 0;
obj14388_onShow_actionGroup0();
});



















/*
 *
 *   obj9265: Event Touch Down
 *
 */
 
$("#obj9265").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj9265_onTap_activeActionGroupIndex != -1) return;
var obj9265_onTap_runningActionsCount = 0;
var obj9265_onTap_loopCount = 0;
obj9265_onTap_actionGroup0();
});

/*
 *
 *   obj9265: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj9265");
	var winTarget = document.getElementById("obj9265");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj9265").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj9265_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj9265_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj9265_onTouchDown_activeActionGroupIndex != -1) return;
var obj9265_onTouchDown_runningActionsCount = 0;
var obj9265_onTouchDown_loopCount = 0;
obj9265_onTouchDown_actionGroup0();
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
	
$("#obj14410").trigger('SCEventShow');
$("#obj16105").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});