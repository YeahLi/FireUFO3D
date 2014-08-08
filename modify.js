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
