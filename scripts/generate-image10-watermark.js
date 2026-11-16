const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputPath = 'C:/Users/ibnud/.gemini/antigravity/brain/38840c34-19e0-46a7-8b84-89ea0ad2e5c9/.user_uploaded/media_1794808975043_0f712e43.jpg';

async function generateWatermarkedImage10() {
  // Read original
  const origBuffer = fs.readFileSync(inputPath);
  const meta = await sharp(origBuffer).metadata();
  console.log('Original size:', meta.width, 'x', meta.height);

  // 1. High-Res 4x Version (664 x 4096) for crisp typography
  const scale = 4;
  const targetW = meta.width * scale; // 664
  const targetH = meta.height * scale; // 4096

  // Scaled photo bounds:
  // Card 1 photo: left = 21*4 = 84, top = 286*4 = 1144, width = 35*4 = 140, height = 18*4 = 72
  // Card 2 photo: left = 65*4 = 260, top = 286*4 = 1144, width = 36*4 = 144, height = 18*4 = 72
  // Card 3 photo: left = 110*4 = 440, top = 286*4 = 1144, width = 35*4 = 140, height = 18*4 = 72

  // Bottom-right placement with small margin inside photo boundary
  // Photo 1 bottom-right: x = 84 + 140 - 6 = 218, y = 1144 + 72 - 5 = 1211
  // Photo 2 bottom-right: x = 260 + 144 - 6 = 398, y = 1144 + 72 - 5 = 1211
  // Photo 3 bottom-right: x = 440 + 140 - 6 = 574, y = 1144 + 72 - 5 = 1211

  const fontSize = 10;
  const opacity = 0.19; // 18% - 20% opacity as requested

  const svgOverlay4x = Buffer.from(`
    <svg width="${targetW}" height="${targetH}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="wm-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0.5" stdDeviation="0.8" flood-color="rgba(0,0,0,0.18)" />
        </filter>
      </defs>
      <style>
        .wm-text {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          font-size: ${fontSize}px;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-anchor: end;
          fill: rgba(255, 255, 255, ${opacity});
          filter: url(#wm-shadow);
        }
      </style>
      <!-- Card 1: Rombong / Booth -->
      <text x="218" y="1211" class="wm-text">JM Kontainer</text>
      <!-- Card 2: Kanopi Alderon -->
      <text x="398" y="1211" class="wm-text">JM Kontainer</text>
      <!-- Card 3: Pagar Besi Minimalis -->
      <text x="574" y="1211" class="wm-text">JM Kontainer</text>
    </svg>
  `);

  // Resize using lanczos3 to maintain 100% exact layout with zero deformation
  const upscaledBase = await sharp(origBuffer)
    .resize(targetW, targetH, { kernel: 'lanczos3' })
    .toBuffer();

  const finalWatermarked4x = await sharp(upscaledBase)
    .composite([{ input: svgOverlay4x, blend: 'over' }])
    .png()
    .toBuffer();

  // Save as image_10.png in workspace root and public
  fs.writeFileSync(path.join(__dirname, '..', 'image_10.png'), finalWatermarked4x);
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'images', 'image_10.png'), finalWatermarked4x);
  console.log('Saved image_10.png (664x4096)');

  // Also extract the portfolio 3-card section for easy high-resolution review
  // Top: 220*4 = 880, Height: 120*4 = 480
  const sectionExtract = await sharp(finalWatermarked4x)
    .extract({ left: 0, top: 880, width: targetW, height: 480 })
    .png()
    .toBuffer();

  fs.writeFileSync(path.join(__dirname, '..', 'public', 'images', 'image_10_portfolio_section.png'), sectionExtract);
  console.log('Saved image_10_portfolio_section.png');

  // Also generate 1x exact original dimension version (166 x 1024)
  const svgOverlay1x = Buffer.from(`
    <svg width="${meta.width}" height="${meta.height}" xmlns="http://www.w3.org/2000/svg">
      <style>
        .wm-text-1x {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          font-size: 3.5px;
          font-weight: 500;
          letter-spacing: 0.02em;
          text-anchor: end;
          fill: rgba(255, 255, 255, ${opacity});
        }
      </style>
      <text x="55" y="303" class="wm-text-1x">JM Kontainer</text>
      <text x="100" y="303" class="wm-text-1x">JM Kontainer</text>
      <text x="144" y="303" class="wm-text-1x">JM Kontainer</text>
    </svg>
  `);

  const finalWatermarked1x = await sharp(origBuffer)
    .composite([{ input: svgOverlay1x, blend: 'over' }])
    .png()
    .toBuffer();

  fs.writeFileSync(path.join(__dirname, '..', 'public', 'images', 'image_10_1x.png'), finalWatermarked1x);
  console.log('Saved image_10_1x.png');
}

generateWatermarkedImage10();
