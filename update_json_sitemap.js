const fs = require('fs');
const file = 'data/templates.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

Object.assign(data.lexora.globalUI, {
  sitemapBadge: 'SITEMAP',
  sitemapTitle: 'Explore All Pages',
  sitemapHome: 'Home 🏠',
  sitemapAbout: 'About Us',
  sitemapWhyChooseUs: 'Why Choose Us',
  sitemapOurApproach: 'Our Approach',
  sitemapServices: 'Services',
  sitemapIndustries: 'Industries We Serve',
  sitemapTeam: 'Our Team',
  sitemapDetailSuffix: 'Detail',
  defaultSitemapBreadcrumb: {
    title: 'Sitemap',
    paths: [{ label: 'Home', url: '/' }, { label: 'Sitemap' }],
    bgImage: '/banner/ban1.jpg'
  }
});

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('Done');
