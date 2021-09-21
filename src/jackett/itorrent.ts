import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'itorrent',
  name: 'iTorrent',
  description: 'iTorrent is a Public HUNGARIAN site',
  language: 'hu-HU',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['https://itorrent.ws/'],
  legacylinks: ['https://itorrent.unblockit.pro/', 'https://itorrent.unblockit.one/', 'https://itorrent.unblockit.me/'],
  caps: {
    categorymappings: [
      { id: 'app', cat: 'PC', desc: 'Apps' },
      { id: 'book', cat: 'Books', desc: 'Books' },
      { id: 'game', cat: 'PC/Games', desc: 'Games' },
      { id: 'movies', cat: 'Movies', desc: 'Movies' },
      { id: 'music', cat: 'Audio', desc: 'Music' },
      { id: 'heart', cat: 'XXX', desc: 'XXX' },
      { id: 'tv', cat: 'TV', desc: 'TV' },
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
      default: 'date_added',
      options: {
        date_added: 'created',
        seeders: 'seeders',
        size: 'size',
        title: 'title',
      },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'DESC',
      options: { DESC: 'desc', ASC: 'asc' },
    },
  ],
  download: {
    selectors: [{ selector: 'a[href^="/torrentfiles/"]', attribute: 'href' }],
  },
  search: {
    paths: [
      {
        path: 'torrentek/title/{{ .Keywords }}/order/{{ .Config.sort }}/by/{{ .Config.type }}/',
      },
    ],
    rows: { selector: 'tr.gradeX', filters: [{ name: 'andmatch' }] },
    fields: {
      category: {
        selector: 'td:nth-child(1) i',
        attribute: 'class',
        filters: [{ name: 'replace', args: ['zqf zqf-', ''] }],
      },
      title: { selector: 'td:nth-child(2) a' },
      details: { selector: 'td:nth-child(2) a', attribute: 'href' },
      download: { selector: 'td:nth-child(2) a', attribute: 'href' },
      date: {
        selector: 'td:nth-child(4):not(:has(span))',
        optional: true,
        filters: [
          { name: 'append', args: ' +01:00' },
          { name: 'dateparse', args: '2006.01.02 -07:00' },
        ],
      },
      size: { selector: 'td:nth-child(5)' },
      grabs: {
        selector: 'td:nth-child(6)',
        filters: [{ name: 'replace', args: [' ', ''] }],
      },
      seeders: { selector: 'td:nth-child(7)' },
      leechers: { selector: 'td:nth-child(8)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
