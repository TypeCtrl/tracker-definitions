import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'hdsky',
  name: 'HDSky',
  description: 'A chinese tracker',
  language: 'zh-cn',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://hdsky.me'],
  caps: {
    categorymappings: [
      { id: 401, cat: 'Movies', desc: 'Movies/电影' },
      { id: 404, cat: 'TV/Documentary', desc: 'Documentaries/纪录片' },
      { id: 410, cat: 'Movies', desc: 'iPad/iPad影视' },
      { id: 405, cat: 'TV/Anime', desc: 'Animations/动漫' },
      { id: 402, cat: 'TV', desc: 'TV Series/剧集' },
      { id: 403, cat: 'TV', desc: 'TV Shows/综艺' },
      { id: 406, cat: 'Audio/Video', desc: 'Music Videos/音乐MV' },
      { id: 407, cat: 'TV/Sport', desc: 'Sports/体育' },
      { id: 408, cat: 'Audio', desc: 'HQ Audio/无损音乐' },
      { id: 409, cat: 'Other', desc: 'Misc/其他' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
    },
  },
  login: {
    path: 'login.php',
    method: 'form',
    form: 'form[action="takelogin.php"]',
    captcha: {
      type: 'image',
      selector: 'img[alt="CAPTCHA"]',
      input: 'imagestring',
    },
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'td.embedded:has(h2:contains("failed"))' }],
    test: { path: '/torrents.php' },
  },
  ratio: {
    path: '/torrents.php',
    selector: 'table#info_block',
    filters: [{ name: 'regexp', args: 'Ratio:\\s(.*?)\\s\\s' }],
  },
  download: { method: 'post' },
  search: {
    paths: [{ path: '/torrents.php' }],
    inputs: {
      $raw: '{{range .Categories}}cat{{.}}=1&{{end}}',
      search:
        '{{if .Query.IMDBID}}{{ .Query.IMDBID }}{{else}}{{ .Keywords }}{{end}}',
      incldead: '1',
      spstate: '0',
      inclbookmarked: '0',
      search_area: '{{ if .Query.IMDBID }}4{{else}}0{{end}}',
      search_mode: '0',
    },
    rows: {
      selector: 'table.torrents > tbody > tr:has(table.torrentname)',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      title: {
        selector: 'a[title][href^="details.php?id="]',
        attribute: 'title',
      },
      category: {
        selector: 'a[href^="?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      details: {
        selector: 'a[title][href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'form[action^="download.php?id="]',
        attribute: 'action',
      },
      imdb: {
        selector: 'a[href^="http://www.imdb.com/title/tt"]',
        attribute: 'href',
      },
      size: { selector: 'td.rowfollow:nth-child(5)' },
      grabs: { selector: 'td.rowfollow:nth-child(8)' },
      seeders: { selector: 'td.rowfollow:nth-child(6)' },
      leechers: { selector: 'td.rowfollow:nth-child(7)' },
      date: {
        selector: 'td.rowfollow:nth-child(4) > span[title]',
        attribute: 'title',
        filters: [
          { name: 'append', args: ' +08:00' },
          { name: 'dateparse', args: '2006-01-02 15:04:05 -07:00' },
        ],
      },
      downloadvolumefactor: {
        case: {
          'img.pro_free': '0',
          'img.pro_free2up': '0',
          'img.pro_50pctdown': '0.5',
          'img.pro_50pctdown2up': '0.5',
          'img.pro_30pctdown': '0.3',
          '*': '1',
        },
      },
      uploadvolumefactor: {
        case: {
          'img.pro_50pctdown2up': '2',
          'img.pro_free2up': '2',
          'img.pro_2up': '2',
          '*': '1',
        },
      },
      description: { selector: 'td:nth-child(2)', remove: 'a, img' },
    },
  },
};
