var man;

function setup() {
  createCanvas(640, 360);
	man=new Person();
}

function draw() {
	background(200);
	man.update();
	man.display();
}
	
