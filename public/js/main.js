"use strict";

operate_accordion();

function operate_accordion() {
  const accordion = document.getElementById("accordion");
  const all_panels = accordion.getElementsByClassName("panel");
  let active_panel = all_panels[0];

  for (const panel of all_panels) {
    let current_contents = panel.getElementsByClassName("contents")[0];
    if (panel != active_panel) {
      current_contents.setAttribute("hidden", true);
    }
    let heading = panel.getElementsByTagName("h2")[0];
    heading.addEventListener("click", function () {
      activate_panel(panel);
    });
  }

  function activate_panel(panel) {
    let old_contents = active_panel.getElementsByClassName("contents")[0];
    old_contents.setAttribute("hidden", true);
    active_panel = panel;
    let new_contents = active_panel.getElementsByClassName("contents")[0];
    new_contents.removeAttribute("hidden");
  }
}
