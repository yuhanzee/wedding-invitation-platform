const fs = require('fs');
const path = require('path');

const svgPath = 'C:\\medi heaven\\wedding-invitation-platform\\public\\assets\\countdown\\map.svg';
const svgContent = fs.readFileSync(svgPath, 'utf8');

const match = svgContent.match(/href="data:image\/png;base64,([^"]+)"/);
if (match) {
  const base64Data = match[1];
  const buffer = Buffer.from(base64Data, 'base64');
  const outputPath = 'C:\\medi heaven\\wedding-invitation-platform\\scratch\\extracted_map.png';
  fs.writeFileSync(outputPath, buffer);
  console.log('Successfully saved to', outputPath);
} else {
  console.log('No base64 image found');
}
