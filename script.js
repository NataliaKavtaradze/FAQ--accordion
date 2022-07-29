let acc = document.getElementsByClassName("accordion");

for (i = 0; i < acc.length; i++) {
  let panel = document.getElementsByClassName("panel")[i];
  acc[i].addEventListener("click", function () {
    let panels = document.querySelectorAll(".panel");
    panels.forEach(function (panel) {
      panel.style.display = "none";
    });
    this.classList.toggle("opened");

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
