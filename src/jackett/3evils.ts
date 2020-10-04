import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: '3evils',
  name: '3evils',
  description: '3evils is a Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'en-EN',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://www.3evils.com/'],
  caps: {
    categorymappings: [
      { id: '65', cat: 'Books', desc: 'Books' },
      { id: '11', cat: 'Movies/UHD', desc: 'Movies/Encodes 2160p' },
      { id: '12', cat: 'Movies/UHD', desc: 'Movies/Remux 2160p' },
      { id: '13', cat: 'Movies/HD', desc: 'Movies/Remux 1080p' },
      { id: '14', cat: 'Movies', desc: 'Movies/Packs' },
      { id: '16', cat: 'Movies/HD', desc: 'Movies/x264' },
      { id: '17', cat: 'Movies/HD', desc: 'Movies/X265' },
      { id: '33', cat: 'Audio', desc: 'Music/Audio' },
      { id: '32', cat: 'Audio', desc: 'Music/Packs' },
      { id: '6', cat: 'TV', desc: 'TV/Packs' },
      { id: '3', cat: 'TV/HD', desc: 'TV/x264' },
      { id: '4', cat: 'TV/HD', desc: 'TV/x265' },
      { id: '8', cat: 'TV/SD', desc: 'TV/Xvid' },
      { id: '43', cat: 'PC/0day', desc: 'Appz/Windows' },
      { id: '42', cat: 'PC/Phone-Android', desc: 'Appz/Android' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
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
      default: '4',
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
      submitme: 'X',
    },
    error: [{ selector: 'div.callout:contains("Login failed!")' }],
    test: { path: '/', selector: 'a[href*="/logout.php?hash_please="]' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      searchin: 'title',
      incldead: 1,
      only_free: '{{ if .Config.freeleech }}1{{ else }}{{ end }}',
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table.responsive-card-table tr:has(td[data-label])',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: {
        selector: 'td[data-label="Type"] a',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: {
        selector: 'td[data-label="Name"] a[onmouseover]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: "Tip\\('<b>(.*?)</b>" }],
      },
      details: {
        selector: 'td[data-label="Name"] a',
        attribute: 'href',
      },
      download: {
        selector: 'td[data-label="Download"] a',
        attribute: 'href',
      },
      banner: {
        selector: 'td[data-label="Name"] a[onmouseover]',
        attribute: 'onmouseover',
        optional: true,
        filters: [
          { name: 'regexp', args: 'src="(.*?)"' },
          { name: 'replace', args: ['./pic/noposter.png', ''] },
        ],
      },
      size: { selector: 'td[data-label="Size"]' },
      files: { selector: 'td[data-label="Files"]' },
      grabs: {
        selector: 'td[data-label="Snatched"]',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      date: {
        optional: true,
        selector: 'td[data-label="Added"]:not(:contains("day"))',
        filters: [
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: 'Jan 2 2006 03:04 PM -07:00' },
        ],
      },
      seeders: { selector: 'td[data-label="Seeders"]' },
      leechers: { selector: 'td[data-label="Leechers"]' },
      downloadvolumefactor: {
        case: { 'img[src="./pic/freedownload.gif"]': 0, '*': 1 },
      },
      uploadvolumefactor: { case: { '*': 1 } },
    },
  },
  source: 'jackett',
};
