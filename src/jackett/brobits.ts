import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'brobits',
  name: 'BRObits',
  description: 'BRObits is a CHINESE Private Torrent Tracker for HD MOVIES / TV',
  language: 'zh-CN',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://brobits.cc/'],
  caps: {
    categorymappings: [
      { id: '401', cat: 'Movies', desc: 'Movies/电影' },
      { id: '404', cat: 'TV/Documentary', desc: 'Documentaries/纪录片' },
      { id: '410', cat: 'TV', desc: 'TV Series/剧集' },
    ],
    modes: {
      search: ['q', 'imdbid'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
    },
  },
  settings: [
    { name: 'cookie', type: 'text', label: 'Cookie' },
    {
      name: 'info',
      type: 'info',
      label: 'How to get the Cookie',
      default:
        "<ol><li>Login to this tracker with your browser<li>Open the <b>DevTools</b> panel by pressing <b>F12</b><li>Select the <b>Network</b> tab<li>Click on the <b>Doc</b> button<li>Refresh the page by pressing <b>F5</b><li>Select the <b>Headers</b> tab<li>Find <b>'cookie:'</b> in the <b>Request Headers</b> section<li><b>Select</b> and <b>Copy</b> the whole cookie string <i>(everything after 'cookie: ')</i> and <b>Paste</b> here.</ol>",
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
    method: 'cookie',
    inputs: { cookie: '{{ .Config.cookie }}' },
    test: { path: 'index.php' },
  },
  search: {
    paths: [{ path: 'torrents.php' }],
    inputs: {
      $raw: '{{ range .Categories }}cat{{.}}=1&{{end}}',
      search: '{{ if .Query.IMDBID }}{{ .Query.IMDBID }}{{else}}{{ .Keywords }}{{end}}',
      incldead: 0,
      spstate: 0,
      search_area: '{{ if .Query.IMDBID }}4{{else}}0{{end}}',
      search_mode: 0,
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table.torrents > tbody > tr:has(table.torrentname)',
    },
    fields: {
      title: {
        optional: true,
        selector: 'a[title][href^="details.php?id="]',
        attribute: 'title',
      },
      category: {
        selector: 'a[href^="?cat="]',
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
      imdb: {
        optional: true,
        selector: 'div.imdb_100 > a',
        attribute: 'href',
      },
      date: {
        selector: 'td:nth-child(4):not(:has(span))',
        optional: true,
        filters: [
          { name: 'append', args: ' +08:00' },
          { name: 'dateparse', args: '2006-01-0215:04:05 -07:00' },
        ],
      },
      size: { selector: 'td:nth-child(5)' },
      seeders: { selector: 'td:nth-child(6)' },
      leechers: { selector: 'td:nth-child(7)' },
      grabs: { selector: 'td:nth-child(8)' },
      downloadvolumefactor: {
        case: {
          'img.pro_free': 0,
          'img.pro_free2up': 0,
          'img.pro_50pctdown': 0.5,
          'img.pro_50pctdown2up': 0.5,
          'img.pro_30pctdown': 0.3,
          '*': 1,
        },
      },
      uploadvolumefactor: {
        case: {
          'img.pro_50pctdown2up': 2,
          'img.pro_free2up': 2,
          'img.pro_2up': 2,
          '*': 1,
        },
      },
      description: { selector: 'td:nth-child(2)', remove: 'a, img' },
    },
  },
  source: 'jackett',
};
