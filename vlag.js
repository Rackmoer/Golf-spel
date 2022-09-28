  class Flag{
      constructor(x,y,w,h){
      this.x = x;
      this.y = y;
      this.width = w;
      this.height = h;
      }
      
    
      draw(){
      image(this.x,this.y,this.width,this.height)
      this.vx /= this.gravity
      this.vy /= this.gravity
      this.x = this.x + this.vx;
      this.y = this.y + this.vy;
      
      //collision
      if (this.x > 795 || this.x < 25){
      this.vx = this.vx * -1;
      }
     
      if (this.y > 400 || this.y < 0){
      this.vy = this.vy * -1; 
        
      }
   }
  }