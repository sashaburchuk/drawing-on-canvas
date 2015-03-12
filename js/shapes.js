function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.font = "24px sans-serif";
  if (canvas.getContext){


    //heart
    var heart = new Path2D();
    ctx.beginPath();
    heart.moveTo(75,40);
    heart.bezierCurveTo(75,37,70,25,50,25);
    heart.bezierCurveTo(20,25,20,62.5,20,62.5);
    heart.bezierCurveTo(20,80,40,102,75,120);
    heart.bezierCurveTo(110,102,130,80,130,62.5);
    heart.bezierCurveTo(130,62.5,130,25,100,25);
    heart.bezierCurveTo(85,25,75,37,75,40);
     
    //smiley  
    var smiley = new Path2D();
    ctx.beginPath();
    smiley.arc(275,75,50,0,Math.PI*2,true); // Outer circle
    smiley.moveTo(310,75);
    smiley.arc(275,75,35,0,Math.PI,false);  // Mouth (clockwise)
    smiley.moveTo(266,65);
    smiley.arc(260,65,5,0,Math.PI*2,true);  // Left eye
    smiley.moveTo(296,65);
    smiley.arc(290,65,5,0,Math.PI*2,true);  // Right eye
    
    //diamond  
    var diamond = new Path2D();
    ctx.beginPath();
    diamond.moveTo(500, 20);
    diamond.lineTo(460, 70);
    diamond.lineTo(500, 120);
    diamond.lineTo(540, 70);
    diamond.lineTo(500, 20);
    
    //cut-gem
    var gem = new Path2D();
    ctx.beginPath();
    gem.moveTo(620, 20);
    gem.lineTo(680, 20);
    gem.lineTo(700, 40);
    gem.lineTo(650, 110);
    gem.lineTo(600, 40);
    gem.lineTo(620, 20);
    gem.moveTo(600, 40);
    gem.lineTo(700, 40);
    gem.lineTo(650, 20);
    gem.lineTo(600, 40);
    gem.moveTo(650, 20);
    gem.lineTo(650, 110);
    gem.moveTo(650, 110);
    gem.lineTo(625, 40);
    gem.moveTo(650, 110);
    gem.lineTo(675, 40);
    
    //cat-face
    var cat = new Path2D();
    ctx.beginPath();
    cat.arc(800,75,50,0,Math.PI,false); // Bottom half of cat face
    cat.moveTo(770, 40); // top part of cat face
    cat.quadraticCurveTo(750, 60, 750, 75);
    cat.moveTo(830, 40);
    cat.quadraticCurveTo(850, 60, 850, 75);
    cat.moveTo(810, 40); // right ear
    cat.lineTo(820, 20);
    cat.lineTo(830, 40)
    cat.moveTo(770, 40); // left ear 
    cat.lineTo(780, 20);
    cat.lineTo(790, 40);
    cat.lineTo(810, 40);
    cat.moveTo(825, 65) // right eye
    cat.arc(820, 65, 5, 0, Math.PI, false);
    cat.moveTo(785, 65) // left eye
    cat.arc(780, 65, 5, 0, Math.PI, false);
    cat.moveTo(795, 80); // nose
    cat.lineTo(805, 80); 
    cat.lineTo(800, 85);
    cat.lineTo(795, 80);
    cat.moveTo(800, 85); // mouth
    cat.quadraticCurveTo(810, 100, 815, 85);
    cat.moveTo(800, 85);
    cat.quadraticCurveTo(790, 100, 785, 85)
    cat.moveTo(840, 80); // whiskers
    cat.lineTo(820, 85);
    cat.lineTo(840, 90);
    cat.moveTo(760, 80);
    cat.lineTo(780, 85);
    cat.lineTo(760, 90);
    
    

    ctx.stroke(smiley);
    ctx.fill(diamond);
    ctx.stroke(gem);
    ctx.stroke(cat);
    ctx.fill(heart);
    
    ctx.fillText("PARTY", 150, 250);
    
    
    // set transparency alpha to all shapes
    ctx.globalAlpha = 0.7;
    
  }
} 

