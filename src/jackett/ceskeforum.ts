import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'ceskeforum',
  name: 'CeskeForum',
  description: 'CeskeForum is a CZECH Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'cs-CZ',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://t.ceskeforum.com/'],
  caps: {
    categorymappings: [
      { id: '401', cat: 'Movies', desc: 'Filmy (Movies)' },
      { id: '403', cat: 'TV', desc: 'TV pořady (TV Shows)' },
      {
        id: '404',
        cat: 'TV/Documentary',
        desc: 'TV dokumenty (Documentaries)',
      },
      {
        id: '408',
        cat: 'TV',
        desc: 'TV seriály - kompletní série (TV Series complete)',
      },
      {
        id: '402',
        cat: 'TV',
        desc: 'TV seriály - jednotlivé díly (TV Series episodes)',
      },
      { id: '407', cat: 'TV/Sport', desc: 'Sport' },
      { id: '411', cat: 'Books', desc: 'Knihy (Books)' },
      {
        id: '413',
        cat: 'Audio/Audiobook',
        desc: 'Knihy ve zvukové podobě (AudioBooks)',
      },
      { id: '406', cat: 'Audio', desc: 'Hudba (Music)' },
      { id: '410', cat: 'PC', desc: 'Software' },
      { id: '412', cat: 'PC/Games', desc: 'Software - Hry (Games)' },
      { id: '409', cat: 'Other', desc: 'Nezařazené (Misc)' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
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
      name: 'info_tpp',
      type: 'info',
      label: 'Results Per Page',
      default: 'For best results, change the <b>Torrents per page:</b> setting to <b>100</b> on your account profile.',
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
  ],
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      logout: '',
      securelogin: '',
      ssl: 'yes',
      trackerssl: 'yes',
    },
    error: [
      {
        selector: 'td.embedded:has(h2:contains("Přihlášení selhalo!"))',
        message: { selector: 'td.text' },
      },
    ],
    test: { path: 'index.php', selector: 'a[href="logout.php"]' },
  },
  search: {
    paths: [{ path: 'torrents.php' }],
    inputs: {
      $raw: '{{ range .Categories }}cat{{.}}=1&{{end}}',
      search: '{{ if .Query.IMDBID }}{{ .Query.IMDBID }}{{ else }}{{ .Keywords }}{{ end }}',
      incldead: 0,
      spstate: '{{ if .Config.freeleech }}2{{ else }}0{{ end }}',
      search_area: '{{ if .Query.IMDBID }}4{{ else }}0{{ end }}',
      search_mode: 0,
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table.torrents > tbody > tr:has(table.torrentname)',
    },
    fields: {
      category: {
        selector: 'a[href^="?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: {
        optional: true,
        selector: 'a[title][href^="details.php?id="]',
        attribute: 'title',
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      imdb: {
        selector: 'a[href*="imdb.com/title/tt"]',
        attribute: 'href',
      },
      date: {
        selector: 'td.rowfollow:nth-child(4):not(:has(span))',
        optional: true,
        filters: [
          { name: 'append', args: ' +02:00' },
          { name: 'dateparse', args: '2006-01-0215:04:05 -07:00' },
        ],
      },
      size: { selector: 'td.rowfollow:nth-child(5)' },
      seeders: { selector: 'td.rowfollow:nth-child(6)' },
      leechers: { selector: 'td.rowfollow:nth-child(7)' },
      grabs: { selector: 'td.rowfollow:nth-child(8)' },
      downloadvolumefactor: {
        case: {
          'img.pro_free': 0,
          'img.pro_free2up': 0,
          'img.pro_50pctdown': 0.5,
          'img.pro_50pctdown2up': 0.5,
          'img.pro_30pctdown': 0.3,
          '*': 1,
        },
      },
      uploadvolumefactor: {
        case: {
          'img.pro_50pctdown2up': 2,
          'img.pro_free2up': 2,
          'img.pro_2up': 2,
          '*': 1,
        },
      },
      description: {
        selector: 'td.rowfollow:nth-child(2)',
        remove: 'a, img',
      },
    },
  },
  source: 'jackett',
};
