import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'iptorrents',
  name: 'IPTorrents',
  description: '#1 Private Tracker',
  language: 'en-us',
  links: ['https://iptorrents.com/'],
  settings: [{ name: 'cookie', type: 'text', label: 'Cookie' }],
  caps: {
    categories: {
      '1': 'PC',
      '4': 'TV/SD',
      '5': 'TV/HD',
      '6': 'Movies/SD',
      '7': 'Movies/SD',
      '8': 'XXX',
      '20': 'Movies/HD',
      '22': 'TV/HD',
      '23': 'TV/HD',
      '24': 'TV/SD',
      '25': 'TV/SD',
      '26': 'TV/SD',
      '35': 'Books',
      '38': 'Movies/Foreign',
      '48': 'Movies/HD',
      '54': 'Movies',
      '55': 'TV/SD',
      '60': 'TV/Anime',
      '62': 'Movies/SD',
      '64': 'Audio/Audiobook',
      '65': 'TV',
      '66': 'TV/SD',
      '68': 'Movies',
      '69': 'PC/Mac',
      '72': 'Movies',
      '73': 'Audio',
      '75': 'Audio',
      '77': 'Movies/SD',
      '78': 'TV/SD',
      '79': 'TV/SD',
      '80': 'Audio/Lossless',
      '81': 'XXX',
      '82': 'TV/SD',
      '83': 'TV',
      '84': 'XXX',
      '85': 'XXX',
      '88': 'XXX',
      '89': 'Movies/SD',
      '90': 'Movies/SD',
      '91': 'XXX',
      '93': 'Audio',
      '94': 'Books/Comics',
      '96': 'Movies/SD',
      '99': 'TV/HD',
    },
  },
  login: {
    method: 'cookie',
    inputs: { cookie: '{{ .Config.cookie }}' },
    test: { path: '/settings.php' },
  },
  ratio: { path: '/indexipt.php', selector: '.c_ratio' },
  search: {
    path: '/t',
    inputs: {
      $raw: '{{range .Categories}}{{.}}&{{end}}q={{ .Query.Keywords }}',
    },
    rows: {
      selector: 'table#torrents > tbody > tr:nth-child(n+2):has(td.t_label)',
    },
    fields: {
      category: {
        selector: 'td:nth-child(1) > a',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '^\\?(\\d+)$' }],
      },
      title: { selector: 'td:nth-child(2) > a' },
      details: { selector: 'td:nth-child(2) > a', attribute: 'href' },
      comments: { selector: 'td:nth-child(5) > a', attribute: 'href' },
      download: { selector: 'td:nth-child(4) > a', attribute: 'href' },
      size: { selector: 'td:nth-child(6)' },
      date: {
        selector: 'td:nth-child(2) .t_ctime',
        filters: [
          { name: 'split', args: ['|', -1] },
          { name: 'split', args: [' by ', 0] },
        ],
      },
      seeders: { selector: 'td:nth-child(8)' },
      leechers: { selector: 'td:nth-child(9)' },
      grabs: { selector: 'td:nth-child(7)' },
      downloadvolumefactor: {
        case: { 'span.t_tag_free_leech': '0', '*': '1' },
      },
      uploadvolumefactor: { text: '1' },
    },
  },
};
