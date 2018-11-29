import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'trancetraffic',
  name: 'TranceTraffic',
  description: 'TranceTraffic is a Private site for MUSIC',
  language: 'en-us',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://www.trancetraffic.com'],
  certificates: ['117B89D7C086F3E051F0A5A3576504667402AE52'],
  caps: {
    categories: { '1': 'Audio' },
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
  },
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'td.embedded:has(h2:contains("failed"))' }],
    test: { path: 'browse.php' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: { search: '{{ .Query.Keywords }}' },
    rows: {
      selector:
        'table.mainouter table > tbody > tr:has(a[href^="details.php?id="])',
    },
    fields: {
      download: {
        selector: 'a[href^="download.php/"]',
        attribute: 'href',
      },
      title: { selector: 'a[href^="details.php?id="]' },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      category: { text: 1 },
      date: {
        selector: 'td:nth-child(6)',
        filters: [
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: '2006-01-0215:04:05 -07:00' },
        ],
      },
      seeders: { selector: 'td:nth-child(9)' },
      leechers: { selector: 'td:nth-child(10)' },
      grabs: {
        selector: 'td:nth-child(8)',
        filters: [{ name: 'regexp', args: '([\\d,]+)' }],
      },
      files: { selector: 'td:nth-child(4)' },
      size: { selector: 'td:nth-child(7)' },
      downloadvolumefactor: { case: { '*': '1' } },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
};
