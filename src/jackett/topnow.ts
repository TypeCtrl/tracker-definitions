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
    categorymappings: [
      { id: 'tv', cat: 'TV' },
      { id: 'movies', cat: 'Movies' },
      { id: 'other', cat: 'Other' },
    ],
  },
  settings: [
    {
      name: 'category-id',
      type: 'select',
      label:
        'The TopNow web site does not provide categories. Select the category you want Jackett to set on all results returned.',
      default: 'other',
      options: { tv: 'TV', movies: 'Movies', other: 'Other' },
    },
  ],
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
      category: { text: '{{ .Config.category-id }}' },
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
