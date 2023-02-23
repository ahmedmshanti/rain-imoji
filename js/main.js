var container = document.getElementById("animate");

var emoji = [
  "icons/fb.png",
  "icons/heart.png",
  "icons/insta.png",
  "icons/laugh.png",
  "icons/like.png",
  "icons/magento.png",
  "icons/shopify.png",
  "icons/tiktok.png",
  "icons/wp.png",
];
var circles = [];
for (var i = 0; i < 8; i++) {
  addCircle(i * 500, [100 + 20, 600], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 500, [100 + 40, -600], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 500, [100 - 600, -900], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 500, [100 + 500, 900], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 500, [100 - 1000, -900], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 500, [100 + 900, 800], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 500, [100 - 700, -800], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 500, [100 + 600, 800], emoji[Math.floor(Math.random() * emoji.length)]);

  addCircle(i * 500, [100 + 20, 700], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 500, [100 + 40, -700], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 500, [100 - 600, -800], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 500, [100 + 500, 800], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 500, [100 - 1000, -800], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 500, [100 + 900, 900], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 500, [100 - 700, -900], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 500, [100 + 600, 900], emoji[Math.floor(Math.random() * emoji.length)]);
}

function addCircle(delay, range, color) {
  setTimeout(function () {
    var c = new Circle(
      range[0] + Math.random() * range[1],
      -30 + Math.random() * 4,
      color,
      {
        x: -0.10 + Math.random() * 10,
        y: 8 + Math.random() * 20,
      },
      range
    );
    circles.push(c);
  }, delay);
}

function Circle(x, y, c, v, range) {
  var _this = this;
  this.x = x;
  this.y = y;
  this.color = c;
  this.v = v;
  this.range = range;
  this.element = document.createElement("img");
  /*this.element.style.display = 'block';*/
  this.element.style.opacity = 0;
  this.element.style.position = "absolute";
  this.element.style.fontSize = "50px";
  this.element.style.color = "hsl(" + ((Math.random() * 360) | 0) + ",80%,50%)";
  this.element.src = c;
  container.appendChild(this.element);

  this.update = function () {
    if (_this.y > 1000) {
      _this.x = _this.range[0] + Math.random() * _this.range[1];
    }
    _this.y += _this.v.y;
    _this.x += _this.v.x;
    this.element.style.opacity = 1;
    this.element.style.transform =
      "translate3d(" + _this.x + "px, " + _this.y + "px, 0px)";
    this.element.style.webkitTransform =
      "translate3d(" + _this.x + "px, " + _this.y + "px, 0px)";
    this.element.style.mozTransform =
      "translate3d(" + _this.x + "px, " + _this.y + "px, 0px)";
  };
}

function animate() {
  for (var i in circles) {
    circles[i].update();
  }
  requestAnimationFrame(animate);
}

const os = setTimeout(() => {
  // animate();
  clearTimeout(animate());
}, 450);
