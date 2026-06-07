const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '../public/projects');

fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    
    const projectTemplates = [
        { category: 'حفلات زفاف', titles: ['حفل زفاف العائلة المالكة', 'الخيمة الذهبية للزفاف', 'تجهيز قاعة الزفاف الفاخرة'] },
        { category: 'معارض', titles: ['معرض الصناعات الوطنية', 'معرض الكتاب الدولي', 'المعرض الفني الشامل'] },
        { category: 'مؤتمرات', titles: ['مؤتمر الاستثمار الدولي', 'مؤتمر التقنية والإبتكار', 'المؤتمر الطبي السنوي'] }
    ];

    const locations = ['الرياض', 'الظهران', 'جدة', 'مكة المكرمة', 'الخبر', 'تبوك'];
    
    // Filter out directories or non-images if any
    const imageFiles = files.filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png'));

    const projects = imageFiles.map((file, index) => {
        // Pick a template based on index to ensure we use all categories
        const template = projectTemplates[index % projectTemplates.length];
        // Pick a pseudo-random title from the template
        const title = template.titles[index % template.titles.length];
        
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
