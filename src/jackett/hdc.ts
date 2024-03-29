import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'hdc',
  name: 'HDC',
  description: 'HDC (HDCiTY) is a CHINESE Private Torrent Tracker for HD MOVIES / TV / GENERAL',
  language: 'zh-CN',
  type: 'private',
  encoding: 'UTF-8',
  links: [
    'https://hdcity.city/',
    'https://hdcity.work/',
    'https://hdcity.leniter.org/',
    'https://hdcity4.leniter.org/',
  ],
  caps: {
    categorymappings: [
      { id: '401', cat: 'Movies', desc: 'Movies/电影' },
      { id: '402', cat: 'TV', desc: 'Series/剧集' },
      { id: '404', cat: 'TV/Documentary', desc: 'Doc/档案记录' },
      { id: '405', cat: 'TV/Anime', desc: 'Anim/动漫' },
      { id: '403', cat: 'TV', desc: 'Shows/节目' },
      { id: '406', cat: 'Audio/Video', desc: 'MV/音乐视频' },
      { id: '407', cat: 'TV/Sport', desc: 'Sports/体育' },
      { id: '408', cat: 'Audio', desc: 'Audio/音频' },
      { id: '727', cat: 'XXX', desc: 'XXX/家长指引' },
      { id: '728', cat: 'Other', desc: 'Edu/文档/教材' },
      { id: '729', cat: 'PC', desc: 'Soft/软件' },
      { id: '409', cat: 'Other', desc: 'Other/其他' },
    ],
    modes: {
      search: ['q'],
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
      options: { '4': 'created', '5': 'size', '7': 'seeders' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'desc',
      options: { desc: 'desc', asc: 'asc' },
    },
    {
      name: 'info_Results',
      type: 'info',
      label: 'Settings for Results',
      default:
        'To use this indexer please set the following on your HDC account <b>profile</b>:<li><i>Site Language:</i><b> English</b><li><i>Torrent List Profile: </i><b>Default Modern [preview]</b><li><i>Time Type: </i><b>Time Added</b><li><i>Torrents per page:</i><b> 100</b>',
    },
  ],
  login: {
    method: 'cookie',
    inputs: { cookie: '{{ .Config.cookie }}' },
    test: { path: 'pt', selector: 'a[href^="logout?key="]' },
  },
  search: {
    paths: [{ path: 'pt' }],
    inputs: {
      $raw: '{{ range .Categories }}cat{{.}}=1&{{end}}',
      iwannaseethis: '{{ if .Query.IMDBID }}{{ .Query.IMDBIDShort }}{{ else }}{{ .Keywords }}{{ end }}',
      incldead: 0,
      spstate: '{{ if .Config.freeleech }}2{{ else }}0{{ end }}',
      search_area: '{{ if .Query.IMDBID }}4{{ else }}0{{ end }}',
      search_mode: 0,
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    rows: { selector: 'div.trblock' },
    fields: {
      title: { selector: 'div.trtop a[href^="t-"]' },
      category: {
        selector: 'div.trm',
        attribute: 'style',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      details: {
        selector: 'div.trtop a[href^="t-"]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download?id="]',
        attribute: 'href',
      },
      poster: {
        selector: 'div.trp:not(:has(img[src$="poster.jpg"])) img',
        attribute: 'src',
      },
      imdb: {
        selector: 'a[href*="imdb.com/title/tt"]',
        attribute: 'href',
      },
      size: { selector: 'div.trbo div:nth-last-child(8)', remove: 'i' },
      seeders: {
        selector: 'div.trbo div:nth-last-child(7)',
        optional: true,
        filters: [{ name: 're_replace', args: ['\\s', '0'] }],
      },
      leechers: {
        selector: 'div.trbo div:nth-last-child(6)',
        optional: true,
        filters: [{ name: 're_replace', args: ['\\s', '0'] }],
      },
      grabs: {
        selector: 'div.trbo div:nth-last-child(5)',
        optional: true,
        filters: [{ name: 're_replace', args: ['\\s', '0'] }],
      },
      date: {
        remove: 'a, span',
        selector: 'div[style="float:right;"]',
        filters: [
          { name: 'replace', args: ['@', ''] },
          { name: 'append', args: ' +08:00' },
          { name: 'dateparse', args: '2006-01-02 15:04:05 -07:00' },
        ],
      },
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
    },
  },
  source: 'jackett',
};
