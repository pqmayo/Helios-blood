var dc,dctx,diagbox;
var clickcount = 0;
var dialogue = new Array();

dialogue[0] = "*Class Has Ended*";
dialogue[1] = "*All Decided to pass the time at the rooftop*";
dialogue[2] = "Al: I will practice with all my might and become the greatest Java Programmer.";
dialogue[3] = "*Al heard footsteps*";
dialogue[4] = "Al : Is anyone there ?";
dialogue[5] = "*A silhouette of a man appeared, tho Al cant clearly see who the man is.*";
dialogue[6] = "Al : Who are you and Is there anything you need from me ?";
dialogue[7] = "*Man whispers in the wind.*";
dialogue[8] = "Unknown man: C - Man Activate";
dialogue[9] = "*By Instinct Al also activated his varchar.*";
dialogue[10] = "Al : Izanagi ! Activate !";
dialogue[11] = "*Out of nowhere the uknown man plunges and attacked Al, but Al was ready ";
dialogue[12] = "to defend himself.*";
dialogue[13] = "*their varchars fought ferociously*";
dialogue[14] = "* A teacher arrived *";
dialogue[15] = "*The unknown man fled swiftly *";
dialogue[16] = "Teacher : Stop the fight !!! ";
dialogue[17] = "Teacher : REPORT TO THE PRINCIPAL'S OFFICE NOW !";
dialogue[18] = "*Al alone was sent to the office alone since the uknown man successfully fled.*";





function dialogbox() {	
if (clickcount < 18) {

	onclickanim();
	
	if (clickcount > 4  && clickcount != 12 && clickcount <= 14){
	drawchar2(0,400,400);
	}
	else if (clickcount == 12) {
		stopmonsanim();
	}
	else if (clickcount >= 14){
		drawchar2(0,0,0);
	}

clickcount++;
dc=document.getElementById("canvas");
dctx=dc.getContext("2d");
dctx.rect(20,500,760,80);
dctx.fillStyle = "rgba(25, 25, 25, 0.7)";
dctx.fill();
dctx.fillStyle="white";
dctx.font="20px Arial";
dctx.fillText(dialogue[clickcount],30,520);
}
	

}