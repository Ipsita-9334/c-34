const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, ball, rope;
var brick1, bbrick2, brick3, brick4, brick4, brick5, brick6, brick7, brick8,brick9, brick10, brick11, brick12, brick13, brick14,
brick15, brick16, brick17, brick18, brick19, brick20;

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 600, 1200, 20);
    ball = new Ball(200, 200);
    rope = new Rope(ball.body, {x: 500, y:50});

    brick1 = new Brick(900,100, 70,70);
    brick2 = new Brick(900,100, 70,70);
    brick3 = new Brick(900,100, 70,70);
    brick4 = new Brick(900,100, 70,70);
    brick5 = new Brick(900,100, 70,70);
    brick6 = new Brick(900,100, 70,70);

    brick7 = new Brick(800,100, 70,70);
    brick8 = new Brick(800,100, 70,70);
    brick9 = new Brick(800,100, 70,70);
    brick10 = new Brick(800,100, 70,70);
    brick11 = new Brick(800,100, 70,70);
    brick12 = new Brick(800,100, 70,70);

    brick13 = new Brick(700,100, 70,70);
    brick14 = new Brick(700,100, 70,70);
    brick15 = new Brick(700,100, 70,70);
    brick16 = new Brick(700,100, 70,70);
    brick17 = new Brick(700,100, 70,70);
    brick18 = new Brick(700,100, 70,70);
    brick19 = new Brick(700,100, 70,70);
    brick20 = new Brick(700,100, 70,70);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();
    ball.display();
    rope.display();

    brick1.display();
    brick2.display();
    brick3.display();
    brick4.display();
    brick5.display();
    brick6.display();

    brick7.display();
    brick8.display();
    brick9.display();
    brick10.display();
    brick11.display();
    brick12.display();

    brick13.display();
    brick14.display();
    brick15.display();
    brick16.display();
    brick17.display();
    brick18.display();
    brick19.display();
    brick20.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}