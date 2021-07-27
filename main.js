rightWristX= "";
rightWristY= "";
rightWrist_score="";
function setup() {
	canvas = createCanvas(800,400);
	canvas.parent('canvas');
    
	video= createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');

	poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
	console.log('model Loaded!');
}
function gotPoses(results)
{
	if(results.length>0)
	{
		console.log(results);
		rightWristX= results[0].pose.rightWrist.x;
		rightWristY= results[0].pose.rightWrist.y;
		rightWrist_score= results[0].score;
	}
}
function draw()
{
	if(rightWrist_score>0.2)
	{
		fill("#FF0000");
		stroke("#FF0000");
		circle(rightWristX, rightWristY, 9)
	}
}