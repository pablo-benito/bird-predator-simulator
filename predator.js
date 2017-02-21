function Predator() { 

    this.x = random(width);
    this.y = random(height);
    this.v_x = random(-1,1);
    this.v_y = random(-1,1);
    

    this.display = function() {
        stroke(255);
        fill(255);
        ellipseMode(CENTER);
        ellipse(this.x,this.y,10,10);
    };

    this.update = function(best) {
        this.v_x += 0.3*(best.x  - this.x)/width ;
        this.v_y += 0.3*(best.y - this.y)/height;

        this.v_x = constrain(this.v_x,-predatorMaxVelocity,predatorMaxVelocity);
        this.v_y = constrain(this.v_y,-predatorMaxVelocity,predatorMaxVelocity);

        this.x += this.v_x;
        this.y += this.v_y;

        if (this.x <= 0) {
            this.x = 0
            this.v_x = -this.v_x
        };

        if (this.x >= width) {
            this.x = width
            this.v_x = -this.v_x                        
        }

        if (this.y <= 0) {
            this.y = 0
            this.v_y = -this.v_y            
        }

        if (this.y >= height) {
            this.y = height
            this.v_y = -this.v_y            
        }


    };



}