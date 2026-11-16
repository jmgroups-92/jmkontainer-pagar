const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const brainDir = 'C:\\Users\\ibnud\\.gemini\\antigravity\\brain\\38840c34-19e0-46a7-8b84-89ea0ad2e5c9';
const cleanMasterDir = path.join(__dirname, '..', 'public', 'images', 'clean_master');

const restorations = [
  // 1. Hero Slider (MUST BE 100% CLEAN, NO WATERMARKS)
  {
    src: path.join(brainDir, 'slide_1_commercial_booth_1794809597048.jpg'),
    dest: path.join(__dirname, '..', 'public', 'images', 'slider', 'slide-1.webp')
  },
  {
    src: path.join(brainDir, 'slide_2_commercial_1794808310473.jpg'),
    dest: path.join(__dirname, '..', 'public', 'images', 'slider', 'slide-2.webp')
  },
  {
    src: path.join(brainDir, 'rombong_kontainer_sazakaldar_showcase_1794810091476.jpg'),
    dest: path.join(__dirname, '..', 'public', 'images', 'slider', 'slide-3.webp')
  },
  {
    src: path.join(brainDir, 'kanopi_alderon_carport_luxury_1794810098567.jpg'),
    dest: path.join(__dirname, '..', 'public', 'images', 'slider', 'slide-4.webp')
  },
  {
    src: path.join(brainDir, 'pagar_minimalis_modern_golden_hour_1794810093886.jpg'),
    dest: path.join(__dirname, '..', 'public', 'images', 'slider', 'slide-5.webp')
  },

  // 2. Section 3 Workshop Image (MUST BE 100% CLEAN, NO WATERMARKS)
  {
    src: path.join(__dirname, '..', 'public', 'images', 'professional_welding_workshop_interior_skilled_craftsmen_working_on_custom.png'),
    dest: path.join(__dirname, '..', 'public', 'images', 'portfolio', 'workshop-las-1.webp'),
    resize: { width: 900, height: 657, fit: 'cover' }
  },

  // 3. Section 5 Core Capabilities & Portfolio Highlights (100% CLEAN)
  {
    src: path.join(brainDir, 'rombong_kontainer_sazakaldar_showcase_1794810091476.jpg'),
    dest: path.join(__dirname, '..', 'public', 'images', 'portfolio', 'rombong-kontainer-1.webp')
  },
  {
    src: path.join(brainDir, 'kanopi_alderon_carport_luxury_1794810098567.jpg'),
    dest: path.join(__dirname, '..', 'public', 'images', 'portfolio', 'kanopi-alderon-carport.webp')
  },
  {
    src: path.join(brainDir, 'pagar_minimalis_modern_golden_hour_1794810093886.jpg'),
    dest: path.join(__dirname, '..', 'public', 'images', 'portfolio', 'pagar-minimalis-modern.webp')
  },
  {
    src: path.join(brainDir, 'portfolio_01_commercial_render_1794808362401.jpg'),
    dest: path.join(__dirname, '..', 'public', 'images', 'portfolio', 'portfolio-01.webp')
  },
  {
    src: path.join(brainDir, 'kiosk_commercial_product_photo_1794808369852.jpg'),
    dest: path.join(__dirname, '..', 'public', 'images', 'portfolio', 'portfolio-02.webp')
  },
  {
    src: path.join(brainDir, 'portfolio_03_commercial_1794808374735.jpg'),
    dest: path.join(__dirname, '..', 'public', 'images', 'portfolio', 'portfolio-03.webp')
  },
  {
    src: path.join(brainDir, 'portfolio_06_retouched_1794810590125.jpg'),
    dest: path.join(__dirname, '..', 'public', 'images', 'portfolio', 'portfolio-06.webp')
  },
  {
    src: path.join(brainDir, 'portfolio_07_retouched_1794810582185.jpg'),
    dest: path.join(__dirname, '..', 'public', 'images', 'portfolio', 'portfolio-07.webp')
  },
  {
    src: path.join(brainDir, 'portfolio_08_retouched_1794810605007.jpg'),
    dest: path.join(__dirname, '..', 'public', 'images', 'portfolio', 'portfolio-08.webp')
  }
];

async function main() {
  console.log('Restoring 100% clean unwatermarked master images for all website sections...');

  for (const item of restorations) {
    if (!fs.existsSync(item.src)) {
      console.error(`Source not found: ${item.src}`);
      continue;
    }

    let pipeline = sharp(item.src);
    if (item.resize) {
      pipeline = pipeline.resize(item.resize.width, item.resize.height, { fit: item.resize.fit });
    }

    const buffer = await pipeline
      .webp({ quality: 92 })
      .toBuffer();

    fs.writeFileSync(item.dest, buffer);
    console.log(`Clean Restored: ${path.relative(path.join(__dirname, '..'), item.dest)}`);
  }

  console.log('All website images restored clean without watermarks.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
