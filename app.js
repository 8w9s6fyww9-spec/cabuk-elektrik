// === Çabuk Elektrik - Site Ayarları ===
const SETTINGS = {
    whatsappNumber: "905448416806",
    whatsappMessage: "Merhaba, Çabuk Elektrik'ten avize hakkında bilgi almak istiyorum. Oda ölçüsü ve fotoğraf paylaşabilirim.",
    phoneText: "0544 841 68 06"
  };
  
  // Görsel Dosyaları Listesi
  const IMAGE_FILES = [
    "ampul001.jpg",
    "ampul002.jpg",
    "anahtar01.jpg",
    "anahtar02.jpg",
    "anahtar03.jpg",
    "anahtar04.jpg",
    "anahtar05.jpg",
    "anahtar06.jpg",
    "salon001.jpg",
    "salon002.jpg",
    "salon003.jpg",
    "salon004.jpg",
    "salon005.jpg",
    "salon006.jpg",
    "salon007.jpg",
    "salon008.jpg",
    "salon009.jpg",
    "salon010.jpg",
    "salon011.jpg",
    "salon012.jpg",
    "salon013.jpg",
    "salon014.jpg",
    "salon015.jpg"
  ];

  // Dosya adından ürün bilgisi oluşturma fonksiyonu
  function createProductFromImage(filename) {
    const baseName = filename.replace('.jpg', '').toLowerCase();
    let id, title, category, bulbs, size;
    
    if (baseName.startsWith('salon')) {
      const num = baseName.replace('salon', '');
      id = `SALON-${num.padStart(3, '0')}`;
      title = "Modern Avize";
      category = ["Avize"];
      bulbs = "—";
      size = "Standart";
    } else if (baseName.startsWith('anahtar')) {
      const num = baseName.replace('anahtar', '').padStart(2, '0');
      id = `ANAHTAR-${num}`;
      title = "Elektrik Anahtarı";
      category = ["Anahtar"];
      bulbs = "—";
      size = "Standart";
    } else if (baseName.startsWith('ampul')) {
      const num = baseName.replace('ampul', '').padStart(3, '0');
      id = `AMPUL-${num}`;
      title = "Modern Ampul";
      category = ["Ampul"];
      bulbs = "1xE27";
      size = "Standart";
    } else {
      // Fallback
      id = baseName.toUpperCase().replace(/([a-z])(\d)/, '$1-$2');
      title = "Ürün";
      category = ["Diğer"];
      bulbs = "—";
      size = "Standart";
    }
    
    return {
      id: id,
      title: title,
      category: category,
      bulbs: bulbs,
      size: size,
      priceText: "Fiyat için WhatsApp",
      img: `images/${filename}`
    };
  }

  // Ürün Kataloğu - Otomatik Oluşturulmuş
  let PRODUCTS = IMAGE_FILES.map(createProductFromImage);
  
  // Özel ürünler - Otomatik oluşturulanları override eder
  const customProducts = [
    {
      id: "ampul001",
      title: "K2 Ampul",
      category: ["Ampul"],
      bulbs: "E27",
      size: "Standart",
      priceText: "Fiyat için WhatsApp",
      img: "images/ampul001.jpg",
      watt: "50W",
      duy: "E27",
      renk: "Beyaz"
    },
    {
      id: "ampul002",
      title: "ACK Ampul",
      category: ["Ampul"],
      bulbs: "E27",
      size: "Standart",
      priceText: "Fiyat için WhatsApp",
      img: "images/ampul002.jpg",
      duy: "E27",
      renk: "Beyaz"
    },
    {
      id: "anahtar01",
      title: "VİKO",
      category: ["Anahtar"],
      bulbs: "—",
      size: "Standart",
      priceText: "Fiyat için WhatsApp",
      img: "images/anahtar01.jpg",
      renk: "Beyaz"
    },
    {
      id: "anahtar02",
      title: "VİKO",
      category: ["Anahtar"],
      bulbs: "—",
      size: "Standart",
      priceText: "Fiyat için WhatsApp",
      img: "images/anahtar02.jpg",
      renk: "Beyaz"
    },
    {
      id: "anahtar03",
      title: "OVİVO",
      category: ["Anahtar"],
      bulbs: "—",
      size: "Standart",
      priceText: "Fiyat için WhatsApp",
      img: "images/anahtar03.jpg",
      renk: "Antrasit"
    },
    {
      id: "anahtar04",
      title: "GÜNSAN",
      category: ["Anahtar"],
      bulbs: "—",
      size: "Standart",
      priceText: "Fiyat için WhatsApp",
      img: "images/anahtar04.jpg",
      renk: "Krem"
    },
    {
      id: "anahtar05",
      title: "OVİVO",
      category: ["Anahtar"],
      bulbs: "—",
      size: "Standart",
      priceText: "Fiyat için WhatsApp",
      img: "images/anahtar05.jpg",
      renk: "Antrasit"
    },
    {
      id: "anahtar06",
      title: "GÜNSAN",
      category: ["Anahtar"],
      bulbs: "—",
      size: "Standart",
      priceText: "Fiyat için WhatsApp",
      img: "images/anahtar06.jpg",
      renk: "Beyaz"
    },
    {
      id: "salon001",
      title: "İSTİRİDYE AVİZE",
      category: ["Avize"],
      bulbs: "—",
      size: "Standart",
      priceText: "Fiyat için WhatsApp",
      img: "images/salon001.jpg",
      renk: "Gold"
    },
    {
      id: "salon002",
      title: "SARKIT AVİZE",
      category: ["Avize"],
      bulbs: "—",
      size: "Standart",
      priceText: "Fiyat için WhatsApp",
      img: "images/salon002.jpg",
      renk: "Siyah/Metal"
    },
    {
      id: "salon003",
      title: "OSMANLI KRİSTAL AVİZE",
      category: ["Avize"],
      bulbs: "—",
      size: "Standart",
      priceText: "Fiyat için WhatsApp",
      img: "images/salon003.jpg",
      renk: "Gold"
    },
    {
      id: "salon004",
      title: "LED SARKIT AVİZE",
      category: ["Avize"],
      bulbs: "—",
      size: "Standart",
      priceText: "Fiyat için WhatsApp",
      img: "images/salon004.jpg",
      renk: "Gold"
    },
    {
      id: "salon005",
      title: "KÜRE CAMLI MODERN LED AVİZE",
      category: ["Avize"],
      bulbs: "—",
      size: "Standart",
      priceText: "Fiyat için WhatsApp",
      img: "images/salon005.jpg",
      renk: "Krom"
    },
    {
      id: "salon006",
      title: "TEKLİ CAM SARKIT AVİZE",
      category: ["Avize"],
      bulbs: "—",
      size: "Standart",
      priceText: "Fiyat için WhatsApp",
      img: "images/salon006.jpg",
      renk: "Beyaz"
    },
    {
      id: "salon007",
      title: "TEKLİ CAM SARKIT AVİZE",
      category: ["Avize"],
      bulbs: "—",
      size: "Standart",
      priceText: "Fiyat için WhatsApp",
      img: "images/salon007.jpg",
      renk: "Siyah"
    },
    {
      id: "salon008",
      title: "TEKLİ PİRAMİT AVİZE",
      category: ["Avize"],
      bulbs: "—",
      size: "Standart",
      priceText: "Fiyat için WhatsApp",
      img: "images/salon008.jpg",
      renk: "Siyah/Metal"
    },
    {
      id: "salon009",
      title: "TEKLİ SARKIT AVİZE",
      category: ["Avize"],
      bulbs: "—",
      size: "Standart",
      priceText: "Fiyat için WhatsApp",
      img: "images/salon009.jpg",
      renk: "Beyaz"
    },
    {
      id: "salon010",
      title: "KLASİK FENER DUVAR APLİĞİ",
      category: ["Avize"],
      bulbs: "—",
      size: "Standart",
      priceText: "Fiyat için WhatsApp",
      img: "images/salon010.jpg",
      renk: "Siyah"
    },
    {
      id: "salon011",
      title: "SARAY TİPİ DUVAR APLİĞİ",
      category: ["Avize"],
      bulbs: "—",
      size: "Standart",
      priceText: "Fiyat için WhatsApp",
      img: "images/salon011.jpg",
      renk: "Krem"
    },
    {
      id: "salon012",
      title: "SİYAH MODERN TEKLİ SARKIT AVİZE",
      category: ["Avize"],
      bulbs: "—",
      size: "Standart",
      priceText: "Fiyat için WhatsApp",
      img: "images/salon012.jpg",
      renk: "Siyah"
    },
    {
      id: "salon013",
      title: "SİYAH TEKLİ SARKIT AVİZE",
      category: ["Avize"],
      bulbs: "—",
      size: "Standart",
      priceText: "Fiyat için WhatsApp",
      img: "images/salon013.jpg",
      renk: "Siyah"
    },
    {
      id: "salon014",
      title: "HALAT SARKIT AVİZE",
      category: ["Avize"],
      bulbs: "—",
      size: "Standart",
      priceText: "Fiyat için WhatsApp",
      img: "images/salon014.jpg",
      renk: "Beyaz"
    },
    {
      id: "salon015",
      title: "KRİSTAL TAŞLI SALON AVİZESİ",
      category: ["Avize"],
      bulbs: "—",
      size: "Standart",
      priceText: "Fiyat için WhatsApp",
      img: "images/salon015.jpg",
      renk: "Beyaz/Cam"
    }
  ];
  
  // Özel ürünleri ekle veya güncelle
  customProducts.forEach(customProduct => {
    const existingIndex = PRODUCTS.findIndex(p => p.id === customProduct.id || p.img === customProduct.img);
    if (existingIndex !== -1) {
      // Mevcut ürünü güncelle
      PRODUCTS[existingIndex] = { ...PRODUCTS[existingIndex], ...customProduct };
    } else {
      // Yeni ürün ekle
      PRODUCTS.push(customProduct);
    }
  });
  
  // Toplam ürün sayısını console'a yazdır
  console.log("Toplam ürün:", PRODUCTS.length);
  
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
    const ids = ["whatsappBtn", "whatsappHero", "fabWhatsapp", "heroOverlayWhatsapp", "faqCtaWhatsapp"];
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
  
  // Kategori mapping: HTML'deki kategori isimlerini data-category değerlerine çevir
  function getCategorySlug(categoryName) {
    const mapping = {
      "Avize": "avize",
      "Anahtar": "anahtar",
      "Ampul": "ampul"
    };
    return mapping[categoryName] || categoryName.toLowerCase();
  }
  
  function productMatches(p, filter){
    if (filter === "all") return true;
    // Kategori array'inde filter değerini ara
    return p.category.includes(filter);
  }
  
  function createCard(p){
    const cats = p.category.map(c => `<span class="tag">${escapeHtml(c)}</span>`).join("");
    const categoryText = p.category.join(", ");
    const priceText = p.priceText || "Fiyat için WhatsApp";
    
    // İlk kategoriyi data-category için kullan (küçük harf)
    const primaryCategory = p.category[0] || "";
    const categorySlug = getCategorySlug(primaryCategory);

    // WhatsApp mesajı - özel ürünler için özel mesaj
    let productMessage;
    if (p.watt && p.duy && p.renk) {
      // K2 Ampul gibi watt içeren özel ürünler için
      productMessage = `Merhaba, K2 Ampul (50W, E27, Beyaz) için fiyat alabilir miyim?`;
    } else if (p.duy && p.renk && !p.watt) {
      // ACK Ampul gibi sadece duy ve renk içeren özel ürünler için
      productMessage = `Merhaba, ACK Ampul (E27, Beyaz) için fiyat alabilir miyim?`;
    } else if (p.id === "anahtar01") {
      // VİKO anahtar01 için özel mesaj
      productMessage = `Merhaba, anahtar01 için fiyat alabilir miyim?`;
    } else if (p.id === "anahtar02") {
      // VİKO anahtar02 için özel mesaj
      productMessage = `Merhaba, anahtar02 için fiyat alabilir miyim?`;
    } else if (p.id === "anahtar03") {
      // OVİVO anahtar03 için özel mesaj
      productMessage = `Merhaba, anahtar03 için fiyat alabilir miyim?`;
    } else if (p.id === "anahtar04") {
      // GÜNSAN anahtar04 için özel mesaj
      productMessage = `Merhaba, anahtar04 için fiyat alabilir miyim?`;
    } else if (p.id === "anahtar05") {
      // OVİVO anahtar05 için özel mesaj
      productMessage = `Merhaba, anahtar05 için fiyat alabilir miyim?`;
    } else if (p.id === "anahtar06") {
      // GÜNSAN anahtar06 için özel mesaj
      productMessage = `Merhaba, anahtar06 için fiyat alabilir miyim?`;
    } else if (p.id === "salon001") {
      // İSTİRİDYE AVİZE için özel mesaj
      productMessage = `Merhaba, İSTRİDYE AVİZE için fiyat alabilir miyim?`;
    } else if (p.id === "salon002") {
      // SARKIT AVİZE için özel mesaj
      productMessage = `Merhaba, Sarkıt Avize için fiyat alabilir miyim?`;
    } else if (p.id === "salon003") {
      // OSMANLI KRİSTAL AVİZE için özel mesaj
      productMessage = `Merhaba, OSMANLI KRİSTAL AVİZE için fiyat alabilir miyim?`;
    } else if (p.id === "salon004") {
      // LED SARKIT AVİZE için özel mesaj
      productMessage = `Merhaba, LED SARKIT AVİZE için fiyat alabilir miyim?`;
    } else if (p.id === "salon005") {
      // KÜRE CAMLI MODERN LED AVİZE için özel mesaj
      productMessage = `Merhaba, KÜRE CAMLI MODERN AVİZE için fiyat alabilir miyim?`;
    } else if (p.id === "salon006") {
      // TEKLİ CAM SARKIT AVİZE için özel mesaj
      productMessage = `Merhaba, TEKLİ CAM SARKIT AVİZE için fiyat alabilir miyim?`;
    } else if (p.id === "salon007") {
      // TEKLİ CAM SARKIT AVİZE (Siyah) için özel mesaj
      productMessage = `Merhaba, TEKLİ CAM SARKIT AVİZE için fiyat alabilir miyim?`;
    } else if (p.id === "salon008") {
      // TEKLİ PİRAMİT AVİZE için özel mesaj
      productMessage = `Merhaba, TEKLİ PİRAMİT AVİZE için fiyat alabilir miyim?`;
    } else if (p.id === "salon009") {
      // TEKLİ SARKIT AVİZE için özel mesaj
      productMessage = `Merhaba, TEKLİ SARKIT AVİZE için fiyat alabilir miyim?`;
    } else if (p.id === "salon010") {
      // KLASİK FENER DUVAR APLİĞİ için özel mesaj
      productMessage = `Merhaba, KLASİK FENER DUVAR APLİĞİ için fiyat alabilir miyim?`;
    } else if (p.id === "salon011") {
      // SARAY TİPİ DUVAR APLİĞİ için özel mesaj
      productMessage = `Merhaba, SARAY TİPİ DUVAR APLİĞİ için fiyat alabilir miyim?`;
    } else if (p.id === "salon012") {
      // SİYAH MODERN TEKLİ SARKIT AVİZE için özel mesaj
      productMessage = `Merhaba, SİYAH MODERN TEKLİ SARKIT AVİZE için fiyat alabilir miyim?`;
    } else if (p.id === "salon013") {
      // SİYAH TEKLİ SARKIT AVİZE için özel mesaj
      productMessage = `Merhaba, SİYAH TEKLİ SARKIT AVİZE için fiyat alabilir miyim?`;
    } else if (p.id === "salon014") {
      // HALAT SARKIT AVİZE için özel mesaj
      productMessage = `Merhaba, HALAT SARKIT AVİZE için fiyat alabilir miyim?`;
    } else if (p.id === "salon015") {
      // KRİSTAL TAŞLI SALON AVİZESİ için özel mesaj
      productMessage = `Merhaba, KRİSTAL TAŞLI SALON AVİZESİ için fiyat alabilir miyim?`;
    } else {
      // Standart ürünler için
      productMessage = `Merhaba, Çabuk Elektrik'ten ${escapeHtml(p.title)} (${escapeHtml(p.id)}) için fiyat ve stok bilgisi alabilir miyim?
Ölçü: ${escapeHtml(p.size)} • Ampul: ${escapeHtml(p.bulbs)}
Kullanım alanı: ${escapeHtml(categoryText)}
Oda ölçüsü/fotoğrafı gönderebilirim.`;
    }
    const waText = encodeURIComponent(productMessage);
    const waLink = `https://wa.me/${SETTINGS.whatsappNumber}?text=${waText}`;
  
    // Meta bilgileri - özel ürünler için farklı göster
    let metaContent = '';
    if (p.watt && p.duy && p.renk) {
      metaContent = `<span>${escapeHtml(p.watt)}</span><span>•</span><span>${escapeHtml(p.duy)}</span><span>•</span><span>${escapeHtml(p.renk)}</span>`;
    } else if (p.duy && p.renk && !p.watt) {
      metaContent = `<span>${escapeHtml(p.duy)}</span><span>•</span><span>${escapeHtml(p.renk)}</span>`;
    } else if (p.renk && !p.duy && !p.watt) {
      // VİKO anahtar veya İSTİRİDYE AVİZE gibi sadece renk içeren ürünler için
      metaContent = `<span>${escapeHtml(p.renk)}</span>`;
    } else {
      metaContent = `<span>${escapeHtml(p.size)}</span><span>•</span><span>${escapeHtml(p.bulbs)}</span>`;
    }
  
    const div = document.createElement("div");
    div.className = "card reveal";
    div.setAttribute("data-category", categorySlug);
    div.innerHTML = `
      <div class="card__img">
        <img src="${p.img}" alt="${escapeHtml(p.title)}" loading="lazy" />
      </div>
      <div class="card__body">
        <div class="card__title">${escapeHtml(p.title)}</div>
        <div class="card__meta">
          ${metaContent}
        </div>
        <div class="card__price">${escapeHtml(priceText)}</div>
        <div class="card__meta" style="margin-top:10px">${cats}</div>
        <div class="card__actions">
          <a class="smallbtn smallbtn--gold" href="${waLink}" target="_blank" rel="noopener">WhatsApp'tan Teklif Al</a>
          <button class="smallbtn detail-btn" data-detail="${escapeHtml(p.id)}">Detay</button>
        </div>
      </div>
    `;
    return div;
  }
  
  function render(initialRender = false){
    if (!grid) return;
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // İlk render: Tüm kartları oluştur
    if (initialRender || grid.children.length === 0) {
      grid.innerHTML = "";
      PRODUCTS.forEach((p, index) => {
        const card = createCard(p);
        if (!prefersReducedMotion) {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95) translateY(10px)';
        }
        grid.appendChild(card);
      });
      
      // İlk render animasyonu
      if (!prefersReducedMotion) {
        setTimeout(() => {
          const allCards = grid.querySelectorAll('.card');
          allCards.forEach((card, index) => {
            setTimeout(() => {
              card.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
              card.style.opacity = '1';
              card.style.transform = 'scale(1) translateY(0)';
            }, index * 0.05);
          });
        }, 50);
      }
      
      // Re-initialize scroll reveal for new cards
      setTimeout(() => {
        initScrollReveal();
      }, 50);
    }
    
    // Filtreleme: data-category attribute'una göre göster/gizle
    const allCards = grid.querySelectorAll('.card');
    const filterSlug = activeFilter === "all" ? null : getCategorySlug(activeFilter);
    
    if (!prefersReducedMotion) {
      // Yumuşak animasyonlu filtreleme
      allCards.forEach((card, index) => {
        const cardCategory = card.getAttribute('data-category');
        const shouldShow = filterSlug === null || cardCategory === filterSlug;
        
        if (shouldShow) {
          // Göster
          card.style.display = '';
          requestAnimationFrame(() => {
            card.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'scale(1) translateY(0)';
          });
        } else {
          // Gizle
          card.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95) translateY(-10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    } else {
      // Reduced motion: anında göster/gizle
      allCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');
        const shouldShow = filterSlug === null || cardCategory === filterSlug;
        card.style.display = shouldShow ? '' : 'none';
        card.style.opacity = shouldShow ? '1' : '0';
      });
    }
  }
  render(true); // İlk render: tüm kartları oluştur
  
  // --- Filters ---
  chips?.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    if (!target.classList.contains("chip")) return;
  
    chips.querySelectorAll(".chip").forEach(c => c.classList.remove("is-active"));
    target.classList.add("is-active");

    activeFilter = target.getAttribute("data-filter") || "all";
    render(false); // Filtreleme: mevcut kartları göster/gizle
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
  
  // --- WhatsApp Chat Animation ---
  function initWhatsAppChat(){
    const chatContainer = document.getElementById('whatsappChat');
    const messagesContainer = document.getElementById('whatsappMessages');
    const ctaContainer = document.getElementById('whatsappCta');
    const ctaButton = document.getElementById('whatsappCtaBtn');
    
    if (!chatContainer || !messagesContainer) return;
    
    // Check if animation has already been played
    if (chatContainer.dataset.animated === 'true') return;
    
    // Message data - simplified to 2 messages
    const messages = [
      { text: "Merhaba, AI önizleme istiyorum. Oda fotoğrafını ve beğendiğim avize modelini gönderiyorum.", sender: "customer", delay: 400 },
      { text: "Görseliniz hazırlanıyor ✅", sender: "business", delay: 400 }
    ];
    
    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // IntersectionObserver to start animation when visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && chatContainer.dataset.animated !== 'true') {
          chatContainer.dataset.animated = 'true';
          startMessageAnimation(messages, messagesContainer, ctaContainer, ctaButton, prefersReducedMotion);
          observer.unobserve(chatContainer);
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: '0px'
    });
    
    observer.observe(chatContainer);
  }
  
  // Start message animation sequence
  function startMessageAnimation(messages, container, ctaContainer, ctaButton, reducedMotion){
    let currentIndex = 0;
    let totalDelay = 0;
    
    function showNextMessage(){
      if (currentIndex >= messages.length) {
        // All messages shown, show CTA button
        setTimeout(() => {
          if (ctaContainer) {
            ctaContainer.style.display = 'block';
            ctaContainer.style.opacity = '0';
            ctaContainer.style.transform = 'translateY(10px)';
            setTimeout(() => {
              ctaContainer.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
              ctaContainer.style.opacity = '1';
              ctaContainer.style.transform = 'translateY(0)';
            }, 50);
          }
        }, 500);
        return;
      }
      
      const message = messages[currentIndex];
      
      // Show typing indicator before business messages
      if (message.sender === 'business' && !reducedMotion) {
        showTypingIndicator(container, () => {
          setTimeout(() => {
            hideTypingIndicator(container);
            addMessage(container, message.text, message.sender, reducedMotion);
            currentIndex++;
            totalDelay += message.delay;
            setTimeout(showNextMessage, message.delay);
          }, 800);
        });
      } else {
        // Customer messages appear directly
        addMessage(container, message.text, message.sender, reducedMotion);
        currentIndex++;
        totalDelay += message.delay;
        setTimeout(showNextMessage, message.delay);
      }
    }
    
    // Start animation
    if (reducedMotion) {
      // Show all messages immediately if reduced motion
      messages.forEach((msg, index) => {
        setTimeout(() => {
          addMessage(container, msg.text, msg.sender, true);
          if (index === messages.length - 1 && ctaContainer) {
            ctaContainer.style.display = 'block';
          }
        }, index * 200);
      });
    } else {
      showNextMessage();
    }
  }
  
  // Add message to container
  function addMessage(container, text, sender, reducedMotion){
    const msgDiv = document.createElement('div');
    msgDiv.className = `phone-mock__msg phone-mock__msg--${sender}`;
    
    const bubbleDiv = document.createElement('div');
    bubbleDiv.className = 'phone-mock__bubble';
    bubbleDiv.textContent = text;
    
    msgDiv.appendChild(bubbleDiv);
    container.appendChild(msgDiv);
    
    // Scroll to bottom smoothly
    setTimeout(() => {
      container.scrollTop = container.scrollHeight;
    }, 100);
  }
  
  // Show typing indicator
  function showTypingIndicator(container, callback){
    const typingDiv = document.createElement('div');
    typingDiv.className = 'phone-mock__typing';
    typingDiv.id = 'typingIndicator';
    
    for (let i = 0; i < 3; i++) {
      const dot = document.createElement('div');
      dot.className = 'phone-mock__typing-dot';
      typingDiv.appendChild(dot);
    }
    
    container.appendChild(typingDiv);
    
    setTimeout(() => {
      typingDiv.classList.add('is-visible');
      if (callback) callback();
    }, 50);
    
    // Scroll to bottom
    setTimeout(() => {
      container.scrollTop = container.scrollHeight;
    }, 100);
  }
  
  // Hide typing indicator
  function hideTypingIndicator(container){
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
      typingIndicator.style.transition = 'opacity 0.2s ease-out';
      typingIndicator.style.opacity = '0';
      setTimeout(() => {
        if (typingIndicator.parentNode) {
          typingIndicator.parentNode.removeChild(typingIndicator);
        }
      }, 200);
    }
  }
  
  // Wire WhatsApp CTA button (Telefon mockup içindeki AI önizleme butonu - özel numara)
  const whatsappCtaBtn = document.getElementById('whatsappCtaBtn');
  if (whatsappCtaBtn) {
    // AI önizleme için özel numara ve mesaj
    const aiPreviewMessage = encodeURIComponent("Merhaba, AI avize önizleme istiyorum. Evin fotoğrafını ve beğendiğim avizeyi gönderiyorum.");
    const aiPreviewLink = `https://wa.me/905077808410?text=${aiPreviewMessage}`;
    whatsappCtaBtn.setAttribute('href', aiPreviewLink);
  }
  
  // Initialize WhatsApp chat on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWhatsAppChat);
  } else {
    initWhatsAppChat();
  }
  
  // --- Product Detail Modal ---
  const modal = document.getElementById('productModal');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalSize = document.getElementById('modalSize');
  const modalBulbs = document.getElementById('modalBulbs');
  const modalCategory = document.getElementById('modalCategory');
  const modalPrice = document.getElementById('modalPrice');
  const modalWhatsApp = document.getElementById('modalWhatsApp');
  const modalImage = document.getElementById('modalImage');
  const modalLabelSize = document.getElementById('modalLabelSize');
  const modalLabelBulbs = document.getElementById('modalLabelBulbs');
  const modalLabelCategory = document.getElementById('modalLabelCategory');
  
  function openProductModal(productId) {
    if (!modal || !modalTitle || !modalSize || !modalBulbs || !modalCategory || !modalPrice || !modalWhatsApp) {
      console.warn('Modal elements not found');
      return;
    }
    
    // Find product in PRODUCTS array
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) {
      console.warn('Product not found:', productId);
      return;
    }
    
    // Fill modal with product data
    if (modalTitle) modalTitle.textContent = product.title || 'Ürün Detayları';
    
    // Modal satırlarını kontrol et
    const modalRowSize = document.getElementById('modalRowSize');
    
    // Özel ürünler için özellikleri göster
    if (product.watt && product.duy && product.renk) {
      // K2 Ampul gibi watt içeren özel ürünler için
      if (modalRowSize) modalRowSize.style.display = '';
      if (modalLabelSize) modalLabelSize.textContent = 'Watt:';
      if (modalSize) modalSize.textContent = product.watt || '-';
      if (modalLabelBulbs) modalLabelBulbs.textContent = 'Duy:';
      if (modalBulbs) modalBulbs.textContent = product.duy || '-';
      if (modalLabelCategory) modalLabelCategory.textContent = 'Renk:';
      if (modalCategory) modalCategory.textContent = product.renk || '-';
    } else if (product.duy && product.renk && !product.watt) {
      // ACK Ampul gibi sadece duy ve renk içeren özel ürünler için
      // İlk satırı gizle (Watt yok)
      if (modalRowSize) modalRowSize.style.display = 'none';
      if (modalLabelBulbs) modalLabelBulbs.textContent = 'Duy:';
      if (modalBulbs) modalBulbs.textContent = product.duy || '-';
      if (modalLabelCategory) modalLabelCategory.textContent = 'Renk:';
      if (modalCategory) modalCategory.textContent = product.renk || '-';
    } else if (product.renk && !product.duy && !product.watt && (product.id === "anahtar01" || product.id === "anahtar02" || product.id === "anahtar03" || product.id === "anahtar04" || product.id === "anahtar05" || product.id === "anahtar06" || product.id === "salon001" || product.id === "salon002" || product.id === "salon003" || product.id === "salon004" || product.id === "salon005" || product.id === "salon006" || product.id === "salon007" || product.id === "salon008" || product.id === "salon009" || product.id === "salon010" || product.id === "salon011" || product.id === "salon012" || product.id === "salon013" || product.id === "salon014" || product.id === "salon015")) {
      // VİKO/OVİVO/Günsan anahtar veya İSTİRİDYE AVİZE/SARKIT AVİZE/OSMANLI KRİSTAL AVİZE/LED SARKIT AVİZE/KÜRE CAMLI MODERN LED AVİZE/TEKLİ CAM SARKIT AVİZE/TEKLİ PİRAMİT AVİZE/TEKLİ SARKIT AVİZE/KLASİK FENER DUVAR APLİĞİ/SARAY TİPİ DUVAR APLİĞİ/SİYAH MODERN TEKLİ SARKIT AVİZE/SİYAH TEKLİ SARKIT AVİZE/HALAT SARKIT AVİZE/KRİSTAL TAŞLI SALON AVİZESİ gibi sadece renk içeren özel ürünler için
      // İlk iki satırı gizle (Watt ve Duy yok)
      if (modalRowSize) modalRowSize.style.display = 'none';
      const modalRowBulbs = document.getElementById('modalRowBulbs');
      if (modalRowBulbs) modalRowBulbs.style.display = 'none';
      if (modalLabelCategory) modalLabelCategory.textContent = 'Renk:';
      if (modalCategory) modalCategory.textContent = product.renk || '-';
    } else {
      // Standart ürünler için
      if (modalRowSize) modalRowSize.style.display = '';
      const modalRowBulbs = document.getElementById('modalRowBulbs');
      if (modalRowBulbs) modalRowBulbs.style.display = '';
      if (modalLabelSize) modalLabelSize.textContent = 'Ölçü:';
      if (modalSize) modalSize.textContent = product.size || '-';
      if (modalLabelBulbs) modalLabelBulbs.textContent = 'Ampul:';
      if (modalBulbs) modalBulbs.textContent = product.bulbs || '-';
      if (modalLabelCategory) modalLabelCategory.textContent = 'Kategori:';
      if (modalCategory) modalCategory.textContent = product.category.join(", ") || '-';
    }
    
    if (modalPrice) modalPrice.textContent = 'Fiyat için WhatsApp';
    
    // Set product image
    if (product.img && modalImage) {
      modalImage.src = product.img;
      modalImage.alt = product.title || 'Ürün görseli';
    }
    
    // Set WhatsApp link - özel ürünler için özel mesaj
    let productMessage;
    if (product.watt && product.duy && product.renk) {
      // K2 Ampul için özel mesaj
      productMessage = `Merhaba, K2 Ampul (50W, E27, Beyaz) için fiyat alabilir miyim?`;
    } else if (product.duy && product.renk && !product.watt) {
      // ACK Ampul için özel mesaj
      productMessage = `Merhaba, ACK Ampul (E27, Beyaz) için fiyat alabilir miyim?`;
    } else if (product.id === "anahtar01") {
      // VİKO anahtar01 için özel mesaj
      productMessage = `Merhaba, anahtar01 için fiyat alabilir miyim?`;
    } else if (product.id === "anahtar02") {
      // VİKO anahtar02 için özel mesaj
      productMessage = `Merhaba, anahtar02 için fiyat alabilir miyim?`;
    } else if (product.id === "anahtar03") {
      // OVİVO anahtar03 için özel mesaj
      productMessage = `Merhaba, anahtar03 için fiyat alabilir miyim?`;
    } else if (product.id === "anahtar04") {
      // GÜNSAN anahtar04 için özel mesaj
      productMessage = `Merhaba, anahtar04 için fiyat alabilir miyim?`;
    } else if (product.id === "anahtar05") {
      // OVİVO anahtar05 için özel mesaj
      productMessage = `Merhaba, anahtar05 için fiyat alabilir miyim?`;
    } else if (product.id === "anahtar06") {
      // GÜNSAN anahtar06 için özel mesaj
      productMessage = `Merhaba, anahtar06 için fiyat alabilir miyim?`;
    } else if (product.id === "salon001") {
      // İSTİRİDYE AVİZE için özel mesaj
      productMessage = `Merhaba, İSTRİDYE AVİZE için fiyat alabilir miyim?`;
    } else if (product.id === "salon002") {
      // SARKIT AVİZE için özel mesaj
      productMessage = `Merhaba, Sarkıt Avize için fiyat alabilir miyim?`;
    } else if (product.id === "salon003") {
      // OSMANLI KRİSTAL AVİZE için özel mesaj
      productMessage = `Merhaba, OSMANLI KRİSTAL AVİZE için fiyat alabilir miyim?`;
    } else if (product.id === "salon004") {
      // LED SARKIT AVİZE için özel mesaj
      productMessage = `Merhaba, LED SARKIT AVİZE için fiyat alabilir miyim?`;
    } else if (product.id === "salon005") {
      // KÜRE CAMLI MODERN LED AVİZE için özel mesaj
      productMessage = `Merhaba, KÜRE CAMLI MODERN AVİZE için fiyat alabilir miyim?`;
    } else if (product.id === "salon006") {
      // TEKLİ CAM SARKIT AVİZE için özel mesaj
      productMessage = `Merhaba, TEKLİ CAM SARKIT AVİZE için fiyat alabilir miyim?`;
    } else if (product.id === "salon007") {
      // TEKLİ CAM SARKIT AVİZE (Siyah) için özel mesaj
      productMessage = `Merhaba, TEKLİ CAM SARKIT AVİZE için fiyat alabilir miyim?`;
    } else if (product.id === "salon008") {
      // TEKLİ PİRAMİT AVİZE için özel mesaj
      productMessage = `Merhaba, TEKLİ PİRAMİT AVİZE için fiyat alabilir miyim?`;
    } else if (product.id === "salon009") {
      // TEKLİ SARKIT AVİZE için özel mesaj
      productMessage = `Merhaba, TEKLİ SARKIT AVİZE için fiyat alabilir miyim?`;
    } else if (product.id === "salon010") {
      // KLASİK FENER DUVAR APLİĞİ için özel mesaj
      productMessage = `Merhaba, KLASİK FENER DUVAR APLİĞİ için fiyat alabilir miyim?`;
    } else if (product.id === "salon011") {
      // SARAY TİPİ DUVAR APLİĞİ için özel mesaj
      productMessage = `Merhaba, SARAY TİPİ DUVAR APLİĞİ için fiyat alabilir miyim?`;
    } else if (product.id === "salon012") {
      // SİYAH MODERN TEKLİ SARKIT AVİZE için özel mesaj
      productMessage = `Merhaba, SİYAH MODERN TEKLİ SARKIT AVİZE için fiyat alabilir miyim?`;
    } else if (product.id === "salon013") {
      // SİYAH TEKLİ SARKIT AVİZE için özel mesaj
      productMessage = `Merhaba, SİYAH TEKLİ SARKIT AVİZE için fiyat alabilir miyim?`;
    } else if (product.id === "salon014") {
      // HALAT SARKIT AVİZE için özel mesaj
      productMessage = `Merhaba, HALAT SARKIT AVİZE için fiyat alabilir miyim?`;
    } else if (product.id === "salon015") {
      // KRİSTAL TAŞLI SALON AVİZESİ için özel mesaj
      productMessage = `Merhaba, KRİSTAL TAŞLI SALON AVİZESİ için fiyat alabilir miyim?`;
    } else {
      // Standart ürünler için
      const categoryText = product.category.join(", ");
      productMessage = `Merhaba, Çabuk Elektrik'ten ${escapeHtml(product.title)} (${escapeHtml(product.id)}) için fiyat ve stok bilgisi alabilir miyim?
Ölçü: ${escapeHtml(product.size)} • Ampul: ${escapeHtml(product.bulbs)}
Kullanım alanı: ${escapeHtml(categoryText)}
Oda ölçüsü/fotoğrafı gönderebilirim.`;
    }
    const waText = encodeURIComponent(productMessage);
    if (modalWhatsApp) {
      modalWhatsApp.href = `https://wa.me/${SETTINGS.whatsappNumber}?text=${waText}`;
      modalWhatsApp.textContent = "WhatsApp'tan Teklif Al";
    }
    
    // Show modal - remove hidden class first
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    // Force reflow to ensure display change takes effect
    void modal.offsetWidth;
    
    // Trigger animation
    requestAnimationFrame(() => {
      modal.style.opacity = '1';
      modal.style.visibility = 'visible';
    });
  }
  
  function closeModal() {
    if (!modal) return;
    
    // Trigger close animation
    modal.style.opacity = '0';
    modal.style.visibility = 'hidden';
    
    setTimeout(() => {
      modal.classList.add('hidden');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }, 300);
  }
  
  // Event delegation for Detay buttons and modal close
  document.addEventListener('click', (e) => {
    // Detay button - check if clicked element or its parent is a detail button
    const detailBtn = e.target.closest('button.detail-btn[data-detail]') || 
                      e.target.closest('button[data-detail]') ||
                      (e.target.classList.contains('detail-btn') ? e.target : null);
    
    if (detailBtn) {
      const productId = detailBtn.getAttribute('data-detail');
      if (productId) {
        e.preventDefault();
        e.stopPropagation();
        openProductModal(productId);
        return;
      }
    }
    
    // Close button or backdrop
    const closeBtn = e.target.closest('#modalClose, #modalCloseBtn');
    const backdrop = e.target.closest('.modal__overlay, .modal__backdrop');
    
    if (closeBtn || e.target.hasAttribute('data-close') || backdrop) {
      e.preventDefault();
      e.stopPropagation();
      closeModal();
      return;
    }
  });
  
  // Close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
  
  // --- FAQ Accordion ---
  function initFAQAccordion(){
    const faqItems = document.querySelectorAll('.faq__item');
    const faqQuestions = document.querySelectorAll('.faq__question');
    
    if (!faqItems.length || !faqQuestions.length) return;
    
    faqQuestions.forEach((question, index) => {
      question.addEventListener('click', () => {
        const item = question.closest('.faq__item');
        const isCurrentlyOpen = item.classList.contains('is-open');
        
        // Close all items first
        faqItems.forEach(faqItem => {
          faqItem.classList.remove('is-open');
          const faqQuestion = faqItem.querySelector('.faq__question');
          if (faqQuestion) {
            faqQuestion.setAttribute('aria-expanded', 'false');
          }
        });
        
        // Toggle clicked item
        if (!isCurrentlyOpen) {
          item.classList.add('is-open');
          question.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }
  
  // Initialize FAQ accordion on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFAQAccordion);
  } else {
    initFAQAccordion();
  }
  
  