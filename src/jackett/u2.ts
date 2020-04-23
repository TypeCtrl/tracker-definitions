import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'u2',
  name: 'U2',
  description: 'U2 (U2分享園@動漫花園) is a CHINESE Private Torrent Tracker for ANIME',
  language: 'zh-CN',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://u2.dmhy.org/'],
  caps: {
    categorymappings: [
      { id: '9', cat: 'TV/Anime', desc: 'U2-Rip' },
      { id: '411', cat: 'TV/Anime', desc: 'U2-RBD' },
      { id: '413', cat: 'TV/Anime', desc: 'Web' },
      { id: '12', cat: 'TV/Anime', desc: 'BDRip' },
      { id: '13', cat: 'TV/Anime', desc: 'DVDRip' },
      { id: '14', cat: 'TV/Anime', desc: 'HDTVRip' },
      { id: '15', cat: 'TV/Anime', desc: 'DVDISO' },
      { id: '16', cat: 'TV/Anime', desc: 'BDMV' },
      { id: '17', cat: 'TV/Anime', desc: 'LQRip' },
      { id: '410', cat: 'TV/Anime', desc: '外挂结构 (TV Series)' },
      { id: '412', cat: 'TV/Anime', desc: '加流重灌 (Modded Blu-rays)' },
      { id: '21', cat: 'Books', desc: 'Raw Books' },
      { id: '22', cat: 'Books', desc: '港译漫画 (HK Books)' },
      { id: '23', cat: 'Books', desc: '台译漫画 (TW Books)' },
      { id: '30', cat: 'Audio', desc: 'Lossless Music' },
      { id: '40', cat: 'Other', desc: 'Others' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
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
    method: 'cookie',
    inputs: { cookie: '{{ .Config.cookie }}' },
    test: { path: 'index.php', selector: 'a[href^="logout.php?key="]' },
  },
  search: {
    paths: [{ path: 'torrents.php' }],
    inputs: {
      $raw: '{{ range .Categories }}cat{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      incldead: 0,
      spstate: 0,
      search_area: 0,
      search_mode: 0,
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
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
      date: {
        selector: 'td:nth-child(4):not(time[title]) > time',
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
          'img.pro_free': 0,
          'img.pro_free2up': 0,
          'img.pro_custom': 0,
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
          'img.pro_custom': 3,
          '*': 1,
        },
      },
      description: { selector: 'td:nth-child(2)', remove: 'a, img' },
    },
  },
  source: 'jackett',
};