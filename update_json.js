const fs = require('fs');
const file = 'data/templates.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

Object.assign(data.lexora.globalUI, {
  sidebarSearchTitle: 'Search',
  sidebarSearchPlaceholder: 'Search services...',
  sidebarServicesTitle: 'Our Services',
  sidebarResourcesTitle: 'Resources',
  sidebarContactTitle: 'Have Questions?',
  sidebarContactDesc: 'We\'re here to help you.',
  sidebarContactNamePlaceholder: 'Your Name',
  sidebarContactEmailPlaceholder: 'Your Email',
  sidebarContactMessagePlaceholder: 'Your Message',
  sidebarContactSubmitText: 'SEND MESSAGE',
  sidebarContactSubmittingText: 'SENDING...',
  sidebarContactSuccessMessage: 'Thank you! Your message has been sent successfully. We will contact you shortly.',
  sidebarSearchDemoMessage: 'Search results for: "{query}"\n(This is a template demo. In production, this would navigate to a search page.)'
});

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('Done');
