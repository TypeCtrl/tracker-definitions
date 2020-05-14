import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'pthome',
  name: 'PThome',
  description: 'PThome is a CHINESE Private Torrent Tracker for 0DAY / GENERAL',
  language: 'zh-CN',
  type: 'private',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['https://www.pthome.net/'],
  caps: {
    categorymappings: [
      { id: '401', cat: 'Movies', desc: 'Movies(电影)' },
      { id: '404', cat: 'TV/Documentary', desc: 'Documentaries(记录片)' },
      { id: '405', cat: 'TV/Anime', desc: 'Animations(动漫)' },
      { id: '402', cat: 'TV', desc: 'TV Series(电视剧)' },
      { id: '403', cat: 'TV/Other', desc: 'TV Shows(综艺)' },
      { id: '406', cat: 'Audio/Video', desc: 'Music Videos(MV)' },
      { id: '407', cat: 'TV/Sport', desc: 'Sports(体育)' },
      { id: '408', cat: 'Audio/Lossless', desc: 'HQ Audio(音乐)' },
      { id: '410', cat: 'Console', desc: 'Games(游戏)' },
      { id: '411', cat: 'PC', desc: 'Software(软件)' },
      { id: '412', cat: 'Books', desc: 'Study(学习)' },
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
        "<ol><li>Login to this tracker with your browser<li>Open the <b>DevTools</b> panel by pressing <b>F12</b><li>Select the <b>Network</b> tab<li>Click on the <b>Doc</b> button<li>Refresh the page by pressing <b>F5</b><li>Select the <b>Headers</b> tab<li>Find <b>'cookie:'</b> in the <b>Request Headers</b> section<li><b>Select</b> and <b>Copy</b> the whole cookie string <i>(everything after 'cookie: ')</i> and <b>Paste</b> here.</ol>",
    },
  ],
  login: {
    method: 'cookie',
    inputs: { cookie: '{{ .Config.cookie }}' },
    test: { path: 'index.php' },
  },
  ratio: {
    path: 'index.php',
    selector: 'table tr td.bottom',
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
      search: '{{ if .Query.IMDBID }}{{ .Query.IMDBID }}{{else}}{{ .Keywords }}{{end}}',
      search_area: '{{ if .Query.IMDBID }}4{{else}}0{{end}}',
      search_mode: 0,
    },
    rows: {
      selector: 'table.torrents tr:has(a[href^="?cat="])',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      title: { selector: 'td.torrents-box a', attribute: 'title' },
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
        selector: 'a[href*="www.imdb.com/title/tt"]',
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
