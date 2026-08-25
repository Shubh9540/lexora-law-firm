const fs = require('fs');
const file = 'data/templates.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

if (!data.lexora.team.highlightText) {
  data.lexora.team.highlightText = 'Attorneys';
}

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('Done');
