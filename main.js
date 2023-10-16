function preload() {
    flower = loadImage('https://th.bing.com/th/id/R.1dde5359e7d159cad7abf01c0175b369?rik=kC6n%2f8d9NKgBDA&pid=ImgRaw&r=0')
}

function setup() {
    canvas = createCanvas(900, 800);
    canvas.position(350, 0);
}

function draw() {
    fill("yellow");
    stroke("yellow");
    rect(70,60,600,55);

    fill("yellow");
    stroke("yellow");
    rect(70,570,600,55);

    fill("yellow");
    stroke("yellow");
    rect(20,100,70,500);

    fill("yellow");
    stroke("yellow");
    rect(670,100,70,500);

    fill("purple");
    stroke("purple");
    circle(55,100,100);

    fill("purple");
    stroke("purple");
    circle(700,100,100);

    fill("purple");
    stroke("purple");
    circle(55,600,100);

    fill("purple");
    stroke("purple");
    circle(700,600,100);

    image(flower,130,190,500,300);
}