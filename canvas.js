let w, h, loopId, id, canvas, ctx, particles;
const ratio = Math.ceil(window.devicePixelRatio);

let options = {
  particleColor: "#f96d00",
  lineColor: "rgb(113, 121, 126)",
  particleAmount: Math.floor(window.innerWidth * ratio / 10),
  defaultRadius: 3,
  variantRadius: 1,
  defaultSpeed: 0.18,
  variantSpeed: 0,
  linkRadius: 160,
};

canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");


w = canvas.width = window.innerWidth * ratio;
h = canvas.height = window.innerHeight * ratio;

canvas.style.width = `${window.innerWidth}px`;
canvas.style.height = `${window.innerHeight}px`;

function createCanvas(width, height, set2dTransform = true) {
  const ratio = Math.ceil(window.devicePixelRatio);
  const canvas = document.createElement('canvas');
  canvas.width = width * ratio;
  canvas.height = height * ratio;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  if (set2dTransform) {
    canvas.getContext('2d').setTransform(ratio, 0, 0, ratio, 0, 0);
  }
  return canvas;
}

window.addEventListener("resize", () => {
  if (window.innerWidth != w) {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    location.reload();
  }   
});

document.addEventListener("DOMContentLoaded", init);

function init() {
  initialiseElements();
  startAnimation();
}

let rgb = options.lineColor.match(/\d+/g);

function initialiseElements() {
  particles = [];
  for (let i = 0; i < options.particleAmount; i++) {
    particles.push(new Particle());
  }
}

function startAnimation() {
  loopId = requestAnimationFrame(animationLoop);
}

function animationLoop() {
  ctx.clearRect(0, 0, w, h);
  drawScene();

  id = requestAnimationFrame(animationLoop);
}

function drawScene() {
  drawLine();
  drawParticle();
}

function drawParticle() {
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
  }
}

function drawLine() {
  for (let i = 0; i < particles.length; i++) {
    linkPoints(particles[i], particles);
  }
}

function linkPoints(point, hubs) {
  for (let i = 0; i < hubs.length; i++) {
    let distance = checkDistance(point.x, point.y, hubs[i].x, hubs[i].y);
    let opacity = 1 - distance / options.linkRadius;
    if (opacity > 0) {
      ctx.lineWidth = 0.5;
      ctx.strokeStyle =
        "rgba(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + opacity + ")";
      ctx.beginPath();
      ctx.moveTo(point.x, point.y);
      ctx.lineTo(hubs[i].x, hubs[i].y);
      ctx.closePath();
      ctx.stroke();
    }
  }
}

function checkDistance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

Particle = function () {
  let _this = this;
  _this.x = Math.random() * w;
  _this.y = Math.random() * h;
  _this.color = options.particleColor;
  _this.radius = options.defaultRadius + Math.random() * options.variantRadius;
  _this.speed = options.defaultSpeed + Math.random() * options.variantSpeed;
  _this.directionAngle = Math.floor(Math.random() * 360);
  _this.vector = {
    x: Math.cos(_this.directionAngle) * _this.speed,
    y: Math.sin(_this.directionAngle) * _this.speed,
  };

  _this.update = function () {
    _this.border();
    _this.x += _this.vector.x;
    _this.y += _this.vector.y;
  };

  _this.border = function () {
    if (_this.x >= w || _this.x <= 0) {
      _this.vector.x *= -1;
    }
    if (_this.y >= h || _this.y <= 0) {
      _this.vector.y *= -1;
    }
    if (_this.x > w) _this.x = w;
    if (_this.y > h) _this.y = h;
    if (_this.x < 0) _this.x = 0;
    if (_this.y < 0) _this.y = 0;
  };

  _this.draw = function () {
    ctx.beginPath();
    ctx.arc(_this.x, _this.y, _this.radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = _this.color;
    ctx.fill();
  };
};
