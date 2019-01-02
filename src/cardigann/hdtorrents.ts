import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'hdtorrents',
  name: 'HD-Torrents',
  language: 'en-US',
  links: ['https://hd-torrents.org/'],
  caps: {
    categories: {
      '1': 'Movies/BluRay',
      '2': 'Movies',
      '3': 'Movies/HD',
      '4': 'Movies/SD',
      '5': 'Movies/HD',
      '30': 'TV/HD',
      '38': 'TV/SD',
      '44': 'Audio',
      '45': 'Audio',
      '47': 'XXX',
      '48': 'XXX',
      '57': 'Audio',
      '58': 'XXX/DVD',
      '59': 'TV/HD',
      '60': 'TV/Other',
      '61': 'Audio',
      '62': 'Audio',
      '63': 'Movies/Other',
      '64': 'Movies/HD',
      '65': 'TV/HD',
      '66': 'Audio',
      '67': 'XXX',
    },
  },
  login: {
    path: '/login.php',
    form: 'form',
    inputs: {
      uid: '{{ .Config.username }}',
      pwd: '{{ .Config.password }}',
    },
    error: [{ selector: "table.cblocks font[color='#FF0000']" }],
    test: { path: '/wishlist.php' },
  },
  ratio: {
    path: '/',
    selector: '.navus td:nth-child(3)',
    filters: [{ name: 'regexp', args: 'Ratio: (.+)FAQ' }],
  },
  search: {
    path: 'torrents.php',
    inputs: {
      $raw: '{{range .Categories}}category[]={{.}}&{{end}}',
      search: '{{ .Keywords }}',
      active: 1,
    },
    rows: {
      selector:
        'table.mainblockcontenttt tr:nth-child(n+3):has(td.mainblockcontent)',
      remove: 'tr:has(td.listas)',
    },
    fields: {
      category: {
        selector: 'td:nth-child(1) > a:nth-child(1)',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      title: { selector: 'td:nth-child(3) b a' },
      details: { selector: 'td:nth-child(3) b a', attribute: 'href' },
      download: { selector: 'td:nth-child(5) a', attribute: 'href' },
      size: { selector: 'td:nth-child(8)' },
      date: {
        selector: 'td:nth-child(7)',
        filters: [{ name: 'dateparse', args: '15:04:05  02/01/2006' }],
      },
      seeders: { selector: 'td:nth-child(10) b' },
      leechers: { selector: 'td:nth-child(11) b' },
    },
  },
  encoding: 'UTF-8',
};
