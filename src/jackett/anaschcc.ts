import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'anaschcc',
  name: 'anasch.cc',
  description: 'anasch.cc is a Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://anasch.cc/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies', desc: 'Movies' },
      { id: '2', cat: 'TV', desc: 'TV' },
      { id: '3', cat: 'TV', desc: 'Animation' },
      { id: '5', cat: 'Audio', desc: 'Music' },
      { id: '12', cat: 'XXX', desc: 'Porn' },
      { id: '29', cat: 'TV/Sport', desc: 'Sports' },
      { id: '37', cat: 'PC', desc: 'Software' },
      { id: '38', cat: 'Console', desc: 'Games' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
    },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'freeleech',
      type: 'checkbox',
      label: 'Search freeleech only',
      default: false,
    },
    {
      name: 'info_tpp',
      type: 'info',
      label: 'Results Per Page',
      default: 'For best results, change the <b>Torrents per page:</b> setting to <b>100</b> on your account profile.',
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 3,
      options: { '2': 'title', '3': 'created', '4': 'size', '5': 'seeders' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 2,
      options: { '1': 'asc', '2': 'desc' },
    },
  ],
  login: {
    path: 'index.php?page=login',
    method: 'form',
    form: 'form[action^="index.php?page=login"]',
    inputs: {
      uid: '{{ .Config.username }}',
      pwd: '{{ .Config.password }}',
    },
    error: [
      {
        selector: 'div[data-validate^="Valid"]',
        message: {
          selector: 'div[data-validate^="Valid"]',
          attribute: 'data-validate',
        },
      },
    ],
    test: { path: 'index.php', selector: 'a[href="logout.php"]' },
  },
  search: {
    paths: [{ path: 'index.php' }],
    inputs: {
      page: 'torrents',
      active: 0,
      search: '{{ .Keywords }}',
      $raw: '{{ range .Categories }}category[]={{.}}&{{end}}',
      'discount[]': '{{ if .Config.freeleech }}1{{ else }}{{ end }}',
      order: '{{ .Config.sort }}',
      by: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table.lista tbody tr:has(a[href^="index.php?page=torrent-details"])',
    },
    fields: {
      category: {
        selector: 'td a[href^="index.php?page=torrents&category[]="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category[]' }],
      },
      title: { selector: 'td a[href^="index.php?page=torrent-details"]' },
      details: {
        selector: 'td a[href^="index.php?page=torrent-details"]',
        attribute: 'href',
      },
      download: {
        selector: 'td a[href^="download.php"]',
        attribute: 'href',
      },
      imdb: {
        selector: 'a[href^="index.php?page=torrent-details"]',
        attribute: 'onmouseover',
        filters: [
          {
            name: 'replace',
            args: ["javascript:ShowImage('/images/imdb/", 'tt'],
          },
          { name: 'replace', args: [".jpg')", ''] },
          { name: 'replace', args: ['tt0000000', ''] },
        ],
      },
      poster: {
        selector: 'td a[href^="index.php?page=torrent-details"]',
        attribute: 'onmouseover',
        filters: [
          { name: 'replace', args: ["javascript:ShowImage('", ''] },
          { name: 'replace', args: ["')", ''] },
          { name: 'replace', args: ['/images/imdb/0000000.jpg', ''] },
        ],
      },
      size: { selector: 'td:nth-child(5)' },
      date: {
        selector: 'td:nth-child(6)',
        filters: [
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: '02/01/06 15:04 -07:00' },
        ],
      },
      seeders: { selector: 'td:nth-child(7)' },
      leechers: { selector: 'td:nth-child(8)' },
      grabs: { selector: 'td:nth-child(9)' },
      downloadvolumefactor: {
        case: { 'img[src*="freeleech.png"]': 0, '*': 1 },
      },
      uploadvolumefactor: { case: { 'img[src*="x2u.png"]': 2, '*': 1 } },
      minimumratio: { text: 3 },
      minimumseedtime: { text: 432000 },
    },
  },
  source: 'jackett',
};
