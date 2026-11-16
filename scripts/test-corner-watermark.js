const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function renderWatermark(inputPath, outputPath) {
  const meta = await sharp(inputPath).metadata();
  const width = meta.width;
  const height = meta.height;

  // Responsive font size & margins
  const fontSize = Math.max(16, Math.round(width * 0.024));
  const marginX = Math.max(24, Math.round(width * 0.035));
  const marginY = Math.max(20, Math.round(height * 0.035));

  const posX = width - marginX;
  const posY = height - marginY;

  // Modern, clean sans-serif font, solid white, 25% opacity, subtle drop shadow for crisp readability across light/dark backgrounds
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
        font-weight="600"
        letter-spacing="0.06em"
        text-anchor="end"
        fill="rgba(255, 255, 255, 0.25)"
      >JM Kontainer</text>
    </svg>
  `);

  await sharp(inputPath)
    .composite([{ input: svgWatermark, blend: 'over' }])
    .webp({ quality: 92 })
    .toFile(outputPath);

  console.log(`Rendered: ${outputPath}`);
}

async function main() {
  await renderWatermark(
    path.join(__dirname, '..', 'public', 'images', 'slider', 'slide-1.webp'),
    path.join(__dirname, '..', 'public', 'images', 'test', 'sample_slide1_wm.webp')
  );
  await renderWatermark(
    path.join(__dirname, '..', 'public', 'images', 'portfolio', 'workshop-las-1.webp'),
    path.join(__dirname, '..', 'public', 'images', 'test', 'sample_workshop_wm.webp')
  );
}

main();
