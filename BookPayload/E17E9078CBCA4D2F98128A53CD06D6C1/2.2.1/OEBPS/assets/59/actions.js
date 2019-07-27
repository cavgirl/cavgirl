pubcoder.projectID = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.id = "4FCF0C2756B5447E8D705F44EFB11FC1";
pubcoder.project.title = "HISTORY GALLERY DIGITAL TRAIL";
pubcoder.page.id = 5637;
pubcoder.page.title = "59";
pubcoder.page.number = 59;
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
var obj6108_onDrag_activeActionGroupIndex = -1;
var obj6108_onDrag_runningActionsCount = 0;
var obj6108_onDrag_loopCount = 0;
var obj6108_onTouchDown_activeActionGroupIndex = -1;
var obj6108_onTouchDown_runningActionsCount = 0;
var obj6108_onTouchDown_loopCount = 0;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex = -1;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount = 0;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_10_loopCount = 0;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex = -1;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount = 0;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_9_loopCount = 0;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex = -1;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount = 0;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_8_loopCount = 0;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex = -1;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount = 0;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_7_loopCount = 0;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_6_loopCount = 0;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_5_loopCount = 0;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_4_loopCount = 0;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_3_loopCount = 0;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_2_loopCount = 0;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount = 0;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_loopCount = 0;
var obj6116_onDrag_activeActionGroupIndex = -1;
var obj6116_onDrag_runningActionsCount = 0;
var obj6116_onDrag_loopCount = 0;
var obj6116_onTouchDown_activeActionGroupIndex = -1;
var obj6116_onTouchDown_runningActionsCount = 0;
var obj6116_onTouchDown_loopCount = 0;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex = -1;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount = 0;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_10_loopCount = 0;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex = -1;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount = 0;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_9_loopCount = 0;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex = -1;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount = 0;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_8_loopCount = 0;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex = -1;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount = 0;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_7_loopCount = 0;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_6_loopCount = 0;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_5_loopCount = 0;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_4_loopCount = 0;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_3_loopCount = 0;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_2_loopCount = 0;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount = 0;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_loopCount = 0;
var obj6118_onDrag_activeActionGroupIndex = -1;
var obj6118_onDrag_runningActionsCount = 0;
var obj6118_onDrag_loopCount = 0;
var obj6118_onTouchDown_activeActionGroupIndex = -1;
var obj6118_onTouchDown_runningActionsCount = 0;
var obj6118_onTouchDown_loopCount = 0;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex = -1;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount = 0;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_10_loopCount = 0;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex = -1;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount = 0;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_9_loopCount = 0;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex = -1;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount = 0;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_8_loopCount = 0;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex = -1;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount = 0;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_7_loopCount = 0;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_6_loopCount = 0;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_5_loopCount = 0;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_4_loopCount = 0;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_3_loopCount = 0;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_2_loopCount = 0;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount = 0;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_loopCount = 0;
var obj6120_onDrag_activeActionGroupIndex = -1;
var obj6120_onDrag_runningActionsCount = 0;
var obj6120_onDrag_loopCount = 0;
var obj6120_onTouchDown_activeActionGroupIndex = -1;
var obj6120_onTouchDown_runningActionsCount = 0;
var obj6120_onTouchDown_loopCount = 0;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex = -1;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount = 0;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_10_loopCount = 0;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex = -1;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount = 0;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_9_loopCount = 0;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex = -1;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount = 0;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_8_loopCount = 0;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex = -1;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount = 0;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_7_loopCount = 0;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_6_loopCount = 0;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_5_loopCount = 0;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_4_loopCount = 0;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_3_loopCount = 0;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_2_loopCount = 0;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount = 0;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_loopCount = 0;
var obj6122_onDrag_activeActionGroupIndex = -1;
var obj6122_onDrag_runningActionsCount = 0;
var obj6122_onDrag_loopCount = 0;
var obj6122_onTouchDown_activeActionGroupIndex = -1;
var obj6122_onTouchDown_runningActionsCount = 0;
var obj6122_onTouchDown_loopCount = 0;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex = -1;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount = 0;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_10_loopCount = 0;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex = -1;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount = 0;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_9_loopCount = 0;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex = -1;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount = 0;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_8_loopCount = 0;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex = -1;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount = 0;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_7_loopCount = 0;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_6_loopCount = 0;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_5_loopCount = 0;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_4_loopCount = 0;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_3_loopCount = 0;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_2_loopCount = 0;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount = 0;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_loopCount = 0;
var obj6124_onDrag_activeActionGroupIndex = -1;
var obj6124_onDrag_runningActionsCount = 0;
var obj6124_onDrag_loopCount = 0;
var obj6124_onTouchDown_activeActionGroupIndex = -1;
var obj6124_onTouchDown_runningActionsCount = 0;
var obj6124_onTouchDown_loopCount = 0;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex = -1;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount = 0;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_10_loopCount = 0;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex = -1;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount = 0;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_9_loopCount = 0;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex = -1;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount = 0;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_8_loopCount = 0;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex = -1;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount = 0;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_7_loopCount = 0;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_6_loopCount = 0;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_5_loopCount = 0;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_4_loopCount = 0;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_3_loopCount = 0;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_2_loopCount = 0;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount = 0;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_loopCount = 0;
var obj6126_onDrag_activeActionGroupIndex = -1;
var obj6126_onDrag_runningActionsCount = 0;
var obj6126_onDrag_loopCount = 0;
var obj6126_onTouchDown_activeActionGroupIndex = -1;
var obj6126_onTouchDown_runningActionsCount = 0;
var obj6126_onTouchDown_loopCount = 0;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex = -1;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount = 0;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_10_loopCount = 0;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex = -1;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount = 0;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_9_loopCount = 0;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex = -1;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount = 0;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_8_loopCount = 0;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex = -1;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount = 0;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_7_loopCount = 0;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_6_loopCount = 0;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_5_loopCount = 0;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_4_loopCount = 0;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_3_loopCount = 0;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_2_loopCount = 0;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount = 0;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_loopCount = 0;
var obj6189_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj6189_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj6189_SCEventCounterReachedTargetValue_loopCount = 0;
var obj13056_onTap_activeActionGroupIndex = -1;
var obj13056_onTap_runningActionsCount = 0;
var obj13056_onTap_loopCount = 0;
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
 
var obj6189_counterValue = 0;
var obj6189_counterTargetValue = 10;
var obj6189_counterCanExceedTargetValue = true;
var obj6385_counterValue = 0;
var obj6385_counterTargetValue = 2;
var obj6385_counterCanExceedTargetValue = false;
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
		
obj6108_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6108_onTouchDown_activeActionGroupIndex = -1;
		$("#obj6108").trigger("obj6108_onTouchDown_ended");
		
		return;
	}
	window.obj6108_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6187();
function runjs_6187() {
	window.obj6108_onTouchDown_runningActionsCount = obj6108_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj6108"));
	setTimeout(function() {
		window.obj6108_onTouchDown_runningActionsCount = window.obj6108_onTouchDown_runningActionsCount - 1;
if (window.obj6108_onTouchDown_runningActionsCount == 0) {
	obj6108_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj6108_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6108_onTouchDown_activeActionGroupIndex = -1;
		$("#obj6108").trigger("obj6108_onTouchDown_ended");
		
		return;
	}
	window.obj6108_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj6108");
//	action: dragDrop
//	target: obj6108 
dragDrop_6184();
function dragDrop_6184() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj6108_onTouchDown_runningActionsCount = obj6108_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj6108');
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
    	window.obj6108_onTouchDown_runningActionsCount = window.obj6108_onTouchDown_runningActionsCount - 1;
if (window.obj6108_onTouchDown_runningActionsCount == 0) {
	obj6108_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj6151","#obj6153","#obj6141","#obj6143","#obj6145","#obj6147","#obj6139","#obj6137","#obj6135","#obj6133");
    	var actionsOnDrop = new Array("SCActionDragDrop6184_droppedInsideTargetActions","SCActionDragDrop6184_droppedInsideTargetActions_2","SCActionDragDrop6184_droppedInsideTargetActions_3","SCActionDragDrop6184_droppedInsideTargetActions_4","SCActionDragDrop6184_droppedInsideTargetActions_5","SCActionDragDrop6184_droppedInsideTargetActions_6","SCActionDragDrop6184_droppedInsideTargetActions_7","SCActionDragDrop6184_droppedInsideTargetActions_8","SCActionDragDrop6184_droppedInsideTargetActions_9","SCActionDragDrop6184_droppedInsideTargetActions_10") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_6184 = false;
    	var dropped_id_6184;
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
					dropped_6184 = true;
					dropped_id_6184 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_6184) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
		}
    });
}











};
obj6108_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6108_onTouchDown_activeActionGroupIndex = -1;
		$("#obj6108").trigger("obj6108_onTouchDown_ended");
		
		return;
	}
	window.obj6108_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj6108_SCActionDragDrop6184_droppedInsideTargetActions_10_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex = -1;
		$("#obj6108").trigger("obj6108_SCActionDragDrop6184_droppedInsideTargetActions_10_ended");
		
		return;
	}
	window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6209();
function incrementCounter_6209() {
	window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount = obj6108_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount = window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount - 1;
if (window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount == 0) {
	obj6108_SCActionDragDrop6184_droppedInsideTargetActions_10_actionGroup1();
} }, 1);
}





};
obj6108_SCActionDragDrop6184_droppedInsideTargetActions_10_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex = -1;
		$("#obj6108").trigger("obj6108_SCActionDragDrop6184_droppedInsideTargetActions_10_ended");
		
		return;
	}
	window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex = 1;
	





















};
obj6108_SCActionDragDrop6184_droppedInsideTargetActions_9_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex = -1;
		$("#obj6108").trigger("obj6108_SCActionDragDrop6184_droppedInsideTargetActions_9_ended");
		
		return;
	}
	window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6207();
function incrementCounter_6207() {
	window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount = obj6108_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount = window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount - 1;
if (window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount == 0) {
	obj6108_SCActionDragDrop6184_droppedInsideTargetActions_9_actionGroup1();
} }, 1);
}





};
obj6108_SCActionDragDrop6184_droppedInsideTargetActions_9_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex = -1;
		$("#obj6108").trigger("obj6108_SCActionDragDrop6184_droppedInsideTargetActions_9_ended");
		
		return;
	}
	window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex = 1;
	





















};
obj6108_SCActionDragDrop6184_droppedInsideTargetActions_8_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex = -1;
		$("#obj6108").trigger("obj6108_SCActionDragDrop6184_droppedInsideTargetActions_8_ended");
		
		return;
	}
	window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6205();
function incrementCounter_6205() {
	window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount = obj6108_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount = window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount - 1;
if (window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount == 0) {
	obj6108_SCActionDragDrop6184_droppedInsideTargetActions_8_actionGroup1();
} }, 1);
}





};
obj6108_SCActionDragDrop6184_droppedInsideTargetActions_8_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex = -1;
		$("#obj6108").trigger("obj6108_SCActionDragDrop6184_droppedInsideTargetActions_8_ended");
		
		return;
	}
	window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex = 1;
	





















};
obj6108_SCActionDragDrop6184_droppedInsideTargetActions_7_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex = -1;
		$("#obj6108").trigger("obj6108_SCActionDragDrop6184_droppedInsideTargetActions_7_ended");
		
		return;
	}
	window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6203();
function incrementCounter_6203() {
	window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount = obj6108_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount = window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount - 1;
if (window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount == 0) {
	obj6108_SCActionDragDrop6184_droppedInsideTargetActions_7_actionGroup1();
} }, 1);
}





};
obj6108_SCActionDragDrop6184_droppedInsideTargetActions_7_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex = -1;
		$("#obj6108").trigger("obj6108_SCActionDragDrop6184_droppedInsideTargetActions_7_ended");
		
		return;
	}
	window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex = 1;
	





















};
obj6108_SCActionDragDrop6184_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj6108").trigger("obj6108_SCActionDragDrop6184_droppedInsideTargetActions_6_ended");
		
		return;
	}
	window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6201();
