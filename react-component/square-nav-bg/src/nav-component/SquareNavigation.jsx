import React, { useEffect, useState } from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";

const SquareNavigation = ({ parentRef }) => {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    var CIRCLES_NUM = 5;
    let MIN_R = 400;
    let MAX_R = 500;
    let MAX_SPEED = 1;
    let circles_local = [];
    for (let i = 0; i < CIRCLES_NUM; i++) {
      //   let
      let x = getRandomNumberBetween(0, 500);
      let y = getRandomNumberBetween(0, 500);
      let r = getRandomNumberBetween(MIN_R, MAX_R);
      let stroke_weight = getRandomNumberBetween(1, 7);
      let x_speed = getRandomNumberBetween(-MAX_SPEED, MAX_SPEED);
      let y_speed = getRandomNumberBetween(-MAX_SPEED, MAX_SPEED);
      let num_rings = Math.floor(getRandomNumberBetween(1, 3));
      let spread_offset = getRandomNumberBetween(20, 40);
      circles_local[i] = new Circle(
        x,
        y,
        r,
        stroke_weight,
        x_speed,
        y_speed,
        num_rings,
        spread_offset
      );
    }
    setCircles(circles_local);
  }, []);

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
        // circles[i].run();
        p5.noFill();
        p5.stroke(255);
        p5.ellipse(circles[i].x, circles[i].y, circles[i].r);
      }
    };

    p5.windowResized = () => {
      p5.resizeCanvas(window.innerWidth, window.innerHeight);
    };
  };

  return <ReactP5Wrapper sketch={sketch} />;
};

export default SquareNavigation;

class Circle {
  constructor(p5, x, y, r, sw, x_speed, y_speed, num_rings, spread_offset) {
    this.p5 = p5;
    this.x = x;
    this.y = y;
    this.r = r;
    this.sw = sw;
    this.x_s = x_speed;
    this.y_s = y_speed;
    this.num_rings = num_rings;
    this.spread_offset = spread_offset;
  }

  run() {
    this.p5.noFill();
    this.p5.stroke(255);
    this.p5.strokeWeight(this.sw);
    this.p5.ellipse(this.x, this.y, this.r);
    if (this.num_rings === 2) {
      this.p5.ellipse(this.x, this.y, this.r + this.spread_offset);
    }
    this.x += this.x_s;
    this.y += this.y_s;

    if (this.x > this.p5.width) {
      this.x_s = -this.x_s;
    }
    if (this.x < 0) {
      this.x_s = -this.x_s;
    }
    if (this.y > this.p5.height) {
      this.y_s = -this.y_s;
    }
    if (this.y < 0) {
      this.y_s = -this.y_s;
    }
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
