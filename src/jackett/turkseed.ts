import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'turkseed',
  name: 'TurkSeed',
  description: 'TurkSeed (Aturk) is a TURKISH Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'tr-TR',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://turkseed.com/'],
  caps: {
    categorymappings: [
      { id: '46', cat: 'Movies/3D', desc: '3D' },
      { id: '47', cat: 'Movies/UHD', desc: '4K' },
      { id: '61', cat: 'PC/Phone-Android', desc: 'Android' },
      { id: '48', cat: 'TV/Anime', desc: 'Animasyon' },
      { id: '59', cat: 'PC', desc: 'İşletim Sistemi' },
      { id: '40', cat: 'TV/Documentary', desc: 'Belgesel' },
      { id: '49', cat: 'Movies/BluRay', desc: 'Bluray' },
      { id: '50', cat: 'Movies', desc: 'Boxset' },
      { id: '4', cat: 'Other', desc: 'Diğer' },
      { id: '42', cat: 'Movies', desc: 'Dini' },
      { id: '51', cat: 'Movies/DVD', desc: 'DVD' },
      { id: '41', cat: 'Books/Ebook', desc: 'E-Kitap' },
      { id: '64', cat: 'Books', desc: 'Eğitim' },
      { id: '55', cat: 'Audio/Lossless', desc: 'FLAC' },
      { id: '52', cat: 'Movies/HD', desc: 'HD' },
      { id: '26', cat: 'PC/Games', desc: 'Oyunlar' },
      { id: '30', cat: 'PC', desc: 'Programlar' },
      { id: '53', cat: 'Movies/SD', desc: 'SD' },
      { id: '54', cat: 'Movies', desc: 'Türk Filmi' },
      { id: '58', cat: 'Audio/Video', desc: 'Video Klip' },
      { id: '63', cat: 'Movies', desc: 'Vip Film' },
      { id: '62', cat: 'Audio', desc: 'Vip Ses Dosyaları' },
      { id: '43', cat: 'TV', desc: 'Yabancı Dizi' },
      { id: '57', cat: 'Movies', desc: 'Yabancı Müzik' },
      { id: '45', cat: 'TV', desc: 'Yarışma - Show' },
      { id: '44', cat: 'TV', desc: 'Yerli Dizi' },
      { id: '56', cat: 'Audio', desc: 'Yerli Müzik' },
    ],
    modes: {
      search: ['q', 'imdbid'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
      'music-search': ['q'],
    },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'added',
      options: {
        added: 'created',
        seeders: 'seeders',
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
  login: {
    path: 'login.php',
    method: 'form',
    form: 'form[action="takelogin.php"]',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      logout: '',
      submit: 'GİRİŞ',
    },
    error: [{ selector: 'table:contains("HATA")' }],
    test: {
      path: 'index.php',
      selector: 'a[href*="/logout.php?logouthash="]',
    },
  },
  download: {
    before: {
      path: 'takethanks.php',
      method: 'post',
      inputs: { torrentid: '{{ .DownloadUri.Query.id }}' },
    },
    selector: 'a[href*="/download.php?id="]',
    attribute: 'href',
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      do: 'search',
      keywords: '{{ if .Query.IMDBID }}{{ .Query.IMDBID }}{{else}}{{ .Keywords }}{{end}}',
      search_type: '{{ if .Query.IMDBID }}t_genre{{else}}t_name{{end}}',
      category: '{{ if .Categories }}{{ range .Categories }}{{.}};{{end}}{{else}}0{{end}}',
      include_dead_torrents: 'yes',
      sort: '{{ .Config.sort }}',
      order: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table.sortable tr:has(a[href*="/download.php?id="])',
    },
    fields: {
      category: {
        selector: 'a[href*="/browse.php?category="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      title: { selector: 'div.tooltip-content > div', optional: true },
      details: {
        selector: 'a[href*="/details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href*="/details.php?id="]',
        attribute: 'href',
      },
      banner: {
        selector: 'img[src*="/torrents/images/"]',
        attribute: 'src',
      },
      date: {
        selector: 'td:nth-child(2)',
        filters: [
          { name: 'regexp', args: '(\\d{2}-\\d{2}-\\d{4} \\d{2}:\\d{2})' },
          { name: 'dateparse', args: '02-01-2006 15:04' },
        ],
      },
      size: { selector: 'td:nth-last-child(5)' },
      grabs: { selector: 'td:nth-last-child(4)' },
      seeders: { selector: 'td:nth-last-child(3)' },
      leechers: { selector: 'td:nth-last-child(2)' },
      downloadvolumefactor: {
        case: {
          'img[src$="_flags/freedownload.gif"]': 0,
          'img[src$="_flags/silverdownload.gif"]': 0.5,
          '*': 1,
        },
      },
      uploadvolumefactor: {
        case: { 'img[src$="_flags/x2.gif"]': 2, '*': 1 },
      },
    },
  },
  source: 'jackett',
};
