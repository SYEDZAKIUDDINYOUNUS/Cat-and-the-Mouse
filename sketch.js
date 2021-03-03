var garden, gardenImage;

var cat, catImage, cat_Running, catImg2, catImg3, catImg4, catLastImage;

var rat, ratImage,ratTeasingImage,ratDetectiveImage,ratImg4;

function preload() {
    //load the images here  



    gardenImage = loadImage("garden.png")

    catImage = loadImage("cat1.png")

    ratImage = loadImage("mouse1.png")

    ratImg4 = loadImage("mouse4.png") 

    ratTeasingImage = loadAnimation("mouse2.png","mouse3.png")

    ratDetectiveImage = loadImage("mouse4.png")

    catImg2 = loadImage("cat2.png");

    catImg3 = loadImage("cat3.png")

    cat_Running = loadAnimation(catImg2, catImg3);

    catImg4 = loadImage("cat4.png")

    catLastImage = loadAnimation(catImg4);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    //create tom and jerry sprites here
    garden = createSprite(width / 2, height / 2);
    garden.scale = "1.21";
    garden.addImage(gardenImage);

    cat = createSprite(830, 480)
    cat.scale = "0.1";
    cat.addImage(catImage)

    rat = createSprite(300, 500);
    rat.scale = "0.1";
    rat.addImage(ratImage)
}

function draw() {

    background("red");
    //Write condition here to evalute if tom and jerry collide

    if (cat.x - rat.x < (cat.width - rat.width) / 2) {
        cat.velocityX = 0;
        cat.addAnimation("catLastImage", catImg4);
        cat.changeAnimation("catLastImage")
        cat.x = 369;
        cat.y = 503;
        rat.addAnimation("ratDetectiveImage",ratImg4)
        rat.changeAnimation("ratDetectiveImage")
    }
    keyPressed();
    drawSprites();
}


function keyPressed() {

    //For moving and changing animation write code here

    if (keyCode === LEFT_ARROW) {
        cat.velocityX = -5;
        cat.addAnimation("cat_Running", catImg2, catImg3);
        cat.changeAnimation("cat_Running");

        rat.addAnimation("ratTeasingImage","mouse2.png","mouse3.png")
        rat.changeAnimation("ratTeasingImage")
    }

}
