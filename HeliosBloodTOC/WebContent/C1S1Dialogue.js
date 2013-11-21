var dc,dctx,diagbox;
var clickcount = 0;
var dialogue = new Array();

dialogue[0] = "*Al walks to school*";
dialogue[1] = "*As he looks towards the building*";
dialogue[2] = "Father, I'm one step closer to being your son. Your living legacy.";







function dialogbox() {	
	
	if (clickcount < 3){
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
	clickcount++;
}