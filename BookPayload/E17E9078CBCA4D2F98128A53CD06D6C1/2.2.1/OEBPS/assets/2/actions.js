pubcoder.projectID = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.id = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.title = "HISTORY GALLERY DIGITAL TRAIL";
pubcoder.page.id = 14781;
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
var obj15890_onTap_activeActionGroupIndex = -1;
var obj15890_onTap_runningActionsCount = 0;
var obj15890_onTap_loopCount = 0;
var obj14836_onLoad_activeActionGroupIndex = -1;
var obj14836_onLoad_runningActionsCount = 0;
var obj14836_onLoad_loopCount = 0;
var obj14907_onLoad_activeActionGroupIndex = -1;
var obj14907_onLoad_runningActionsCount = 0;
var obj14907_onLoad_loopCount = 0;
var obj15909_onTap_activeActionGroupIndex = -1;
var obj15909_onTap_runningActionsCount = 0;
var obj15909_onTap_loopCount = 0;
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
 
var obj14836_counterValue = 0;
var obj14836_counterTargetValue = 2;
var obj14836_counterCanExceedTargetValue = false;
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
		
obj15890_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15890_onTap_activeActionGroupIndex = -1;
		$("#obj15890").trigger("obj15890_onTap_ended");
		
		return;
	}
	window.obj15890_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj15890 
hide_15895();
function hide_15895() {
	window.obj15890_onTap_runningActionsCount = obj15890_onTap_runningActionsCount + 1;
	$("#obj15890").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15890_onTap_runningActionsCount = window.obj15890_onTap_runningActionsCount - 1;
if (window.obj15890_onTap_runningActionsCount == 0) {
	obj15890_onTap_actionGroup1();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj14833 
hide_15898();
function hide_15898() {
	window.obj15890_onTap_runningActionsCount = obj15890_onTap_runningActionsCount + 1;
	$("#obj14833").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15890_onTap_runningActionsCount = window.obj15890_onTap_runningActionsCount - 1;
if (window.obj15890_onTap_runningActionsCount == 0) {
	obj15890_onTap_actionGroup1();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj14806 
hide_15899();
function hide_15899() {
	window.obj15890_onTap_runningActionsCount = obj15890_onTap_runningActionsCount + 1;
	$("#obj14806").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15890_onTap_runningActionsCount = window.obj15890_onTap_runningActionsCount - 1;
if (window.obj15890_onTap_runningActionsCount == 0) {
	obj15890_onTap_actionGroup1();
}
			}, 1);
		}
	);
}
//	action: show 
//	target: obj14784 
show_15896();
function show_15896() {
	window.obj15890_onTap_runningActionsCount = obj15890_onTap_runningActionsCount + 1;
	$("#obj14784").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15890_onTap_runningActionsCount = window.obj15890_onTap_runningActionsCount - 1;
if (window.obj15890_onTap_runningActionsCount == 0) {
	obj15890_onTap_actionGroup1();
}
				$("#obj14784").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj15892 
show_15897();
function show_15897() {
	window.obj15890_onTap_runningActionsCount = obj15890_onTap_runningActionsCount + 1;
	$("#obj15892").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15890_onTap_runningActionsCount = window.obj15890_onTap_runningActionsCount - 1;
if (window.obj15890_onTap_runningActionsCount == 0) {
	obj15890_onTap_actionGroup1();
}
				$("#obj15892").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj14818 
show_15904();
function show_15904() {
	window.obj15890_onTap_runningActionsCount = obj15890_onTap_runningActionsCount + 1;
	$("#obj14818").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15890_onTap_runningActionsCount = window.obj15890_onTap_runningActionsCount - 1;
if (window.obj15890_onTap_runningActionsCount == 0) {
	obj15890_onTap_actionGroup1();
}
				$("#obj14818").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj15901 
show_15905();
function show_15905() {
	window.obj15890_onTap_runningActionsCount = obj15890_onTap_runningActionsCount + 1;
	$("#obj15901").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15890_onTap_runningActionsCount = window.obj15890_onTap_runningActionsCount - 1;
if (window.obj15890_onTap_runningActionsCount == 0) {
	obj15890_onTap_actionGroup1();
}
				$("#obj15901").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj15890_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15890_onTap_activeActionGroupIndex = -1;
		$("#obj15890").trigger("obj15890_onTap_ended");
		
		return;
	}
	window.obj15890_onTap_activeActionGroupIndex = 1;
	








//	action: wait
wait_15906();
function wait_15906() {
	window.obj15890_onTap_runningActionsCount = obj15890_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj15890_onTap_runningActionsCount = window.obj15890_onTap_runningActionsCount - 1;
if (window.obj15890_onTap_runningActionsCount == 0) {
	obj15890_onTap_actionGroup2();
}
	}, 2000);
}












};
obj15890_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15890_onTap_activeActionGroupIndex = -1;
		$("#obj15890").trigger("obj15890_onTap_ended");
		
		return;
	}
	window.obj15890_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	target: obj14818 
