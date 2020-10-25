import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'hdstreet',
  name: 'HDStreet',
  description: 'HDStreet is a CHINESE Private Torrent Tracker for HD MOVIES / TV',
  language: 'zh-CN',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://hdstreet.club/'],
  caps: {
    categorymappings: [
      {
        id: '401',
        cat: 'Movies',
        desc: 'Movies(D)/华语电影',
        default: true,
      },
      {
        id: '403',
        cat: 'Movies',
        desc: 'Movies(F)/外语电影',
        default: true,
      },
      {
        id: '402',
        cat: 'TV',
        desc: 'TV Series(D)/华语电视剧',
        default: true,
      },
      {
        id: '404',
        cat: 'TV',
        desc: 'TV Series(F)/外语电视剧',
        default: true,
      },
      {
        id: '406',
        cat: 'TV',
        desc: 'TV Shows(D)/华语综艺',
        default: true,
      },
      {
        id: '405',
        cat: 'TV',
        desc: 'TV Shows(F)/外语综艺',
        default: true,
      },
      {
        id: '408',
        cat: 'TV/Anime',
        desc: 'TV Anime(D)/华语动漫',
        default: true,
      },
      {
        id: '411',
        cat: 'TV/Anime',
        desc: 'TV Anime(F)/外语动漫',
        default: true,
      },
      {
        id: '409',
        cat: 'Audio/Video',
        desc: 'MusicVideo(D)/华语音乐MV',
        default: true,
      },
      {
        id: '412',
        cat: 'Audio/Video',
        desc: 'MusicVideo(F)/外语音乐MV',
        default: true,
      },
      {
        id: '407',
        cat: 'TV/Documentary',
        desc: 'Documentaries(D)/华语纪录片',
        default: true,
      },
      {
        id: '413',
        cat: 'TV/Documentary',
        desc: 'Documentaries(F)/外语纪录片',
        default: true,
      },
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
      name: 'freeleech',
      type: 'checkbox',
      label: 'Search freeleech only',
      default: false,
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 4,
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
      default: 'For best results, change the <b>Torrents per page:</b> setting to <b>100</b> on your account profile.',
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
      logout: '',
      thispagewidth: 'yes',
    },
    error: [{ selector: 'td.embedded:has(h2:contains("姿势不正确"))' }],
    test: { path: 'index.php', selector: 'a[href="logout.php"]' },
  },
  search: {
    paths: [
      { path: 'torrents.php', categories: [401, 402, 406, 408, 409, 407] },
      {
        path: 'torrentsasia.php',
        categories: [403, 404, 405, 411, 412, 413],
      },
    ],
    inputs: {
      $raw: '{{ range .Categories }}cat{{.}}=1&{{end}}',
      search: '{{ if .Query.IMDBID }}{{ .Query.IMDBID }}{{ else }}{{ .Keywords }}{{ end }}',
      incldead: 0,
      spstate: '{{ if .Config.freeleech }}8{{ else }}0{{ end }}',
      picktype: 0,
      search_area: '{{ if .Query.IMDBID }}5{{ else }}0{{ end }}',
      search_mode: 0,
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    rows: {
      selector:
        'table.torrents > tbody > tr:has(a[href^="details.php?id="]), table.torrents > tbody > tr:has(a[href^="comment.php?"])',
      after: 1,
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
        optional: true,
      },
      seeders: { selector: 'td:nth-child(3)' },
      leechers: { selector: 'td:nth-child(4)' },
      grabs: { selector: 'td:nth-child(5)' },
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
