class Iron{
	cconstructor(x, y) {
        var options = {
          'density':0.8,
          'friction': 3,
          'restitution':30
        };
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 150;
        this.height = 40;
        World.add(world, this.body);
      };
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("red");
			fill("yellow");
			

			pop()
	}

}