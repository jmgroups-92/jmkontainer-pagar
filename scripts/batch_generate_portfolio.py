import os, json
from PIL import Image, ImageDraw, ImageFont, ImageOps

src_dir = 'public/gallery'
out_dir = 'public/images/portfolio'
os.makedirs(out_dir, exist_ok=True)
font_path = 'public/fonts/Poppins-Real.ttf'

files = sorted([f for f in os.listdir(src_dir) if f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp'))])
print(f'Starting processing {len(files)} images with real Google Poppins watermark...')

locations = [
    'Surabaya Timur', 'Surabaya Barat', 'Surabaya Selatan', 'Surabaya Utara', 
    'Sidoarjo Kota', 'Waru, Sidoarjo', 'Gresik Kota Baru', 'Krian', 
    'Pakuwon City, Surabaya', 'Citraland Surabaya', 'Mojokerto', 'Lamongan'
]
categories = ['kontainer', 'kontainer', 'kontainer', 'kanopi', 'pagar', 'kontainer']

items = []

for idx, fname in enumerate(files, 1):
    in_path = os.path.join(src_dir, fname)
    out_name = f'portfolio-{idx:02d}.webp'
    out_path = os.path.join(out_dir, out_name)
    
    try:
        img = Image.open(in_path)
        img = ImageOps.exif_transpose(img)
        img = img.convert('RGBA')
        img.thumbnail((800, 600), Image.Resampling.LANCZOS)
        w, h = img.size
        
        overlay = Image.new('RGBA', (w, h), (0, 0, 0, 0))
        draw = ImageDraw.Draw(overlay)
        
        font_size = 18
        font = ImageFont.truetype(font_path, font_size)
        text = 'JM Kontainer'
        
        bbox = draw.textbbox((0, 0), text, font=font)
        tw = bbox[2] - bbox[0]
        th = bbox[3] - bbox[1]
        
        pad_x = 14
        pad_y = 6
        pill_w = tw + pad_x * 2
        pill_h = th + pad_y * 2
        
        cx = (w - pill_w) // 2
        cy = (h - pill_h) // 2
        
        # Sleek small frosted pill with gold border
        draw.rounded_rectangle([cx, cy, cx + pill_w, cy + pill_h], radius=10, fill=(15, 15, 15, 135), outline=(217, 119, 6, 200), width=1)
        text_x = cx + pad_x - bbox[0]
        text_y = cy + (pill_h - th) // 2 - bbox[1]
        draw.text((text_x, text_y), text, font=font, fill=(255, 255, 255, 240))
        
        final_img = Image.alpha_composite(img, overlay).convert('RGB')
        final_img.save(out_path, 'WEBP', quality=82, method=6)
        
        cat = categories[(idx - 1) % len(categories)]
        loc = locations[(idx - 1) % len(locations)]
        
        if cat == 'kanopi':
            title_text = f'Kanopi Alderon Sejuk Minimalis #{idx:02d}'
            badge_text = 'Kanopi Alderon'
            alt_text = f'Kanopi Alderon UPVC Double Layer Sejuk Anti Bocor JM Kontainer Surabaya {loc} Proyek #{idx:02d}'
            dim_text = 'Carport & Teras • Rangka Hollow Galvanis'
        elif cat == 'pagar':
            title_text = f'Pagar Besi Minimalis Modern #{idx:02d}'
            badge_text = 'Pagar Minimalis'
            alt_text = f'Pagar Besi Minimalis Laser Cutting Powder Coating Anti Karat JM Kontainer Surabaya {loc} Proyek #{idx:02d}'
            dim_text = 'Tinggi 1.8m • Finishing Powder Coating'
        else:
            title_text = f'Rombong Kontainer F&B Premium #{idx:02d}'
            badge_text = 'Rombong Kontainer'
            alt_text = f'Rombong Kontainer Booth Cafe UMKM Surabaya JM Kontainer {loc} Hasil Produksi #{idx:02d}'
            dim_text = 'Dimensi 3x2m / Custom • Meja Stainless'
            
        items.append({
            'id': idx,
            'category': cat,
            'src': f'/images/portfolio/{out_name}',
            'badge': badge_text,
            'dim': dim_text,
            'loc': loc,
            'title': title_text,
            'alt': alt_text,
            'desc': f'Proyek pengerjaan presisi bengkel las resmi JM Kontainer di {loc}. Menggunakan material SNI kokoh, garansi pengerjaan rapi.',
            'waText': f'Halo JM Kontainer Surabaya, saya tertarik dengan proyek {title_text} di {loc}'
        })
    except Exception as e:
        print(f'Error processing {fname}: {e}')

with open('public/portfolio-data.json', 'w', encoding='utf-8') as f:
    json.dump(items, f, indent=2, ensure_ascii=False)

ts_content = '''export interface PortfolioItem {
  id: number
  category: 'kontainer' | 'kanopi' | 'pagar'
  src: string
  badge: string
  dim: string
  loc: string
  title: string
  alt: string
  desc: string
  waText: string
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = ''' + json.dumps(items, indent=2, ensure_ascii=False) + '\n'

with open('lib/portfolio-data.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print(f'Done! Successfully generated {len(items)} WebP images with small Google Poppins JM Kontainer watermark.')
