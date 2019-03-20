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
      { id: '65', cat: 'Books', desc: 'Books' },
      { id: '27', cat: 'Console/NDS', desc: 'Games/Nintendo-DS' },
      { id: '28', cat: 'Console/Other', desc: 'Games/Switch' },
      { id: '42', cat: 'PC/Phone-Android', desc: 'Mobile/Android' },
      { id: '44', cat: 'Movies/UHD', desc: 'Movies/4K' },
      { id: '13', cat: 'Movies/BluRay', desc: 'Movies/Bluray' },
      { id: '12', cat: 'Movies/DVD', desc: 'Movies/DVD-R' },
      { id: '14', cat: 'Movies', desc: 'Movies/Packs' },
      { id: '67', cat: 'Movies/HD', desc: 'Movies/x264' },
      { id: '55', cat: 'Movies/HD', desc: 'Movies/X265' },
      { id: '45', cat: 'Movies', desc: 'Movies/Remux' },
      { id: '62', cat: 'Audio', desc: 'Music/Audio' },
      { id: '32', cat: 'Audio', desc: 'Music/Packs' },
      { id: '6', cat: 'TV', desc: 'TV/Packs' },
      { id: '3', cat: 'TV/HD', desc: 'TV/x264' },
      { id: '4', cat: 'TV/HD', desc: 'TV/x265' },
      { id: '8', cat: 'TV/SD', desc: 'TV/Xvid' },
      { id: '63', cat: 'PC/0day', desc: 'Windows/Applications' },
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
      searchin: 'title',
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
      banner: {
        selector: 'a[href^="details.php?id="][onmouseover]',
        attribute: 'onmouseover',
        filters: [
          { name: 'regexp', args: '/imdb/(.*?).jpg' },
          { name: 'prepend', args: '/imdb/' },
          { name: 'append', args: '.jpg' },
        ],
      },
      size: { selector: 'td:nth-last-child(4)' },
      files: { selector: 'a[href^="filelist.php?id="]' },
      grabs: {
        selector: 'a[href^="snatches.php?id="]',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      date: {
        optional: true,
        selector: 'td:nth-last-child(5):not(:contains("day"))',
        filters: [{ name: 'dateparse', args: 'Jan 2 2006 03:04 pm' }],
      },
      seeders: { optional: true, selector: 'a[href$="#seeders"]' },
      leechers: { optional: true, selector: 'a[href$="#leechers"]' },
      downloadvolumefactor: {
        case: { 'b:contains("[FREE]")': '0', '*': '1' },
      },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
  source: 'jackett',
};
