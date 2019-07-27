pubcoder.projectID = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.id = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.title = "HISTORY GALLERY DIGITAL TRAIL";
pubcoder.page.id = 15494;
pubcoder.page.title = "31";
pubcoder.page.number = 31;
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
var obj15499_onLoad_activeActionGroupIndex = -1;
var obj15499_onLoad_runningActionsCount = 0;
var obj15499_onLoad_loopCount = 0;
var obj15504_onTap_activeActionGroupIndex = -1;
var obj15504_onTap_runningActionsCount = 0;
var obj15504_onTap_loopCount = 0;
var obj15509_onTap_activeActionGroupIndex = -1;
var obj15509_onTap_runningActionsCount = 0;
var obj15509_onTap_loopCount = 0;
var obj15513_onTap_activeActionGroupIndex = -1;
var obj15513_onTap_runningActionsCount = 0;
var obj15513_onTap_loopCount = 0;
var obj15519_onShow_activeActionGroupIndex = -1;
var obj15519_onShow_runningActionsCount = 0;
var obj15519_onShow_loopCount = 0;
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
		
obj15499_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15499_onLoad_activeActionGroupIndex = -1;
		$("#obj15499").trigger("obj15499_onLoad_ended");
		
		return;
	}
	window.obj15499_onLoad_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj15499 
move_15502();
function move_15502() {
	window.obj15499_onLoad_runningActionsCount = obj15499_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj15499");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=379";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj15499_onLoad_runningActionsCount = window.obj15499_onLoad_runningActionsCount - 1;
if (window.obj15499_onLoad_runningActionsCount == 0) {
	obj15499_onLoad_actionGroup1();
}
		}, 1);
	});
}



















};
obj15499_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15499_onLoad_activeActionGroupIndex = -1;
		$("#obj15499").trigger("obj15499_onLoad_ended");
		
		return;
	}
	window.obj15499_onLoad_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj15517 
show_15503();
function show_15503() {
	window.obj15499_onLoad_runningActionsCount = obj15499_onLoad_runningActionsCount + 1;
	$("#obj15517").fadeIn(500, function() {
			setTimeout(function() {
				window.obj15499_onLoad_runningActionsCount = window.obj15499_onLoad_runningActionsCount - 1;
if (window.obj15499_onLoad_runningActionsCount == 0) {
	obj15499_onLoad_actionGroup2();
}
				$("#obj15517").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj15499_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15499_onLoad_activeActionGroupIndex = -1;
		$("#obj15499").trigger("obj15499_onLoad_ended");
		
		return;
	}
	window.obj15499_onLoad_activeActionGroupIndex = 2;
	





















};
obj15504_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15504_onTap_activeActionGroupIndex = -1;
		$("#obj15504").trigger("obj15504_onTap_ended");
		
		return;
	}
	window.obj15504_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj15517 
hide_15506();
function hide_15506() {
	window.obj15504_onTap_runningActionsCount = obj15504_onTap_runningActionsCount + 1;
	$("#obj15517").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15504_onTap_runningActionsCount = window.obj15504_onTap_runningActionsCount - 1;
if (window.obj15504_onTap_runningActionsCount == 0) {
	obj15504_onTap_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj15504_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15504_onTap_activeActionGroupIndex = -1;
		$("#obj15504").trigger("obj15504_onTap_ended");
		
		return;
	}
	window.obj15504_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj15519 
show_15507();
function show_15507() {
	window.obj15504_onTap_runningActionsCount = obj15504_onTap_runningActionsCount + 1;
	$("#obj15519").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15504_onTap_runningActionsCount = window.obj15504_onTap_runningActionsCount - 1;
if (window.obj15504_onTap_runningActionsCount == 0) {
	obj15504_onTap_actionGroup2();
}
				$("#obj15519").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj15504_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15504_onTap_activeActionGroupIndex = -1;
		$("#obj15504").trigger("obj15504_onTap_ended");
		
		return;
	}
	window.obj15504_onTap_activeActionGroupIndex = 2;
	





















};
obj15509_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15509_onTap_activeActionGroupIndex = -1;
		$("#obj15509").trigger("obj15509_onTap_ended");
		
		return;
	}
	window.obj15509_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj15517 
hide_15511();
function hide_15511() {
	window.obj15509_onTap_runningActionsCount = obj15509_onTap_runningActionsCount + 1;
	$("#obj15517").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15509_onTap_runningActionsCount = window.obj15509_onTap_runningActionsCount - 1;
if (window.obj15509_onTap_runningActionsCount == 0) {
	obj15509_onTap_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj15509_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15509_onTap_activeActionGroupIndex = -1;
		$("#obj15509").trigger("obj15509_onTap_ended");
		
		return;
	}
	window.obj15509_onTap_activeActionGroupIndex = 1;
	
//	action: goToPage
//	target: page32
goToPage_15512();
function goToPage_15512() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../32/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(32))},200);
	}
}





















};
obj15509_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15509_onTap_activeActionGroupIndex = -1;
		$("#obj15509").trigger("obj15509_onTap_ended");
		
		return;
	}
	window.obj15509_onTap_activeActionGroupIndex = 2;
	





















};
obj15513_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15513_onTap_activeActionGroupIndex = -1;
		$("#obj15513").trigger("obj15513_onTap_ended");
		
		return;
	}
	window.obj15513_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj15517 
