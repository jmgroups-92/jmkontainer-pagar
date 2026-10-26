const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const TARGET_DIRS = [
  path.join(__dirname, '..', 'public', 'images'),
  path.join(__dirname, '..', 'public', 'gallery'),
];

function getAllImages(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getAllImages(fullPath, fileList);
    } else if (/\.(jpe?g|png|webp)$/i.test(item)) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

async function optimizeFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const origBuffer = fs.readFileSync(filePath);
  const origSize = origBuffer.length;
  const isPortfolio = filePath.includes('portfolio');
  const isSlider = filePath.includes('slider');
  const maxWidth = isPortfolio ? 800 : (isSlider ? 1000 : 900);

  try {
    let pipeline = sharp(origBuffer).resize({
      width: maxWidth,
      withoutEnlargement: true,
    });

    let buffer;
    if (ext === '.jpg' || ext === '.jpeg') {
      buffer = await pipeline.jpeg({ quality: 75, mozjpeg: true }).toBuffer();
    } else if (ext === '.webp') {
      buffer = await pipeline.webp({ quality: 75, effort: 6 }).toBuffer();
    } else if (ext === '.png') {
      buffer = await pipeline.png({ compressionLevel: 9, quality: 80 }).toBuffer();
    }

    if (buffer && buffer.length < origSize) {
      fs.writeFileSync(filePath, buffer);
      return { origSize, newSize: buffer.length, saved: origSize - buffer.length };
    }
    return { origSize, newSize: origSize, saved: 0 };
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err.message);
    return { origSize, newSize: origSize, saved: 0 };
  }
}

async function run() {
  console.log('--- Starting Image Optimization (Memory Safe) ---');
  let allFiles = [];
  for (const d of TARGET_DIRS) {
    getAllImages(d, allFiles);
  }

  console.log(`Found ${allFiles.length} images to optimize.`);
  let totalOrig = 0;
  let totalNew = 0;
  let count = 0;

  for (const f of allFiles) {
    const res = await optimizeFile(f);
    totalOrig += res.origSize;
    totalNew += res.newSize;
    count++;
    if (count % 25 === 0 || count === allFiles.length) {
      console.log(`Processed ${count}/${allFiles.length}... Saved so far: ${((totalOrig - totalNew)/1024/1024).toFixed(2)} MB`);
    }
  }

  console.log('--- Finished Image Optimization ---');
  console.log(`Original Total: ${(totalOrig / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Optimized Total: ${(totalNew / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total Saved: ${((totalOrig - totalNew) / 1024 / 1024).toFixed(2)} MB (${(((totalOrig - totalNew)/totalOrig)*100).toFixed(1)}% reduction)`);
}

run();