function incrementCounter_6201() {
	window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount = obj6108_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount = window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj6108_SCActionDragDrop6184_droppedInsideTargetActions_6_actionGroup1();
} }, 1);
}





};
obj6108_SCActionDragDrop6184_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj6108").trigger("obj6108_SCActionDragDrop6184_droppedInsideTargetActions_6_ended");
		
		return;
	}
	window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	





















};
obj6108_SCActionDragDrop6184_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj6108").trigger("obj6108_SCActionDragDrop6184_droppedInsideTargetActions_5_ended");
		
		return;
	}
	window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6199();
function incrementCounter_6199() {
	window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount = obj6108_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount = window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj6108_SCActionDragDrop6184_droppedInsideTargetActions_5_actionGroup1();
} }, 1);
}





};
obj6108_SCActionDragDrop6184_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj6108").trigger("obj6108_SCActionDragDrop6184_droppedInsideTargetActions_5_ended");
		
		return;
	}
	window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	





















};
obj6108_SCActionDragDrop6184_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6108").trigger("obj6108_SCActionDragDrop6184_droppedInsideTargetActions_4_ended");
		
		return;
	}
	window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6197();
function incrementCounter_6197() {
	window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount = obj6108_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount = window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6108_SCActionDragDrop6184_droppedInsideTargetActions_4_actionGroup1();
} }, 1);
}





};
obj6108_SCActionDragDrop6184_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6108").trigger("obj6108_SCActionDragDrop6184_droppedInsideTargetActions_4_ended");
		
		return;
	}
	window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	





















};
obj6108_SCActionDragDrop6184_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6108").trigger("obj6108_SCActionDragDrop6184_droppedInsideTargetActions_3_ended");
		
		return;
	}
	window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6195();
function incrementCounter_6195() {
	window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount = obj6108_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount = window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6108_SCActionDragDrop6184_droppedInsideTargetActions_3_actionGroup1();
} }, 1);
}





};
obj6108_SCActionDragDrop6184_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6108").trigger("obj6108_SCActionDragDrop6184_droppedInsideTargetActions_3_ended");
		
		return;
	}
	window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	





















};
obj6108_SCActionDragDrop6184_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6108").trigger("obj6108_SCActionDragDrop6184_droppedInsideTargetActions_2_ended");
		
		return;
	}
	window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6193();
function incrementCounter_6193() {
	window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount = obj6108_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount = window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6108_SCActionDragDrop6184_droppedInsideTargetActions_2_actionGroup1();
} }, 1);
}





};
obj6108_SCActionDragDrop6184_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6108").trigger("obj6108_SCActionDragDrop6184_droppedInsideTargetActions_2_ended");
		
		return;
	}
	window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	





















};
obj6108_SCActionDragDrop6184_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6108").trigger("obj6108_SCActionDragDrop6184_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6191();
function incrementCounter_6191() {
	window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount = obj6108_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount = window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6108_SCActionDragDrop6184_droppedInsideTargetActions_actionGroup1();
} }, 1);
}





};
obj6108_SCActionDragDrop6184_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6108").trigger("obj6108_SCActionDragDrop6184_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj6116_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6116_onTouchDown_activeActionGroupIndex = -1;
		$("#obj6116").trigger("obj6116_onTouchDown_ended");
		
		return;
	}
	window.obj6116_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6380();
function runjs_6380() {
	window.obj6116_onTouchDown_runningActionsCount = obj6116_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj6116"));
	setTimeout(function() {
		window.obj6116_onTouchDown_runningActionsCount = window.obj6116_onTouchDown_runningActionsCount - 1;
if (window.obj6116_onTouchDown_runningActionsCount == 0) {
	obj6116_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj6116_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6116_onTouchDown_activeActionGroupIndex = -1;
		$("#obj6116").trigger("obj6116_onTouchDown_ended");
		
		return;
	}
	window.obj6116_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj6116");
//	action: dragDrop
//	target: obj6116 
dragDrop_6302();
function dragDrop_6302() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj6116_onTouchDown_runningActionsCount = obj6116_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj6116');
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
    	window.obj6116_onTouchDown_runningActionsCount = window.obj6116_onTouchDown_runningActionsCount - 1;
if (window.obj6116_onTouchDown_runningActionsCount == 0) {
	obj6116_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj6151","#obj6153","#obj6141","#obj6143","#obj6145","#obj6147","#obj6139","#obj6137","#obj6135","#obj6133");
    	var actionsOnDrop = new Array("SCActionDragDrop6184_droppedInsideTargetActions","SCActionDragDrop6184_droppedInsideTargetActions_2","SCActionDragDrop6184_droppedInsideTargetActions_3","SCActionDragDrop6184_droppedInsideTargetActions_4","SCActionDragDrop6184_droppedInsideTargetActions_5","SCActionDragDrop6184_droppedInsideTargetActions_6","SCActionDragDrop6184_droppedInsideTargetActions_7","SCActionDragDrop6184_droppedInsideTargetActions_8","SCActionDragDrop6184_droppedInsideTargetActions_9","SCActionDragDrop6184_droppedInsideTargetActions_10") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_6302 = false;
    	var dropped_id_6302;
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
					dropped_6302 = true;
					dropped_id_6302 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_6302) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
		}
    });
}











};
obj6116_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6116_onTouchDown_activeActionGroupIndex = -1;
		$("#obj6116").trigger("obj6116_onTouchDown_ended");
		
		return;
	}
	window.obj6116_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj6116_SCActionDragDrop6184_droppedInsideTargetActions_10_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex = -1;
		$("#obj6116").trigger("obj6116_SCActionDragDrop6184_droppedInsideTargetActions_10_ended");
		
		return;
	}
	window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6322();
function incrementCounter_6322() {
	window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount = obj6116_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount = window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount - 1;
if (window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount == 0) {
	obj6116_SCActionDragDrop6184_droppedInsideTargetActions_10_actionGroup1();
} }, 1);
}





};
obj6116_SCActionDragDrop6184_droppedInsideTargetActions_10_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex = -1;
		$("#obj6116").trigger("obj6116_SCActionDragDrop6184_droppedInsideTargetActions_10_ended");
		
		return;
	}
	window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex = 1;
	





















};
obj6116_SCActionDragDrop6184_droppedInsideTargetActions_9_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex = -1;
		$("#obj6116").trigger("obj6116_SCActionDragDrop6184_droppedInsideTargetActions_9_ended");
		
		return;
	}
	window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6320();
function incrementCounter_6320() {
	window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount = obj6116_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount = window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount - 1;
if (window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount == 0) {
	obj6116_SCActionDragDrop6184_droppedInsideTargetActions_9_actionGroup1();
} }, 1);
}





};
obj6116_SCActionDragDrop6184_droppedInsideTargetActions_9_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex = -1;
		$("#obj6116").trigger("obj6116_SCActionDragDrop6184_droppedInsideTargetActions_9_ended");
		
		return;
	}
	window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex = 1;
	





















};
obj6116_SCActionDragDrop6184_droppedInsideTargetActions_8_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex = -1;
		$("#obj6116").trigger("obj6116_SCActionDragDrop6184_droppedInsideTargetActions_8_ended");
		
		return;
	}
	window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6318();
function incrementCounter_6318() {
	window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount = obj6116_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount = window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount - 1;
if (window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount == 0) {
	obj6116_SCActionDragDrop6184_droppedInsideTargetActions_8_actionGroup1();
} }, 1);
}





};
obj6116_SCActionDragDrop6184_droppedInsideTargetActions_8_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex = -1;
		$("#obj6116").trigger("obj6116_SCActionDragDrop6184_droppedInsideTargetActions_8_ended");
		
		return;
	}
	window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex = 1;
	





















};
obj6116_SCActionDragDrop6184_droppedInsideTargetActions_7_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex = -1;
		$("#obj6116").trigger("obj6116_SCActionDragDrop6184_droppedInsideTargetActions_7_ended");
		
		return;
	}
	window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6316();
function incrementCounter_6316() {
	window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount = obj6116_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount = window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount - 1;
if (window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount == 0) {
	obj6116_SCActionDragDrop6184_droppedInsideTargetActions_7_actionGroup1();
} }, 1);
}





};
obj6116_SCActionDragDrop6184_droppedInsideTargetActions_7_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex = -1;
		$("#obj6116").trigger("obj6116_SCActionDragDrop6184_droppedInsideTargetActions_7_ended");
		
		return;
	}
	window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex = 1;
	





















};
obj6116_SCActionDragDrop6184_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj6116").trigger("obj6116_SCActionDragDrop6184_droppedInsideTargetActions_6_ended");
		
		return;
	}
	window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6314();
function incrementCounter_6314() {
	window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount = obj6116_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount = window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj6116_SCActionDragDrop6184_droppedInsideTargetActions_6_actionGroup1();
} }, 1);
}





};
obj6116_SCActionDragDrop6184_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj6116").trigger("obj6116_SCActionDragDrop6184_droppedInsideTargetActions_6_ended");
		
		return;
	}
	window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	





















};
obj6116_SCActionDragDrop6184_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj6116").trigger("obj6116_SCActionDragDrop6184_droppedInsideTargetActions_5_ended");
		
		return;
	}
	window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6312();
function incrementCounter_6312() {
	window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount = obj6116_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount = window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj6116_SCActionDragDrop6184_droppedInsideTargetActions_5_actionGroup1();
} }, 1);
}





};
obj6116_SCActionDragDrop6184_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj6116").trigger("obj6116_SCActionDragDrop6184_droppedInsideTargetActions_5_ended");
		
		return;
	}
	window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	





















};
obj6116_SCActionDragDrop6184_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6116").trigger("obj6116_SCActionDragDrop6184_droppedInsideTargetActions_4_ended");
		
		return;
	}
	window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6310();
function incrementCounter_6310() {
	window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount = obj6116_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount = window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6116_SCActionDragDrop6184_droppedInsideTargetActions_4_actionGroup1();
} }, 1);
}





};
obj6116_SCActionDragDrop6184_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6116").trigger("obj6116_SCActionDragDrop6184_droppedInsideTargetActions_4_ended");
		
		return;
	}
	window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	





















};
obj6116_SCActionDragDrop6184_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6116").trigger("obj6116_SCActionDragDrop6184_droppedInsideTargetActions_3_ended");
		
		return;
	}
	window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6308();
function incrementCounter_6308() {
	window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount = obj6116_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount = window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6116_SCActionDragDrop6184_droppedInsideTargetActions_3_actionGroup1();
} }, 1);
}





};
obj6116_SCActionDragDrop6184_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6116").trigger("obj6116_SCActionDragDrop6184_droppedInsideTargetActions_3_ended");
		
		return;
	}
	window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	





















};
obj6116_SCActionDragDrop6184_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6116").trigger("obj6116_SCActionDragDrop6184_droppedInsideTargetActions_2_ended");
		
		return;
	}
	window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6306();
function incrementCounter_6306() {
	window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount = obj6116_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount = window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6116_SCActionDragDrop6184_droppedInsideTargetActions_2_actionGroup1();
} }, 1);
}





};
obj6116_SCActionDragDrop6184_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6116").trigger("obj6116_SCActionDragDrop6184_droppedInsideTargetActions_2_ended");
		
		return;
	}
	window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	





















};
obj6116_SCActionDragDrop6184_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6116").trigger("obj6116_SCActionDragDrop6184_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6304();
function incrementCounter_6304() {
	window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount = obj6116_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount = window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6116_SCActionDragDrop6184_droppedInsideTargetActions_actionGroup1();
} }, 1);
}





};
obj6116_SCActionDragDrop6184_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6116").trigger("obj6116_SCActionDragDrop6184_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj6118_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6118_onTouchDown_activeActionGroupIndex = -1;
		$("#obj6118").trigger("obj6118_onTouchDown_ended");
		
		return;
	}
	window.obj6118_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6378();
