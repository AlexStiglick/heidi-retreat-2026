(function () {
  var plan = window.PLAN;
  if (!plan) return;

  function setText(id, text) {
    var el = document.getElementById(id);
    if (el && text != null) el.textContent = text;
  }

  function appendParagraphs(container, paragraphs) {
    if (!paragraphs || !paragraphs.length) return;
    paragraphs.forEach(function (text) {
      if (!text) return;
      var p = document.createElement("p");
      p.textContent = text;
      container.appendChild(p);
    });
  }

  setText("plan-eyebrow", plan.eyebrow);
  setText("plan-title", plan.title);
  setText("plan-subtitle", plan.subtitle);
  setText("plan-tagline", plan.tagline);
  setText("plan-footer", plan.footer);

  var gallery = document.getElementById("plan-hero-gallery");
  if (gallery && plan.heroImages && plan.heroImages.length) {
    plan.heroImages.forEach(function (src) {
      if (!src) return;
      var img = document.createElement("img");
      img.src = src;
      img.alt = "";
      img.loading = "lazy";
      img.decoding = "async";
      img.referrerPolicy = "no-referrer-when-downgrade";
      img.className = "hero__gallery-img";
      gallery.appendChild(img);
    });
  }

  var list = document.getElementById("plan-sections");
  if (!list || !plan.sections) return;

  plan.sections.forEach(function (section) {
    var li = document.createElement("li");
    li.className = "timeline__item";

    var card = document.createElement("article");
    card.className = "timeline__card";

    var h = document.createElement("h2");
    h.className = "timeline__heading";
    h.textContent = section.title || "";

    var body = document.createElement("div");
    body.className = "timeline__body";
    appendParagraphs(body, section.paragraphs);

    if (section.bullets && section.bullets.length) {
      var ul = document.createElement("ul");
      ul.className = "timeline__list";
      section.bullets.forEach(function (item) {
        if (!item) return;
        var liItem = document.createElement("li");
        liItem.textContent = item;
        ul.appendChild(liItem);
      });
      body.appendChild(ul);
    }

    card.appendChild(h);
    card.appendChild(body);
    li.appendChild(card);
    list.appendChild(li);
  });
})();
