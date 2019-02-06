function preload() {
  result = loadStrings('pi');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  noFill();
  pi_res = int(split(result[0], ''));
  pi_res = subset(pi_res, 2, 1000002);
  ellipse_max_size = dist(0, 0, windowWidth, windowHeight);
  ellipse_count = 0;
  pi_digit = 0;
  num_pix_sp = 10;
  str_weight = round((num_pix_sp/2)+1);
  strokeWeight(str_weight);
  subset_length = round(ellipse_max_size/round((num_pix_sp/2)+1));

}

function draw() {
  drawPItarget();
}

function drawPItarget() {
  background(0);
  pi_res_current = subset(pi_res, pi_digit, (pi_digit + subset_length));
  for(i = 0; i < subset_length; i++) {
    strokeWeight(str_weight);
    stroke(map(pi_res_current[i], 0, 9, 0, 255));
    ellipse(windowWidth/2, windowHeight/2,
      ellipse_max_size - (i*round((num_pix_sp/2)+1)),
      ellipse_max_size - (i*round((num_pix_sp/2)+1)));
  }
  for(j = 30; j >= 1; j--){
    strokeWeight(1);
    stroke(0, map(j, 30, 1, 0, 255));
    ellipse(windowWidth/2, windowHeight/2, j, j);
  }
  pi_digit++;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  ellipse_max_size = dist(0, 0, windowWidth, windowHeight);
  subset_length = round(ellipse_max_size/round((num_pix_sp/2)+1));
  background(0);
}
