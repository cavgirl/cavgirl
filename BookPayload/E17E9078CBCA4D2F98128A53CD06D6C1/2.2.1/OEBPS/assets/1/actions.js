pubcoder.projectID = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.id = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.title = "HISTORY GALLERY DIGITAL TRAIL";
pubcoder.page.id = 11167;
pubcoder.page.title = "1";
pubcoder.page.number = 1;
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
var obj11189_onTap_activeActionGroupIndex = -1;
var obj11189_onTap_runningActionsCount = 0;
var obj11189_onTap_loopCount = 0;
var obj11204_onShow_activeActionGroupIndex = -1;
var obj11204_onShow_runningActionsCount = 0;
var obj11204_onShow_loopCount = 0;
var obj11216_onShow_activeActionGroupIndex = -1;
var obj11216_onShow_runningActionsCount = 0;
var obj11216_onShow_loopCount = 0;
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
		
obj11189_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11189_onTap_activeActionGroupIndex = -1;
		$("#obj11189").trigger("obj11189_onTap_ended");
		
		return;
	}
	window.obj11189_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj11177 
hide_11191();
function hide_11191() {
	window.obj11189_onTap_runningActionsCount = obj11189_onTap_runningActionsCount + 1;
	$("#obj11177").fadeOut(500, function() {
			setTimeout(function() {
				window.obj11189_onTap_runningActionsCount = window.obj11189_onTap_runningActionsCount - 1;
if (window.obj11189_onTap_runningActionsCount == 0) {
	obj11189_onTap_actionGroup1();
}
			}, 1);
		}
	);
}
//	action: show 
//	target: obj11174 
show_11192();
function show_11192() {
	window.obj11189_onTap_runningActionsCount = obj11189_onTap_runningActionsCount + 1;
	$("#obj11174").fadeIn(500, function() {
			setTimeout(function() {
				window.obj11189_onTap_runningActionsCount = window.obj11189_onTap_runningActionsCount - 1;
if (window.obj11189_onTap_runningActionsCount == 0) {
	obj11189_onTap_actionGroup1();
}
				$("#obj11174").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj11189_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11189_onTap_activeActionGroupIndex = -1;
		$("#obj11189").trigger("obj11189_onTap_ended");
		
		return;
	}
	window.obj11189_onTap_activeActionGroupIndex = 1;
	








//	action: wait
wait_11193();
function wait_11193() {
	window.obj11189_onTap_runningActionsCount = obj11189_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj11189_onTap_runningActionsCount = window.obj11189_onTap_runningActionsCount - 1;
if (window.obj11189_onTap_runningActionsCount == 0) {
	obj11189_onTap_actionGroup2();
}
	}, 500);
}












};
obj11189_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11189_onTap_activeActionGroupIndex = -1;
		$("#obj11189").trigger("obj11189_onTap_ended");
		
		return;
	}
	window.obj11189_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	target: obj11185 
