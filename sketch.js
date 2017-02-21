var canvas;
var birds = [];
var predator;
var best;
var food_x;
var food_y; 

function setup() {
    var width = 800;
    var height = 600;
    var canvas = createCanvas(width, height);
    food_x = random(0,width);
    food_y = random(0,height);
    canvas.parent("p5jsContainer");
    drawingContext.shadowOffsetX = 1;
    drawingContext.shadowOffsetY = -1;
    drawingContext.shadowBlur = 10;
    drawingContext.shadowColor = "white";
    for (var i = 0; i < numOfBirds; i++) {
        birds[i] = new Bird();
    }
    predator =  new Predator();
    cursor(CROSS);
    //frameRate(25);
    best = birds[0];

}

function mousePressed() {
    if (mouseX < 0 || mouseY < 0 ) {
        return;
    }  
    if ((width - mouseX)>0  && (height - mouseY) > 0 ) {
        food_x = mouseX;
        food_y = mouseY;
        for (var i = numOfBirds - 1; i >= 0; i--) {
            birds[i].resetNostalgia();
        }
    }

}


function draw() {

    background(51); 
    
    if (frameCount % 1E3 == 0) {
        food_x = random(width);
        food_y = random(height);
        for (var i = birds.length - 1; i >= 0; i--) {
            birds[i].resetNostalgia();
        }
    }

    var maxFood = -1;
    for (var i = numOfBirds - 1; i >= 0; i--) {

     

        birds[i].update(predator,best);
        birds[i].display();

        if (birds[i].comida() > maxFood) {
            maxFood = birds[i].comida();
            best = birds[i];
        } 


    };

    if (keyIsPressed === true && frameCount % 3 == 0) {
        if (key == 'q' ) {
            cognitiveFactor +=0.1;

        }
        if (key === 'a')
            cognitiveFactor -=0.1;
        if (key === 'z')
            cognitiveFactor = 0.0;
        if (key === 'w')
            socialFactor += 0.1;
        if (key === 's')
            socialFactor -= 0.1;
        if (key === 'x')
            socialFactor = 0.0;
        if (key === 'e')
            fearFactor += 0.1;
        if (key === 'd')
            fearFactor -= 0.1;
        if (key === 'c')
            fearFactor = 0.0;
    };


    predator.update(best);
    predator.display();

    noStroke();
    fill(255);
    text("Cognitive:", 10,20);  text(cognitiveFactor.toFixed(2),70,20);
    text("Social:",10,30);         text(socialFactor.toFixed(2), 70, 30);
    text("Fear:",10,40);            text(fearFactor.toFixed(2), 70,40);

    ellipseMode(CENTER);
    stroke(255);
    fill(0);
    ellipse(food_x,food_y,5,5);


    
};

