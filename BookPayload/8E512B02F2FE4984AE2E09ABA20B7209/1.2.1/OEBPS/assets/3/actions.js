pubcoder.projectID = "18658B6D99D44CD8BE3D25481D40B4A6";
pubcoder.project.id = "18658B6D99D44CD8BE3D25481D40B4A6";
pubcoder.project.title = "Lisa Townsend\'s Project";
pubcoder.page.id = 1734;
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
var obj1786_onTap_activeActionGroupIndex = -1;
var obj1786_onTap_runningActionsCount = 0;
var obj1786_onTap_loopCount = 0;
var obj1769_onTap_activeActionGroupIndex = -1;
var obj1769_onTap_runningActionsCount = 0;
var obj1769_onTap_loopCount = 0;
var obj1753_onTap_activeActionGroupIndex = -1;
var obj1753_onTap_runningActionsCount = 0;
var obj1753_onTap_loopCount = 0;
var obj1886_onTap_activeActionGroupIndex = -1;
var obj1886_onTap_runningActionsCount = 0;
var obj1886_onTap_loopCount = 0;
var obj1746_onLoad_activeActionGroupIndex = -1;
var obj1746_onLoad_runningActionsCount = 0;
var obj1746_onLoad_loopCount = 0;
var obj1915_onTap_activeActionGroupIndex = -1;
var obj1915_onTap_runningActionsCount = 0;
var obj1915_onTap_loopCount = 0;
var obj1915_onTouchDown_activeActionGroupIndex = -1;
var obj1915_onTouchDown_runningActionsCount = 0;
var obj1915_onTouchDown_loopCount = 0;
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
		
obj1786_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1786_onTap_activeActionGroupIndex = -1;
		$("#obj1786").trigger("obj1786_onTap_ended");
		
		return;
	}
	window.obj1786_onTap_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1786 
move_1789();
function move_1789() {
	window.obj1786_onTap_runningActionsCount = obj1786_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj1786");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 30;
	var moveY = 2;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1786_onTap_runningActionsCount = window.obj1786_onTap_runningActionsCount - 1;
if (window.obj1786_onTap_runningActionsCount == 0) {
	obj1786_onTap_actionGroup1();
}
		}, 1);
	});
}













//	action: Run JavaScript
runjs_1903();
function runjs_1903() {
	window.obj1786_onTap_runningActionsCount = obj1786_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1786"));
	setTimeout(function() {
		window.obj1786_onTap_runningActionsCount = window.obj1786_onTap_runningActionsCount - 1;
if (window.obj1786_onTap_runningActionsCount == 0) {
	obj1786_onTap_actionGroup1();
}
	}, 1);
}






};
obj1786_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1786_onTap_activeActionGroupIndex = -1;
		$("#obj1786").trigger("obj1786_onTap_ended");
		
		return;
	}
	window.obj1786_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1915 
show_1918();
function show_1918() {
	window.obj1786_onTap_runningActionsCount = obj1786_onTap_runningActionsCount + 1;
	$("#obj1915").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1786_onTap_runningActionsCount = window.obj1786_onTap_runningActionsCount - 1;
if (window.obj1786_onTap_runningActionsCount == 0) {
	obj1786_onTap_actionGroup2();
}
				$("#obj1915").trigger('SCEventShow');
			}, 1);
		}
	);
}













//	action: Run JavaScript
runjs_1917();
function runjs_1917() {
	window.obj1786_onTap_runningActionsCount = obj1786_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1915"));
	setTimeout(function() {
		window.obj1786_onTap_runningActionsCount = window.obj1786_onTap_runningActionsCount - 1;
if (window.obj1786_onTap_runningActionsCount == 0) {
	obj1786_onTap_actionGroup2();
}
	}, 1);
}






};
obj1786_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1786_onTap_activeActionGroupIndex = -1;
		$("#obj1786").trigger("obj1786_onTap_ended");
		
		return;
	}
	window.obj1786_onTap_activeActionGroupIndex = 2;
	





















};
obj1769_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1769_onTap_activeActionGroupIndex = -1;
		$("#obj1769").trigger("obj1769_onTap_ended");
		
		return;
	}
	window.obj1769_onTap_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1769 
