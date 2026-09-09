import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const svgLogo = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563EB" />
      <stop offset="50%" stop-color="#3B82F6" />
      <stop offset="100%" stop-color="#4F46E5" />
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE047" />
      <stop offset="100%" stop-color="#F59E0B" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000000" flood-opacity="0.25" />
    </filter>
  </defs>

  <!-- Background rounded canvas -->
  <rect width="512" height="512" rx="110" fill="url(#bgGrad)" />

  <!-- Subtle glow ring -->
  <circle cx="256" cy="256" r="180" fill="none" stroke="#FFFFFF" stroke-opacity="0.08" stroke-width="24" />

  <!-- Main Education Symbol (Graduation Cap + Book + Letter A) -->
  <g filter="url(#shadow)" transform="translate(0, -10)">
    <!-- Graduation Cap Top Rhombus -->
    <polygon points="256,120 410,185 256,250 102,185" fill="#FFFFFF" />
    
    <!-- Underneath Cap Skull Base -->
    <path d="M165,225 L165,285 C165,325 347,325 347,285 L347,225 C318,245 287,255 256,255 C225,255 194,245 165,225 Z" fill="#E2E8F0" />
    
    <!-- Tassel String and Button -->
    <circle cx="256" cy="185" r="9" fill="url(#goldGrad)" />
    <path d="M256,185 Q360,200 375,255 L380,315" fill="none" stroke="url(#goldGrad)" stroke-width="7" stroke-linecap="round" />
    <polygon points="372,315 388,315 384,350 376,350" fill="url(#goldGrad)" />
  </g>

  <!-- Open Modern Book / Wings at Bottom -->
  <g transform="translate(0, 20)">
    <path d="M256,365 Q190,325 120,345 C120,385 190,365 256,405 Q322,365 392,345 C392,385 322,325 256,365 Z" fill="#FFFFFF" fill-opacity="0.9" filter="url(#shadow)" />
    <circle cx="256" cy="385" r="6" fill="url(#goldGrad)" />
  </g>

  <!-- Letter A Badge -->
  <text x="256" y="465" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="34" fill="#FFFFFF" letter-spacing="4">APPRENDRE</text>
</svg>
`;

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Save SVG
fs.writeFileSync(path.join(publicDir, 'icon.svg'), svgLogo.trim());

async function buildIcons() {
  const svgBuffer = Buffer.from(svgLogo);

  // 512x512
  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'icon-512.png'));
  console.log('Created icon-512.png');

  // 192x192
  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'icon-192.png'));
  console.log('Created icon-192.png');

  // Apple Touch Icon 180x180
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Created apple-touch-icon.png');

  // Favicon 64x64 PNG
  await sharp(svgBuffer)
    .resize(64, 64)
    .png()
    .toFile(path.join(publicDir, 'favicon.png'));
  console.log('Created favicon.png');
}

buildIcons().catch(console.error);
