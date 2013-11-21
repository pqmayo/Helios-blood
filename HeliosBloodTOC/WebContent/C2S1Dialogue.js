var dc,dctx,diagbox;
var clickcount = 0;
var dialogue = new Array();

dialogue[0] = "*Al wakes up.*";
dialogue[1] = "Al: Its been a week since that uknown man humiliated me.";
dialogue[2] = "Al: however...";
dialogue[3] = "Al: I'm getting closer to everybody.";
dialogue[4] = "*Al contiues to get ready for school.*";
dialogue[5] = "*Al left for school.*";



function nxtPage(){
	
	window.location.assign("Chapter2Scene2.html"); // insert next scene
}


function dialogbox() {	
	if (clickcount < 6) {
	station();
	dc=document.getElementById("canvas");
	dctx=dc.getContext("2d");
	dctx.rect(20,500,760,80);
	dctx.fillStyle = "rgba(25, 25, 25, 0.7)";
	dctx.fill();
	dctx.fillStyle="white";
	dctx.font="20px Arial";
	dctx.fillText(dialogue[clickcount],30,520);
	}
	else {nxtPage();}
	clickcount++;
		
	
	
}