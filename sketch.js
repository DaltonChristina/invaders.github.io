let score = 0;
let Drops = [];
let ships = [];
let wave2s = [];
let wave3s =[];
let l2w1s = [];
let l2w2s = [];
let l2w3s = [];
let l3w1s = [];
let l3w2s = [];
let l3w3s = [];
let l4w1s = [];
let l4w2s = [];
let l4w3s = [];
let l4w4s = [];
let l4w5s = [];

function setup() {
  createCanvas(1000, 500);
  for(let i = 0; i < 8; i++) {
    ships[i] = new ship(i * 120 + 70, 80);
  }
  for(let i = 0; i < 10; i++) {
    wave2s[i] = new wave2(i * 80 + 40, -125);
  }
  for(let i = 0; i < 12; i++) {
    wave3s[i] = new wave3(i * 60 + 30, -320);
  }
  for(let i = 0; i < 12; i++) {
    l2w1s[i] = new l2w1(i * 60 + 30, -820);
  }
  for(let i = 0; i < 12; i++) {
    l2w2s[i] = new l2w2(i * 60 + 50, -1130);
  }
  for(let i = 0; i < 10; i++) {
    l2w3s[i] = new l2w3(i * 60 + 70, -1400);
  }
  for(let i = 0; i < 10; i++) {
    l3w1s[i] = new l3w1(i * 60 + 70, -2100);
  }
  for(let i = 0; i < 12; i++) {
    l3w2s[i] = new l3w2(i * 60 + 70, -2400);
  }
  for(let i = 0; i < 10; i++) {
    l3w3s[i] = new l3w3(i * 60 + 80, -2600);
  }
  for(let i = 0; i < 10; i++) {
    l4w1s[i] = new l4w1(i * 60 + 60, -3200);
  }
  for(let i = 0; i < 10; i++) {
    l4w2s[i] = new l4w2(i * 60 + 60, -3400);
  }
  for(let i = 0; i < 10; i++) {
    l4w3s[i] = new l4w3(i * 60 + 60, -3600);
  }
  for(let i = 0; i < 10; i++) {
    l4w4s[i] = new l4w4(i * 60 + 60, -3800);
  }
  for(let i = 0; i < 10; i++) {
    l4w5s[i] = new l4w5(i * 60 + 60, -4000);
  }
}

