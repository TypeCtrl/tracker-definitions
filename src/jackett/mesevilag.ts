import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'mesevilag',
  name: 'MeseVilág',
  description: 'MeseVilág (Fairytale World) is a Hungarian Private site for fairy tales, family movies and comedies',
  language: 'hu-HU',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://mese-vilag.net/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'TV/Anime', desc: 'Anime/Cam' },
      { id: '2', cat: 'TV/Anime', desc: 'Anime/Eng' },
      { id: '3', cat: 'TV/Anime', desc: 'Anime/Hun' },
      { id: '13', cat: 'TV/Anime', desc: 'Anime/Sorozat(Series)' },
      { id: '4', cat: 'Movies', desc: 'Családi/Cam(Family)' },
      { id: '5', cat: 'Movies', desc: 'Családi/Eng(Family)' },
      { id: '6', cat: 'Movies', desc: 'Családi/Hun(Family)' },
      { id: '14', cat: 'TV', desc: 'Családi/Sorozat(Family Series)' },
      {
        id: '8',
        cat: 'Audio/Audiobook',
        desc: 'Hangoskönyv(Audiobooks)',
      },
      { id: '9', cat: 'PC/Games', desc: 'Játék/ISO(Games)' },
      { id: '11', cat: 'Console', desc: 'Játék/Konzol(Console)' },
      { id: '10', cat: 'PC/Games', desc: 'Játék/RIP(Games RIP)' },
      { id: '7', cat: 'Books', desc: 'Könyv(Books)' },
      { id: '12', cat: 'Audio', desc: 'Zene/Hun(Music)' },
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
    path: 'login.php',
    method: 'form',
    form: 'form#loginForm',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    test: { path: 'index.php', selector: 'a[href="logout.php"]' },
  },
  search: {
    paths: [{ path: 'letoltes.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      incldead: '{{ if .Config.freeleech }}3{{ else }}1{{ end }}',
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    keywordsfilters: [{ name: 're_replace', args: ['[^a-zA-Z0-9]+', '%'] }],
    rows: {
      selector: 'table[cellpadding="3"] > tbody > tr:has(a[onmouseover])',
    },
    fields: {
      category: {
        selector: 'a[href^="letoltes.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'title',
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
        filters: [{ name: 'replace', args: ['details.php?', 'download.php?'] }],
      },
      imdb: {
        selector: 'a[href*="imdb.com/title/tt"]',
        attribute: 'href',
      },
      poster: {
        selector: 'a[onmouseover]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'src=(.+?) ' }],
      },
      date: {
        selector: 'td:nth-last-child(6)',
        filters: [
          {
            name: 'regexp',
            args: '(\\d{4}-\\d{2}-\\d{2}\\s\\d{2}:\\d{2}:\\d{2})',
          },
          { name: 'replace', args: [' ', ' '] },
          { name: 'append', args: ' +01:00' },
          { name: 'dateparse', args: '2006-01-02 15:04:05 -07:00' },
        ],
      },
      seeders: { selector: 'td:nth-last-child(4)' },
      leechers: { selector: 'td:nth-last-child(3)' },
      grabs: { selector: 'td:nth-last-child(2)' },
      downloadvolumefactor: {
        selector: 'td:nth-last-child(5) > font',
        case: { 'font:contains("x0")': 0, '*': 1 },
      },
      uploadvolumefactor: {
        selector: 'td:nth-last-child(5) > font',
        case: {
          'font:contains("x2")': 2,
          'font:contains("x3")': 3,
          'font:contains("x4")': 4,
          '*': 1,
        },
      },
      size: { selector: 'td:nth-last-child(5)', remove: 'font' },
      minimumratio: { text: 0.7 },
      minimumseedtime: { text: 432000 },
    },
  },
  source: 'jackett',
};
