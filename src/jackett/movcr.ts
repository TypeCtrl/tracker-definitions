import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'movcr',
  name: 'MovCr',
  description: 'MovCr is an Indian Public torrent site',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://movcr.st/'],
  legacylinks: [
    'https://movcr.tv/',
    'https://movcr.black-mirror.xyz/',
    'https://movcr.unblocked.casa/',
    'https://movcr.proxyportal.fun/',
    'https://movcr.uk-unblock.xyz/',
    'https://movcr.ind-unblock.xyz/',
    'https://movcr.unblocked.bar/',
    'https://movcr.proxyportal.pw/',
    'https://movcr.uk-unblock.pro/',
    'https://movcr.to/',
  ],
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
        'The MovCr web site does not provide categories. Select the category you want Jackett to set on all results returned.',
      default: 'other',
      options: { tv: 'TV', movies: 'Movies', other: 'Other' },
    },
  ],
  download: { selector: 'a[href^="/torrents/"]', attribute: 'href' },
  search: {
    paths: [
      {
        path: '{{ if .Keywords }}search/search.php?q={{ .Keywords }}{{else}}/{{end}}',
      },
    ],
    rows: {
      selector: 'tr:has(td.name a[href^="/download-"])',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: { text: '{{ .Config.category-id }}' },
      title: { selector: 'td.name a:nth-child(2)' },
      details: { selector: 'td.name a', attribute: 'href' },
      download: { selector: 'td.name a', attribute: 'href' },
      date: {
        selector: 'td.seeds:not(:contains("-"))',
        optional: true,
        filters: [{ name: 'timeago' }],
      },
      size: { selector: 'td.leeches:contains("B")', optional: true },
      seeders: {
        selector: 'td:nth-child(2)',
        filters: [{ name: 'split', args: ['/', 0] }],
      },
      leechers: {
        selector: 'td:nth-child(2)',
        filters: [{ name: 'split', args: ['/', 1] }],
      },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
