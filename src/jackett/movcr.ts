import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'movcr',
  name: 'MovCr',
  description: 'MovCr is an Indian Public torrent site',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://movcr.tv/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [{ id: 'other', cat: 'Other' }],
  },
  settings: [],
  download: { selector: 'a[href^="/torrents/"]' },
  search: {
    paths: [
      {
        path: '{{if .Keywords}}search/search.php?q={{ .Keywords}}{{else}}/{{end}}',
      },
    ],
    rows: {
      selector: 'tr:has(td.name a[href^="/download-"])',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: { text: 'other' },
      title: { selector: 'td.name a:nth-child(2)' },
      details: { selector: 'td.name a', attribute: 'href' },
      download: { selector: 'td.name a', attribute: 'href' },
      date: {
        selector: 'td.seeds:not(:contains("-"))',
        optional: true,
        filters: [{ name: 'timeago' }],
      },
      size: { selector: 'td.leeches' },
      seeders: {
        selector: 'td:nth-child(2)',
        filters: [{ name: 'split', args: ['/', 0] }],
      },
      leechers: {
        selector: 'td:nth-child(2)',
        filters: [{ name: 'split', args: ['/', 1] }],
      },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};
