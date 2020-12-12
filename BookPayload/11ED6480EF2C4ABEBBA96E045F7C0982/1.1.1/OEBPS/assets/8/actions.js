pubcoder.projectID = "9706FB5C04CD460A85938C3898CAD20C";
pubcoder.project.id = "9706FB5C04CD460A85938C3898CAD20C";
pubcoder.project.title = "Medieval Resources";
pubcoder.page.id = 3871;
pubcoder.page.title = "8";
pubcoder.page.number = 8;
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
var obj5560_onLoad_activeActionGroupIndex = -1;
var obj5560_onLoad_runningActionsCount = 0;
var obj5560_onLoad_loopCount = 0;
var obj3878_onTouchDown_activeActionGroupIndex = -1;
var obj3878_onTouchDown_runningActionsCount = 0;
var obj3878_onTouchDown_loopCount = 0;
var obj3880_onDrag_activeActionGroupIndex = -1;
var obj3880_onDrag_runningActionsCount = 0;
var obj3880_onDrag_loopCount = 0;
var obj3880_onTouchDown_activeActionGroupIndex = -1;
var obj3880_onTouchDown_runningActionsCount = 0;
var obj3880_onTouchDown_loopCount = 0;
var obj3880_SCActionDragDrop3929_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj3880_SCActionDragDrop3929_droppedOutsideTargetActions_runningActionsCount = 0;
var obj3880_SCActionDragDrop3929_droppedOutsideTargetActions_loopCount = 0;
var obj3880_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj3880_droppedInsideTargetActions_runningActionsCount = 0;
var obj3880_droppedInsideTargetActions_loopCount = 0;
var obj3882_onDrag_activeActionGroupIndex = -1;
var obj3882_onDrag_runningActionsCount = 0;
var obj3882_onDrag_loopCount = 0;
var obj3882_onTouchDown_activeActionGroupIndex = -1;
var obj3882_onTouchDown_runningActionsCount = 0;
var obj3882_onTouchDown_loopCount = 0;
var obj3882_SCActionDragDrop3929_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj3882_SCActionDragDrop3929_droppedOutsideTargetActions_runningActionsCount = 0;
var obj3882_SCActionDragDrop3929_droppedOutsideTargetActions_loopCount = 0;
var obj3882_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj3882_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj3882_droppedInsideTargetActions_2_loopCount = 0;
var obj3882_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj3882_droppedInsideTargetActions_runningActionsCount = 0;
var obj3882_droppedInsideTargetActions_loopCount = 0;
var obj3884_onDrag_activeActionGroupIndex = -1;
var obj3884_onDrag_runningActionsCount = 0;
var obj3884_onDrag_loopCount = 0;
var obj3884_onTouchDown_activeActionGroupIndex = -1;
var obj3884_onTouchDown_runningActionsCount = 0;
var obj3884_onTouchDown_loopCount = 0;
var obj3884_SCActionDragDrop3939_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj3884_SCActionDragDrop3939_droppedOutsideTargetActions_runningActionsCount = 0;
var obj3884_SCActionDragDrop3939_droppedOutsideTargetActions_loopCount = 0;
var obj3884_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj3884_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj3884_droppedInsideTargetActions_2_loopCount = 0;
var obj3884_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj3884_droppedInsideTargetActions_runningActionsCount = 0;
var obj3884_droppedInsideTargetActions_loopCount = 0;
var obj3886_onDrag_activeActionGroupIndex = -1;
var obj3886_onDrag_runningActionsCount = 0;
var obj3886_onDrag_loopCount = 0;
var obj3886_onTouchDown_activeActionGroupIndex = -1;
var obj3886_onTouchDown_runningActionsCount = 0;
var obj3886_onTouchDown_loopCount = 0;
var obj3886_SCActionDragDrop3929_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj3886_SCActionDragDrop3929_droppedOutsideTargetActions_runningActionsCount = 0;
var obj3886_SCActionDragDrop3929_droppedOutsideTargetActions_loopCount = 0;
var obj3886_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj3886_droppedInsideTargetActions_runningActionsCount = 0;
var obj3886_droppedInsideTargetActions_loopCount = 0;
var obj3888_onDrag_activeActionGroupIndex = -1;
var obj3888_onDrag_runningActionsCount = 0;
var obj3888_onDrag_loopCount = 0;
var obj3888_onTouchDown_activeActionGroupIndex = -1;
var obj3888_onTouchDown_runningActionsCount = 0;
var obj3888_onTouchDown_loopCount = 0;
var obj3888_SCActionDragDrop3929_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj3888_SCActionDragDrop3929_droppedOutsideTargetActions_runningActionsCount = 0;
var obj3888_SCActionDragDrop3929_droppedOutsideTargetActions_loopCount = 0;
var obj3888_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj3888_droppedInsideTargetActions_runningActionsCount = 0;
var obj3888_droppedInsideTargetActions_loopCount = 0;
var obj3890_onDrag_activeActionGroupIndex = -1;
var obj3890_onDrag_runningActionsCount = 0;
var obj3890_onDrag_loopCount = 0;
var obj3890_onTouchDown_activeActionGroupIndex = -1;
var obj3890_onTouchDown_runningActionsCount = 0;
var obj3890_onTouchDown_loopCount = 0;
var obj3890_SCActionDragDrop3929_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj3890_SCActionDragDrop3929_droppedOutsideTargetActions_runningActionsCount = 0;
var obj3890_SCActionDragDrop3929_droppedOutsideTargetActions_loopCount = 0;
var obj3890_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj3890_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj3890_droppedInsideTargetActions_2_loopCount = 0;
var obj3890_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj3890_droppedInsideTargetActions_runningActionsCount = 0;
var obj3890_droppedInsideTargetActions_loopCount = 0;
var obj3892_onDrag_activeActionGroupIndex = -1;
var obj3892_onDrag_runningActionsCount = 0;
var obj3892_onDrag_loopCount = 0;
var obj3892_onTouchDown_activeActionGroupIndex = -1;
var obj3892_onTouchDown_runningActionsCount = 0;
var obj3892_onTouchDown_loopCount = 0;
var obj3892_SCActionDragDrop3939_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj3892_SCActionDragDrop3939_droppedOutsideTargetActions_runningActionsCount = 0;
var obj3892_SCActionDragDrop3939_droppedOutsideTargetActions_loopCount = 0;
var obj3892_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj3892_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj3892_droppedInsideTargetActions_2_loopCount = 0;
var obj3892_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj3892_droppedInsideTargetActions_runningActionsCount = 0;
var obj3892_droppedInsideTargetActions_loopCount = 0;
var obj4174_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj4174_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj4174_SCEventCounterReachedTargetValue_loopCount = 0;
var obj5994_SCEventRun_activeActionGroupIndex = -1;
var obj5994_SCEventRun_runningActionsCount = 0;
var obj5994_SCEventRun_loopCount = 0;
var obj6014_onTap_activeActionGroupIndex = -1;
var obj6014_onTap_runningActionsCount = 0;
var obj6014_onTap_loopCount = 0;
var obj6563_onShow_activeActionGroupIndex = -1;
var obj6563_onShow_runningActionsCount = 0;
var obj6563_onShow_loopCount = 0;
var obj6565_onShow_activeActionGroupIndex = -1;
var obj6565_onShow_runningActionsCount = 0;
var obj6565_onShow_loopCount = 0;
var obj6602_SCEventRun_activeActionGroupIndex = -1;
var obj6602_SCEventRun_runningActionsCount = 0;
var obj6602_SCEventRun_loopCount = 0;
var obj6673_onTap_activeActionGroupIndex = -1;
var obj6673_onTap_runningActionsCount = 0;
var obj6673_onTap_loopCount = 0;
var obj4097_onTap_activeActionGroupIndex = -1;
var obj4097_onTap_runningActionsCount = 0;
var obj4097_onTap_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj4174_counterValue = 0;
var obj4174_counterTargetValue = 7;
var obj4174_counterCanExceedTargetValue = false;
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
		
obj5560_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5560_onLoad_activeActionGroupIndex = -1;
		$("#obj5560").trigger("obj5560_onLoad_ended");
		
		return;
	}
	window.obj5560_onLoad_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj4359 
