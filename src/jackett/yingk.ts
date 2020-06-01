import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'yingk',
  name: 'YingK',
  description: 'YingK is a CHINESE Private Torrent Tracker for HD MOVIES / TV / GENERAL',
  language: 'zh-CN',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://yingk.com/'],
  caps: {
    categorymappings: [
      { id: '401', cat: 'Movies', desc: 'Movies/电影' },
      { id: '402', cat: 'TV', desc: 'TV Series/电视剧' },
      { id: '403', cat: 'TV', desc: 'TV Shows/综艺' },
      { id: '405', cat: 'TV/Anime', desc: 'Animations/动漫' },
      { id: '404', cat: 'TV/Documentary', desc: 'Documentaries/纪录片' },
      { id: '408', cat: 'Audio', desc: 'Music/音乐' },
      { id: '407', cat: 'TV/Sport', desc: 'Sports/体育' },
      { id: '406', cat: 'Audio/Video', desc: 'MusicVideo/MV' },
      { id: '412', cat: 'Books', desc: 'Study/学习' },
      { id: '409', cat: 'Other', desc: 'Misc/其他' },
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
      name: 'english_title',
      type: 'checkbox',
      label: 'Use English titles instead of Chinese ones (when available).',
      default: false,
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
    test: {
      path: 'index.php',
      selector: 'a[href^="userdetails.php?id="]',
    },
  },
  search: {
    paths: [{ path: 'torrents.php' }],
    inputs: {
      $raw: '{{ range .Categories }}cat{{.}}=1&{{end}}',
      search: '{{ if .Query.IMDBID }}{{ .Query.IMDBID }}{{else}}{{ .Keywords }}{{end}}',
      incldead: 0,
      spstate: 0,
      picktype: 0,
      search_area: '{{ if .Query.IMDBID }}5{{else}}0{{end}}',
      search_mode: 0,
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table.torrents > tbody > tr:not(:has(td[class="colhead"]))',
      after: 1,
    },
    fields: {
      category: {
        selector: 'a[href^="?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title_raw: {
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
      seeders: { selector: 'td:nth-child(3)' },
      leechers: {
        selector: 'td:nth-child(4)',
        filters: [{ name: 'replace', args: ['-1', '0'] }],
      },
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
      title_english: {
        remove: 'a, img, b, span',
        selector: 'td:nth-child(2)',
      },
      title: {
        text:
          '{{ if and .Config.english_title .Result.title_english }}{{ .Result.title_english }}{{ else }}{{ .Result.title_raw }}{{ end }}',
      },
    },
  },
  source: 'jackett',
};
