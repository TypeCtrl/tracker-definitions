import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'torrentkitty',
  name: 'TorrentKitty',
  description: 'TorrentKitty is a Public torrent indexer',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: [
    'https://www.torrentkitty.tv/',
    'https://www.torrentkitty.se/',
    'https://www.torrentkitty.vip/',
    'https://www.torrentkitty.app/',
  ],
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
        path: 'search/{{ if .Keywords }}{{ .Keywords}}{{else}}{{ .Today.Year }}{{end}}',
      },
    ],
    rows: {
      selector: 'table#archiveResult tbody tr:has(a[href^="magnet:?xt="])',
    },
    fields: {
      category: { text: 'other' },
      title: { selector: 'td.name' },
      details: { selector: 'td.action a', attribute: 'href' },
      download: {
        selector: 'a[href^="magnet:?xt="]',
        attribute: 'href',
      },
      date: {
        selector: 'td.date',
        filters: [{ name: 'dateparse', args: '2006-01-02' }],
      },
      size: { selector: 'td.size' },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
