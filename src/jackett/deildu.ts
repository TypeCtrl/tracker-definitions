import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'deildu',
  name: 'Deildu',
  description:
    'Deildu is an Icelandic Semi-Private site for TV / MOVIES / GENERAL',
  language: 'is-is',
  type: 'semi-private',
  encoding: 'iso-8859-1',
  links: ['https://deildu.net/'],
  caps: {
    categorymappings: [
      { id: 11, cat: 'Audio', desc: 'Music' },
      { id: 6, cat: 'Movies', desc: 'Movies' },
      { id: 5, cat: 'Movies/DVD', desc: 'Movies DVDR' },
      { id: 8, cat: 'TV', desc: 'TV shows' },
      { id: 12, cat: 'Movies/HD', desc: 'HD Movies' },
      { id: 12, cat: 'TV/HD', desc: 'HD TV' },
      { id: 9, cat: 'TV/Documentary', desc: 'TV - Documentaries' },
      { id: 9, cat: 'Movies/Other', desc: 'Movie - Documentaries' },
      { id: 2, cat: 'TV/Sport', desc: 'Sports' },
      { id: 7, cat: 'Movies/Other', desc: 'Cartoons' },
      { id: 14, cat: 'PC', desc: 'Windows' },
      { id: 3, cat: 'PC/Mac', desc: 'Mac' },
      { id: 10, cat: 'PC/Games', desc: 'Games' },
      { id: 4, cat: 'XXX', desc: 'XXX' },
      { id: 1, cat: 'Other', desc: 'Other' },
    ],
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
  },
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      keeplogged: 1,
    },
  },
  test: { path: 'my.php' },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Query.Keywords }}',
      incldead: '1',
    },
    rows: {
      selector:
        'table[class="torrentlist"] > tbody > tr:has(a[href*="details.php?id="])',
      filters: [{ name: 'andmatch', args: 55 }],
    },
    fields: {
      download: {
        selector: 'a[href^="download.php"]',
        attribute: 'href',
      },
      title: { selector: 'td:nth-child(2)' },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(7)' },
      files: { selector: 'td:nth-child(4)' },
      grabs: {
        selector: 'td:nth-child(8)',
        filters: [{ name: 'regexp', args: '([\\d,]+)' }],
      },
      seeders: { selector: 'td:nth-child(9)' },
      leechers: { selector: 'td:nth-child(10)' },
      date: {
        selector: 'td:nth-child(6)',
        filters: [{ name: 'dateparse', args: '2006-01-0215:04:05' }],
      },
      downloadvolumefactor: { case: { '*': '1' } },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
};
