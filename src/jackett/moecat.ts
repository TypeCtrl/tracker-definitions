import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'moecat',
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
    },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    { name: '2facode', type: 'text', label: '2FA code' },
    {
      name: 'info_2fa',
      type: 'info',
      label: 'About 2FA code',
      default:
        'Only fill in the <b>2FA code</b> box if you have enabled <b>2FA</b> on the MoeCat Web Site. Otherwise just leave it empty.',
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
    path: 'login.php',
    method: 'form',
    form: 'form[action="takelogin.php"]',
    inputs: {
      logintype: 'username',
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      scode: '{{ .Config.2facode }}',
      thispagewidth: 'yes',
      logout: 720,
    },
    error: [
      { selector: 'td.embedded:has(h2:contains("姿势不正确"))' },
      { selector: 'td.embedded:has(h2:contains("登录失败"))' },
    ],
    test: { path: 'index.php', selector: 'a[href="logout.php"]' },
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
