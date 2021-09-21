import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'sdbits',
  name: 'SDBits',
  description: 'SDBits is a small tracker that focuses on SD movies and tv.',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://sdbits.org/'],
  legacylinks: ['http://sdbits.org/'],
  caps: {
    categorymappings: [
      { id: '6', cat: 'Audio', desc: 'Audio' },
      { id: '3', cat: 'TV/Documentary', desc: 'Documentary' },
      { id: '1', cat: 'Movies', desc: 'Movies' },
      { id: '4', cat: 'Audio', desc: 'Music' },
      { id: '5', cat: 'TV/Sport', desc: 'Sports' },
      { id: '7', cat: 'TV/Other', desc: 'Stand-up Comedy' },
      { id: '2', cat: 'TV', desc: 'TV' },
    ],
    modes: {
      search: ['q'],
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
      default: 'DESC',
      options: { DESC: 'desc', ASC: 'asc' },
    },
    {
      name: 'info',
      type: 'info',
      label: 'Results Per Page',
      default: 'For best results, change the <b>Torrents per page:</b> setting to <b>100</b> on your account profile.',
    },
  ],
  login: {
    path: 'takeloginn3.php',
    method: 'post',
    inputs: {
      uname: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      returnto: '/',
    },
    error: [{ selector: 'td.embedded:has(h2:contains("failed")+table)' }],
    test: {
      path: 'browse.php',
      selector: 'span.smallfont:has(a[href="logout.php"])',
    },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ if .Query.IMDBID }}{{ else }}{{ .Keywords }}{{ end }}',
      incldead: 1,
      descriptions: 0,
      imdbgt: 0,
      imdblt: 10,
      imdb: '{{ .Query.IMDBID }}',
      sort: '{{ .Config.sort }}',
      d: '{{ .Config.type }}',
    },
    rows: { selector: 'table#torrent-list > tbody > tr[id]' },
    fields: {
      title: { selector: 'td:nth-child(3) > b > a' },
      category: {
        selector: 'a[href^="?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      details: { selector: 'td:nth-child(3) > b > a', attribute: 'href' },
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(6)' },
      grabs: { selector: 'td:nth-child(7)' },
      seeders: { selector: 'td:nth-child(8)' },
      leechers: { selector: 'td:nth-child(9)' },
      date: {
        selector: 'td:nth-child(5)',
        filters: [{ name: 'append', args: ' ago' }],
      },
      imdb: {
        selector: 'a[href*="imdb.com/title/tt"]',
        attribute: 'href',
      },
      downloadvolumefactor: {
        case: {
          'a[style="color:#000099"][href^="details.php?"]': 0,
          '*': 1,
        },
      },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
