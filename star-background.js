const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

const STAR_COUNT = 100;
const STAR_OPACITY = 1;
const stars = [];

for (let i = 0; i < STAR_COUNT; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 1 + 0.2,
    speed: Math.random() * 0.3 + 0.05,
    brightness: Math.random() * 0.4 + 0.3,
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let s of stars) {
    s.y += s.speed;

    if (s.y > canvas.height) {
      s.y = 0;
      s.x = Math.random() * canvas.width;
    }

    ctx.beginPath();
    ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);

    const gray = Math.floor(s.brightness * 255);
    ctx.fillStyle = `rgba(${gray}, ${gray}, ${gray}, ${STAR_OPACITY})`;
    ctx.fill();
  }

  requestAnimationFrame(animate);
}

animate();
