import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'moecat',
  name: 'MoeCat',
  description: 'MoeCat is a CHINESE Private Torrent Tracker for HD MOVIES / TV',
  language: 'zh-CN',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://moecat.best/'],
  caps: {
    categorymappings: [
      { id: '401', cat: 'Movies', desc: 'Movies/电影' },
      { id: '410', cat: 'PC/Games', desc: 'PC Games/游戏' },
      { id: '402', cat: 'TV', desc: 'TV Series/电视剧' },
      { id: '403', cat: 'TV', desc: 'TV Shows/综艺' },
      { id: '405', cat: 'TV/Anime', desc: 'Animations/动漫' },
      { id: '404', cat: 'TV/Documentary', desc: 'Documentaries/纪录片' },
      { id: '408', cat: 'Audio', desc: 'HQ Audio/音乐' },
      { id: '411', cat: 'PC', desc: 'Apps/软件' },
      { id: '407', cat: 'TV/Sport', desc: 'Sports/体育' },
      { id: '406', cat: 'Audio/Video', desc: 'MusicVideo/音乐MV' },
      { id: '412', cat: 'Books', desc: 'Study/学习' },
      { id: '409', cat: 'Other', desc: 'Misc/其他' },
      { id: '424', cat: 'Movies', desc: 'Movies/官方-电影' },
      { id: '425', cat: 'TV', desc: 'TV Series/官方-电视剧' },
      { id: '426', cat: 'TV', desc: 'TV Shows/官方-综艺' },
      {
        id: '427',
        cat: 'TV/Documentary',
        desc: 'Documentaries/官方-纪录片',
      },
      { id: '428', cat: 'TV/Anime', desc: 'Animations/官方-动漫' },
    ],
    modes: {
      search: ['q', 'imdbid'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
      'music-search': ['q'],
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
    {
      name: 'info_tpp',
      type: 'info',
      label: 'Results Per Page',
      default:
        'For best results, change the <b>Torrents per page:</b> setting to <b>100</b> on your account profile.',
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
      picktype: 0,
      search_area: '{{ if .Query.IMDBID }}4{{else}}0{{end}}',
      search_mode: 0,
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table.torrents > tbody > tr:not(:has(td.colhead))',
      after: 1,
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
      seeders: { selector: 'a[href$="#seeders"]', optional: true },
      leechers: { selector: 'a[href$="#leechers"]', optional: true },
      grabs: {
        selector: 'a[href^="viewsnatches.php?id="]',
        optional: true,
      },
      date: {
        selector: 'td:nth-child(9):not(:has(span))',
        optional: true,
        filters: [
          { name: 'append', args: ' +08:00' },
          { name: 'dateparse', args: '2006-01-0215:04:05 -07:00' },
        ],
      },
      size: { selector: 'td:nth-child(10)' },
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
