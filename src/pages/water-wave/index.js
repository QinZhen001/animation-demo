import "./index.html";
import "./index.scss";

let mx, my, timer;
let z = 2;

console.log("$", $);

$(".wave-wrapper3").on("click", (e) => {
  console.log("click", e);
  mx = e.offsetX;
  my = e.offsetY;
  z = z + 1;
  wave(mx, my, z);
});

function wave(x, y, z) {
  console.log("x",x)
  console.log("y",y)
  console.log("z",z)
  $(".wave-wrapper3").prepend(
    `
     <div class="wave-position water-${z}"  style="z-inedx:${z};top:${y - 150}px;left:${x - 150}px">
      <div class="wave-body">
          <div class="wave wave5"></div>
          <div class="wave wave4"></div>
          <div class="wave wave3"></div>
          <div class="wave wave2"></div>
          <div class="wave wave1"></div>
          <div class="wave wave0"></div>
        </div>
      </div>
     `
  );

  setTimeout(() => {
    // 移除
    $(`.water-${z}`).remove();
  }, 3000);
}
