import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'netcosmo',
  name: 'NetCosmo',
  description: 'NetCosmo is an ITALIAN Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'it-IT',
  type: 'private',
  encoding: 'UTF-8',
  links: ['http://netcosmo.it/'],
  caps: {
    categorymappings: [
      { id: '14', cat: 'Movies', desc: 'Screener' },
      { id: '39', cat: 'Movies/WEB-DL', desc: 'BDRip - Download WEB' },
      { id: '15', cat: 'Movies/HD', desc: 'Rip H264' },
      { id: '16', cat: 'Movies/HD', desc: 'Rip H265' },
      { id: '24', cat: 'Movies/UHD', desc: 'Rip 4K' },
      { id: '40', cat: 'Movies/UHD', desc: '4K - 3840X2160' },
      { id: '21', cat: 'Movies/HD', desc: 'Full HD' },
      { id: '31', cat: 'TV/HD', desc: 'Serie TV 720P' },
      { id: '25', cat: 'Audio', desc: 'Musica' },
      { id: '26', cat: 'PC/Games', desc: 'PC-Game' },
      { id: '27', cat: 'PC', desc: 'Software' },
      { id: '28', cat: 'Books', desc: 'Letture' },
      { id: '32', cat: 'Other', desc: 'Navigazione Saghe' },
      { id: '35', cat: 'Other', desc: 'Happy Hour' },
      { id: '37', cat: 'Other', desc: 'Tutte le saghe' },
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
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'freeleech',
      type: 'checkbox',
      label: 'Search freeleech only',
      default: false,
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
    {
      name: 'info',
      type: 'info',
      label: 'Results Per Page',
      default: 'For best results, change the <b>Torrents per page:</b> setting to <b>100</b> on your account profile.',
    },
  ],
  login: {
    path: 'index.php?page=login',
    method: 'post',
    inputs: {
      uid: '{{ .Config.username }}',
      pwd: '{{ .Config.password }}',
    },
    error: [
      {
        selector: 'body[onLoad^="makeAlert(\'"]',
        message: {
          selector: 'body[onLoad^="makeAlert(\'"]',
          attribute: 'onLoad',
          filters: [
            { name: 'replace', args: ["makeAlert('Error' , '", ''] },
            { name: 'replace', args: ["');", ''] },
          ],
        },
      },
    ],
    test: { path: 'index.php', selector: 'a[href="logout.php"]' },
  },
  search: {
    paths: [{ path: 'index.php' }],
    keywordsfilters: [
      { name: 're_replace', args: ['(?i)S0?(\\d{1,2})', ' $1 '] },
      { name: 're_replace', args: ['(?i)E(\\d{2,3})', ' $1 '] },
      { name: 'replace', args: ['-', ''] },
    ],
    inputs: {
      search: '{{ .Keywords }}',
      page: 'torrents',
      category: '{{ range .Categories }}{{.}};{{end}}',
      active: 0,
      options: '{{ if .Config.freeleech }}5{{ else }}0{{ end }}',
      order: '{{ .Config.sort }}',
      by: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table > tbody > tr > td > table.lista > tbody > tr:has(a[href^="index.php?page=torrent-details&id="])',
    },
    fields: {
      category: {
        selector: 'a[href^="index.php?page=torrents&category="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      title: {
        selector: 'a[onmouseover][href^="index.php?page=torrent-details&id="]',
        filters: [
          { name: 're_replace', args: ['(\\d{2})x(\\d{2})', 'S$1E$2'] },
          { name: 're_replace', args: ['(\\d{1})x(\\d{2})', 'S0$1E$2'] },
        ],
      },
      poster: {
        selector: 'a[onmouseover][href^="index.php?page=torrent-details&id="]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'src=(.*?) ' }],
      },
      details: {
        selector: 'a[onmouseover][href^="index.php?page=torrent-details&id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-last-child(3)' },
      date: {
        selector: 'td:nth-last-child(7)',
        filters: [
          { name: 'append', args: ' +01:00' },
          { name: 'dateparse', args: '02/01/2006 -07:00' },
        ],
      },
      grabs: {
        selector: 'td:nth-last-child(4)',
        filters: [{ name: 'replace', args: ['---', '0'] }],
      },
      seeders: { selector: 'td:nth-last-child(6)' },
      leechers: { selector: 'td:nth-last-child(5)' },
      downloadvolumefactor: {
        case: {
          'img[alt="Gold 100% Free"]': 0,
          'img[alt="Silver 50% Free"]': 0.5,
          'img[alt="Bronze 25% Free"]': 0.75,
          '*': 1,
        },
      },
      uploadvolumefactor: {
        case: {
          'img[alt="2x Upload Multiplier"]': 2,
          'img[alt="3x Upload Multiplier"]': 3,
          'img[alt="4x Upload Multiplier"]': 4,
          'img[alt="5x Upload Multiplier"]': 5,
          'img[alt="6x Upload Multiplier"]': 6,
          'img[alt="7x Upload Multiplier"]': 7,
          'img[alt="8x Upload Multiplier"]': 8,
          'img[alt="9x Upload Multiplier"]': 9,
          'img[alt="10x Upload Multiplier"]': 10,
          '*': 1,
        },
      },
      minimumratio: { text: 1 },
      minimumseedtime: { text: 172800 },
    },
  },
  source: 'jackett',
};