hide_15907();
function hide_15907() {
	window.obj15890_onTap_runningActionsCount = obj15890_onTap_runningActionsCount + 1;
	$("#obj14818").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15890_onTap_runningActionsCount = window.obj15890_onTap_runningActionsCount - 1;
if (window.obj15890_onTap_runningActionsCount == 0) {
	obj15890_onTap_actionGroup3();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj15901 
hide_15908();
function hide_15908() {
	window.obj15890_onTap_runningActionsCount = obj15890_onTap_runningActionsCount + 1;
	$("#obj15901").fadeOut(0, function() {
			setTimeout(function() {
				window.obj15890_onTap_runningActionsCount = window.obj15890_onTap_runningActionsCount - 1;
if (window.obj15890_onTap_runningActionsCount == 0) {
	obj15890_onTap_actionGroup3();
}
			}, 1);
		}
	);
}




















};
obj15890_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15890_onTap_activeActionGroupIndex = -1;
		$("#obj15890").trigger("obj15890_onTap_ended");
		
		return;
	}
	window.obj15890_onTap_activeActionGroupIndex = 3;
	

//	action: show 
//	target: obj15909 
show_15912();
function show_15912() {
	window.obj15890_onTap_runningActionsCount = obj15890_onTap_runningActionsCount + 1;
	$("#obj15909").fadeIn(0, function() {
			setTimeout(function() {
				window.obj15890_onTap_runningActionsCount = window.obj15890_onTap_runningActionsCount - 1;
if (window.obj15890_onTap_runningActionsCount == 0) {
	obj15890_onTap_actionGroup4();
}
				$("#obj15909").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj15890_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15890_onTap_activeActionGroupIndex = -1;
		$("#obj15890").trigger("obj15890_onTap_ended");
		
		return;
	}
	window.obj15890_onTap_activeActionGroupIndex = 4;
	





















};
obj14836_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14836_onLoad_activeActionGroupIndex = -1;
		$("#obj14836").trigger("obj14836_onLoad_ended");
		
		return;
	}
	window.obj14836_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_14839();
function wait_14839() {
	window.obj14836_onLoad_runningActionsCount = obj14836_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj14836_onLoad_runningActionsCount = window.obj14836_onLoad_runningActionsCount - 1;
if (window.obj14836_onLoad_runningActionsCount == 0) {
	obj14836_onLoad_actionGroup1();
}
	}, 5000);
}












};
obj14836_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14836_onLoad_activeActionGroupIndex = -1;
		$("#obj14836").trigger("obj14836_onLoad_ended");
		
		return;
	}
	window.obj14836_onLoad_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj14806 
