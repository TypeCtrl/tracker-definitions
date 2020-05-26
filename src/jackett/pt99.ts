import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'pt99',
  name: 'PT99',
  description: 'PT99 is a CHINESE Private Torrent Tracker for 0DAY / GENERAL',
  language: 'zh-CN',
  type: 'private',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['https://pt.j99.info/'],
  caps: {
    categorymappings: [
      { id: '401', cat: 'Movies', desc: 'Movies(电影)' },
      { id: '404', cat: 'TV/Documentary', desc: 'Documentaries(记录片)' },
      { id: '405', cat: 'TV/Anime', desc: 'Animations(动漫)' },
      { id: '402', cat: 'TV', desc: 'TV Series(电视剧)' },
      { id: '403', cat: 'TV/Other', desc: 'TV Shows(电视节目)' },
      { id: '406', cat: 'Audio/Video', desc: 'Music Videos(音乐视频)' },
      { id: '407', cat: 'TV/Sport', desc: 'Sports(体育节目)' },
      { id: '408', cat: 'Audio/Lossless', desc: 'HQ Audio(高品质音频)' },
      { id: '410', cat: 'Audio', desc: 'Music(音乐)' },
      { id: '411', cat: 'PC', desc: 'Software(软件)' },
      { id: '412', cat: 'Books', desc: 'Document(文档)' },
      { id: '413', cat: 'PC/Games', desc: 'PC_Game(PC游戏)' },
      { id: '414', cat: 'Console', desc: 'Other_Game(其他游戏)' },
      { id: '409', cat: 'Other', desc: 'Misc(其他)' },
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
        "<ol><li>Login to this tracker with your browser<li>Open the <b>DevTools</b> panel by pressing <b>F12</b><li>Select the <b>Network</b> tab<li>Click on the <b>Doc</b> button<li>Refresh the page by pressing <b>F5</b><li>Click on the first entry in the Left panel under the <b>Name</b> column<li>Select the <b>Headers</b> tab on the Right panel<li>Find <b>'cookie:'</b> in the <b>Request Headers</b> section<li><b>Select</b> and <b>Copy</b> the whole cookie string <i>(everything after 'cookie: ')</i> and <b>Paste</b> here.</ol>",
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
  ratio: {
    path: 'index.php',
    selector: 'table#info_block',
    filters: [
      { name: 'replace', args: ['分享率:', 'Ratio:'] },
      { name: 'regexp', args: 'Ratio:\\s(.*?)\\s\\s' },
    ],
  },
  search: {
    paths: [{ path: 'torrents.php' }],
    inputs: {
      $raw: '{{ range .Categories }}cat{{.}}=1&{{end}}',
      incldead: 0,
      spstate: 0,
      inclbookmarked: 0,
      search: '{{ if .Query.IMDBID }}{{ .Query.IMDBID }}{{else}}{{ .Keywords }}{{end}}',
      search_area: '{{ if .Query.IMDBID }}1{{else}}0{{end}}',
      search_mode: 0,
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table.torrents tr:has(a[href^="?cat="])',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      title: { selector: 'td.progresstd a', attribute: 'title' },
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
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
        filters: [{ name: 'replace', args: ['details.php', 'download.php'] }],
      },
      imdb: {
        selector: 'a[href*="imdb.com/title/tt"]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(5)' },
      grabs: { selector: 'td:nth-child(8)' },
      seeders: { selector: 'td:nth-child(6)' },
      leechers: { selector: 'td:nth-child(7)' },
      date: {
        selector: 'td:nth-child(4) span',
        attribute: 'title',
        filters: [{ name: 'dateparse', args: '2006-01-02 15:04:05' }],
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
