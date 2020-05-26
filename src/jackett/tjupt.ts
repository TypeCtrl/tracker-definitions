import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'tjupt',
  name: 'TJUPT',
  description: 'TJUPT is a CHINESE Private Torrent Tracker for GENERAL',
  language: 'zh-CN',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://tjupt.org/'],
  caps: {
    categorymappings: [
      { id: '401', cat: 'Movies', desc: 'Movies电影' },
      { id: '402', cat: 'TV', desc: 'TV Series剧集' },
      { id: '403', cat: 'TV', desc: 'TV Shows综艺' },
      { id: '404', cat: 'TV/Documentary', desc: 'Documentaries资料' },
      { id: '405', cat: 'TV/Anime', desc: 'Animations动漫' },
      { id: '406', cat: 'Audio/Video', desc: 'Music Videos音乐' },
      { id: '407', cat: 'TV/Sport', desc: 'Sports体育' },
      { id: '408', cat: 'PC', desc: 'Software软件' },
      { id: '409', cat: 'Console', desc: 'Games游戏' },
      { id: '411', cat: 'Books', desc: 'Books纪录片' },
      { id: '412', cat: 'PC/Phone-Other', desc: 'Mobile移动视频' },
      { id: '410', cat: 'Other', desc: 'Misc其他' },
    ],
    modes: {
      search: ['q', 'imdbid'],
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
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      logout: 'forever',
      securelogin: '',
    },
    error: [{ selector: 'td.embedded:has(h2:contains("失败"))' }],
    test: { path: 'index.php', selector: 'a[href*="logout.php"]' },
  },
  search: {
    paths: [{ path: 'torrents.php' }],
    inputs: {
      $raw: '{{ range .Categories }}cat{{.}}=1&{{end}}',
      search: '{{ if .Query.IMDBID }}{{ .Query.IMDBID }}{{else}}{{ .Keywords }}{{end}}',
      incldead: 0,
      picktype: 0,
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
        selector: 'a[href*="cat="]',
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
        selector: 'a[href*="imdb.com/title/tt"]',
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
          'font.free': 0,
          'font.twoupfree': 0,
          'font.halfdown': 0.5,
          'font.twouphalfdown': 0.5,
          'font.thirtypercent': 0.3,
          '*': 1,
        },
      },
      uploadvolumefactor: {
        case: {
          'font.twouphalfdown': 2,
          'font.twoupfree': 2,
          'font.twoup': 2,
          '*': 1,
        },
      },
      description: { selector: 'td:nth-child(2)', remove: 'a, img' },
    },
  },
  source: 'jackett',
};
