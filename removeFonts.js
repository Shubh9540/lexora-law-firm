const fs = require('fs');
const path = require('path');

function walkSync(dir, filelist = []) {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    try {
      filelist = walkSync(dirFile, filelist);
    } catch (err) {
      if (err.code === 'ENOTDIR' || err.code === 'EBADF') filelist.push(dirFile);
    }
  });
  return filelist;
}

const files = [...walkSync('app'), ...walkSync('components')].filter(f => f.endsWith('.tsx'));
const fontRegex = /\bfont-(sans|serif|mono|family-\[.*?\]|heading|primary)\b/g;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let modified = false;

  if (fontRegex.test(content)) {
    content = content.replace(fontRegex, '');
    
    // Cleanup double spaces that might be left over from removing classes
    content = content.replace(/className="([^"]*)"/g, (match, p1) => {
      const cleaned = p1.replace(/\s{2,}/g, ' ').trim();
      return `className="${cleaned}"`;
    });
    
    // Cleanup template literal classes string `...`
    content = content.replace(/className=\{`([^`]*)`\}/g, (match, p1) => {
        const cleaned = p1.replace(/ +/g, ' ').replace(/ \$\{/g, '${').replace(/\}\s+/g, '} ').trim();
        return `className={\`${cleaned}\`}`;
    });
    
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(f, content);
    console.log('Removed hardcoded fonts in ' + f);
  }
});
