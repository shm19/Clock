setInterval(
  () =>
    (document.querySelector(
      "#time"
    ).innerHTML = new Date().toLocaleTimeString()),
  1000
);
