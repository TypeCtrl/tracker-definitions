import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'seedpeer',
  name: 'Seedpeer',
  description: 'Seedpeer is a Public torrent index',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://seedpeer.me/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [{ id: 'other', cat: 'Other' }],
  },
  settings: [],
  download: { selector: 'a[href*="/torrent/"]' },
  search: {
    paths: [{ path: '{{if .Keywords}}search/{{ .Keywords}}{{else}}today{{end}}' }],
    rows: {
      selector: 'table.table > tbody > tr:has(a[href^="/details/"])',
    },
    fields: {
      category: { text: 'other' },
      title: { selector: 'td:nth-child(1) a' },
      details: { selector: 'td:nth-child(1) a', attribute: 'href' },
      download: { selector: 'td:nth-child(1) a', attribute: 'href' },
      date: {
        selector: 'td:nth-child(2)',
        filters: [{ name: 'timeago' }],
      },
      size: { selector: 'td:nth-child(3)' },
      seeders: { selector: 'td:nth-child(4)' },
      leechers: { selector: 'td:nth-child(5)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
