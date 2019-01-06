import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'polishsource',
  name: 'PolishSource',
  description: 'PolishSource (PS) is a POLISH Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'pl-PL',
  type: 'private',
  encoding: 'ISO-8859-2',
  links: ['https://polishsource.cz/'],
  caps: {
    categorymappings: [
      { id: '12', cat: 'Movies/SD', desc: 'Movies/SD' },
      { id: '11', cat: 'Movies/HD', desc: 'Movies/HD' },
      { id: '45', cat: 'Movies/3D', desc: 'Movies/3D' },
      { id: '4', cat: 'Movies/DVD', desc: 'Movies/DVD' },
      { id: '43', cat: 'Movies/BluRay', desc: 'Movies/BD' },
      { id: '10', cat: 'TV/SD', desc: 'TV/SD' },
      { id: '39', cat: 'TV/HD', desc: 'TV/HD' },
      { id: '8', cat: 'PC/Games', desc: 'Games/PC' },
      { id: '3', cat: 'Console', desc: 'Games/Consoles' },
      { id: '5', cat: 'Books', desc: 'E-Books' },
      { id: '42', cat: 'Audio', desc: 'Music' },
      { id: '18', cat: 'PC/0day', desc: 'Apps' },
      { id: '13', cat: 'XXX', desc: 'XXX' },
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
    captcha: {
      type: 'image',
      selector: 'img[src="img.php"]',
      input: 'vImageCodP',
    },
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [
      { selector: 'td.embedded:has(h2:contains("failed"))' },
      { selector: 'td.embedded:has(h2:contains("Error"))' },
    ],
    test: { selector: 'a[href^="logout.php"]', path: '/browse.php' },
  },
  search: {
    paths: [{ path: '/browse.php' }],
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Query.Keywords }}',
      incldead: '1',
      scene: '0',
      pl: '0',
      sub: '',
      search_in: 'title',
    },
    rows: {
      selector: 'table#restable > tbody > tr:has(a[href^="details.php?id="])',
    },
    fields: {
      title: { selector: 'a[href^="details.php?id="]' },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      category: {
        selector: 'a[href^="?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      download: {
        selector: 'a[href^="downloadssl.php?id="]',
        attribute: 'href',
      },
      description: {
        optional: true,
        selector: 'img[src="pic/napisy.png"]',
        filters: [
          { name: 'append', args: 'Subbed\n<br>' },
          { name: 'prepend', args: '{{ .Result.description }}' },
        ],
      },
      imdb: {
        optional: true,
        selector: 'a[href^="http://www.imdb.com/title/tt"]',
      },
      grabs: {
        selector: 'td:nth-child(6)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      size: { selector: 'td:nth-child(5)' },
      date: {
        selector: 'td:nth-child(4)',
        filters: [
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: '2006-01-0215:04:05 -07:00' },
        ],
      },
      seeders: { selector: 'td:nth-child(7)' },
      leechers: { selector: 'td:nth-child(8)' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};
