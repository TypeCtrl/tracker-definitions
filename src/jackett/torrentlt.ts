import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'torrentlt',
  name: 'Torrent.LT',
  description: 'Torrent.LT is a LITHUANIAN Private Torrent Tracker for 0DAY / GENERAL',
  language: 'lt-LT',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://torrent.lt/'],
  legacylinks: ['http://www.torrent.ai/', 'https://torrent.ai/'],
  caps: {
    categorymappings: [
      { id: '33', cat: 'Movies', desc: 'Filmai / LT' },
      { id: '43', cat: 'Movies', desc: 'Filmai / LT-Subs' },
      { id: '74', cat: 'Movies/HD', desc: 'Filmai LT HD' },
      { id: '34', cat: 'Movies', desc: 'Filmai / Eng' },
      { id: '54', cat: 'Movies/HD', desc: 'Filmai / Eng HD' },
      { id: '32', cat: 'Movies', desc: 'Filmai / Rus' },
      { id: '78', cat: 'Movies/HD', desc: 'Filmai Rus HD' },
      { id: '72', cat: 'Movies/3D', desc: 'Filmai / 3D' },
      { id: '31', cat: 'Movies/DVD', desc: 'Filmai / DVD' },
      { id: '76', cat: 'TV', desc: 'Animacija / LT' },
      { id: '80', cat: 'TV/HD', desc: 'Animacija / LT HD' },
      { id: '27', cat: 'TV', desc: 'Animacija / Eng' },
      { id: '52', cat: 'TV/HD', desc: 'Animacija / Eng HD' },
      { id: '81', cat: 'TV', desc: 'Animacija / Rus' },
      { id: '85', cat: 'TV', desc: 'Animacija / Rus HD' },
      { id: '86', cat: 'TV', desc: 'Animacija / 3D' },
      { id: '35', cat: 'TV/Anime', desc: 'Anime' },
      { id: '58', cat: 'TV', desc: 'Serialai / LT' },
      { id: '79', cat: 'TV/HD', desc: 'Serialai LT HD' },
      { id: '42', cat: 'TV', desc: 'Serialai / Eng' },
      { id: '56', cat: 'TV/HD', desc: 'Serialai / Eng HD' },
      { id: '59', cat: 'TV', desc: 'Serialai / Rus' },
      { id: '84', cat: 'TV/HD', desc: 'Serialai / Rus HD' },
      { id: '69', cat: 'TV', desc: 'TV / LT' },
      { id: '28', cat: 'TV', desc: 'TV / Eng' },
      { id: '70', cat: 'TV', desc: 'TV / Rus' },
      { id: '39', cat: 'TV/Documentary', desc: 'TV / Dokumentika' },
      { id: '1', cat: 'PC/Games', desc: 'Žaidimai / PC' },
      { id: '50', cat: 'Console/PS4', desc: 'Žaidimai / PS' },
      { id: '51', cat: 'Console/Xbox360', desc: 'Žaidimai / XBOX' },
      { id: '73', cat: 'Console', desc: 'Žaidimai / Priedai' },
      { id: '36', cat: 'Console/Other', desc: 'Žaidimai / Kita' },
      { id: '62', cat: 'TV/Sport', desc: 'Sport / Basketball' },
      { id: '66', cat: 'TV/Sport', desc: 'Sport / Football' },
      { id: '65', cat: 'TV/Sport', desc: 'Sport / Fights' },
      { id: '63', cat: 'TV/Sport', desc: 'Sport / Cars' },
      { id: '40', cat: 'TV/Sport', desc: 'Sport / Kita' },
      { id: '87', cat: 'Audio/MP3', desc: 'Muzika / LT' },
      { id: '6', cat: 'Audio', desc: 'Muzika / Albumai' },
      { id: '57', cat: 'Audio/MP3', desc: 'Muzika / VA' },
      { id: '26', cat: 'Audio', desc: 'Muzika / DJ Sets' },
      { id: '29', cat: 'Audio/Video', desc: 'Muzika / Videos' },
      { id: '10', cat: 'PC/0day', desc: 'Soft / PC' },
      { id: '44', cat: 'PC/Mac', desc: 'Soft / MAC' },
      { id: '61', cat: 'PC/Mobile-Other', desc: 'Soft / Mobile' },
      { id: '75', cat: 'PC', desc: 'Soft / Kita' },
      { id: '89', cat: 'Audio/Audiobook', desc: 'Audiobooks / LT' },
      { id: '83', cat: 'Audio/Audiobook', desc: 'Audiobooks' },
      { id: '90', cat: 'Books/Ebook', desc: 'E-Books / LT' },
      { id: '41', cat: 'Books/Ebook', desc: 'E-Books' },
      { id: '77', cat: 'Other', desc: 'Educational' },
      { id: '30', cat: 'Other/Misc', desc: 'Kita' },
      { id: '21', cat: 'XXX', desc: 'pr0n' },
      { id: '88', cat: 'XXX', desc: 'pr0n / LT' },
      { id: '71', cat: 'XXX/Pack', desc: 'pr0n / pack' },
      { id: '82', cat: 'XXX', desc: 'pr0n / games' },
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
    { name: 'cookie', type: 'text', label: 'Cookie' },
    {
      name: 'info',
      type: 'info',
      label: 'How to get the Cookie',
      default:
        "<ol><li>Login to this tracker in your browser<li>Open the <b>DevTools</b> panel by pressing <b>F12</b><li>Select the <b>Network</b> tab<li>Click on the <b>Doc</b> button<li>Refresh the page by pressing <b>F5</b><li>Select the <b>Headers</b> tab<li>Find 'cookie:' in the <b>Request Headers</b> section<li>Copy & paste the whole cookie string to here</ol>",
    },
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
      default: 0,
      options: { '0': 'created', '4': 'size', '6': 'seeders' },
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
    method: 'cookie',
    inputs: { cookie: '{{ .Config.cookie }}' },
    test: { path: 'lt/torrents.php' },
  },
  search: {
    paths: [{ path: 'lt/torrents.php' }],
    inputs: {
      $raw: '{{ range .Categories }}cats[]={{.}}&{{end}}',
      search: '{{ .Keywords }}',
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
      free: '{{ if .Config.freeleech }}on{{ else }}{{ end }}',
    },
    keywordsfilters: [{ name: 'replace', args: ['.', ' '] }],
    rows: {
      selector: 'table> tbody > tr[class^="torrents-table__"]',
      filters: [{ name: 'andmatch', args: 50 }],
      after: 1,
    },
    fields: {
      category: {
        selector: 'td[class^="category-icon_cell"] a',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cats' }],
      },
      title: { selector: 'div[class^="torrent-name"] a' },
      details: {
        selector: 'div[class^="torrent-name"] a',
        attribute: 'href',
      },
      download: {
        selector: 'td a[href^="download?id="]',
        attribute: 'href',
      },
      poster: {
        selector: 'div[class^="torrent-name"] a',
        attribute: 'data-poster-preview',
      },
      seeders: {
        selector: 'td.seeders_cell:not(:has(i))',
        optional: true,
      },
      leechers: {
        selector: 'td.leechers_cell:not(:has(i))',
        optional: true,
      },
      size: { selector: 'td.size_cell' },
      downloadvolumefactor: {
        case: { 'img[src$="/freedownload.gif"]': 0, '*': 1 },
      },
      uploadvolumefactor: { text: 1 },
      date: {
        selector: 'span.datetime',
        attribute: 'title',
        filters: [
          { name: 'append', args: ' +02:00' },
          { name: 'dateparse', args: '2006-01-02 15:04 -07:00' },
        ],
      },
      minimumratio: { text: 0.41 },
    },
  },
  source: 'jackett',
};