move_1927();
function move_1927() {
	window.obj1769_onTap_runningActionsCount = obj1769_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj1769");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 30;
	var moveY = 2;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1769_onTap_runningActionsCount = window.obj1769_onTap_runningActionsCount - 1;
if (window.obj1769_onTap_runningActionsCount == 0) {
	obj1769_onTap_actionGroup1();
}
		}, 1);
	});
}













//	action: Run JavaScript
runjs_1926();
function runjs_1926() {
	window.obj1769_onTap_runningActionsCount = obj1769_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1769"));
	setTimeout(function() {
		window.obj1769_onTap_runningActionsCount = window.obj1769_onTap_runningActionsCount - 1;
if (window.obj1769_onTap_runningActionsCount == 0) {
	obj1769_onTap_actionGroup1();
}
	}, 1);
}






};
obj1769_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1769_onTap_activeActionGroupIndex = -1;
		$("#obj1769").trigger("obj1769_onTap_ended");
		
		return;
	}
	window.obj1769_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1915 
show_1928();
function show_1928() {
	window.obj1769_onTap_runningActionsCount = obj1769_onTap_runningActionsCount + 1;
	$("#obj1915").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1769_onTap_runningActionsCount = window.obj1769_onTap_runningActionsCount - 1;
if (window.obj1769_onTap_runningActionsCount == 0) {
	obj1769_onTap_actionGroup2();
}
				$("#obj1915").trigger('SCEventShow');
			}, 1);
		}
	);
}













//	action: Run JavaScript
runjs_1929();
function runjs_1929() {
	window.obj1769_onTap_runningActionsCount = obj1769_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1915"));
	setTimeout(function() {
		window.obj1769_onTap_runningActionsCount = window.obj1769_onTap_runningActionsCount - 1;
if (window.obj1769_onTap_runningActionsCount == 0) {
	obj1769_onTap_actionGroup2();
}
	}, 1);
}






};
obj1769_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1769_onTap_activeActionGroupIndex = -1;
		$("#obj1769").trigger("obj1769_onTap_ended");
		
		return;
	}
	window.obj1769_onTap_activeActionGroupIndex = 2;
	





















};
obj1753_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1753_onTap_activeActionGroupIndex = -1;
		$("#obj1753").trigger("obj1753_onTap_ended");
		
		return;
	}
	window.obj1753_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1886 
hide_1940();
function hide_1940() {
	window.obj1753_onTap_runningActionsCount = obj1753_onTap_runningActionsCount + 1;
	$("#obj1886").fadeOut(0, function() {
			setTimeout(function() {
				window.obj1753_onTap_runningActionsCount = window.obj1753_onTap_runningActionsCount - 1;
if (window.obj1753_onTap_runningActionsCount == 0) {
	obj1753_onTap_actionGroup1();
}
			}, 1);
		}
	);
}
//	action: show 
//	target: obj1915 
show_1932();
function show_1932() {
	window.obj1753_onTap_runningActionsCount = obj1753_onTap_runningActionsCount + 1;
	$("#obj1915").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1753_onTap_runningActionsCount = window.obj1753_onTap_runningActionsCount - 1;
if (window.obj1753_onTap_runningActionsCount == 0) {
	obj1753_onTap_actionGroup1();
}
				$("#obj1915").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: move
//	target: obj1753 
move_1931();
function move_1931() {
	window.obj1753_onTap_runningActionsCount = obj1753_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj1753");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 28;
	var moveY = 2;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1753_onTap_runningActionsCount = window.obj1753_onTap_runningActionsCount - 1;
if (window.obj1753_onTap_runningActionsCount == 0) {
	obj1753_onTap_actionGroup1();
}
		}, 1);
	});
}













