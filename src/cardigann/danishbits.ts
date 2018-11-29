import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'danishbits',
  name: 'DanishBits',
  language: 'da-dk',
  links: ['https://danishbits.org'],
  caps: {
    categories: {
      '1': 'TV/HD',
      '2': 'Movies/HD',
      '3': 'Movies',
      '4': 'TV',
      '5': 'Audio',
      '6': 'Other/Misc',
      '7': 'PC',
      '8': 'Movies/HD',
      '9': 'Movies',
      '10': 'Movies/HD',
      '11': 'Movies/HD',
      '12': 'Books/Ebook',
      '13': 'PC/Mac',
      '14': 'PC/Phone-Other',
      '15': 'Audio',
      '16': 'Audio/Video',
      '17': 'Console',
      '18': 'PC/Games',
      '19': 'Console/PS3',
      '20': 'TV',
      '21': 'TV',
      '22': 'Movies/HD',
      '23': 'Console/Xbox',
      '24': 'Movies/SD',
      '25': 'XXX',
      '28': 'Movies/HD',
      '29': 'Movies/HD',
      '30': 'TV',
      '31': 'Movies',
      '32': 'Other/Misc',
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
        'action=newbrowse&search={{ .Query.Keywords }}&pre_type=torrents&type=',
    },
    rows: { selector: 'table#torrent_table tr.torrent' },
    fields: {
      category: {
        selector: 'td:nth-child(1) a',
        attribute: 'href',
        filters: [{ name: 'regexp', args: 'filter_(\\d+)=on' }],
      },
      title: {
        selector: 'td:nth-child(2) .croptorrenttext a',
        attribute: 'title',
      },
      details: {
        selector: 'td:nth-child(2) .croptorrenttext a',
        attribute: 'href',
      },
      download: {
        selector: 'a[title="Direkte download link"]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(3)', remove: 'br,div' },
      date: { selector: 'td:nth-child(5) .time', attribute: 'title' },
      seeders: { selector: 'td:nth-child(7)' },
      leechers: { selector: 'td:nth-child(8)' },
    },
  },
};
