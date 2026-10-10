// Small progressive enhancements for The Education Junction.
// Uses event delegation so it keeps working after client-side navigation.
(function () {
  "use strict";

  // ───── Abacus ─────
  function setOn(bead, on) {
    bead.dataset.on = String(on);
    bead.setAttribute("aria-pressed", String(on));
  }

  function rodDigit(rod) {
    var heaven = rod.querySelector('[data-kind="heaven"]');
    var five = heaven && heaven.dataset.on === "true" ? 5 : 0;
    return five + rod.querySelectorAll('[data-kind="earth"][data-on="true"]').length;
  }

  function refresh(root) {
    var total = 0;
    root.querySelectorAll("[data-rod]").forEach(function (rod) {
      var d = rodDigit(rod);
      var place = Number(rod.dataset.place);
      total += d * place;
      var out = root.querySelector('[data-digit-for="' + place + '"]');
      if (out) out.textContent = String(d);
    });
    var value = root.querySelector("[data-abacus-value]");
    if (value) value.textContent = total.toLocaleString("en-GB");
    root.dataset.solved = String(total === Number(root.dataset.target));
  }

  function moveBead(bead) {
    var rod = bead.closest("[data-rod]");
    if (bead.dataset.kind === "heaven") {
      setOn(bead, bead.dataset.on !== "true");
      return;
    }
    // Earth beads move as a block: beads between the tapped one and the bar move with it.
    var i = Number(bead.dataset.index);
    var earth = rod.querySelectorAll('[data-kind="earth"]');
    var count = rod.querySelectorAll('[data-kind="earth"][data-on="true"]').length;
    var next = count >= i ? i - 1 : i;
    earth.forEach(function (b) {
      setOn(b, Number(b.dataset.index) <= next);
    });
  }

  function nextTarget(root) {
    var targets = (root.dataset.targets || "").split(",").map(Number);
    var at = targets.indexOf(Number(root.dataset.target));
    var target = targets[(at + 1) % targets.length];
    root.dataset.target = String(target);
    root.querySelectorAll("[data-abacus-target]").forEach(function (el) {
      el.textContent = target.toLocaleString("en-GB");
    });
  }

  document.addEventListener("click", function (ev) {
    var t = ev.target;
    if (!(t instanceof Element)) return;

    var bead = t.closest("[data-bead]");
    if (bead) {
      moveBead(bead);
      refresh(bead.closest("[data-abacus]"));
      return;
    }

    var clear = t.closest("[data-abacus-clear]");
    if (clear) {
      var r = clear.closest("[data-abacus]");
      r.querySelectorAll("[data-bead]").forEach(function (b) {
        setOn(b, false);
      });
      refresh(r);
      return;
    }

    var next = t.closest("[data-abacus-next]");
    if (next) {
      var root = next.closest("[data-abacus]");
      nextTarget(root);
      refresh(root);
      return;
    }

    // ───── Mobile menu: close after choosing a link, or tapping outside ─────
    var menuLink = t.closest("[data-menu] a");
    if (menuLink) {
      menuLink.closest("details").removeAttribute("open");
      return;
    }
    document.querySelectorAll("details[data-menu][open]").forEach(function (d) {
      if (!d.contains(t)) d.removeAttribute("open");
    });
  });

  // ───── Free trial reply slip: compose an email ─────
  document.addEventListener("submit", function (ev) {
    var form = ev.target;
    if (!(form instanceof HTMLFormElement) || !form.hasAttribute("data-trial-form")) return;
    ev.preventDefault();

    var data = new FormData(form);
    var classes = data.getAll("classes").join(", ") || "Not sure yet, please recommend";
    var lines = [
      "Hello The Education Junction,",
      "",
      "I'd like to book a free trial class.",
      "",
      "Student's name: " + (data.get("student") || ""),
      "Age: " + (data.get("age") || ""),
      "Interested in: " + classes,
      "Country / time zone: " + (data.get("timezone") || ""),
      "Preferred days and times: " + (data.get("times") || ""),
      "",
      "Parent/guardian: " + (data.get("parent") || ""),
      "Reply to: " + (data.get("email") || ""),
    ];
    var href =
      "mailto:" +
      form.dataset.email +
      "?subject=" +
      encodeURIComponent("Free trial class request: " + (data.get("student") || "")) +
      "&body=" +
      encodeURIComponent(lines.join("\n"));

    var note = form.querySelector("[data-trial-note]");
    if (note) note.hidden = false;
    window.location.href = href;
  });
})();
