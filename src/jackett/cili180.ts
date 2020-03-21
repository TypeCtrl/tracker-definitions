import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'cili180',
  name: 'Cili180',
  description: 'Cili180 is a Public BitTorrent DHT search engine.',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://www.cilijj.xyz/'],
  legacylinks: ['http://www.cili180.com/', 'http://www.cilijj.xyz/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [{ id: '1', cat: 'Other' }],
  },
  settings: [],
  search: {
    paths: [{ path: 'search/', method: 'post', followredirect: true }],
    inputs: {
      keyword: '{{ if .Keywords }}{{ .Keywords }}{{else}}2019{{end}}',
    },
    rows: {
      selector: 'div.list-area > dl.item',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: { text: 1 },
      title: { selector: 'dt a' },
      details: { selector: 'dt a', attribute: 'href' },
      download: {
        selector: 'a[href^="magnet:?xt="]',
        attribute: 'href',
      },
      date: {
        selector: 'dd.attr span:nth-child(1) b',
        filters: [{ name: 'dateparse', args: '2006-01-02' }],
      },
      size: { selector: 'dd.attr span:nth-child(2) b' },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};