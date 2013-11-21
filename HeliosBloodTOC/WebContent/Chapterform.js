var dc, dctx;
var vi1;
var alpha = 0.0 ;
var fadeindly;

function init(){
	autoanim();
	draw();
	delay();
}

function autoanim() {
	dc = document.getElementById("canvas");
	dctx = dc.getContext("2d");
	
	vi1 = document.getElementById("chapter");
	document.getElementById("chapter").style.display = "none"; //hiding the img file

	dctx.rect(0,0,800,600);
	dctx.fillStyle = "white";
	dctx.fill();
}

function draw() {
	
	dctx.globalAlpha = alpha;
	dctx.rect(0,0,800,600);
	dctx.fillStyle = "white";
	dctx.fill();
	dctx.drawImage(vi1,230,200,350,80);	
	fade_in();
}

function fade_in() {
	if (alpha != 1.0) 
	{
		alpha += 0.5;
	fadeindly = setInterval("draw()",100);
	}
}


function delay() {
	setTimeout("nxtPage()", 9000);
}
