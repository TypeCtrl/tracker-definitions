import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'zelkaorg',
  name: 'Zelka.org',
  description: 'Zelka (Zamunda) is a BULGARIAN Private Torrent Tracker for 0DAY / GENERAL',
  language: 'bg-BG',
  type: 'private',
  encoding: 'WINDOWS-1251',
  links: ['http://zelka.org/', 'http://zamunda.se/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [
      { id: '5', cat: 'Movies/HD' },
      { id: '7', cat: 'TV/SD' },
      { id: '9', cat: 'XXX' },
      { id: '19', cat: 'Movies/SD' },
      { id: '20', cat: 'Movies/DVD' },
      { id: '25', cat: 'TV/Other' },
      { id: '33', cat: 'TV/HD' },
      { id: '35', cat: 'Movies/WEBDL' },
      { id: '42', cat: 'Movies/BluRay' },
      { id: '46', cat: 'Movies/3D' },
      { id: '49', cat: 'XXX/Other' },
      { id: '53', cat: 'Movies/HD' },
    ],
  },
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'td.embedded:has(h2:contains("failed"))' }],
    test: { path: 'browse.php' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{range .Categories}}cat{{.}}=1&{{end}}',
      search: '{{ .Query.Keywords }}',
      incldead: 1,
    },
    rows: { selector: '.test > tbody > tr:has(a[href^="browse.php"])' },
    fields: {
      title: { selector: 'td:nth-child(2) > a:nth-child(1)' },
      details: {
        selector: 'td:nth-child(2) > a:nth-child(1)',
        attribute: 'href',
      },
      category: {
        selector: 'td:nth-child(1) > a',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      download: {
        selector: 'a:has(img[src^="http://img.zamunda.se/pic/download.gif"])',
        attribute: 'href',
      },
      magnet: {
        selector: 'a:has(img[src^="http://img.zamunda.se/pic/magnet-icon-12w-12h.gif"])',
        attribute: 'href',
      },
      grabs: {
        selector: 'td:nth-child(7)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      size: { selector: 'td:nth-child(6)' },
      date: {
        selector: 'td:nth-child(5)',
        filters: [
          {
            name: 'regexp',
            args: '([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))',
          },
        ],
      },
      seeders: { selector: 'td:nth-child(8)' },
      leechers: { selector: 'td:nth-child(9)' },
      banner: {
        selector: 'td:nth-child(2) > a:nth-child(1)',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'src=([^\\s]+)' }],
      },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};
