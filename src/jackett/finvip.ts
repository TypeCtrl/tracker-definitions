import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'finvip',
  name: 'FinVip',
  description: 'FinVip is a FINNISH Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'fi-FI',
  type: 'private',
  encoding: 'UTF-8',
  testlinktorrent: false,
  links: ['https://finvip.org/'],
  caps: {
    categorymappings: [
      { id: '5', cat: 'TV/Anime', desc: 'Anime' },
      { id: '25', cat: 'TV/Documentary', desc: 'Dokumentit (docs)' },
      { id: '6', cat: 'Books/Ebook', desc: 'eBooks' },
      { id: '26', cat: 'TV', desc: 'Kannet/Tekstit (subs)' },
      { id: '20', cat: 'TV/SD', desc: 'Lasten DVD (kids)' },
      { id: '33', cat: 'TV/SD', desc: 'Lasten XviD (kids)' },
      { id: '11', cat: 'Movies/DVD', desc: 'Leffat DVD (movies)' },
      { id: '13', cat: 'Movies/SD', desc: 'Leffat XviD  (movies)' },
      { id: '21', cat: 'Movies/HD', desc: 'Leffat HD  (movies)' },
      { id: '32', cat: 'Movies/DVD', desc: 'Custom DVD  (movies)' },
      { id: '42', cat: 'Movies', desc: 'FVC' },
      { id: '15', cat: 'Audio', desc: 'Musiikki (music)' },
      { id: '12', cat: 'Audio/Video', desc: 'Musavideot (clips)' },
      { id: '7', cat: 'PC/0day', desc: 'Ohjelmat Windows (apps)' },
      { id: '8', cat: 'PC', desc: 'Ohjelmat Linux (apps)' },
      { id: '9', cat: 'PC/Mac', desc: 'Ohjelmat Mac (apps)' },
      { id: '17', cat: 'PC/Games', desc: 'Pelit PC (games)' },
      { id: '18', cat: 'Console/PSP', desc: 'Pelit PlayStation (games)' },
      { id: '19', cat: 'Console/Xbox', desc: 'Pelit Xbox (games)' },
      { id: '35', cat: 'Console/Wii', desc: 'Pelit Wii (games)' },
      { id: '22', cat: 'XXX', desc: 'Pr0n DVD (xxx)' },
      { id: '23', cat: 'XXX', desc: 'Pr0n XviD (xxx)' },
      { id: '36', cat: 'XXX', desc: 'Pr0n Muut (xxx)' },
      { id: '47', cat: 'XXX', desc: 'Pr0n HD (xxx)' },
      { id: '24', cat: 'PC/Mobile-Other', desc: 'Puhelimeen (phone)' },
      { id: '1', cat: 'TV/SD', desc: 'Sarjat DVD (series)' },
      { id: '30', cat: 'TV', desc: 'Sarjat (series)' },
      { id: '41', cat: 'TV/HD', desc: 'Sarjat HD (series)' },
      { id: '43', cat: 'TV', desc: 'Salkkarit (Soap Opera)' },
      { id: '40', cat: 'TV/Sport', desc: 'Urheilu (sport)' },
      { id: '31', cat: 'Other', desc: 'Muut (other)' },
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
      name: 'info_results',
      type: 'info',
      label: 'Search results',
      default:
        '<ol><li>Only the Xbtit style is supported.</li><ul>Make sure to set the <b>Style</b> option in your profile to <b>Xbtit</b>.</ul><li>For best results, increase the torrents number in your profile to 100.</li><ul>Set the <b>Torrents Per Page</b> option to <b>100</b>.</ul></ol>',
    },
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
  ],
  login: {
    path: 'index.php?page=login',
    method: 'post',
    inputs: {
      uid: '{{ .Config.username }}',
      pwd: '{{ .Config.password }}',
      logout: 'no',
    },
    error: [{ selector: 'tr td span[style="color:#FF0000;"]' }],
    test: { path: 'index.php', selector: 'a[href="logout.php"]' },
  },
  download: {
    selectors: [{ selector: 'a[href^="download.php?id="]', attribute: 'href' }],
  },
  search: {
    paths: [{ path: 'index.php' }],
    inputs: {
      page: 'torrents',
      search: '{{ if .Query.IMDBID }}{{ .Query.IMDBID }}{{ else }}{{ .Keywords }}{{ end }}',
      category: '{{ if .Categories }}{{ range .Categories }}{{.}};{{end}}{{ else }}0{{ end }}',
      options: '{{ if .Query.IMDBID }}1{{ else }}0{{ end }}',
      active: 0,
      gold: '{{ if .Config.freeleech }}3{{ else }}0{{ end }}',
      order: '{{ .Config.sort }}',
      by: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table.lista tr td table.lista tr:has(a[href^="index.php?page=torrent-details"])',
    },
    fields: {
      category: {
        selector: 'td a[href^="index.php?page=torrents&category="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      title: { selector: 'td a[href^="index.php?page=torrent-details"]' },
      details: {
        selector: 'td a[href^="index.php?page=torrent-details"]',
        attribute: 'href',
      },
      download: {
        selector: 'td a[href^="index.php?page=downloadcheck"]',
        attribute: 'href',
      },
      imdb: {
        selector: 'a[href*="imdb.com/title/tt"]',
        attribute: 'href',
        filters: [
          { name: 'replace', args: ["javascript:popdetails('", ''] },
          { name: 'replace', args: ["');", ''] },
        ],
      },
      size: { selector: 'td:nth-last-child(1)' },
      leechers: { selector: 'td:nth-last-child(2)' },
      seeders: { selector: 'td:nth-last-child(3)' },
      date: {
        selector: 'td:nth-last-child(4)',
        filters: [
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: '02/01/2006 15:04 -07:00' },
        ],
      },
      description: {
        selector: 'td a[href^="index.php?page=torrent-details"]',
        remove: 'a',
      },
      downloadvolumefactor: {
        case: {
          'img[src="images/silver.gif"]': 0.5,
          'img[src="images/gold.gif"]': 0,
          'img[src="images/freeleech.gif"]': 0,
          '*': 1,
        },
      },
      uploadvolumefactor: { text: 1 },
      minimumratio: { text: 1 },
      minimumseedtime: { text: 259200 },
    },
  },
  source: 'jackett',
};