function draw() {
  background('black');
  fill(255);
  rect(mouseX - 15, height - 40, 30, 70);
  textSize(15);
  text("Score: " + score, 920, 20);

  for(let i = 0; i < 8; i++) {
    ships[i].show();
    ships[i].move();
  }

  for(let i = 0; i < 10; i++) {
    wave2s[i].show();
    wave2s[i].move();
  }

  for(let i = 0; i < 12; i++) {
    wave3s[i].show();
    wave3s[i].move();
  }

  for(let i = 0; i < 12; i++) {
    l2w1s[i].show();
    l2w1s[i].move();
  }

  for(let i = 0; i < 12; i++) {
    l2w2s[i].show();
    l2w2s[i].move();
  }

  for(let i = 0; i < 10; i++) {
    l2w3s[i].show();
    l2w3s[i].move();
  }

  for(let i = 0; i < 10; i++) {
    l3w1s[i].show();
    l3w1s[i].move();
  }

  for(let i = 0; i < 12; i++) {
    l3w2s[i].show();
    l3w2s[i].move();
  }

  for(let i = 0; i < 10; i++) {
    l3w3s[i].show();
    l3w3s[i].move();
  }

  for(let i = 0; i < 10; i++) {
    l4w1s[i].show();
    l4w1s[i].move();
  }

  for(let i = 0; i < 10; i++) {
    l4w2s[i].show();
    l4w2s[i].move();
  }

  for(let i = 0; i < 10; i++) {
    l4w3s[i].show();
    l4w3s[i].move();
  }

  for(let i = 0; i < 10; i++) {
    l4w4s[i].show();
    l4w4s[i].move();
  }

  for(let i = 0; i < 10; i++) {
    l4w5s[i].show();
    l4w5s[i].move();
  }

  for(let i = 0; i < Drops.length; i++) {
    Drops[i].show();
    Drops[i].move();
    for (let j = 0; j < ships.length; j++) {
      if (Drops[i].hits(ships[j])) {
        ships[j].del();
        Drops[i].del();
        score++;
      }
    }
    for (let j = 0; j < wave2s.length; j++) {
      if (Drops[i].hits(wave2s[j])) {
        wave2s[j].del();
        Drops[i].del();
        score++;
      }
    }
    for (let j = 0; j < wave3s.length; j++) {
      if (Drops[i].hits(wave3s[j])) {
        wave3s[j].del();
        Drops[i].del();
        score++;
      }
    }
    for (let j = 0; j < l2w1s.length; j++) {
      if (Drops[i].hits(l2w1s[j])) {
        l2w1s[j].del();
        Drops[i].del();
        score++;
      }
    }
    for (let j = 0; j < l2w2s.length; j++) {
      if (Drops[i].hits(l2w2s[j])) {
        l2w2s[j].del();
        Drops[i].del();
        score++;
      }
    }
    for (let j = 0; j < l2w3s.length; j++) {
      if (Drops[i].hits(l2w3s[j])) {
        l2w3s[j].del();
        Drops[i].del();
        score++;
      }
    }
    for (let j = 0; j < l3w1s.length; j++) {
      if (Drops[i].hits(l3w1s[j])) {
        l3w1s[j].del();
        Drops[i].del();
        score++;
      }
    }
    for (let j = 0; j < l3w2s.length; j++) {
      if (Drops[i].hits(l3w2s[j])) {
        l3w2s[j].del();
        Drops[i].del();
        score++;
      }
    }
    for (let j = 0; j < l3w3s.length; j++) {
      if (Drops[i].hits(l3w3s[j])) {
        l3w3s[j].del();
        Drops[i].del();
        score++;
      }
    }
    for (let j = 0; j < l4w1s.length; j++) {
      if (Drops[i].hits(l4w1s[j])) {
        l4w1s[j].del();
        Drops[i].del();
        score++;
      }
    }
    for (let j = 0; j < l4w2s.length; j++) {
      if (Drops[i].hits(l4w2s[j])) {
        l4w2s[j].del();
        Drops[i].del();
        score++;
      }
    }
    for (let j = 0; j < l4w3s.length; j++) {
      if (Drops[i].hits(l4w3s[j])) {
        l4w3s[j].del();
        Drops[i].del();
        score++;
      }
    }
    for (let j = 0; j < l4w4s.length; j++) {
      if (Drops[i].hits(l4w4s[j])) {
        l4w4s[j].del();
        Drops[i].del();
        score++;
      }
    }
    for (let j = 0; j < l4w5s.length; j++) {
      if (Drops[i].hits(l4w5s[j])) {
        l4w5s[j].del();
        Drops[i].del();
        score++;
      }
    }
    if (Drops[i].y <= 10) {
      Drops[i].del();
    }
  }

  for(let i = ships.length - 1; i >= 0; i--) {
    if (ships[i].toDelete) {
      ships[i].y = -60000;
    }
  }

  for(let i = Drops.length - 1; i >= 0; i--) {
    if (Drops[i].toDelete) {
      Drops.splice(i, 1);
    }
  }

  for(let i = wave2s.length - 1; i >= 0; i--) {
    if (wave2s[i].toDelete) {
      wave2s[i].y = -60000;
    }
  }

  for(let i = wave3s.length - 1; i >= 0; i--) {
    if (wave3s[i].toDelete) {
      wave3s[i].y = -60000;
    }
  }

  for(let i = l2w1s.length - 1; i >= 0; i--) {
    if (l2w1s[i].toDelete) {
      l2w1s[i].y = -60000;
    }
  }

  for(let i = l2w2s.length - 1; i >= 0; i--) {
    if (l2w2s[i].toDelete) {
      l2w2s[i].y = -60000;
    }
  }

  for(let i = l2w3s.length - 1; i >= 0; i--) {
    if (l2w3s[i].toDelete) {
      l2w3s[i].y = -60000;
    }
  }

  for(let i = l3w1s.length - 1; i >= 0; i--) {
    if (l3w1s[i].toDelete) {
      l3w1s[i].y = -60000;
    }
  }

  for(let i = l3w2s.length - 1; i >= 0; i--) {
    if (l3w2s[i].toDelete) {
      l3w2s[i].y = -60000;
    }
  }

  for(let i = l3w3s.length - 1; i >= 0; i--) {
    if (l3w3s[i].toDelete) {
      l3w3s[i].y = -60000;
    }
  }

  for(let i = l4w1s.length - 1; i >= 0; i--) {
    if (l4w1s[i].toDelete) {
      l4w1s[i].y = -60000;
    }
  }

  for(let i = l4w2s.length - 1; i >= 0; i--) {
    if (l4w2s[i].toDelete) {
      l4w2s[i].y = -60000;
    }
  }

  for(let i = l4w3s.length - 1; i >= 0; i--) {
    if (l4w3s[i].toDelete) {
      l4w3s[i].y = -60000;
    }
  }

  for(let i = l4w4s.length - 1; i >= 0; i--) {
    if (l4w4s[i].toDelete) {
      l4w4s[i].y = -60000;
    }
  }

  for(let i = l4w5s.length - 1; i >= 0; i--) {
    if (l4w5s[i].toDelete) {
      l4w5s[i].y = -60000;
    }
  }

  if(score == 0) {
    textSize(45);
    fill("white");
    text("LEVEL ONE", 370, 255);
    textSize(20);
    text("USE YOUR MOUSE TO MOVE", 355, 280);
    text("CLICK TO FIRE AT THE CIRCLES", 345, 310);
    text("IF THE CIRCLES GET TOO CLOSE IT'S GAME OVER", 250, 340);
    text("GOOD LUCK", 430, 370);

  }

  if(score == 30 && l2w1s[0].y < 3) {
    textSize(45);
    fill("white");
    text("LEVEL TWO", 370, 255);
  }

  if(score == 64 && l3w1s[0].y < 3) {
    textSize(45);
    fill("white");
    text("LEVEL THREE", 370, 255);
  }

  if(score == 96 && l4w1s[0].y < 3) {
    textSize(45);
    fill("white");
    text("LEVEL THREE", 370, 255);
    textSize(35);
    fill("white");
    text("FINALE", 460, 300);
  }

  if(score == 146) {
    fill(20, 200, 40);
    rect(0, 0, 1000, 500);
    textSize(45);
    fill("white");
    text("CONGRATULATIONS", 320, 240);
    textSize(35);
    fill("white");
    text("YOU'VE WON", 410, 280);
  }

  for(let i = 0; i < 8; i++) {
    if (ships[i].y >= 420) {
      fill("red");
      rect(0, 0, 1000, 500);
      textSize(45);
      fill("white");
      text("GAME OVER", 370, 255);
    }
  }
  for(let i = 0; i < 10; i++) {
    if (wave2s[i].y >= 420) {
      fill("red");
      rect(0, 0, 1000, 500);
      textSize(45);
      fill("white");
      text("GAME OVER", 370, 255);
    }
  }
  for(let i = 0; i < 12; i++) {
    if (wave3s[i].y >= 420) {
      fill("red");
      rect(0, 0, 1000, 500);
      textSize(45);
      fill("white");
      text("GAME OVER", 370, 255);
    }
  }
  for(let i = 0; i < 12; i++) {
    if (l2w1s[i].y >= 420) {
      fill("red");
      rect(0, 0, 1000, 500);
      textSize(45);
      fill("white");
      text("GAME OVER", 370, 255);
    }
  }
  for(let i = 0; i < 12; i++) {
    if (l2w2s[i].y >= 420) {
      fill("red");
      rect(0, 0, 1000, 500);
      textSize(45);
      fill("white");
      text("GAME OVER", 370, 255);
    }
  }
  for(let i = 0; i < 10; i++) {
    if (l2w3s[i].y >= 420) {
      fill("red");
      rect(0, 0, 1000, 500);
      textSize(45);
      fill("white");
      text("GAME OVER", 370, 255);
    }
  }
  for(let i = 0; i < 10; i++) {
    if (l3w1s[i].y >= 420) {
      fill("red");
      rect(0, 0, 1000, 500);
      textSize(45);
      fill("white");
      text("GAME OVER", 370, 255);
    }
  }
  for(let i = 0; i < 12; i++) {
    if (l3w2s[i].y >= 420) {
      fill("red");
      rect(0, 0, 1000, 500);
      textSize(45);
      fill("white");
      text("GAME OVER", 370, 255);
    }
  }
  for(let i = 0; i < 10; i++) {
    if (l3w3s[i].y >= 420) {
      fill("red");
      rect(0, 0, 1000, 500);
      textSize(45);
      fill("white");
      text("GAME OVER", 370, 255);
    }
  }
  for(let i = 0; i < 10; i++) {
    if (l4w1s[i].y >= 420) {
      fill("red");
      rect(0, 0, 1000, 500);
      textSize(45);
      fill("white");
      text("GAME OVER", 370, 255);
    }
  }
  for(let i = 0; i < 10; i++) {
    if (l4w2s[i].y >= 420) {
      fill("red");
      rect(0, 0, 1000, 500);
      textSize(45);
      fill("white");
      text("GAME OVER", 370, 255);
    }
  }
  for(let i = 0; i < 10; i++) {
    if (l4w3s[i].y >= 420) {
      fill("red");
      rect(0, 0, 1000, 500);
      textSize(45);
      fill("white");
      text("GAME OVER", 370, 255);
    }
  }
  for(let i = 0; i < 10; i++) {
    if (l4w4s[i].y >= 420) {
      fill("red");
      rect(0, 0, 1000, 500);
      textSize(45);
      fill("white");
      text("GAME OVER", 370, 255);
    }
  }
  for(let i = 0; i < 10; i++) {
    if (l4w5s[i].y >= 420) {
      fill("red");
      rect(0, 0, 1000, 500);
      textSize(45);
      fill("white");
      text("GAME OVER", 370, 255);
    }
  }
}

