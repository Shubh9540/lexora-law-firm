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

const files = walkSync('app').filter(f => f.endsWith('.tsx'));

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let modified = false;

  const loadingReplacement = '{templateData?.categories?.LawFirm?.sections?.globalUI?.variants?.LexoraGlobalUI1?.loadingText || "Loading..."}';
  const notFoundReplacement = '{templateData?.categories?.LawFirm?.sections?.globalUI?.variants?.LexoraGlobalUI1?.notFoundText || "Not found"}';

  // Replace exact >Loading...</p> 
  if (content.includes('>Loading...</p>')) {
    content = content.replace(/>Loading\.\.\.<\/p>/g, `>${loadingReplacement}</p>`);
    modified = true;
  } else if (content.includes('Loading...')) {
    // Replace standalone Loading...
    content = content.replace(/Loading\.\.\./g, loadingReplacement);
    modified = true;
  }

  // Replace >Not found</p>
  if (content.includes('>Not found</p>')) {
    content = content.replace(/>Not found<\/p>/g, `>${notFoundReplacement}</p>`);
    modified = true;
  }
  
  if (content.includes('>Service not found</p>')) {
    content = content.replace(/>Service not found<\/p>/g, `>${notFoundReplacement}</p>`);
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(f, content);
    console.log('Updated hardcoded text in ' + f);
  }
});
