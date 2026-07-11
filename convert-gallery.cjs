const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcDir1 = '/Users/razalkizhakkekara/asjroofing/public/images/loft jm';
const srcDir2 = '/Users/razalkizhakkekara/asjroofing/public/images/WhatsApp Unknown 2026-07-11 at 01.56.13';
const destDir = '/Users/razalkizhakkekara/JMLOFT conversions/public/images/GALLERY';

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

// Get all files
const files1 = fs.existsSync(srcDir1) ? fs.readdirSync(srcDir1).filter(f => f.match(/\.(jpg|jpeg|png)$/i)).map(f => path.join(srcDir1, f)) : [];
const files2 = fs.existsSync(srcDir2) ? fs.readdirSync(srcDir2).filter(f => f.match(/\.(jpg|jpeg|png)$/i)).map(f => path.join(srcDir2, f)) : [];

// Combine and pick exactly 20 (To get a good mix, interleave them)
const selectedFiles = [];
let i = 0, j = 0;
while (selectedFiles.length < 20 && (i < files1.length || j < files2.length)) {
    if (i < files1.length) selectedFiles.push(files1[i++]);
    if (selectedFiles.length < 20 && j < files2.length) selectedFiles.push(files2[j++]);
}

const exportedNames = [];

async function convert() {
    for (let index = 0; index < selectedFiles.length; index++) {
        const file = selectedFiles[index];
        const outName = `gallery-img-${index + 1}.webp`;
        const outPath = path.join(destDir, outName);
        
        await sharp(file)
            .resize(800) // resize to max 800px width for gallery to keep sizes small
            .webp({ quality: 80 })
            .toFile(outPath);
            
        exportedNames.push(outName);
        console.log(`Converted ${outName}`);
    }
    
    // Save the array to a json file so I can read it easily
    fs.writeFileSync('/tmp/gallery-names.json', JSON.stringify(exportedNames));
    console.log("DONE");
}

convert().catch(console.error);
