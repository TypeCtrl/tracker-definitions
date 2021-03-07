import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'theleachzone',
  name: 'TheLeachZone',
  description: 'The Leach Zone is a Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://tlz.digital/'],
  caps: {
    categorymappings: [
      { id: '21', cat: 'PC', desc: 'Appz' },
      { id: '22', cat: 'PC/Games', desc: 'Games' },
      { id: '23', cat: 'Other', desc: 'Misc.' },
      { id: '24', cat: 'Movies/SD', desc: 'Movies SD' },
      { id: '11', cat: 'Movies/HD', desc: 'Movies HD' },
      { id: '3', cat: 'Movies', desc: 'Movies Packs' },
      { id: '20', cat: 'Audio/Lossless', desc: 'Music FLAC' },
      { id: '4', cat: 'Audio/Lossless', desc: 'Music FLAC' },
      { id: '17', cat: 'Audio', desc: 'Music Packs' },
      { id: '18', cat: 'TV/HD', desc: 'TV HD' },
      { id: '16', cat: 'TV', desc: 'TV Packs' },
      { id: '19', cat: 'TV/SD', desc: 'TV SD' },
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
      default: 4,
      options: { '1': 'title', '4': 'created', '5': 'size', '7': 'seeders' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'desc',
      options: { desc: 'desc', asc: 'asc' },
    },
    {
      name: 'info_tpp',
      type: 'info',
      label: 'Results Per Page',
      default: 'For best results, change the <b>Torrents per page:</b> setting to <b>100</b> on your account profile.',
    },
  ],
  login: {
    path: 'login.php',
    method: 'form',
    form: 'form[action="takelogin.php"]',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      use_ssl: 1,
      perm_ssl: '',
      returnto: '/',
    },
    error: [
      {
        selector: 'table.main:contains("Login failed!")',
        message: { selector: 'table tr td.colhead2' },
      },
    ],
    test: { path: '/', selector: 'a[href*="logout.php?hash_please="]' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      searchin: 'title',
      incldead: 1,
      only_free: '{{ if .Config.freeleech }}1{{ else }}{{ end }}',
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    keywordsfilters: [{ name: 're_replace', args: ['(\\w+)', ' +$1'] }],
    rows: {
      selector: 'table.table-bordered tr:has(a[href^="download.php?torrent="])',
    },
    fields: {
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: "Tip\\('<b>(.+?)</b>" }],
      },
      download: {
        selector: 'a[href^="download.php?torrent="]',
        attribute: 'href',
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      files: { selector: 'td:nth-child(5)' },
      date: {
        selector: 'td:nth-child(7):not(:contains("day"))',
        optional: true,
        filters: [
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: 'Jan 2 2006 03:04 PM -07:00' },
        ],
      },
      size: { selector: 'td:nth-child(8)' },
      grabs: {
        selector: 'td:nth-child(9)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      seeders: { selector: 'td:nth-child(10)' },
      leechers: { selector: 'td:nth-child(11)' },
      downloadvolumefactor: {
        case: {
          'a.info:contains("[FREE]")': 0,
          'a.info:contains("[SILVER]")': 0.5,
          '*': 1,
        },
      },
      uploadvolumefactor: { text: 1 },
      minimumratio: { text: 1 },
      minimumseedtime: { text: 172800 },
    },
  },
  source: 'jackett',
};
