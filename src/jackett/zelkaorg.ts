import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'zelkaorg',
  name: 'Zelka.org',
  description:
    'Zelka (Zamunda) is a BULGARIAN Private Torrent Tracker for 0DAY / GENERAL',
  language: 'bg-bg',
  type: 'private',
  encoding: 'windows-1251',
  links: ['http://zelka.org/', 'http://zamunda.se/'],
  caps: {
    categories: {
      '5': 'Movies/HD',
      '7': 'TV/SD',
      '9': 'XXX',
      '19': 'Movies/SD',
      '20': 'Movies/DVD',
      '25': 'TV/Other',
      '33': 'TV/HD',
      '35': 'Movies/WEBDL',
      '42': 'Movies/BluRay',
      '46': 'Movies/3D',
      '49': 'XXX/Other',
      '53': 'Movies/HD',
    },
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  login: {
    path: '/takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'td.embedded:has(h2:contains("failed"))' }],
    test: { path: '/browse.php' },
  },
  search: {
    paths: [{ path: '/browse.php' }],
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
        selector:
          'a:has(img[src^="http://img.zamunda.se/pic/magnet-icon-12w-12h.gif"])',
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
};
