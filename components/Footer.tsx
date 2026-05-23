'use client'
import { trackEvent } from '@/lib/gtag'

export default function Footer() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim()
    const contact = (form.elements.namedItem('contact') as HTMLInputElement).value.trim()
    if (!name || !contact) return

    trackEvent('generate_lead', { form_name: 'footer_penawaran' })

    const msg = encodeURIComponent(`Halo JM Workshop, nama saya ${name}. Kontak: ${contact}. Saya ingin minta penawaran.`)
    window.open(`https://wa.me/628155401679?text=${msg}`, '_blank', 'noopener')
    form.reset()
  }

  return (
    <footer className="bg-black text-white w-full px-4 md:px-16 py-20 grid grid-cols-1 md:grid-cols-4 gap-10" id="kontak">
      <div className="md:col-span-1">
        <div className="text-xl font-bold text-[#F59E0B] mb-6">JM Workshop</div>
        <p className="text-gray-400 mb-6 text-sm leading-relaxed">Bengkel Las Spesialis Surabaya. Rombong Kontainer, Kanopi Alderon, dan Pagar Minimalis berkualitas premium sejak 2017.</p>
        <div className="flex gap-3">
          <a id="btn-instagram" href="https://www.instagram.com/jmworkshopsurabaya" target="_blank" rel="noopener" aria-label="Instagram"
            onClick={() => trackEvent('click_instagram')}
            className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-[#F59E0B] hover:text-[#F59E0B] transition-colors">
            <span className="material-symbols-outlined text-sm">photo_camera</span>
          </a>
          <a id="btn-email" href="mailto:info@jmworkshop.com" aria-label="Email"
            onClick={() => trackEvent('click_email')}
            className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-[#F59E0B] hover:text-[#F59E0B] transition-colors">
            <span className="material-symbols-outlined text-sm">alternate_email</span>
          </a>
          <a id="btn-whatsapp-footer" href="https://wa.me/628155401679" target="_blank" rel="noopener" aria-label="WhatsApp"
            onClick={() => trackEvent('click_whatsapp', { button_location: 'footer' })}
            className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-[#F59E0B] hover:text-[#F59E0B] transition-colors">
            <span className="material-symbols-outlined text-sm">chat</span>
          </a>
        </div>
      </div>

      <div>
        <h4 className="text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-5">Navigasi</h4>
        <ul className="space-y-3 text-sm text-gray-400">
          {[['#','Home'],['#layanan','Layanan'],['#produk','Produk Kami'],['#kontak','Kontak']].map(([href,label]) => (
            <li key={href}><a href={href} className="hover:text-white transition-colors">{label}</a></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-5">Hubungi Kami</h4>
        <ul className="space-y-3 text-sm text-gray-400">
          <li className="flex gap-2"><span className="material-symbols-outlined text-[#22C55E] text-base mt-0.5">location_on</span><span>Jl. Raya Surabaya-Gresik No. 123, Surabaya 60000</span></li>
          <li className="flex gap-2"><span className="material-symbols-outlined text-[#22C55E] text-base">call</span><a href="tel:+628155401679" className="hover:text-white">+62 815-5401-6679</a></li>
          <li className="flex gap-2"><span className="material-symbols-outlined text-[#22C55E] text-base">mail</span><a id="btn-email-text" href="mailto:info@jmworkshop.com" onClick={() => trackEvent('click_email')} className="hover:text-white">info@jmworkshop.com</a></li>
        </ul>
      </div>

      <div className="bg-white/5 p-6 rounded-xl border border-white/10">
        <h4 className="text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-5">Minta Penawaran</h4>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input name="name" required placeholder="Nama Lengkap" autoComplete="name"
            className="w-full bg-white/10 border border-gray-700 px-3 py-2 rounded text-white placeholder:text-gray-500 focus:border-[#F59E0B] outline-none text-sm transition-colors" />
          <input name="contact" required placeholder="Email / WhatsApp"
            className="w-full bg-white/10 border border-gray-700 px-3 py-2 rounded text-white placeholder:text-gray-500 focus:border-[#F59E0B] outline-none text-sm transition-colors" />
          <button type="submit"
            className="w-full py-2 bg-[#22C55E] text-white font-bold rounded hover:opacity-90 transition-opacity text-sm">
            Kirim Pesan
          </button>
        </form>
      </div>

      <div className="col-span-1 md:col-span-4 border-t border-white/10 pt-6 text-center text-xs text-gray-600">
        © 2024 JM Workshop Surabaya. Precision Engineering &amp; Welding Services.
      </div>
    </footer>
  )
}