hide_15515();
function hide_15515() {
	window.obj15513_onTap_runningActionsCount = obj15513_onTap_runningActionsCount + 1;
	$("#obj15517").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15513_onTap_runningActionsCount = window.obj15513_onTap_runningActionsCount - 1;
if (window.obj15513_onTap_runningActionsCount == 0) {
	obj15513_onTap_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj15513_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15513_onTap_activeActionGroupIndex = -1;
		$("#obj15513").trigger("obj15513_onTap_ended");
		
		return;
	}
	window.obj15513_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj15519 
show_15516();
function show_15516() {
	window.obj15513_onTap_runningActionsCount = obj15513_onTap_runningActionsCount + 1;
	$("#obj15519").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15513_onTap_runningActionsCount = window.obj15513_onTap_runningActionsCount - 1;
if (window.obj15513_onTap_runningActionsCount == 0) {
	obj15513_onTap_actionGroup2();
}
				$("#obj15519").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj15513_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15513_onTap_activeActionGroupIndex = -1;
		$("#obj15513").trigger("obj15513_onTap_ended");
		
		return;
	}
	window.obj15513_onTap_activeActionGroupIndex = 2;
	





















};
obj15519_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15519_onShow_activeActionGroupIndex = -1;
		$("#obj15519").trigger("obj15519_onShow_ended");
		
		return;
	}
	window.obj15519_onShow_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj15519 
show_15522();
function show_15522() {
	window.obj15519_onShow_runningActionsCount = obj15519_onShow_runningActionsCount + 1;
	$("#obj15519").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj15519_onShow_runningActionsCount = window.obj15519_onShow_runningActionsCount - 1;
if (window.obj15519_onShow_runningActionsCount == 0) {
	obj15519_onShow_actionGroup1();
}
				$("#obj15519").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj15519_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15519_onShow_activeActionGroupIndex = -1;
		$("#obj15519").trigger("obj15519_onShow_ended");
		
		return;
	}
	window.obj15519_onShow_activeActionGroupIndex = 1;
	








//	action: wait
wait_15523();
function wait_15523() {
	window.obj15519_onShow_runningActionsCount = obj15519_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj15519_onShow_runningActionsCount = window.obj15519_onShow_runningActionsCount - 1;
if (window.obj15519_onShow_runningActionsCount == 0) {
	obj15519_onShow_actionGroup2();
}
	}, 1000);
}












};
obj15519_onShow_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15519_onShow_activeActionGroupIndex = -1;
		$("#obj15519").trigger("obj15519_onShow_ended");
		
		return;
	}
	window.obj15519_onShow_activeActionGroupIndex = 2;
	

//	action: hide
//	target: obj15519 
hide_15524();
function hide_15524() {
	window.obj15519_onShow_runningActionsCount = obj15519_onShow_runningActionsCount + 1;
	$("#obj15519").fadeOut(1000, function() {
			setTimeout(function() {
				window.obj15519_onShow_runningActionsCount = window.obj15519_onShow_runningActionsCount - 1;
if (window.obj15519_onShow_runningActionsCount == 0) {
	obj15519_onShow_actionGroup3();
}
			}, 1);
		}
	);
}




















};
obj15519_onShow_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15519_onShow_activeActionGroupIndex = -1;
		$("#obj15519").trigger("obj15519_onShow_ended");
		
		return;
	}
	window.obj15519_onShow_activeActionGroupIndex = 3;
	





















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
 *   obj15499: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj15499_onLoad_activeActionGroupIndex != -1) return;
var obj15499_onLoad_runningActionsCount = 0;
var obj15499_onLoad_loopCount = 0;
obj15499_onLoad_actionGroup0();
});





/*
 *
 *   obj15504: Event Touch Down
 *
 */
 
$("#obj15504").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15504_onTap_activeActionGroupIndex != -1) return;
var obj15504_onTap_runningActionsCount = 0;
var obj15504_onTap_loopCount = 0;
obj15504_onTap_actionGroup0();
});







/*
 *
 *   obj15509: Event Touch Down
 *
 */
 
$("#obj15509").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15509_onTap_activeActionGroupIndex != -1) return;
var obj15509_onTap_runningActionsCount = 0;
var obj15509_onTap_loopCount = 0;
obj15509_onTap_actionGroup0();
});







/*
 *
 *   obj15513: Event Touch Down
 *
 */
 
$("#obj15513").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15513_onTap_activeActionGroupIndex != -1) return;
var obj15513_onTap_runningActionsCount = 0;
var obj15513_onTap_loopCount = 0;
obj15513_onTap_actionGroup0();
});















/*
 *
 *   obj15519: Event Show
 *
 */
 
$("#obj15519").bind('SCEventShow', function(event) {
	if (window.obj15519_onShow_activeActionGroupIndex != -1) return;
var obj15519_onShow_runningActionsCount = 0;
var obj15519_onShow_loopCount = 0;
obj15519_onShow_actionGroup0();
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
	
$("#obj15495").trigger('SCEventShow');
$("#obj15497").trigger('SCEventShow');
$("#obj15499").trigger('SCEventShow');
$("#obj15504").trigger('SCEventShow');
$("#obj15509").trigger('SCEventShow');
$("#obj15513").trigger('SCEventShow');
$("#obj16105").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});