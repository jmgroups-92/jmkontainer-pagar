with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re

# Find portofolio section
p_start = text.find('id="portofolio"')
section_start = text.rfind('<section', 0, p_start)
section_end = text.find('</section>', p_start) + len('</section>')

print("Portfolio section slice length:", section_end - section_start)

new_section = '''<section class="py-16 lg:py-24 bg-[#FAF8F5] border-t border-stone-200" id="portofolio">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
        <div>
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-stone-200/80 text-stone-800 text-xs font-mono font-bold tracking-wider uppercase mb-3">
            Dokumentasi Foto Nyata
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900">
            Portofolio Hasil Produksi Kami
          </h2>
          <p class="text-stone-600 text-sm mt-1">Foto asli langsung dari workshop dan instalasi di tempat pelanggan.</p>
        </div>

        <div class="flex items-center gap-1.5 p-1.5 bg-stone-200/80 rounded-2xl border border-stone-300 no-scrollbar overflow-x-auto">
          <button data-filter="all" class="portfolio-tab active-tab px-4 py-2 rounded-xl text-xs font-bold transition-all bg-amber-600 text-white shadow-md">
            Semua Produk
          </button>
          <button data-filter="kontainer" class="portfolio-tab px-4 py-2 rounded-xl text-xs font-bold transition-all text-stone-600 hover:text-stone-950">
            Rombong Kontainer
          </button>
          <button data-filter="kanopi" class="portfolio-tab px-4 py-2 rounded-xl text-xs font-bold transition-all text-stone-600 hover:text-stone-950">
            Kanopi Alderon
          </button>
          <button data-filter="pagar" class="portfolio-tab px-4 py-2 rounded-xl text-xs font-bold transition-all text-stone-600 hover:text-stone-950">
            Pagar Minimalis
          </button>
        </div>
      </div>

      <!-- SEO Summary Counter -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-stone-600 mb-6 px-1 gap-2">
        <div>
          Menampilkan <strong id="count-range" class="text-stone-900 font-bold">1 - 20</strong> dari <strong id="count-total" class="text-amber-800 font-bold">97</strong> Proyek Dokumentasi Asli Workshop
        </div>
        <div id="page-indicator" class="font-mono text-[11px] bg-stone-200/80 px-3 py-1 rounded-full text-stone-700 font-semibold">
          Halaman 1 dari 5
        </div>
      </div>

      <!-- Portfolio Grid (Dynamic 20 items per page) -->
      <div id="portfolio-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>

      <!-- Pagination Controls -->
      <div id="portfolio-pagination" class="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-stone-200"></div>

    </div>
  </section>'''

text = text[:section_start] + new_section + text[section_end:]

# Replace filter script in index.html with paginated renderer
old_script_start = text.find('// 3. Filter tabs')
old_script_end = text.find('// 4. Quote form')

new_script = '''// 3. Filter tabs & Pagination (20 items/page)
      let allPortfolio = [];
      let currentFilter = 'all';
      let currentPage = 1;
      const ITEMS_PER_PAGE = 20;

      fetch('/portfolio-data.json')
        .then(res => res.json())
        .then(data => {
          allPortfolio = data;
          renderPortfolio();
        })
        .catch(err => console.error('Error loading portfolio:', err));

      function renderPortfolio() {
        const grid = document.getElementById('portfolio-grid');
        const pagination = document.getElementById('portfolio-pagination');
        const countRange = document.getElementById('count-range');
        const countTotal = document.getElementById('count-total');
        const pageIndicator = document.getElementById('page-indicator');
        if (!grid || !allPortfolio.length) return;

        const filtered = currentFilter === 'all' 
          ? allPortfolio 
          : allPortfolio.filter(it => it.category === currentFilter);

        const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE) || 1;
        if (currentPage > totalPages) currentPage = totalPages;

        const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIdx = Math.min(startIdx + ITEMS_PER_PAGE, filtered.length);
        const pagedItems = filtered.slice(startIdx, endIdx);

        countRange.textContent = `${startIdx + 1} - ${endIdx}`;
        countTotal.textContent = filtered.length;
        pageIndicator.textContent = `Halaman ${currentPage} dari ${totalPages}`;

        grid.innerHTML = pagedItems.map(it => `
          <div class="group bg-white rounded-3xl p-4 border border-stone-200 shadow-warm hover:shadow-warm-hover transition-all">
            <div class="relative h-60 rounded-2xl overflow-hidden mb-4 bg-stone-100 border border-stone-200">
              <img src="${it.src}" alt="${it.alt || it.title}" loading="lazy" decoding="async" width="800" height="600" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              <span class="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-amber-800 font-mono text-[10px] font-bold shadow-sm">
                ${it.badge}
              </span>
            </div>
            <div class="px-2">
              <div class="flex items-center justify-between text-xs font-mono text-stone-500 mb-1">
                <span>${it.dim}</span>
                <span class="text-amber-700 font-bold">${it.loc}</span>
              </div>
              <h4 class="font-bold text-base text-stone-900 mb-1.5">${it.title}</h4>
              <p class="text-xs text-stone-600 line-clamp-2 mb-4 leading-relaxed">${it.desc}</p>
              <a href="https://wa.me/628155401679?text=${encodeURIComponent(it.waText)}" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-900 transition-colors">
                <span>Tanya Spek &amp; Harga Model Ini</span>
                <span class="material-symbols-outlined text-sm">arrow_outward</span>
              </a>
            </div>
          </div>
        `).join('');

        // Pagination buttons
        if (totalPages > 1) {
          let btns = '';
          for (let p = 1; p <= totalPages; p++) {
            const active = p === currentPage;
            btns += `<button onclick="changePage(${p})" class="w-9 h-9 rounded-xl text-xs font-bold transition-all ${active ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30' : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200'}">${p}</button>`;
          }

          pagination.innerHTML = `
            <button onclick="changePage(${Math.max(currentPage - 1, 1)})" ${currentPage === 1 ? 'disabled class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-stone-100 text-stone-400 cursor-not-allowed border border-stone-200"' : 'class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 shadow-sm hover:border-amber-500"'}>
              <span class="material-symbols-outlined text-sm">arrow_back</span>
              <span>Sebelumnya</span>
            </button>
            <div class="flex items-center gap-1.5 flex-wrap justify-center">
              ${btns}
            </div>
            <button onclick="changePage(${Math.min(currentPage + 1, totalPages)})" ${currentPage === totalPages ? 'disabled class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-stone-100 text-stone-400 cursor-not-allowed border border-stone-200"' : 'class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 shadow-sm hover:border-amber-500"'}>
              <span>Berikutnya</span>
              <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          `;
        } else {
          pagination.innerHTML = '';
        }
      }

      window.changePage = function(p) {
        currentPage = p;
        renderPortfolio();
        document.getElementById('portofolio')?.scrollIntoView({ behavior: 'smooth' });
      };

      const tabs = document.querySelectorAll('.portfolio-tab');
      tabs.forEach(t => {
        t.addEventListener('click', () => {
          tabs.forEach(tab => {
            tab.classList.remove('bg-amber-600', 'text-white', 'shadow-md');
            tab.classList.add('text-stone-600');
          });
          t.classList.remove('text-stone-600');
          t.classList.add('bg-amber-600', 'text-white', 'shadow-md');

          currentFilter = t.getAttribute('data-filter');
          currentPage = 1;
          renderPortfolio();
        });
      });

      '''

if old_script_start != -1 and old_script_end != -1:
    text = text[:old_script_start] + new_script + text[old_script_end:]

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("index.html successfully updated with clean paginated portfolio!")