function runjs_6378() {
	window.obj6118_onTouchDown_runningActionsCount = obj6118_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj6118"));
	setTimeout(function() {
		window.obj6118_onTouchDown_runningActionsCount = window.obj6118_onTouchDown_runningActionsCount - 1;
if (window.obj6118_onTouchDown_runningActionsCount == 0) {
	obj6118_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj6118_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6118_onTouchDown_activeActionGroupIndex = -1;
		$("#obj6118").trigger("obj6118_onTouchDown_ended");
		
		return;
	}
	window.obj6118_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj6118");
//	action: dragDrop
//	target: obj6118 
dragDrop_6280();
function dragDrop_6280() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj6118_onTouchDown_runningActionsCount = obj6118_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj6118');
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
    	window.obj6118_onTouchDown_runningActionsCount = window.obj6118_onTouchDown_runningActionsCount - 1;
if (window.obj6118_onTouchDown_runningActionsCount == 0) {
	obj6118_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj6151","#obj6153","#obj6141","#obj6143","#obj6145","#obj6147","#obj6139","#obj6137","#obj6135","#obj6133");
    	var actionsOnDrop = new Array("SCActionDragDrop6184_droppedInsideTargetActions","SCActionDragDrop6184_droppedInsideTargetActions_2","SCActionDragDrop6184_droppedInsideTargetActions_3","SCActionDragDrop6184_droppedInsideTargetActions_4","SCActionDragDrop6184_droppedInsideTargetActions_5","SCActionDragDrop6184_droppedInsideTargetActions_6","SCActionDragDrop6184_droppedInsideTargetActions_7","SCActionDragDrop6184_droppedInsideTargetActions_8","SCActionDragDrop6184_droppedInsideTargetActions_9","SCActionDragDrop6184_droppedInsideTargetActions_10") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_6280 = false;
    	var dropped_id_6280;
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
					dropped_6280 = true;
					dropped_id_6280 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_6280) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
		}
    });
}











};
obj6118_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6118_onTouchDown_activeActionGroupIndex = -1;
		$("#obj6118").trigger("obj6118_onTouchDown_ended");
		
		return;
	}
	window.obj6118_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj6118_SCActionDragDrop6184_droppedInsideTargetActions_10_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex = -1;
		$("#obj6118").trigger("obj6118_SCActionDragDrop6184_droppedInsideTargetActions_10_ended");
		
		return;
	}
	window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6300();
function incrementCounter_6300() {
	window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount = obj6118_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount = window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount - 1;
if (window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount == 0) {
	obj6118_SCActionDragDrop6184_droppedInsideTargetActions_10_actionGroup1();
} }, 1);
}





};
obj6118_SCActionDragDrop6184_droppedInsideTargetActions_10_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex = -1;
		$("#obj6118").trigger("obj6118_SCActionDragDrop6184_droppedInsideTargetActions_10_ended");
		
		return;
	}
	window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex = 1;
	





















};
obj6118_SCActionDragDrop6184_droppedInsideTargetActions_9_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex = -1;
		$("#obj6118").trigger("obj6118_SCActionDragDrop6184_droppedInsideTargetActions_9_ended");
		
		return;
	}
	window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6298();
function incrementCounter_6298() {
	window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount = obj6118_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount = window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount - 1;
if (window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount == 0) {
	obj6118_SCActionDragDrop6184_droppedInsideTargetActions_9_actionGroup1();
} }, 1);
}





};
obj6118_SCActionDragDrop6184_droppedInsideTargetActions_9_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex = -1;
		$("#obj6118").trigger("obj6118_SCActionDragDrop6184_droppedInsideTargetActions_9_ended");
		
		return;
	}
	window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex = 1;
	





















};
obj6118_SCActionDragDrop6184_droppedInsideTargetActions_8_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex = -1;
		$("#obj6118").trigger("obj6118_SCActionDragDrop6184_droppedInsideTargetActions_8_ended");
		
		return;
	}
	window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6296();
function incrementCounter_6296() {
	window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount = obj6118_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount = window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount - 1;
if (window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount == 0) {
	obj6118_SCActionDragDrop6184_droppedInsideTargetActions_8_actionGroup1();
} }, 1);
}





};
obj6118_SCActionDragDrop6184_droppedInsideTargetActions_8_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex = -1;
		$("#obj6118").trigger("obj6118_SCActionDragDrop6184_droppedInsideTargetActions_8_ended");
		
		return;
	}
	window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex = 1;
	





















};
obj6118_SCActionDragDrop6184_droppedInsideTargetActions_7_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex = -1;
		$("#obj6118").trigger("obj6118_SCActionDragDrop6184_droppedInsideTargetActions_7_ended");
		
		return;
	}
	window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6294();
function incrementCounter_6294() {
	window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount = obj6118_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount = window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount - 1;
if (window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount == 0) {
	obj6118_SCActionDragDrop6184_droppedInsideTargetActions_7_actionGroup1();
} }, 1);
}





};
obj6118_SCActionDragDrop6184_droppedInsideTargetActions_7_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex = -1;
		$("#obj6118").trigger("obj6118_SCActionDragDrop6184_droppedInsideTargetActions_7_ended");
		
		return;
	}
	window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex = 1;
	





















};
obj6118_SCActionDragDrop6184_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj6118").trigger("obj6118_SCActionDragDrop6184_droppedInsideTargetActions_6_ended");
		
		return;
	}
	window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6292();
function incrementCounter_6292() {
	window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount = obj6118_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount = window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj6118_SCActionDragDrop6184_droppedInsideTargetActions_6_actionGroup1();
} }, 1);
}





};
obj6118_SCActionDragDrop6184_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj6118").trigger("obj6118_SCActionDragDrop6184_droppedInsideTargetActions_6_ended");
		
		return;
	}
	window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	





















};
obj6118_SCActionDragDrop6184_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj6118").trigger("obj6118_SCActionDragDrop6184_droppedInsideTargetActions_5_ended");
		
		return;
	}
	window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6290();
function incrementCounter_6290() {
	window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount = obj6118_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount = window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj6118_SCActionDragDrop6184_droppedInsideTargetActions_5_actionGroup1();
} }, 1);
}





};
obj6118_SCActionDragDrop6184_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj6118").trigger("obj6118_SCActionDragDrop6184_droppedInsideTargetActions_5_ended");
		
		return;
	}
	window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	





















};
obj6118_SCActionDragDrop6184_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6118").trigger("obj6118_SCActionDragDrop6184_droppedInsideTargetActions_4_ended");
		
		return;
	}
	window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6288();
function incrementCounter_6288() {
	window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount = obj6118_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount = window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6118_SCActionDragDrop6184_droppedInsideTargetActions_4_actionGroup1();
} }, 1);
}





};
obj6118_SCActionDragDrop6184_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6118").trigger("obj6118_SCActionDragDrop6184_droppedInsideTargetActions_4_ended");
		
		return;
	}
	window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	





















};
obj6118_SCActionDragDrop6184_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6118").trigger("obj6118_SCActionDragDrop6184_droppedInsideTargetActions_3_ended");
		
		return;
	}
	window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6286();
function incrementCounter_6286() {
	window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount = obj6118_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount = window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6118_SCActionDragDrop6184_droppedInsideTargetActions_3_actionGroup1();
} }, 1);
}





};
obj6118_SCActionDragDrop6184_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6118").trigger("obj6118_SCActionDragDrop6184_droppedInsideTargetActions_3_ended");
		
		return;
	}
	window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	





















};
obj6118_SCActionDragDrop6184_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6118").trigger("obj6118_SCActionDragDrop6184_droppedInsideTargetActions_2_ended");
		
		return;
	}
	window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6284();
function incrementCounter_6284() {
	window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount = obj6118_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount = window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6118_SCActionDragDrop6184_droppedInsideTargetActions_2_actionGroup1();
} }, 1);
}





};
obj6118_SCActionDragDrop6184_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6118").trigger("obj6118_SCActionDragDrop6184_droppedInsideTargetActions_2_ended");
		
		return;
	}
	window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	





















};
obj6118_SCActionDragDrop6184_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6118").trigger("obj6118_SCActionDragDrop6184_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6282();
function incrementCounter_6282() {
	window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount = obj6118_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount = window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6118_SCActionDragDrop6184_droppedInsideTargetActions_actionGroup1();
} }, 1);
}





};
obj6118_SCActionDragDrop6184_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6118").trigger("obj6118_SCActionDragDrop6184_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj6120_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6120_onTouchDown_activeActionGroupIndex = -1;
		$("#obj6120").trigger("obj6120_onTouchDown_ended");
		
		return;
	}
	window.obj6120_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6376();
function runjs_6376() {
	window.obj6120_onTouchDown_runningActionsCount = obj6120_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj6120"));
	setTimeout(function() {
		window.obj6120_onTouchDown_runningActionsCount = window.obj6120_onTouchDown_runningActionsCount - 1;
if (window.obj6120_onTouchDown_runningActionsCount == 0) {
	obj6120_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj6120_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6120_onTouchDown_activeActionGroupIndex = -1;
		$("#obj6120").trigger("obj6120_onTouchDown_ended");
		
		return;
	}
	window.obj6120_onTouchDown_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj13056 
show_6389();
function show_6389() {
	window.obj6120_onTouchDown_runningActionsCount = obj6120_onTouchDown_runningActionsCount + 1;
	$("#obj13056").fadeIn(0, function() {
			setTimeout(function() {
				window.obj6120_onTouchDown_runningActionsCount = window.obj6120_onTouchDown_runningActionsCount - 1;
if (window.obj6120_onTouchDown_runningActionsCount == 0) {
	obj6120_onTouchDown_actionGroup2();
}
				$("#obj13056").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj6120_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6120_onTouchDown_activeActionGroupIndex = -1;
		$("#obj6120").trigger("obj6120_onTouchDown_ended");
		
		return;
	}
	window.obj6120_onTouchDown_activeActionGroupIndex = 2;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj6120");
//	action: dragDrop
//	target: obj6120 
dragDrop_6258();
function dragDrop_6258() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj6120_onTouchDown_runningActionsCount = obj6120_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj6120');
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
    	window.obj6120_onTouchDown_runningActionsCount = window.obj6120_onTouchDown_runningActionsCount - 1;
if (window.obj6120_onTouchDown_runningActionsCount == 0) {
	obj6120_onTouchDown_actionGroup3();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj6151","#obj6153","#obj6141","#obj6143","#obj6145","#obj6147","#obj6139","#obj6137","#obj6135","#obj6133");
    	var actionsOnDrop = new Array("SCActionDragDrop6184_droppedInsideTargetActions","SCActionDragDrop6184_droppedInsideTargetActions_2","SCActionDragDrop6184_droppedInsideTargetActions_3","SCActionDragDrop6184_droppedInsideTargetActions_4","SCActionDragDrop6184_droppedInsideTargetActions_5","SCActionDragDrop6184_droppedInsideTargetActions_6","SCActionDragDrop6184_droppedInsideTargetActions_7","SCActionDragDrop6184_droppedInsideTargetActions_8","SCActionDragDrop6184_droppedInsideTargetActions_9","SCActionDragDrop6184_droppedInsideTargetActions_10") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_6258 = false;
    	var dropped_id_6258;
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
					dropped_6258 = true;
					dropped_id_6258 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_6258) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
		}
    });
}











};
obj6120_onTouchDown_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6120_onTouchDown_activeActionGroupIndex = -1;
		$("#obj6120").trigger("obj6120_onTouchDown_ended");
		
		return;
	}
	window.obj6120_onTouchDown_activeActionGroupIndex = 3;
	





















};
obj6120_SCActionDragDrop6184_droppedInsideTargetActions_10_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex = -1;
		$("#obj6120").trigger("obj6120_SCActionDragDrop6184_droppedInsideTargetActions_10_ended");
		
		return;
	}
	window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6278();
function incrementCounter_6278() {
	window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount = obj6120_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount = window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount - 1;
if (window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount == 0) {
	obj6120_SCActionDragDrop6184_droppedInsideTargetActions_10_actionGroup1();
} }, 1);
}





};
obj6120_SCActionDragDrop6184_droppedInsideTargetActions_10_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex = -1;
		$("#obj6120").trigger("obj6120_SCActionDragDrop6184_droppedInsideTargetActions_10_ended");
		
		return;
	}
	window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex = 1;
	





















};
obj6120_SCActionDragDrop6184_droppedInsideTargetActions_9_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex = -1;
		$("#obj6120").trigger("obj6120_SCActionDragDrop6184_droppedInsideTargetActions_9_ended");
		
		return;
	}
	window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6276();
function incrementCounter_6276() {
	window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount = obj6120_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount = window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount - 1;
if (window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount == 0) {
	obj6120_SCActionDragDrop6184_droppedInsideTargetActions_9_actionGroup1();
} }, 1);
}





};
obj6120_SCActionDragDrop6184_droppedInsideTargetActions_9_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex = -1;
		$("#obj6120").trigger("obj6120_SCActionDragDrop6184_droppedInsideTargetActions_9_ended");
		
		return;
	}
	window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex = 1;
	





















};
obj6120_SCActionDragDrop6184_droppedInsideTargetActions_8_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex = -1;
		$("#obj6120").trigger("obj6120_SCActionDragDrop6184_droppedInsideTargetActions_8_ended");
		
		return;
	}
	window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6274();
