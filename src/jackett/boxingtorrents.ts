import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'boxingtorrents',
  name: 'Boxing Torrents',
  description: 'Boxing Torrents is a Private Torrent Tracker for BOXING',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://tc-boxing.com/'],
  caps: {
    categorymappings: [
      { id: '17', cat: 'TV/Sport', desc: '4K' },
      { id: '15', cat: 'TV/Sport', desc: '3D' },
      { id: '9', cat: 'TV/Sport', desc: 'Amateur - Full' },
      { id: '16', cat: 'TV/Sport', desc: 'Blu-ray' },
      { id: '13', cat: 'TV/Sport', desc: 'Career Set' },
      { id: '8', cat: 'TV/Sport', desc: 'DVD' },
      { id: '10', cat: 'TV/Sport', desc: 'Foreign - Excellent' },
      { id: '11', cat: 'TV/Sport', desc: 'Foreign - Fair' },
      { id: '6', cat: 'TV/Sport', desc: 'Foreign - Good' },
      { id: '12', cat: 'TV/Sport', desc: 'Foreign - Poor' },
      { id: '1', cat: 'TV/Sport', desc: 'Full - Excellent' },
      { id: '3', cat: 'TV/Sport', desc: 'Full - Fair' },
      { id: '2', cat: 'TV/Sport', desc: 'Full - Good' },
      { id: '4', cat: 'TV/Sport', desc: 'Full - Poor' },
      { id: '14', cat: 'TV/Sport', desc: 'HD' },
      { id: '7', cat: 'TV/Sport', desc: 'Misc' },
    ],
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
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
      default: 'DESC',
      options: { DESC: 'desc', ASC: 'asc' },
    },
    {
      name: 'info_download',
      type: 'info',
      label: 'Download Restrictions',
      default:
        'You must have uploaded at least 10GB before you are able to access all torrent sizes. Until then, you are restricted to torrents no larger than 2.5GB.',
    },
  ],
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'td.embedded:contains("Login failed!")' }],
    test: { path: 'browse.php', selector: 'a[href="logout.php"]' },
  },
  download: {
    selectors: [{ selector: 'a[href^="download.php"]', attribute: 'href' }],
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{ if .Categories }}{{ range .Categories }}c{{.}}=1&{{end}}{{ else }}cat=0{{ end }}',
      incldead: 1,
      free: '{{ if .Config.freeleech }}1{{ else }}{{ end }}',
      search: '{{ .Keywords }}',
      sort: '{{ .Config.sort }}',
      d: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table[border="1"][cellspacing="0"][cellpadding="5"] tr:has(a[href^="details.php?id="])',
    },
    fields: {
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: { selector: 'a[href^="details.php?id="]' },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      files: { selector: 'td:nth-last-child(8)' },
      date: {
        selector: 'td:nth-last-child(6)',
        filters: [
          { name: 'append', args: ' -07:00' },
          { name: 'dateparse', args: '2006-01-0215:04:05 -07:00' },
        ],
      },
      size: { selector: 'td:nth-last-child(5)' },
      grabs: { selector: 'td:nth-last-child(4)' },
      seeders: { selector: 'td:nth-last-child(3)' },
      leechers: { selector: 'td:nth-last-child(2)' },
      downloadvolumefactor: {
        case: { 'b:contains("FreeLeech")': 0, '*': 1 },
      },
      uploadvolumefactor: { text: 1 },
      minimumratio: { text: 1 },
      minimumseedtime: { text: 259200 },
    },
  },
  source: 'jackett',
};
