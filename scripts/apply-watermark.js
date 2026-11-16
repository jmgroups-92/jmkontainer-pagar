const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function applyWatermark(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return;
  }

  // Clean any stray tmp file
  const strayTmp = filePath + '.tmp.webp';
  if (fs.existsSync(strayTmp)) {
    try { fs.unlinkSync(strayTmp); } catch (e) {}
  }

  const inputBuffer = fs.readFileSync(filePath);
  const meta = await sharp(inputBuffer).metadata();
  const width = meta.width;
  const height = meta.height;

  // Responsive font size: ~7.5% of image width
  const fontSize = Math.round(width * 0.075);
  const strokeWidth = Math.max(1, Math.round(fontSize * 0.02));

  // Professional semi-transparent SVG watermark (35% opacity) with subtle drop shadow
  const svgWatermark = Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <style>
        .wm-text {
          fill: rgba(255, 255, 255, 0.35);
          stroke: rgba(0, 0, 0, 0.20);
          stroke-width: ${strokeWidth}px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          font-size: ${fontSize}px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-anchor: middle;
          dominant-baseline: central;
        }
      </style>
      <g transform="rotate(-22, ${width / 2}, ${height / 2})">
        <text x="${width / 2}" y="${height / 2}" class="wm-text" filter="url(#shadow)">JM Kontainer</text>
      </g>
    </svg>
  `);

  const outputBuffer = await sharp(inputBuffer)
    .composite([
      {
        input: svgWatermark,
        blend: 'over',
      },
    ])
    .webp({ quality: 88 })
    .toBuffer();

  fs.writeFileSync(filePath, outputBuffer);
  console.log(`Watermarked: ${path.basename(filePath)} (${width}x${height})`);
}

async function main() {
  const targetFiles = [
    path.join(__dirname, '..', 'public', 'images', 'portfolio', 'workshop-las-1.webp'),
    path.join(__dirname, '..', 'public', 'images', 'portfolio', 'kanopi-alderon-carport.webp'),
    path.join(__dirname, '..', 'public', 'images', 'portfolio', 'pagar-minimalis-modern.webp'),
    path.join(__dirname, '..', 'public', 'images', 'portfolio', 'rombong-kontainer-1.webp'),
    path.join(__dirname, '..', 'public', 'images', 'slider', 'slide-1.webp'),
    path.join(__dirname, '..', 'public', 'images', 'slider', 'slide-2.webp'),
    path.join(__dirname, '..', 'public', 'images', 'slider', 'slide-3.webp'),
    path.join(__dirname, '..', 'public', 'images', 'slider', 'slide-4.webp'),
    path.join(__dirname, '..', 'public', 'images', 'slider', 'slide-5.webp'),
  ];

  for (const f of targetFiles) {
    await applyWatermark(f);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
