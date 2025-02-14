document.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".box");
  const item = document.querySelector(".item");
  const body = document.querySelector("body");
  const rejectButton = document.getElementById("rejectButton");

  box.addEventListener("mouseenter", () => {
    item.style.transition = "top 0.5s";
    item.style.top = "-90px";
  });

  box.addEventListener("mouseleave", () => {
    item.style.transition = "top 0.5s";
    item.style.top = "0";
  });

  box.addEventListener("click", () => {
    item.style.transition = "top 0.5s";
    item.style.top = "-90px";
  });

  body.addEventListener(
    "click",
    () => {
      item.style.transition = "top 0.5s";
      item.style.top = "0";
    },
    true
  );

  ["mouseenter", "click"].forEach((eventType) => {
    rejectButton.addEventListener(eventType, (event) => {
      event.preventDefault();
      const x = Math.random() * (window.innerWidth - rejectButton.offsetWidth);
      const y = Math.random() * (window.innerHeight - rejectButton.offsetHeight);
      rejectButton.style.position = "absolute";
      rejectButton.style.left = `${x}px`;
      rejectButton.style.top = `${y}px`;
    });
  });

  document.getElementById("acceptButton").addEventListener("click", function () {
    document.body.innerHTML = `
            <div class="action-result">
                <img src="love.gif" alt="GIF" class="gif-content">
                <p class="action-text">You're my Valentine! 💖</p>
            </div>
        `;
  });
});