function ship(x, y) {
  this.x = x;
  this.y = y;
  this.r = 30;
  this.toDelete = false;
  this.m = 3;

  this.show = function() {
    fill(200, 50, 50);
    circle(this.x, this.y, 30);
  };

  this.del = function() {
    this.toDelete = true;
  };

  this.move = function(){
    this.x += this.m;

    if (this.x >= width) {
      this.m = -this.m;
      this.y = this.y + 90;
    }

    if (this.x <= 0) {
      this.m = -this.m;
      this.y = this.y + 90;
    }
  };
}

function drop(x, y) {
  this.x = x;
  this.y = y;
  this.r = 10;
  this.toDelete = false;

  this.show = function() {
    fill (0, 255, 200);
    circle(this.x, this.y, this.r);
  };

  this.move = function() {
    this.y += - 4;
  };

  this.del = function() {
    this.toDelete = true;
  };

  this.hits = function(ship) {
    let d = dist(this.x, this.y, ship.x, ship.y);
    if (d < this.r + ship.r) {
      return true;
    }
    else {
      return false;
    }
  };

  this.hits = function(wave2) {
    let d = dist(this.x, this.y, wave2.x, wave2.y);
    if (d < this.r + wave2.r) {
      return true;
    }
    else {
      return false;
    }
  };

  this.hits = function(wave3) {
    let d = dist(this.x, this.y, wave3.x, wave3.y);
    if (d < this.r + wave3.r) {
      return true;
    }
    else {
      return false;
    }
  };

  this.hits = function(l2w1) {
    let d = dist(this.x, this.y, l2w1.x, l2w1.y);
    if (d < this.r + l2w1.r) {
      return true;
    }
    else {
      return false;
    }
  };

  this.hits = function(l2w2) {
    let d = dist(this.x, this.y, l2w2.x, l2w2.y);
    if (d < this.r + l2w2.r) {
      return true;
    }
    else {
      return false;
    }
  };

  this.hits = function(l2w3) {
    let d = dist(this.x, this.y, l2w3.x, l2w3.y);
    if (d < this.r + l2w3.r) {
      return true;
    }
    else {
      return false;
    }
  };

  this.hits = function(l3w1) {
    let d = dist(this.x, this.y, l3w1.x, l3w1.y);
    if (d < this.r + l3w1.r) {
      return true;
    }
    else {
      return false;
    }
  };

  this.hits = function(l3w2) {
    let d = dist(this.x, this.y, l3w2.x, l3w2.y);
    if (d < this.r + l3w2.r) {
      return true;
    }
    else {
      return false;
    }
  };

  this.hits = function(l3w3) {
    let d = dist(this.x, this.y, l3w3.x, l3w3.y);
    if (d < this.r + l3w3.r) {
      return true;
    }
    else {
      return false;
    }
  };

  this.hits = function(l4w1) {
    let d = dist(this.x, this.y, l4w1.x, l4w1.y);
    if (d < this.r + l4w1.r) {
      return true;
    }
    else {
      return false;
    }
  };

  this.hits = function(l4w2) {
    let d = dist(this.x, this.y, l4w2.x, l4w2.y);
    if (d < this.r + l4w2.r) {
      return true;
    }
    else {
      return false;
    }
  };

  this.hits = function(l4w3) {
    let d = dist(this.x, this.y, l4w3.x, l4w3.y);
    if (d < this.r + l4w3.r) {
      return true;
    }
    else {
      return false;
    }
  };

  this.hits = function(l4w4) {
    let d = dist(this.x, this.y, l4w4.x, l4w4.y);
    if (d < this.r + l4w4.r) {
      return true;
    }
    else {
      return false;
    }
  };

  this.hits = function(l4w5) {
    let d = dist(this.x, this.y, l4w5.x, l4w5.y);
    if (d < this.r + l4w5.r) {
      return true;
    }
    else {
      return false;
    }
  };
}

