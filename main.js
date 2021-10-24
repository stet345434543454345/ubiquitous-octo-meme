function preload() {
    
}

function setup() {
    canvas = createCanvas(440, 280);
    canvas.position(110, 280);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = " ";
    

}
function draw() {
    
    strokeWeight(4);
    stroke('green');
rect(20, 20, 360, 240);



strokeWeight(5);
fill('green');
    stroke('green');
circle(20, 20, 20);
circle(380, 20, 20);
circle(380, 260, 20);
circle(20, 260, 20);

image(video, 75, 55, 240, 180);

}


function take_snapshot() {
    save("this.png");
}