show_5563();
function show_5563() {
	var element = "#obj4359";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj5560_onLoad_runningActionsCount = obj5560_onLoad_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj5560_onLoad_runningActionsCount = window.obj5560_onLoad_runningActionsCount - 1;
if (window.obj5560_onLoad_runningActionsCount == 0) {
	obj5560_onLoad_actionGroup1();
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
		window.obj5560_onLoad_runningActionsCount = window.obj5560_onLoad_runningActionsCount - 1;
if (window.obj5560_onLoad_runningActionsCount == 0) {
	obj5560_onLoad_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj5560_onLoad_runningActionsCount = window.obj5560_onLoad_runningActionsCount - 1;
if (window.obj5560_onLoad_runningActionsCount == 0) {
	obj5560_onLoad_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj4377 
show_5564();
function show_5564() {
	var element = "#obj4377";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj5560_onLoad_runningActionsCount = obj5560_onLoad_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj5560_onLoad_runningActionsCount = window.obj5560_onLoad_runningActionsCount - 1;
if (window.obj5560_onLoad_runningActionsCount == 0) {
	obj5560_onLoad_actionGroup1();
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
		window.obj5560_onLoad_runningActionsCount = window.obj5560_onLoad_runningActionsCount - 1;
if (window.obj5560_onLoad_runningActionsCount == 0) {
	obj5560_onLoad_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(500, function() {
	// 		setTimeout(function() {
	// 			window.obj5560_onLoad_runningActionsCount = window.obj5560_onLoad_runningActionsCount - 1;
if (window.obj5560_onLoad_runningActionsCount == 0) {
	obj5560_onLoad_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj4387 
show_5565();
function show_5565() {
	var element = "#obj4387";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj5560_onLoad_runningActionsCount = obj5560_onLoad_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj5560_onLoad_runningActionsCount = window.obj5560_onLoad_runningActionsCount - 1;
if (window.obj5560_onLoad_runningActionsCount == 0) {
	obj5560_onLoad_actionGroup1();
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
		window.obj5560_onLoad_runningActionsCount = window.obj5560_onLoad_runningActionsCount - 1;
if (window.obj5560_onLoad_runningActionsCount == 0) {
	obj5560_onLoad_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(300, function() {
	// 		setTimeout(function() {
	// 			window.obj5560_onLoad_runningActionsCount = window.obj5560_onLoad_runningActionsCount - 1;
if (window.obj5560_onLoad_runningActionsCount == 0) {
	obj5560_onLoad_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj5560_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5560_onLoad_activeActionGroupIndex = -1;
		$("#obj5560").trigger("obj5560_onLoad_ended");
		
		return;
	}
	window.obj5560_onLoad_activeActionGroupIndex = 1;
	





















};
obj3878_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3878_onTouchDown_activeActionGroupIndex = -1;
		$("#obj3878").trigger("obj3878_onTouchDown_ended");
		
		return;
	}
	window.obj3878_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_3950();
function runjs_3950() {
	window.obj3878_onTouchDown_runningActionsCount = obj3878_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj3878"));
	setTimeout(function() {
		window.obj3878_onTouchDown_runningActionsCount = window.obj3878_onTouchDown_runningActionsCount - 1;
if (window.obj3878_onTouchDown_runningActionsCount == 0) {
	obj3878_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj3878_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3878_onTouchDown_activeActionGroupIndex = -1;
		$("#obj3878").trigger("obj3878_onTouchDown_ended");
		
		return;
	}
	window.obj3878_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj3880_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3880_onTouchDown_activeActionGroupIndex = -1;
		$("#obj3880").trigger("obj3880_onTouchDown_ended");
		
		return;
	}
	window.obj3880_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj3880");
//	action: dragDrop
//	target: obj3880 
dragDrop_4020();
function dragDrop_4020() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj3880_onTouchDown_runningActionsCount = obj3880_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj3880');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	if (window.touchUpEvent == "touchend") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (window.touchUpEvent == "touchend") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
    $(this).bind(window.touchUpEvent,function(e){
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
    	window.obj3880_onTouchDown_runningActionsCount = window.obj3880_onTouchDown_runningActionsCount - 1;
if (window.obj3880_onTouchDown_runningActionsCount == 0) {
	obj3880_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj3898");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_4020 = false;
    	var dropped_id_4020;
    	var eventType;
    	if (window.touchUpEvent == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_4020 = true;
					dropped_id_4020 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_4020) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj3880").trigger('SCActionDragDrop3929_droppedOutsideTargetActions');
		}
    });
}











};
obj3880_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3880_onTouchDown_activeActionGroupIndex = -1;
		$("#obj3880").trigger("obj3880_onTouchDown_ended");
		
		return;
	}
	window.obj3880_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj3880_SCActionDragDrop3929_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3880_SCActionDragDrop3929_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3880").trigger("obj3880_SCActionDragDrop3929_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj3880_SCActionDragDrop3929_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj3880 
move_4024();
function move_4024() {
	window.obj3880_SCActionDragDrop3929_droppedOutsideTargetActions_runningActionsCount = obj3880_SCActionDragDrop3929_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj3880");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 909;
	var moveY = 468;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3880_SCActionDragDrop3929_droppedOutsideTargetActions_runningActionsCount = window.obj3880_SCActionDragDrop3929_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj3880_SCActionDragDrop3929_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj3880_SCActionDragDrop3929_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj3880_SCActionDragDrop3929_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3880_SCActionDragDrop3929_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3880").trigger("obj3880_SCActionDragDrop3929_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj3880_SCActionDragDrop3929_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj3880_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3880_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3880").trigger("obj3880_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj3880_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_4022();
function runjs_4022() {
	window.obj3880_droppedInsideTargetActions_runningActionsCount = obj3880_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj3880"));
	setTimeout(function() {
		window.obj3880_droppedInsideTargetActions_runningActionsCount = window.obj3880_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3880_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3880_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj3880_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3880_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3880").trigger("obj3880_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj3880_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj4174 
incrementCounter_4178();
function incrementCounter_4178() {
	window.obj3880_droppedInsideTargetActions_runningActionsCount = obj3880_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj4174_counterValue;
	obj4174_counterValue = obj4174_counterValue + 1;
	if (! obj4174_counterCanExceedTargetValue && obj4174_counterValue > obj4174_counterTargetValue) {
		obj4174_counterValue = obj4174_counterTargetValue;
	}
	if (oldValue != obj4174_counterValue) {
		$("#obj4174").trigger('SCEventCounterValueChange');
		$("#obj4174").trigger('SCEventCounterIncrease');
		if (obj4174_counterValue == obj4174_counterTargetValue)
			$("#obj4174").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj3880_droppedInsideTargetActions_runningActionsCount = window.obj3880_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3880_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3880_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj3880_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3880_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3880").trigger("obj3880_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj3880_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj3882_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3882_onTouchDown_activeActionGroupIndex = -1;
		$("#obj3882").trigger("obj3882_onTouchDown_ended");
		
		return;
	}
	window.obj3882_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj3882");
//	action: dragDrop
//	target: obj3882 
dragDrop_3966();
function dragDrop_3966() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj3882_onTouchDown_runningActionsCount = obj3882_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj3882');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	if (window.touchUpEvent == "touchend") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (window.touchUpEvent == "touchend") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
    $(this).bind(window.touchUpEvent,function(e){
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
    	window.obj3882_onTouchDown_runningActionsCount = window.obj3882_onTouchDown_runningActionsCount - 1;
if (window.obj3882_onTouchDown_runningActionsCount == 0) {
	obj3882_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj3900","#obj3908");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_3966 = false;
    	var dropped_id_3966;
    	var eventType;
    	if (window.touchUpEvent == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_3966 = true;
					dropped_id_3966 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_3966) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj3882").trigger('SCActionDragDrop3929_droppedOutsideTargetActions');
		}
    });
}











};
obj3882_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3882_onTouchDown_activeActionGroupIndex = -1;
		$("#obj3882").trigger("obj3882_onTouchDown_ended");
		
		return;
	}
	window.obj3882_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj3882_SCActionDragDrop3929_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3882_SCActionDragDrop3929_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3882").trigger("obj3882_SCActionDragDrop3929_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj3882_SCActionDragDrop3929_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj3882 
move_3971();
function move_3971() {
	window.obj3882_SCActionDragDrop3929_droppedOutsideTargetActions_runningActionsCount = obj3882_SCActionDragDrop3929_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj3882");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 854;
	var moveY = 362;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3882_SCActionDragDrop3929_droppedOutsideTargetActions_runningActionsCount = window.obj3882_SCActionDragDrop3929_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj3882_SCActionDragDrop3929_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj3882_SCActionDragDrop3929_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj3882_SCActionDragDrop3929_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3882_SCActionDragDrop3929_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3882").trigger("obj3882_SCActionDragDrop3929_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj3882_SCActionDragDrop3929_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj3882_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3882_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3882").trigger("obj3882_droppedInsideTargetActions_2_ended");
		
		return;
	}
	window.obj3882_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_3973();
function runjs_3973() {
	window.obj3882_droppedInsideTargetActions_2_runningActionsCount = obj3882_droppedInsideTargetActions_2_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj3882"));
	setTimeout(function() {
		window.obj3882_droppedInsideTargetActions_2_runningActionsCount = window.obj3882_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3882_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3882_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}






};
obj3882_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3882_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3882").trigger("obj3882_droppedInsideTargetActions_2_ended");
		
		return;
	}
	window.obj3882_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj4174 
incrementCounter_4186();
function incrementCounter_4186() {
	window.obj3882_droppedInsideTargetActions_2_runningActionsCount = obj3882_droppedInsideTargetActions_2_runningActionsCount + 1;

	var oldValue = obj4174_counterValue;
	obj4174_counterValue = obj4174_counterValue + 1;
	if (! obj4174_counterCanExceedTargetValue && obj4174_counterValue > obj4174_counterTargetValue) {
		obj4174_counterValue = obj4174_counterTargetValue;
	}
	if (oldValue != obj4174_counterValue) {
		$("#obj4174").trigger('SCEventCounterValueChange');
		$("#obj4174").trigger('SCEventCounterIncrease');
		if (obj4174_counterValue == obj4174_counterTargetValue)
			$("#obj4174").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj3882_droppedInsideTargetActions_2_runningActionsCount = window.obj3882_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3882_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3882_droppedInsideTargetActions_2_actionGroup2();
} }, 1);
}





};
obj3882_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3882_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3882").trigger("obj3882_droppedInsideTargetActions_2_ended");
		
		return;
	}
	window.obj3882_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	





















};
obj3882_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3882_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3882").trigger("obj3882_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj3882_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_3968();
function runjs_3968() {
	window.obj3882_droppedInsideTargetActions_runningActionsCount = obj3882_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj3882"));
	setTimeout(function() {
		window.obj3882_droppedInsideTargetActions_runningActionsCount = window.obj3882_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3882_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3882_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj3882_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3882_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3882").trigger("obj3882_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj3882_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj4174 
incrementCounter_4185();
function incrementCounter_4185() {
	window.obj3882_droppedInsideTargetActions_runningActionsCount = obj3882_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj4174_counterValue;
	obj4174_counterValue = obj4174_counterValue + 1;
	if (! obj4174_counterCanExceedTargetValue && obj4174_counterValue > obj4174_counterTargetValue) {
		obj4174_counterValue = obj4174_counterTargetValue;
	}
	if (oldValue != obj4174_counterValue) {
		$("#obj4174").trigger('SCEventCounterValueChange');
		$("#obj4174").trigger('SCEventCounterIncrease');
		if (obj4174_counterValue == obj4174_counterTargetValue)
			$("#obj4174").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj3882_droppedInsideTargetActions_runningActionsCount = window.obj3882_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3882_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3882_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj3882_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3882_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3882").trigger("obj3882_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj3882_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj3884_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3884_onTouchDown_activeActionGroupIndex = -1;
		$("#obj3884").trigger("obj3884_onTouchDown_ended");
		
		return;
	}
	window.obj3884_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj3884");
//	action: dragDrop
//	target: obj3884 
dragDrop_4033();
function dragDrop_4033() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj3884_onTouchDown_runningActionsCount = obj3884_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj3884');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	if (window.touchUpEvent == "touchend") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (window.touchUpEvent == "touchend") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
    $(this).bind(window.touchUpEvent,function(e){
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
    	window.obj3884_onTouchDown_runningActionsCount = window.obj3884_onTouchDown_runningActionsCount - 1;
if (window.obj3884_onTouchDown_runningActionsCount == 0) {
	obj3884_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj3902","#obj3910");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_4033 = false;
    	var dropped_id_4033;
    	var eventType;
    	if (window.touchUpEvent == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_4033 = true;
					dropped_id_4033 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_4033) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj3884").trigger('SCActionDragDrop3939_droppedOutsideTargetActions');
		}
    });
}











};
obj3884_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3884_onTouchDown_activeActionGroupIndex = -1;
		$("#obj3884").trigger("obj3884_onTouchDown_ended");
		
		return;
	}
	window.obj3884_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj3884_SCActionDragDrop3939_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3884_SCActionDragDrop3939_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3884").trigger("obj3884_SCActionDragDrop3939_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj3884_SCActionDragDrop3939_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj3884 
move_4039();
function move_4039() {
	window.obj3884_SCActionDragDrop3939_droppedOutsideTargetActions_runningActionsCount = obj3884_SCActionDragDrop3939_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj3884");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 941;
	var moveY = 361;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3884_SCActionDragDrop3939_droppedOutsideTargetActions_runningActionsCount = window.obj3884_SCActionDragDrop3939_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj3884_SCActionDragDrop3939_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj3884_SCActionDragDrop3939_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj3884_SCActionDragDrop3939_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3884_SCActionDragDrop3939_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3884").trigger("obj3884_SCActionDragDrop3939_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj3884_SCActionDragDrop3939_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj3884_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3884_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3884").trigger("obj3884_droppedInsideTargetActions_2_ended");
		
		return;
	}
	window.obj3884_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_4037();
function runjs_4037() {
	window.obj3884_droppedInsideTargetActions_2_runningActionsCount = obj3884_droppedInsideTargetActions_2_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj3884"));
	setTimeout(function() {
		window.obj3884_droppedInsideTargetActions_2_runningActionsCount = window.obj3884_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3884_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3884_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}






};
obj3884_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3884_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3884").trigger("obj3884_droppedInsideTargetActions_2_ended");
		
		return;
	}
	window.obj3884_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj4174 
incrementCounter_4188();
function incrementCounter_4188() {
	window.obj3884_droppedInsideTargetActions_2_runningActionsCount = obj3884_droppedInsideTargetActions_2_runningActionsCount + 1;

	var oldValue = obj4174_counterValue;
	obj4174_counterValue = obj4174_counterValue + 1;
	if (! obj4174_counterCanExceedTargetValue && obj4174_counterValue > obj4174_counterTargetValue) {
		obj4174_counterValue = obj4174_counterTargetValue;
	}
	if (oldValue != obj4174_counterValue) {
		$("#obj4174").trigger('SCEventCounterValueChange');
		$("#obj4174").trigger('SCEventCounterIncrease');
		if (obj4174_counterValue == obj4174_counterTargetValue)
			$("#obj4174").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj3884_droppedInsideTargetActions_2_runningActionsCount = window.obj3884_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3884_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3884_droppedInsideTargetActions_2_actionGroup2();
} }, 1);
}





};
obj3884_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3884_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3884").trigger("obj3884_droppedInsideTargetActions_2_ended");
		
		return;
	}
	window.obj3884_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	





















};
obj3884_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3884_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3884").trigger("obj3884_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj3884_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_4035();
function runjs_4035() {
	window.obj3884_droppedInsideTargetActions_runningActionsCount = obj3884_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj3884"));
	setTimeout(function() {
		window.obj3884_droppedInsideTargetActions_runningActionsCount = window.obj3884_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3884_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3884_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj3884_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3884_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3884").trigger("obj3884_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj3884_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj4174 
incrementCounter_4187();
function incrementCounter_4187() {
	window.obj3884_droppedInsideTargetActions_runningActionsCount = obj3884_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj4174_counterValue;
	obj4174_counterValue = obj4174_counterValue + 1;
	if (! obj4174_counterCanExceedTargetValue && obj4174_counterValue > obj4174_counterTargetValue) {
		obj4174_counterValue = obj4174_counterTargetValue;
	}
	if (oldValue != obj4174_counterValue) {
		$("#obj4174").trigger('SCEventCounterValueChange');
		$("#obj4174").trigger('SCEventCounterIncrease');
		if (obj4174_counterValue == obj4174_counterTargetValue)
			$("#obj4174").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj3884_droppedInsideTargetActions_runningActionsCount = window.obj3884_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3884_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3884_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj3884_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3884_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3884").trigger("obj3884_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj3884_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj3886_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3886_onTouchDown_activeActionGroupIndex = -1;
		$("#obj3886").trigger("obj3886_onTouchDown_ended");
		
		return;
	}
	window.obj3886_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj3886");
//	action: dragDrop
//	target: obj3886 
dragDrop_4054();
function dragDrop_4054() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj3886_onTouchDown_runningActionsCount = obj3886_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj3886');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	if (window.touchUpEvent == "touchend") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (window.touchUpEvent == "touchend") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
    $(this).bind(window.touchUpEvent,function(e){
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
    	window.obj3886_onTouchDown_runningActionsCount = window.obj3886_onTouchDown_runningActionsCount - 1;
if (window.obj3886_onTouchDown_runningActionsCount == 0) {
	obj3886_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj3904");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_4054 = false;
    	var dropped_id_4054;
    	var eventType;
    	if (window.touchUpEvent == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_4054 = true;
					dropped_id_4054 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_4054) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj3886").trigger('SCActionDragDrop3929_droppedOutsideTargetActions');
		}
    });
}











};
obj3886_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3886_onTouchDown_activeActionGroupIndex = -1;
		$("#obj3886").trigger("obj3886_onTouchDown_ended");
		
		return;
	}
	window.obj3886_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj3886_SCActionDragDrop3929_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3886_SCActionDragDrop3929_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3886").trigger("obj3886_SCActionDragDrop3929_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj3886_SCActionDragDrop3929_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj3886 
move_4058();
function move_4058() {
	window.obj3886_SCActionDragDrop3929_droppedOutsideTargetActions_runningActionsCount = obj3886_SCActionDragDrop3929_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj3886");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1137;
	var moveY = 361;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3886_SCActionDragDrop3929_droppedOutsideTargetActions_runningActionsCount = window.obj3886_SCActionDragDrop3929_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj3886_SCActionDragDrop3929_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj3886_SCActionDragDrop3929_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj3886_SCActionDragDrop3929_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3886_SCActionDragDrop3929_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3886").trigger("obj3886_SCActionDragDrop3929_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj3886_SCActionDragDrop3929_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj3886_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3886_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3886").trigger("obj3886_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj3886_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_4056();
function runjs_4056() {
	window.obj3886_droppedInsideTargetActions_runningActionsCount = obj3886_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj3886"));
	setTimeout(function() {
		window.obj3886_droppedInsideTargetActions_runningActionsCount = window.obj3886_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3886_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3886_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj3886_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3886_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3886").trigger("obj3886_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj3886_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj4174 
incrementCounter_4180();
function incrementCounter_4180() {
	window.obj3886_droppedInsideTargetActions_runningActionsCount = obj3886_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj4174_counterValue;
	obj4174_counterValue = obj4174_counterValue + 1;
	if (! obj4174_counterCanExceedTargetValue && obj4174_counterValue > obj4174_counterTargetValue) {
		obj4174_counterValue = obj4174_counterTargetValue;
	}
	if (oldValue != obj4174_counterValue) {
		$("#obj4174").trigger('SCEventCounterValueChange');
		$("#obj4174").trigger('SCEventCounterIncrease');
		if (obj4174_counterValue == obj4174_counterTargetValue)
			$("#obj4174").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj3886_droppedInsideTargetActions_runningActionsCount = window.obj3886_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3886_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3886_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj3886_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3886_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3886").trigger("obj3886_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj3886_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj3888_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3888_onTouchDown_activeActionGroupIndex = -1;
		$("#obj3888").trigger("obj3888_onTouchDown_ended");
		
		return;
	}
	window.obj3888_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj3888");
//	action: dragDrop
//	target: obj3888 
dragDrop_4060();
function dragDrop_4060() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj3888_onTouchDown_runningActionsCount = obj3888_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj3888');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	if (window.touchUpEvent == "touchend") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (window.touchUpEvent == "touchend") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
    $(this).bind(window.touchUpEvent,function(e){
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
    	window.obj3888_onTouchDown_runningActionsCount = window.obj3888_onTouchDown_runningActionsCount - 1;
if (window.obj3888_onTouchDown_runningActionsCount == 0) {
	obj3888_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj3906");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_4060 = false;
    	var dropped_id_4060;
    	var eventType;
    	if (window.touchUpEvent == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_4060 = true;
					dropped_id_4060 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_4060) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj3888").trigger('SCActionDragDrop3929_droppedOutsideTargetActions');
		}
    });
}











};
obj3888_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3888_onTouchDown_activeActionGroupIndex = -1;
		$("#obj3888").trigger("obj3888_onTouchDown_ended");
		
		return;
	}
	window.obj3888_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj3888_SCActionDragDrop3929_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3888_SCActionDragDrop3929_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3888").trigger("obj3888_SCActionDragDrop3929_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj3888_SCActionDragDrop3929_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj3888 
move_4064();
function move_4064() {
	window.obj3888_SCActionDragDrop3929_droppedOutsideTargetActions_runningActionsCount = obj3888_SCActionDragDrop3929_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj3888");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 637;
	var moveY = 467;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3888_SCActionDragDrop3929_droppedOutsideTargetActions_runningActionsCount = window.obj3888_SCActionDragDrop3929_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj3888_SCActionDragDrop3929_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj3888_SCActionDragDrop3929_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj3888_SCActionDragDrop3929_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3888_SCActionDragDrop3929_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3888").trigger("obj3888_SCActionDragDrop3929_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj3888_SCActionDragDrop3929_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj3888_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3888_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3888").trigger("obj3888_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj3888_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_4062();
function runjs_4062() {
	window.obj3888_droppedInsideTargetActions_runningActionsCount = obj3888_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj3888"));
	setTimeout(function() {
		window.obj3888_droppedInsideTargetActions_runningActionsCount = window.obj3888_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3888_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3888_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj3888_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3888_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3888").trigger("obj3888_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj3888_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj4174 
incrementCounter_4176();
function incrementCounter_4176() {
	window.obj3888_droppedInsideTargetActions_runningActionsCount = obj3888_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj4174_counterValue;
	obj4174_counterValue = obj4174_counterValue + 1;
	if (! obj4174_counterCanExceedTargetValue && obj4174_counterValue > obj4174_counterTargetValue) {
		obj4174_counterValue = obj4174_counterTargetValue;
	}
	if (oldValue != obj4174_counterValue) {
		$("#obj4174").trigger('SCEventCounterValueChange');
		$("#obj4174").trigger('SCEventCounterIncrease');
		if (obj4174_counterValue == obj4174_counterTargetValue)
			$("#obj4174").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj3888_droppedInsideTargetActions_runningActionsCount = window.obj3888_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3888_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3888_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj3888_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3888_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3888").trigger("obj3888_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj3888_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj3890_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3890_onTouchDown_activeActionGroupIndex = -1;
		$("#obj3890").trigger("obj3890_onTouchDown_ended");
		
		return;
	}
	window.obj3890_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj3890");
//	action: dragDrop
//	target: obj3890 
dragDrop_4041();
function dragDrop_4041() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj3890_onTouchDown_runningActionsCount = obj3890_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj3890');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	if (window.touchUpEvent == "touchend") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (window.touchUpEvent == "touchend") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
    $(this).bind(window.touchUpEvent,function(e){
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
    	window.obj3890_onTouchDown_runningActionsCount = window.obj3890_onTouchDown_runningActionsCount - 1;
if (window.obj3890_onTouchDown_runningActionsCount == 0) {
	obj3890_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj3900","#obj3908");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_4041 = false;
    	var dropped_id_4041;
    	var eventType;
    	if (window.touchUpEvent == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_4041 = true;
					dropped_id_4041 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_4041) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj3890").trigger('SCActionDragDrop3929_droppedOutsideTargetActions');
		}
    });
}











};
obj3890_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3890_onTouchDown_activeActionGroupIndex = -1;
		$("#obj3890").trigger("obj3890_onTouchDown_ended");
		
		return;
	}
	window.obj3890_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj3890_SCActionDragDrop3929_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3890_SCActionDragDrop3929_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3890").trigger("obj3890_SCActionDragDrop3929_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj3890_SCActionDragDrop3929_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj3890 
move_4047();
function move_4047() {
	window.obj3890_SCActionDragDrop3929_droppedOutsideTargetActions_runningActionsCount = obj3890_SCActionDragDrop3929_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj3890");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1225;
	var moveY = 362;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3890_SCActionDragDrop3929_droppedOutsideTargetActions_runningActionsCount = window.obj3890_SCActionDragDrop3929_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj3890_SCActionDragDrop3929_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj3890_SCActionDragDrop3929_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj3890_SCActionDragDrop3929_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3890_SCActionDragDrop3929_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3890").trigger("obj3890_SCActionDragDrop3929_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj3890_SCActionDragDrop3929_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj3890_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3890_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3890").trigger("obj3890_droppedInsideTargetActions_2_ended");
		
		return;
	}
	window.obj3890_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_4045();
function runjs_4045() {
	window.obj3890_droppedInsideTargetActions_2_runningActionsCount = obj3890_droppedInsideTargetActions_2_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj3890"));
	setTimeout(function() {
		window.obj3890_droppedInsideTargetActions_2_runningActionsCount = window.obj3890_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3890_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3890_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}






};
obj3890_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3890_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3890").trigger("obj3890_droppedInsideTargetActions_2_ended");
		
		return;
	}
	window.obj3890_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj4174 
incrementCounter_4182();
function incrementCounter_4182() {
	window.obj3890_droppedInsideTargetActions_2_runningActionsCount = obj3890_droppedInsideTargetActions_2_runningActionsCount + 1;

	var oldValue = obj4174_counterValue;
	obj4174_counterValue = obj4174_counterValue + 1;
	if (! obj4174_counterCanExceedTargetValue && obj4174_counterValue > obj4174_counterTargetValue) {
		obj4174_counterValue = obj4174_counterTargetValue;
	}
	if (oldValue != obj4174_counterValue) {
		$("#obj4174").trigger('SCEventCounterValueChange');
		$("#obj4174").trigger('SCEventCounterIncrease');
		if (obj4174_counterValue == obj4174_counterTargetValue)
			$("#obj4174").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj3890_droppedInsideTargetActions_2_runningActionsCount = window.obj3890_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3890_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3890_droppedInsideTargetActions_2_actionGroup2();
} }, 1);
}





};
obj3890_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3890_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3890").trigger("obj3890_droppedInsideTargetActions_2_ended");
		
		return;
	}
	window.obj3890_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	





















};
obj3890_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3890_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3890").trigger("obj3890_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj3890_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_4043();
function runjs_4043() {
	window.obj3890_droppedInsideTargetActions_runningActionsCount = obj3890_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj3890"));
	setTimeout(function() {
		window.obj3890_droppedInsideTargetActions_runningActionsCount = window.obj3890_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3890_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3890_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj3890_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3890_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3890").trigger("obj3890_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj3890_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj4174 
incrementCounter_4181();
function incrementCounter_4181() {
	window.obj3890_droppedInsideTargetActions_runningActionsCount = obj3890_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj4174_counterValue;
	obj4174_counterValue = obj4174_counterValue + 1;
	if (! obj4174_counterCanExceedTargetValue && obj4174_counterValue > obj4174_counterTargetValue) {
		obj4174_counterValue = obj4174_counterTargetValue;
	}
	if (oldValue != obj4174_counterValue) {
		$("#obj4174").trigger('SCEventCounterValueChange');
		$("#obj4174").trigger('SCEventCounterIncrease');
		if (obj4174_counterValue == obj4174_counterTargetValue)
			$("#obj4174").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj3890_droppedInsideTargetActions_runningActionsCount = window.obj3890_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3890_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3890_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj3890_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3890_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3890").trigger("obj3890_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj3890_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj3892_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3892_onTouchDown_activeActionGroupIndex = -1;
		$("#obj3892").trigger("obj3892_onTouchDown_ended");
		
		return;
	}
	window.obj3892_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj3892");
//	action: dragDrop
//	target: obj3892 
dragDrop_3939();
function dragDrop_3939() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj3892_onTouchDown_runningActionsCount = obj3892_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj3892');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	if (window.touchUpEvent == "touchend") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (window.touchUpEvent == "touchend") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
    $(this).bind(window.touchUpEvent,function(e){
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
    	window.obj3892_onTouchDown_runningActionsCount = window.obj3892_onTouchDown_runningActionsCount - 1;
if (window.obj3892_onTouchDown_runningActionsCount == 0) {
	obj3892_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj3902","#obj3910");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_3939 = false;
    	var dropped_id_3939;
    	var eventType;
    	if (window.touchUpEvent == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_3939 = true;
					dropped_id_3939 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_3939) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj3892").trigger('SCActionDragDrop3939_droppedOutsideTargetActions');
		}
    });
}











};
obj3892_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3892_onTouchDown_activeActionGroupIndex = -1;
		$("#obj3892").trigger("obj3892_onTouchDown_ended");
		
		return;
	}
	window.obj3892_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj3892_SCActionDragDrop3939_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3892_SCActionDragDrop3939_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3892").trigger("obj3892_SCActionDragDrop3939_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj3892_SCActionDragDrop3939_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj3892 
move_4028();
function move_4028() {
	window.obj3892_SCActionDragDrop3939_droppedOutsideTargetActions_runningActionsCount = obj3892_SCActionDragDrop3939_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj3892");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 665;
	var moveY = 362;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3892_SCActionDragDrop3939_droppedOutsideTargetActions_runningActionsCount = window.obj3892_SCActionDragDrop3939_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj3892_SCActionDragDrop3939_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj3892_SCActionDragDrop3939_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj3892_SCActionDragDrop3939_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3892_SCActionDragDrop3939_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3892").trigger("obj3892_SCActionDragDrop3939_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj3892_SCActionDragDrop3939_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj3892_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3892_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3892").trigger("obj3892_droppedInsideTargetActions_2_ended");
		
		return;
	}
	window.obj3892_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_4026();
function runjs_4026() {
	window.obj3892_droppedInsideTargetActions_2_runningActionsCount = obj3892_droppedInsideTargetActions_2_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj3892"));
	setTimeout(function() {
		window.obj3892_droppedInsideTargetActions_2_runningActionsCount = window.obj3892_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3892_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3892_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}






};
obj3892_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3892_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3892").trigger("obj3892_droppedInsideTargetActions_2_ended");
		
		return;
	}
	window.obj3892_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj4174 
incrementCounter_4184();
function incrementCounter_4184() {
	window.obj3892_droppedInsideTargetActions_2_runningActionsCount = obj3892_droppedInsideTargetActions_2_runningActionsCount + 1;

	var oldValue = obj4174_counterValue;
	obj4174_counterValue = obj4174_counterValue + 1;
	if (! obj4174_counterCanExceedTargetValue && obj4174_counterValue > obj4174_counterTargetValue) {
		obj4174_counterValue = obj4174_counterTargetValue;
	}
	if (oldValue != obj4174_counterValue) {
		$("#obj4174").trigger('SCEventCounterValueChange');
		$("#obj4174").trigger('SCEventCounterIncrease');
		if (obj4174_counterValue == obj4174_counterTargetValue)
			$("#obj4174").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj3892_droppedInsideTargetActions_2_runningActionsCount = window.obj3892_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3892_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3892_droppedInsideTargetActions_2_actionGroup2();
} }, 1);
}





};
obj3892_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3892_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3892").trigger("obj3892_droppedInsideTargetActions_2_ended");
		
		return;
	}
	window.obj3892_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	





















};
obj3892_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3892_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3892").trigger("obj3892_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj3892_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_3984();
function runjs_3984() {
	window.obj3892_droppedInsideTargetActions_runningActionsCount = obj3892_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj3892"));
	setTimeout(function() {
		window.obj3892_droppedInsideTargetActions_runningActionsCount = window.obj3892_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3892_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3892_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj3892_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3892_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3892").trigger("obj3892_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj3892_droppedInsideTargetActions_activeActionGroupIndex = 1;
	
















//	action: increment counter
//	target: obj4174 
incrementCounter_4183();
function incrementCounter_4183() {
	window.obj3892_droppedInsideTargetActions_runningActionsCount = obj3892_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj4174_counterValue;
	obj4174_counterValue = obj4174_counterValue + 1;
	if (! obj4174_counterCanExceedTargetValue && obj4174_counterValue > obj4174_counterTargetValue) {
		obj4174_counterValue = obj4174_counterTargetValue;
	}
	if (oldValue != obj4174_counterValue) {
		$("#obj4174").trigger('SCEventCounterValueChange');
		$("#obj4174").trigger('SCEventCounterIncrease');
		if (obj4174_counterValue == obj4174_counterTargetValue)
			$("#obj4174").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj3892_droppedInsideTargetActions_runningActionsCount = window.obj3892_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3892_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3892_droppedInsideTargetActions_actionGroup2();
} }, 1);
}





};
obj3892_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3892_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3892").trigger("obj3892_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj3892_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj4174_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4174_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj4174").trigger("obj4174_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj4174_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj4359 
hide_4697();
function hide_4697() {
	var element = "#obj4359";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount = obj4174_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4174_SCEventCounterReachedTargetValue_actionGroup1();
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
		setTimeout(hide_4697(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4174_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj6035 
hide_6060();
function hide_6060() {
	var element = "#obj6035";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount = obj4174_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4174_SCEventCounterReachedTargetValue_actionGroup1();
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
		setTimeout(hide_6060(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4174_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj3872 
show_6854();
function show_6854() {
	var element = "#obj3872";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount = obj4174_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4174_SCEventCounterReachedTargetValue_actionGroup1();
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
		window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4174_SCEventCounterReachedTargetValue_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4174_SCEventCounterReachedTargetValue_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj4172 
show_4197();
function show_4197() {
	var element = "#obj4172";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount = obj4174_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var animationType = "bounceIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4174_SCEventCounterReachedTargetValue_actionGroup1();
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
		window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4174_SCEventCounterReachedTargetValue_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4174_SCEventCounterReachedTargetValue_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj4174_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4174_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj4174").trigger("obj4174_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj4174_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	


















//	action: run action list container
//	target: obj6602 
runActionList_6622();
function runActionList_6622() {
	window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount = obj4174_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj6602").trigger('SCEventRun');
	setTimeout(function() {
		window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4174_SCEventCounterReachedTargetValue_actionGroup2();
}		
	}, 1);
}



};
obj4174_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4174_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj4174").trigger("obj4174_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj4174_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	








//	action: wait
wait_6644();
function wait_6644() {
	window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount = obj4174_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	setTimeout(function() {
		window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4174_SCEventCounterReachedTargetValue_actionGroup3();
}
	}, 1000);
}












};
obj4174_SCEventCounterReachedTargetValue_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4174_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj4174").trigger("obj4174_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj4174_SCEventCounterReachedTargetValue_activeActionGroupIndex = 3;
	

//	action: show 
//	target: obj6563 
show_4725();
function show_4725() {
	var element = "#obj6563";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount = obj4174_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var animationType = "bounceInUp";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4174_SCEventCounterReachedTargetValue_actionGroup4();
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
		window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4174_SCEventCounterReachedTargetValue_actionGroup4();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4174_SCEventCounterReachedTargetValue_actionGroup4();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj4174_SCEventCounterReachedTargetValue_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4174_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj4174").trigger("obj4174_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj4174_SCEventCounterReachedTargetValue_activeActionGroupIndex = 4;
	








//	action: wait
wait_4748();
function wait_4748() {
	window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount = obj4174_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	setTimeout(function() {
		window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4174_SCEventCounterReachedTargetValue_actionGroup5();
}
	}, 1000);
}












};
obj4174_SCEventCounterReachedTargetValue_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4174_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj4174").trigger("obj4174_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj4174_SCEventCounterReachedTargetValue_activeActionGroupIndex = 5;
	

//	action: show 
//	target: obj6673 
show_4749();
function show_4749() {
	var element = "#obj6673";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount = obj4174_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4174_SCEventCounterReachedTargetValue_actionGroup6();
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
		window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4174_SCEventCounterReachedTargetValue_actionGroup6();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj4174_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4174_SCEventCounterReachedTargetValue_actionGroup6();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj4174_SCEventCounterReachedTargetValue_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4174_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj4174").trigger("obj4174_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj4174_SCEventCounterReachedTargetValue_activeActionGroupIndex = 6;
	





















};
obj5994_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5994_SCEventRun_activeActionGroupIndex = -1;
		$("#obj5994").trigger("obj5994_SCEventRun_ended");
		
		return;
	}
	window.obj5994_SCEventRun_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj3896 
show_5996();
function show_5996() {
	var element = "#obj3896";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj5994_SCEventRun_runningActionsCount = obj5994_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeInUpBig";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
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
		window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(500, function() {
	// 		setTimeout(function() {
	// 			window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj3898 
show_5997();
function show_5997() {
	var element = "#obj3898";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj5994_SCEventRun_runningActionsCount = obj5994_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeInUpBig";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
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
		window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(500, function() {
	// 		setTimeout(function() {
	// 			window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj3900 
show_5998();
function show_5998() {
	var element = "#obj3900";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj5994_SCEventRun_runningActionsCount = obj5994_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeInUpBig";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
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
		window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(500, function() {
	// 		setTimeout(function() {
	// 			window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj3902 
show_5999();
function show_5999() {
	var element = "#obj3902";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj5994_SCEventRun_runningActionsCount = obj5994_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeInUpBig";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
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
		window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(500, function() {
	// 		setTimeout(function() {
	// 			window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj3904 
show_6000();
function show_6000() {
	var element = "#obj3904";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj5994_SCEventRun_runningActionsCount = obj5994_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeInUpBig";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
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
		window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(500, function() {
	// 		setTimeout(function() {
	// 			window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj3906 
show_6001();
function show_6001() {
	var element = "#obj3906";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj5994_SCEventRun_runningActionsCount = obj5994_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeInUpBig";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
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
		window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(500, function() {
	// 		setTimeout(function() {
	// 			window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj3908 
show_6002();
function show_6002() {
	var element = "#obj3908";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj5994_SCEventRun_runningActionsCount = obj5994_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeInUpBig";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
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
		window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(500, function() {
	// 		setTimeout(function() {
	// 			window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj3910 
show_6003();
function show_6003() {
	var element = "#obj3910";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj5994_SCEventRun_runningActionsCount = obj5994_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeInUpBig";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
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
		window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(500, function() {
	// 		setTimeout(function() {
	// 			window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj3912 
show_6004();
function show_6004() {
	var element = "#obj3912";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj5994_SCEventRun_runningActionsCount = obj5994_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeInUpBig";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
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
		window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(500, function() {
	// 		setTimeout(function() {
	// 			window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj3878 
show_6005();
function show_6005() {
	var element = "#obj3878";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj5994_SCEventRun_runningActionsCount = obj5994_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeInUpBig";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
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
		window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(500, function() {
	// 		setTimeout(function() {
	// 			window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj3894 
show_6006();
function show_6006() {
	var element = "#obj3894";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj5994_SCEventRun_runningActionsCount = obj5994_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeInUpBig";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
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
		window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(500, function() {
	// 		setTimeout(function() {
	// 			window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj3880 
show_6007();
function show_6007() {
	var element = "#obj3880";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj5994_SCEventRun_runningActionsCount = obj5994_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeInUpBig";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
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
		window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(500, function() {
	// 		setTimeout(function() {
	// 			window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj3882 
show_6008();
function show_6008() {
	var element = "#obj3882";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj5994_SCEventRun_runningActionsCount = obj5994_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeInUpBig";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
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
		window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(500, function() {
	// 		setTimeout(function() {
	// 			window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj3884 
show_6009();
function show_6009() {
	var element = "#obj3884";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj5994_SCEventRun_runningActionsCount = obj5994_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeInUpBig";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
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
		window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(500, function() {
	// 		setTimeout(function() {
	// 			window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj3886 
show_6010();
function show_6010() {
	var element = "#obj3886";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj5994_SCEventRun_runningActionsCount = obj5994_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeInUpBig";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
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
		window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(500, function() {
	// 		setTimeout(function() {
	// 			window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj3888 
show_6011();
function show_6011() {
	var element = "#obj3888";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj5994_SCEventRun_runningActionsCount = obj5994_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeInUpBig";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
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
		window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(500, function() {
	// 		setTimeout(function() {
	// 			window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj3890 
show_6012();
function show_6012() {
	var element = "#obj3890";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj5994_SCEventRun_runningActionsCount = obj5994_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeInUpBig";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
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
		window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(500, function() {
	// 		setTimeout(function() {
	// 			window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj3892 
show_6013();
function show_6013() {
	var element = "#obj3892";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj5994_SCEventRun_runningActionsCount = obj5994_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeInUpBig";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
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
		window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(500, function() {
	// 		setTimeout(function() {
	// 			window.obj5994_SCEventRun_runningActionsCount = window.obj5994_SCEventRun_runningActionsCount - 1;
if (window.obj5994_SCEventRun_runningActionsCount == 0) {
	obj5994_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj5994_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5994_SCEventRun_activeActionGroupIndex = -1;
		$("#obj5994").trigger("obj5994_SCEventRun_ended");
		
		return;
	}
	window.obj5994_SCEventRun_activeActionGroupIndex = 1;
	





















};
obj6014_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6014_onTap_activeActionGroupIndex = -1;
		$("#obj6014").trigger("obj6014_onTap_ended");
		
		return;
	}
	window.obj6014_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj4387 
hide_6016();
function hide_6016() {
	var element = "#obj4387";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6014_onTap_runningActionsCount = obj6014_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj6014_onTap_runningActionsCount = window.obj6014_onTap_runningActionsCount - 1;
if (window.obj6014_onTap_runningActionsCount == 0) {
	obj6014_onTap_actionGroup1();
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
		setTimeout(hide_6016(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj6014_onTap_runningActionsCount = window.obj6014_onTap_runningActionsCount - 1;
if (window.obj6014_onTap_runningActionsCount == 0) {
	obj6014_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj4377 
hide_6017();
function hide_6017() {
	var element = "#obj4377";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6014_onTap_runningActionsCount = obj6014_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj6014_onTap_runningActionsCount = window.obj6014_onTap_runningActionsCount - 1;
if (window.obj6014_onTap_runningActionsCount == 0) {
	obj6014_onTap_actionGroup1();
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
		setTimeout(hide_6017(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj6014_onTap_runningActionsCount = window.obj6014_onTap_runningActionsCount - 1;
if (window.obj6014_onTap_runningActionsCount == 0) {
	obj6014_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj5983 
hide_6026();
function hide_6026() {
	var element = "#obj5983";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6014_onTap_runningActionsCount = obj6014_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj6014_onTap_runningActionsCount = window.obj6014_onTap_runningActionsCount - 1;
if (window.obj6014_onTap_runningActionsCount == 0) {
	obj6014_onTap_actionGroup1();
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
		setTimeout(hide_6026(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj6014_onTap_runningActionsCount = window.obj6014_onTap_runningActionsCount - 1;
if (window.obj6014_onTap_runningActionsCount == 0) {
	obj6014_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj6014 
hide_6027();
function hide_6027() {
	var element = "#obj6014";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6014_onTap_runningActionsCount = obj6014_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj6014_onTap_runningActionsCount = window.obj6014_onTap_runningActionsCount - 1;
if (window.obj6014_onTap_runningActionsCount == 0) {
	obj6014_onTap_actionGroup1();
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
		setTimeout(hide_6027(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj6014_onTap_runningActionsCount = window.obj6014_onTap_runningActionsCount - 1;
if (window.obj6014_onTap_runningActionsCount == 0) {
	obj6014_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj6014_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6014_onTap_activeActionGroupIndex = -1;
		$("#obj6014").trigger("obj6014_onTap_ended");
		
		return;
	}
	window.obj6014_onTap_activeActionGroupIndex = 1;
	


















//	action: run action list container
//	target: obj5994 
runActionList_6018();
function runActionList_6018() {
	window.obj6014_onTap_runningActionsCount = obj6014_onTap_runningActionsCount + 1;
	$("#obj5994").trigger('SCEventRun');
	setTimeout(function() {
		window.obj6014_onTap_runningActionsCount = window.obj6014_onTap_runningActionsCount - 1;
if (window.obj6014_onTap_runningActionsCount == 0) {
	obj6014_onTap_actionGroup2();
}		
	}, 1);
}



};
obj6014_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6014_onTap_activeActionGroupIndex = -1;
		$("#obj6014").trigger("obj6014_onTap_ended");
		
		return;
	}
	window.obj6014_onTap_activeActionGroupIndex = 2;
	








//	action: wait
wait_6045();
function wait_6045() {
	window.obj6014_onTap_runningActionsCount = obj6014_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj6014_onTap_runningActionsCount = window.obj6014_onTap_runningActionsCount - 1;
if (window.obj6014_onTap_runningActionsCount == 0) {
	obj6014_onTap_actionGroup3();
}
	}, 1000);
}












};
obj6014_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6014_onTap_activeActionGroupIndex = -1;
		$("#obj6014").trigger("obj6014_onTap_ended");
		
		return;
	}
	window.obj6014_onTap_activeActionGroupIndex = 3;
	

//	action: show 
//	target: obj6035 
show_6037();
function show_6037() {
	var element = "#obj6035";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj6014_onTap_runningActionsCount = obj6014_onTap_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj6014_onTap_runningActionsCount = window.obj6014_onTap_runningActionsCount - 1;
if (window.obj6014_onTap_runningActionsCount == 0) {
	obj6014_onTap_actionGroup4();
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
		window.obj6014_onTap_runningActionsCount = window.obj6014_onTap_runningActionsCount - 1;
if (window.obj6014_onTap_runningActionsCount == 0) {
	obj6014_onTap_actionGroup4();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj6014_onTap_runningActionsCount = window.obj6014_onTap_runningActionsCount - 1;
if (window.obj6014_onTap_runningActionsCount == 0) {
	obj6014_onTap_actionGroup4();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj6014_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6014_onTap_activeActionGroupIndex = -1;
		$("#obj6014").trigger("obj6014_onTap_ended");
		
		return;
	}
	window.obj6014_onTap_activeActionGroupIndex = 4;
	





















};
obj6563_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6563_onShow_activeActionGroupIndex = -1;
		$("#obj6563").trigger("obj6563_onShow_ended");
		
		return;
	}
	window.obj6563_onShow_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj6565 
show_6568();
function show_6568() {
	var element = "#obj6565";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj6563_onShow_runningActionsCount = obj6563_onShow_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj6563_onShow_runningActionsCount = window.obj6563_onShow_runningActionsCount - 1;
if (window.obj6563_onShow_runningActionsCount == 0) {
	obj6563_onShow_actionGroup1();
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
		window.obj6563_onShow_runningActionsCount = window.obj6563_onShow_runningActionsCount - 1;
if (window.obj6563_onShow_runningActionsCount == 0) {
	obj6563_onShow_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj6563_onShow_runningActionsCount = window.obj6563_onShow_runningActionsCount - 1;
if (window.obj6563_onShow_runningActionsCount == 0) {
	obj6563_onShow_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj6563_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6563_onShow_activeActionGroupIndex = -1;
		$("#obj6563").trigger("obj6563_onShow_ended");
		
		return;
	}
	window.obj6563_onShow_activeActionGroupIndex = 1;
	





















};
obj6565_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6565_onShow_activeActionGroupIndex = -1;
		$("#obj6565").trigger("obj6565_onShow_ended");
		
		return;
	}
	window.obj6565_onShow_activeActionGroupIndex = 0;
	








//	action: wait
wait_6570();
function wait_6570() {
	window.obj6565_onShow_runningActionsCount = obj6565_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj6565_onShow_runningActionsCount = window.obj6565_onShow_runningActionsCount - 1;
if (window.obj6565_onShow_runningActionsCount == 0) {
	obj6565_onShow_actionGroup1();
}
	}, 4000);
}












};
obj6565_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6565_onShow_activeActionGroupIndex = -1;
		$("#obj6565").trigger("obj6565_onShow_ended");
		
		return;
	}
	window.obj6565_onShow_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj6565 
hide_6571();
function hide_6571() {
	var element = "#obj6565";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6565_onShow_runningActionsCount = obj6565_onShow_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj6565_onShow_runningActionsCount = window.obj6565_onShow_runningActionsCount - 1;
if (window.obj6565_onShow_runningActionsCount == 0) {
	obj6565_onShow_actionGroup2();
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
		setTimeout(hide_6571(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj6565_onShow_runningActionsCount = window.obj6565_onShow_runningActionsCount - 1;
if (window.obj6565_onShow_runningActionsCount == 0) {
	obj6565_onShow_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj6565_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6565_onShow_activeActionGroupIndex = -1;
		$("#obj6565").trigger("obj6565_onShow_ended");
		
		return;
	}
	window.obj6565_onShow_activeActionGroupIndex = 2;
	





















};
obj6602_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6602_SCEventRun_activeActionGroupIndex = -1;
		$("#obj6602").trigger("obj6602_SCEventRun_ended");
		
		return;
	}
	window.obj6602_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj3896 
hide_6604();
function hide_6604() {
	var element = "#obj3896";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6602_SCEventRun_runningActionsCount = obj6602_SCEventRun_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj6602_SCEventRun_runningActionsCount = window.obj6602_SCEventRun_runningActionsCount - 1;
if (window.obj6602_SCEventRun_runningActionsCount == 0) {
	obj6602_SCEventRun_actionGroup1();
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
		setTimeout(hide_6604(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj6602_SCEventRun_runningActionsCount = window.obj6602_SCEventRun_runningActionsCount - 1;
if (window.obj6602_SCEventRun_runningActionsCount == 0) {
	obj6602_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj3898 
hide_6605();
function hide_6605() {
	var element = "#obj3898";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6602_SCEventRun_runningActionsCount = obj6602_SCEventRun_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj6602_SCEventRun_runningActionsCount = window.obj6602_SCEventRun_runningActionsCount - 1;
if (window.obj6602_SCEventRun_runningActionsCount == 0) {
	obj6602_SCEventRun_actionGroup1();
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
		setTimeout(hide_6605(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj6602_SCEventRun_runningActionsCount = window.obj6602_SCEventRun_runningActionsCount - 1;
if (window.obj6602_SCEventRun_runningActionsCount == 0) {
	obj6602_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj3900 
hide_6606();
function hide_6606() {
	var element = "#obj3900";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6602_SCEventRun_runningActionsCount = obj6602_SCEventRun_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj6602_SCEventRun_runningActionsCount = window.obj6602_SCEventRun_runningActionsCount - 1;
if (window.obj6602_SCEventRun_runningActionsCount == 0) {
	obj6602_SCEventRun_actionGroup1();
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
		setTimeout(hide_6606(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj6602_SCEventRun_runningActionsCount = window.obj6602_SCEventRun_runningActionsCount - 1;
if (window.obj6602_SCEventRun_runningActionsCount == 0) {
	obj6602_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj3902 
hide_6607();
function hide_6607() {
	var element = "#obj3902";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6602_SCEventRun_runningActionsCount = obj6602_SCEventRun_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj6602_SCEventRun_runningActionsCount = window.obj6602_SCEventRun_runningActionsCount - 1;
if (window.obj6602_SCEventRun_runningActionsCount == 0) {
	obj6602_SCEventRun_actionGroup1();
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
		setTimeout(hide_6607(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj6602_SCEventRun_runningActionsCount = window.obj6602_SCEventRun_runningActionsCount - 1;
if (window.obj6602_SCEventRun_runningActionsCount == 0) {
	obj6602_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj3904 
hide_6608();
function hide_6608() {
	var element = "#obj3904";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6602_SCEventRun_runningActionsCount = obj6602_SCEventRun_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj6602_SCEventRun_runningActionsCount = window.obj6602_SCEventRun_runningActionsCount - 1;
if (window.obj6602_SCEventRun_runningActionsCount == 0) {
	obj6602_SCEventRun_actionGroup1();
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
		setTimeout(hide_6608(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj6602_SCEventRun_runningActionsCount = window.obj6602_SCEventRun_runningActionsCount - 1;
if (window.obj6602_SCEventRun_runningActionsCount == 0) {
	obj6602_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj3906 
hide_6609();
function hide_6609() {
	var element = "#obj3906";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6602_SCEventRun_runningActionsCount = obj6602_SCEventRun_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj6602_SCEventRun_runningActionsCount = window.obj6602_SCEventRun_runningActionsCount - 1;
if (window.obj6602_SCEventRun_runningActionsCount == 0) {
	obj6602_SCEventRun_actionGroup1();
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
		setTimeout(hide_6609(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj6602_SCEventRun_runningActionsCount = window.obj6602_SCEventRun_runningActionsCount - 1;
if (window.obj6602_SCEventRun_runningActionsCount == 0) {
	obj6602_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj3908 
hide_6610();
function hide_6610() {
	var element = "#obj3908";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6602_SCEventRun_runningActionsCount = obj6602_SCEventRun_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj6602_SCEventRun_runningActionsCount = window.obj6602_SCEventRun_runningActionsCount - 1;
if (window.obj6602_SCEventRun_runningActionsCount == 0) {
	obj6602_SCEventRun_actionGroup1();
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
		setTimeout(hide_6610(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj6602_SCEventRun_runningActionsCount = window.obj6602_SCEventRun_runningActionsCount - 1;
if (window.obj6602_SCEventRun_runningActionsCount == 0) {
	obj6602_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj3910 
hide_6611();
function hide_6611() {
	var element = "#obj3910";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6602_SCEventRun_runningActionsCount = obj6602_SCEventRun_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj6602_SCEventRun_runningActionsCount = window.obj6602_SCEventRun_runningActionsCount - 1;
if (window.obj6602_SCEventRun_runningActionsCount == 0) {
	obj6602_SCEventRun_actionGroup1();
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
		setTimeout(hide_6611(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj6602_SCEventRun_runningActionsCount = window.obj6602_SCEventRun_runningActionsCount - 1;
if (window.obj6602_SCEventRun_runningActionsCount == 0) {
	obj6602_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj3912 
hide_6612();
function hide_6612() {
	var element = "#obj3912";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6602_SCEventRun_runningActionsCount = obj6602_SCEventRun_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj6602_SCEventRun_runningActionsCount = window.obj6602_SCEventRun_runningActionsCount - 1;
if (window.obj6602_SCEventRun_runningActionsCount == 0) {
	obj6602_SCEventRun_actionGroup1();
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
		setTimeout(hide_6612(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj6602_SCEventRun_runningActionsCount = window.obj6602_SCEventRun_runningActionsCount - 1;
if (window.obj6602_SCEventRun_runningActionsCount == 0) {
	obj6602_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj6602_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6602_SCEventRun_activeActionGroupIndex = -1;
		$("#obj6602").trigger("obj6602_SCEventRun_ended");
		
		return;
	}
	window.obj6602_SCEventRun_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj3882 
hide_6613();
function hide_6613() {
	var element = "#obj3882";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6602_SCEventRun_runningActionsCount = obj6602_SCEventRun_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj6602_SCEventRun_runningActionsCount = window.obj6602_SCEventRun_runningActionsCount - 1;
if (window.obj6602_SCEventRun_runningActionsCount == 0) {
	obj6602_SCEventRun_actionGroup2();
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
		setTimeout(hide_6613(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj6602_SCEventRun_runningActionsCount = window.obj6602_SCEventRun_runningActionsCount - 1;
if (window.obj6602_SCEventRun_runningActionsCount == 0) {
	obj6602_SCEventRun_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj3890 
hide_6614();
function hide_6614() {
	var element = "#obj3890";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6602_SCEventRun_runningActionsCount = obj6602_SCEventRun_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj6602_SCEventRun_runningActionsCount = window.obj6602_SCEventRun_runningActionsCount - 1;
if (window.obj6602_SCEventRun_runningActionsCount == 0) {
	obj6602_SCEventRun_actionGroup2();
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
		setTimeout(hide_6614(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj6602_SCEventRun_runningActionsCount = window.obj6602_SCEventRun_runningActionsCount - 1;
if (window.obj6602_SCEventRun_runningActionsCount == 0) {
	obj6602_SCEventRun_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj3884 
hide_6615();
function hide_6615() {
	var element = "#obj3884";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6602_SCEventRun_runningActionsCount = obj6602_SCEventRun_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj6602_SCEventRun_runningActionsCount = window.obj6602_SCEventRun_runningActionsCount - 1;
if (window.obj6602_SCEventRun_runningActionsCount == 0) {
	obj6602_SCEventRun_actionGroup2();
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
		setTimeout(hide_6615(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj6602_SCEventRun_runningActionsCount = window.obj6602_SCEventRun_runningActionsCount - 1;
if (window.obj6602_SCEventRun_runningActionsCount == 0) {
	obj6602_SCEventRun_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj3892 
hide_6616();
function hide_6616() {
	var element = "#obj3892";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6602_SCEventRun_runningActionsCount = obj6602_SCEventRun_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj6602_SCEventRun_runningActionsCount = window.obj6602_SCEventRun_runningActionsCount - 1;
if (window.obj6602_SCEventRun_runningActionsCount == 0) {
	obj6602_SCEventRun_actionGroup2();
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
		setTimeout(hide_6616(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj6602_SCEventRun_runningActionsCount = window.obj6602_SCEventRun_runningActionsCount - 1;
if (window.obj6602_SCEventRun_runningActionsCount == 0) {
	obj6602_SCEventRun_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj3878 
hide_6617();
function hide_6617() {
	var element = "#obj3878";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6602_SCEventRun_runningActionsCount = obj6602_SCEventRun_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj6602_SCEventRun_runningActionsCount = window.obj6602_SCEventRun_runningActionsCount - 1;
if (window.obj6602_SCEventRun_runningActionsCount == 0) {
	obj6602_SCEventRun_actionGroup2();
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
		setTimeout(hide_6617(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj6602_SCEventRun_runningActionsCount = window.obj6602_SCEventRun_runningActionsCount - 1;
if (window.obj6602_SCEventRun_runningActionsCount == 0) {
	obj6602_SCEventRun_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj3894 
hide_6618();
function hide_6618() {
	var element = "#obj3894";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6602_SCEventRun_runningActionsCount = obj6602_SCEventRun_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj6602_SCEventRun_runningActionsCount = window.obj6602_SCEventRun_runningActionsCount - 1;
if (window.obj6602_SCEventRun_runningActionsCount == 0) {
	obj6602_SCEventRun_actionGroup2();
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
		setTimeout(hide_6618(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj6602_SCEventRun_runningActionsCount = window.obj6602_SCEventRun_runningActionsCount - 1;
if (window.obj6602_SCEventRun_runningActionsCount == 0) {
	obj6602_SCEventRun_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj3880 
hide_6619();
function hide_6619() {
	var element = "#obj3880";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6602_SCEventRun_runningActionsCount = obj6602_SCEventRun_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj6602_SCEventRun_runningActionsCount = window.obj6602_SCEventRun_runningActionsCount - 1;
if (window.obj6602_SCEventRun_runningActionsCount == 0) {
	obj6602_SCEventRun_actionGroup2();
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
		setTimeout(hide_6619(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj6602_SCEventRun_runningActionsCount = window.obj6602_SCEventRun_runningActionsCount - 1;
if (window.obj6602_SCEventRun_runningActionsCount == 0) {
	obj6602_SCEventRun_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj3886 
hide_6620();
function hide_6620() {
	var element = "#obj3886";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6602_SCEventRun_runningActionsCount = obj6602_SCEventRun_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj6602_SCEventRun_runningActionsCount = window.obj6602_SCEventRun_runningActionsCount - 1;
if (window.obj6602_SCEventRun_runningActionsCount == 0) {
	obj6602_SCEventRun_actionGroup2();
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
		setTimeout(hide_6620(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj6602_SCEventRun_runningActionsCount = window.obj6602_SCEventRun_runningActionsCount - 1;
if (window.obj6602_SCEventRun_runningActionsCount == 0) {
	obj6602_SCEventRun_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj3888 
hide_6621();
function hide_6621() {
	var element = "#obj3888";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6602_SCEventRun_runningActionsCount = obj6602_SCEventRun_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj6602_SCEventRun_runningActionsCount = window.obj6602_SCEventRun_runningActionsCount - 1;
if (window.obj6602_SCEventRun_runningActionsCount == 0) {
	obj6602_SCEventRun_actionGroup2();
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
		setTimeout(hide_6621(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj6602_SCEventRun_runningActionsCount = window.obj6602_SCEventRun_runningActionsCount - 1;
if (window.obj6602_SCEventRun_runningActionsCount == 0) {
	obj6602_SCEventRun_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj6602_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6602_SCEventRun_activeActionGroupIndex = -1;
		$("#obj6602").trigger("obj6602_SCEventRun_ended");
		
		return;
	}
	window.obj6602_SCEventRun_activeActionGroupIndex = 2;
	





















};
obj6673_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6673_onTap_activeActionGroupIndex = -1;
		$("#obj6673").trigger("obj6673_onTap_ended");
		
		return;
	}
	window.obj6673_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page3
goToPage_6675();
function goToPage_6675() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../3/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(3))},200);
	}
}





















};
obj6673_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6673_onTap_activeActionGroupIndex = -1;
		$("#obj6673").trigger("obj6673_onTap_ended");
		
		return;
	}
	window.obj6673_onTap_activeActionGroupIndex = 1;
	





















};
obj4097_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4097_onTap_activeActionGroupIndex = -1;
		$("#obj4097").trigger("obj4097_onTap_ended");
		
		return;
	}
	window.obj4097_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page3
goToPage_4099();
function goToPage_4099() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../3/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(3))},200);
	}
}





















};
obj4097_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4097_onTap_activeActionGroupIndex = -1;
		$("#obj4097").trigger("obj4097_onTap_ended");
		
		return;
	}
	window.obj4097_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





/*
 *
 *   obj5560: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj5560_onLoad_activeActionGroupIndex != -1) return;
var obj5560_onLoad_runningActionsCount = 0;
var obj5560_onLoad_loopCount = 0;
obj5560_onLoad_actionGroup0();
});



















































































/*
 *
 *   obj3878: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj3878");
	var winTarget = document.getElementById("obj3878");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj3878").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj3878_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj3878_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj3878_onTouchDown_activeActionGroupIndex != -1) return;
var obj3878_onTouchDown_runningActionsCount = 0;
var obj3878_onTouchDown_loopCount = 0;
obj3878_onTouchDown_actionGroup0();
});







/*
 *
 *   obj3880: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj3880");
	var winTarget = document.getElementById("obj3880");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj3880").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj3880_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj3880_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj3880_onTouchDown_activeActionGroupIndex != -1) return;
var obj3880_onTouchDown_runningActionsCount = 0;
var obj3880_onTouchDown_loopCount = 0;
obj3880_onTouchDown_actionGroup0();
});


/*
 *
 *   obj3880: Event SCActionDragDrop3929_droppedOutsideTargetActions
 *
 */
$("#obj3880").bind("SCActionDragDrop3929_droppedOutsideTargetActions", function(event) {
	if (window.obj3880_SCActionDragDrop3929_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj3880_SCActionDragDrop3929_droppedOutsideTargetActions_runningActionsCount = 0;
var obj3880_SCActionDragDrop3929_droppedOutsideTargetActions_loopCount = 0;
obj3880_SCActionDragDrop3929_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj3880: Event droppedInsideTargetActions
 *
 */
$("#obj3880").one("droppedInsideTargetActions", function(event) {
	if (window.obj3880_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj3880_droppedInsideTargetActions_runningActionsCount = 0;
var obj3880_droppedInsideTargetActions_loopCount = 0;
obj3880_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj3882: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj3882");
	var winTarget = document.getElementById("obj3882");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj3882").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj3882_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj3882_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj3882_onTouchDown_activeActionGroupIndex != -1) return;
var obj3882_onTouchDown_runningActionsCount = 0;
var obj3882_onTouchDown_loopCount = 0;
obj3882_onTouchDown_actionGroup0();
});


/*
 *
 *   obj3882: Event SCActionDragDrop3929_droppedOutsideTargetActions
 *
 */
$("#obj3882").bind("SCActionDragDrop3929_droppedOutsideTargetActions", function(event) {
	if (window.obj3882_SCActionDragDrop3929_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj3882_SCActionDragDrop3929_droppedOutsideTargetActions_runningActionsCount = 0;
var obj3882_SCActionDragDrop3929_droppedOutsideTargetActions_loopCount = 0;
obj3882_SCActionDragDrop3929_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj3882: Event droppedInsideTargetActions_2
 *
 */
$("#obj3882").one("droppedInsideTargetActions_2", function(event) {
	if (window.obj3882_droppedInsideTargetActions_2_activeActionGroupIndex != -1) return;
var obj3882_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj3882_droppedInsideTargetActions_2_loopCount = 0;
obj3882_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj3882: Event droppedInsideTargetActions
 *
 */
$("#obj3882").one("droppedInsideTargetActions", function(event) {
	if (window.obj3882_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj3882_droppedInsideTargetActions_runningActionsCount = 0;
var obj3882_droppedInsideTargetActions_loopCount = 0;
obj3882_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj3884: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj3884");
	var winTarget = document.getElementById("obj3884");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj3884").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj3884_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj3884_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj3884_onTouchDown_activeActionGroupIndex != -1) return;
var obj3884_onTouchDown_runningActionsCount = 0;
var obj3884_onTouchDown_loopCount = 0;
obj3884_onTouchDown_actionGroup0();
});


/*
 *
 *   obj3884: Event SCActionDragDrop3939_droppedOutsideTargetActions
 *
 */
$("#obj3884").bind("SCActionDragDrop3939_droppedOutsideTargetActions", function(event) {
	if (window.obj3884_SCActionDragDrop3939_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj3884_SCActionDragDrop3939_droppedOutsideTargetActions_runningActionsCount = 0;
var obj3884_SCActionDragDrop3939_droppedOutsideTargetActions_loopCount = 0;
obj3884_SCActionDragDrop3939_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj3884: Event droppedInsideTargetActions_2
 *
 */
$("#obj3884").one("droppedInsideTargetActions_2", function(event) {
	if (window.obj3884_droppedInsideTargetActions_2_activeActionGroupIndex != -1) return;
var obj3884_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj3884_droppedInsideTargetActions_2_loopCount = 0;
obj3884_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj3884: Event droppedInsideTargetActions
 *
 */
$("#obj3884").one("droppedInsideTargetActions", function(event) {
	if (window.obj3884_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj3884_droppedInsideTargetActions_runningActionsCount = 0;
var obj3884_droppedInsideTargetActions_loopCount = 0;
obj3884_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj3886: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj3886");
	var winTarget = document.getElementById("obj3886");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj3886").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj3886_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj3886_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj3886_onTouchDown_activeActionGroupIndex != -1) return;
var obj3886_onTouchDown_runningActionsCount = 0;
var obj3886_onTouchDown_loopCount = 0;
obj3886_onTouchDown_actionGroup0();
});


/*
 *
 *   obj3886: Event SCActionDragDrop3929_droppedOutsideTargetActions
 *
 */
$("#obj3886").bind("SCActionDragDrop3929_droppedOutsideTargetActions", function(event) {
	if (window.obj3886_SCActionDragDrop3929_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj3886_SCActionDragDrop3929_droppedOutsideTargetActions_runningActionsCount = 0;
var obj3886_SCActionDragDrop3929_droppedOutsideTargetActions_loopCount = 0;
obj3886_SCActionDragDrop3929_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj3886: Event droppedInsideTargetActions
 *
 */
$("#obj3886").one("droppedInsideTargetActions", function(event) {
	if (window.obj3886_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj3886_droppedInsideTargetActions_runningActionsCount = 0;
var obj3886_droppedInsideTargetActions_loopCount = 0;
obj3886_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj3888: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj3888");
	var winTarget = document.getElementById("obj3888");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj3888").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj3888_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj3888_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj3888_onTouchDown_activeActionGroupIndex != -1) return;
var obj3888_onTouchDown_runningActionsCount = 0;
var obj3888_onTouchDown_loopCount = 0;
obj3888_onTouchDown_actionGroup0();
});


/*
 *
 *   obj3888: Event SCActionDragDrop3929_droppedOutsideTargetActions
 *
 */
$("#obj3888").bind("SCActionDragDrop3929_droppedOutsideTargetActions", function(event) {
	if (window.obj3888_SCActionDragDrop3929_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj3888_SCActionDragDrop3929_droppedOutsideTargetActions_runningActionsCount = 0;
var obj3888_SCActionDragDrop3929_droppedOutsideTargetActions_loopCount = 0;
obj3888_SCActionDragDrop3929_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj3888: Event droppedInsideTargetActions
 *
 */
$("#obj3888").one("droppedInsideTargetActions", function(event) {
	if (window.obj3888_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj3888_droppedInsideTargetActions_runningActionsCount = 0;
var obj3888_droppedInsideTargetActions_loopCount = 0;
obj3888_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj3890: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj3890");
	var winTarget = document.getElementById("obj3890");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj3890").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj3890_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj3890_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj3890_onTouchDown_activeActionGroupIndex != -1) return;
var obj3890_onTouchDown_runningActionsCount = 0;
var obj3890_onTouchDown_loopCount = 0;
obj3890_onTouchDown_actionGroup0();
});


/*
 *
 *   obj3890: Event SCActionDragDrop3929_droppedOutsideTargetActions
 *
 */
$("#obj3890").bind("SCActionDragDrop3929_droppedOutsideTargetActions", function(event) {
	if (window.obj3890_SCActionDragDrop3929_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj3890_SCActionDragDrop3929_droppedOutsideTargetActions_runningActionsCount = 0;
var obj3890_SCActionDragDrop3929_droppedOutsideTargetActions_loopCount = 0;
obj3890_SCActionDragDrop3929_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj3890: Event droppedInsideTargetActions_2
 *
 */
$("#obj3890").one("droppedInsideTargetActions_2", function(event) {
	if (window.obj3890_droppedInsideTargetActions_2_activeActionGroupIndex != -1) return;
var obj3890_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj3890_droppedInsideTargetActions_2_loopCount = 0;
obj3890_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj3890: Event droppedInsideTargetActions
 *
 */
$("#obj3890").one("droppedInsideTargetActions", function(event) {
	if (window.obj3890_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj3890_droppedInsideTargetActions_runningActionsCount = 0;
var obj3890_droppedInsideTargetActions_loopCount = 0;
obj3890_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj3892: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj3892");
	var winTarget = document.getElementById("obj3892");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj3892").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj3892_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj3892_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj3892_onTouchDown_activeActionGroupIndex != -1) return;
var obj3892_onTouchDown_runningActionsCount = 0;
var obj3892_onTouchDown_loopCount = 0;
obj3892_onTouchDown_actionGroup0();
});


/*
 *
 *   obj3892: Event SCActionDragDrop3939_droppedOutsideTargetActions
 *
 */
$("#obj3892").bind("SCActionDragDrop3939_droppedOutsideTargetActions", function(event) {
	if (window.obj3892_SCActionDragDrop3939_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj3892_SCActionDragDrop3939_droppedOutsideTargetActions_runningActionsCount = 0;
var obj3892_SCActionDragDrop3939_droppedOutsideTargetActions_loopCount = 0;
obj3892_SCActionDragDrop3939_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj3892: Event droppedInsideTargetActions_2
 *
 */
$("#obj3892").one("droppedInsideTargetActions_2", function(event) {
	if (window.obj3892_droppedInsideTargetActions_2_activeActionGroupIndex != -1) return;
var obj3892_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj3892_droppedInsideTargetActions_2_loopCount = 0;
obj3892_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj3892: Event droppedInsideTargetActions
 *
 */
$("#obj3892").one("droppedInsideTargetActions", function(event) {
	if (window.obj3892_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj3892_droppedInsideTargetActions_runningActionsCount = 0;
var obj3892_droppedInsideTargetActions_loopCount = 0;
obj3892_droppedInsideTargetActions_actionGroup0();
});














/*
 *
 *   obj4174: Event SCEventCounterReachedTargetValue
 *
 */
$("#obj4174").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj4174_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) return;
var obj4174_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj4174_SCEventCounterReachedTargetValue_loopCount = 0;
obj4174_SCEventCounterReachedTargetValue_actionGroup0();
});










































/*
 *
 *   obj5994: Event SCEventRun
 *
 */
$("#obj5994").bind("SCEventRun", function(event) {
	if (window.obj5994_SCEventRun_activeActionGroupIndex != -1) return;
var obj5994_SCEventRun_runningActionsCount = 0;
var obj5994_SCEventRun_loopCount = 0;
obj5994_SCEventRun_actionGroup0();
});










/*
 *
 *   obj6014: Event Touch Down
 *
 */
 
$("#obj6014").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6014_onTap_activeActionGroupIndex != -1) return;
var obj6014_onTap_runningActionsCount = 0;
var obj6014_onTap_loopCount = 0;
obj6014_onTap_actionGroup0();
});








/*
 *
 *   obj6563: Event Show
 *
 */
 
$("#obj6563").bind('SCEventShow', function(event) {
	if (window.obj6563_onShow_activeActionGroupIndex != -1) return;
var obj6563_onShow_runningActionsCount = 0;
var obj6563_onShow_loopCount = 0;
obj6563_onShow_actionGroup0();
});







/*
 *
 *   obj6565: Event Show
 *
 */
 
$("#obj6565").bind('SCEventShow', function(event) {
	if (window.obj6565_onShow_activeActionGroupIndex != -1) return;
var obj6565_onShow_runningActionsCount = 0;
var obj6565_onShow_loopCount = 0;
obj6565_onShow_actionGroup0();
});









/*
 *
 *   obj6602: Event SCEventRun
 *
 */
$("#obj6602").bind("SCEventRun", function(event) {
	if (window.obj6602_SCEventRun_activeActionGroupIndex != -1) return;
var obj6602_SCEventRun_runningActionsCount = 0;
var obj6602_SCEventRun_loopCount = 0;
obj6602_SCEventRun_actionGroup0();
});



/*
 *
 *   obj6673: Event Touch Down
 *
 */
 
$("#obj6673").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6673_onTap_activeActionGroupIndex != -1) return;
var obj6673_onTap_runningActionsCount = 0;
var obj6673_onTap_loopCount = 0;
obj6673_onTap_actionGroup0();
});







/*
 *
 *   obj4097: Event Touch Down
 *
 */
 
$("#obj4097").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4097_onTap_activeActionGroupIndex != -1) return;
var obj4097_onTap_runningActionsCount = 0;
var obj4097_onTap_loopCount = 0;
obj4097_onTap_actionGroup0();
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
	
$("#obj5560").trigger('SCEventShow');
$("#obj4359").trigger('SCEventShow');
$("#obj4377").trigger('SCEventShow');
$("#obj4387").trigger('SCEventShow');
$("#obj5983").trigger('SCEventShow');
$("#obj6014").trigger('SCEventShow');
$("#obj4097").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});