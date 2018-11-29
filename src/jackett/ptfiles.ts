import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'ptfiles',
  name: 'PTFiles',
  description: 'PTFiles (PTF) is a Private site for TV / MOVIES / GENERAL',
  language: 'en-us',
  type: 'private',
  encoding: 'windows-1252',
  links: ['https://ptfiles.net/'],
  caps: {
    categorymappings: [
      { id: 19, cat: 'Movies/SD', desc: 'Movies/XviD' },
      { id: 20, cat: 'Movies/DVD', desc: 'Movies/DVD-R' },
      { id: 60, cat: 'Movies/SD', desc: 'Movies/SD X264' },
      { id: 23, cat: 'TV/Anime', desc: 'Anime' },
      { id: 1, cat: 'PC/0day', desc: 'Apps' },
      { id: 55, cat: 'Books', desc: 'Comics' },
      { id: 5, cat: 'Movies/HD', desc: 'Movies/720p HD' },
      { id: 8, cat: 'Movies/HD', desc: 'Movies/1080p HD' },
      { id: 15, cat: 'Movies/HD', desc: 'Movies/Ultra-HD' },
      { id: 44, cat: 'Movies', desc: 'Movies/Packs' },
      { id: 69, cat: 'Books', desc: 'E Books' },
      { id: 12, cat: 'Books', desc: 'E Learning' },
      { id: 11, cat: 'PC/Mac', desc: 'Mac OS' },
      { id: 7, cat: 'TV/SD', desc: 'TV/XviD Episodes' },
      { id: 42, cat: 'TV/SD', desc: 'TV/SD X264 Episodes' },
      { id: 33, cat: 'TV/HD', desc: 'TV/HD Episodes' },
      { id: 22, cat: 'Other', desc: 'Misc' },
      { id: 24, cat: 'PC/Phone-Other', desc: 'Mobile' },
      { id: 6, cat: 'Audio', desc: 'Music' },
      { id: 39, cat: 'TV', desc: 'TV/Seasons' },
      { id: 4, cat: 'PC/Games', desc: 'Games/PC' },
      { id: 29, cat: 'Console', desc: 'Games/Consoles' },
      { id: 9, cat: 'XXX', desc: 'XXX' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  login: {
    path: '/loginproc/',
    method: 'form',
    form: 'form#login',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      force_ssl: 'on',
      ssl: '',
    },
    error: [{ selector: 'p.error:contains(strong)' }],
    test: { path: 'browse.php' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      incldead: 0,
      onlyname: 1,
      onlyname2: true,
    },
    rows: {
      selector:
        'table#tortable > tbody > tr.rowhead, table#tablethree > tbody > tr.rowhead',
    },
    fields: {
      download: { selector: 'a[href^="dl.php/"]', attribute: 'href' },
      title: { selector: 'a.torrentlink', attribute: 'title' },
      category: {
        selector: 'td[onclick*="browse.php?cat="]',
        attribute: 'onclick',
        filters: [
          { name: 'querystring', args: 'cat' },
          { name: 'trim', args: "'" },
        ],
      },
      details: { selector: 'a.torrentlink', attribute: 'href' },
      imdb: {
        selector: 'a[href*="http://www.imdb.com/title/"]',
        optional: true,
        attribute: 'href',
      },
      banner: {
        selector: 'a[rel="gallery"]',
        optional: true,
        attribute: 'href',
      },
      files: { selector: 'td:nth-last-child(5)' },
      grabs: {
        selector: 'td:nth-last-child(3) > span',
        filters: [{ name: 'regexp', args: '([\\d\\.]+)' }],
      },
      size: { selector: 'td:nth-last-child(3)', remove: 'span' },
      seeders: { selector: 'td:nth-last-child(2) > span > b:nth-child(1)' },
      leechers: {
        selector: 'td:nth-last-child(2) > span > b:nth-child(2)',
      },
      date: {
        selector: 'td:nth-child(2) > span > span > small',
        filters: [{ name: 'replace', args: ['Uploaded: ', ''] }],
      },
      downloadvolumefactor: {
        case: { 'span.tool:contains("[FREE]")': '0', '*': '1' },
      },
      uploadvolumefactor: { case: { '*': '1' } },
      description: {
        selector: 'td:nth-child(2) > span:has(span > small)',
        remove:
          'span:nth-child(1), span.tool, a[title^="Search all"], br ~ b > small',
        filters: [{ name: 'trim', args: '/' }],
      },
    },
  },
};
