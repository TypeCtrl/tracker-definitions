import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'btsow',
  name: 'BTSOW',
  description: 'BTSOW is a Public torrent indexer',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://btsow.online/'],
  legacylinks: [
    'https://btos.pw/',
    'https://btio.pw/',
    'https://btsow.club/',
    'https://bteve.com/',
    'https://btsow.fun/',
    'https://btsow.space/',
    'https://btsow.site/',
    'https://btsow.cyou/',
    'https://btsow.monster/',
    'https://btsow.casa/',
    'https://btsow.website/',
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
        'The BTSOW web site does not provide categories. Select the category you want Jackett to set on all results returned.',
      default: 'other',
      options: { tv: 'TV', movies: 'Movies', other: 'Other' },
    },
  ],
  download: { selector: 'a#magnetOpen', attribute: 'href' },
  search: {
    paths: [
      {
        path: 'search/{{ if .Keywords }}{{ .Keywords }}{{else}}{{ .Today.Year }}{{end}}',
      },
    ],
    rows: { selector: 'div.row:has(a[href*="/detail/hash/"])' },
    fields: {
      category: { text: '{{ .Config.category-id }}' },
      title: {
        selector: 'a[href*="/detail/hash/"]',
        attribute: 'title',
      },
      details: {
        selector: 'a[href*="/detail/hash/"]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href*="/detail/hash/"]',
        attribute: 'href',
      },
      date: {
        selector: 'div.date',
        filters: [{ name: 'dateparse', args: '2006-01-02' }],
      },
      size: { selector: 'div.size' },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