//	action: Run JavaScript
runjs_1930();
function runjs_1930() {
	window.obj1753_onTap_runningActionsCount = obj1753_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1753"));
	setTimeout(function() {
		window.obj1753_onTap_runningActionsCount = window.obj1753_onTap_runningActionsCount - 1;
if (window.obj1753_onTap_runningActionsCount == 0) {
	obj1753_onTap_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1933();
function runjs_1933() {
	window.obj1753_onTap_runningActionsCount = obj1753_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1915"));
	setTimeout(function() {
		window.obj1753_onTap_runningActionsCount = window.obj1753_onTap_runningActionsCount - 1;
if (window.obj1753_onTap_runningActionsCount == 0) {
	obj1753_onTap_actionGroup1();
}
	}, 1);
}






};
obj1753_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1753_onTap_activeActionGroupIndex = -1;
		$("#obj1753").trigger("obj1753_onTap_ended");
		
		return;
	}
	window.obj1753_onTap_activeActionGroupIndex = 1;
	





















};
obj1886_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1886_onTap_activeActionGroupIndex = -1;
		$("#obj1886").trigger("obj1886_onTap_ended");
		
		return;
	}
	window.obj1886_onTap_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1753 
move_1937();
function move_1937() {
	window.obj1886_onTap_runningActionsCount = obj1886_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj1753");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 28;
	var moveY = 2;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1886_onTap_runningActionsCount = window.obj1886_onTap_runningActionsCount - 1;
if (window.obj1886_onTap_runningActionsCount == 0) {
	obj1886_onTap_actionGroup1();
}
		}, 1);
	});
}













//	action: Run JavaScript
runjs_1936();
function runjs_1936() {
	window.obj1886_onTap_runningActionsCount = obj1886_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1753"));
	setTimeout(function() {
		window.obj1886_onTap_runningActionsCount = window.obj1886_onTap_runningActionsCount - 1;
if (window.obj1886_onTap_runningActionsCount == 0) {
	obj1886_onTap_actionGroup1();
}
	}, 1);
}






};
obj1886_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1886_onTap_activeActionGroupIndex = -1;
		$("#obj1886").trigger("obj1886_onTap_ended");
		
		return;
	}
	window.obj1886_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1915 
show_1938();
function show_1938() {
	window.obj1886_onTap_runningActionsCount = obj1886_onTap_runningActionsCount + 1;
	$("#obj1915").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1886_onTap_runningActionsCount = window.obj1886_onTap_runningActionsCount - 1;
if (window.obj1886_onTap_runningActionsCount == 0) {
	obj1886_onTap_actionGroup2();
}
				$("#obj1915").trigger('SCEventShow');
			}, 1);
		}
	);
}













//	action: Run JavaScript
runjs_1939();
function runjs_1939() {
	window.obj1886_onTap_runningActionsCount = obj1886_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1915"));
	setTimeout(function() {
		window.obj1886_onTap_runningActionsCount = window.obj1886_onTap_runningActionsCount - 1;
if (window.obj1886_onTap_runningActionsCount == 0) {
	obj1886_onTap_actionGroup2();
}
	}, 1);
}






};
obj1886_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1886_onTap_activeActionGroupIndex = -1;
		$("#obj1886").trigger("obj1886_onTap_ended");
		
		return;
	}
	window.obj1886_onTap_activeActionGroupIndex = 2;
	





















};
obj1746_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1746_onLoad_activeActionGroupIndex = -1;
		$("#obj1746").trigger("obj1746_onLoad_ended");
		
		return;
	}
	window.obj1746_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_1749();
function wait_1749() {
	window.obj1746_onLoad_runningActionsCount = obj1746_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj1746_onLoad_runningActionsCount = window.obj1746_onLoad_runningActionsCount - 1;
if (window.obj1746_onLoad_runningActionsCount == 0) {
	obj1746_onLoad_actionGroup1();
}
	}, 1000);
}












};
obj1746_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1746_onLoad_activeActionGroupIndex = -1;
		$("#obj1746").trigger("obj1746_onLoad_ended");
		
		return;
	}
	window.obj1746_onLoad_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1941 
