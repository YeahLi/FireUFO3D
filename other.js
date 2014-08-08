var button=document.getElementById("begin");
button.addEventListener("click", jumptogame, false);
var pcList=["800x600","1024x768","1280x800","1440x900","1920x1080","2560x1600"];

var trs=document.getElementsByTagName('tr');
for(var i=0;i<trs.length;i++){
	var tr=trs[i];
	if(window.orientation === undefined){
		tr.style.height="50px";
	}else{
		tr.style.height="100px";
	}
}

var resol=document.getElementById("resol");
for (var i = 0; i < pcList.length; i++) {
	var op=document.createElement("option");
	op.value=pcList[i];
	if (i==0) {
		op.selected=true;
	}
	var textnode=document.createTextNode(pcList[i]);
	op.appendChild(textnode);
	resol.appendChild(op);
}	