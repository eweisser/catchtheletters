var t = 0;
var initX = -20;
var initY = -20;
var randomInitEdge = 0;
var endX = 1910;
var endY = 1040;
var letterCurrentPosX = 0;
var letterCurrentPosY = 0;

var redVal = 222;
var greenVal = 222;
var blueVal = 222;
var letterAlpha = 255;

var randomLetterDecimal = 0;
var randomLetter = 'a';
var wildLetterSize = 0;
randomLetterDecimal = Math.random();

var fireTime = 0;
var capturedLetters = '';

var radarCenterX;
var radarCenterY;

var lettersGo;
var roundStartTime;

var needleTargetAngle;
var needleCurrentAngle;
var needleInitialAngle;

var laserSound;

function preload() {
    laserSound = loadSound('laser.wav');
    }

function setup() {
    createCanvas(displayWidth, displayHeight);
	frameRate(50);
	
	if (randomInitEdge == 0) {
		initY = -20;
		endY = displayHeight * 0.9;
	}
	else if (randomInitEdge == 1) {
		initX = displayWidth;
		endX = -20;
	}
	else if (randomInitEdge == 2) {
		initY = displayHeight*0.9;
		endY = -20;
	}
	else {
		initX = -20;
		endX = displayWidth;
	}

	letterCurrentPosX = initX;
	letterCurrentPosY = initY;
	
	wildLetterSize = (Math.random()*100+100);	//size 100 to 200
	textSize(wildLetterSize);	//size 100 to 200
	
	radarCenterX = displayWidth*0.15;
	radarCenterY = displayHeight*0.92;
	
	redVal = 50+Math.random()*180;
	greenVal = 50+Math.random()*180;
	blueVal = (460-redVal-greenVal <= 230) ? 460-redVal-greenVal:230;
	needleInitialAngle = PI/2;
	needleCurrentAngle = PI/2;
	
}