show_1943();
function show_1943() {
	window.obj1746_onLoad_runningActionsCount = obj1746_onLoad_runningActionsCount + 1;
	$("#obj1941").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1746_onLoad_runningActionsCount = window.obj1746_onLoad_runningActionsCount - 1;
if (window.obj1746_onLoad_runningActionsCount == 0) {
	obj1746_onLoad_actionGroup2();
}
				$("#obj1941").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: move
//	target: obj1803 
move_1750();
function move_1750() {
	window.obj1746_onLoad_runningActionsCount = obj1746_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj1803");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=1";
	var moveY = "+=-409";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1746_onLoad_runningActionsCount = window.obj1746_onLoad_runningActionsCount - 1;
if (window.obj1746_onLoad_runningActionsCount == 0) {
	obj1746_onLoad_actionGroup2();
}
		}, 1);
	});
}



















};
obj1746_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1746_onLoad_activeActionGroupIndex = -1;
		$("#obj1746").trigger("obj1746_onLoad_ended");
		
		return;
	}
	window.obj1746_onLoad_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj1786 
move_1751();
function move_1751() {
	window.obj1746_onLoad_runningActionsCount = obj1746_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj1786");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 32;
	var moveY = 294;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1746_onLoad_runningActionsCount = window.obj1746_onLoad_runningActionsCount - 1;
if (window.obj1746_onLoad_runningActionsCount == 0) {
	obj1746_onLoad_actionGroup3();
}
		}, 1);
	});
}



















};
obj1746_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1746_onLoad_activeActionGroupIndex = -1;
		$("#obj1746").trigger("obj1746_onLoad_ended");
		
		return;
	}
	window.obj1746_onLoad_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj1769 
move_1871();
function move_1871() {
	window.obj1746_onLoad_runningActionsCount = obj1746_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj1769");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=2";
	var moveY = "+=-805";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1746_onLoad_runningActionsCount = window.obj1746_onLoad_runningActionsCount - 1;
if (window.obj1746_onLoad_runningActionsCount == 0) {
	obj1746_onLoad_actionGroup4();
}
		}, 1);
	});
}



















};
obj1746_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1746_onLoad_activeActionGroupIndex = -1;
		$("#obj1746").trigger("obj1746_onLoad_ended");
		
		return;
	}
	window.obj1746_onLoad_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj1753 
move_1872();
function move_1872() {
	window.obj1746_onLoad_runningActionsCount = obj1746_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj1753");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=3";
	var moveY = "+=-630";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1746_onLoad_runningActionsCount = window.obj1746_onLoad_runningActionsCount - 1;
if (window.obj1746_onLoad_runningActionsCount == 0) {
	obj1746_onLoad_actionGroup5();
}
		}, 1);
	});
}
//	action: move
//	target: obj1886 
move_1881();
function move_1881() {
	window.obj1746_onLoad_runningActionsCount = obj1746_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj1886");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-2";
	var moveY = "+=-602";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1746_onLoad_runningActionsCount = window.obj1746_onLoad_runningActionsCount - 1;
if (window.obj1746_onLoad_runningActionsCount == 0) {
	obj1746_onLoad_actionGroup5();
}
		}, 1);
	});
}



















};
obj1746_onLoad_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1746_onLoad_activeActionGroupIndex = -1;
		$("#obj1746").trigger("obj1746_onLoad_ended");
		
		return;
	}
	window.obj1746_onLoad_activeActionGroupIndex = 5;
	

//	action: hide
//	target: obj1803 
hide_1752();
function hide_1752() {
	window.obj1746_onLoad_runningActionsCount = obj1746_onLoad_runningActionsCount + 1;
	$("#obj1803").fadeOut(0, function() {
			setTimeout(function() {
				window.obj1746_onLoad_runningActionsCount = window.obj1746_onLoad_runningActionsCount - 1;
if (window.obj1746_onLoad_runningActionsCount == 0) {
	obj1746_onLoad_actionGroup6();
}
			}, 1);
		}
	);
}




















};
obj1746_onLoad_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1746_onLoad_activeActionGroupIndex = -1;
		$("#obj1746").trigger("obj1746_onLoad_ended");
		
		return;
	}
	window.obj1746_onLoad_activeActionGroupIndex = 6;
	





















};
obj1915_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1915_onTap_activeActionGroupIndex = -1;
		$("#obj1915").trigger("obj1915_onTap_ended");
		
		return;
	}
	window.obj1915_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page3
