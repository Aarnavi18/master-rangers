var canvas=new fabric.Canvas('myCanvas');
// Create canvas variable
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var player_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image,function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:block_y,
            left:block_x
        });
        canvas.add(player_object);
	});
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') 
	{
		new_image("rr.jpg");
		console.log("rr")
	}
	
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image("gr.png");
        console.log("gr")
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image("yr.png");
        console.log("yr")
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image("pr.png");
        console.log("pr")
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new_image("br.png");
        console.log("br")
	}
	
}

