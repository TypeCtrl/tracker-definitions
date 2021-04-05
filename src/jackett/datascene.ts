import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'datascene',
  name: 'DataScene',
  description: 'DataScene (DS) is a ROMANIAN Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'ro-RO',
  type: 'private',
  encoding: 'WINDOWS-1252',
  links: ['http://datascene.net/'],
  legacylinks: ['https://datascene.net/'],
  caps: {
    categorymappings: [
      { id: '3', cat: 'TV/Anime', desc: 'Anime | Cartoon' },
      { id: '15', cat: 'PC/0day', desc: 'Appz | Win' },
      { id: '4', cat: 'PC/0day', desc: 'Appz | Linux' },
      { id: '6', cat: 'Books', desc: 'E-Book' },
      { id: '10', cat: 'PC/Games', desc: 'Games | PC Iso' },
      { id: '9', cat: 'PC/Games', desc: 'Games | PC Rips' },
      { id: '11', cat: 'Console', desc: 'Games | Pack' },
      { id: '43', cat: 'Console', desc: 'Games | Console' },
      { id: '29', cat: 'Other', desc: 'Images' },
      { id: '2', cat: 'Other', desc: 'MiSC' },
      { id: '5', cat: 'PC/Mobile-Other', desc: 'Mobile' },
      { id: '27', cat: 'Movies', desc: 'Movies | Pack' },
      { id: '63', cat: 'Movies', desc: 'Movies | Pack-Ro' },
      { id: '46', cat: 'Movies/3D', desc: 'Movies | 3D' },
      { id: '26', cat: 'Movies/SD', desc: 'Movies | Cam' },
      { id: '25', cat: 'Movies', desc: 'Movies | Documentary' },
      { id: '24', cat: 'Movies/DVD', desc: 'Movies | DVD-R' },
      { id: '32', cat: 'Movies/DVD', desc: 'Movies | DVD-RO' },
      { id: '23', cat: 'Movies/HD', desc: 'Movies | HD' },
      { id: '31', cat: 'Movies/HD', desc: 'Movies | HD-Ro' },
      { id: '34', cat: 'Movies/Foreign', desc: 'Movies | Hindi' },
      { id: '30', cat: 'Movies/SD', desc: 'Movies | SD' },
      { id: '36', cat: 'Movies/SD', desc: 'Movies | SD-Ro' },
      { id: '50', cat: 'Movies/BluRay', desc: 'Movies | Blu-Ray' },
      { id: '51', cat: 'Movies/BluRay', desc: 'Movies | Blu-Ray-Ro' },
      { id: '55', cat: 'Movies/UHD', desc: 'Movies | 4K' },
      { id: '59', cat: 'Movies/UHD', desc: 'Movies | 4K-Ro' },
      { id: '21', cat: 'Audio/Video', desc: 'Music | Video' },
      { id: '19', cat: 'Audio', desc: 'Music | Mp3/Flac' },
      { id: '18', cat: 'Other', desc: 'Other' },
      { id: '42', cat: 'Other', desc: 'Premiera | DsT' },
      { id: '14', cat: 'TV/Sport', desc: 'Sport' },
      { id: '47', cat: 'TV/HD', desc: 'Tv | HD' },
      { id: '57', cat: 'TV/HD', desc: 'Tv | HD-Ro' },
      { id: '28', cat: 'TV/SD', desc: 'Tv | SD' },
      { id: '58', cat: 'TV/SD', desc: 'Tv | SD-Ro' },
      { id: '54', cat: 'TV', desc: 'Tv | Pack' },
      { id: '61', cat: 'TV', desc: 'Tv | Pack-Ro' },
      { id: '13', cat: 'Other', desc: 'Tutoriale' },
      { id: '12', cat: 'XXX', desc: 'XxX' },
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
      label: 'Filter freeleech only',
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
  ],
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'td.embedded:has(h2:contains("failed"))' }],
    test: { path: 'browse.php' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{ if .Categories}}{{ range .Categories }}c{{.}}=1&{{end}}{{ else }}cat=0{{ end }}',
      search: '{{ if .Query.IMDBID }}{{ .Query.IMDBID }}{{ else }}{{ .Keywords }}{{ end }}',
      incldead: 2,
      blah: '{{ if .Query.IMDBID }}3{{ else }}0{{ end }}',
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    rows: {
      selector:
        'div.ncls > table > tbody > tr:has(a.tname){{ if .Config.freeleech }}:has(a#free-btn){{ else }}{{ end }}',
    },
    fields: {
      title: { selector: 'a.tname' },
      details: { selector: 'a.tname', attribute: 'href' },
      poster: {
        selector: 'a.tname',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'src=([^\\s]+)' }],
      },
      imdb: {
        selector: 'a[href*="imdb.com/title/tt"]',
        attribute: 'href',
      },
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      download: {
        selector: 'a[href^="/download.php/"], a[href^="/downloadd.php/"]',
        attribute: 'href',
      },
      date: {
        selector: 'td:contains("Added:") a#added-btn',
        filters: [{ name: 'replace', args: ['Added: ', ''] }],
      },
      size: { selector: 'td:nth-last-child(5)' },
      grabs: {
        selector: 'td:nth-last-child(4)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      seeders: { selector: 'td:nth-last-child(3)' },
      leechers: { selector: 'td:nth-last-child(2)' },
      downloadvolumefactor: { case: { 'a#free-btn': 0, '*': 1 } },
      uploadvolumefactor: { text: 1 },
      minimumratio: { text: 1 },
      minimumseedtime: { text: 172800 },
    },
  },
  source: 'jackett',
};
