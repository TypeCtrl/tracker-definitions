import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'leaguehd',
  name: 'LeagueHD',
  description: 'LeagueHD is a CHINESE Private Torrent Tracker for HD MOVIES / TV',
  language: 'zh-CN',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://leaguehd.com/'],
  caps: {
    categorymappings: [
      { id: '300', cat: 'Movies/UHD', desc: 'Movies UHD-4K' },
      { id: '301', cat: 'Movies/UHD', desc: 'Movies 2160p' },
      { id: '401', cat: 'Movies/BluRay', desc: 'Movies Blu-ray' },
      { id: '410', cat: 'Movies/HD', desc: 'Movies 1080p' },
      { id: '411', cat: 'Movies/HD', desc: 'Movies 720p' },
      { id: '412', cat: 'Movies/WEBDL', desc: 'Movies WEB-DL' },
      { id: '413', cat: 'TV/HD', desc: 'Movies HDTV' },
      { id: '414', cat: 'Movies/DVD', desc: 'Movies DVD' },
      { id: '415', cat: 'Movies', desc: 'Movies REMUX' },
      { id: '416', cat: 'Movies/3D', desc: 'Movies 3D' },
      { id: '417', cat: 'Movies', desc: 'Movies iPad' },
      { id: '418', cat: 'Movies/WEBDL', desc: 'Movies NF WEB-DL' },
      { id: '419', cat: 'Movies/WEBDL', desc: 'Movies VIU WEB-DL' },
      { id: '404', cat: 'TV/Documentary', desc: 'Documentaries' },
      { id: '405', cat: 'TV/Anime', desc: 'Animations(动画片)' },
      { id: '402', cat: 'TV', desc: 'TV Series(电视剧)' },
      { id: '403', cat: 'TV', desc: 'TV Shows(综艺)' },
      { id: '406', cat: 'Audio/Video', desc: 'Music Videos(MV)' },
      { id: '407', cat: 'TV/Sport', desc: 'Sports(体育)' },
      { id: '408', cat: 'Audio', desc: 'HQ Audio(音乐)' },
      { id: '409', cat: 'Other', desc: 'Misc(其他)' },
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
    test: { path: 'index.php', selector: 'a[href*="logout.php"]' },
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
      category: {
        selector: 'a[href^="?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: {
        optional: true,
        selector: 'a[title][href^="details.php?id="]',
        attribute: 'title',
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
        selector: 'a[href*="www.imdb.com/title/tt"]',
        attribute: 'href',
      },
      date: {
        selector: 'td:nth-child(4):not(:has(span[title])):not(:has(a))',
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