function draw() {
    //background(0);
	clear();
	cursor(CROSS);
	
	textFont('Courier');
	
if (lettersGo == true) {	
	
	
	
	if (abs(letterCurrentPosX-endX) < 10 && abs(letterCurrentPosY-endY < 10)) {
		
		letterAlpha = 255;
		
		randomLetterDecimal = Math.random();
		if (randomLetterDecimal < 0.1202) {
		  randomLetter = 'e';
		}
		else if (randomLetterDecimal < 0.2112) {
		  randomLetter = 't';
		}
		else if (randomLetterDecimal < 0.2924) {
		  randomLetter = 'a';
		}
		else if (randomLetterDecimal < 0.3692) {
		  randomLetter = 'o';
		}
		else if (randomLetterDecimal < 0.4423) {
		  randomLetter = 'i';
		}
		else if (randomLetterDecimal < 0.5118) {
		  randomLetter = 'n';
		}
		else if (randomLetterDecimal < 0.5746) {
		  randomLetter = 's';
		}
		else if (randomLetterDecimal < 0.6348) {
		  randomLetter = 'r';
		}
		else if (randomLetterDecimal < 0.694) {
		  randomLetter = 'h';
		}
		else if (randomLetterDecimal < 0.7372) {
		  randomLetter = 'd';
		}
		else if (randomLetterDecimal < 0.777) {
		  randomLetter = 'l';
		}
		else if (randomLetterDecimal < 0.8058) {
		  randomLetter = 'u';
		}
		else if (randomLetterDecimal < 0.8329) {
		  randomLetter = 'c';
		}
		else if (randomLetterDecimal < 0.859) {
		  randomLetter = 'm';
		}
		else if (randomLetterDecimal < 0.882) {
		  randomLetter = 'f';
		}
		else if (randomLetterDecimal < 0.9031) {
		  randomLetter = 'y';
		}
		else if (randomLetterDecimal < 0.924) {
		  randomLetter = 'w';
		}
		else if (randomLetterDecimal < 0.9443) {
		  randomLetter = 'g';
		}
		else if (randomLetterDecimal < 0.9625) {
		  randomLetter = 'p';
		}
		else if (randomLetterDecimal < 0.9774) {
		  randomLetter = 'b';
		}
		else if (randomLetterDecimal < 0.9885) {
		  randomLetter = 'v';
		}
		else if (randomLetterDecimal < 0.9954) {
		  randomLetter = 'k';
		}
		else if (randomLetterDecimal < 0.9971) {
		  randomLetter = 'x';
		}
		else if (randomLetterDecimal < 0.9982) {
		  randomLetter = 'q';
		}
		else if (randomLetterDecimal < 0.9992) {
		  randomLetter = 'j';
		}
		else {
		  randomletter = 'z';
		}
		
		wildLetterSize = (Math.random()*100+100);	//size 100 to 200
		textSize(wildLetterSize);	//size 100 to 200
		redVal = 50+Math.random()*180;
		greenVal = 50+Math.random()*180;
		blueVal = (460-redVal-greenVal <= 230) ? 460-redVal-greenVal:230;
		stroke(redVal,greenVal,blueVal,255);
		fill(redVal,greenVal,blueVal,255);
		
		initX = Math.random()*1910;
		initY = Math.random()*1076;
		endX = Math.random()*1910;
		endY = Math.random()*1076;
		randomInitEdge = random([0,1,2,3]);
		if (randomInitEdge == 0) {		// starts at top, moves down
			initY = -20;
			endY = displayHeight*0.9;
		}
		else if (randomInitEdge == 1) {		// starts at right, moves left
			initX = displayWidth;
			endX = -20;
		}
		else if (randomInitEdge == 2) {		// starts at bottom, moves up
			initY = displayHeight*0.9;
			endY = -20;
		}
		else {			// starts at left, moves right
			initX = -20;
			endX = displayWidth;
		}
		letterCurrentPosX = initX;
		letterCurrentPosY = initY;
		text(randomLetter,initX,initY);
	}
	letterCurrentPosX = letterCurrentPosX + (endX-initX)/100;
	letterCurrentPosY = letterCurrentPosY + (endY-initY)/100;
	stroke(redVal,greenVal,blueVal);	
	if (letterAlpha == 0) {
		noStroke();
	}
	fill(redVal,greenVal,blueVal,letterAlpha);
	text(randomLetter,letterCurrentPosX,letterCurrentPosY);		// wild letters flying across screen
	//noFill();
	//circle(letterCurrentPosX+textSize()/4,letterCurrentPosY-textSize()/4,100);		// bubble indicated desired targetable zone
	//line(initX,initY,endX,endY);
	
	if ((t-fireTime < 8) && (mouseY < displayHeight*0.84)) {		// laser display
		strokeWeight(1);
		stroke(96,0,0);
		fill(191,0,0);
		if (mouseX < displayWidth/2) {
			triangle(mouseX+2,mouseY,0,displayHeight*0.7-2,0,displayHeight*0.8+2);
			fill(255,0,0);		// bright red
			triangle(mouseX,mouseY,0,displayHeight*0.7,0,displayHeight*0.8);
		}
		else {
		triangle(mouseX-2,mouseY,displayWidth,displayHeight*0.7-2,displayWidth,displayHeight*0.8+2);
		fill(255,0,0);
		triangle(mouseX,mouseY,displayWidth,displayHeight*0.7,displayWidth,displayHeight*0.8);
		}
	}
	
}
	
	// spaceship console art:
	
	fill(70,70,85);		// big gray console rectangle 
	stroke(70,70,80);
	rect(0,displayHeight*0.84,displayWidth,displayHeight*0.16);
	
	stroke(0,0,0);		// red START button
	strokeWeight(1.5);
	fill(128,0,0);		
	circle(displayWidth*0.291,displayHeight*0.933,displayHeight*0.074);
	fill(191,0,0);
	circle(displayWidth*0.29,displayHeight*0.93,displayHeight*0.07);
	textSize(displayHeight*0.04);
	text('START',displayWidth*0.256,displayHeight*0.885);
	
	fill(7,25,7);	// very dark green
	circle(displayWidth*0.15,displayHeight*0.92,displayHeight*0.1);
	stroke(13,65,0); // dark green
	strokeWeight(2);
	noFill();
	circle(radarCenterX,radarCenterY,displayHeight*0.08);	//green ring 1
	circle(radarCenterX,radarCenterY,displayHeight*0.06);	//green ring 2
	circle(radarCenterX,radarCenterY,displayHeight*0.04);	//green ring 3
	circle(radarCenterX,radarCenterY,displayHeight*0.02);	//green ring 4
	line(radarCenterX,displayHeight*0.875,radarCenterX,displayHeight*0.965);	//green vert line
	line(displayWidth*0.125,radarCenterY,displayWidth*0.175,radarCenterY);	//green horiz line
	
	fill(0);	// vertical red-to-green panel
	noStroke();
	rect(displayWidth*0.19,displayHeight*0.855,displayWidth*0.03,displayHeight*0.12,6);		// black panel background
	fill(0,150,0);
	rect(displayWidth*0.195,displayHeight*0.86,displayWidth*0.02,displayHeight*0.008,3);	// dark red
	fill(0,205,0); //2
	rect(displayWidth*0.195,displayHeight*0.87,displayWidth*0.02,displayHeight*0.008,3);	// deep red
	fill(128,230,0); //3
	rect(displayWidth*0.195,displayHeight*0.88,displayWidth*0.02,displayHeight*0.008,3);	// red almost bright
	fill(255,255,0); //4
	rect(displayWidth*0.195,displayHeight*0.89,displayWidth*0.02,displayHeight*0.008,3);	// bright red
	fill(255,192,0); //5
	rect(displayWidth*0.195,displayHeight*0.9,displayWidth*0.02,displayHeight*0.008,3);		// red-orange
	fill(255,128,0);
	rect(displayWidth*0.195,displayHeight*0.91,displayWidth*0.02,displayHeight*0.008,3);	// orange
	fill(255,64,0);// 5
	rect(displayWidth*0.195,displayHeight*0.92,displayWidth*0.02,displayHeight*0.008,3);	// orange-yellow
	fill(255,0,0); //4
	rect(displayWidth*0.195,displayHeight*0.93,displayWidth*0.02,displayHeight*0.008,3);	// yellow
	fill(192,0,0); //3
	rect(displayWidth*0.195,displayHeight*0.94,displayWidth*0.02,displayHeight*0.008,3);	// yellow-green 1
	fill(128,0,0); // 2
	rect(displayWidth*0.195,displayHeight*0.95,displayWidth*0.02,displayHeight*0.008,3);	// deep red
	fill(88,0,0);
	rect(displayWidth*0.195,displayHeight*0.96,displayWidth*0.02,displayHeight*0.008,3);	// dark red
	
	
	fill(0);	// sine wave panel
	noStroke();
	rect(displayWidth*0.03,displayHeight*0.86,displayWidth*0.06,displayHeight*0.05,6);		// background
	stroke(13,65,0);
	strokeWeight(1);
	line(displayWidth*0.035,displayHeight*0.885,displayWidth*0.085,displayHeight*0.885);	//green horiz line
	noStroke();
	fill(0,168,0);
	for (i = displayWidth*0.035; i <= displayWidth*0.085; i++) {
		circle(i,displayHeight*0.885+15*sin((t+3*i)/24),2);
	}
	
	stroke(0);			// random half-moon needle gauge
	strokeWeight(2);
	fill(255);
	arc(displayWidth*0.06,displayHeight*0.975,displayWidth*0.06,displayWidth*0.06,PI,TWO_PI);
	line(displayWidth*0.03,displayHeight*0.975,displayWidth*0.09,displayHeight*0.975);
	for (i = -PI/2; i < PI/2; i = i+PI/8) {
		line(  displayWidth*0.06 + displayWidth*0.03*sin(i),  displayHeight*0.975 - displayWidth*0.03*cos(i),   displayWidth*0.06 + displayWidth*0.027*sin(i),  displayHeight*0.975 - displayWidth*0.027*cos(i)  );	// tick marks
	}
	if (needleTargetAngle == null) {
		needleTargetAngle = map(random(),0,1,0,PI);
		//needleTargetAngle = HALF_PI;
	}
	else if ( abs(needleTargetAngle-needleCurrentAngle) < 0.1  ) {
		needleInitialAngle = needleCurrentAngle;
		needleTargetAngle = map(random(),0,1,0,PI);
	}
	needleCurrentAngle = needleCurrentAngle + (needleTargetAngle-needleInitialAngle)/30;
	
	stroke(255,0,0);		// needle
	strokeWeight(3);
	line(displayWidth*0.06,displayHeight*0.97,displayWidth*0.06 + displayWidth*0.02*cos(needleCurrentAngle),displayHeight*0.97 - displayWidth*0.02*sin(needleCurrentAngle)   );
	
	

	
	fill(255);	// white
	stroke(50,50,80);
	rect(displayWidth*0.5,displayHeight*0.87,displayWidth*0.45,displayHeight*0.1,15);	// captured letter display
	fill(0);	// start printing of captured letters
	noStroke();
	textSize(50);
	textFont('Courier');
	text(capturedLetters.slice(0,25),displayWidth*0.51,displayHeight*0.91);
	if (capturedLetters.length > 25) {
		text(capturedLetters.slice(25,50),displayWidth*0.51,displayHeight*0.95);
	}
	
	
	
	rect(displayWidth*0.33,displayHeight*0.855,displayWidth*0.075,displayHeight*0.12,6);
	if (lettersGo == true) {		// timer
		textSize(96);
		noStroke();
		fill(233,233,0);
		textFont('Bahnschrift');
		text(floor((60*72 - t + roundStartTime)/72),displayWidth*0.34,displayHeight*0.94);
	}
	if ((t - roundStartTime) > 60*72) {
		lettersGo = false;
	}	
	
	textSize(wildLetterSize);	// reverting to original letter size for flying letters (size 100 to 200)	
	
	// sound control:
	
	translate(radarCenterX,radarCenterY);
	rotate(t/32);
	
	strokeWeight(1);		// little radar sweepy thing
	for (var angle = 0; angle <= PI/3; angle = (angle + PI/194)) {		// start with angle at 0, go until angle is pi/4.
		var alphaInterpolation = map(angle,0,PI/4,0,84);
		stroke(0,255,0,alphaInterpolation);
		line(0,0,displayHeight*0.045*cos(angle),displayHeight*0.045*sin(angle)  );
	}
	
	// the following was the original code for the sweepy radar thing before it got all complicated with rotate and translate.
	//strokeWeight(1);		// little radar sweepy thing
	//for (let angle = 0; angle <= PI/4; angle = (angle + PI/256)) {		// start with angle at 0, go until angle is pi/4.
	//	let alphaInterpolation = map(angle,0,PI/4,0,84);
	//	stroke(0,255,0,alphaInterpolation);
	//	line(radarCenterX,radarCenterY,radarCenterX+(displayHeight*0.045*cos(angle)),radarCenterY+(displayHeight*0.045*sin(angle))  );
	//}	
	
	if (lettersGo == true && (t - roundStartTime) > 55*72  ) {		// red flash
		fill(255,0,0,abs(72*sin(t/16)));
		rect(-2000,-2000,4000,4000);
	}
	
	t = t+1;
}

function mousePressed() {
  fireTime = t;
  //if (abs(letterCurrentPosX-mouseX) < 50 && abs(letterCurrentPosY-mouseY < 50) && (mouseY < displayHeight*0.84)  ) {		// old target zone
  if (abs(letterCurrentPosX+textSize()/4-mouseX) < 50 && abs(letterCurrentPosY-textSize()/4-mouseY < 50) && (mouseY < displayHeight*0.84)  ) {
	  letterAlpha = 0;
	  capturedLetters = capturedLetters + randomLetter;
  }
  if (  pow((mouseX-displayWidth*0.29),2) + pow((mouseY - displayHeight*0.93),2) < pow((displayHeight*0.035),2)   ) {
	  lettersGo = true;
	  roundStartTime = t;
  }
  laserSound.play();
}
