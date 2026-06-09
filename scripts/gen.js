const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../assets');
const destDir = path.join(__dirname, '../public/projects');

// 1. Ensure public/projects exists and clean it
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
} else {
    fs.readdirSync(destDir).forEach(file => {
        fs.unlinkSync(path.join(destDir, file));
    });
}

// 2. Copy images from assets/ to public/projects/
if (fs.existsSync(srcDir)) {
    const files = fs.readdirSync(srcDir);
    files.forEach(file => {
        const srcPath = path.join(srcDir, file);
        if (fs.statSync(srcPath).isFile()) {
            if (file.endsWith('.jpeg') || file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.svg')) {
                const destPath = path.join(destDir, file);
                fs.copyFileSync(srcPath, destPath);
                console.log(`Copied image to public: ${file}`);
            }
        }
    });
}

// 3. Scan public/projects/ and generate projectsData.ts
fs.readdir(destDir, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    const projectTemplates = [
        { category: 'حفلات زفاف', titles: ['حفل زفاف العائلة المالكة', 'الخيمة الذهبية للزفاف', 'تجهيز قاعة الزفاف الفاخرة'] },
        { category: 'معارض', titles: ['معرض الصناعات الوطنية', 'معرض الكتاب الدولي', 'المعرض الفني الشامل'] },
        { category: 'مؤتمرات', titles: ['مؤتمر الاستثمار الدولي', 'مؤتمر التقنية والإبتكار', 'المؤتمر الطبي السنوي'] }
    ];

    // Filter out non-images
    const imageFiles = files.filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png'));

    // Sort to maintain deterministic order (project-1, project-2, etc., then important-, then bathrrom1)
    imageFiles.sort((a, b) => {
        // Handle heroBackground first
        if (a === 'heroBackground.jpeg') return -1;
        if (b === 'heroBackground.jpeg') return 1;

        // Handle bathroom last
        if (a === 'bathroom.jpeg') return 1;
        if (b === 'bathroom.jpeg') return -1;

        // Compare project-X or important-X numerically if possible
        const cleanA = a.replace(/\.jpe?g|\.png/i, '');
        const cleanB = b.replace(/\.jpe?g|\.png/i, '');
        return cleanA.localeCompare(cleanB, undefined, { numeric: true, sensitivity: 'base' });
    });

    // Custom mappings for important images and bathroom image
    const importantMappings = {
        'important-1.jpeg': { category: 'حفلات زفاف', title: 'تجهيز وتنسيق حفلات زفاف فاخرة' },
        'important-2.jpeg': { category: 'معارض', title: 'أجنحة معارض بتصميم أوروبي' },
        'important-3.jpeg': { category: 'مؤتمرات', title: 'قاعات مؤتمرات مجهزة بالكامل' },
        'important-4.jpeg': { category: 'حفلات زفاف', title: 'تجهيز خيام أوروبية لحفلات الزفاف' },
        'important-5.jpeg': { category: 'معارض', title: 'بناء وتصميم منصات المعارض' },
        'important-6.jpeg': { category: 'مؤتمرات', title: 'تنظيم وتجهيز القاعات الكبرى للمؤتمرات' },
        'important-7.jpeg': { category: 'حفلات زفاف', title: 'ديكورات وتجهيزات حفلات زفاف خارجية VIP' },
        'bathroom.jpeg': { category: 'دورات مياه', title: 'حمامات VIP فاخرة ومجهزة بالكامل' },
        'bath1.jpeg': { category: 'دورات مياه', title: 'دورات مياه متنقلة فاخرة للمناسبات' },
        'bath2.jpeg': { category: 'دورات مياه', title: 'كابينات حمامات فاخرة كبار الشخصيات' },
        'bath3.jpeg': { category: 'دورات مياه', title: 'حمامات VIP مجهزة بالكامل للمناسبات' }
    };

    const projects = imageFiles.map((file, index) => {
        // Check if there is a custom mapping for this file
        if (importantMappings[file]) {
            return {
                id: index + 1,
                title: importantMappings[file].title,
                category: importantMappings[file].category,
                image: `/projects/${file}`
            };
        }

        // Special case for heroBackground
        if (file === 'heroBackground.jpeg') {
            return {
                id: index + 1,
                title: 'حفل زفاف العائلة المالكة',
                category: 'حفلات زفاف',
                image: `/projects/${file}`
            };
        }

        // Standard project-X.jpeg files
        // Match the category cycling using the project index
        const match = file.match(/project-(\d+)/);
        const projectNum = match ? parseInt(match[1], 10) : index;

        const templateIndex = projectNum % projectTemplates.length;
        const template = projectTemplates[templateIndex];
        const title = template.titles[projectNum % template.titles.length];

        return {
            id: index + 1,
            title: title,
            category: template.category,
            image: `/projects/${file}`
        };
    });

    const fileContent = `export const projects = ${JSON.stringify(projects, null, 2)};\n`;

    fs.writeFileSync(path.join(__dirname, '../lib/projectsData.ts'), fileContent);
    console.log('projectsData.ts generated successfully.');
});
