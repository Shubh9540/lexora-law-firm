const fs = require('fs');
const file = 'data/templates.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

Object.assign(data.lexora.globalUI, {
  teamDetailBadge: 'EXPERT LAWYER',
  teamDetailExpLabel: 'EXPERIENCE',
  teamDetailPhoneLabel: 'PHONE',
  teamDetailEmailLabel: 'EMAIL',
  teamDetailLocationLabel: 'LOCATION',
  teamDetailDefaultExp: '10+ Years of Experience',
  teamDetailDefaultPhone: '+111 875 74885',
  teamDetailDefaultEmail: 'info@lexora.com',
  teamDetailDefaultLocation: 'New York, USA',
  teamDetailSkillsTitle: 'Professional Skills',
  teamDetailExpTitle: 'Professional Experience',
  teamDetailEduTitle: 'Educational Background',
  teamDetailPassingYearLabel: '🗓 Passing Year:'
});

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('Done');
