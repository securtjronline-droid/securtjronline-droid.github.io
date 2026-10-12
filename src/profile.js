// All personal content for the site lives here.
// Replace the [bracketed] placeholders with your own details.
// Only add facts that are true — nothing here should be invented.

export const profile = {
  siteName: 'Market & Medicine',
  preferredName: 'Ty Raulerson',
  tagline:
    'Exploring where the stock market, biotechnology, and healthcare innovation meet.',
  bio: [
    'I’m currently pursuing a Master’s degree in the AI in Biomedical and Health Sciences (AIBHS) program at the University of Florida College of Medicine.',
    'I’m interested in the intersection of the stock market, biotechnology, and emerging healthcare innovations. I enjoy learning about new medical breakthroughs and how they shape the future of healthcare and investing.',
  ],
  interests: [
    'The stock market',
    'Biotechnology',
    'New healthcare innovations',
  ],
  links: {
    github: 'https://github.com/securtjronline-droid',
    // email: 'you@example.com',
    // linkedin: 'https://www.linkedin.com/in/your-handle',
  },
}

// Topic areas the site covers. These describe the site's subject matter,
// not claims about your own holdings or experience — edit freely.
export const marketTopics = [
  {
    title: 'Healthcare & biotech sectors',
    text: 'How pharmaceutical, biotech, and medical device companies fit into the broader market.',
  },
  {
    title: 'Reading company filings',
    text: 'Using public filings such as 10-Ks and 10-Qs to understand a business beyond the headlines.',
  },
  {
    title: 'Catalysts & risk',
    text: 'Why clinical trial readouts and regulatory decisions can move biotech stocks sharply in either direction.',
  },
]

export const biotechTopics = [
  {
    title: 'Gene & cell therapies',
    text: 'Approaches that edit, replace, or reprogram genes and cells to treat disease.',
  },
  {
    title: 'mRNA & new vaccine platforms',
    text: 'Platforms that instruct the body’s own cells to produce therapeutic proteins.',
  },
  {
    title: 'AI in drug discovery',
    text: 'Machine learning tools used to find drug candidates and predict protein structures.',
  },
  {
    title: 'Digital health & devices',
    text: 'Wearables, remote monitoring, and software that change how care is delivered.',
  },
]

// Official, primary sources — no live data or news is embedded on this site.
export const resources = [
  {
    category: 'Markets & investing',
    items: [
      {
        name: 'SEC EDGAR',
        url: 'https://www.sec.gov/edgar/search/',
        text: 'Search public company filings.',
      },
      {
        name: 'Investor.gov',
        url: 'https://www.investor.gov/',
        text: 'Investor education from the U.S. SEC.',
      },
      {
        name: 'FINRA BrokerCheck',
        url: 'https://brokercheck.finra.org/',
        text: 'Look up brokers and investment firms.',
      },
    ],
  },
  {
    category: 'Biotech & healthcare',
    items: [
      {
        name: 'ClinicalTrials.gov',
        url: 'https://clinicaltrials.gov/',
        text: 'Registry of clinical studies around the world.',
      },
      {
        name: 'FDA Press Announcements',
        url: 'https://www.fda.gov/news-events/fda-newsroom/press-announcements',
        text: 'Official FDA news and approvals.',
      },
      {
        name: 'NIH News Releases',
        url: 'https://www.nih.gov/news-events/news-releases',
        text: 'Research news from the National Institutes of Health.',
      },
    ],
  },
]
