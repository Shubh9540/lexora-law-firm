const fs = require('fs');
const file = 'data/templates.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

Object.assign(data.lexora.globalUI, {
  servicesGridTitle: 'How We Can Help',
  servicesGridSubtitle: 'Trusted legal guidance tailored to your unique needs.',
  servicesGridLearnMore: 'Learn More',
  servicesGridBannerTitle: 'Don\'t See Your Legal Need?',
  servicesGridBannerDesc: 'We handle a wide range of legal matters. Contact us to discuss how we can help.',
  servicesGridBannerBtnText: 'CONTACT US',
  servicesGridBannerBtnUrl: '#'
});

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('Done');
