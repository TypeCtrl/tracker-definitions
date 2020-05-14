import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'torrent4you',
  name: 'Torrent4You',
  description: 'Torrent4You is a Public torrent storage cache',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://torrent4you.me/'],
  legacylinks: ['http://torrent4you.me/'],
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
        'Torrent4You does not use categories. In your software Indexer settings, set the category to 7000.',
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'created',
      options: {
        created: 'created',
        seed: 'seeders',
        size: 'size',
        title: 'name',
      },
    },
  ],
  download: {
    selector: 'form[action^="../torrents/"]',
    attribute: 'action',
  },
  search: {
    paths: [
      {
        path:
          '{{ if .Keywords }}search.php?s={{ .Keywords }}&sort={{ .Config.sort }}{{else}}browse.php?sort={{ .Config.sort }}{{end}}',
      },
    ],
    rows: { selector: 'table.tb4 > tbody > tr:has(form)' },
    fields: {
      category: { text: 1 },
      title: { selector: 'td:nth-child(1) a' },
      details: { selector: 'td:nth-child(1) a', attribute: 'href' },
      download: { selector: 'td:nth-child(1) a', attribute: 'href' },
      date: {
        selector: 'td:nth-child(3)',
        filters: [{ name: 'timeago' }],
      },
      size: {
        selector: 'td:nth-child(4)',
        filters: [
          { name: 'replace', args: ['Undefined', '0 B'] },
          { name: 'replace', args: ['s', ''] },
        ],
      },
      seeders: {
        selector: 'td:nth-child(6)',
        filters: [{ name: 'replace', args: ['K', '000'] }],
      },
      leechers: {
        selector: 'td:nth-child(7)',
        filters: [{ name: 'replace', args: ['K', '000'] }],
      },
      grabs: {
        selector: 'td:nth-child(8)',
        filters: [{ name: 'replace', args: ['K', '000'] }],
      },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
