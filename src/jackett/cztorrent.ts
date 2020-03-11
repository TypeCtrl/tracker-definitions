import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'cztorrent',
  name: 'CzTorrent',
  description: 'CzTorrent is a Czech Semi-Private site for TV / MOVIES / GENERAL',
  language: 'cs-CZ',
  type: 'semi-private',
  encoding: 'UTF-8',
  links: ['https://tracker.cztorrent.net/'],
  caps: {
    categorymappings: [
      { id: '22', cat: 'PC', desc: 'Aplikace' },
      { id: '1', cat: 'Movies', desc: 'Filmy' },
      { id: '36', cat: 'Movies/3D', desc: 'Filmy - 3D' },
      { id: '35', cat: 'Movies/Other', desc: 'Filmy - anime' },
      { id: '37', cat: 'Movies/BluRay', desc: 'Filmy - Blu-ray' },
      { id: '33', cat: 'TV/Documentary', desc: 'Filmy - dokument' },
      { id: '11', cat: 'Movies/DVD', desc: 'Filmy - DVD' },
      { id: '30', cat: 'Movies/DVD', desc: 'Filmy - DVD full' },
      { id: '5', cat: 'Movies', desc: 'Filmy - kreslené' },
      { id: '31', cat: 'Movies/HD', desc: 'HD' },
      { id: '38', cat: 'Movies/HD', desc: 'HD-LQ' },
      { id: '3', cat: 'PC/Games', desc: 'Hry' },
      { id: '2', cat: 'Audio', desc: 'Hudba' },
      { id: '34', cat: 'Audio/Video', desc: 'Hudba DVD/HD' },
      { id: '6', cat: 'Books', desc: 'Knihy' },
      { id: '13', cat: 'Console', desc: 'Konzole' },
      { id: '32', cat: 'Audio', desc: 'Mluvené slovo' },
      { id: '16', cat: 'PC/Phone-Other', desc: 'Mobil, PDA' },
      { id: '4', cat: 'Other', desc: 'Ostatní' },
      { id: '25', cat: 'TV', desc: 'Seriály' },
      { id: '29', cat: 'Audio', desc: 'Soundtrack' },
      { id: '19', cat: 'Audio/Video', desc: 'Videoklipy' },
      { id: '24', cat: 'XXX', desc: 'xXx' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: '7',
      options: { '2': 'seeders', '5': 'title', '6': 'size', '7': 'created' },
    },
  ],
  login: {
    path: 'login-page',
    method: 'form',
    form: 'form[action="/login?url=%2F"]',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      persistent_login: 1,
    },
    error: [{ selector: 'div.error' }],
    test: { path: 'torrents' },
  },
  search: {
    paths: [{ path: 'torrents' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      s: '{{ .Keywords }}',
      t: 1,
      o: '{{ .Config.sort }}',
    },
    rows: { selector: 'tr.torr_hover' },
    keywordsfilters: [{ name: 're_replace', args: ['S[0-9]{2}([^E]|$)', ''] }],
    fields: {
      title: {
        selector: 'td.detaily a',
        filters: [
          { name: 're_replace', args: ['.*? / ', ''] },
          { name: 'diacritics', args: 'replace' },
          { name: 'replace', args: ['1080i', '1080p'] },
          { name: 'replace', args: ['720i', '720p'] },
          { name: 'replace', args: ['pLQ', 'p'] },
          { name: 'replace', args: ['pHD', 'p'] },
          { name: 'replace', args: ['serie', ''] },
          { name: 'replace', args: ['Serie', ''] },
          { name: 're_replace', args: ['(\\d{2})\\.', 'S$1'] },
          { name: 're_replace', args: ['(\\d{1})\\.', 'S0$1'] },
        ],
      },
      category: {
        selector: 'td.categorie',
        case: {
          ':contains("Filmy")': 1,
          ':contains("Seriály")': 25,
          ':contains("Filmy - dokument")': 33,
          ':contains("Aplikace")': 22,
          ':contains("Filmy - 3D")': 36,
          ':contains("Filmy - anime")': 35,
          ':contains("Filmy - Blu-ray")': 37,
          ':contains("Filmy - DVD")': 11,
          ':contains("Filmy - DVD full")': 30,
          ':contains("Filmy - kreslené")': 5,
          ':contains("HD")': 31,
          ':contains("HD-LQ")': 38,
          ':contains("Hry")': 3,
          ':contains("Hudba")': 2,
          ':contains("Hudba DVD/HD")': 34,
          ':contains("Knihy")': 6,
          ':contains("Konzole")': 13,
          ':contains("Mluvené slovo")': 32,
          ':contains("Mobil, PDA")': 16,
          ':contains("Ostatní")': 4,
          ':contains("Soundtrack")': 29,
          ':contains("Videoklipy")': 19,
          ':contains("xXx")': 24,
        },
      },
      details: { selector: 'td.detaily a', attribute: 'href' },
      download: { selector: 'td.download a', attribute: 'href' },
      size: {
        selector: 'td.detaily',
        filters: [{ name: 'split', args: ['|', 1] }],
      },
      date: {
        selector: 'td.detaily',
        filters: [
          { name: 'split', args: ['|', 2] },
          { name: 'append', args: ' +02:00' },
          { name: 'dateparse', args: '2.1.2006 15:04  -07:00' },
        ],
      },
      seeders: { selector: 'td:nth-child(7) span' },
      leechers: { selector: 'td:nth-child(8) span' },
      downloadvolumefactor: { text: 1 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
