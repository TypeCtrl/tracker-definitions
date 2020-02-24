import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'magnet4you',
  name: 'Magnet4You',
  description: 'Magnet4You is a Public magnet search engine',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://magnet4you.me/'],
  legacylinks: ['http://magnet4you.me/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [{ id: '1', cat: 'Other' }],
  },
  settings: [
    {
      name: 'info',
      type: 'info',
      default:
        'Magnet4You does not use categories. In your software Indexer settings, set the category to 100001.',
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'uploaded',
      options: {
        uploaded: 'created',
        seed: 'seeders',
        size: 'size',
        title: 'name',
      },
    },
  ],
  search: {
    paths: [
      {
        path:
          '{{ if .Keywords }}search.php?s={{ .Keywords }}&sort={{ .Config.sort }}{{else}}browse.php?sort={{ .Config.sort }}{{end}}',
      },
    ],
    rows: {
      selector: 'table.tb4 > tbody > tr:has(a[href^="magnet:?xt="])',
    },
    fields: {
      category: { text: 1 },
      title: { selector: 'a[href^="magnet/"]' },
      details: { selector: 'a[href^="magnet/"]', attribute: 'href' },
      magnet: { selector: 'a[href^="magnet:?xt="]', attribute: 'href' },
      date: {
        selector: 'td:nth-child(2)',
        filters: [{ name: 'timeago' }],
      },
      size: {
        selector: 'td:nth-child(3)',
        filters: [{ name: 'replace', args: ['Undefined', '0 B'] }],
      },
      seeders: { selector: 'td:nth-child(5)' },
      leechers: { selector: 'td:nth-child(6)' },
      grabs: {
        selector: 'td:nth-child(7)',
        filters: [{ name: 'replace', args: ['K', '000'] }],
      },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};