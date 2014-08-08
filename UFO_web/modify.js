var content=document.getElementById('contents');
if(content){
	// console.log(content);
	var ocssRules = document.styleSheets[0].cssRules;
	var contentStyle=ocssRules[6].style;
	contentStyle.width=resolWidth+"px";
	// console.log("contentWidth:"+contentStyle.width);
}else{
	console.log("contents error");
}


var uplayer=document.getElementById('unityPlayer');
if(uplayer){
	var ocssRules = document.styleSheets[0].cssRules;
	var uplayerStyle=ocssRules[11].style;
	// console.log(uplayerStyle);
	uplayerStyle.width=resolWidth+"px";
	// alert(uplayerStyle.width);
}else{
	console.log("unityPlayer error");
}
function SayHello( arg )
{
    // show the message
    alert( arg );
}
function setWidth( arg )
{
    // show the message
    resolWidth=arg;
    // console.log(resolWidth);
}
function setHeight( arg )
{
    // show the message
    resolHeight=arg;
    // console.log(resolHeight);
    changeResolution();
}
function changeResolution()
{
	config.width=resolWidth;
	config.height=resolHeight;
	u = new UnityObject2(config);
	u.initPlugin(jQuery("#unityPlayer")[0], "UFO_web.unity3d");

	var content=document.getElementById('contents');
	if(content){
		// console.log(content);
		var ocssRules = document.styleSheets[0].cssRules;
		var contentStyle=ocssRules[6].style;
		contentStyle.width=resolWidth+"px";
		// console.log("contentWidth:"+contentStyle.width);
	}else{
		console.log("contents error");
	}


	var uplayer=document.getElementById('unityPlayer');
	if(uplayer){
		var ocssRules = document.styleSheets[0].cssRules;
		var uplayerStyle=ocssRules[11].style;
		// console.log(uplayerStyle);
		uplayerStyle.width=resolWidth+"px";
		// alert(uplayerStyle.width);
	}else{
		console.log("unityPlayer error");
	}
}