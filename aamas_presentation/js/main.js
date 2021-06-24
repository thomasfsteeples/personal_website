"use strict";

Reveal.initialize({
  // Display controls in the bottom right corner
  controls: false,
  // Push each slide change to the browser history
  history: true
});
window.MathJax = {
  loader: {
    load: ['[tex]/ams']
  },
  tex: {
    packages: {
      '[+]': ['ams']
    }
  }
};
var gap = 0;
var canvas_width = 800;
var canvas_height = 500;
var scale = 5;

function setupCanvas(canvas) {
  var ctx = canvas.getContext("2d");
  var devicePixelRatio = window.devicePixelRatio || 1;
  var backingStoreRatio = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
  var ratio = devicePixelRatio / backingStoreRatio;

  if (devicePixelRatio !== backingStoreRatio) {
    var oldWidth = canvas.width;
    var oldHeight = canvas.height;
    canvas.width = oldWidth * ratio;
    canvas.height = oldHeight * ratio;
    canvas.style.width = oldWidth + "px";
    canvas.style.height = oldHeight + "px";
    ctx.scale(ratio, ratio);
  }
}

function create_state(ctx, xpos, ypos) {
  var state_radius = 3;
  ctx.beginPath();
  ctx.arc(xpos / 100 * canvas_width, ypos / 100 * canvas_height, state_radius * scale, 0, 2 * Math.PI);
  ctx.fillStyle = "#edebeb";
  ctx.fill();
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#000000";
  ctx.stroke();
}

function draw_edge(ctx, start, end) {
  ctx.beginPath();
  ctx.moveTo(start[0] / 100 * canvas_width, start[1] / 100 * canvas_height);
  ctx.lineTo(end[0] / 100 * canvas_width, end[1] / 100 * canvas_height);
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 5;
  ctx.stroke();
}

function write_text(ctx, text, xpos, ypos) {
  ctx.font = "bold 18px Open Sans";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#000000";
  ctx.fillText(text, xpos / 100 * canvas_width, ypos / 100 * canvas_height);
}

function draw_game_graph(ctx) {
  var state_positions = [[8, 70], [8, 30], [20, 50], [32, 50], [44, 60], [44, 40], [56, 60], [56, 40], [68, 50], [80, 50], [92, 70], [92, 30]];
  var edges = [[state_positions[0], state_positions[2]], [state_positions[1], state_positions[2]], [state_positions[2], state_positions[3]], [state_positions[3], state_positions[4]], [state_positions[3], state_positions[5]], [state_positions[4], state_positions[6]], [state_positions[5], state_positions[7]], [state_positions[6], state_positions[8]], [state_positions[7], state_positions[8]], [state_positions[8], state_positions[9]], [state_positions[9], state_positions[10]], [state_positions[9], state_positions[11]]];

  for (var _i = 0, _edges = edges; _i < _edges.length; _i++) {
    var edge = _edges[_i];
    draw_edge(ctx, edge[0], edge[1]);
  }

  for (var _i2 = 0, _state_positions = state_positions; _i2 < _state_positions.length; _i2++) {
    var pos = _state_positions[_i2];
    create_state(ctx, pos[0], pos[1]);
  }

  write_text(ctx, "P", state_positions[0][0], state_positions[0][1]);
  write_text(ctx, "P", state_positions[1][0], state_positions[1][1]);
  write_text(ctx, "D", state_positions[10][0], state_positions[10][1]);
  write_text(ctx, "D", state_positions[11][0], state_positions[11][1]);
}

function get_state_from_path(path, index) {
  var prefix = path[0];
  var suffix = path[1];

  if (index < prefix.length) {
    return prefix[index];
  } else {
    return suffix[(index - prefix.length) % suffix.length];
  }
}

