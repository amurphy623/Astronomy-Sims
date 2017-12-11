
var aSlider, bSlider; //semi major & semi minor axis label
var eLabel; //eccentricity label
var count;
var c;

function setup() {
  //create canvas
  canvas=createCanvas(1000, 800);
  canvas.parent('sketch-holder');
  frameRate(30);

  //initialize count
  count = 0;

  //Creating radius slider
  aSliderLabel = createP("Semi Major Axis (red line)");
  aSliderLabel.position(50,0);
  aSlider = createSlider(0, 300, 100, 0);
  aSlider.position(50,40);
  aSlider.elt.step = 10;


  //Creating semi minor axis slider
  bSliderLabel = createP("Semi Minor Axis (blue line)");
  bSliderLabel.position(50,60);
  bSlider = createSlider(0, 300, 90, 0);
  bSlider.position(50,100);
  bSlider.elt.step = 10;

  //Eccentricity label
  eccentricityLabel = createP("Eccentricity");
  eccentricityLabel.position(600, 0);

  //Perihelion label
  perihelionLabel = createP("Perihelion");
  perihelionLabel.position(600, 40);

  //Aphelion label
  aphelionLabel = createP("Aphelion");
  aphelionLabel.position(600, 80);

  //focal point label
  focalPointLabel = createP("Focal Point");
  focalPointLabel.position(600, 120);
}

function draw() {
  count++;

  //This makes the background light blue
  background(139, 204, 249);

  //defining slider values
  a = aSlider.value();
  aSliderLabel.html("Semi Major Axis (red line): " + a);

  b = bSlider.value();
  bSliderLabel.html("Semi Minor Axis (blue line): " + b);

  //Setting some parameters...
  if(b > a) {
    aSliderLabel.html("Whoops, your semi minor axis bigger than the allowed semi major axis: " + a);
    bSliderLabel.html("Whoops, your semi minor axis bigger than the allowed semi major axis: " + b);

  }
  else{}

  //What happens when a circle occurs (semi major axis = semi minor axis?)
  if(a == b && a > 0 && b > 0) {
     aSliderLabel.html("Congrats, you drew a circle! The semi minor axis equals the semi major axis: " + a)
     bSliderLabel.html("Congrats, you drew a circle! The semi minor axis equals the semi major axis: " + b)
  }
  else if (a == 0 && b == 0) {
    aSliderLabel.html("Bye Bye Ellipse: " + a);
    bSliderLabel.html("Bye Bye Ellipse: " + b);
  }
  else{}

  //Draw the ellipse and corresponding axis lines
  push();
  if (b > a ) {}
  else {
    stroke('black');
    fill('white');
    ellipse(width/2, height/2, aSlider.value() , bSlider.value());

    //draw rmax line
    stroke('red');
    line(500 , 400, windowWidth/2 + .5*aSlider.value(), 400);

    //draw semi minor axis line
    stroke('blue');
    line(500, height/2, 500, height/2 - .5*bSlider.value());
  }
  pop();

  //define eccentricity
  eccentricity = sqrt(1 - (((b)^2)/((a)^2)));
  eccentricityLabel.html("Eccentricity: " + eccentricity.toFixed(2));

  //Define Perihelion
  perihelion = (a*(1 - eccentricity));
  perihelionLabel.html("Perihelion (pink dot): " + perihelion.toFixed(2));

    //What happens when prohibited values are put in?
    if(b > a){}
    else{
      //Draw Perihelion
      stroke('black');
      fill('pink');
      ellipse(width/2 + aSlider.value()/2, height/2, 10, 10)
    }

  //Define Aphelion
  aphelion = (a*(1 + eccentricity));
  aphelionLabel.html("Aphelion (green dot): " + aphelion.toFixed(2));

    //What happens when prohibited values are put in?
    if(b > a){}
    else{
      //Draw Aphelion
      stroke('black');
      fill('green');
      ellipse(width/2 - aSlider.value()/2, height/2, 10, 10);
    }

  //Define a Focal Point of the Ellipse
  focalPoint = sqrt((Math.pow(a,2)) - (b*b));
  focalPointLabel.html("Focal Point (yellow dot): " + focalPoint.toFixed(2));

  //What happens when prohibited values are put in?
  if(b > a) {}
  else{
    //Draw a focal point of the ellipse
    stroke('black');
    fill('yellow');
    ellipse(width/2 + focalPoint/2, height/2, 5, 5);
  }