show_11194();
function show_11194() {
	window.obj11189_onTap_runningActionsCount = obj11189_onTap_runningActionsCount + 1;
	$("#obj11185").fadeIn(300, function() {
			setTimeout(function() {
				window.obj11189_onTap_runningActionsCount = window.obj11189_onTap_runningActionsCount - 1;
if (window.obj11189_onTap_runningActionsCount == 0) {
	obj11189_onTap_actionGroup3();
}
				$("#obj11185").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj11180 
show_11195();
function show_11195() {
	window.obj11189_onTap_runningActionsCount = obj11189_onTap_runningActionsCount + 1;
	$("#obj11180").fadeIn(300, function() {
			setTimeout(function() {
				window.obj11189_onTap_runningActionsCount = window.obj11189_onTap_runningActionsCount - 1;
if (window.obj11189_onTap_runningActionsCount == 0) {
	obj11189_onTap_actionGroup3();
}
				$("#obj11180").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj11189_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11189_onTap_activeActionGroupIndex = -1;
		$("#obj11189").trigger("obj11189_onTap_ended");
		
		return;
	}
	window.obj11189_onTap_activeActionGroupIndex = 3;
	








//	action: wait
wait_11196();
function wait_11196() {
	window.obj11189_onTap_runningActionsCount = obj11189_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj11189_onTap_runningActionsCount = window.obj11189_onTap_runningActionsCount - 1;
if (window.obj11189_onTap_runningActionsCount == 0) {
	obj11189_onTap_actionGroup4();
}
	}, 1000);
}












};
obj11189_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11189_onTap_activeActionGroupIndex = -1;
		$("#obj11189").trigger("obj11189_onTap_ended");
		
		return;
	}
	window.obj11189_onTap_activeActionGroupIndex = 4;
	

//	action: hide
//	target: obj11185 
hide_14337();
function hide_14337() {
	window.obj11189_onTap_runningActionsCount = obj11189_onTap_runningActionsCount + 1;
	$("#obj11185").fadeOut(0, function() {
			setTimeout(function() {
				window.obj11189_onTap_runningActionsCount = window.obj11189_onTap_runningActionsCount - 1;
if (window.obj11189_onTap_runningActionsCount == 0) {
	obj11189_onTap_actionGroup5();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj11180 
hide_14338();
function hide_14338() {
	window.obj11189_onTap_runningActionsCount = obj11189_onTap_runningActionsCount + 1;
	$("#obj11180").fadeOut(0, function() {
			setTimeout(function() {
				window.obj11189_onTap_runningActionsCount = window.obj11189_onTap_runningActionsCount - 1;
if (window.obj11189_onTap_runningActionsCount == 0) {
	obj11189_onTap_actionGroup5();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj11174 
hide_11197();
function hide_11197() {
	window.obj11189_onTap_runningActionsCount = obj11189_onTap_runningActionsCount + 1;
	$("#obj11174").fadeOut(500, function() {
			setTimeout(function() {
				window.obj11189_onTap_runningActionsCount = window.obj11189_onTap_runningActionsCount - 1;
if (window.obj11189_onTap_runningActionsCount == 0) {
	obj11189_onTap_actionGroup5();
}
			}, 1);
		}
	);
}
//	action: show 
//	target: obj14366 
show_11200();
function show_11200() {
	window.obj11189_onTap_runningActionsCount = obj11189_onTap_runningActionsCount + 1;
	$("#obj14366").fadeIn(0, function() {
			setTimeout(function() {
				window.obj11189_onTap_runningActionsCount = window.obj11189_onTap_runningActionsCount - 1;
if (window.obj11189_onTap_runningActionsCount == 0) {
	obj11189_onTap_actionGroup5();
}
				$("#obj14366").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj14458 
show_14469();
function show_14469() {
	window.obj11189_onTap_runningActionsCount = obj11189_onTap_runningActionsCount + 1;
	$("#obj14458").fadeIn(0, function() {
			setTimeout(function() {
				window.obj11189_onTap_runningActionsCount = window.obj11189_onTap_runningActionsCount - 1;
if (window.obj11189_onTap_runningActionsCount == 0) {
	obj11189_onTap_actionGroup5();
}
				$("#obj14458").trigger('SCEventShow');
			}, 1);
		}
	);
}













//	action: Run JavaScript
runjs_12008();
function runjs_12008() {
	window.obj11189_onTap_runningActionsCount = obj11189_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj11189"));
	setTimeout(function() {
		window.obj11189_onTap_runningActionsCount = window.obj11189_onTap_runningActionsCount - 1;
if (window.obj11189_onTap_runningActionsCount == 0) {
	obj11189_onTap_actionGroup5();
}
	}, 1);
}
//	action: Run JavaScript
runjs_14468();
function runjs_14468() {
	window.obj11189_onTap_runningActionsCount = obj11189_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj14458"));
	setTimeout(function() {
		window.obj11189_onTap_runningActionsCount = window.obj11189_onTap_runningActionsCount - 1;
if (window.obj11189_onTap_runningActionsCount == 0) {
	obj11189_onTap_actionGroup5();
}
	}, 1);
}






};
obj11189_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11189_onTap_activeActionGroupIndex = -1;
		$("#obj11189").trigger("obj11189_onTap_ended");
		
		return;
	}
	window.obj11189_onTap_activeActionGroupIndex = 5;
	

//	action: hide
//	target: obj11189 
hide_12009();
function hide_12009() {
	window.obj11189_onTap_runningActionsCount = obj11189_onTap_runningActionsCount + 1;
	$("#obj11189").fadeOut(0, function() {
			setTimeout(function() {
				window.obj11189_onTap_runningActionsCount = window.obj11189_onTap_runningActionsCount - 1;
if (window.obj11189_onTap_runningActionsCount == 0) {
	obj11189_onTap_actionGroup6();
}
			}, 1);
		}
	);
}
//	action: show 
//	target: obj11204 
show_12010();
function show_12010() {
	window.obj11189_onTap_runningActionsCount = obj11189_onTap_runningActionsCount + 1;
	$("#obj11204").fadeIn(0, function() {
			setTimeout(function() {
				window.obj11189_onTap_runningActionsCount = window.obj11189_onTap_runningActionsCount - 1;
if (window.obj11189_onTap_runningActionsCount == 0) {
	obj11189_onTap_actionGroup6();
}
				$("#obj11204").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj11189_onTap_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj11189_onTap_activeActionGroupIndex = -1;
		$("#obj11189").trigger("obj11189_onTap_ended");
		
		return;
	}
	window.obj11189_onTap_activeActionGroupIndex = 6;
	





















};
obj11204_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11204_onShow_activeActionGroupIndex = -1;
		$("#obj11204").trigger("obj11204_onShow_ended");
		
		return;
	}
	window.obj11204_onShow_activeActionGroupIndex = 0;
	








//	action: wait
wait_11208();
function wait_11208() {
	window.obj11204_onShow_runningActionsCount = obj11204_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj11204_onShow_runningActionsCount = window.obj11204_onShow_runningActionsCount - 1;
if (window.obj11204_onShow_runningActionsCount == 0) {
	obj11204_onShow_actionGroup1();
}
	}, 2000);
}












};
obj11204_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11204_onShow_activeActionGroupIndex = -1;
		$("#obj11204").trigger("obj11204_onShow_ended");
		
		return;
	}
	window.obj11204_onShow_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj14366 
hide_11209();
function hide_11209() {
	window.obj11204_onShow_runningActionsCount = obj11204_onShow_runningActionsCount + 1;
	$("#obj14366").fadeOut(0, function() {
			setTimeout(function() {
				window.obj11204_onShow_runningActionsCount = window.obj11204_onShow_runningActionsCount - 1;
if (window.obj11204_onShow_runningActionsCount == 0) {
	obj11204_onShow_actionGroup2();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj14458 
hide_14471();
function hide_14471() {
	window.obj11204_onShow_runningActionsCount = obj11204_onShow_runningActionsCount + 1;
	$("#obj14458").fadeOut(0, function() {
			setTimeout(function() {
				window.obj11204_onShow_runningActionsCount = window.obj11204_onShow_runningActionsCount - 1;
if (window.obj11204_onShow_runningActionsCount == 0) {
	obj11204_onShow_actionGroup2();
}
			}, 1);
		}
	);
}
//	action: show 
//	target: obj14365 
show_12011();
function show_12011() {
	window.obj11204_onShow_runningActionsCount = obj11204_onShow_runningActionsCount + 1;
	$("#obj14365").fadeIn(500, function() {
			setTimeout(function() {
				window.obj11204_onShow_runningActionsCount = window.obj11204_onShow_runningActionsCount - 1;
if (window.obj11204_onShow_runningActionsCount == 0) {
	obj11204_onShow_actionGroup2();
}
				$("#obj14365").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj14460 
show_14473();
function show_14473() {
	window.obj11204_onShow_runningActionsCount = obj11204_onShow_runningActionsCount + 1;
	$("#obj14460").fadeIn(0, function() {
			setTimeout(function() {
				window.obj11204_onShow_runningActionsCount = window.obj11204_onShow_runningActionsCount - 1;
if (window.obj11204_onShow_runningActionsCount == 0) {
	obj11204_onShow_actionGroup2();
}
				$("#obj14460").trigger('SCEventShow');
			}, 1);
		}
	);
}













//	action: Run JavaScript
runjs_12012();
function runjs_12012() {
	window.obj11204_onShow_runningActionsCount = obj11204_onShow_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj14365"));
	setTimeout(function() {
		window.obj11204_onShow_runningActionsCount = window.obj11204_onShow_runningActionsCount - 1;
if (window.obj11204_onShow_runningActionsCount == 0) {
	obj11204_onShow_actionGroup2();
}
	}, 1);
}
//	action: Run JavaScript
runjs_14472();
function runjs_14472() {
	window.obj11204_onShow_runningActionsCount = obj11204_onShow_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj14460"));
	setTimeout(function() {
		window.obj11204_onShow_runningActionsCount = window.obj11204_onShow_runningActionsCount - 1;
if (window.obj11204_onShow_runningActionsCount == 0) {
	obj11204_onShow_actionGroup2();
}
	}, 1);
}






};
obj11204_onShow_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11204_onShow_activeActionGroupIndex = -1;
		$("#obj11204").trigger("obj11204_onShow_ended");
		
		return;
	}
	window.obj11204_onShow_activeActionGroupIndex = 2;
	

//	action: hide
//	target: obj11204 
hide_12013();
function hide_12013() {
	window.obj11204_onShow_runningActionsCount = obj11204_onShow_runningActionsCount + 1;
	$("#obj11204").fadeOut(0, function() {
			setTimeout(function() {
				window.obj11204_onShow_runningActionsCount = window.obj11204_onShow_runningActionsCount - 1;
if (window.obj11204_onShow_runningActionsCount == 0) {
	obj11204_onShow_actionGroup3();
}
			}, 1);
		}
	);
}
//	action: show 
//	target: obj11216 
show_11215();
function show_11215() {
	window.obj11204_onShow_runningActionsCount = obj11204_onShow_runningActionsCount + 1;
	$("#obj11216").fadeIn(0, function() {
			setTimeout(function() {
				window.obj11204_onShow_runningActionsCount = window.obj11204_onShow_runningActionsCount - 1;
if (window.obj11204_onShow_runningActionsCount == 0) {
	obj11204_onShow_actionGroup3();
}
				$("#obj11216").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj11204_onShow_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj11204_onShow_activeActionGroupIndex = -1;
		$("#obj11204").trigger("obj11204_onShow_ended");
		
		return;
	}
	window.obj11204_onShow_activeActionGroupIndex = 3;
	





















};
obj11216_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11216_onShow_activeActionGroupIndex = -1;
		$("#obj11216").trigger("obj11216_onShow_ended");
		
		return;
	}
	window.obj11216_onShow_activeActionGroupIndex = 0;
	








//	action: wait
wait_11219();
function wait_11219() {
	window.obj11216_onShow_runningActionsCount = obj11216_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj11216_onShow_runningActionsCount = window.obj11216_onShow_runningActionsCount - 1;
if (window.obj11216_onShow_runningActionsCount == 0) {
	obj11216_onShow_actionGroup1();
}
	}, 2000);
}












};
obj11216_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11216_onShow_activeActionGroupIndex = -1;
		$("#obj11216").trigger("obj11216_onShow_ended");
		
		return;
	}
	window.obj11216_onShow_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj14365 
hide_11220();
function hide_11220() {
	window.obj11216_onShow_runningActionsCount = obj11216_onShow_runningActionsCount + 1;
	$("#obj14365").fadeOut(0, function() {
			setTimeout(function() {
				window.obj11216_onShow_runningActionsCount = window.obj11216_onShow_runningActionsCount - 1;
if (window.obj11216_onShow_runningActionsCount == 0) {
	obj11216_onShow_actionGroup2();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj14460 
hide_14474();
function hide_14474() {
	window.obj11216_onShow_runningActionsCount = obj11216_onShow_runningActionsCount + 1;
	$("#obj14460").fadeOut(0, function() {
			setTimeout(function() {
				window.obj11216_onShow_runningActionsCount = window.obj11216_onShow_runningActionsCount - 1;
if (window.obj11216_onShow_runningActionsCount == 0) {
	obj11216_onShow_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj11216_onShow_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11216_onShow_activeActionGroupIndex = -1;
		$("#obj11216").trigger("obj11216_onShow_ended");
		
		return;
	}
	window.obj11216_onShow_activeActionGroupIndex = 2;
	

//	action: show 
//	target: obj14364 
show_11225();
function show_11225() {
	window.obj11216_onShow_runningActionsCount = obj11216_onShow_runningActionsCount + 1;
	$("#obj14364").fadeIn(300, function() {
			setTimeout(function() {
				window.obj11216_onShow_runningActionsCount = window.obj11216_onShow_runningActionsCount - 1;
if (window.obj11216_onShow_runningActionsCount == 0) {
	obj11216_onShow_actionGroup3();
}
				$("#obj14364").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj11216_onShow_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11216_onShow_activeActionGroupIndex = -1;
		$("#obj11216").trigger("obj11216_onShow_ended");
		
		return;
	}
	window.obj11216_onShow_activeActionGroupIndex = 3;
	








//	action: wait
wait_11227();
function wait_11227() {
	window.obj11216_onShow_runningActionsCount = obj11216_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj11216_onShow_runningActionsCount = window.obj11216_onShow_runningActionsCount - 1;
if (window.obj11216_onShow_runningActionsCount == 0) {
	obj11216_onShow_actionGroup4();
}
	}, 2000);
}












};
obj11216_onShow_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11216_onShow_activeActionGroupIndex = -1;
		$("#obj11216").trigger("obj11216_onShow_ended");
		
		return;
	}
	window.obj11216_onShow_activeActionGroupIndex = 4;
	

//	action: hide
//	target: obj14364 
hide_11228();
function hide_11228() {
	window.obj11216_onShow_runningActionsCount = obj11216_onShow_runningActionsCount + 1;
	$("#obj14364").fadeOut(0, function() {
			setTimeout(function() {
				window.obj11216_onShow_runningActionsCount = window.obj11216_onShow_runningActionsCount - 1;
if (window.obj11216_onShow_runningActionsCount == 0) {
	obj11216_onShow_actionGroup5();
}
			}, 1);
		}
	);
}




















};
obj11216_onShow_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11216_onShow_activeActionGroupIndex = -1;
		$("#obj11216").trigger("obj11216_onShow_ended");
		
		return;
	}
	window.obj11216_onShow_activeActionGroupIndex = 5;
	

//	action: hide
//	target: obj14335 
hide_11230();
function hide_11230() {
	window.obj11216_onShow_runningActionsCount = obj11216_onShow_runningActionsCount + 1;
	$("#obj14335").fadeOut(1000, function() {
			setTimeout(function() {
				window.obj11216_onShow_runningActionsCount = window.obj11216_onShow_runningActionsCount - 1;
if (window.obj11216_onShow_runningActionsCount == 0) {
	obj11216_onShow_actionGroup6();
}
			}, 1);
		}
	);
}
//	action: show 
//	target: obj11170 
show_11231();
function show_11231() {
	window.obj11216_onShow_runningActionsCount = obj11216_onShow_runningActionsCount + 1;
	$("#obj11170").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj11216_onShow_runningActionsCount = window.obj11216_onShow_runningActionsCount - 1;
if (window.obj11216_onShow_runningActionsCount == 0) {
	obj11216_onShow_actionGroup6();
}
				$("#obj11170").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj11216_onShow_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11216_onShow_activeActionGroupIndex = -1;
		$("#obj11216").trigger("obj11216_onShow_ended");
		
		return;
	}
	window.obj11216_onShow_activeActionGroupIndex = 6;
	

//	action: show 
//	target: obj11185 
show_14341();
function show_14341() {
	window.obj11216_onShow_runningActionsCount = obj11216_onShow_runningActionsCount + 1;
	$("#obj11185").fadeIn(0, function() {
			setTimeout(function() {
				window.obj11216_onShow_runningActionsCount = window.obj11216_onShow_runningActionsCount - 1;
if (window.obj11216_onShow_runningActionsCount == 0) {
	obj11216_onShow_actionGroup7();
}
				$("#obj11185").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj11180 
show_14342();
function show_14342() {
	window.obj11216_onShow_runningActionsCount = obj11216_onShow_runningActionsCount + 1;
	$("#obj11180").fadeIn(0, function() {
			setTimeout(function() {
				window.obj11216_onShow_runningActionsCount = window.obj11216_onShow_runningActionsCount - 1;
if (window.obj11216_onShow_runningActionsCount == 0) {
	obj11216_onShow_actionGroup7();
}
				$("#obj11180").trigger('SCEventShow');
			}, 1);
		}
	);
}













//	action: Run JavaScript
runjs_14339();
function runjs_14339() {
	window.obj11216_onShow_runningActionsCount = obj11216_onShow_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj11185"));
	setTimeout(function() {
		window.obj11216_onShow_runningActionsCount = window.obj11216_onShow_runningActionsCount - 1;
if (window.obj11216_onShow_runningActionsCount == 0) {
	obj11216_onShow_actionGroup7();
}
	}, 1);
}
//	action: Run JavaScript
runjs_14340();
function runjs_14340() {
	window.obj11216_onShow_runningActionsCount = obj11216_onShow_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj11180"));
	setTimeout(function() {
		window.obj11216_onShow_runningActionsCount = window.obj11216_onShow_runningActionsCount - 1;
if (window.obj11216_onShow_runningActionsCount == 0) {
	obj11216_onShow_actionGroup7();
}
	}, 1);
}






};
obj11216_onShow_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11216_onShow_activeActionGroupIndex = -1;
		$("#obj11216").trigger("obj11216_onShow_ended");
		
		return;
	}
	window.obj11216_onShow_activeActionGroupIndex = 7;
	








//	action: wait
wait_11232();
function wait_11232() {
	window.obj11216_onShow_runningActionsCount = obj11216_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj11216_onShow_runningActionsCount = window.obj11216_onShow_runningActionsCount - 1;
if (window.obj11216_onShow_runningActionsCount == 0) {
	obj11216_onShow_actionGroup8();
}
	}, 2000);
}












};
obj11216_onShow_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11216_onShow_activeActionGroupIndex = -1;
		$("#obj11216").trigger("obj11216_onShow_ended");
		
		return;
	}
	window.obj11216_onShow_activeActionGroupIndex = 8;
	


//	action: move
//	target: obj11185 
move_11234();
function move_11234() {
	window.obj11216_onShow_runningActionsCount = obj11216_onShow_runningActionsCount + 1;

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
	var targetObject = $("#obj11185");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 275;
	var moveY = 687;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj11216_onShow_runningActionsCount = window.obj11216_onShow_runningActionsCount - 1;
if (window.obj11216_onShow_runningActionsCount == 0) {
	obj11216_onShow_actionGroup9();
}
		}, 1);
	});
}







//	action: scale
//	target: obj11185 
scale_11233();
function scale_11233() {
	window.obj11216_onShow_runningActionsCount = obj11216_onShow_runningActionsCount + 1;
	
	var targetObjectId = "#obj11185";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj11185';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.25';
	var scaleYValue = '0.25';
	var effectDuration = '0.3';
	var effectEasing = 'ease';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_11233_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_11233_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_11233_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_11233_completed() {
	setTimeout(function() {
		window.obj11216_onShow_runningActionsCount = window.obj11216_onShow_runningActionsCount - 1;
if (window.obj11216_onShow_runningActionsCount == 0) {
	obj11216_onShow_actionGroup9();
}
	}, 1);
}












};
obj11216_onShow_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11216_onShow_activeActionGroupIndex = -1;
		$("#obj11216").trigger("obj11216_onShow_ended");
		
		return;
	}
	window.obj11216_onShow_activeActionGroupIndex = 9;
	


//	action: move
//	target: obj11180 
move_11236();
function move_11236() {
	window.obj11216_onShow_runningActionsCount = obj11216_onShow_runningActionsCount + 1;

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
	var targetObject = $("#obj11180");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 179;
	var moveY = 671;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj11216_onShow_runningActionsCount = window.obj11216_onShow_runningActionsCount - 1;
if (window.obj11216_onShow_runningActionsCount == 0) {
	obj11216_onShow_actionGroup10();
}
		}, 1);
	});
}







//	action: scale
//	target: obj11180 
scale_11235();
function scale_11235() {
	window.obj11216_onShow_runningActionsCount = obj11216_onShow_runningActionsCount + 1;
	
	var targetObjectId = "#obj11180";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj11180';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.2';
	var scaleYValue = '0.2';
	var effectDuration = '0.3';
	var effectEasing = 'ease';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_11235_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_11235_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_11235_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_11235_completed() {
	setTimeout(function() {
		window.obj11216_onShow_runningActionsCount = window.obj11216_onShow_runningActionsCount - 1;
if (window.obj11216_onShow_runningActionsCount == 0) {
	obj11216_onShow_actionGroup10();
}
	}, 1);
}












};
obj11216_onShow_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11216_onShow_activeActionGroupIndex = -1;
		$("#obj11216").trigger("obj11216_onShow_ended");
		
		return;
	}
	window.obj11216_onShow_activeActionGroupIndex = 10;
	

//	action: hide
//	target: obj11170 
hide_11237();
function hide_11237() {
	window.obj11216_onShow_runningActionsCount = obj11216_onShow_runningActionsCount + 1;
	$("#obj11170").fadeOut(1000, function() {
			setTimeout(function() {
				window.obj11216_onShow_runningActionsCount = window.obj11216_onShow_runningActionsCount - 1;
if (window.obj11216_onShow_runningActionsCount == 0) {
	obj11216_onShow_actionGroup11();
}
			}, 1);
		}
	);
}
//	action: show 
//	target: obj12024 
show_11238();
function show_11238() {
	window.obj11216_onShow_runningActionsCount = obj11216_onShow_runningActionsCount + 1;
	$("#obj12024").fadeIn(2000, function() {
			setTimeout(function() {
				window.obj11216_onShow_runningActionsCount = window.obj11216_onShow_runningActionsCount - 1;
if (window.obj11216_onShow_runningActionsCount == 0) {
	obj11216_onShow_actionGroup11();
}
				$("#obj12024").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj13968 
show_13971();
function show_13971() {
	window.obj11216_onShow_runningActionsCount = obj11216_onShow_runningActionsCount + 1;
	$("#obj13968").fadeIn(0, function() {
			setTimeout(function() {
				window.obj11216_onShow_runningActionsCount = window.obj11216_onShow_runningActionsCount - 1;
if (window.obj11216_onShow_runningActionsCount == 0) {
	obj11216_onShow_actionGroup11();
}
				$("#obj13968").trigger('SCEventShow');
			}, 1);
		}
	);
}













//	action: Run JavaScript
runjs_12026();
function runjs_12026() {
	window.obj11216_onShow_runningActionsCount = obj11216_onShow_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj12024"));
	setTimeout(function() {
		window.obj11216_onShow_runningActionsCount = window.obj11216_onShow_runningActionsCount - 1;
if (window.obj11216_onShow_runningActionsCount == 0) {
	obj11216_onShow_actionGroup11();
}
	}, 1);
}
//	action: Run JavaScript
runjs_13972();
function runjs_13972() {
	window.obj11216_onShow_runningActionsCount = obj11216_onShow_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj13968"));
	setTimeout(function() {
		window.obj11216_onShow_runningActionsCount = window.obj11216_onShow_runningActionsCount - 1;
if (window.obj11216_onShow_runningActionsCount == 0) {
	obj11216_onShow_actionGroup11();
}
	}, 1);
}






};
obj11216_onShow_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11216_onShow_activeActionGroupIndex = -1;
		$("#obj11216").trigger("obj11216_onShow_ended");
		
		return;
	}
	window.obj11216_onShow_activeActionGroupIndex = 11;
	








//	action: wait
wait_11241();
function wait_11241() {
	window.obj11216_onShow_runningActionsCount = obj11216_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj11216_onShow_runningActionsCount = window.obj11216_onShow_runningActionsCount - 1;
if (window.obj11216_onShow_runningActionsCount == 0) {
	obj11216_onShow_actionGroup12();
}
	}, 5000);
}












};
obj11216_onShow_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11216_onShow_activeActionGroupIndex = -1;
		$("#obj11216").trigger("obj11216_onShow_ended");
		
		return;
	}
	window.obj11216_onShow_activeActionGroupIndex = 12;
	
//	action: goToPage
//	target: page2
goToPage_11242();
function goToPage_11242() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../2/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(2))},200);
	}
}





















};
obj11216_onShow_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj11216_onShow_activeActionGroupIndex = -1;
		$("#obj11216").trigger("obj11216_onShow_ended");
		
		return;
	}
	window.obj11216_onShow_activeActionGroupIndex = 13;
	





















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
 *   obj11189: Event Touch Down
 *
 */
 
$("#obj11189").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj11189_onTap_activeActionGroupIndex != -1) return;
var obj11189_onTap_runningActionsCount = 0;
var obj11189_onTap_loopCount = 0;
obj11189_onTap_actionGroup0();
});








/*
 *
 *   obj11204: Event Show
 *
 */
 
$("#obj11204").bind('SCEventShow', function(event) {
	if (window.obj11204_onShow_activeActionGroupIndex != -1) return;
var obj11204_onShow_runningActionsCount = 0;
var obj11204_onShow_loopCount = 0;
obj11204_onShow_actionGroup0();
});







/*
 *
 *   obj11216: Event Show
 *
 */
 
$("#obj11216").bind('SCEventShow', function(event) {
	if (window.obj11216_onShow_activeActionGroupIndex != -1) return;
var obj11216_onShow_runningActionsCount = 0;
var obj11216_onShow_loopCount = 0;
obj11216_onShow_actionGroup0();
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
	
$("#obj12024").trigger('SCEventShow');
$("#obj14335").trigger('SCEventShow');
$("#obj11177").trigger('SCEventShow');
$("#obj11189").trigger('SCEventShow');
$("#obj16105").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});