function incrementCounter_6274() {
	window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount = obj6120_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount = window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount - 1;
if (window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount == 0) {
	obj6120_SCActionDragDrop6184_droppedInsideTargetActions_8_actionGroup1();
} }, 1);
}





};
obj6120_SCActionDragDrop6184_droppedInsideTargetActions_8_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex = -1;
		$("#obj6120").trigger("obj6120_SCActionDragDrop6184_droppedInsideTargetActions_8_ended");
		
		return;
	}
	window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex = 1;
	





















};
obj6120_SCActionDragDrop6184_droppedInsideTargetActions_7_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex = -1;
		$("#obj6120").trigger("obj6120_SCActionDragDrop6184_droppedInsideTargetActions_7_ended");
		
		return;
	}
	window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6272();
function incrementCounter_6272() {
	window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount = obj6120_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount = window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount - 1;
if (window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount == 0) {
	obj6120_SCActionDragDrop6184_droppedInsideTargetActions_7_actionGroup1();
} }, 1);
}





};
obj6120_SCActionDragDrop6184_droppedInsideTargetActions_7_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex = -1;
		$("#obj6120").trigger("obj6120_SCActionDragDrop6184_droppedInsideTargetActions_7_ended");
		
		return;
	}
	window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex = 1;
	





















};
obj6120_SCActionDragDrop6184_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj6120").trigger("obj6120_SCActionDragDrop6184_droppedInsideTargetActions_6_ended");
		
		return;
	}
	window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6270();
function incrementCounter_6270() {
	window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount = obj6120_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount = window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj6120_SCActionDragDrop6184_droppedInsideTargetActions_6_actionGroup1();
} }, 1);
}





};
obj6120_SCActionDragDrop6184_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj6120").trigger("obj6120_SCActionDragDrop6184_droppedInsideTargetActions_6_ended");
		
		return;
	}
	window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	





















};
obj6120_SCActionDragDrop6184_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj6120").trigger("obj6120_SCActionDragDrop6184_droppedInsideTargetActions_5_ended");
		
		return;
	}
	window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6268();
function incrementCounter_6268() {
	window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount = obj6120_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount = window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj6120_SCActionDragDrop6184_droppedInsideTargetActions_5_actionGroup1();
} }, 1);
}





};
obj6120_SCActionDragDrop6184_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj6120").trigger("obj6120_SCActionDragDrop6184_droppedInsideTargetActions_5_ended");
		
		return;
	}
	window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	





















};
obj6120_SCActionDragDrop6184_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6120").trigger("obj6120_SCActionDragDrop6184_droppedInsideTargetActions_4_ended");
		
		return;
	}
	window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6266();
function incrementCounter_6266() {
	window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount = obj6120_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount = window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6120_SCActionDragDrop6184_droppedInsideTargetActions_4_actionGroup1();
} }, 1);
}





};
obj6120_SCActionDragDrop6184_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6120").trigger("obj6120_SCActionDragDrop6184_droppedInsideTargetActions_4_ended");
		
		return;
	}
	window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	





















};
obj6120_SCActionDragDrop6184_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6120").trigger("obj6120_SCActionDragDrop6184_droppedInsideTargetActions_3_ended");
		
		return;
	}
	window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6264();
function incrementCounter_6264() {
	window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount = obj6120_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount = window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6120_SCActionDragDrop6184_droppedInsideTargetActions_3_actionGroup1();
} }, 1);
}





};
obj6120_SCActionDragDrop6184_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6120").trigger("obj6120_SCActionDragDrop6184_droppedInsideTargetActions_3_ended");
		
		return;
	}
	window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	





















};
obj6120_SCActionDragDrop6184_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6120").trigger("obj6120_SCActionDragDrop6184_droppedInsideTargetActions_2_ended");
		
		return;
	}
	window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6262();
function incrementCounter_6262() {
	window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount = obj6120_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount = window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6120_SCActionDragDrop6184_droppedInsideTargetActions_2_actionGroup1();
} }, 1);
}





};
obj6120_SCActionDragDrop6184_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6120").trigger("obj6120_SCActionDragDrop6184_droppedInsideTargetActions_2_ended");
		
		return;
	}
	window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	





















};
obj6120_SCActionDragDrop6184_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6120").trigger("obj6120_SCActionDragDrop6184_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6260();
function incrementCounter_6260() {
	window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount = obj6120_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount = window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6120_SCActionDragDrop6184_droppedInsideTargetActions_actionGroup1();
} }, 1);
}





};
obj6120_SCActionDragDrop6184_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6120").trigger("obj6120_SCActionDragDrop6184_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj6122_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6122_onTouchDown_activeActionGroupIndex = -1;
		$("#obj6122").trigger("obj6122_onTouchDown_ended");
		
		return;
	}
	window.obj6122_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6374();
function runjs_6374() {
	window.obj6122_onTouchDown_runningActionsCount = obj6122_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj6122"));
	setTimeout(function() {
		window.obj6122_onTouchDown_runningActionsCount = window.obj6122_onTouchDown_runningActionsCount - 1;
if (window.obj6122_onTouchDown_runningActionsCount == 0) {
	obj6122_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj6122_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6122_onTouchDown_activeActionGroupIndex = -1;
		$("#obj6122").trigger("obj6122_onTouchDown_ended");
		
		return;
	}
	window.obj6122_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj6122");
//	action: dragDrop
//	target: obj6122 
dragDrop_6236();
function dragDrop_6236() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj6122_onTouchDown_runningActionsCount = obj6122_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj6122');
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
    	window.obj6122_onTouchDown_runningActionsCount = window.obj6122_onTouchDown_runningActionsCount - 1;
if (window.obj6122_onTouchDown_runningActionsCount == 0) {
	obj6122_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj6151","#obj6153","#obj6141","#obj6143","#obj6145","#obj6147","#obj6139","#obj6137","#obj6135","#obj6133");
    	var actionsOnDrop = new Array("SCActionDragDrop6184_droppedInsideTargetActions","SCActionDragDrop6184_droppedInsideTargetActions_2","SCActionDragDrop6184_droppedInsideTargetActions_3","SCActionDragDrop6184_droppedInsideTargetActions_4","SCActionDragDrop6184_droppedInsideTargetActions_5","SCActionDragDrop6184_droppedInsideTargetActions_6","SCActionDragDrop6184_droppedInsideTargetActions_7","SCActionDragDrop6184_droppedInsideTargetActions_8","SCActionDragDrop6184_droppedInsideTargetActions_9","SCActionDragDrop6184_droppedInsideTargetActions_10") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_6236 = false;
    	var dropped_id_6236;
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
					dropped_6236 = true;
					dropped_id_6236 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_6236) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
		}
    });
}











};
obj6122_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6122_onTouchDown_activeActionGroupIndex = -1;
		$("#obj6122").trigger("obj6122_onTouchDown_ended");
		
		return;
	}
	window.obj6122_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj6122_SCActionDragDrop6184_droppedInsideTargetActions_10_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex = -1;
		$("#obj6122").trigger("obj6122_SCActionDragDrop6184_droppedInsideTargetActions_10_ended");
		
		return;
	}
	window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6256();
function incrementCounter_6256() {
	window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount = obj6122_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount = window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount - 1;
if (window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount == 0) {
	obj6122_SCActionDragDrop6184_droppedInsideTargetActions_10_actionGroup1();
} }, 1);
}





};
obj6122_SCActionDragDrop6184_droppedInsideTargetActions_10_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex = -1;
		$("#obj6122").trigger("obj6122_SCActionDragDrop6184_droppedInsideTargetActions_10_ended");
		
		return;
	}
	window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex = 1;
	





















};
obj6122_SCActionDragDrop6184_droppedInsideTargetActions_9_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex = -1;
		$("#obj6122").trigger("obj6122_SCActionDragDrop6184_droppedInsideTargetActions_9_ended");
		
		return;
	}
	window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6254();
function incrementCounter_6254() {
	window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount = obj6122_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount = window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount - 1;
if (window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount == 0) {
	obj6122_SCActionDragDrop6184_droppedInsideTargetActions_9_actionGroup1();
} }, 1);
}





};
obj6122_SCActionDragDrop6184_droppedInsideTargetActions_9_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex = -1;
		$("#obj6122").trigger("obj6122_SCActionDragDrop6184_droppedInsideTargetActions_9_ended");
		
		return;
	}
	window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex = 1;
	





















};
obj6122_SCActionDragDrop6184_droppedInsideTargetActions_8_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex = -1;
		$("#obj6122").trigger("obj6122_SCActionDragDrop6184_droppedInsideTargetActions_8_ended");
		
		return;
	}
	window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6252();
function incrementCounter_6252() {
	window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount = obj6122_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount = window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount - 1;
if (window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount == 0) {
	obj6122_SCActionDragDrop6184_droppedInsideTargetActions_8_actionGroup1();
} }, 1);
}





};
obj6122_SCActionDragDrop6184_droppedInsideTargetActions_8_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex = -1;
		$("#obj6122").trigger("obj6122_SCActionDragDrop6184_droppedInsideTargetActions_8_ended");
		
		return;
	}
	window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex = 1;
	





















};
obj6122_SCActionDragDrop6184_droppedInsideTargetActions_7_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex = -1;
		$("#obj6122").trigger("obj6122_SCActionDragDrop6184_droppedInsideTargetActions_7_ended");
		
		return;
	}
	window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6250();
function incrementCounter_6250() {
	window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount = obj6122_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount = window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount - 1;
if (window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount == 0) {
	obj6122_SCActionDragDrop6184_droppedInsideTargetActions_7_actionGroup1();
} }, 1);
}





};
obj6122_SCActionDragDrop6184_droppedInsideTargetActions_7_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex = -1;
		$("#obj6122").trigger("obj6122_SCActionDragDrop6184_droppedInsideTargetActions_7_ended");
		
		return;
	}
	window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex = 1;
	





















};
obj6122_SCActionDragDrop6184_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj6122").trigger("obj6122_SCActionDragDrop6184_droppedInsideTargetActions_6_ended");
		
		return;
	}
	window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6248();
function incrementCounter_6248() {
	window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount = obj6122_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount = window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj6122_SCActionDragDrop6184_droppedInsideTargetActions_6_actionGroup1();
} }, 1);
}





};
obj6122_SCActionDragDrop6184_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj6122").trigger("obj6122_SCActionDragDrop6184_droppedInsideTargetActions_6_ended");
		
		return;
	}
	window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	





















};
obj6122_SCActionDragDrop6184_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj6122").trigger("obj6122_SCActionDragDrop6184_droppedInsideTargetActions_5_ended");
		
		return;
	}
	window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6246();
function incrementCounter_6246() {
	window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount = obj6122_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount = window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj6122_SCActionDragDrop6184_droppedInsideTargetActions_5_actionGroup1();
} }, 1);
}





};
obj6122_SCActionDragDrop6184_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj6122").trigger("obj6122_SCActionDragDrop6184_droppedInsideTargetActions_5_ended");
		
		return;
	}
	window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	





















};
obj6122_SCActionDragDrop6184_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6122").trigger("obj6122_SCActionDragDrop6184_droppedInsideTargetActions_4_ended");
		
		return;
	}
	window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6244();
function incrementCounter_6244() {
	window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount = obj6122_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount = window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6122_SCActionDragDrop6184_droppedInsideTargetActions_4_actionGroup1();
} }, 1);
}





};
obj6122_SCActionDragDrop6184_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6122").trigger("obj6122_SCActionDragDrop6184_droppedInsideTargetActions_4_ended");
		
		return;
	}
	window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	





















};
obj6122_SCActionDragDrop6184_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6122").trigger("obj6122_SCActionDragDrop6184_droppedInsideTargetActions_3_ended");
		
		return;
	}
	window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6242();
function incrementCounter_6242() {
	window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount = obj6122_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount = window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6122_SCActionDragDrop6184_droppedInsideTargetActions_3_actionGroup1();
} }, 1);
}





};
obj6122_SCActionDragDrop6184_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6122").trigger("obj6122_SCActionDragDrop6184_droppedInsideTargetActions_3_ended");
		
		return;
	}
	window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	





















};
obj6122_SCActionDragDrop6184_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6122").trigger("obj6122_SCActionDragDrop6184_droppedInsideTargetActions_2_ended");
		
		return;
	}
	window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6240();
