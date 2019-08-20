pubcoder.projectID = "18658B6D99D44CD8BE3D25481D40B4A6";
pubcoder.project.id = "18658B6D99D44CD8BE3D25481D40B4A6";
pubcoder.project.title = "Lisa Townsend\'s Project";
pubcoder.page.id = 1944;
pubcoder.page.title = "6";
pubcoder.page.number = 6;
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
var obj1954_onTap_activeActionGroupIndex = -1;
var obj1954_onTap_runningActionsCount = 0;
var obj1954_onTap_loopCount = 0;
var obj1949_onLoad_activeActionGroupIndex = -1;
var obj1949_onLoad_runningActionsCount = 0;
var obj1949_onLoad_loopCount = 0;
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
		
obj1954_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1954_onTap_activeActionGroupIndex = -1;
		$("#obj1954").trigger("obj1954_onTap_ended");
		
		return;
	}
	window.obj1954_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1954 
hide_1956();
function hide_1956() {
	window.obj1954_onTap_runningActionsCount = obj1954_onTap_runningActionsCount + 1;
	$("#obj1954").fadeOut(0, function() {
			setTimeout(function() {
				window.obj1954_onTap_runningActionsCount = window.obj1954_onTap_runningActionsCount - 1;
if (window.obj1954_onTap_runningActionsCount == 0) {
	obj1954_onTap_actionGroup1();
}
			}, 1);
		}
	);
}

//	action: move
//	target: obj1961 
move_1957();
function move_1957() {
	window.obj1954_onTap_runningActionsCount = obj1954_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj1961");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=2";
	var moveY = "+=-697";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1954_onTap_runningActionsCount = window.obj1954_onTap_runningActionsCount - 1;
if (window.obj1954_onTap_runningActionsCount == 0) {
	obj1954_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj1954_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1954_onTap_activeActionGroupIndex = -1;
		$("#obj1954").trigger("obj1954_onTap_ended");
		
		return;
	}
	window.obj1954_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1966 
show_1969();
function show_1969() {
	window.obj1954_onTap_runningActionsCount = obj1954_onTap_runningActionsCount + 1;
	$("#obj1966").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1954_onTap_runningActionsCount = window.obj1954_onTap_runningActionsCount - 1;
if (window.obj1954_onTap_runningActionsCount == 0) {
	obj1954_onTap_actionGroup2();
}
				$("#obj1966").trigger('SCEventShow');
			}, 1);
		}
	);
}













//	action: Run JavaScript
runjs_1968();
function runjs_1968() {
	window.obj1954_onTap_runningActionsCount = obj1954_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1966"));
	setTimeout(function() {
		window.obj1954_onTap_runningActionsCount = window.obj1954_onTap_runningActionsCount - 1;
if (window.obj1954_onTap_runningActionsCount == 0) {
	obj1954_onTap_actionGroup2();
}
	}, 1);
}






};
obj1954_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1954_onTap_activeActionGroupIndex = -1;
		$("#obj1954").trigger("obj1954_onTap_ended");
		
		return;
	}
	window.obj1954_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	target: obj1961 
hide_1960();
function hide_1960() {
	window.obj1954_onTap_runningActionsCount = obj1954_onTap_runningActionsCount + 1;
	$("#obj1961").fadeOut(0, function() {
			setTimeout(function() {
				window.obj1954_onTap_runningActionsCount = window.obj1954_onTap_runningActionsCount - 1;
if (window.obj1954_onTap_runningActionsCount == 0) {
	obj1954_onTap_actionGroup3();
}
			}, 1);
		}
	);
}
//	action: show 
//	target: obj1964 
show_1959();
function show_1959() {
	window.obj1954_onTap_runningActionsCount = obj1954_onTap_runningActionsCount + 1;
	$("#obj1964").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1954_onTap_runningActionsCount = window.obj1954_onTap_runningActionsCount - 1;
if (window.obj1954_onTap_runningActionsCount == 0) {
	obj1954_onTap_actionGroup3();
}
				$("#obj1964").trigger('SCEventShow');
			}, 1);
		}
	);
}













//	action: Run JavaScript
runjs_1958();
function runjs_1958() {
	window.obj1954_onTap_runningActionsCount = obj1954_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1964"));
	setTimeout(function() {
		window.obj1954_onTap_runningActionsCount = window.obj1954_onTap_runningActionsCount - 1;
if (window.obj1954_onTap_runningActionsCount == 0) {
	obj1954_onTap_actionGroup3();
}
	}, 1);
}






};
obj1954_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1954_onTap_activeActionGroupIndex = -1;
		$("#obj1954").trigger("obj1954_onTap_ended");
		
		return;
	}
	window.obj1954_onTap_activeActionGroupIndex = 3;
	





















};
obj1949_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1949_onLoad_activeActionGroupIndex = -1;
		$("#obj1949").trigger("obj1949_onLoad_ended");
		
		return;
	}
	window.obj1949_onLoad_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1961 
show_1952();
function show_1952() {
	window.obj1949_onLoad_runningActionsCount = obj1949_onLoad_runningActionsCount + 1;
	$("#obj1961").fadeIn(2000, function() {
			setTimeout(function() {
				window.obj1949_onLoad_runningActionsCount = window.obj1949_onLoad_runningActionsCount - 1;
if (window.obj1949_onLoad_runningActionsCount == 0) {
	obj1949_onLoad_actionGroup1();
}
				$("#obj1961").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj1949_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1949_onLoad_activeActionGroupIndex = -1;
		$("#obj1949").trigger("obj1949_onLoad_ended");
		
		return;
	}
	window.obj1949_onLoad_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1954 
show_1953();
function show_1953() {
	window.obj1949_onLoad_runningActionsCount = obj1949_onLoad_runningActionsCount + 1;
	$("#obj1954").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1949_onLoad_runningActionsCount = window.obj1949_onLoad_runningActionsCount - 1;
if (window.obj1949_onLoad_runningActionsCount == 0) {
	obj1949_onLoad_actionGroup2();
}
				$("#obj1954").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj1949_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1949_onLoad_activeActionGroupIndex = -1;
		$("#obj1949").trigger("obj1949_onLoad_ended");
		
		return;
	}
	window.obj1949_onLoad_activeActionGroupIndex = 2;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		































/*
 *
 *   obj1954: Event Touch Down
 *
 */
 
$("#obj1954").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1954_onTap_activeActionGroupIndex != -1) return;
var obj1954_onTap_runningActionsCount = 0;
var obj1954_onTap_loopCount = 0;
obj1954_onTap_actionGroup0();
});









/*
 *
 *   obj1949: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1949_onLoad_activeActionGroupIndex != -1) return;
var obj1949_onLoad_runningActionsCount = 0;
var obj1949_onLoad_loopCount = 0;
obj1949_onLoad_actionGroup0();
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
	
$("#obj1945").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});