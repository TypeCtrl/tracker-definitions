import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'ourbits',
  name: 'Ourbits',
  description: 'Ourbits (HDPter) is a CHINESE Private Torrent Tracker for HD MOVIES / TV / GENERAL',
  language: 'zh-CN',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://ourbits.club/'],
  caps: {
    categorymappings: [
      { id: '401', cat: 'Movies', desc: 'Movies' },
      { id: '402', cat: 'Movies/3D', desc: 'Movies 3D' },
      { id: '405', cat: 'TV', desc: 'TV Packs' },
      { id: '410', cat: 'TV/Documentary', desc: 'Documentaries' },
      { id: '411', cat: 'TV/Anime', desc: 'Animations' },
      { id: '412', cat: 'TV', desc: 'TV Episodes' },
      { id: '413', cat: 'TV', desc: 'TV Shows' },
      { id: '414', cat: 'Audio/Video', desc: 'Music Videos' },
      { id: '415', cat: 'TV/Sport', desc: 'Sports' },
      { id: '416', cat: 'Audio', desc: 'Music' },
      { id: '419', cat: 'TV', desc: 'Concert' },
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
    { name: '2facode', type: 'text', label: '2FA code' },
    {
      name: 'info_2fa',
      type: 'info',
      label: 'About 2FA code',
      default:
        'Only fill in the <b>2FA code</b> box if you have enabled <b>2FA</b> on the OurBits Web Site. Otherwise just leave it empty.',
    },
  ],
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      '2fa_code': '{{ .Config.2facode }}',
      logout: '',
      securelogin: '',
      ssl: 'yes',
      trackerssl: 'yes',
    },
    error: [
      {
        selector: 'td.embedded:has(h2:contains("失败"))',
        message: { selector: 'td.text' },
      },
    ],
    test: { path: 'index.php', selector: 'a[href="logout.php"]' },
  },
  ratio: {
    path: 'index.php',
    selector: 'span.medium:has(a[href="logout.php"])',
    filters: [
      { name: 'replace', args: ['分享率：', 'Ratio: '] },
      { name: 'regexp', args: 'Ratio: (\\d+)' },
    ],
  },
  search: {
    paths: [{ path: 'torrents.php' }],
    inputs: {
      $raw: '{{ range .Categories }}cat{{.}}=1&{{end}}',
      search: '{{ if .Query.IMDBID }}{{ .Query.IMDBID }}{{else}}{{ .Keywords }}{{end}}',
      incldead: 0,
      spstate: 0,
      search_area: '{{ if .Query.IMDBID }}4{{else}}0{{end}}',
      search_mode: 0,
    },
    rows: {
      selector: 'table.torrents > tbody > tr:has(table.torrentname)',
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
      date: {
        selector: 'td.rowfollow:nth-child(4) > span[title]',
        attribute: 'title',
        filters: [
          { name: 'append', args: ' +08:00' },
          { name: 'dateparse', args: '2006-01-02 15:04:05 -07:00' },
        ],
      },
      size: { selector: 'td.rowfollow:nth-child(5)' },
      seeders: { selector: 'td.rowfollow:nth-child(6)' },
      leechers: { selector: 'td.rowfollow:nth-child(7)' },
      grabs: { selector: 'td.rowfollow:nth-child(8)' },
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
      description: {
        selector: 'td.rowfollow:nth-child(2)',
        remove: 'a, img',
      },
    },
  },
  source: 'jackett',
};
