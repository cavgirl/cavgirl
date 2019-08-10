pubcoder.projectID = "18658B6D99D44CD8BE3D25481D40B4A6";
pubcoder.project.id = "18658B6D99D44CD8BE3D25481D40B4A6";
pubcoder.project.title = "Lisa Townsend\'s Project";
pubcoder.page.id = 968;
pubcoder.page.title = "4";
pubcoder.page.number = 4;
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
var obj1259_onTap_activeActionGroupIndex = -1;
var obj1259_onTap_runningActionsCount = 0;
var obj1259_onTap_loopCount = 0;
var obj1228_onTap_activeActionGroupIndex = -1;
var obj1228_onTap_runningActionsCount = 0;
var obj1228_onTap_loopCount = 0;
var obj1275_onTap_activeActionGroupIndex = -1;
var obj1275_onTap_runningActionsCount = 0;
var obj1275_onTap_loopCount = 0;
var obj1253_onLoad_activeActionGroupIndex = -1;
var obj1253_onLoad_runningActionsCount = 0;
var obj1253_onLoad_loopCount = 0;
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
		
obj1259_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1259_onTap_activeActionGroupIndex = -1;
		$("#obj1259").trigger("obj1259_onTap_ended");
		
		return;
	}
	window.obj1259_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1259 
hide_1261();
function hide_1261() {
	window.obj1259_onTap_runningActionsCount = obj1259_onTap_runningActionsCount + 1;
	$("#obj1259").fadeOut(0, function() {
			setTimeout(function() {
				window.obj1259_onTap_runningActionsCount = window.obj1259_onTap_runningActionsCount - 1;
if (window.obj1259_onTap_runningActionsCount == 0) {
	obj1259_onTap_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj1259_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1259_onTap_activeActionGroupIndex = -1;
		$("#obj1259").trigger("obj1259_onTap_ended");
		
		return;
	}
	window.obj1259_onTap_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj1228 
move_1291();
function move_1291() {
	window.obj1259_onTap_runningActionsCount = obj1259_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj1228");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-1";
	var moveY = "+=-376";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1259_onTap_runningActionsCount = window.obj1259_onTap_runningActionsCount - 1;
if (window.obj1259_onTap_runningActionsCount == 0) {
	obj1259_onTap_actionGroup2();
}
		}, 1);
	});
}



















};
obj1259_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1259_onTap_activeActionGroupIndex = -1;
		$("#obj1259").trigger("obj1259_onTap_ended");
		
		return;
	}
	window.obj1259_onTap_activeActionGroupIndex = 2;
	





















};
obj1228_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1228_onTap_activeActionGroupIndex = -1;
		$("#obj1228").trigger("obj1228_onTap_ended");
		
		return;
	}
	window.obj1228_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1228 
hide_1252();
function hide_1252() {
	window.obj1228_onTap_runningActionsCount = obj1228_onTap_runningActionsCount + 1;
	$("#obj1228").fadeOut(0, function() {
			setTimeout(function() {
				window.obj1228_onTap_runningActionsCount = window.obj1228_onTap_runningActionsCount - 1;
if (window.obj1228_onTap_runningActionsCount == 0) {
	obj1228_onTap_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj1228_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1228_onTap_activeActionGroupIndex = -1;
		$("#obj1228").trigger("obj1228_onTap_ended");
		
		return;
	}
	window.obj1228_onTap_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj1275 
move_1292();
function move_1292() {
	window.obj1228_onTap_runningActionsCount = obj1228_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj1275");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-1";
	var moveY = "+=-376";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1228_onTap_runningActionsCount = window.obj1228_onTap_runningActionsCount - 1;
if (window.obj1228_onTap_runningActionsCount == 0) {
	obj1228_onTap_actionGroup2();
}
		}, 1);
	});
}



















};
obj1228_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1228_onTap_activeActionGroupIndex = -1;
		$("#obj1228").trigger("obj1228_onTap_ended");
		
		return;
	}
	window.obj1228_onTap_activeActionGroupIndex = 2;
	





















};
obj1275_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1275_onTap_activeActionGroupIndex = -1;
		$("#obj1275").trigger("obj1275_onTap_ended");
		
		return;
	}
	window.obj1275_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page5