function incrementCounter_6240() {
	window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount = obj6122_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount = window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6122_SCActionDragDrop6184_droppedInsideTargetActions_2_actionGroup1();
} }, 1);
}





};
obj6122_SCActionDragDrop6184_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6122").trigger("obj6122_SCActionDragDrop6184_droppedInsideTargetActions_2_ended");
		
		return;
	}
	window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	





















};
obj6122_SCActionDragDrop6184_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6122").trigger("obj6122_SCActionDragDrop6184_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6238();
function incrementCounter_6238() {
	window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount = obj6122_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount = window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6122_SCActionDragDrop6184_droppedInsideTargetActions_actionGroup1();
} }, 1);
}





};
obj6122_SCActionDragDrop6184_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6122").trigger("obj6122_SCActionDragDrop6184_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj6124_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6124_onTouchDown_activeActionGroupIndex = -1;
		$("#obj6124").trigger("obj6124_onTouchDown_ended");
		
		return;
	}
	window.obj6124_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6382();
function runjs_6382() {
	window.obj6124_onTouchDown_runningActionsCount = obj6124_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj6124"));
	setTimeout(function() {
		window.obj6124_onTouchDown_runningActionsCount = window.obj6124_onTouchDown_runningActionsCount - 1;
if (window.obj6124_onTouchDown_runningActionsCount == 0) {
	obj6124_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj6124_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6124_onTouchDown_activeActionGroupIndex = -1;
		$("#obj6124").trigger("obj6124_onTouchDown_ended");
		
		return;
	}
	window.obj6124_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj6124");
//	action: dragDrop
//	target: obj6124 
dragDrop_6324();
function dragDrop_6324() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj6124_onTouchDown_runningActionsCount = obj6124_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj6124');
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
    	window.obj6124_onTouchDown_runningActionsCount = window.obj6124_onTouchDown_runningActionsCount - 1;
if (window.obj6124_onTouchDown_runningActionsCount == 0) {
	obj6124_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj6151","#obj6153","#obj6141","#obj6143","#obj6145","#obj6147","#obj6139","#obj6137","#obj6135","#obj6133");
    	var actionsOnDrop = new Array("SCActionDragDrop6184_droppedInsideTargetActions","SCActionDragDrop6184_droppedInsideTargetActions_2","SCActionDragDrop6184_droppedInsideTargetActions_3","SCActionDragDrop6184_droppedInsideTargetActions_4","SCActionDragDrop6184_droppedInsideTargetActions_5","SCActionDragDrop6184_droppedInsideTargetActions_6","SCActionDragDrop6184_droppedInsideTargetActions_7","SCActionDragDrop6184_droppedInsideTargetActions_8","SCActionDragDrop6184_droppedInsideTargetActions_9","SCActionDragDrop6184_droppedInsideTargetActions_10") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_6324 = false;
    	var dropped_id_6324;
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
					dropped_6324 = true;
					dropped_id_6324 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_6324) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
		}
    });
}











};
obj6124_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6124_onTouchDown_activeActionGroupIndex = -1;
		$("#obj6124").trigger("obj6124_onTouchDown_ended");
		
		return;
	}
	window.obj6124_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj6124_SCActionDragDrop6184_droppedInsideTargetActions_10_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex = -1;
		$("#obj6124").trigger("obj6124_SCActionDragDrop6184_droppedInsideTargetActions_10_ended");
		
		return;
	}
	window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6344();
function incrementCounter_6344() {
	window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount = obj6124_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount = window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount - 1;
if (window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount == 0) {
	obj6124_SCActionDragDrop6184_droppedInsideTargetActions_10_actionGroup1();
} }, 1);
}





};
obj6124_SCActionDragDrop6184_droppedInsideTargetActions_10_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex = -1;
		$("#obj6124").trigger("obj6124_SCActionDragDrop6184_droppedInsideTargetActions_10_ended");
		
		return;
	}
	window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex = 1;
	





















};
obj6124_SCActionDragDrop6184_droppedInsideTargetActions_9_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex = -1;
		$("#obj6124").trigger("obj6124_SCActionDragDrop6184_droppedInsideTargetActions_9_ended");
		
		return;
	}
	window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6342();
function incrementCounter_6342() {
	window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount = obj6124_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount = window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount - 1;
if (window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount == 0) {
	obj6124_SCActionDragDrop6184_droppedInsideTargetActions_9_actionGroup1();
} }, 1);
}





};
obj6124_SCActionDragDrop6184_droppedInsideTargetActions_9_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex = -1;
		$("#obj6124").trigger("obj6124_SCActionDragDrop6184_droppedInsideTargetActions_9_ended");
		
		return;
	}
	window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex = 1;
	





















};
obj6124_SCActionDragDrop6184_droppedInsideTargetActions_8_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex = -1;
		$("#obj6124").trigger("obj6124_SCActionDragDrop6184_droppedInsideTargetActions_8_ended");
		
		return;
	}
	window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6340();
function incrementCounter_6340() {
	window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount = obj6124_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount = window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount - 1;
if (window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount == 0) {
	obj6124_SCActionDragDrop6184_droppedInsideTargetActions_8_actionGroup1();
} }, 1);
}





};
obj6124_SCActionDragDrop6184_droppedInsideTargetActions_8_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex = -1;
		$("#obj6124").trigger("obj6124_SCActionDragDrop6184_droppedInsideTargetActions_8_ended");
		
		return;
	}
	window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex = 1;
	





















};
obj6124_SCActionDragDrop6184_droppedInsideTargetActions_7_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex = -1;
		$("#obj6124").trigger("obj6124_SCActionDragDrop6184_droppedInsideTargetActions_7_ended");
		
		return;
	}
	window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6338();
function incrementCounter_6338() {
	window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount = obj6124_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount = window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount - 1;
if (window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount == 0) {
	obj6124_SCActionDragDrop6184_droppedInsideTargetActions_7_actionGroup1();
} }, 1);
}





};
obj6124_SCActionDragDrop6184_droppedInsideTargetActions_7_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex = -1;
		$("#obj6124").trigger("obj6124_SCActionDragDrop6184_droppedInsideTargetActions_7_ended");
		
		return;
	}
	window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex = 1;
	





















};
obj6124_SCActionDragDrop6184_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj6124").trigger("obj6124_SCActionDragDrop6184_droppedInsideTargetActions_6_ended");
		
		return;
	}
	window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6336();
function incrementCounter_6336() {
	window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount = obj6124_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount = window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj6124_SCActionDragDrop6184_droppedInsideTargetActions_6_actionGroup1();
} }, 1);
}





};
obj6124_SCActionDragDrop6184_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj6124").trigger("obj6124_SCActionDragDrop6184_droppedInsideTargetActions_6_ended");
		
		return;
	}
	window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	





















};
obj6124_SCActionDragDrop6184_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj6124").trigger("obj6124_SCActionDragDrop6184_droppedInsideTargetActions_5_ended");
		
		return;
	}
	window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6334();
function incrementCounter_6334() {
	window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount = obj6124_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount = window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj6124_SCActionDragDrop6184_droppedInsideTargetActions_5_actionGroup1();
} }, 1);
}





};
obj6124_SCActionDragDrop6184_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj6124").trigger("obj6124_SCActionDragDrop6184_droppedInsideTargetActions_5_ended");
		
		return;
	}
	window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	





















};
obj6124_SCActionDragDrop6184_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6124").trigger("obj6124_SCActionDragDrop6184_droppedInsideTargetActions_4_ended");
		
		return;
	}
	window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6332();
function incrementCounter_6332() {
	window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount = obj6124_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount = window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6124_SCActionDragDrop6184_droppedInsideTargetActions_4_actionGroup1();
} }, 1);
}





};
obj6124_SCActionDragDrop6184_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6124").trigger("obj6124_SCActionDragDrop6184_droppedInsideTargetActions_4_ended");
		
		return;
	}
	window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	





















};
obj6124_SCActionDragDrop6184_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6124").trigger("obj6124_SCActionDragDrop6184_droppedInsideTargetActions_3_ended");
		
		return;
	}
	window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6330();
function incrementCounter_6330() {
	window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount = obj6124_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount = window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6124_SCActionDragDrop6184_droppedInsideTargetActions_3_actionGroup1();
} }, 1);
}





};
obj6124_SCActionDragDrop6184_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6124").trigger("obj6124_SCActionDragDrop6184_droppedInsideTargetActions_3_ended");
		
		return;
	}
	window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	





















};
obj6124_SCActionDragDrop6184_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6124").trigger("obj6124_SCActionDragDrop6184_droppedInsideTargetActions_2_ended");
		
		return;
	}
	window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6328();
function incrementCounter_6328() {
	window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount = obj6124_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount = window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6124_SCActionDragDrop6184_droppedInsideTargetActions_2_actionGroup1();
} }, 1);
}





};
obj6124_SCActionDragDrop6184_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6124").trigger("obj6124_SCActionDragDrop6184_droppedInsideTargetActions_2_ended");
		
		return;
	}
	window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	





















};
obj6124_SCActionDragDrop6184_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6124").trigger("obj6124_SCActionDragDrop6184_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6326();
function incrementCounter_6326() {
	window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount = obj6124_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount = window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6124_SCActionDragDrop6184_droppedInsideTargetActions_actionGroup1();
} }, 1);
}





};
obj6124_SCActionDragDrop6184_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6124").trigger("obj6124_SCActionDragDrop6184_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj6126_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6126_onTouchDown_activeActionGroupIndex = -1;
		$("#obj6126").trigger("obj6126_onTouchDown_ended");
		
		return;
	}
	window.obj6126_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6384();
function runjs_6384() {
	window.obj6126_onTouchDown_runningActionsCount = obj6126_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj6126"));
	setTimeout(function() {
		window.obj6126_onTouchDown_runningActionsCount = window.obj6126_onTouchDown_runningActionsCount - 1;
if (window.obj6126_onTouchDown_runningActionsCount == 0) {
	obj6126_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj6126_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6126_onTouchDown_activeActionGroupIndex = -1;
		$("#obj6126").trigger("obj6126_onTouchDown_ended");
		
		return;
	}
	window.obj6126_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj6126");
//	action: dragDrop
//	target: obj6126 
dragDrop_6346();
function dragDrop_6346() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj6126_onTouchDown_runningActionsCount = obj6126_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj6126');
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
    	window.obj6126_onTouchDown_runningActionsCount = window.obj6126_onTouchDown_runningActionsCount - 1;
if (window.obj6126_onTouchDown_runningActionsCount == 0) {
	obj6126_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj6151","#obj6153","#obj6141","#obj6143","#obj6145","#obj6147","#obj6139","#obj6137","#obj6135","#obj6133");
    	var actionsOnDrop = new Array("SCActionDragDrop6184_droppedInsideTargetActions","SCActionDragDrop6184_droppedInsideTargetActions_2","SCActionDragDrop6184_droppedInsideTargetActions_3","SCActionDragDrop6184_droppedInsideTargetActions_4","SCActionDragDrop6184_droppedInsideTargetActions_5","SCActionDragDrop6184_droppedInsideTargetActions_6","SCActionDragDrop6184_droppedInsideTargetActions_7","SCActionDragDrop6184_droppedInsideTargetActions_8","SCActionDragDrop6184_droppedInsideTargetActions_9","SCActionDragDrop6184_droppedInsideTargetActions_10") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_6346 = false;
    	var dropped_id_6346;
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
					dropped_6346 = true;
					dropped_id_6346 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_6346) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
		}
    });
}











};
obj6126_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6126_onTouchDown_activeActionGroupIndex = -1;
		$("#obj6126").trigger("obj6126_onTouchDown_ended");
		
		return;
	}
	window.obj6126_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj6126_SCActionDragDrop6184_droppedInsideTargetActions_10_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex = -1;
		$("#obj6126").trigger("obj6126_SCActionDragDrop6184_droppedInsideTargetActions_10_ended");
		
		return;
	}
	window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6366();
