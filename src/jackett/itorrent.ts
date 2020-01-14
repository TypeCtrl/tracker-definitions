import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'itorrent',
  name: 'iTorrent',
  description: 'iTorrent is a Public HUNGARIAN site',
  language: 'hu-HU',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://itorrent.ws/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [
      { id: 'app', cat: 'PC' },
      { id: 'book', cat: 'Books' },
      { id: 'game', cat: 'PC/Games' },
      { id: 'movies', cat: 'Movies' },
      { id: 'music', cat: 'Audio' },
      { id: 'heart', cat: 'XXX' },
      { id: 'tv', cat: 'TV' },
    ],
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
    selector: 'a[href^="/torrentfiles/"]',
    attribute: 'href',
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
        filters: [{ name: 'dateparse', args: '2006.01.02' }],
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
