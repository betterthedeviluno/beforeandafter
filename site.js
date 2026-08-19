// Before & After — small progressive-enhancement script (no framework required)
(function () {
  var answers = {
    "Who do you work with?":
      "Homeowners preparing to sell, real estate professionals presenting a listing, and anyone who wants their current space to feel more considered.",
    "Do you work with occupied homes?":
      "Yes. Occupied staging is one of our most requested services. We work with what you already own first, then bring in pieces where they make a difference.",
    "What happens after I inquire?":
      "We follow up to learn about the property, walk through options, and share a plan with timing and scope before anything is booked.",
    "Is this only for homes going on the market?":
      "Not at all. Redesign and refresh projects are for people staying put who want rooms that work harder and feel calmer."
  };

  document.querySelectorAll("#faq button[aria-expanded]").forEach(function (btn) {
    var wrap = btn.parentElement;
    var label = btn.querySelector("span").textContent.trim();
    var p = wrap.querySelector("p");
    if (!p) {
      p = document.createElement("p");
      p.className = "pb-6 text-sm leading-relaxed text-muted-foreground";
      p.textContent = answers[label] || "";
      wrap.appendChild(p);
    }
    var open = btn.getAttribute("aria-expanded") === "true";
    p.hidden = !open;
    btn.addEventListener("click", function () {
      var isOpen = btn.getAttribute("aria-expanded") === "true";
      document.querySelectorAll("#faq button[aria-expanded]").forEach(function (b) {
        b.setAttribute("aria-expanded", "false");
        var bp = b.parentElement.querySelector("p");
        if (bp) bp.hidden = true;
        var ic = b.querySelector("span:last-child");
        if (ic) ic.textContent = "+";
      });
      if (!isOpen) {
        btn.setAttribute("aria-expanded", "true");
        p.hidden = false;
        btn.querySelector("span:last-child").textContent = "\u2013";
      }
    });
  });

  var form = document.querySelector("#contact form");
  if (form) {
    form.addEventListener("submit", function (e) {
      // Replace this with your own form endpoint (Formspree, Netlify Forms, your API, etc.)
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      if (btn) btn.textContent = "Thank you \u2014 we'll be in touch";
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var el = document.querySelector(a.getAttribute("href"));
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
})();