function incrementCounter_6366() {
	window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount = obj6126_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount = window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount - 1;
if (window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount == 0) {
	obj6126_SCActionDragDrop6184_droppedInsideTargetActions_10_actionGroup1();
} }, 1);
}





};
obj6126_SCActionDragDrop6184_droppedInsideTargetActions_10_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex = -1;
		$("#obj6126").trigger("obj6126_SCActionDragDrop6184_droppedInsideTargetActions_10_ended");
		
		return;
	}
	window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex = 1;
	





















};
obj6126_SCActionDragDrop6184_droppedInsideTargetActions_9_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex = -1;
		$("#obj6126").trigger("obj6126_SCActionDragDrop6184_droppedInsideTargetActions_9_ended");
		
		return;
	}
	window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6364();
function incrementCounter_6364() {
	window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount = obj6126_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount = window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount - 1;
if (window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount == 0) {
	obj6126_SCActionDragDrop6184_droppedInsideTargetActions_9_actionGroup1();
} }, 1);
}





};
obj6126_SCActionDragDrop6184_droppedInsideTargetActions_9_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex = -1;
		$("#obj6126").trigger("obj6126_SCActionDragDrop6184_droppedInsideTargetActions_9_ended");
		
		return;
	}
	window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex = 1;
	





















};
obj6126_SCActionDragDrop6184_droppedInsideTargetActions_8_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex = -1;
		$("#obj6126").trigger("obj6126_SCActionDragDrop6184_droppedInsideTargetActions_8_ended");
		
		return;
	}
	window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6362();
function incrementCounter_6362() {
	window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount = obj6126_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount = window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount - 1;
if (window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount == 0) {
	obj6126_SCActionDragDrop6184_droppedInsideTargetActions_8_actionGroup1();
} }, 1);
}





};
obj6126_SCActionDragDrop6184_droppedInsideTargetActions_8_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex = -1;
		$("#obj6126").trigger("obj6126_SCActionDragDrop6184_droppedInsideTargetActions_8_ended");
		
		return;
	}
	window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex = 1;
	





















};
obj6126_SCActionDragDrop6184_droppedInsideTargetActions_7_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex = -1;
		$("#obj6126").trigger("obj6126_SCActionDragDrop6184_droppedInsideTargetActions_7_ended");
		
		return;
	}
	window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6360();
function incrementCounter_6360() {
	window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount = obj6126_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount = window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount - 1;
if (window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount == 0) {
	obj6126_SCActionDragDrop6184_droppedInsideTargetActions_7_actionGroup1();
} }, 1);
}





};
obj6126_SCActionDragDrop6184_droppedInsideTargetActions_7_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex = -1;
		$("#obj6126").trigger("obj6126_SCActionDragDrop6184_droppedInsideTargetActions_7_ended");
		
		return;
	}
	window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex = 1;
	





















};
obj6126_SCActionDragDrop6184_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj6126").trigger("obj6126_SCActionDragDrop6184_droppedInsideTargetActions_6_ended");
		
		return;
	}
	window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6358();
function incrementCounter_6358() {
	window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount = obj6126_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount = window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj6126_SCActionDragDrop6184_droppedInsideTargetActions_6_actionGroup1();
} }, 1);
}





};
obj6126_SCActionDragDrop6184_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj6126").trigger("obj6126_SCActionDragDrop6184_droppedInsideTargetActions_6_ended");
		
		return;
	}
	window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	





















};
obj6126_SCActionDragDrop6184_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj6126").trigger("obj6126_SCActionDragDrop6184_droppedInsideTargetActions_5_ended");
		
		return;
	}
	window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6356();
function incrementCounter_6356() {
	window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount = obj6126_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount = window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj6126_SCActionDragDrop6184_droppedInsideTargetActions_5_actionGroup1();
} }, 1);
}





};
obj6126_SCActionDragDrop6184_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj6126").trigger("obj6126_SCActionDragDrop6184_droppedInsideTargetActions_5_ended");
		
		return;
	}
	window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	





















};
obj6126_SCActionDragDrop6184_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6126").trigger("obj6126_SCActionDragDrop6184_droppedInsideTargetActions_4_ended");
		
		return;
	}
	window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6354();
function incrementCounter_6354() {
	window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount = obj6126_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount = window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6126_SCActionDragDrop6184_droppedInsideTargetActions_4_actionGroup1();
} }, 1);
}





};
obj6126_SCActionDragDrop6184_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6126").trigger("obj6126_SCActionDragDrop6184_droppedInsideTargetActions_4_ended");
		
		return;
	}
	window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	





















};
obj6126_SCActionDragDrop6184_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6126").trigger("obj6126_SCActionDragDrop6184_droppedInsideTargetActions_3_ended");
		
		return;
	}
	window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6352();
function incrementCounter_6352() {
	window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount = obj6126_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount = window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6126_SCActionDragDrop6184_droppedInsideTargetActions_3_actionGroup1();
} }, 1);
}





};
obj6126_SCActionDragDrop6184_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6126").trigger("obj6126_SCActionDragDrop6184_droppedInsideTargetActions_3_ended");
		
		return;
	}
	window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	





















};
obj6126_SCActionDragDrop6184_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6126").trigger("obj6126_SCActionDragDrop6184_droppedInsideTargetActions_2_ended");
		
		return;
	}
	window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6350();
function incrementCounter_6350() {
	window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount = obj6126_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount = window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6126_SCActionDragDrop6184_droppedInsideTargetActions_2_actionGroup1();
} }, 1);
}





};
obj6126_SCActionDragDrop6184_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6126").trigger("obj6126_SCActionDragDrop6184_droppedInsideTargetActions_2_ended");
		
		return;
	}
	window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	





















};
obj6126_SCActionDragDrop6184_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6126").trigger("obj6126_SCActionDragDrop6184_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj6189 
incrementCounter_6348();
function incrementCounter_6348() {
	window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount = obj6126_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj6189_counterValue;
	obj6189_counterValue = obj6189_counterValue + 1;
	if (! obj6189_counterCanExceedTargetValue && obj6189_counterValue > obj6189_counterTargetValue) {
		obj6189_counterValue = obj6189_counterTargetValue;
	}
	if (oldValue != obj6189_counterValue) {
		$("#obj6189").trigger('SCEventCounterValueChange');
		$("#obj6189").trigger('SCEventCounterIncrease');
		if (obj6189_counterValue == obj6189_counterTargetValue)
			$("#obj6189").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount = window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6126_SCActionDragDrop6184_droppedInsideTargetActions_actionGroup1();
} }, 1);
}





};
obj6126_SCActionDragDrop6184_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6126").trigger("obj6126_SCActionDragDrop6184_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj6189_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6189_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6189").trigger("obj6189_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj6189_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	








//	action: wait
wait_6210();
function wait_6210() {
	window.obj6189_SCEventCounterReachedTargetValue_runningActionsCount = obj6189_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	setTimeout(function() {
		window.obj6189_SCEventCounterReachedTargetValue_runningActionsCount = window.obj6189_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj6189_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj6189_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 2000);
}












};
obj6189_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6189_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6189").trigger("obj6189_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj6189_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
//	target: page63
goToPage_6211();
function goToPage_6211() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../63/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(63))},200);
	}
}





















};
obj6189_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6189_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj6189").trigger("obj6189_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj6189_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	





















};
obj13056_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13056_onTap_activeActionGroupIndex = -1;
		$("#obj13056").trigger("obj13056_onTap_ended");
		
		return;
	}
	window.obj13056_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page60
goToPage_13058();
function goToPage_13058() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../60/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(60))},200);
	}
}





















};
obj13056_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13056_onTap_activeActionGroupIndex = -1;
		$("#obj13056").trigger("obj13056_onTap_ended");
		
		return;
	}
	window.obj13056_onTap_activeActionGroupIndex = 1;
	





















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
 *   obj6108: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj6108");
	var winTarget = document.getElementById("obj6108");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj6108").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj6108_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj6108_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj6108_onTouchDown_activeActionGroupIndex != -1) return;
var obj6108_onTouchDown_runningActionsCount = 0;
var obj6108_onTouchDown_loopCount = 0;
obj6108_onTouchDown_actionGroup0();
});


/*
 *
 *   obj6108: Event SCActionDragDrop6184_droppedInsideTargetActions_10
 *
 */
$("#obj6108").one("SCActionDragDrop6184_droppedInsideTargetActions_10", function(event) {
	if (window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex != -1) return;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount = 0;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_10_loopCount = 0;
obj6108_SCActionDragDrop6184_droppedInsideTargetActions_10_actionGroup0();
});
/*
 *
 *   obj6108: Event SCActionDragDrop6184_droppedInsideTargetActions_9
 *
 */
$("#obj6108").one("SCActionDragDrop6184_droppedInsideTargetActions_9", function(event) {
	if (window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex != -1) return;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount = 0;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_9_loopCount = 0;
obj6108_SCActionDragDrop6184_droppedInsideTargetActions_9_actionGroup0();
});
/*
 *
 *   obj6108: Event SCActionDragDrop6184_droppedInsideTargetActions_8
 *
 */
$("#obj6108").one("SCActionDragDrop6184_droppedInsideTargetActions_8", function(event) {
	if (window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex != -1) return;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount = 0;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_8_loopCount = 0;
obj6108_SCActionDragDrop6184_droppedInsideTargetActions_8_actionGroup0();
});
/*
 *
 *   obj6108: Event SCActionDragDrop6184_droppedInsideTargetActions_7
 *
 */
$("#obj6108").one("SCActionDragDrop6184_droppedInsideTargetActions_7", function(event) {
	if (window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex != -1) return;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount = 0;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_7_loopCount = 0;
obj6108_SCActionDragDrop6184_droppedInsideTargetActions_7_actionGroup0();
});
/*
 *
 *   obj6108: Event SCActionDragDrop6184_droppedInsideTargetActions_6
 *
 */
