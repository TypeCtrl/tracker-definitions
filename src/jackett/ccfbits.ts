import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'ccfbits',
  name: 'CCFBits',
  description:
    'CCFBits is a CHINESE Private Torrent Tracker for HD MOVIES / TV',
  language: 'zh-cn',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://ccfbits.org/'],
  caps: {
    categorymappings: [
      { id: 39, cat: 'Movies/HD', desc: 'HD-DVD原盘' },
      { id: 40, cat: 'Movies/BluRay', desc: 'Blu-ray原盘' },
      { id: 30, cat: 'Movies/HD', desc: '高清电影1080p' },
      { id: 2, cat: 'Movies/HD', desc: '高清电影720p' },
      { id: 7, cat: 'TV/HD', desc: '高清欧美剧' },
      { id: 32, cat: 'TV/HD', desc: '高清国产剧' },
      { id: 34, cat: 'TV/HD', desc: '高清港台剧' },
      { id: 36, cat: 'TV/HD', desc: '高清日韩剧' },
      { id: 12, cat: 'TV/Documentary', desc: '高清纪录片' },
      { id: 11, cat: 'TV/Sport', desc: '高清体育' },
      { id: 23, cat: 'TV/Anime', desc: '高清动漫' },
      { id: 4, cat: 'Audio/Video', desc: '高清MV/综艺' },
      { id: 38, cat: 'TV/HD', desc: '欧美剧包' },
      { id: 33, cat: 'TV/HD', desc: '国产剧包' },
      { id: 35, cat: 'TV/HD', desc: '港台剧包' },
      { id: 37, cat: 'TV/HD', desc: '日韩剧包' },
      { id: 43, cat: 'TV/SD', desc: 'HR_HDTV' },
      { id: 20, cat: 'Movies/DVD', desc: 'DVD' },
      { id: 42, cat: 'Movies/SD', desc: 'XviD' },
      { id: 3, cat: 'Audio', desc: '无损音乐' },
      { id: 22, cat: 'Other', desc: '杂项' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  login: {
    path: '/login.php',
    method: 'form',
    form: 'form[action="takelogin.php"]',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'td.embedded:has(h2:contains("登录失败"))' }],
    test: { path: '/browse.php' },
  },
  search: {
    paths: [{ path: '/browse.php', method: 'get' }],
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      incldead: '1',
      d: 'DESC',
      sort: 'added',
    },
    rows: {
      selector:
        'table[border="1"][cellpadding="5"] > tbody > tr:has(a[href^="details.php?id="])',
    },
    fields: {
      title: {
        selector: 'a[title][href^="details.php?id="]',
        attribute: 'title',
        filters: [{ name: 'split', args: ['\n', 0] }],
      },
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php/"]',
        attribute: 'href',
      },
      imdb: {
        optional: true,
        selector: 'a[href^="http://www.imdb.com/title/"]',
        attribute: 'href',
      },
      files: { selector: 'a[href$="&filelist=1"]' },
      grabs: {
        selector: 'a[href^="snatches.php?id"]',
        filters: [{ name: 'replace', args: ['次', ''] }],
      },
      size: { selector: 'td:nth-child(7)', remove: 'a' },
      seeders: { selector: 'td:nth-child(8)' },
      leechers: { selector: 'td:nth-child(9)' },
      date: {
        selector: 'td:nth-child(5)',
        filters: [
          { name: 'append', args: ' +08:00' },
          { name: 'dateparse', args: '2006-01-0215:04:05 -07:00' },
        ],
      },
      downloadvolumefactor: {
        case: {
          'font[color="#C20603"]:contains("免费")': '0',
          'font:has([src="/pic/arrowdown1.gif"]):contains("0.5x")': '0.5',
          '*': '1',
        },
      },
      uploadvolumefactor: { case: { '*': '1' } },
      description: {
        selector: 'td:nth-child(2) > table > tbody > tr:nth-child(2)',
        remove: 'a, img',
      },
    },
  },
};