goToPage_1919();
function goToPage_1919() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../3/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(3))},200);
	}
}

//	action: hide
//	target: obj1915 
hide_1935();
function hide_1935() {
	window.obj1915_onTap_runningActionsCount = obj1915_onTap_runningActionsCount + 1;
	$("#obj1915").fadeOut(0, function() {
			setTimeout(function() {
				window.obj1915_onTap_runningActionsCount = window.obj1915_onTap_runningActionsCount - 1;
if (window.obj1915_onTap_runningActionsCount == 0) {
	obj1915_onTap_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj1915_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1915_onTap_activeActionGroupIndex = -1;
		$("#obj1915").trigger("obj1915_onTap_ended");
		
		return;
	}
	window.obj1915_onTap_activeActionGroupIndex = 1;
	





















};
obj1915_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1915_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1915").trigger("obj1915_onTouchDown_ended");
		
		return;
	}
	window.obj1915_onTouchDown_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page3
goToPage_2000();
function goToPage_2000() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../3/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(3))},200);
	}
}

//	action: hide
//	target: obj1915 
hide_1999();
function hide_1999() {
	window.obj1915_onTouchDown_runningActionsCount = obj1915_onTouchDown_runningActionsCount + 1;
	$("#obj1915").fadeOut(0, function() {
			setTimeout(function() {
				window.obj1915_onTouchDown_runningActionsCount = window.obj1915_onTouchDown_runningActionsCount - 1;
if (window.obj1915_onTouchDown_runningActionsCount == 0) {
	obj1915_onTouchDown_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj1915_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1915_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1915").trigger("obj1915_onTouchDown_ended");
		
		return;
	}
	window.obj1915_onTouchDown_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		






































/*
 *
 *   obj1786: Event Touch Down
 *
 */
 
$("#obj1786").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1786_onTap_activeActionGroupIndex != -1) return;
var obj1786_onTap_runningActionsCount = 0;
var obj1786_onTap_loopCount = 0;
obj1786_onTap_actionGroup0();
});







/*
 *
 *   obj1769: Event Touch Down
 *
 */
 
$("#obj1769").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1769_onTap_activeActionGroupIndex != -1) return;
var obj1769_onTap_runningActionsCount = 0;
var obj1769_onTap_loopCount = 0;
obj1769_onTap_actionGroup0();
});







/*
 *
 *   obj1753: Event Touch Down
 *
 */
 
$("#obj1753").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1753_onTap_activeActionGroupIndex != -1) return;
var obj1753_onTap_runningActionsCount = 0;
var obj1753_onTap_loopCount = 0;
obj1753_onTap_actionGroup0();
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
 *   obj1746: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1746_onLoad_activeActionGroupIndex != -1) return;
var obj1746_onLoad_runningActionsCount = 0;
var obj1746_onLoad_loopCount = 0;
obj1746_onLoad_actionGroup0();
});





/*
 *
 *   obj1915: Event Touch Down
 *
 */
 
$("#obj1915").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1915_onTap_activeActionGroupIndex != -1) return;
var obj1915_onTap_runningActionsCount = 0;
var obj1915_onTap_loopCount = 0;
obj1915_onTap_actionGroup0();
});

/*
 *
 *   obj1915: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1915");
	var winTarget = document.getElementById("obj1915");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1915").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1915_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1915_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1915_onTouchDown_activeActionGroupIndex != -1) return;
var obj1915_onTouchDown_runningActionsCount = 0;
var obj1915_onTouchDown_loopCount = 0;
obj1915_onTouchDown_actionGroup0();
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
	
$("#obj1735").trigger('SCEventShow');
$("#obj1807").trigger('SCEventShow');
$("#obj1805").trigger('SCEventShow');
$("#obj1803").trigger('SCEventShow');
$("#obj1786").trigger('SCEventShow');
$("#obj1769").trigger('SCEventShow');
$("#obj1753").trigger('SCEventShow');
$("#obj1886").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
$("#obj1786")
});