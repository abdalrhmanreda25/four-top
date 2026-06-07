const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '../assets');
const destDir = path.join(__dirname, '../public/videos');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

fs.readdir(sourceDir, (err, files) => {
    if (err) return console.error(err);

    const videoFiles = files.filter(f => f.endsWith('.mp4'));
    
    videoFiles.forEach((file, index) => {
        const sourcePath = path.join(sourceDir, file);
        const destPath = path.join(destDir, `video${index + 1}.mp4`);
        fs.copyFileSync(sourcePath, destPath);
        console.log(`Copied ${file} to video${index + 1}.mp4`);
    });
    
    console.log('All videos copied successfully.');
});