goToPage_1293();
function goToPage_1293() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../5/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(5))},200);
	}
}





















};
obj1275_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1275_onTap_activeActionGroupIndex = -1;
		$("#obj1275").trigger("obj1275_onTap_ended");
		
		return;
	}
	window.obj1275_onTap_activeActionGroupIndex = 1;
	





















};
obj1253_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1253_onLoad_activeActionGroupIndex = -1;
		$("#obj1253").trigger("obj1253_onLoad_ended");
		
		return;
	}
	window.obj1253_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_1256();
function wait_1256() {
	window.obj1253_onLoad_runningActionsCount = obj1253_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj1253_onLoad_runningActionsCount = window.obj1253_onLoad_runningActionsCount - 1;
if (window.obj1253_onLoad_runningActionsCount == 0) {
	obj1253_onLoad_actionGroup1();
}
	}, 1000);
}












};
obj1253_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1253_onLoad_activeActionGroupIndex = -1;
		$("#obj1253").trigger("obj1253_onLoad_ended");
		
		return;
	}
	window.obj1253_onLoad_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj1224 
move_1315();
function move_1315() {
	window.obj1253_onLoad_runningActionsCount = obj1253_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj1224");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=1";
	var moveY = "+=-230";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1253_onLoad_runningActionsCount = window.obj1253_onLoad_runningActionsCount - 1;
if (window.obj1253_onLoad_runningActionsCount == 0) {
	obj1253_onLoad_actionGroup2();
}
		}, 1);
	});
}



















};
obj1253_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1253_onLoad_activeActionGroupIndex = -1;
		$("#obj1253").trigger("obj1253_onLoad_ended");
		
		return;
	}
	window.obj1253_onLoad_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj1259 
move_1258();
function move_1258() {
	window.obj1253_onLoad_runningActionsCount = obj1253_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj1259");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 18;
	var moveY = -3;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1253_onLoad_runningActionsCount = window.obj1253_onLoad_runningActionsCount - 1;
if (window.obj1253_onLoad_runningActionsCount == 0) {
	obj1253_onLoad_actionGroup3();
}
		}, 1);
	});
}



















};
obj1253_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1253_onLoad_activeActionGroupIndex = -1;
		$("#obj1253").trigger("obj1253_onLoad_ended");
		
		return;
	}
	window.obj1253_onLoad_activeActionGroupIndex = 3;
	

//	action: hide
//	target: obj1224 
hide_1316();
function hide_1316() {
	window.obj1253_onLoad_runningActionsCount = obj1253_onLoad_runningActionsCount + 1;
	$("#obj1224").fadeOut(0, function() {
			setTimeout(function() {
				window.obj1253_onLoad_runningActionsCount = window.obj1253_onLoad_runningActionsCount - 1;
if (window.obj1253_onLoad_runningActionsCount == 0) {
	obj1253_onLoad_actionGroup4();
}
			}, 1);
		}
	);
}




















};
obj1253_onLoad_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1253_onLoad_activeActionGroupIndex = -1;
		$("#obj1253").trigger("obj1253_onLoad_ended");
		
		return;
	}
	window.obj1253_onLoad_activeActionGroupIndex = 4;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		































/*
 *
 *   obj1259: Event Touch Down
 *
 */
 
$("#obj1259").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1259_onTap_activeActionGroupIndex != -1) return;
var obj1259_onTap_runningActionsCount = 0;
var obj1259_onTap_loopCount = 0;
obj1259_onTap_actionGroup0();
});







/*
 *
 *   obj1228: Event Touch Down
 *
 */
 
$("#obj1228").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1228_onTap_activeActionGroupIndex != -1) return;
var obj1228_onTap_runningActionsCount = 0;
var obj1228_onTap_loopCount = 0;
obj1228_onTap_actionGroup0();
});







/*
 *
 *   obj1275: Event Touch Down
 *
 */
 
$("#obj1275").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1275_onTap_activeActionGroupIndex != -1) return;
var obj1275_onTap_runningActionsCount = 0;
var obj1275_onTap_loopCount = 0;
obj1275_onTap_actionGroup0();
});









/*
 *
 *   obj1253: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1253_onLoad_activeActionGroupIndex != -1) return;
var obj1253_onLoad_runningActionsCount = 0;
var obj1253_onLoad_loopCount = 0;
obj1253_onLoad_actionGroup0();
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
	
$("#obj1226").trigger('SCEventShow');
$("#obj1469").trigger('SCEventShow');
$("#obj1471").trigger('SCEventShow');
$("#obj1224").trigger('SCEventShow');
$("#obj1259").trigger('SCEventShow');
$("#obj1228").trigger('SCEventShow');
$("#obj1275").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});