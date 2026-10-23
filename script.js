let count = 0;
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  count++;
  btn.textContent = `Clicked ${count} time${count === 1 ? "" : "s"}`;
});
