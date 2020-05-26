import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'ydypt',
  name: 'YDYPT',
  description: 'YDYPT is a CHINESE Private Torrent Tracker for 3X',
  language: 'zh-CN',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://pt.hdbd.us/'],
  caps: {
    categorymappings: [
      { id: '420', cat: 'Movies/BluRay', desc: '电影BluRay' },
      { id: '423', cat: 'Movies/HD', desc: '电影HD' },
      { id: '424', cat: 'TV/HD', desc: '剧集BluRay' },
      { id: '421', cat: 'TV/HD', desc: '剧集HD' },
      { id: '506', cat: 'XXX', desc: '有码 AV BluRay' },
      { id: '500', cat: 'XXX', desc: '有码 AV HD' },
      { id: '507', cat: 'XXX', desc: '无码 AV BluRay' },
      { id: '501', cat: 'XXX', desc: '无码 AV HD' },
      { id: '503', cat: 'XXX', desc: '欧美 AV' },
      { id: '502', cat: 'XXX', desc: '国产自拍' },
      { id: '509', cat: 'XXX', desc: '里番 H-Anime' },
      { id: '422', cat: 'XXX', desc: '其他' },
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
