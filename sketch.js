var hr, sc, min
var x,y
var disp
function setup() {
  createCanvas(800,400);
  x = width/2
  y = height/2


  angleMode(DEGREES)
}

function draw() {
  background("black");  




hr = hour()
min = minute()
sc = second()


text(hr+":"+ min + ":"+ sc,100,50)

disp =0.5*min
translate(x,y)
rotate(-90)

hrangle = map(hr%12,0,12,0,360)
minangle = map(min,0,60,0,360)
scangle = map(sc,0,60,0,360)


hrangle1 = hrangle+disp

push()

rotate(hrangle1)
stroke(255,0,0)
strokeWeight(7)
line(0,0,60,0)

pop()

push()

rotate(minangle)
stroke(0,255,0)
strokeWeight(7)
line(0,0,95,0)

pop()

push()

rotate(scangle)
stroke(0,0,255)
strokeWeight(7)
line(0,0,100,0)

pop()


noFill()
strokeWeight(7)
stroke(255,0,0)
arc(0,0,250,250,0,hrangle1)

stroke(0,255,0)
arc(0,0,270,270,0,minangle)


stroke(0,0,255)
arc(0,0,288,288,0,scangle)


  drawSprites();
}