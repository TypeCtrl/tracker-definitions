import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'trancetraffic',
  name: 'TranceTraffic',
  description: 'TranceTraffic is a Private site for MUSIC',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://www.trancetraffic.com/'],
  caps: {
    modes: {
      search: ['q'],
      'music-search': ['q', 'album', 'artist', 'label', 'year'],
    },
    categorymappings: [{ id: '1', cat: 'Audio' }],
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
    inputs: {
      search: '{{if .Query.Artist}}{{ .Query.Artist }}{{else}}{{ .Keywords }}{{end}}',
    },
    rows: {
      selector: 'table.mainouter table > tbody > tr:has(a[href^="details.php?id="])',
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
  source: 'jackett',
};