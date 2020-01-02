import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'toros',
  name: 'TOROS',
  description: 'TOROS is a Public torrent index',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://www.toros.co/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [
      { id: '1', cat: 'Movies' },
      { id: '2', cat: 'Audio' },
      { id: '3', cat: 'TV' },
      { id: '4', cat: 'PC/Games' },
      { id: '5', cat: 'PC' },
      { id: '6', cat: 'TV/Anime' },
      { id: '7', cat: 'XXX' },
      { id: '8', cat: 'Books' },
      { id: '10', cat: 'Other' },
    ],
  },
  settings: [
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'added',
      options: {
        added: 'created',
        seeds: 'seeders',
        size: 'size',
        name: 'title',
      },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'desc',
      options: { desc: 'desc', asc: 'asc' },
    },
  ],
  download: { selector: 'a[href^="magnet:?xt="]' },
  search: {
    paths: [
      {
        path:
          '{{ if .Keywords }}all/torrents/{{ .Keywords }}.html?v=&smi=&sma=&i=100&sort={{ .Config.sort }}&o={{ .Config.type }}{{ else }}top100.html{{ end }}',
      },
    ],
    keywordsfilters: [{ name: 're_replace', args: ['[\\s]+', '-'] }, { name: 'tolower' }],
    rows: {
      selector: 'table.table-responsive tr:has(a[href^="/torrent/"])',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: {
        selector: 'td:nth-child(1)',
        attribute: 'class',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      title: { selector: 'a[href^="/torrent/"]' },
      details: { selector: 'a[href^="/torrent/"]', attribute: 'href' },
      download: { selector: 'a[href^="/torrent/"]', attribute: 'href' },
      date: {
        selector:
          'td:nth-child(2):not(:contains("ago")):not(:contains("Yesterday")):not(:contains("Today"))',
        optional: true,
        filters: [{ name: 'dateparse', args: '2 Jan' }],
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
