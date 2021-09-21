import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'toros',
  name: 'TOROS',
  description: 'TOROS is a Public torrent index',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://www.toros.co/', 'https://toros.nocensor.work/'],
  legacylinks: ['https://toros.nocensor.space/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies', desc: 'Movies' },
      { id: '2', cat: 'Audio', desc: 'Music' },
      { id: '3', cat: 'TV', desc: 'Television' },
      { id: '4', cat: 'PC/Games', desc: 'Games' },
      { id: '5', cat: 'PC', desc: 'Software' },
      { id: '6', cat: 'TV/Anime', desc: 'Anime' },
      { id: '7', cat: 'XXX', desc: 'Adult' },
      { id: '8', cat: 'Books', desc: 'Ebooks' },
      { id: '9', cat: 'TV/Anime', desc: 'Animation' },
      { id: '10', cat: 'Other', desc: 'Other' },
      { id: '0', cat: 'Other', desc: 'TBC' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
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
  download: {
    selectors: [{ selector: 'a[href^="magnet:?xt="]', attribute: 'href' }],
  },
  search: {
    paths: [
      {
        path: '{{ if .Keywords }}all/torrents/{{ .Keywords }}.html?v=&smi=&sma=&i=100&sort={{ .Config.sort }}&o={{ .Config.type }}{{ else }}top100.html{{ end }}',
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
        selector: 'td:nth-child(2):not(:contains("ago")):not(:contains("day"))',
        optional: true,
        filters: [
          { name: 'append', args: ' +01:00' },
          { name: 'dateparse', args: '2 Jan -07:00' },
        ],
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