function mousePressed() {
  let Drop = new drop(mouseX, height - 50);
  Drops.push(Drop);
}

function wave2(x, y) {
  this.x = x;
  this.y = y;
  this.r = 25;
  this.toDelete = false;
  this.m = 3;

  this.show = function() {
    fill('orange');
    circle(this.x, this.y, this.r);
  };

  this.del = function() {
    this.toDelete = true;
  };

  this.move = function(){
    this.x += this.m;

    if (this.x >= width) {
      this.m = -this.m;
      this.y = this.y + 90;
    }

    if (this.x <= 0) {
      this.m = -this.m;
      this.y = this.y + 90;
    }
  };
}

function wave3(x, y) {
  this.x = x;
  this.y = y;
  this.r = 15;
  this.toDelete = false;
  this.m = 4.5;

  this.show = function() {
    fill('yellow');
    circle(this.x, this.y, this.r);
  };

  this.del = function() {
    this.toDelete = true;
  };

  this.move = function(){
    this.x += this.m;

    if (this.x >= width) {
      this.m = -this.m;
      this.y = this.y + 70;
    }

    if (this.x <= 0) {
      this.m = -this.m;
      this.y = this.y + 70;
    }
  };
}

function l2w1(x, y) {
  this.x = x;
  this.y = y;
  this.r = 15;
  this.toDelete = false;
  this.m = 5;

  this.show = function() {
    fill(40, 200, 100);
    circle(this.x, this.y, this.r);
  };

  this.del = function() {
    this.toDelete = true;
  };

  this.move = function(){
    this.x += this.m;

    if (this.x >= width) {
      this.m = -this.m;
      this.y = this.y + 80;
    }

    if (this.x <= 0) {
      this.m = -this.m;
      this.y = this.y + 80;
    }
  };
}

