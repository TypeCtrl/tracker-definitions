import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'torrenting',
  name: 'Torrenting',
  description: 'Torrenting (TT) is a Private site for MOVIES / TV / GENERAL',
  language: 'en-US',
  type: 'private',
  encoding: 'WINDOWS-1252',
  links: ['https://torrenting.com/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies', desc: 'Movies' },
      { id: '2', cat: 'XXX', desc: 'XXX' },
      { id: '3', cat: 'Movies/BluRay', desc: 'Movies/BluRay' },
      { id: '4', cat: 'TV/SD', desc: 'TV/SD-x264' },
      { id: '5', cat: 'TV/HD', desc: 'TV/HD-x264' },
      { id: '11', cat: 'Movies/HD', desc: 'Movies/HD' },
      { id: '18', cat: 'TV', desc: 'TV/Packs' },
      { id: '21', cat: 'Console', desc: 'Games/Consoles' },
      { id: '26', cat: 'Audio/Video', desc: 'Music/Videos' },
      { id: '27', cat: 'Audio', desc: 'Music/Audio' },
      { id: '29', cat: 'TV/Anime', desc: 'Anime/Toons' },
      { id: '30', cat: 'Books', desc: 'Books' },
      { id: '34', cat: 'PC/0day', desc: 'Applications' },
      { id: '35', cat: 'PC/Games', desc: 'Games/PC' },
      { id: '38', cat: 'Movies/Foreign', desc: 'Movies/Non-English' },
      { id: '40', cat: 'Movies/DVD', desc: 'Movies/DVD-R' },
      { id: '47', cat: 'Movies', desc: 'Movies/Packs' },
      { id: '49', cat: 'Movies/HD', desc: 'Movies/x265' },
      { id: '55', cat: 'TV/Sport', desc: 'Sports' },
      { id: '82', cat: 'TV/Foreign', desc: 'TV/Non-English' },
      { id: '93', cat: 'Audio', desc: 'Music/Packs' },
      { id: '99', cat: 'TV/HD', desc: 'TV/x265' },
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
    { name: 'cookie', type: 'text', label: 'Cookie' },
    {
      name: 'info',
      type: 'info',
      label: 'How to get the Cookie',
      default:
        "<ol><li>Login to this tracker with your browser<li>Open the <b>DevTools</b> panel by pressing <b>F12</b><li>Select the <b>Network</b> tab<li>Click on the <b>Doc</b> button (Chrome Browser) or <b>HTML</b> button (FireFox)<li>Refresh the page by pressing <b>F5</b><li>Click on the first row entry<li>Select the <b>Headers</b> tab on the Right panel<li>Find <b>'cookie:'</b> in the <b>Request Headers</b> section<li><b>Select</b> and <b>Copy</b> the whole cookie string <i>(everything after 'cookie: ')</i> and <b>Paste</b> here.</ol>",
    },
    {
      name: 'freeleech',
      type: 'checkbox',
      label: 'Search freeleech only',
      default: false,
    },
  ],
  login: {
    method: 'cookie',
    inputs: { cookie: '{{ .Config.cookie }}' },
    test: { path: 't' },
  },
  search: {
    paths: [{ path: 't' }],
    inputs: {
      $raw: '{{ range .Categories }}{{.}}=&{{end}}{{ if .Config.freeleech }}free=on&{{ else }}{{ end }}',
      q: '{{ if .Query.IMDBID }}{{ .Query.IMDBID }}{{ else }}{{ .Keywords }}{{ end }}',
      qf: '{{ if .Query.IMDBID }}adv{{ else }}ti{{ end }}',
    },
    rows: {
      selector: 'table#torrentsTable > tbody > tr:has(td.torrentNameInfo)',
    },
    fields: {
      category: {
        selector: 'a[href^="?"]',
        attribute: 'href',
        filters: [{ name: 'replace', args: ['?', ''] }],
      },
      title: { selector: 'a[href^="/torrent.php?id="]' },
      details: {
        selector: 'a[href^="/torrent.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="/download.php/"]',
        attribute: 'href',
      },
      date: {
        selector: 'td.torrentNameInfo > div',
        filters: [
          { name: 're_replace', args: [' by.*', ''] },
          { name: 'split', args: ['|', -1] },
        ],
      },
      seeders: { selector: 'td:nth-last-child(2)' },
      leechers: { selector: 'td:nth-last-child(1)' },
      size: { selector: 'td:nth-last-child(3)' },
      downloadvolumefactor: {
        case: { 'span:contains("FreeLeech")': 0, '*': 1 },
      },
      uploadvolumefactor: { text: 1 },
      minimumratio: { text: 1.1 },
      minimumseedtime: { text: 259200 },
    },
  },
  source: 'jackett',
};
