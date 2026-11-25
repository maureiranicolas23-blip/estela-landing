/* =========================================================
   ESTELA · Interacciones
   ========================================================= */
(function () {
  "use strict";

  var CFG = window.ESTELA_CONFIG || {};
  var PLACEHOLDER_EMAIL = "tu-correo@ejemplo.com";
  var PLACEHOLDER_WA = "56900000000";
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---------- Unsplash helper ---------- */
  function img(id, w) { return "https://images.unsplash.com/photo-" + id + "?auto=format&fit=crop&w=" + (w || 900) + "&q=75"; }

  /* =========================================================
     GALERÍA · edita esta lista para mostrar tus proyectos.
     - type: "image" o "video"
     - src: ruta a tu archivo (ej. "assets/img/fachada-1.jpg" o "assets/video/obra.mp4")
     - poster: (solo video) imagen de portada
     - size: "" | "tall" | "wide"  (controla el mosaico)
     ========================================================= */
  var CATEGORIES = [
    { key: "all", label: "Todos" },
    { key: "exterior", label: "Exterior" },
    { key: "interior", label: "Interior" },
    { key: "techos", label: "Techos" },
    { key: "departamentos", label: "Departamentos" },
    { key: "oficinas", label: "Oficinas" },
    { key: "jardines", label: "Jardines" },
    { key: "empresas", label: "Empresas" },
    { key: "negocios", label: "Diseño para negocios" },
    { key: "reparacion", label: "Reparación de muros" }
  ];

  var GALLERY = [
    { cat: "exterior", title: "Casas de colores en Valparaíso", type: "image", src: img("1490782300182-697b80ad4293", 1200), size: "wide" },
    { cat: "techos", title: "Cuadrilla trabajando en techo de zinc", type: "image", src: img("1761393665973-62fb8847bf9d"), size: "tall" },
    { cat: "negocios", title: "Mural para local comercial", type: "image", src: img("1531913764164-f85c52e6e654"), size: "" },
    { cat: "exterior", title: "Pintura de fachada en altura", type: "image", src: img("1574359411659-15573a27fd0c"), size: "" },
    { cat: "departamentos", title: "Edificios residenciales", type: "image", src: img("1767925539117-90fca23dba24", 1200), size: "wide" },
    { cat: "techos", title: "Fijación de planchas de zinc", type: "image", src: img("1780445392484-5fb7d5610708"), size: "" },
    { cat: "interior", title: "Living en tonos cálidos", type: "image", src: img("1600607687939-ce8a6c25118c"), size: "tall" },
    { cat: "jardines", title: "Antejardín y reja", type: "image", src: img("1684631828381-c80ef6105bf4"), size: "" },
    { cat: "exterior", title: "Casa de madera pintada", type: "image", src: img("1690475781292-cb874b9b0f3a"), size: "" },
    { cat: "empresas", title: "Santiago corporativo", type: "image", src: img("1646339970423-ab15b194bd9c", 1200), size: "wide" },
    { cat: "techos", title: "Reparación de techo en altura", type: "image", src: img("1681049400158-0ff6249ac315"), size: "" },
    { cat: "negocios", title: "Ambientación de cafetería", type: "image", src: img("1554118811-1e0d58224f24"), size: "tall" },
    { cat: "oficinas", title: "Oficina abierta", type: "image", src: img("1497366811353-6870744d04b2"), size: "" },
    { cat: "reparacion", title: "Pintor en escalera", type: "image", src: img("1742900280861-32bed068938b"), size: "" },
    { cat: "techos", title: "Cubierta metálica", type: "image", src: img("1691571026798-1c5819901996"), size: "tall" },
    { cat: "exterior", title: "Casa con buganvilia", type: "image", src: img("1773935109783-9398f7744b71"), size: "" },
    { cat: "departamentos", title: "Living de departamento", type: "image", src: img("1502672260266-1c1ef2d93688"), size: "" },
    { cat: "jardines", title: "Barrio residencial con áreas verdes", type: "image", src: img("1709728970692-531ea2a2f7a1", 1200), size: "wide" },
    { cat: "techos", title: "Trabajo con arnés de seguridad", type: "image", src: img("1635424709870-cdc6e64f0e20"), size: "" },
    { cat: "interior", title: "Dormitorio principal", type: "image", src: img("1505693416388-ac5ce068fe85"), size: "" },
    { cat: "exterior", title: "Casa de madera blanca", type: "image", src: img("1690475781290-05f0f20bed96"), size: "" },
    { cat: "negocios", title: "Restaurante", type: "image", src: img("1517248135467-4c7edcad34c4"), size: "" },
    { cat: "reparacion", title: "Preparación de superficies", type: "image", src: img("1562259949-e8e7689d7828"), size: "" },
    { cat: "oficinas", title: "Oficina luminosa", type: "image", src: img("1524758631624-e2822e304c36"), size: "" },
    { cat: "departamentos", title: "Comedor de departamento", type: "image", src: img("1560185007-cde436f6a4d0"), size: "" },
    { cat: "negocios", title: "Tienda de ropa", type: "image", src: img("1441986300917-64674bd600d8", 1200), size: "wide" }
    // Ejemplo de video:
    // { cat: "exterior", title: "Pintura de fachada en timelapse", type: "video", src: "assets/video/fachada.mp4", poster: "assets/img/fachada-poster.jpg", size: "wide" },
  ];

  document.documentElement.classList.remove("no-js");

  /* ---------- Datos de contacto desde config ---------- */
  var waNumber = String(CFG.whatsapp || "").replace(/\D/g, "");
  var waBase = "https://wa.me/" + waNumber;
  $$('[data-bind="phone"]').forEach(function (el) {
    el.textContent = CFG.phoneDisplay || ("+" + waNumber);
    el.setAttribute("href", waBase + "?text=" + encodeURIComponent("Hola Estela 👋 Quiero cotizar un trabajo de pintura."));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });
  $$('[data-bind="email"]').forEach(function (el) {
    el.textContent = CFG.email || "";
    el.setAttribute("href", "mailto:" + CFG.email);
  });
  $$('[data-bind="coverage"]').forEach(function (el) { el.textContent = CFG.coverage || ""; });

  $$('[data-bind="phone-text"]').forEach(function (el) { el.textContent = CFG.phoneDisplay || ("+" + waNumber); });
  $$('[data-bind="hours"]').forEach(function (el) { el.textContent = CFG.hours || "Respondemos a la brevedad"; });
  var year = $("#year"); if (year) year.textContent = new Date().getFullYear();

  function waLink(text) { return waBase + "?text=" + encodeURIComponent(text); }

  /* =========================================================
     WHATSAPP · acompañamiento durante toda la visita
     ========================================================= */
  // Mensajes prellenados: guían al cliente con los datos que necesitamos para
  // responder con una orientación concreta desde el primer mensaje.
  function waTemplate(intro, fields, outro) {
    return intro + "\n\n" + fields.map(function (f) { return f + ": "; }).join("\n") + "\n\n" + outro;
  }
  var WA_TOPICS = {
    cotizar: waTemplate(
      "Hola Estela 👋 Quiero cotizar un trabajo de pintura.",
      ["📍 Comuna", "🏠 Tipo de espacio (casa, depto, oficina, local, techo…)", "📐 Metros o n.º de ambientes aprox.", "🎨 Qué necesito (pintar, reparar muros, cambio de color…)"],
      "Les adjunto fotos del lugar 📸 ¡Gracias!"
    ),
    visita: waTemplate(
      "Hola Estela 👋 Me gustaría agendar una visita técnica para evaluar mi espacio.",
      ["📍 Comuna / dirección aproximada", "🏠 Tipo de espacio", "📅 Días y horario que me acomodan", "📝 Breve descripción del trabajo"],
      "Quedo atento(a) para coordinar. ¡Gracias!"
    ),
    negocio: waTemplate(
      "Hola Estela 👋 Tengo un negocio y me interesa un diseño personalizado para mis muros.",
      ["🏪 Nombre y rubro del negocio", "📍 Comuna", "🧱 Muros a intervenir (interior, fachada, medidas aprox.)", "🎨 Idea o estilo que busco (mural, logo, colores de marca…)"],
      "Si sirve, les envío mi logo y fotos del local 📸"
    ),
    duda: waTemplate(
      "Hola Estela 👋 Tengo una consulta.",
      ["❓ Mi consulta", "📍 Comuna"],
      "¡Gracias!"
    )
  };
  // Mensaje del chat y texto sugerido según la sección que el usuario está viendo.
  var WA_CONTEXT = {
    servicios: {
      msg: "¿Viendo nuestros servicios? 🏠 Cada superficie necesita una preparación distinta. Cuéntanos qué espacio es y te recomendamos el tratamiento y la pintura adecuados para que el resultado dure.",
      text: WA_TOPICS.cotizar, topic: "cotizar"
    },
    negocios: {
      msg: "¿Tienes un negocio? 🏪 Un muro bien diseñado refuerza tu marca y hace que te recuerden. Cuéntanos tu rubro y te proponemos una idea visual antes de pintar.",
      text: WA_TOPICS.negocio, topic: "negocio"
    },
    proyectos: {
      msg: "¿Te gustó algún proyecto? ✨ Envíanos una foto de tu espacio y te contamos qué se puede lograr, con ideas de color y terminación.",
      text: waTemplate(
        "Hola Estela 👋 Vi sus proyectos y me gustaría algo similar para mi espacio.",
        ["📍 Comuna", "🏠 Tipo de espacio", "✨ Proyecto o estilo que me gustó"],
        "Les adjunto fotos de mi espacio 📸 ¡Gracias!"
      ), topic: "cotizar"
    },
    proceso: {
      msg: "Trabajamos sin sorpresas 🤝 Antes de partir sabes exactamente qué se hará, con qué materiales, en qué plazo y a qué valor. Pregúntanos lo que necesites.",
      text: WA_TOPICS.duda, topic: "duda"
    },
    agendar: {
      msg: "¿Prefieres coordinar por aquí? 📅 Escríbenos y acordamos día y hora contigo. En la visita evaluamos superficies y medidas y te asesoramos en colores.",
      text: WA_TOPICS.visita, topic: "visita"
    }
  };

  var wa = $("#wa"), waFab = $("#waFab"), waPanel = $("#waPanel"), waSend = $("#waSend");
  var waCtx = $("#waCtx"), waTeaser = $("#waTeaser"), waBadge = $("#waBadge");
  var waText = WA_TOPICS.cotizar, waSection = null, waPickedByUser = false;

  function store(k, v) { try { if (v === undefined) return sessionStorage.getItem(k); sessionStorage.setItem(k, v); } catch (e) { return null; } }

  function setWaText(text) { waText = text; waSend.href = waLink(text); }
  function pressTopic(key) {
    $$("#waQuick button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.wa === key)); });
  }
  setWaText(waText);

  function openWa() {
    waPanel.hidden = false; waTeaser.hidden = true; waBadge.hidden = true;
    waFab.setAttribute("aria-expanded", "true"); waFab.setAttribute("aria-label", "Cerrar chat de WhatsApp");
    store("estela_wa_seen", "1");
  }
  function closeWa() {
    waPanel.hidden = true;
    waFab.setAttribute("aria-expanded", "false"); waFab.setAttribute("aria-label", "Abrir chat de WhatsApp");
  }
  waFab.addEventListener("click", function () { waPanel.hidden ? openWa() : closeWa(); });
  $("#waClose").addEventListener("click", closeWa);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !waPanel.hidden) closeWa(); });

  $$("#waQuick button").forEach(function (b) {
    b.addEventListener("click", function () {
      waPickedByUser = true; pressTopic(b.dataset.wa); setWaText(WA_TOPICS[b.dataset.wa]);
    });
  });

  // Aviso suave: aparece una vez por visita, a los 8 s o al recorrer parte de la página.
  var teaserShown = !!store("estela_wa_seen");
  function showTeaser() {
    if (teaserShown || !waPanel.hidden) return;
    teaserShown = true; store("estela_wa_seen", "1");
    waTeaser.hidden = false; waBadge.hidden = false;
    setTimeout(function () { waTeaser.hidden = true; }, 12000);
  }
  setTimeout(showTeaser, 8000);
  window.addEventListener("scroll", function () { if (window.scrollY > window.innerHeight * 1.2) showTeaser(); }, { passive: true });
  waTeaser.addEventListener("click", function (e) { if (e.target.id !== "waTeaserClose") openWa(); });
  $("#waTeaserClose").addEventListener("click", function () { waTeaser.hidden = true; });

  // Contexto según la sección visible.
  if ("IntersectionObserver" in window) {
    var secIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var c = WA_CONTEXT[e.target.id];
        if (!c || waSection === e.target.id) return;
        waSection = e.target.id;
        waCtx.textContent = c.msg; waCtx.hidden = false;
        $("#waTeaserText").textContent = c.msg;
        if (!waPickedByUser) { setWaText(c.text); pressTopic(c.topic); }
      });
    }, { rootMargin: "-45% 0px -45% 0px" });
    Object.keys(WA_CONTEXT).forEach(function (id) { var s = document.getElementById(id); if (s) secIO.observe(s); });
  }

  // Enlaces directos a WhatsApp repartidos por la página.
  var WA_LINKS = { hero: WA_TOPICS.cotizar, agendar: WA_TOPICS.visita, negocio: WA_TOPICS.negocio };
  $$("[data-wa-link]").forEach(function (a) { a.href = waLink(WA_LINKS[a.dataset.waLink] || WA_TOPICS.cotizar); });

  /* ---------- Header ---------- */
  var header = $(".header");
  function onScroll() { header.classList.toggle("is-scrolled", window.scrollY > 10); }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  /* ---------- Menú móvil ---------- */
  var toggle = $("#menuToggle"), nav = $("#nav");
  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    document.body.style.overflow = open ? "hidden" : "";
  }
  toggle.addEventListener("click", function () { setMenu(!nav.classList.contains("is-open")); });
  $$("a", nav).forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });

  /* ---------- Reveal on scroll ---------- */
  var io = "IntersectionObserver" in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }) : null;
  function observe(el) { if (io) io.observe(el); else el.classList.add("is-in"); }
  $$(".reveal").forEach(observe);

  /* ---------- Galería ---------- */
  var filtersEl = $("#filters"), galleryEl = $("#gallery");
  var current = "all", visible = [];

  CATEGORIES.forEach(function (c) {
    if (c.key !== "all" && !GALLERY.some(function (g) { return g.cat === c.key; })) return;
    var b = document.createElement("button");
    b.className = "filter"; b.type = "button"; b.setAttribute("role", "tab");
    b.dataset.key = c.key; b.textContent = c.label;
    b.setAttribute("aria-selected", String(c.key === current));
    b.addEventListener("click", function () { current = c.key; renderGallery(); });
    filtersEl.appendChild(b);
  });

  function labelOf(key) { var c = CATEGORIES.filter(function (x) { return x.key === key; })[0]; return c ? c.label : key; }

  function renderGallery() {
    $$(".filter", filtersEl).forEach(function (b) { b.setAttribute("aria-selected", String(b.dataset.key === current)); });
    visible = GALLERY.filter(function (g) { return current === "all" || g.cat === current; });
    galleryEl.innerHTML = "";
    visible.forEach(function (g, i) {
      var t = document.createElement("button");
      t.type = "button";
      t.className = "tile" + (g.size ? " tile--" + g.size : "");
      t.style.animationDelay = Math.min(i * 40, 400) + "ms";
      t.setAttribute("aria-label", "Ver " + g.title);
      var media;
      if (g.type === "video") {
        media = '<video src="' + g.src + '" ' + (g.poster ? 'poster="' + g.poster + '" ' : "") + 'muted loop playsinline preload="metadata"></video>' +
                '<span class="tile__play" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 14 14"><path d="M3 1.5v11l9-5.5z" fill="currentColor"/></svg></span>';
      } else {
        media = '<img loading="lazy" src="' + g.src + '" alt="' + g.title + '">';
      }
      t.innerHTML = media + '<span class="tile__meta"><span class="tile__title">' + g.title + '</span><span class="tile__cat">' + labelOf(g.cat) + "</span></span>";
      if (g.type === "video") {
        var v = t.querySelector("video");
        t.addEventListener("mouseenter", function () { v.play().catch(function () {}); });
        t.addEventListener("mouseleave", function () { v.pause(); });
      }
      t.addEventListener("click", function () { openLightbox(i); });
      galleryEl.appendChild(t);
    });
  }
  renderGallery();

  /* ---------- Lightbox ---------- */
  var lb = $("#lightbox"), lbStage = $("#lbStage"), lbCaption = $("#lbCaption"), lbIndex = 0, lastFocus = null;
  function showLb(i) {
    lbIndex = (i + visible.length) % visible.length;
    var g = visible[lbIndex];
    lbStage.innerHTML = g.type === "video"
      ? '<video src="' + g.src + '" ' + (g.poster ? 'poster="' + g.poster + '" ' : "") + 'controls autoplay playsinline></video>'
      : '<img src="' + g.src.replace(/w=\d+/, "w=1800") + '" alt="' + g.title + '">';
    lbCaption.textContent = g.title + " · " + labelOf(g.cat);
  }
  function openLightbox(i) {
    lastFocus = document.activeElement;
    showLb(i); lb.hidden = false; document.body.style.overflow = "hidden"; $("#lbClose").focus();
  }
  function closeLightbox() {
    lb.hidden = true; lbStage.innerHTML = ""; document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }
  $("#lbClose").addEventListener("click", closeLightbox);
  $("#lbPrev").addEventListener("click", function () { showLb(lbIndex - 1); });
  $("#lbNext").addEventListener("click", function () { showLb(lbIndex + 1); });
  lb.addEventListener("click", function (e) { if (e.target === lb || e.target === lbStage) closeLightbox(); });
  document.addEventListener("keydown", function (e) {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showLb(lbIndex - 1);
    if (e.key === "ArrowRight") showLb(lbIndex + 1);
  });

  /* ---------- Antes / Después ---------- */
  var ba = $("#beforeAfter");
  if (ba) {
    var range = $(".ba__range", ba);
    range.addEventListener("input", function () { ba.style.setProperty("--pos", range.value + "%"); });
  }

  /* ---------- Formulario ---------- */
  var form = $("#bookingForm"), statusEl = $("#formStatus"), submitBtn = $("#submitBtn");
  var serviceSel = $("#f-servicio"), bizField = $(".field--biz"), dateInput = $("#f-fecha");

  // Fecha mínima: mañana
  var tmr = new Date(); tmr.setDate(tmr.getDate() + 1);
  dateInput.min = tmr.getFullYear() + "-" + String(tmr.getMonth() + 1).padStart(2, "0") + "-" + String(tmr.getDate()).padStart(2, "0");

  function syncBiz() { bizField.hidden = serviceSel.value !== "Diseño personalizado para negocio"; }
  serviceSel.addEventListener("change", syncBiz);

  // Botones "Cotizar este servicio" -> preselecciona y baja al formulario
  $$("[data-service]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      serviceSel.value = btn.dataset.service; syncBiz();
      $("#agendar").scrollIntoView({ behavior: "smooth" });
      setTimeout(function () { $("#f-nombre").focus({ preventScroll: true }); }, 700);
    });
  });

  if (CFG.whatsappMode === "off") $(".form__note").textContent = "Al enviar, recibimos tu solicitud por correo y te contactamos para confirmar.";
  if (CFG.whatsappMode === "button") $(".form__note").textContent = "Al enviar, recibimos tu solicitud por correo y podrás continuar por WhatsApp si lo prefieres.";

  function setError(field, msg) {
    var wrap = field.closest(".field") || field.closest(".consent");
    if (!wrap) return;
    wrap.classList.add("is-invalid");
    if (wrap.classList.contains("field") && !wrap.querySelector(".field__error")) {
      var e = document.createElement("span"); e.className = "field__error"; e.textContent = msg; wrap.appendChild(e);
    }
  }
  function clearError(field) {
    var wrap = field.closest(".field") || field.closest(".consent");
    if (!wrap) return;
    wrap.classList.remove("is-invalid");
    var e = wrap.querySelector(".field__error"); if (e) e.remove();
  }
  $$("input, select, textarea", form).forEach(function (f) {
    f.addEventListener("input", function () { clearError(f); });
    f.addEventListener("change", function () { clearError(f); });
  });

  function validate() {
    var ok = true, first = null;
    function fail(el, msg) { setError(el, msg); ok = false; if (!first) first = el; }
    var n = form.nombre, t = form.telefono, m = form.email, s = form.servicio, d = form.fecha, c = form.consentimiento;
    [n, t, m, s, d, c].forEach(clearError);
    if (n.value.trim().length < 2) fail(n, "Ingresa tu nombre.");
    if (t.value.replace(/\D/g, "").length < 8) fail(t, "Ingresa un teléfono válido.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(m.value.trim())) fail(m, "Ingresa un correo válido.");
    if (!s.value) fail(s, "Selecciona un servicio.");
    if (!d.value) fail(d, "Elige una fecha.");
    else if (d.value < d.min) fail(d, "Elige una fecha a partir de mañana.");
    if (!c.checked) fail(c, "");
    if (first) first.focus();
    return ok;
  }

  function fmtDate(v) {
    if (!v) return "";
    var p = v.split("-"); return p[2] + "/" + p[1] + "/" + p[0];
  }

  function collect() {
    var fd = new FormData(form);
    return {
      tipo_cita: fd.get("tipo_cita"),
      nombre: (fd.get("nombre") || "").trim(),
      telefono: (fd.get("telefono") || "").trim(),
      email: (fd.get("email") || "").trim(),
      servicio: fd.get("servicio"),
      rubro: (fd.get("rubro") || "").trim(),
      comuna: (fd.get("comuna") || "").trim(),
      fecha: fmtDate(fd.get("fecha")),
      horario: fd.get("horario"),
      mensaje: (fd.get("mensaje") || "").trim()
    };
  }

  function waMessage(d) {
    var lines = [
      "Hola Estela, quiero agendar una *" + d.tipo_cita.toLowerCase() + "*.",
      "",
      "• Nombre: " + d.nombre,
      "• Teléfono: " + d.telefono,
      "• Correo: " + d.email,
      "• Servicio: " + d.servicio + (d.rubro ? " (" + d.rubro + ")" : ""),
      d.comuna ? "• Comuna: " + d.comuna : null,
      "• Fecha preferida: " + d.fecha + ", " + d.horario,
      d.mensaje ? "• Detalle: " + d.mensaje : null,
      "",
      "Si sirve, les envío fotos del lugar 📸 Quedo atento(a) a la confirmación. ¡Gracias!"
    ];
    return lines.filter(function (l) { return l !== null; }).join("\n");
  }

  function sendEmail(d) {
    var email = String(CFG.email || "").trim();
    if (!email || email === PLACEHOLDER_EMAIL) {
      console.warn("[Estela] Configura tu correo en js/config.js para recibir las solicitudes.");
      return Promise.resolve({ skipped: true });
    }
    var payload = {
      _subject: "Nueva solicitud: " + d.tipo_cita + " · " + d.servicio + " · " + d.nombre,
      _template: "table",
      _replyto: d.email,
      _honey: form._honey.value,
      "Tipo de cita": d.tipo_cita,
      "Nombre": d.nombre,
      "Teléfono": d.telefono,
      "Correo": d.email,
      "Servicio": d.servicio,
      "Rubro del negocio": d.rubro || "—",
      "Comuna / Ciudad": d.comuna || "—",
      "Fecha preferida": d.fecha,
      "Horario": d.horario,
      "Mensaje": d.mensaje || "—"
    };
    return fetch("https://formsubmit.co/ajax/" + encodeURIComponent(email), {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(payload)
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (j) {
        if (!r.ok || String(j.success) === "false") throw new Error(j.message || "Error " + r.status);
        return j;
      });
    });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (form._honey.value) return; // bot
    if (!validate()) return;

    var d = collect();
    var mode = CFG.whatsappMode || "auto";
    var waOk = waNumber && waNumber !== PLACEHOLDER_WA;
    var waUrl = waBase + "?text=" + encodeURIComponent(waMessage(d));

    // Se abre en el mismo clic para que el navegador no lo bloquee.
    if (mode === "auto" && waOk) window.open(waUrl, "_blank", "noopener");

    submitBtn.classList.add("is-loading");
    statusEl.className = "form__status"; statusEl.innerHTML = "";

    sendEmail(d).then(function () {
      statusEl.className = "form__status is-ok";
      statusEl.innerHTML = "<strong>¡Gracias, " + d.nombre.split(" ")[0] + "!</strong> Recibimos tu solicitud de " +
        d.tipo_cita.toLowerCase() + " para el " + d.fecha + ". Te contactaremos pronto para confirmar." +
        (mode !== "off" && waOk ? '<br><a class="btn btn--dark btn--sm" href="' + waUrl + '" target="_blank" rel="noopener">' +
          (mode === "auto" ? "Abrir WhatsApp nuevamente" : "Continuar por WhatsApp") + "</a>" : "");
      form.reset(); syncBiz();
    }).catch(function (err) {
      console.error(err);
      statusEl.className = "form__status is-err";
      statusEl.innerHTML = "No pudimos enviar tu solicitud por correo. " +
        (waOk ? 'Puedes <a href="' + waUrl + '" target="_blank" rel="noopener">enviarla por WhatsApp</a> o ' : "") +
        'escribirnos a <a href="mailto:' + CFG.email + '">' + CFG.email + "</a>.";
    }).then(function () {
      submitBtn.classList.remove("is-loading");
    });
  });
})();
