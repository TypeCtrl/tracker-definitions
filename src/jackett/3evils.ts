import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: '3evils',
  name: '3evils',
  description: '3evils is a Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'en-EN',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://www.3evils.com/'],
  caps: {
    categorymappings: [
      { id: '2', cat: 'Console', desc: 'Games' },
      { id: '3', cat: 'Movies', desc: 'Movies' },
      { id: '4', cat: 'Audio', desc: 'Music' },
      { id: '9', cat: 'TV/Anime', desc: ' Anime' },
      { id: '17', cat: 'TV', desc: ' TV' },
      { id: '18', cat: 'PC', desc: 'Appz' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  login: {
    path: 'login.php',
    method: 'form',
    form: 'form[action="takelogin.php"]',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      returnto: '/browse.php',
    },
    error: [
      {
        selector: 'h2:contains("Login failed!")',
        message: { selector: 'table tr td.colhead2' },
      },
    ],
    test: {
      path: '/',
      selector: ':has(a[href$="/logout.php?hash_please="])',
    },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{.Keywords}}',
      incldead: 1,
    },
    rows: {
      selector: 'table.table-bordered tr:has(a[href^="browse.php?cat="])',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      title: {
        optional: true,
        selector: 'a[href^="details.php?id="][onmouseover]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: "Tip\\('<b>(.*?)</b>" }],
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      download: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
        filters: [
          {
            name: 'replace',
            args: ['details.php?id=', 'download.php?torrent='],
          },
        ],
      },
      size: { selector: 'td:nth-last-child(6)' },
      files: { selector: 'td:nth-last-child(9)' },
      grabs: {
        selector: 'td:nth-last-child(5)',
        filters: [{ name: 'replace', args: ['Times', ''] }],
      },
      date: {
        optional: true,
        selector: 'td:nth-last-child(7):not(:contains("day"))',
        filters: [
          { name: 'regex', args: ['(.+?)<[^>]*>(.+?)', '$1 $2'] },
          { name: 'dateparse', args: 'Jan 2 2006 03:04 pm' },
        ],
      },
      seeders: { selector: 'td:nth-last-child(4)' },
      leechers: { selector: 'td:nth-last-child(3)' },
      downloadvolumefactor: {
        case: { 'b:contains("[FREE]")': '0', '*': '1' },
      },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
  source: 'jackett',
};
