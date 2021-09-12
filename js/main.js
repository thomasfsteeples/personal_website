/*! For open source licenses, see credits.html. */
"use strict";

operate_accordion();

function operate_accordion() {
  const accordion = document.getElementById("accordion");
  const all_panels = accordion.getElementsByClassName("panel");
  let active_panel = all_panels[0];

  for (const panel of all_panels) {
    let heading = panel.getElementsByTagName("h2")[0];
    heading.addEventListener("click", function () {
      activate_panel(panel);
    });
  }

  function activate_panel(panel) {
    let old_contents = active_panel.getElementsByClassName("contents")[0];
    old_contents.style.display = "none";
    active_panel = panel;
    let new_contents = active_panel.getElementsByClassName("contents")[0];
    new_contents.style.display = "block";
  }
}
