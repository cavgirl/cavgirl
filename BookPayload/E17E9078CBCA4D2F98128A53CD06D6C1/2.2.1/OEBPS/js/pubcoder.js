var PubCoder = {
	project: {
		id : "",
		title : ""
	},
	page: {
		id : "",
		title : "",
		alias : ""
	},
	objects: {},
	
	pages: {
		//
"page11167": "../1/page.xhtml", 
"page14781": "../2/page.xhtml", 
"page9244": "../3/page.xhtml", 
"page588": "../4/page.xhtml", 
"page770": "../5/page.xhtml", 
"page9335": "../6/page.xhtml", 
"page9811": "../7/page.xhtml", 
"page13308": "../8/page.xhtml", 
"page13467": "../9/page.xhtml", 
"page13373": "../10/page.xhtml", 
"page3320": "../11/page.xhtml", 
"page3621": "../12/page.xhtml", 
"page7284": "../13/page.xhtml", 
"page7300": "../14/page.xhtml", 
"page7307": "../15/page.xhtml", 
"page1142": "../16/page.xhtml", 
"page13556": "../17/page.xhtml", 
"page13576": "../18/page.xhtml", 
"page13609": "../19/page.xhtml", 
"page3365": "../20/page.xhtml", 
"page3674": "../21/page.xhtml", 
"page6945": "../22/page.xhtml", 
"page1605": "../23/page.xhtml", 
"page1674": "../24/page.xhtml", 
"page13650": "../25/page.xhtml", 
"page13667": "../26/page.xhtml", 
"page3410": "../27/page.xhtml", 
"page15078": "../28/page.xhtml", 
"page15097": "../29/page.xhtml", 
"page15262": "../30/page.xhtml", 
"page15494": "../31/page.xhtml", 
"page2585": "../32/page.xhtml", 
"page2650": "../33/page.xhtml", 
"page13719": "../34/page.xhtml", 
"page3106": "../35/page.xhtml", 
"page3455": "../36/page.xhtml", 
"page15565": "../37/page.xhtml", 
"page15578": "../38/page.xhtml", 
"page2398": "../39/page.xhtml", 
"page2463": "../40/page.xhtml", 
"page3088": "../41/page.xhtml", 
"page13790": "../42/page.xhtml", 
"page3500": "../43/page.xhtml", 
"page3833": "../44/page.xhtml", 
"page5072": "../45/page.xhtml", 
"page5461": "../46/page.xhtml", 
"page5222": "../47/page.xhtml", 
"page5519": "../48/page.xhtml", 
"page5281": "../49/page.xhtml", 
"page5576": "../50/page.xhtml", 
"page2773": "../51/page.xhtml", 
"page2838": "../52/page.xhtml", 
"page3070": "../53/page.xhtml", 
"page13887": "../54/page.xhtml", 
"page3545": "../55/page.xhtml", 
"page3886": "../56/page.xhtml", 
"page5636": "../57/page.xhtml", 
"page5688": "../58/page.xhtml", 
"page5637": "../59/page.xhtml", 
"page15667": "../60/page.xhtml", 
"page1905": "../61/page.xhtml", 
"page13907": "../62/page.xhtml", 
"page1690": "../63/page.xhtml", 
"page14519": "../64/page.xhtml", 
"page14483": "../65/page.xhtml", 
	},
	
	Events: {
		Run: 'SCEventRun',
		Shake: 'SCEventShake',
		Show: 'SCEventShow',
		SwipeDown: 'SCswipedown',
		SwipeLeft: 'SCswipeleft',
		SwipeRight: 'SCswiperight',
		SwipeUp: 'SCswipeup',
		PinchClose: window.pinchclose,
		PinchOpen: window.pinchopen,
		Tap: 'click',
		TouchDown: window.touchDownEvent,
		TouchUp: window.touchUpEvent,
		PageLoad: 'SCEventPageLoad',
		PagePlay: 'SCEventPagePlay',
		PageReady: 'SCEventPageReady'
	},
	isAndroidReader: (typeof(Android) !== "undefined" || navigator.userAgent.indexOf("PubCoderReaderAndroidUA") > -1) ,
	isAndroid: (navigator.userAgent.toLowerCase().indexOf("android") > -1),
	isQuickPreview: false,
	
	Accelerometer: {
		Enabled: true,
		X: 0,
		Y: 0
	},
	callID: 0,
	call: function (methodName, methodParameters) {
		PubCoder.callID++;
		window.status = JSON.stringify ({"method" : methodName, "params" : methodParameters, "id" : PubCoder.callID} );
		window.status = ' ';
	},
	alert: function (alertTitle, alertText) {
		if (typeof(alertText) == "undefined") {
			$("#SCDefaultAlertTitle").hide();
			alertText = alertTitle;
			alertTitle = "";
		} else {
			$("#SCDefaultAlertTitle").show();
		}
		$("#SCDefaultAlertTitle").html(alertTitle);
		$("#SCDefaultAlertMsg").html(alertText);
		try {
			$('[data-remodal-id=SCDefaultAlert]').remodal().open();
		} catch (e) {
			// for modals opened too early, wait and retry
			setTimeout(function() { PubCoder.alert(alertTitle, alertText) }, 1000);
		}
	},
	getCurrentPageNumber: function () {
		var locPieces = window.location.href.split("/");
		return (locPieces[locPieces.length-2]);
	},
	getObjectWithId: function (objID) {
		// this returns the JQuery object, regardless of the objID parameter being "obj4" or "#obj4" or $("#obj4")
		if (typeof objID == "string" && objID.indexOf("#") != 0) objID = "#" + objID;
		return $("#" + $(objID).attr("id"));
	},
	getObjectsWithClass: function (className) {
		return $("." + className);
	},
	getPageObjectsWithClass: function (className) {
		return $(".SCContent ." + className);
	},
	getOverlayObjectsWithClass: function (className) {
		return $(".SCOverlay ." + className);
	},
	getLayers: function(containerName) {
		var layers = $("." + containerName + ">.SCPageObject");
		layers.sort(function(a, b) {
		    a = parseInt($(a).css("z-index"));
		    b = parseInt($(b).css("z-index"));
		    if (a == b) { return 0; }
		    if (a > b) {
		        return 1;
		    } else {
		        return -1;
		    }
		});
		return layers;
	},
	moveLayer: function(containerName, sourceIndex, destIndex) {
		var layers = this.getLayers(containerName);
		var layersNew = layers.slice(0);
		var objToMove = layersNew[sourceIndex];
		layersNew.splice(sourceIndex, 1);
		layersNew.splice(destIndex, 0, objToMove);
		for (var i = layers.length - 1; i >= 0; i--) {
			var attr = $(layers[i]).attr("data-SCPageObject-InitialLayer")
			if (typeof attr == typeof undefined) $(layers[i]).attr("data-SCPageObject-InitialLayer", i.toString())
			layers[i] = $(layers[i]).css("z-index");
		};
		for (var i = layers.length - 1; i >= 0; i--) {
			$(layersNew[i]).css("z-index", layers[i]);
		};
	},
	getPageObjectContainerName: function(obj) {
		var objParent = obj.parent();
		var knownContainers = ["SCContent", "SCOverlay", "SCContentOverlay", "SCContentUnderlay"];
		for (var i = knownContainers.length - 1; i >= 0; i--) {
			if (objParent.hasClass(knownContainers[i])) return knownContainers[i];
		};
		return null;
	},
	bringPageObjectToFront: function(obj) {
		obj = PubCoder.getObjectWithId(obj);
		var containerName = this.getPageObjectContainerName(obj);
		var layers = this.getLayers(containerName);
		var i = layers.index(obj);
		if (i < 0) return;
		if (i >= layers.length-1) return;
		this.moveLayer(containerName, i, layers.length-1);
	},
	bringPageObjectForward: function(obj) {
		obj = PubCoder.getObjectWithId(obj);
		var containerName = this.getPageObjectContainerName(obj);
		var layers = this.getLayers(containerName);
		var i = layers.index(obj);
		if (i < 0) return;
		if (i >= layers.length-1) return;
		this.moveLayer(containerName, i, i+1);
	},
	sendPageObjectBackward: function(obj) {
		obj = PubCoder.getObjectWithId(obj);
		var containerName = this.getPageObjectContainerName(obj);
		var layers = this.getLayers(containerName);
		var i = layers.index(obj);
		if (i <= 0) return;
		this.moveLayer(containerName, i, i-1);
	},
	sendPageObjectToBack: function(obj) {
		obj = PubCoder.getObjectWithId(obj);
		var containerName = this.getPageObjectContainerName(obj);
		var layers = this.getLayers(containerName);
		var i = layers.index(obj);
		if (i <= 0) return;
		this.moveLayer(containerName, i, 0);
	},
	bringPageObjectToInitialLayer: function(obj) {
		obj = PubCoder.getObjectWithId(obj);
		var containerName = this.getPageObjectContainerName(obj);
		var layers = this.getLayers(containerName);
		var i = layers.index(obj);
		var attr = $(layers[i]).attr("data-SCPageObject-InitialLayer");
		if (typeof attr == typeof undefined) return
		this.moveLayer(containerName, i, parseInt(attr));
	},
	getCounterValue: function(obj) {
		obj = PubCoder.getObjectWithId(obj);
		return eval("window." + $(obj).attr("id") + "_counterValue");
	},
	switchText: function(obj, newText) {
		obj = PubCoder.getObjectWithId(obj);
		if (newText.indexOf("<") < 0) newText = "<p>" + newText + "</p>";
		var objContent = $("#" + obj.attr("id") + "_content");
		$(objContent).html(newText);
	}
	
};
PubCoder.events = PubCoder.Events;
var pubcoder = PubCoder;