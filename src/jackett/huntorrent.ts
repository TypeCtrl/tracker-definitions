import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'huntorrent',
  name: 'HunTorrent',
  description: 'HunTorrent is a Hungarian Semi-Private site for MOVIES / TV / GENERAL',
  language: 'hu-HU',
  type: 'semi-private',
  encoding: 'UTF-8',
  links: ['https://huntorrent.net/'],
  caps: {
    categorymappings: [
      { id: '28', cat: 'Movies/SD', desc: 'Cam/ENG' },
      { id: '27', cat: 'Movies/SD', desc: 'Cam/HUN' },
      { id: '4', cat: 'Movies/DVD', desc: 'DVDR/ENG' },
      { id: '3', cat: 'Movies/DVD', desc: 'DVDR/HUN' },
      { id: '6', cat: 'Movies/HD', desc: 'HD/ENG' },
      { id: '5', cat: 'Movies/HD', desc: 'HD/HUN' },
      { id: '29', cat: 'Movies', desc: 'Mese/ENG' },
      { id: '30', cat: 'Movies', desc: 'Mese/HUN' },
      { id: '8', cat: 'TV/SD', desc: 'Sorozat/ENG' },
      { id: '31', cat: 'TV/HD', desc: 'Sorozat/HD/ENG' },
      { id: '9', cat: 'TV/HD', desc: 'Sorozat/HD/HUN' },
      { id: '7', cat: 'TV/SD', desc: 'Sorozat/HUN' },
      { id: '2', cat: 'Movies/SD', desc: 'XviD/ENG' },
      { id: '1', cat: 'Movies/SD', desc: 'XviD/HUN' },
      { id: '25', cat: 'Other', desc: 'Kép' },
      { id: '24', cat: 'Books', desc: 'eBook/ENG' },
      { id: '23', cat: 'Books', desc: 'eBook/HUN' },
      { id: '38', cat: 'Audio/Audiobook', desc: 'Hangoskönyv' },
      { id: '17', cat: 'PC/Games', desc: 'Játék/ISO' },
      { id: '18', cat: 'PC/Games', desc: 'Játék/RIP' },
      { id: '19', cat: 'Console', desc: 'Konzol' },
      { id: '26', cat: 'PC/Mobile-Other', desc: 'Mobil' },
      { id: '20', cat: 'PC/ISO', desc: 'Program/ISO' },
      { id: '21', cat: 'PC/0day', desc: 'Program/RIP' },
      { id: '13', cat: 'Audio/Video', desc: 'Klip/ENG' },
      { id: '12', cat: 'Audio/Video', desc: 'Klip/HUN' },
      { id: '11', cat: 'Audio/MP3', desc: 'MP3/ENG' },
      { id: '10', cat: 'Audio/MP3', desc: 'MP3/HUN' },
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
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 4,
      options: { '1': 'name', '4': 'created', '5': 'size', '7': 'seeders' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'desc',
      options: { desc: 'desc', asc: 'asc' },
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
      login: 'yes',
    },
    test: { path: 'browse.php', selector: 'a[href^="logout.php?k="]' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      viewMode: '',
      xyz: 'yes',
      search: '{{ if .Query.IMDBID }}{{ .Query.IMDBID }}{{ else }}{{ .Keywords }}{{ end }}',
      korhatar: 0,
      incldead: 1,
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table[align="center"][cellpadding="5"] > tbody > tr[id^="torrent-main-"]',
    },
    fields: {
      id: { selector: 'a.download-link', attribute: 'data-id' },
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: {
        selector: 'a[href^="#details_tr_"]',
        attribute: 'title',
        filters: [{ name: 'replace', args: ['Név: ', ''] }],
      },
      details: { text: 'details.php?id={{ .Result.id }}' },
      download: {
        selector: 'a[href^="download.php?torrent="]',
        attribute: 'href',
      },
      description: { selector: 'td:nth-child(2) div:nth-child(2)' },
      imdb: {
        selector: 'a[href*="imdb.com/title/tt"]',
        attribute: 'href',
      },
      poster: {
        selector: 'a[href^="torrents_data/posters/"]',
        attribute: 'href',
      },
      date: {
        selector: 'td:nth-last-child(6)',
        filters: [
          { name: 'append', args: ' +01:00' },
          { name: 'dateparse', args: '2006-01-02 15:04:05 -07:00' },
        ],
      },
      size: { selector: 'td:nth-last-child(5) b' },
      grabs: {
        selector: 'td:nth-last-child(4)',
        filters: [{ name: 'replace', args: ['x', ''] }],
      },
      seeders: { selector: 'td:nth-last-child(3)' },
      leechers: { selector: 'td:nth-last-child(2)' },
      downloadvolumefactor: { text: 1 },
      uploadvolumefactor: { text: 2 },
      minimumratio: { text: 1 },
      minimumseedtime: { text: 115200 },
    },
  },
  source: 'jackett',
};
