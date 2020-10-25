import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'scenerush',
  name: 'SceneRush',
  description: 'SceneRush is a PORTUGUESE Private Torrent Tracker for 0DAY / GENERAL',
  language: 'pt-PT',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://www.scene-rush.pt/', 'https://www.scene-rush.com/'],
  legacylinks: ['http://www.scene-rush.pt/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'PC', desc: 'Apps' },
      { id: '2', cat: 'Movies', desc: 'XVID' },
      { id: '3', cat: 'Movies/DVD', desc: 'DVD' },
      { id: '4', cat: 'TV', desc: 'TV XVID' },
      { id: '5', cat: 'PC/Games', desc: 'PC Games' },
      { id: '6', cat: 'Movies/HD', desc: 'HD' },
      { id: '7', cat: 'XXX', desc: 'XXX' },
      { id: '8', cat: 'TV/Anime', desc: 'Anime' },
      { id: '9', cat: 'Audio', desc: 'Audio' },
      { id: '10', cat: 'Other', desc: 'Other' },
      { id: '11', cat: 'Console/Xbox360', desc: 'XBOX 360' },
      { id: '12', cat: 'Console/PSP', desc: 'PSP' },
      { id: '13', cat: 'TV/Documentary', desc: 'Doc' },
      { id: '14', cat: 'Movies/DVD', desc: 'Movies DVD' },
      { id: '15', cat: 'Console', desc: 'PS2' },
      { id: '16', cat: 'TV/Sport', desc: 'TV WWE' },
      { id: '17', cat: 'TV/HD', desc: 'TV X264' },
      { id: '18', cat: 'TV', desc: 'TV DVD' },
      { id: '19', cat: 'XXX/DVD', desc: 'XXX DVD' },
      { id: '20', cat: 'TV/Anime', desc: 'Anime DVD' },
      { id: '21', cat: 'PC/Mac', desc: 'Mac' },
      { id: '23', cat: 'Movies', desc: 'Boxset' },
      { id: '31', cat: 'Other', desc: 'OFF' },
      { id: '32', cat: 'Movies/BluRay', desc: 'BluRay' },
      { id: '33', cat: 'Console/Wii', desc: 'WII' },
      { id: '34', cat: 'Console/PS3', desc: 'PS3' },
      { id: '35', cat: 'TV/Anime', desc: 'Anime HD' },
      { id: '36', cat: 'PC/Phone-Android', desc: 'Android' },
      { id: '37', cat: 'Movies/DVD', desc: 'Custom DVDR' },
      { id: '38', cat: 'Movies/Other', desc: 'CAM TS' },
      { id: '39', cat: 'Other', desc: 'GPS' },
      { id: '40', cat: 'Console/PS4', desc: 'PS4' },
      { id: '41', cat: 'Movies/BluRay', desc: 'BDRIP' },
      { id: '42', cat: 'Movies/WEBDL', desc: 'WEB DL' },
      { id: '43', cat: 'Books', desc: 'Ebook' },
      { id: '44', cat: 'TV/Sport', desc: 'Sports' },
      { id: '46', cat: 'Movies/UHD', desc: '4K' },
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
    },
    error: [
      {
        selector: 'h2:contains("Falhou")',
        message: { selector: 'table tr td.text' },
      },
    ],
    test: { path: 'index.php', selector: 'a[href="logout.php"]' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      incldead: '{{ if .Config.freeleech }}3{{ else }}1{{ end }}',
      blah: 0,
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    rows: {
      selector: "table[cellpadding='5'][width='96%'] > tbody > tr:has(a[href*=\"details.php?id=\"])",
    },
    fields: {
      title: { selector: 'td:nth-child(2) > a > b' },
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(8)' },
      grabs: { selector: 'td:nth-child(10)' },
      seeders: { selector: 'td:nth-child(11)' },
      leechers: { selector: 'td:nth-child(12)' },
      date: {
        selector: 'td:nth-child(7)',
        filters: [
          {
            name: 're_replace',
            args: ['(\\d{4}-\\d{2}-\\d{2})(\\d{2}:\\d{2}:\\d{2})', '$1 $2'],
          },
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: '2006-01-02 15:04:05 -07:00' },
        ],
      },
      downloadvolumefactor: { case: { 'i.fg-gold': 0, '*': 1 } },
      uploadvolumefactor: { text: 1 },
      minimumratio: { text: 0.6 },
      minimumseedtime: { text: 259200 },
    },
  },
  source: 'jackett',
};
