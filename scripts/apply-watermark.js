const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

/**
 * Apply a robust, repetitive diagonal grid copyright watermark across the entire image.
 * 
 * Rules:
 * - Text: Exactly 'JM Kontainer'
 * - Coverage: Cascading diagonal grid spanning 100% of the image from edge to edge
 * - Angle: ~32 degree diagonal rotation
 * - Font: Clean, modern, semi-bold sans-serif
 * - Opacity: 13-14% (rgba(255, 255, 255, 0.14) with subtle dark outline)
 * - Base image: Preserves underlying booth, lighting, colors, and background
 */
async function applySecurityGridWatermark(targetPath) {
  if (!fs.existsSync(targetPath)) {
    console.error(`File not found: ${targetPath}`);
    return;
  }

  // Use clean original if available, otherwise target
  const origPath = targetPath.replace(/\.webp$/, '.orig.webp');
  const sourcePath = fs.existsSync(origPath) ? origPath : targetPath;

  const inputBuffer = fs.readFileSync(sourcePath);
  const meta = await sharp(inputBuffer).metadata();
  const width = meta.width;
  const height = meta.height;

  // Responsive font size and cell dimensions
  const fontSize = Math.max(16, Math.round(width * 0.034));
  const patternWidth = Math.round(fontSize * 7.2);
  const patternHeight = Math.round(fontSize * 3.4);

  // SVG Pattern defining cascading diagonal grid watermark across full canvas
  const svgGrid = Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="security-grid" width="${patternWidth}" height="${patternHeight}" patternUnits="userSpaceOnUse" patternTransform="rotate(-32)">
          <text 
            x="${patternWidth / 2}" 
            y="${patternHeight / 2}" 
            fill="rgba(255, 255, 255, 0.14)" 
            stroke="rgba(0, 0, 0, 0.08)" 
            stroke-width="0.75" 
            font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" 
            font-size="${fontSize}px" 
            font-weight="600" 
            letter-spacing="0.1em" 
            text-anchor="middle" 
            dominant-baseline="central"
          >JM Kontainer</text>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#security-grid)" />
    </svg>
  `);

  const outputBuffer = await sharp(inputBuffer)
    .composite([
      {
        input: svgGrid,
        blend: 'over',
      },
    ])
    .webp({ quality: 88 })
    .toBuffer();

  fs.writeFileSync(targetPath, outputBuffer);
  console.log(`Security Grid Applied: ${path.basename(targetPath)} (${width}x${height})`);
}

async function main() {
  const targetFiles = [
    // Primary narrative & showcases
    path.join(__dirname, '..', 'public', 'images', 'portfolio', 'workshop-las-1.webp'),
    path.join(__dirname, '..', 'public', 'images', 'portfolio', 'kanopi-alderon-carport.webp'),
    path.join(__dirname, '..', 'public', 'images', 'portfolio', 'pagar-minimalis-modern.webp'),
    path.join(__dirname, '..', 'public', 'images', 'portfolio', 'rombong-kontainer-1.webp'),
    // Featured portfolio items
    path.join(__dirname, '..', 'public', 'images', 'portfolio', 'portfolio-01.webp'),
    path.join(__dirname, '..', 'public', 'images', 'portfolio', 'portfolio-02.webp'),
    path.join(__dirname, '..', 'public', 'images', 'portfolio', 'portfolio-03.webp'),
    path.join(__dirname, '..', 'public', 'images', 'portfolio', 'portfolio-06.webp'),
    path.join(__dirname, '..', 'public', 'images', 'portfolio', 'portfolio-07.webp'),
    path.join(__dirname, '..', 'public', 'images', 'portfolio', 'portfolio-08.webp'),
    // Slider hero items
    path.join(__dirname, '..', 'public', 'images', 'slider', 'slide-1.webp'),
    path.join(__dirname, '..', 'public', 'images', 'slider', 'slide-2.webp'),
    path.join(__dirname, '..', 'public', 'images', 'slider', 'slide-3.webp'),
    path.join(__dirname, '..', 'public', 'images', 'slider', 'slide-4.webp'),
    path.join(__dirname, '..', 'public', 'images', 'slider', 'slide-5.webp'),
  ];

  for (const f of targetFiles) {
    await applySecurityGridWatermark(f);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
