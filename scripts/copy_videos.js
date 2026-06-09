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
    
    let standardVideoIndex = 1;
    videoFiles.forEach((file) => {
        const sourcePath = path.join(sourceDir, file);
        
        // Handle specific important videos
        if (file === 'main.mp4' || file === 'bath.mp4') {
            const destPath = path.join(destDir, file);
            fs.copyFileSync(sourcePath, destPath);
            console.log(`Copied special video: ${file} -> ${file}`);
        } else {
            // Numbered general videos
            const destPath = path.join(destDir, `video${standardVideoIndex}.mp4`);
            fs.copyFileSync(sourcePath, destPath);
            console.log(`Copied ${file} to video${standardVideoIndex}.mp4`);
            standardVideoIndex++;
        }
    });
    
    console.log('All videos processed successfully.');
});
