import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'torrentleech',
  name: 'TorrentLeech',
  language: 'en-us',
  links: ['https://www.torrentleech.org/'],
  caps: {
    categories: {
      '5': 'Books',
      '8': 'Movies/SD',
      '9': 'Movies/SD',
      '10': 'Movies/SD',
      '11': 'Movies/SD',
      '12': 'Movies/SD',
      '13': 'Movies/HD',
      '14': 'Movies/HD',
      '15': 'Movies',
      '16': 'Audio/Video',
      '17': 'PC/Games',
      '18': 'Console/Xbox',
      '19': 'Console/Xbox360',
      '21': 'Console/PS3',
      '22': 'Console/PSP',
      '23': 'PC/ISO',
      '24': 'PC/Mac',
      '25': 'PC/Phone-Other',
      '26': 'TV/SD',
      '27': 'TV',
      '28': 'Console/Wii',
      '29': 'TV/Documentary',
      '30': 'Console/NDS',
      '31': 'Audio',
      '32': 'TV/HD',
      '33': 'PC/0day',
      '34': 'TV/Anime',
      '35': 'TV',
    },
  },
  login: {
    path: '/user/account/login/',
    form: 'form',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [
      {
        selector: '#loginFormBlock .ui-state-error',
        message: {
          selector: '#loginFormBlock .ui-state-error p',
          remove: 'span, strong',
        },
      },
    ],
    test: { path: '/torrents/browse', selector: '.memberbar_alt' },
  },
  ratio: {
    path: '/',
    selector: '#memberBar',
    filters: [{ name: 'regexp', args: 'Ratio:.(\\d+\\.\\d+)' }],
  },
  search: {
    path:
      '/torrents/browse/{{if .Query.Keywords}}index/query/{{ .Query.Keywords}}{{end}}',
    inputs: { $raw: '{{range .Categories}}category[]={{.}}&{{end}}' },
    rows: { selector: 'table#torrenttable > tbody > tr' },
    fields: {
      category: {
        selector: 'td:nth-child(1) > a',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '\\/(\\d+)$' }],
      },
      title: { selector: 'td:nth-child(2) .title a' },
      details: {
        selector: 'td:nth-child(2) .title a',
        attribute: 'href',
      },
      comments: { selector: 'td:nth-child(4) > a', attribute: 'href' },
      download: { selector: 'td:nth-child(3) a', attribute: 'href' },
      size: { selector: 'td:nth-child(5)' },
      date: {
        selector: 'td:nth-child(2)',
        filters: [{ name: 'split', args: [' on ', -1] }],
      },
      seeders: { selector: 'td:nth-child(7)' },
      leechers: { selector: 'td:nth-child(8)' },
    },
  },
};