function l2w2(x, y) {
  this.x = x;
  this.y = y;
  this.r = 12;
  this.toDelete = false;
  this.m = 6;

  this.show = function() {
    fill(20, 90, 200);
    circle(this.x, this.y, this.r);
  };

  this.del = function() {
    this.toDelete = true;
  };

  this.move = function(){
    this.x += this.m;

    if (this.x >= width) {
      this.m = -this.m;
      this.y = this.y + 80;
    }

    if (this.x <= 0) {
      this.m = -this.m;
      this.y = this.y + 80;
    }
  };
}

function l2w3(x, y) {
  this.x = x;
  this.y = y;
  this.r = 10;
  this.toDelete = false;
  this.m = 6.5;

  this.show = function() {
    fill(170, 90, 250);
    circle(this.x, this.y, this.r);
  };

  this.del = function() {
    this.toDelete = true;
  };

  this.move = function(){
    this.x += this.m;

    if (this.x >= width) {
      this.m = -this.m;
      this.y = this.y + 80;
    }

    if (this.x <= 0) {
      this.m = -this.m;
      this.y = this.y + 80;
    }
  };
}

function l3w1(x, y) {
  this.x = x;
  this.y = y;
  this.r = 10;
  this.toDelete = false;
  this.m = 7;

  this.show = function() {
    fill(200, 50, 50);
    circle(this.x, this.y, this.r);
  };

  this.del = function() {
    this.toDelete = true;
  };

  this.move = function(){
    this.x += this.m;

    if (this.x >= width) {
      this.m = -this.m;
      this.y = this.y + 90;
    }

    if (this.x <= 0) {
      this.m = -this.m;
      this.y = this.y + 90;
    }
  };
}

