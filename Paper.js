class Paper{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options={
        isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

        this.image=loadImage("paper.png")
		Matter.Bodies.circle(50, 100, 10)

	}
	display()
	{

			
            imageMode(CENTER);
			image(this.image, 100, 593, this.width, this.height);
			
	}

}