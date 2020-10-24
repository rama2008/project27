class Roof
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, 10, 10 , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var roofPos=this.body.position;		

			push()
			translate(roofPos.x, roofPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(200,200,this.w, this.w);
			pop()
			
	}

}
