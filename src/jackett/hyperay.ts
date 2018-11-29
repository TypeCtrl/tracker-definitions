import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'hyperay',
  name: 'Hyperay',
  description:
    'Hyperay is a CHINESE Private Torrent Tracker for HD MOVIES / TV',
  language: 'zh-cn',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://www.hyperay.org'],
  legacylinks: ['https://www.hyperay.cc'],
  caps: {
    categorymappings: [
      { id: 410, cat: 'Movies/HD', desc: 'Movies 1080p' },
      { id: 411, cat: 'Movies/HD', desc: 'Movies 720p' },
      { id: 401, cat: 'Movies/BluRay', desc: 'Movies Blu-ray' },
      { id: 415, cat: 'Movies', desc: 'Movies REMUX' },
      { id: 416, cat: 'Movies/3D', desc: 'Movies 3D' },
      { id: 414, cat: 'Movies/DVD', desc: 'Movies DVD' },
      { id: 412, cat: 'Movies/WEBDL', desc: 'Movies WEB-DL' },
      { id: 413, cat: 'Movies/SD', desc: 'Movies HDTV' },
      { id: 417, cat: 'Movies/Other', desc: 'Movies iPad' },
      { id: 402, cat: 'TV', desc: 'TV Series' },
      { id: 403, cat: 'TV', desc: 'TV Shows' },
      { id: 404, cat: 'TV/Documentary', desc: 'Documentaries' },
      { id: 405, cat: 'TV/Anime', desc: 'Animations' },
      { id: 406, cat: 'Audio/Video', desc: 'Music Videos' },
      { id: 407, cat: 'TV/Sport', desc: 'Sports' },
      { id: 408, cat: 'Audio', desc: 'HQ Audio' },
      { id: 418, cat: 'Books', desc: 'Book' },
      { id: 409, cat: 'Other', desc: 'Misc' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
    },
  },
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      authcode: '',
    },
    error: [{ selector: 'td.embedded:has(h2:contains("failed"))' }],
    test: { path: '/torrents.php' },
  },
  search: {
    paths: [{ path: '/torrents.php', method: 'post' }],
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
      selector: 'table.torrents > tbody > tr[class]',
      filters: [{ name: 'andmatch' }],
    },
    error: [
      {
        selector:
          'b:contains("This is a must-read message, please read before other operations!")',
      },
    ],
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
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      imdb: {
        selector: 'a[href^="http://www.imdb.com/title/"]',
        attribute: 'href',
      },
      banner: {
        selector: 'a[title][onmouseover][href^="details.php?id="]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: "showmenu\\(this,'.*','(.*)'\\);" }],
      },
      size: { selector: 'td.rowfollow:nth-child(6)' },
      grabs: { selector: 'td.rowfollow:nth-child(9)' },
      seeders: { selector: 'td.rowfollow:nth-child(7)' },
      leechers: { selector: 'td.rowfollow:nth-child(8)' },
      date: {
        selector: 'td.rowfollow:nth-child(5) > span[title]',
        attribute: 'title',
        filters: [
          { name: 'append', args: ' +08:00' },
          { name: 'dateparse', args: '2006-01-02 15:04:05 -07:00' },
        ],
      },
      downloadvolumefactor: { case: { '*': '1' } },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
};
