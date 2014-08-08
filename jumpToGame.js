/**
 * loadGame get the setting values
 */
var resolWidth;
var resolHeight;

var gameSettings=document.getElementById("settings");

function jumptogame(){	
	var resol=document.getElementById("resol");
	
	self.location="./UFO_web.html?resol="+resol.value;
}

