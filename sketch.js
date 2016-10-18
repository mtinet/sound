var song;

function preload() {
  song = loadSound('assets/Idiot Test - 90 fail.mp3');
}

function setup() {
  
  createCanvas(720, 200);
  background(255,0,0);
}

function mouseClicked() {
  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.stop();
    background(255,0,0);
  } else {
    song.play();
    background(0,255,0);
  }
}
