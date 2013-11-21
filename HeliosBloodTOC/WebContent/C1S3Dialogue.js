var dc,dctx,diagbox;
var clickcount = 0;
var dialogue = new Array();

dialogue[0] = "*Teacher enters class*";
dialogue[1] = "George: Okay class, since its our 1st day.";
dialogue[2] = "George: I want everyone to introduce yourselves.";







function dialogbox() {	
	
	if (clickcount < 3) {
	onclickanim();
	dc=document.getElementById("canvas");
	dctx=dc.getContext("2d");
	dctx.rect(20,500,760,80);
	dctx.fillStyle = "rgba(25, 25, 25, 0.7)";
	dctx.fill();
	dctx.fillStyle="white";
	dctx.font="20px Arial";
	dctx.fillText(dialogue[clickcount],30,520);
	}
	clickcount++;
		
	
	
}