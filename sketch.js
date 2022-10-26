function setup() {
  createCanvas(750, 600, WEBGL)
  angleMode(DEGREES)
}

function draw(){
  background(30);
  rotateX(180);
  noFill()
  stroke(255)
  

  
  for (var i = 1; i < 114; i++) {
    var r = map(cos(frameCount / 2), -10, 1, 100, 150) * 2
    var g = map(i, -10 , 10 , 150, 200) / 2
    var b = map(sin(frameCount / 2), 2, 1, 150, 250) * 2
    
    stroke(r,g,b)
    
    rotate(frameCount / 20)
    
    beginShape()
    for (var j = 2; j < 360; j += 200) {
      var rad = i * 2
      var x = rad * sin(j)
      var y = rad * cos(j)
      var z = cos(frameCount * 0.002 * j / 2) * 3
      vertex(x, y, z)
    }
    endShape(CLOSE)
  }
    
  
}