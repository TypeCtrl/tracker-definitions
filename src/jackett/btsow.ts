import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'btsow',
  name: 'BTSOW',
  description: 'BTSOW is a Public torrent indexer',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://btsow.club/'],
  legacylinks: ['https://btos.pw/', 'https://btio.pw/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [{ id: 'other', cat: 'Other' }],
  },
  settings: [],
  download: { selector: 'a#magnetOpen', attribute: 'href' },
  search: {
    paths: [{ path: 'search/{{ if .Keywords }}{{ .Keywords }}{{else}}2019{{end}}' }],
    rows: { selector: 'div.row:has(a[href*="/detail/hash/"])' },
    fields: {
      category: { text: 'other' },
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