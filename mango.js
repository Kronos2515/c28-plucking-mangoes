class Mango {
    constructor(x, y, diametre){
        var options = {
            isStatic :true,
            'restituition' : 0.5,
            'friciton' : 1.0
        }

this.body = Bodies.circle(x , y , diametre, options)    ;
this.diametre = diametre;
this.image = loadImage("mango.png");
World.add(world, mango);            
    }

display(){
push();
translate(this.body.position.x, this.body.position.y);
ImageMode(CENTER);    
image(this.image,0 , 0, this.diametre);
pop();
}

}