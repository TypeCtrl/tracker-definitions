import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'alpharatio',
  name: 'AlphaRatio',
  language: 'en-us',
  links: ['https://alpharatio.cc/'],
  caps: {
    categories: {
      '1': 'TV/SD',
      '2': 'TV/HD',
      '3': 'TV/SD',
      '4': 'TV/SD',
      '5': 'TV/HD',
      '6': 'Movies/SD',
      '7': 'Movies/HD',
      '8': 'Movies/SD',
      '9': 'Movies/HD',
      '10': 'XXX',
      '11': 'Audio/Video',
      '12': 'PC/Games',
      '13': 'Console/Xbox',
      '14': 'Console/PS3',
      '15': 'Console/Wii',
      '16': 'PC',
      '17': 'PC/Mac',
      '19': 'PC/Phone-Other',
      '20': 'XXX',
      '21': 'Books/Ebook',
      '22': 'Audio/Audiobook',
      '23': 'Audio',
      '24': 'Other/Misc',
    },
  },
  ratio: { path: '/index.php', selector: '#stats_ratio .stat' },
  login: {
    path: '/login.php',
    form: 'form',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [
      {
        path: '/login.php',
        message: { selector: '.warning:not(.hidden)' },
      },
    ],
    test: { path: '/inbox.php' },
  },
  search: {
    path: '/torrents.php',
    inputs: {
      $raw:
        'searchsubmit=1&{{range .Categories}}filter_cat[]={{.}}&{{end}}searchstr={{ .Query.Keywords }}',
    },
    rows: { selector: 'table#torrent_table tr.torrent' },
    fields: {
      category: {
        selector: 'td.cats_col a',
        attribute: 'href',
        filters: [{ name: 'regexp', args: 'filter_cat\\[(\\d+)\\]=1' }],
      },
      title: { selector: 'td.big_info .group_info > a:nth-child(2)' },
      details: {
        selector: 'td.big_info .group_info > a:nth-child(2)',
        attribute: 'href',
      },
      download: {
        selector: 'td.big_info span a:nth-child(1)',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(5)' },
      date: { selector: 'td:nth-child(4) .time', attribute: 'title' },
      seeders: { selector: 'td:nth-child(7)' },
      leechers: { selector: 'td:nth-child(8)' },
    },
  },
};
