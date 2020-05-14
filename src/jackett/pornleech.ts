import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'pornleech',
  name: 'PornLeech',
  description: 'PornLeech is a Public Tracker for 3X',
  language: 'en-EN',
  type: 'public',
  encoding: 'UTF-8',
  links: ['http://pornleech.io/'],
  legacylinks: ['https://pornleech.io/'],
  caps: {
    categorymappings: [
      { id: '64', cat: 'XXX', desc: 'Videos' },
      { id: '65', cat: 'XXX', desc: 'Videos HD' },
      { id: '66', cat: 'XXX', desc: 'Movies' },
      { id: '67', cat: 'XXX', desc: 'Pictures' },
      { id: '69', cat: 'XXX', desc: 'Hentai' },
      { id: '72', cat: 'XXX', desc: 'Comics' },
      { id: '71', cat: 'XXX', desc: '3D' },
      { id: '70', cat: 'XXX', desc: 'Pack' },
      { id: '77', cat: 'XXX', desc: '0day' },
      { id: '80', cat: 'XXX', desc: 'Games' },
    ],
    modes: { search: ['q'], 'tv-search': ['q'], 'movie-search': ['q'] },
  },
  settings: [
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: '3',
      options: { '2': 'title', '3': 'created', '4': 'size', '5': 'seeders' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: '2',
      options: { '1': 'asc', '2': 'desc' },
    },
  ],
  search: {
    inputs: {
      page: 'torrents',
      $raw: 'category={{ range .Categories }}{{.}};{{end}}',
      search: '{{ .Keywords }}',
      option: 0,
      active: 0,
      order: '{{ .Config.sort }}',
      by: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table.lista > tbody > tr:has(a[href^="download.php?id="])',
    },
    fields: {
      category: {
        selector: 'a[href^="index.php?page=torrents&category="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      title: { selector: 'td[valign="middle"] a' },
      details: { selector: 'td[valign="middle"] a', attribute: 'href' },
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      banner: {
        optional: true,
        selector: 'a[href^="torrentimg/"]',
        attribute: 'href',
      },
      size: {
        selector: 'td[valign="middle"] > p:nth-child(3)',
        filters: [{ name: 'regexp', args: 'Size:\\s* \\s*(.+?)$' }],
      },
      date: {
        selector: 'td[valign="middle"] > p:nth-child(4)',
        filters: [
          { name: 'regexp', args: 'AddDate:\\s* \\s*(.+?)$' },
          { name: 'dateparse', args: '15:04:05 02/01/2006' },
        ],
      },
      seeders: {
        selector: 'td[valign="middle"] > p:nth-child(5)',
        filters: [{ name: 'regexp', args: 'Seeds:\\s* \\s*(\\d+) ' }],
      },
      leechers: {
        selector: 'td[valign="middle"] > p:nth-child(5)',
        filters: [{ name: 'regexp', args: 'Leechers:\\s* \\s*(\\d+) ' }],
      },
      grabs: {
        selector: 'td[valign="middle"] > p:nth-child(5)',
        filters: [
          { name: 'regexp', args: 'Complete:\\s* \\s*(.+?)$' },
          { name: 'replace', args: ['---', '0'] },
        ],
      },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
    paths: [{ path: 'index.php' }],
  },
  source: 'jackett',
};