function l3w2(x, y) {
  this.x = x;
  this.y = y;
  this.r = 10;
  this.toDelete = false;
  this.m = 7;

  this.show = function() {
    fill('orange');
    circle(this.x, this.y, this.r);
  };

  this.del = function() {
    this.toDelete = true;
  };

  this.move = function(){
    this.x += this.m;

    if (this.x >= width) {
      this.m = -this.m;
      this.y = this.y + 90;
    }

    if (this.x <= 0) {
      this.m = -this.m;
      this.y = this.y + 90;
    }
  };
}

function l3w3(x, y) {
  this.x = x;
  this.y = y;
  this.r = 8;
  this.toDelete = false;
  this.m = 7.5;

  this.show = function() {
    fill('yellow');
    circle(this.x, this.y, this.r);
  };

  this.del = function() {
    this.toDelete = true;
  };

  this.move = function(){
    this.x += this.m;

    if (this.x >= width) {
      this.m = -this.m;
      this.y = this.y + 95;
    }

    if (this.x <= 0) {
      this.m = -this.m;
      this.y = this.y + 95;
    }
  };
}

function l4w1(x, y) {
  this.x = x;
  this.y = y;
  this.r = 8;
  this.toDelete = false;
  this.m = 8;

  this.show = function() {
    fill(40, 200, 100);
    circle(this.x, this.y, this.r);
  };

  this.del = function() {
    this.toDelete = true;
  };

  this.move = function(){
    this.x += this.m;

    if (this.x >= width) {
      this.m = -this.m;
      this.y = this.y + 90;
    }

    if (this.x <= 0) {
      this.m = -this.m;
      this.y = this.y + 90;
    }
  };
}

function l4w2(x, y) {
  this.x = x;
  this.y = y;
  this.r = 8;
  this.toDelete = false;
  this.m = 8;

  this.show = function() {
    fill(20, 90, 200);
    circle(this.x, this.y, this.r);
  };

  this.del = function() {
    this.toDelete = true;
  };

  this.move = function(){
    this.x += this.m;

    if (this.x >= width) {
      this.m = -this.m;
      this.y = this.y + 90;
    }

    if (this.x <= 0) {
      this.m = -this.m;
      this.y = this.y + 90;
    }
  };
}

function l4w3(x, y) {
  this.x = x;
  this.y = y;
  this.r = 8;
  this.toDelete = false;
  this.m = 8;

  this.show = function() {
    fill(170, 90, 250);
    circle(this.x, this.y, this.r);
  };

  this.del = function() {
    this.toDelete = true;
  };

  this.move = function(){
    this.x += this.m;

    if (this.x >= width) {
      this.m = -this.m;
      this.y = this.y + 90;
    }

    if (this.x <= 0) {
      this.m = -this.m;
      this.y = this.y + 90;
    }
  };
}

function l4w4(x, y) {
  this.x = x;
  this.y = y;
  this.r = 8;
  this.toDelete = false;
  this.m = 8;

  this.show = function() {
    fill(200, 50, 50);
    circle(this.x, this.y, this.r);
  };

  this.del = function() {
    this.toDelete = true;
  };

  this.move = function(){
    this.x += this.m;

    if (this.x >= width) {
      this.m = -this.m;
      this.y = this.y + 90;
    }

    if (this.x <= 0) {
      this.m = -this.m;
      this.y = this.y + 90;
    }
  };
}

function l4w5(x, y) {
  this.x = x;
  this.y = y;
  this.r = 8;
  this.toDelete = false;
  this.m = 8;

  this.show = function() {
    fill('orange');
    circle(this.x, this.y, this.r);
  };

  this.del = function() {
    this.toDelete = true;
  };

  this.move = function(){
    this.x += this.m;

    if (this.x >= width) {
      this.m = -this.m;
      this.y = this.y + 90;
    }

    if (this.x <= 0) {
      this.m = -this.m;
      this.y = this.y + 90;
    }
  };
}