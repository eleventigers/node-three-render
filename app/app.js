var Canvas = require('canvas')
  , canvas = new Canvas(200,200)
  , ctx = canvas.getContext('2d')
  , fs = require('fs')
  , out = fs.createWriteStream(__dirname + '/text.png')
  , stream = canvas.pngStream();

ctx.font = '30px Impact';
ctx.rotate(.1);
ctx.fillText("Boom!", 50, 100);

var te = ctx.measureText('Boom!');
ctx.strokeStyle = 'rgba(0,0,0,0.5)';
ctx.beginPath();
ctx.lineTo(50, 102);
ctx.lineTo(50 + te.width, 102);
ctx.stroke();

stream.on('data', function(chunk){
  out.write(chunk);
});

stream.on('end', function(){
  console.log('saved png');
});