$("#obj6108").one("SCActionDragDrop6184_droppedInsideTargetActions_6", function(event) {
	if (window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex != -1) return;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_6_loopCount = 0;
obj6108_SCActionDragDrop6184_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj6108: Event SCActionDragDrop6184_droppedInsideTargetActions_5
 *
 */
$("#obj6108").one("SCActionDragDrop6184_droppedInsideTargetActions_5", function(event) {
	if (window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex != -1) return;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_5_loopCount = 0;
obj6108_SCActionDragDrop6184_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj6108: Event SCActionDragDrop6184_droppedInsideTargetActions_4
 *
 */
$("#obj6108").one("SCActionDragDrop6184_droppedInsideTargetActions_4", function(event) {
	if (window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex != -1) return;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_4_loopCount = 0;
obj6108_SCActionDragDrop6184_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj6108: Event SCActionDragDrop6184_droppedInsideTargetActions_3
 *
 */
$("#obj6108").one("SCActionDragDrop6184_droppedInsideTargetActions_3", function(event) {
	if (window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex != -1) return;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_3_loopCount = 0;
obj6108_SCActionDragDrop6184_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj6108: Event SCActionDragDrop6184_droppedInsideTargetActions_2
 *
 */
$("#obj6108").one("SCActionDragDrop6184_droppedInsideTargetActions_2", function(event) {
	if (window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex != -1) return;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_2_loopCount = 0;
obj6108_SCActionDragDrop6184_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj6108: Event SCActionDragDrop6184_droppedInsideTargetActions
 *
 */
$("#obj6108").one("SCActionDragDrop6184_droppedInsideTargetActions", function(event) {
	if (window.obj6108_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount = 0;
var obj6108_SCActionDragDrop6184_droppedInsideTargetActions_loopCount = 0;
obj6108_SCActionDragDrop6184_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj6116: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj6116");
	var winTarget = document.getElementById("obj6116");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj6116").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj6116_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj6116_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj6116_onTouchDown_activeActionGroupIndex != -1) return;
var obj6116_onTouchDown_runningActionsCount = 0;
var obj6116_onTouchDown_loopCount = 0;
obj6116_onTouchDown_actionGroup0();
});


/*
 *
 *   obj6116: Event SCActionDragDrop6184_droppedInsideTargetActions_10
 *
 */
$("#obj6116").one("SCActionDragDrop6184_droppedInsideTargetActions_10", function(event) {
	if (window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex != -1) return;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount = 0;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_10_loopCount = 0;
obj6116_SCActionDragDrop6184_droppedInsideTargetActions_10_actionGroup0();
});
/*
 *
 *   obj6116: Event SCActionDragDrop6184_droppedInsideTargetActions_9
 *
 */
$("#obj6116").one("SCActionDragDrop6184_droppedInsideTargetActions_9", function(event) {
	if (window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex != -1) return;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount = 0;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_9_loopCount = 0;
obj6116_SCActionDragDrop6184_droppedInsideTargetActions_9_actionGroup0();
});
/*
 *
 *   obj6116: Event SCActionDragDrop6184_droppedInsideTargetActions_8
 *
 */
$("#obj6116").one("SCActionDragDrop6184_droppedInsideTargetActions_8", function(event) {
	if (window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex != -1) return;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount = 0;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_8_loopCount = 0;
obj6116_SCActionDragDrop6184_droppedInsideTargetActions_8_actionGroup0();
});
/*
 *
 *   obj6116: Event SCActionDragDrop6184_droppedInsideTargetActions_7
 *
 */
$("#obj6116").one("SCActionDragDrop6184_droppedInsideTargetActions_7", function(event) {
	if (window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex != -1) return;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount = 0;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_7_loopCount = 0;
obj6116_SCActionDragDrop6184_droppedInsideTargetActions_7_actionGroup0();
});
/*
 *
 *   obj6116: Event SCActionDragDrop6184_droppedInsideTargetActions_6
 *
 */
$("#obj6116").one("SCActionDragDrop6184_droppedInsideTargetActions_6", function(event) {
	if (window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex != -1) return;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_6_loopCount = 0;
obj6116_SCActionDragDrop6184_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj6116: Event SCActionDragDrop6184_droppedInsideTargetActions_5
 *
 */
$("#obj6116").one("SCActionDragDrop6184_droppedInsideTargetActions_5", function(event) {
	if (window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex != -1) return;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_5_loopCount = 0;
obj6116_SCActionDragDrop6184_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj6116: Event SCActionDragDrop6184_droppedInsideTargetActions_4
 *
 */
$("#obj6116").one("SCActionDragDrop6184_droppedInsideTargetActions_4", function(event) {
	if (window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex != -1) return;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_4_loopCount = 0;
obj6116_SCActionDragDrop6184_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj6116: Event SCActionDragDrop6184_droppedInsideTargetActions_3
 *
 */
$("#obj6116").one("SCActionDragDrop6184_droppedInsideTargetActions_3", function(event) {
	if (window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex != -1) return;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_3_loopCount = 0;
obj6116_SCActionDragDrop6184_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj6116: Event SCActionDragDrop6184_droppedInsideTargetActions_2
 *
 */
$("#obj6116").one("SCActionDragDrop6184_droppedInsideTargetActions_2", function(event) {
	if (window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex != -1) return;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_2_loopCount = 0;
obj6116_SCActionDragDrop6184_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj6116: Event SCActionDragDrop6184_droppedInsideTargetActions
 *
 */
$("#obj6116").one("SCActionDragDrop6184_droppedInsideTargetActions", function(event) {
	if (window.obj6116_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount = 0;
var obj6116_SCActionDragDrop6184_droppedInsideTargetActions_loopCount = 0;
obj6116_SCActionDragDrop6184_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj6118: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj6118");
	var winTarget = document.getElementById("obj6118");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj6118").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj6118_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj6118_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj6118_onTouchDown_activeActionGroupIndex != -1) return;
var obj6118_onTouchDown_runningActionsCount = 0;
var obj6118_onTouchDown_loopCount = 0;
obj6118_onTouchDown_actionGroup0();
});


/*
 *
 *   obj6118: Event SCActionDragDrop6184_droppedInsideTargetActions_10
 *
 */
$("#obj6118").one("SCActionDragDrop6184_droppedInsideTargetActions_10", function(event) {
	if (window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex != -1) return;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount = 0;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_10_loopCount = 0;
obj6118_SCActionDragDrop6184_droppedInsideTargetActions_10_actionGroup0();
});
/*
 *
 *   obj6118: Event SCActionDragDrop6184_droppedInsideTargetActions_9
 *
 */
$("#obj6118").one("SCActionDragDrop6184_droppedInsideTargetActions_9", function(event) {
	if (window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex != -1) return;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount = 0;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_9_loopCount = 0;
obj6118_SCActionDragDrop6184_droppedInsideTargetActions_9_actionGroup0();
});
/*
 *
 *   obj6118: Event SCActionDragDrop6184_droppedInsideTargetActions_8
 *
 */
$("#obj6118").one("SCActionDragDrop6184_droppedInsideTargetActions_8", function(event) {
	if (window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex != -1) return;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount = 0;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_8_loopCount = 0;
obj6118_SCActionDragDrop6184_droppedInsideTargetActions_8_actionGroup0();
});
/*
 *
 *   obj6118: Event SCActionDragDrop6184_droppedInsideTargetActions_7
 *
 */
$("#obj6118").one("SCActionDragDrop6184_droppedInsideTargetActions_7", function(event) {
	if (window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex != -1) return;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount = 0;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_7_loopCount = 0;
obj6118_SCActionDragDrop6184_droppedInsideTargetActions_7_actionGroup0();
});
/*
 *
 *   obj6118: Event SCActionDragDrop6184_droppedInsideTargetActions_6
 *
 */
$("#obj6118").one("SCActionDragDrop6184_droppedInsideTargetActions_6", function(event) {
	if (window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex != -1) return;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_6_loopCount = 0;
obj6118_SCActionDragDrop6184_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj6118: Event SCActionDragDrop6184_droppedInsideTargetActions_5
 *
 */
$("#obj6118").one("SCActionDragDrop6184_droppedInsideTargetActions_5", function(event) {
	if (window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex != -1) return;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_5_loopCount = 0;
obj6118_SCActionDragDrop6184_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj6118: Event SCActionDragDrop6184_droppedInsideTargetActions_4
 *
 */
$("#obj6118").one("SCActionDragDrop6184_droppedInsideTargetActions_4", function(event) {
	if (window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex != -1) return;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_4_loopCount = 0;
obj6118_SCActionDragDrop6184_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj6118: Event SCActionDragDrop6184_droppedInsideTargetActions_3
 *
 */
$("#obj6118").one("SCActionDragDrop6184_droppedInsideTargetActions_3", function(event) {
	if (window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex != -1) return;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_3_loopCount = 0;
obj6118_SCActionDragDrop6184_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj6118: Event SCActionDragDrop6184_droppedInsideTargetActions_2
 *
 */
$("#obj6118").one("SCActionDragDrop6184_droppedInsideTargetActions_2", function(event) {
	if (window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex != -1) return;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_2_loopCount = 0;
obj6118_SCActionDragDrop6184_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj6118: Event SCActionDragDrop6184_droppedInsideTargetActions
 *
 */
$("#obj6118").one("SCActionDragDrop6184_droppedInsideTargetActions", function(event) {
	if (window.obj6118_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount = 0;
var obj6118_SCActionDragDrop6184_droppedInsideTargetActions_loopCount = 0;
obj6118_SCActionDragDrop6184_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj6120: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj6120");
	var winTarget = document.getElementById("obj6120");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj6120").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj6120_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj6120_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj6120_onTouchDown_activeActionGroupIndex != -1) return;
var obj6120_onTouchDown_runningActionsCount = 0;
var obj6120_onTouchDown_loopCount = 0;
obj6120_onTouchDown_actionGroup0();
});


/*
 *
 *   obj6120: Event SCActionDragDrop6184_droppedInsideTargetActions_10
 *
 */
$("#obj6120").one("SCActionDragDrop6184_droppedInsideTargetActions_10", function(event) {
	if (window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex != -1) return;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount = 0;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_10_loopCount = 0;
obj6120_SCActionDragDrop6184_droppedInsideTargetActions_10_actionGroup0();
});
/*
 *
 *   obj6120: Event SCActionDragDrop6184_droppedInsideTargetActions_9
 *
 */
$("#obj6120").one("SCActionDragDrop6184_droppedInsideTargetActions_9", function(event) {
	if (window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex != -1) return;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount = 0;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_9_loopCount = 0;
obj6120_SCActionDragDrop6184_droppedInsideTargetActions_9_actionGroup0();
});
/*
 *
 *   obj6120: Event SCActionDragDrop6184_droppedInsideTargetActions_8
 *
 */
$("#obj6120").one("SCActionDragDrop6184_droppedInsideTargetActions_8", function(event) {
	if (window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex != -1) return;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount = 0;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_8_loopCount = 0;
obj6120_SCActionDragDrop6184_droppedInsideTargetActions_8_actionGroup0();
});
/*
 *
 *   obj6120: Event SCActionDragDrop6184_droppedInsideTargetActions_7
 *
 */
$("#obj6120").one("SCActionDragDrop6184_droppedInsideTargetActions_7", function(event) {
	if (window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex != -1) return;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount = 0;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_7_loopCount = 0;
obj6120_SCActionDragDrop6184_droppedInsideTargetActions_7_actionGroup0();
});
/*
 *
 *   obj6120: Event SCActionDragDrop6184_droppedInsideTargetActions_6
 *
 */
$("#obj6120").one("SCActionDragDrop6184_droppedInsideTargetActions_6", function(event) {
	if (window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex != -1) return;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_6_loopCount = 0;
obj6120_SCActionDragDrop6184_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj6120: Event SCActionDragDrop6184_droppedInsideTargetActions_5
 *
 */
$("#obj6120").one("SCActionDragDrop6184_droppedInsideTargetActions_5", function(event) {
	if (window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex != -1) return;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_5_loopCount = 0;
obj6120_SCActionDragDrop6184_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj6120: Event SCActionDragDrop6184_droppedInsideTargetActions_4
 *
 */
$("#obj6120").one("SCActionDragDrop6184_droppedInsideTargetActions_4", function(event) {
	if (window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex != -1) return;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_4_loopCount = 0;
obj6120_SCActionDragDrop6184_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj6120: Event SCActionDragDrop6184_droppedInsideTargetActions_3
 *
 */
$("#obj6120").one("SCActionDragDrop6184_droppedInsideTargetActions_3", function(event) {
	if (window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex != -1) return;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_3_loopCount = 0;
obj6120_SCActionDragDrop6184_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj6120: Event SCActionDragDrop6184_droppedInsideTargetActions_2
 *
 */
$("#obj6120").one("SCActionDragDrop6184_droppedInsideTargetActions_2", function(event) {
	if (window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex != -1) return;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_2_loopCount = 0;
obj6120_SCActionDragDrop6184_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj6120: Event SCActionDragDrop6184_droppedInsideTargetActions
 *
 */
$("#obj6120").one("SCActionDragDrop6184_droppedInsideTargetActions", function(event) {
	if (window.obj6120_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount = 0;
var obj6120_SCActionDragDrop6184_droppedInsideTargetActions_loopCount = 0;
obj6120_SCActionDragDrop6184_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj6122: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj6122");
	var winTarget = document.getElementById("obj6122");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj6122").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj6122_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj6122_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj6122_onTouchDown_activeActionGroupIndex != -1) return;
var obj6122_onTouchDown_runningActionsCount = 0;
var obj6122_onTouchDown_loopCount = 0;
obj6122_onTouchDown_actionGroup0();
});


/*
 *
 *   obj6122: Event SCActionDragDrop6184_droppedInsideTargetActions_10
 *
 */
$("#obj6122").one("SCActionDragDrop6184_droppedInsideTargetActions_10", function(event) {
	if (window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex != -1) return;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount = 0;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_10_loopCount = 0;
obj6122_SCActionDragDrop6184_droppedInsideTargetActions_10_actionGroup0();
});
/*
 *
 *   obj6122: Event SCActionDragDrop6184_droppedInsideTargetActions_9
 *
 */
$("#obj6122").one("SCActionDragDrop6184_droppedInsideTargetActions_9", function(event) {
	if (window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex != -1) return;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount = 0;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_9_loopCount = 0;
obj6122_SCActionDragDrop6184_droppedInsideTargetActions_9_actionGroup0();
});
/*
 *
 *   obj6122: Event SCActionDragDrop6184_droppedInsideTargetActions_8
 *
 */
$("#obj6122").one("SCActionDragDrop6184_droppedInsideTargetActions_8", function(event) {
	if (window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex != -1) return;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount = 0;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_8_loopCount = 0;
obj6122_SCActionDragDrop6184_droppedInsideTargetActions_8_actionGroup0();
});
/*
 *
 *   obj6122: Event SCActionDragDrop6184_droppedInsideTargetActions_7
 *
 */
$("#obj6122").one("SCActionDragDrop6184_droppedInsideTargetActions_7", function(event) {
	if (window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex != -1) return;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount = 0;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_7_loopCount = 0;
obj6122_SCActionDragDrop6184_droppedInsideTargetActions_7_actionGroup0();
});
/*
 *
 *   obj6122: Event SCActionDragDrop6184_droppedInsideTargetActions_6
 *
 */
$("#obj6122").one("SCActionDragDrop6184_droppedInsideTargetActions_6", function(event) {
	if (window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex != -1) return;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_6_loopCount = 0;
obj6122_SCActionDragDrop6184_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj6122: Event SCActionDragDrop6184_droppedInsideTargetActions_5
 *
 */
$("#obj6122").one("SCActionDragDrop6184_droppedInsideTargetActions_5", function(event) {
	if (window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex != -1) return;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_5_loopCount = 0;
obj6122_SCActionDragDrop6184_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj6122: Event SCActionDragDrop6184_droppedInsideTargetActions_4
 *
 */
$("#obj6122").one("SCActionDragDrop6184_droppedInsideTargetActions_4", function(event) {
	if (window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex != -1) return;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_4_loopCount = 0;
obj6122_SCActionDragDrop6184_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj6122: Event SCActionDragDrop6184_droppedInsideTargetActions_3
 *
 */
$("#obj6122").one("SCActionDragDrop6184_droppedInsideTargetActions_3", function(event) {
	if (window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex != -1) return;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_3_loopCount = 0;
obj6122_SCActionDragDrop6184_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj6122: Event SCActionDragDrop6184_droppedInsideTargetActions_2
 *
 */
$("#obj6122").one("SCActionDragDrop6184_droppedInsideTargetActions_2", function(event) {
	if (window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex != -1) return;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_2_loopCount = 0;
obj6122_SCActionDragDrop6184_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj6122: Event SCActionDragDrop6184_droppedInsideTargetActions
 *
 */
$("#obj6122").one("SCActionDragDrop6184_droppedInsideTargetActions", function(event) {
	if (window.obj6122_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount = 0;
var obj6122_SCActionDragDrop6184_droppedInsideTargetActions_loopCount = 0;
obj6122_SCActionDragDrop6184_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj6124: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj6124");
	var winTarget = document.getElementById("obj6124");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj6124").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj6124_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj6124_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj6124_onTouchDown_activeActionGroupIndex != -1) return;
var obj6124_onTouchDown_runningActionsCount = 0;
var obj6124_onTouchDown_loopCount = 0;
obj6124_onTouchDown_actionGroup0();
});


/*
 *
 *   obj6124: Event SCActionDragDrop6184_droppedInsideTargetActions_10
 *
 */
$("#obj6124").one("SCActionDragDrop6184_droppedInsideTargetActions_10", function(event) {
	if (window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex != -1) return;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount = 0;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_10_loopCount = 0;
obj6124_SCActionDragDrop6184_droppedInsideTargetActions_10_actionGroup0();
});
/*
 *
 *   obj6124: Event SCActionDragDrop6184_droppedInsideTargetActions_9
 *
 */
$("#obj6124").one("SCActionDragDrop6184_droppedInsideTargetActions_9", function(event) {
	if (window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex != -1) return;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount = 0;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_9_loopCount = 0;
obj6124_SCActionDragDrop6184_droppedInsideTargetActions_9_actionGroup0();
});
/*
 *
 *   obj6124: Event SCActionDragDrop6184_droppedInsideTargetActions_8
 *
 */
$("#obj6124").one("SCActionDragDrop6184_droppedInsideTargetActions_8", function(event) {
	if (window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex != -1) return;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount = 0;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_8_loopCount = 0;
obj6124_SCActionDragDrop6184_droppedInsideTargetActions_8_actionGroup0();
});
/*
 *
 *   obj6124: Event SCActionDragDrop6184_droppedInsideTargetActions_7
 *
 */
$("#obj6124").one("SCActionDragDrop6184_droppedInsideTargetActions_7", function(event) {
	if (window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex != -1) return;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount = 0;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_7_loopCount = 0;
obj6124_SCActionDragDrop6184_droppedInsideTargetActions_7_actionGroup0();
});
/*
 *
 *   obj6124: Event SCActionDragDrop6184_droppedInsideTargetActions_6
 *
 */
$("#obj6124").one("SCActionDragDrop6184_droppedInsideTargetActions_6", function(event) {
	if (window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex != -1) return;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_6_loopCount = 0;
obj6124_SCActionDragDrop6184_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj6124: Event SCActionDragDrop6184_droppedInsideTargetActions_5
 *
 */
$("#obj6124").one("SCActionDragDrop6184_droppedInsideTargetActions_5", function(event) {
	if (window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex != -1) return;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_5_loopCount = 0;
obj6124_SCActionDragDrop6184_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj6124: Event SCActionDragDrop6184_droppedInsideTargetActions_4
 *
 */
$("#obj6124").one("SCActionDragDrop6184_droppedInsideTargetActions_4", function(event) {
	if (window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex != -1) return;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_4_loopCount = 0;
obj6124_SCActionDragDrop6184_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj6124: Event SCActionDragDrop6184_droppedInsideTargetActions_3
 *
 */
$("#obj6124").one("SCActionDragDrop6184_droppedInsideTargetActions_3", function(event) {
	if (window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex != -1) return;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_3_loopCount = 0;
obj6124_SCActionDragDrop6184_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj6124: Event SCActionDragDrop6184_droppedInsideTargetActions_2
 *
 */
$("#obj6124").one("SCActionDragDrop6184_droppedInsideTargetActions_2", function(event) {
	if (window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex != -1) return;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_2_loopCount = 0;
obj6124_SCActionDragDrop6184_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj6124: Event SCActionDragDrop6184_droppedInsideTargetActions
 *
 */
$("#obj6124").one("SCActionDragDrop6184_droppedInsideTargetActions", function(event) {
	if (window.obj6124_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount = 0;
var obj6124_SCActionDragDrop6184_droppedInsideTargetActions_loopCount = 0;
obj6124_SCActionDragDrop6184_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj6126: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj6126");
	var winTarget = document.getElementById("obj6126");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj6126").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj6126_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj6126_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj6126_onTouchDown_activeActionGroupIndex != -1) return;
var obj6126_onTouchDown_runningActionsCount = 0;
var obj6126_onTouchDown_loopCount = 0;
obj6126_onTouchDown_actionGroup0();
});


/*
 *
 *   obj6126: Event SCActionDragDrop6184_droppedInsideTargetActions_10
 *
 */
$("#obj6126").one("SCActionDragDrop6184_droppedInsideTargetActions_10", function(event) {
	if (window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_10_activeActionGroupIndex != -1) return;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_10_runningActionsCount = 0;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_10_loopCount = 0;
obj6126_SCActionDragDrop6184_droppedInsideTargetActions_10_actionGroup0();
});
/*
 *
 *   obj6126: Event SCActionDragDrop6184_droppedInsideTargetActions_9
 *
 */
$("#obj6126").one("SCActionDragDrop6184_droppedInsideTargetActions_9", function(event) {
	if (window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_9_activeActionGroupIndex != -1) return;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_9_runningActionsCount = 0;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_9_loopCount = 0;
obj6126_SCActionDragDrop6184_droppedInsideTargetActions_9_actionGroup0();
});
/*
 *
 *   obj6126: Event SCActionDragDrop6184_droppedInsideTargetActions_8
 *
 */
$("#obj6126").one("SCActionDragDrop6184_droppedInsideTargetActions_8", function(event) {
	if (window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_8_activeActionGroupIndex != -1) return;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_8_runningActionsCount = 0;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_8_loopCount = 0;
obj6126_SCActionDragDrop6184_droppedInsideTargetActions_8_actionGroup0();
});
/*
 *
 *   obj6126: Event SCActionDragDrop6184_droppedInsideTargetActions_7
 *
 */
$("#obj6126").one("SCActionDragDrop6184_droppedInsideTargetActions_7", function(event) {
	if (window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_7_activeActionGroupIndex != -1) return;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_7_runningActionsCount = 0;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_7_loopCount = 0;
obj6126_SCActionDragDrop6184_droppedInsideTargetActions_7_actionGroup0();
});
/*
 *
 *   obj6126: Event SCActionDragDrop6184_droppedInsideTargetActions_6
 *
 */
$("#obj6126").one("SCActionDragDrop6184_droppedInsideTargetActions_6", function(event) {
	if (window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_6_activeActionGroupIndex != -1) return;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_6_loopCount = 0;
obj6126_SCActionDragDrop6184_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj6126: Event SCActionDragDrop6184_droppedInsideTargetActions_5
 *
 */
$("#obj6126").one("SCActionDragDrop6184_droppedInsideTargetActions_5", function(event) {
	if (window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_5_activeActionGroupIndex != -1) return;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_5_loopCount = 0;
obj6126_SCActionDragDrop6184_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj6126: Event SCActionDragDrop6184_droppedInsideTargetActions_4
 *
 */
$("#obj6126").one("SCActionDragDrop6184_droppedInsideTargetActions_4", function(event) {
	if (window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_4_activeActionGroupIndex != -1) return;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_4_loopCount = 0;
obj6126_SCActionDragDrop6184_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj6126: Event SCActionDragDrop6184_droppedInsideTargetActions_3
 *
 */
$("#obj6126").one("SCActionDragDrop6184_droppedInsideTargetActions_3", function(event) {
	if (window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_3_activeActionGroupIndex != -1) return;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_3_loopCount = 0;
obj6126_SCActionDragDrop6184_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj6126: Event SCActionDragDrop6184_droppedInsideTargetActions_2
 *
 */
$("#obj6126").one("SCActionDragDrop6184_droppedInsideTargetActions_2", function(event) {
	if (window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_2_activeActionGroupIndex != -1) return;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_2_loopCount = 0;
obj6126_SCActionDragDrop6184_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj6126: Event SCActionDragDrop6184_droppedInsideTargetActions
 *
 */
$("#obj6126").one("SCActionDragDrop6184_droppedInsideTargetActions", function(event) {
	if (window.obj6126_SCActionDragDrop6184_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_runningActionsCount = 0;
var obj6126_SCActionDragDrop6184_droppedInsideTargetActions_loopCount = 0;
obj6126_SCActionDragDrop6184_droppedInsideTargetActions_actionGroup0();
});








































































































































































/*
 *
 *   obj6189: Event SCEventCounterReachedTargetValue
 *
 */
$("#obj6189").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj6189_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) return;
var obj6189_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj6189_SCEventCounterReachedTargetValue_loopCount = 0;
obj6189_SCEventCounterReachedTargetValue_actionGroup0();
});










/*
 *
 *   obj13056: Event Touch Down
 *
 */
 
$("#obj13056").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13056_onTap_activeActionGroupIndex != -1) return;
var obj13056_onTap_runningActionsCount = 0;
var obj13056_onTap_loopCount = 0;
obj13056_onTap_actionGroup0();
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
	
$("#obj6099").trigger('SCEventShow');
$("#obj6108").trigger('SCEventShow');
$("#obj6116").trigger('SCEventShow');
$("#obj6118").trigger('SCEventShow');
$("#obj6120").trigger('SCEventShow');
$("#obj6122").trigger('SCEventShow');
$("#obj6124").trigger('SCEventShow');
$("#obj6126").trigger('SCEventShow');
$("#obj6149").trigger('SCEventShow');
$("#obj6133").trigger('SCEventShow');
$("#obj6135").trigger('SCEventShow');
$("#obj6137").trigger('SCEventShow');
$("#obj6139").trigger('SCEventShow');
$("#obj6147").trigger('SCEventShow');
$("#obj6145").trigger('SCEventShow');
$("#obj6143").trigger('SCEventShow');
$("#obj6141").trigger('SCEventShow');
$("#obj6153").trigger('SCEventShow');
$("#obj6175").trigger('SCEventShow');
$("#obj6151").trigger('SCEventShow');
$("#obj6177").trigger('SCEventShow');
$("#obj6157").trigger('SCEventShow');
$("#obj6159").trigger('SCEventShow');
$("#obj6161").trigger('SCEventShow');
$("#obj6165").trigger('SCEventShow');
$("#obj6167").trigger('SCEventShow');
$("#obj6169").trigger('SCEventShow');
$("#obj6171").trigger('SCEventShow');
$("#obj6173").trigger('SCEventShow');
$("#obj6179").trigger('SCEventShow');
$("#obj6181").trigger('SCEventShow');
$("#obj16105").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});