function animate_agents(ctx) {
  var state_positions = [[8, 70], [8, 30], [20, 50], [32, 50], [44, 60], [44, 40], [56, 60], [56, 40], [68, 50], [80, 50], [92, 70], [92, 30]];
  var num_agents = 4;
  var agent_paths = [[[], [0, 2, 3, 4, 6, 8, 9, 10, 9, 8, 6, 4, 3, 2]], [[1], [1, 2, 3, 4, 6, 8, 9, 11, 9, 8, 6, 4, 3, 2]], [[11, 9, 8, 7, 5, 3, 2], [1, 2, 3, 5, 7, 8, 9, 11, 9, 8, 7, 5, 3, 2]], [[10, 10, 9, 8, 7, 5, 3, 2], [0, 2, 3, 5, 7, 8, 9, 10, 9, 8, 7, 5, 3, 2]]];
  var agent_colours = ["#ffb8ff", "#ff0000", "#00ffff", "#ffb852"];

  for (var i = 0; i < num_agents; i++) {
    var time = new Date() - startTime;
    var seconds = Math.floor(time / 1000);
    var milliseconds = (time / 1000 - seconds) * 1000;
    var path = agent_paths[i];
    var index = seconds;

    if (milliseconds < 500) {
      draw_agent(ctx, state_positions[get_state_from_path(path, index)][0], state_positions[get_state_from_path(path, index)][1], agent_colours[i]);
    } else {
      var t = (milliseconds - 500) / 500;
      draw_agent(ctx, (1 - t) * state_positions[get_state_from_path(path, index)][0] + t * state_positions[get_state_from_path(path, index + 1)][0], (1 - t) * state_positions[get_state_from_path(path, index)][1] + t * state_positions[get_state_from_path(path, index + 1)][1], agent_colours[i]);
    }
  }
}

function draw_agent(ctx, x, y, colour) {
  var agent_size = 8;
  ctx.beginPath();
  ctx.moveTo(x / 100 * canvas_width, y / 100 * canvas_height - scale * (agent_size / 3) * Math.sqrt(3));
  ctx.lineTo(x / 100 * canvas_width + scale * (agent_size / 2), y / 100 * canvas_height + scale * (agent_size / 6) * Math.sqrt(3));
  ctx.lineTo(x / 100 * canvas_width - scale * (agent_size / 2), y / 100 * canvas_height + scale * (agent_size / 6) * Math.sqrt(3));
  ctx.closePath();
  ctx.fillStyle = colour;
  ctx.strokeStyle = "rgb(255,255,255,0)";
  ctx.fill();
}

function draw_fps_counter(ctx) {
  ctx.font = "12px Open Sans";
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#000000";

  if (fps.length > 0) {
    ctx.fillText((fps.reduce(function (a, b) {
      return a + b;
    }) / fps.length).toString(), 10, 10);
  }
}

function draw(ctx) {
  ctx.clearRect(0, 0, canvas_width, canvas_height);
  draw_game_graph(ctx);
  animate_agents(ctx); // draw_fps_counter(ctx);
}

function run_robot_animation_3() {
  window.requestAnimationFrame(run_robot_animation_3);
  var canvas = document.getElementById("robot_example_3");
  var ctx = canvas.getContext("2d");
  draw(ctx);
  var delta = (performance.now() - lastCalledTime) / 1000;
  fps.push(1 / delta);
  var N = 100;

  if (fps.length > N) {
    fps.shift();
  }

  lastCalledTime = performance.now();
}

function start_robot_example_3() {
  startTime = new Date();
  run_robot_animation_3();
}

function add_agents() {
  var canvas = document.getElementById("robot_example_1");
  var ctx = canvas.getContext("2d");
  draw_agent(ctx, 8, 70, "#ffb8ff");
  draw_agent(ctx, 8, 30, "#ff0000");
  draw_agent(ctx, 92, 70, "#ffb852");
  draw_agent(ctx, 92, 30, "#00ffff");
}

function main() {
  var canvas = document.getElementById("robot_example_1");
  setupCanvas(canvas);
  var ctx = canvas.getContext("2d");
  draw_game_graph(ctx);
  canvas.addEventListener("click", add_agents); // Full motion example

  canvas = document.getElementById("robot_example_3");
  setupCanvas(canvas);
  ctx = canvas.getContext("2d");
  draw_game_graph(ctx);
  draw_agent(ctx, 8, 70, "#ffb8ff");
  draw_agent(ctx, 8, 30, "#ff0000");
  draw_agent(ctx, 92, 70, "#ffb852");
  draw_agent(ctx, 92, 30, "#00ffff");
  canvas.addEventListener("click", start_robot_example_3);
}

var lastCalledTime = performance.now();
var fps = [];
var startTime = 0;
main();