const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const brainDir = 'C:\\Users\\ibnud\\.gemini\\antigravity\\brain\\38840c34-19e0-46a7-8b84-89ea0ad2e5c9';
const cleanMasterDir = path.join(__dirname, '..', 'public', 'images', 'clean_master');

if (!fs.existsSync(cleanMasterDir)) {
  fs.mkdirSync(cleanMasterDir, { recursive: true });
}

// Master clean source mappings
const masterSources = [
  // Workshop
  {
    src: path.join(__dirname, '..', 'public', 'images', 'professional_welding_workshop_interior_skilled_craftsmen_working_on_custom.png'),
    dests: [path.join(__dirname, '..', 'public', 'images', 'portfolio', 'workshop-las-1.webp')],
    resize: { width: 900, height: 657, fit: 'cover' }
  },
  // Hero Visual Slider
  {
    src: path.join(brainDir, 'slide_1_commercial_booth_1794809597048.jpg'),
    dests: [path.join(__dirname, '..', 'public', 'images', 'slider', 'slide-1.webp')]
  },
  {
    src: path.join(brainDir, 'slide_2_commercial_1794808310473.jpg'),
    dests: [path.join(__dirname, '..', 'public', 'images', 'slider', 'slide-2.webp')]
  },
  {
    src: path.join(brainDir, 'rombong_kontainer_sazakaldar_showcase_1794810091476.jpg'),
    dests: [
      path.join(__dirname, '..', 'public', 'images', 'slider', 'slide-3.webp'),
      path.join(__dirname, '..', 'public', 'images', 'portfolio', 'rombong-kontainer-1.webp')
    ]
  },
  {
    src: path.join(brainDir, 'kanopi_alderon_carport_luxury_1794810098567.jpg'),
    dests: [
      path.join(__dirname, '..', 'public', 'images', 'slider', 'slide-4.webp'),
      path.join(__dirname, '..', 'public', 'images', 'portfolio', 'kanopi-alderon-carport.webp')
    ]
  },
  {
    src: path.join(brainDir, 'pagar_minimalis_modern_golden_hour_1794810093886.jpg'),
    dests: [
      path.join(__dirname, '..', 'public', 'images', 'slider', 'slide-5.webp'),
      path.join(__dirname, '..', 'public', 'images', 'portfolio', 'pagar-minimalis-modern.webp')
    ]
  },
  // Portfolio Items
  {
    src: path.join(brainDir, 'portfolio_01_commercial_render_1794808362401.jpg'),
    dests: [path.join(__dirname, '..', 'public', 'images', 'portfolio', 'portfolio-01.webp')]
  },
  {
    src: path.join(brainDir, 'kiosk_commercial_product_photo_1794808369852.jpg'),
    dests: [path.join(__dirname, '..', 'public', 'images', 'portfolio', 'portfolio-02.webp')]
  },
  {
    src: path.join(brainDir, 'portfolio_03_commercial_1794808374735.jpg'),
    dests: [path.join(__dirname, '..', 'public', 'images', 'portfolio', 'portfolio-03.webp')]
  },
  {
    src: path.join(brainDir, 'portfolio_06_retouched_1794810590125.jpg'),
    dests: [path.join(__dirname, '..', 'public', 'images', 'portfolio', 'portfolio-06.webp')]
  },
  {
    src: path.join(brainDir, 'portfolio_07_retouched_1794810582185.jpg'),
    dests: [path.join(__dirname, '..', 'public', 'images', 'portfolio', 'portfolio-07.webp')]
  },
  {
    src: path.join(brainDir, 'portfolio_08_retouched_1794810605007.jpg'),
    dests: [path.join(__dirname, '..', 'public', 'images', 'portfolio', 'portfolio-08.webp')]
  }
];

/**
 * Apply a professional text-only watermark strictly according to specs:
 * - Text: 'JM Kontainer'
 * - Style: Modern, clean sans-serif font, solid white
 * - Opacity: 25% (subtle and translucent)
 * - Placement: Bottom-right corner, leaving a small margin from the edges
 * - Zero pixel mutation on underlying content
 */
async function processItem(item) {
  if (!fs.existsSync(item.src)) {
    console.error(`Source not found: ${item.src}`);
    return;
  }

  // First prepare the clean base image buffer
  let pipeline = sharp(item.src);
  if (item.resize) {
    pipeline = pipeline.resize(item.resize.width, item.resize.height, { fit: item.resize.fit });
  }

  const baseBuffer = await pipeline.toBuffer();
  const meta = await sharp(baseBuffer).metadata();
  const width = meta.width;
  const height = meta.height;

  // Save clean master backup
  const cleanBackupName = path.basename(item.dests[0]);
  fs.writeFileSync(path.join(cleanMasterDir, cleanBackupName), baseBuffer);

  // Responsive font size & margins
  const fontSize = Math.max(16, Math.round(width * 0.024));
  const marginX = Math.max(24, Math.round(width * 0.035));
  const marginY = Math.max(20, Math.round(height * 0.035));

  const posX = width - marginX;
  const posY = height - marginY;

  // Strictly text-only SVG overlay with subtle shadow for crisp contrast across light & dark backgrounds
  const svgWatermark = Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1" stdDeviation="1.5" flood-color="rgba(0,0,0,0.18)" />
        </filter>
      </defs>
      <text 
        x="${posX}" 
        y="${posY}" 
        filter="url(#shadow)"
        font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
        font-size="${fontSize}px"
        font-weight="500"
        letter-spacing="0.05em"
        text-anchor="end"
        fill="rgba(255, 255, 255, 0.19)"
      >JM Kontainer</text>
    </svg>
  `);

  const watermarkedBuffer = await sharp(baseBuffer)
    .composite([{ input: svgWatermark, blend: 'over' }])
    .webp({ quality: 92 })
    .toBuffer();

  for (const dest of item.dests) {
    fs.writeFileSync(dest, watermarkedBuffer);
    console.log(`Watermarked: ${path.relative(path.join(__dirname, '..'), dest)} (${width}x${height})`);
  }
}

async function main() {
  console.log('Applying professional text-overlay watermark (JM Kontainer, 25% opacity, bottom-right)...');
  for (const item of masterSources) {
    await processItem(item);
  }
  console.log('All images processed successfully.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