show_14840();
function show_14840() {
	window.obj14836_onLoad_runningActionsCount = obj14836_onLoad_runningActionsCount + 1;
	$("#obj14806").fadeIn(0, function() {
			setTimeout(function() {
				window.obj14836_onLoad_runningActionsCount = window.obj14836_onLoad_runningActionsCount - 1;
if (window.obj14836_onLoad_runningActionsCount == 0) {
	obj14836_onLoad_actionGroup2();
}
				$("#obj14806").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj14797 
show_14841();
function show_14841() {
	window.obj14836_onLoad_runningActionsCount = obj14836_onLoad_runningActionsCount + 1;
	$("#obj14797").fadeIn(0, function() {
			setTimeout(function() {
				window.obj14836_onLoad_runningActionsCount = window.obj14836_onLoad_runningActionsCount - 1;
if (window.obj14836_onLoad_runningActionsCount == 0) {
	obj14836_onLoad_actionGroup2();
}
				$("#obj14797").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj14836_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14836_onLoad_activeActionGroupIndex = -1;
		$("#obj14836").trigger("obj14836_onLoad_ended");
		
		return;
	}
	window.obj14836_onLoad_activeActionGroupIndex = 2;
	

//	action: hide
//	target: obj14782 
hide_14852();
function hide_14852() {
	window.obj14836_onLoad_runningActionsCount = obj14836_onLoad_runningActionsCount + 1;
	$("#obj14782").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj14836_onLoad_runningActionsCount = window.obj14836_onLoad_runningActionsCount - 1;
if (window.obj14836_onLoad_runningActionsCount == 0) {
	obj14836_onLoad_actionGroup3();
}
			}, 1);
		}
	);
}
//	action: show 
//	target: obj15890 
show_14853();
function show_14853() {
	window.obj14836_onLoad_runningActionsCount = obj14836_onLoad_runningActionsCount + 1;
	$("#obj15890").fadeIn(2000, function() {
			setTimeout(function() {
				window.obj14836_onLoad_runningActionsCount = window.obj14836_onLoad_runningActionsCount - 1;
if (window.obj14836_onLoad_runningActionsCount == 0) {
	obj14836_onLoad_actionGroup3();
}
				$("#obj15890").trigger('SCEventShow');
			}, 1);
		}
	);
}







//	action: wait
wait_14842();
function wait_14842() {
	window.obj14836_onLoad_runningActionsCount = obj14836_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj14836_onLoad_runningActionsCount = window.obj14836_onLoad_runningActionsCount - 1;
if (window.obj14836_onLoad_runningActionsCount == 0) {
	obj14836_onLoad_actionGroup3();
}
	}, 3000);
}












};
obj14836_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14836_onLoad_activeActionGroupIndex = -1;
		$("#obj14836").trigger("obj14836_onLoad_ended");
		
		return;
	}
	window.obj14836_onLoad_activeActionGroupIndex = 3;
	

//	action: hide
//	target: obj14806 
hide_14843();
function hide_14843() {
	window.obj14836_onLoad_runningActionsCount = obj14836_onLoad_runningActionsCount + 1;
	$("#obj14806").fadeOut(0, function() {
			setTimeout(function() {
				window.obj14836_onLoad_runningActionsCount = window.obj14836_onLoad_runningActionsCount - 1;
if (window.obj14836_onLoad_runningActionsCount == 0) {
	obj14836_onLoad_actionGroup4();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj14797 
hide_14844();
function hide_14844() {
	window.obj14836_onLoad_runningActionsCount = obj14836_onLoad_runningActionsCount + 1;
	$("#obj14797").fadeOut(0, function() {
			setTimeout(function() {
				window.obj14836_onLoad_runningActionsCount = window.obj14836_onLoad_runningActionsCount - 1;
if (window.obj14836_onLoad_runningActionsCount == 0) {
	obj14836_onLoad_actionGroup4();
}
			}, 1);
		}
	);
}




















};
obj14836_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14836_onLoad_activeActionGroupIndex = -1;
		$("#obj14836").trigger("obj14836_onLoad_ended");
		
		return;
	}
	window.obj14836_onLoad_activeActionGroupIndex = 4;
	

//	action: show 
//	target: obj14818 
show_14845();
function show_14845() {
	window.obj14836_onLoad_runningActionsCount = obj14836_onLoad_runningActionsCount + 1;
	$("#obj14818").fadeIn(0, function() {
			setTimeout(function() {
				window.obj14836_onLoad_runningActionsCount = window.obj14836_onLoad_runningActionsCount - 1;
if (window.obj14836_onLoad_runningActionsCount == 0) {
	obj14836_onLoad_actionGroup5();
}
				$("#obj14818").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj14830 
show_14846();
function show_14846() {
	window.obj14836_onLoad_runningActionsCount = obj14836_onLoad_runningActionsCount + 1;
	$("#obj14830").fadeIn(0, function() {
			setTimeout(function() {
				window.obj14836_onLoad_runningActionsCount = window.obj14836_onLoad_runningActionsCount - 1;
if (window.obj14836_onLoad_runningActionsCount == 0) {
	obj14836_onLoad_actionGroup5();
}
				$("#obj14830").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj14836_onLoad_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14836_onLoad_activeActionGroupIndex = -1;
		$("#obj14836").trigger("obj14836_onLoad_ended");
		
		return;
	}
	window.obj14836_onLoad_activeActionGroupIndex = 5;
	








//	action: wait
wait_14847();
function wait_14847() {
	window.obj14836_onLoad_runningActionsCount = obj14836_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj14836_onLoad_runningActionsCount = window.obj14836_onLoad_runningActionsCount - 1;
if (window.obj14836_onLoad_runningActionsCount == 0) {
	obj14836_onLoad_actionGroup6();
}
	}, 3000);
}












};
obj14836_onLoad_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14836_onLoad_activeActionGroupIndex = -1;
		$("#obj14836").trigger("obj14836_onLoad_ended");
		
		return;
	}
	window.obj14836_onLoad_activeActionGroupIndex = 6;
	

//	action: hide
//	target: obj14818 
hide_14848();
function hide_14848() {
	window.obj14836_onLoad_runningActionsCount = obj14836_onLoad_runningActionsCount + 1;
	$("#obj14818").fadeOut(0, function() {
			setTimeout(function() {
				window.obj14836_onLoad_runningActionsCount = window.obj14836_onLoad_runningActionsCount - 1;
if (window.obj14836_onLoad_runningActionsCount == 0) {
	obj14836_onLoad_actionGroup7();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj14830 
hide_14849();
function hide_14849() {
	window.obj14836_onLoad_runningActionsCount = obj14836_onLoad_runningActionsCount + 1;
	$("#obj14830").fadeOut(0, function() {
			setTimeout(function() {
				window.obj14836_onLoad_runningActionsCount = window.obj14836_onLoad_runningActionsCount - 1;
if (window.obj14836_onLoad_runningActionsCount == 0) {
	obj14836_onLoad_actionGroup7();
}
			}, 1);
		}
	);
}




















};
obj14836_onLoad_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14836_onLoad_activeActionGroupIndex = -1;
		$("#obj14836").trigger("obj14836_onLoad_ended");
		
		return;
	}
	window.obj14836_onLoad_activeActionGroupIndex = 7;
	

//	action: show 
//	target: obj14806 
show_14850();
function show_14850() {
	window.obj14836_onLoad_runningActionsCount = obj14836_onLoad_runningActionsCount + 1;
	$("#obj14806").fadeIn(0, function() {
			setTimeout(function() {
				window.obj14836_onLoad_runningActionsCount = window.obj14836_onLoad_runningActionsCount - 1;
if (window.obj14836_onLoad_runningActionsCount == 0) {
	obj14836_onLoad_actionGroup8();
}
				$("#obj14806").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj14833 
show_14851();
function show_14851() {
	window.obj14836_onLoad_runningActionsCount = obj14836_onLoad_runningActionsCount + 1;
	$("#obj14833").fadeIn(0, function() {
			setTimeout(function() {
				window.obj14836_onLoad_runningActionsCount = window.obj14836_onLoad_runningActionsCount - 1;
if (window.obj14836_onLoad_runningActionsCount == 0) {
	obj14836_onLoad_actionGroup8();
}
				$("#obj14833").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj14836_onLoad_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14836_onLoad_activeActionGroupIndex = -1;
		$("#obj14836").trigger("obj14836_onLoad_ended");
		
		return;
	}
	window.obj14836_onLoad_activeActionGroupIndex = 8;
	





















};
obj14907_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14907_onLoad_activeActionGroupIndex = -1;
		$("#obj14907").trigger("obj14907_onLoad_ended");
		
		return;
	}
	window.obj14907_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_14910();
function wait_14910() {
	window.obj14907_onLoad_runningActionsCount = obj14907_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj14907_onLoad_runningActionsCount = window.obj14907_onLoad_runningActionsCount - 1;
if (window.obj14907_onLoad_runningActionsCount == 0) {
	obj14907_onLoad_actionGroup1();
}
	}, 3000);
}












};
obj14907_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14907_onLoad_activeActionGroupIndex = -1;
		$("#obj14907").trigger("obj14907_onLoad_ended");
		
		return;
	}
	window.obj14907_onLoad_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj14907 
hide_14911();
function hide_14911() {
	window.obj14907_onLoad_runningActionsCount = obj14907_onLoad_runningActionsCount + 1;
	$("#obj14907").fadeOut(1000, function() {
			setTimeout(function() {
				window.obj14907_onLoad_runningActionsCount = window.obj14907_onLoad_runningActionsCount - 1;
if (window.obj14907_onLoad_runningActionsCount == 0) {
	obj14907_onLoad_actionGroup2();
}
			}, 1);
		}
	);
}
//	action: show 
//	target: obj14913 
show_14912();
function show_14912() {
	window.obj14907_onLoad_runningActionsCount = obj14907_onLoad_runningActionsCount + 1;
	$("#obj14913").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj14907_onLoad_runningActionsCount = window.obj14907_onLoad_runningActionsCount - 1;
if (window.obj14907_onLoad_runningActionsCount == 0) {
	obj14907_onLoad_actionGroup2();
}
				$("#obj14913").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj14907_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14907_onLoad_activeActionGroupIndex = -1;
		$("#obj14907").trigger("obj14907_onLoad_ended");
		
		return;
	}
	window.obj14907_onLoad_activeActionGroupIndex = 2;
	

//	action: hide
//	target: obj14913 
hide_14915();
function hide_14915() {
	window.obj14907_onLoad_runningActionsCount = obj14907_onLoad_runningActionsCount + 1;
	$("#obj14913").fadeOut(1000, function() {
			setTimeout(function() {
				window.obj14907_onLoad_runningActionsCount = window.obj14907_onLoad_runningActionsCount - 1;
if (window.obj14907_onLoad_runningActionsCount == 0) {
	obj14907_onLoad_actionGroup3();
}
			}, 1);
		}
	);
}




















};
obj14907_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14907_onLoad_activeActionGroupIndex = -1;
		$("#obj14907").trigger("obj14907_onLoad_ended");
		
		return;
	}
	window.obj14907_onLoad_activeActionGroupIndex = 3;
	





















};
obj15909_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15909_onTap_activeActionGroupIndex = -1;
		$("#obj15909").trigger("obj15909_onTap_ended");
		
		return;
	}
	window.obj15909_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page3
goToPage_15911();
function goToPage_15911() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../3/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(3))},200);
	}
}





















};
obj15909_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15909_onTap_activeActionGroupIndex = -1;
		$("#obj15909").trigger("obj15909_onTap_ended");
		
		return;
	}
	window.obj15909_onTap_activeActionGroupIndex = 1;
	





















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
 *   obj15890: Event Touch Down
 *
 */
 
$("#obj15890").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15890_onTap_activeActionGroupIndex != -1) return;
var obj15890_onTap_runningActionsCount = 0;
var obj15890_onTap_loopCount = 0;
obj15890_onTap_actionGroup0();
});


























































/*
 *
 *   obj14836: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj14836_onLoad_activeActionGroupIndex != -1) return;
var obj14836_onLoad_runningActionsCount = 0;
var obj14836_onLoad_loopCount = 0;
obj14836_onLoad_actionGroup0();
});














/*
 *
 *   obj14907: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj14907_onLoad_activeActionGroupIndex != -1) return;
var obj14907_onLoad_runningActionsCount = 0;
var obj14907_onLoad_loopCount = 0;
obj14907_onLoad_actionGroup0();
});












/*
 *
 *   obj15909: Event Touch Down
 *
 */
 
$("#obj15909").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15909_onTap_activeActionGroupIndex != -1) return;
var obj15909_onTap_runningActionsCount = 0;
var obj15909_onTap_loopCount = 0;
obj15909_onTap_actionGroup0();
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
	
$("#obj14782").trigger('SCEventShow');
$("#obj14786").trigger('SCEventShow');
$("#obj14791").trigger('SCEventShow');
$("#obj14907").trigger('SCEventShow');
$("#obj16105").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});