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
    },
    {
      id: "SALON-004",
      title: "Modern Avize",
      category: ["Salon"],
      bulbs: "6xE14",
      size: "Orta Boy",
      priceText: "Fiyat için WhatsApp",
      img: "./images/salon004.jpg"
    },
    {
      id: "ANAHTAR-001",
      title: "Elektrik Anahtarı",
      category: ["Anahtar"],
      bulbs: "-",
      size: "Standart",
      priceText: "Fiyat için WhatsApp",
      img: "./images/anahtar01.jpg"
    },
    {
      id: "ANAHTAR-002",
      title: "Elektrik Anahtarı",
      category: ["Anahtar"],
      bulbs: "-",
      size: "Standart",
      priceText: "Fiyat için WhatsApp",
      img: "./images/anahtar02.jpg"
    },
    {
      id: "ANAHTAR-003",
      title: "Elektrik Anahtarı",
      category: ["Anahtar"],
      bulbs: "-",
      size: "Standart",
      priceText: "Fiyat için WhatsApp",
      img: "./images/anahtar03.jpg"
    },
    {
      id: "ANAHTAR-004",
      title: "Elektrik Anahtarı",
      category: ["Anahtar"],
      bulbs: "-",
      size: "Standart",
      priceText: "Fiyat için WhatsApp",
      img: "./images/anahtar04.jpg"
    },
    {
      id: "ANAHTAR-005",
      title: "Elektrik Anahtarı",
      category: ["Anahtar"],
      bulbs: "-",
      size: "Standart",
      priceText: "Fiyat için WhatsApp",
      img: "./images/anahtar05.jpg"
    },
    {
      id: "ANAHTAR-006",
      title: "Elektrik Anahtarı",
      category: ["Anahtar"],
      bulbs: "-",
      size: "Standart",
      priceText: "Fiyat için WhatsApp",
      img: "./images/anahtar06.jpg"
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
        const productId = btn.getAttribute("data-detail") || "";
        const title = btn.getAttribute("data-title") || "";
        const size = btn.getAttribute("data-size") || "";
        const bulbs = btn.getAttribute("data-bulbs") || "";
        const category = btn.getAttribute("data-category") || "";
        const price = btn.getAttribute("data-price") || "";
        
        // Find product in PRODUCTS array for WhatsApp link
        const product = PRODUCTS.find(p => p.id === productId);
        openModal({
          title,
          size,
          bulbs,
          category,
          price,
          product
        });
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
  
  // --- WhatsApp Chat Animation ---
  function initWhatsAppChat(){
    const chatContainer = document.getElementById('whatsappChat');
    const messagesContainer = document.getElementById('whatsappMessages');
    const ctaContainer = document.getElementById('whatsappCta');
    const ctaButton = document.getElementById('whatsappCtaBtn');
    
    if (!chatContainer || !messagesContainer) return;
    
    // Check if animation has already been played
    if (chatContainer.dataset.animated === 'true') return;
    
    // Message data
    const messages = [
      { text: "Merhaba, salon için avize bakıyorum", sender: "customer", delay: 800 },
      { text: "Merhaba 😊 Salonunuzun ölçüsünü alabilir miyim?", sender: "business", delay: 1500 },
      { text: "20 m²", sender: "customer", delay: 1200 },
      { text: "Bu ölçü için modern salon avizeleri önerebilirim ✨", sender: "business", delay: 1500 },
      { text: "WhatsApp'tan devam edelim mi?", sender: "business", delay: 1200 }
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
  
  // Wire WhatsApp CTA button
  const whatsappCtaBtn = document.getElementById('whatsappCtaBtn');
  if (whatsappCtaBtn) {
    const whatsappLink = makeWhatsAppLink();
    whatsappCtaBtn.setAttribute('href', whatsappLink);
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
  
  function openModal(productData) {
    if (!modal) return;
    
    // Fill modal with product data
    modalTitle.textContent = productData.title || 'Ürün Detayları';
    modalSize.textContent = productData.size || '-';
    modalBulbs.textContent = productData.bulbs || '-';
    modalCategory.textContent = productData.category || '-';
    modalPrice.textContent = productData.price || 'Fiyat için WhatsApp';
    
    // Set WhatsApp link
    if (productData.product) {
      const categoryText = productData.product.category.join(", ");
      const productMessage = `Merhaba, Çabuk Elektrik'ten ${escapeHtml(productData.product.title)} (${escapeHtml(productData.product.id)}) için fiyat ve stok bilgisi alabilir miyim?
Ölçü: ${escapeHtml(productData.product.size)} • Ampul: ${escapeHtml(productData.product.bulbs)}
Kullanım alanı: ${escapeHtml(categoryText)}
Oda ölçüsü/fotoğrafı gönderebilirim.`;
      const waText = encodeURIComponent(productMessage);
      modalWhatsApp.href = `https://wa.me/${SETTINGS.whatsappNumber}?text=${waText}`;
    } else {
      modalWhatsApp.href = makeWhatsAppLink();
    }
    
    // Show modal
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    // Trigger animation
    setTimeout(() => {
      modal.classList.add('is-visible');
    }, 10);
  }
  
  function closeModal() {
    if (!modal) return;
    
    // Trigger close animation
    modal.classList.remove('is-visible');
    
    setTimeout(() => {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }, 300);
  }
  
  // Close modal events
  if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModal);
  }
  
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }
  
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }
  
  // Close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
  
  