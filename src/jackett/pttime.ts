import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'pttime',
  name: 'PTTime',
  description: 'PTTime is a ratioless CHINESE Private Torrent Tracker for HD MOVIES / TV / GENERAL',
  language: 'zh-CN',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://www.pttime.org/'],
  caps: {
    categorymappings: [
      { id: '401', cat: 'Movies', desc: 'Movies(电影)' },
      { id: '402', cat: 'TV', desc: 'TV Series(电视剧)' },
      { id: '403', cat: 'TV', desc: 'TV Shows(综艺)' },
      { id: '404', cat: 'TV/Documentary', desc: 'Documentaries(纪录片)' },
      { id: '406', cat: 'PC/Games', desc: 'Games(游戏)' },
      { id: '408', cat: 'Audio', desc: 'Music(音乐)' },
      { id: '411', cat: 'Other', desc: 'Ability(技能)' },
      { id: '412', cat: 'Other', desc: 'School(考试)' },
      { id: '413', cat: 'Books', desc: 'Book(图书)' },
      { id: '420', cat: 'PC', desc: 'IT(计算机)' },
      { id: '430', cat: 'TV/Anime', desc: 'Animate(3D动画)' },
      { id: '431', cat: 'TV/Anime', desc: 'ACGN(二次元)' },
      { id: '432', cat: 'TV/Other', desc: 'Baby(婴幼)' },
      { id: '440', cat: 'XXX', desc: 'AV(步兵)' },
      { id: '441', cat: 'XXX', desc: 'Sex(骑兵)' },
      { id: '442', cat: 'XXX', desc: 'III(三级、写真)' },
      { id: '450', cat: 'Other', desc: 'Resource(资源)' },
      { id: '490', cat: 'Other', desc: 'Other(其它)' },
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
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'freeleech',
      type: 'checkbox',
      label: 'Search freeleech only',
      default: false,
    },
    {
      name: 'info_tpp',
      type: 'info',
      label: 'Results Per Page',
      default: 'For best results, change the <b>Torrents per page:</b> setting to <b>100</b> on your account profile.',
    },
  ],
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      loginmethod: 'username',
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      dutime: 'month',
      ssl: 'yes',
    },
    error: [
      { selector: 'td.embedded:has(h2:contains("失败"))' },
      { selector: 'td.embedded:has(h2:contains("Failed"))' },
    ],
    test: { path: 'index.php', selector: 'a[href="logout.php"]' },
  },
  search: {
    paths: [{ path: 'torrents.php' }],
    inputs: {
      $raw: '{{ range .Categories }}cat{{.}}=1&{{end}}',
      search: '{{ if .Query.IMDBID }}{{ .Query.IMDBID }}{{ else }}{{ .Keywords }}{{ end }}',
      incldead: 0,
      spstate: '{{ if .Config.freeleech }}2{{ else }}0{{ end }}',
      search_area: '{{ if .Query.IMDBID }}1{{ else }}0{{ end }}',
      search_mode: 0,
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
      poster: { selector: 'td.torrentimg > img', attribute: 'src' },
      imdb: {
        selector: 'a[href*="imdb.com/title/tt"]',
        attribute: 'href',
      },
      date: {
        selector: 'td:nth-child(5):not(:has(span))',
        optional: true,
        filters: [
          { name: 'append', args: ' +08:00' },
          { name: 'dateparse', args: '2006-01-0215:04:05 -07:00' },
        ],
      },
      size: { selector: 'td:nth-child(6)' },
      seeders: { selector: 'td:nth-child(7)' },
      leechers: { selector: 'td:nth-child(8)' },
      grabs: { selector: 'td:nth-child(9)' },
      downloadvolumefactor: {
        case: {
          'font.promotion.free': 0,
          'font.promotion.twoupfree': 0,
          'font.promotion.halfdown': 0.5,
          'font.promotion.twouphalfdown': 0.5,
          'font.promotion.thirtypercent': 0.3,
          '*': 1,
        },
      },
      uploadvolumefactor: {
        case: {
          'font.promotion.twoup': 2,
          'font.promotion.twoupfree': 2,
          'font.promotion.twouphalfdown': 2,
          '*': 1,
        },
      },
      description: { selector: 'td:nth-child(2)', remove: 'a, img' },
    },
  },
  source: 'jackett',
};
