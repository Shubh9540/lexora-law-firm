const fs = require('fs');
const files = [
  'app/about/page.tsx', 
  'app/our-approach/page.tsx', 
  'app/services/[id]/page.tsx', 
  'app/services/page.tsx', 
  'app/why-choose-us/page.tsx'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(/\{templateData\?\.categories\?\.LawFirm\?\.sections\?\.globalUI\?\.variants\?\.LexoraGlobalUI1\?\.loadingText \|\| \"Loading\.\.\.\"}/g, '{"Loading..."}');
    fs.writeFileSync(f, content);
    console.log('Fixed loading in ' + f);
  }
});
