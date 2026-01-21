// === Çabuk Elektrik - Site Ayarları ===
const SETTINGS = {
    whatsappNumber: "905448416806",
    whatsappMessage: "Merhaba, Çabuk Elektrik'ten avize hakkında bilgi almak istiyorum. Oda ölçüsü ve fotoğraf paylaşabilirim.",
    phoneText: "0544 841 68 06"
  };
  
  // Ürün Kataloğu
  const PRODUCTS = [
    {
      id: "AMPUL-001",
      title: "Modern Ampul",
      category: ["Ampul"],
      bulbs: "1xE27",
      size: "Standart",
      priceText: "Fiyat için WhatsApp",
      img: "./images/ampul001.jpg"
    },
    {
      id: "AMPUL-002",
      title: "Modern Ampul",
      category: ["Ampul"],
      bulbs: "1xE27",
      size: "Standart",
      priceText: "Fiyat için WhatsApp",
      img: "./images/ampul002.jpg"
    },
    {
      id: "SALON-001",
      title: "Modern Avize",
      category: ["Salon", "Klasik"],
      bulbs: "6xE14",
      size: "Orta Boy",
      priceText: "Fiyat için WhatsApp",
      img: "./images/salon001.jpg"
    },
    {
      id: "SALON-002",
      title: "Modern Avize",
      category: ["Salon", "Klasik"],
      bulbs: "8xE14",
      size: "Büyük Boy",
      priceText: "Fiyat için WhatsApp",
      img: "./images/salon002.jpg"
    },
    {
      id: "SALON-003",
      title: "Modern Avize",
      category: ["Salon", "Modern"],
      bulbs: "LED",
      size: "Standart",
      priceText: "Fiyat için WhatsApp",
      img: "./images/salon003.jpg"
    }
  ];
  
  const grid = document.getElementById("productGrid");
  const chips = document.getElementById("chips");
  const year = document.getElementById("year");
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");
  
  const phoneTextEl = document.getElementById("phoneText");
  if (phoneTextEl) phoneTextEl.textContent = SETTINGS.phoneText;
  
  if (year) year.textContent = new Date().getFullYear();
  
  // --- WhatsApp Link builder ---
  function makeWhatsAppLink() {
    const text = encodeURIComponent(SETTINGS.whatsappMessage);
    return `https://wa.me/${SETTINGS.whatsappNumber}?text=${text}`;
  }
  
  function wireWhatsappLinks(){
    const link = makeWhatsAppLink();
    const ids = ["whatsappBtn", "whatsappHero", "fabWhatsapp", "heroOverlayWhatsapp"];
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.setAttribute("href", link);
    });
  }
  wireWhatsappLinks();
  
  // --- Mobile menu ---
  burger?.addEventListener("click", () => {
    nav?.classList.toggle("is-open");
  });
  
  // --- Render products ---
  let activeFilter = "all";
  
  function productMatches(p, filter){
    if (filter === "all") return true;
    return p.category.includes(filter);
  }
  
  function createCard(p){
    const cats = p.category.map(c => `<span class="tag">${escapeHtml(c)}</span>`).join("");
    const categoryText = p.category.join(", ");
    const priceText = p.priceText || "Fiyat için WhatsApp";

    // Teklif odaklı WhatsApp mesajı
    const productMessage = `Merhaba, Çabuk Elektrik'ten ${escapeHtml(p.title)} (${escapeHtml(p.id)}) için fiyat ve stok bilgisi alabilir miyim?
Ölçü: ${escapeHtml(p.size)} • Ampul: ${escapeHtml(p.bulbs)}
Kullanım alanı: ${escapeHtml(categoryText)}
Oda ölçüsü/fotoğrafı gönderebilirim.`;
    const waText = encodeURIComponent(productMessage);
    const waLink = `https://wa.me/${SETTINGS.whatsappNumber}?text=${waText}`;
  
    const div = document.createElement("div");
    div.className = "card reveal";
    div.innerHTML = `
      <div class="card__img">
        <img src="${p.img}" alt="${escapeHtml(p.title)}" loading="lazy" />
      </div>
      <div class="card__body">
        <div class="card__title">${escapeHtml(p.title)}</div>
        <div class="card__meta">
          <span>${escapeHtml(p.size)}</span>
          <span>•</span>
          <span>${escapeHtml(p.bulbs)}</span>
        </div>
        <div class="card__price">${escapeHtml(priceText)}</div>
        <div class="card__meta" style="margin-top:10px">${cats}</div>
        <div class="card__actions">
          <a class="smallbtn smallbtn--gold" href="${waLink}" target="_blank" rel="noopener">WhatsApp'tan Teklif Al</a>
          <button class="smallbtn" data-detail="${escapeHtml(p.id)}" data-title="${escapeHtml(p.title)}" data-size="${escapeHtml(p.size)}" data-bulbs="${escapeHtml(p.bulbs)}" data-category="${escapeHtml(categoryText)}" data-price="${escapeHtml(priceText)}">Detay</button>
        </div>
      </div>
    `;
    return div;
  }
  
  function render(){
    if (!grid) return;
    grid.innerHTML = "";
    const filtered = PRODUCTS.filter(p => productMatches(p, activeFilter));
    filtered.forEach((p, index) => {
      const card = createCard(p);
      // Stagger animation for product cards
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!prefersReducedMotion) {
        card.style.transitionDelay = `${index * 0.07}s`;
      }
      grid.appendChild(card);
    });
  
    // Detay butonları
    grid.querySelectorAll("button[data-detail]").forEach(btn => {
      btn.addEventListener("click", () => {
        const title = btn.getAttribute("data-title") || "";
        const size = btn.getAttribute("data-size") || "";
        const bulbs = btn.getAttribute("data-bulbs") || "";
        const category = btn.getAttribute("data-category") || "";
        const price = btn.getAttribute("data-price") || "";
        
        const detailText = `${title}\n\nÖlçü: ${size}\nAmpul: ${bulbs}\nKategori: ${category}\n\n${price}`;
        alert(detailText);
      });
    });
    
    // Re-initialize scroll reveal for new cards
    setTimeout(() => {
      initScrollReveal();
    }, 50);
  }
  render();
  
  // --- Filters ---
  chips?.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    if (!target.classList.contains("chip")) return;
  
    chips.querySelectorAll(".chip").forEach(c => c.classList.remove("is-active"));
    target.classList.add("is-active");
  
    activeFilter = target.getAttribute("data-filter") || "all";
    render();
  });
  
  // --- Phone copy ---
  document.getElementById("copyPhone")?.addEventListener("click", async (e) => {
    e.preventDefault();
    try{
      await navigator.clipboard.writeText(SETTINGS.phoneText);
      alert("Telefon kopyalandı: " + SETTINGS.phoneText);
    }catch{
      alert("Kopyalama başarısız.");
    }
  });
  
  // --- Helpers ---
  function escapeHtml(str){
    return String(str)
      .replaceAll("&","&amp;")
      .replaceAll("<","&lt;")
      .replaceAll(">","&gt;")
      .replaceAll('"',"&quot;")
      .replaceAll("'","&#039;");
  }
  
  // --- Scroll Reveal Animations ---
  function initScrollReveal(){
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Show all content immediately if reduced motion is preferred
      document.querySelectorAll('.reveal').forEach(el => {
        el.classList.add('is-visible');
      });
      return;
    }
    
    const revealElements = document.querySelectorAll('.reveal:not(.is-visible)');
    if (revealElements.length === 0) return;
    
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    revealElements.forEach(el => {
      observer.observe(el);
    });
  }
  
  // Initialize scroll reveal on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollReveal);
  } else {
    initScrollReveal();
  }
  
  