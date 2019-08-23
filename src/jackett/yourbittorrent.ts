import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'yourbittorrent',
  name: 'YourBittorrent',
  description: 'YourBittorrent is a Public torrent index',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://yourbittorrent.host/'],
  legacylinks: ['https://yourbittorrent.com/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [{ id: 'Other', cat: 'Other' }],
  },
  settings: [],
  download: { selector: 'a[href^="/down/"]' },
  search: {
    paths: [{ path: '/' }],
    inputs: { q: '{{ .Keywords}}' },
    keywordsfilters: [{ name: 're_replace', args: ['[\\s]+', '-'] }],
    rows: {
      selector: 'table.table > tbody > tr:has(a[href^="/torrent/"])',
    },
    fields: {
      category: { text: 'Other' },
      title: { selector: 'td.n div a, td.v div a' },
      details: { selector: 'td.n div a, td.v div a', attribute: 'href' },
      download: { selector: 'td.n div a, td.v div a', attribute: 'href' },
      size: { selector: 'td.s' },
      date: {
        selector: 'td.t:contains("/")',
        optional: true,
        filters: [{ name: 'dateparse', args: '02/01/06' }],
      },
      seeders: { selector: 'td.u' },
      leechers: { selector: 'td.d' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};
