import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'topnow',
  name: 'TopNow',
  description: 'TopNow is a Public torrent site for TV / MOVIES',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://topnow.se/'],
  legacylinks: ['http://topnow.se/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [{ id: 'other', cat: 'Other' }],
  },
  settings: [],
  search: {
    paths: [
      {
        path: 'index.php{{if .Keywords}}?search={{ .Keywords }}{{else}}{{end}}',
      },
    ],
    keywordsfilters: [{ name: 're_replace', args: ['[^a-zA-Z0-9]+', '%'] }],
    rows: {
      selector: 'div.grid-item:has(a[href^="/download.php?torrent="])',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: { text: 'other' },
      title: { selector: 'h2.titles' },
      details: { text: '/' },
      download: {
        selector: 'a[href^="/download.php?torrent="]',
        attribute: 'href',
      },
      banner: { selector: 'img', attribute: 'src', optional: true },
      description: {
        selector: '.card_overlay',
        filters: [{ name: 'regexp', args: 'Quality: (.+?)$' }],
      },
      date: { text: 'now' },
      size: { text: '512 MB' },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
