function Bird() {
 

        this.x = random(0,width);
        this.y = random(0,height);
        this.v_x = random(-1,1);
        this.v_y = random(-1,1);
        this.nostalgiaX = this.x;
        this.nostalgiaY = this.y;
        this.maxComida = -1.;
        this.maxVel = random(0.5,1.5)*birdMaxVelocity;

    

    this.resetNostalgia = function() {
        this.nostalgiaX = this.x;
        this.nostalgiaY = this.y;
        this.maxComida = this.comida();
    };

    this.display = function() {

        push();
        translate(this.x,this.y)
        rotate(atan2(this.v_y,this.v_x));
        stroke(255);
        colorMode(HSB);        
        h = map(this.distanceToPredator(),0,200,0,100);
        fill(h,100,100,1);
        triangle(0,2,0,-2.,10*this.velocidad()+1,2);
        colorMode(RGB);
        pop();
    };

    this.velocidad = function() {
        return sqrt(pow(this.v_x,2)  + pow(this.v_y,2));
    };

    this.comida = function() {
        return exp(-pow((this.x-food_x)/width,2) - pow((this.y - food_y)/height,2));
    };
    this.distanceToPredator = function() {
        return sqrt( pow(this.x - this.depredador.x,2) + pow(this.y - this.depredador.y,2));
    };   

    this.update = function(depredador,best) {

        this.depredador = depredador;

         if (this.maxComida <= this.comida()){

            this.resetNostalgia();
         }
        

        this.v_x += 2*cognitiveFactor*random()*(this.nostalgiaX - this.x)/width 
                            + 0.5*socialFactor*random()*(best.x - this.x)/width   
                            + 0.5*random()*fearFactor*exp(-this.distanceToPredator()/width)*(this.x - depredador.x)/width 
                            +  0.01*random(-1,1)*this.maxVel;

        this.v_y += 2*cognitiveFactor*random()*(this.nostalgiaY - this.y)/height 
                            + 0.5*socialFactor*random()*(best.y - this.y)/height   
                            + 0.5*random()*fearFactor*exp(-this.distanceToPredator()/height)*(this.y - depredador.y)/height 
                            + 0.01*random(-1,1)*this.maxVel;

        this.v_x = constrain(this.v_x, -this.maxVel,this.maxVel);
        this.v_y = constrain(this.v_y, -this.maxVel,this.maxVel);

        this.x += this.v_x;
        this.y += this.v_y;


        if (this.x <= 0) {
            this.x = 0
            this.v_x = -this.v_x
        };

         if (this.x >= width) {
            this.x = width;
            this.v_x = -this.v_x;        
            
        }

        if (this.y <= 0) {
            this.y = 0;
            this.v_y = -this.v_y;            
        }
            
        if (this.y >= height) {

            this.y = height;
            this.v_y = -this.v_y;
            
        }

        
    };



};