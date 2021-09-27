noseX = 0;
noseY = 0;
LwristX = 0;
Rwrist=0;
diffrents = 0;


function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
canvas = createCanvas(550,500);
canvas.position(800,100);

poseNet = ml5.poseNet(video, modelLoaded);

poseNet.on('pose', gotPoses);
}



function modelLoaded() {
    console.log('poseNet loaded !!!');
    
}


function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX ="+ noseX+ "noseY ="+noseY );

        LwristX = results[0].pose.leftWrist.x;
        RwristX = results[0].pose.rightWrist.x;
        diffrents = floor(LwristX - RwristX);
    }
}

function draw()
 { background('#FF7F7F');
  fill('#F90093');
   stroke('#F90093');
    square(noseX, noseY, diffrents); }