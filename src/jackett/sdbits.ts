import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'sdbits',
  name: 'SDBits',
  description: 'SDBits is a small tracker that focuses on SD movies and tv.',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['http://sdbits.org'],
  caps: {
    categorymappings: [
      { id: '6', cat: 'Audio', desc: 'Audio' },
      { id: '3', cat: 'TV/Documentary', desc: 'Documentary' },
      { id: '1', cat: 'Movies', desc: 'Movies' },
      { id: '4', cat: 'Audio', desc: 'Music' },
      { id: '5', cat: 'TV/Sport', desc: 'Sports' },
      { id: '2', cat: 'TV', desc: 'TV' },
    ],
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
  },
  login: {
    path: '/takeloginn3.php',
    method: 'post',
    inputs: {
      uname: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      returnto: '/',
    },
    error: [{ selector: 'td.embedded:has(h2:contains("failed")+table)' }],
    test: {
      path: '/browse.php',
      selector: 'span.smallfont:has(a[href="logout.php"])',
    },
  },
  ratio: {
    path: '/browse.php',
    selector: 'span.smallfont:has(a[href="logout.php"])',
    filters: [{ name: 'regexp', args: 'Ratio:[  ](.*?) ' }],
  },
  search: {
    paths: [{ path: '/browse.php' }],
    method: 'post',
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Query.Keywords }}',
      incldead: '1',
      descriptions: '0',
    },
    rows: { selector: 'table#torrent-list > tbody > tr[id]' },
    fields: {
      title: { selector: 'td:nth-child(3) > b > a' },
      category: {
        selector: 'a[href^="?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      details: { selector: 'td:nth-child(3) > b > a', attribute: 'href' },
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(6)' },
      grabs: {
        selector: 'td:nth-child(7)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      seeders: { selector: 'td:nth-child(8)' },
      leechers: { selector: 'td:nth-child(9)' },
      date: {
        selector: 'td:nth-child(5)',
        filters: [{ name: 'append', args: ' ago' }],
      },
      imdb: {
        selector: 'a[href^="http://www.imdb.com/"]',
        attribute: 'href',
      },
      downloadvolumefactor: {
        case: {
          'a[style="color:#000099"][href^="details.php?"]': '0',
          '*': '1',
        },
      },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
};
