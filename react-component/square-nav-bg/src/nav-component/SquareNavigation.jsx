import React, { useEffect, useState } from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";

class Circle {
  constructor(
    x,
    y,
    r,
    sw,
    x_speed,
    y_speed,
    num_rings,
    spread_offset,
    width,
    height
  ) {
    // this.p5 = p5;
    this.x = x;
    this.y = y;
    this.r = r;
    this.sw = sw;
    this.x_s = x_speed;
    this.y_s = y_speed;
    this.num_rings = num_rings;
    this.spread_offset = spread_offset;
    this.width = width;
    this.height = height;
  }

  run() {
    // this.p5.noFill();
    // this.p5.stroke(255);
    // this.p5.strokeWeight(this.sw);
    // this.p5.ellipse(this.x, this.y, this.r);
    // if (this.num_rings === 2) {
    //   this.p5.ellipse(this.x, this.y, this.r + this.spread_offset);
    // }
    this.x += this.x_s;
    this.y += this.y_s;

    if (this.x > this.width) {
      this.x_s = -this.x_s;
    }
    if (this.x < 0) {
      this.x_s = -this.x_s;
    }
    if (this.y > this.height) {
      this.y_s = -this.y_s;
    }
    if (this.y < 0) {
      this.y_s = -this.y_s;
    }
  }
}

var CIRCLES_NUM = 8;
let MIN_R = 40;
let MAX_R = 200;
let MAX_SPEED = 1;
let circles = [];
for (let i = 0; i < CIRCLES_NUM; i++) {
  //   let
  let x = getRandomNumberBetween(0, window.innerWidth);
  let y = getRandomNumberBetween(0, window.innerHeight);
  let r = getRandomNumberBetween(MIN_R, MAX_R);
  let stroke_weight = getRandomNumberBetween(1, 7);
  let x_speed = getRandomNumberBetween(-MAX_SPEED, MAX_SPEED);
  let y_speed = getRandomNumberBetween(-MAX_SPEED, MAX_SPEED);
  let num_rings = Math.floor(getRandomNumberBetween(1, 3));
  let spread_offset = getRandomNumberBetween(20, 40);
  circles[i] = new Circle(
    x,
    y,
    r,
    stroke_weight,
    x_speed,
    y_speed,
    num_rings,
    spread_offset,
    window.innerWidth,
    window.innerHeight
  );
}

const SquareNavigation = ({ parentRef }) => {
  // const [circles, setCircles] = useState([]);

  const sketch = (p5) => {
    p5.setup = () => {
      var myCanvas = p5.createCanvas(window.innerWidth, window.innerHeight);
    };

    p5.draw = () => {
      console.log(circles);
      p5.background(207);
      //   p5.fill(255, 0, 0);
      //   p5.rect(0, 0, 50, 50);
      for (let i = 0; i < circles.length; i++) {
        circles[i].run();
        p5.noFill();
        p5.stroke(255);
        p5.strokeWeight(circles[i].sw);
        if (circles[i].num_rings === 2) {
          p5.ellipse(
            circles[i].x,
            circles[i].y,
            circles[i].r + circles[i].spread_offset
          );
        }
        p5.ellipse(circles[i].x, circles[i].y, circles[i].r);
      }
    };

    p5.windowResized = () => {
      p5.resizeCanvas(window.innerWidth, window.innerHeight);
      for (let i = 0; i < circles.length; i++) {
        circles[i].width = window.innerWidth;
        circles[i].height = window.innerHeight;
      }
    };
  };

  return <ReactP5Wrapper sketch={sketch} />;
};

export default SquareNavigation;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomNumberBetween(min, max) {
  return Math.random() * (max - min + 1) + min;
}
