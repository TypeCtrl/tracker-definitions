import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'torrentheaven',
  name: 'TorrentHeaven',
  description: 'A German general tracker',
  language: 'de-de',
  links: ['https://torrentheaven.myfqdn.info/'],
  caps: {
    categories: {
      '1': 'PC/Games',
      '3': 'Console',
      '7': 'Movies/DVD',
      '8': 'Movies/SD',
      '14': 'Audio',
      '15': 'Audio/Audiobook',
      '16': 'Audio/Audiobook',
      '18': 'TV/SD',
      '19': 'TV/HD',
      '20': 'TV/HD',
      '22': 'Books',
      '24': 'Other',
      '25': 'Other',
      '28': 'PC',
      '29': 'PC/Phone-Other',
      '30': 'PC',
      '36': 'Audio/Lossless',
      '37': 'Movies/DVD',
      '41': 'Movies/Foreign',
      '42': 'Audio/Other',
      '49': 'TV/SD',
      '51': 'TV/Documentary',
      '52': 'TV/Documentary',
      '53': 'TV',
      '54': 'TV/Sport',
      '58': 'Audio/Video',
      '59': 'Console/PS4',
      '60': 'Console/PSP',
      '63': 'Console/Wii',
      '66': 'TV/Foreign',
      '67': 'Console/Xbox360',
      '68': 'PC/Phone-Other',
      '70': 'PC',
      '71': 'PC/Mac',
      '72': 'Console/NDS',
      '101': 'Movies/HD',
      '102': 'Movies/HD',
      '103': 'Movies/HD',
      '104': 'Movies/BluRay',
      '106': 'Movies/3D',
      '108': 'TV/Anime',
    },
  },
  settings: [{ name: 'cookie', type: 'text', label: 'Cookie' }],
  login: {
    method: 'cookie',
    inputs: { cookie: '{{ .Config.cookie }}' },
    test: { path: '/index.php?strWebValue=account&strWebAction=center' },
  },
  ratio: {
    path: '/index.php?strWebValue=account&strWebAction=center',
    selector: 'span#ElementRatio',
  },
  search: {
    path: '/index.php',
    inputs: {
      strWebValue: 'torrent',
      strWebAction: 'search',
      $raw: '{{range .Categories}}dirs{{.}}=1&{{end}}',
      searchstring: '{{ .Query.Keywords }}',
      sort: 'torrent_added',
      by: 'd',
      type: 0,
      do_search: 'suchen',
      time: 0,
      details: 'title',
    },
    rows: {
      selector:
        'table.torrenttable > tbody > tr:not(:has(td.torrenttableheader))',
    },
    fields: {
      title: {
        selector:
          'a[href^="index.php?strWebValue=torrent&strWebAction=details"]',
        attribute: 'onmouseover',
        filters: [
          { name: 'regexp', args: "^return buildTable\\('(.*?)',\\s+" },
        ],
      },
      category: {
        selector:
          'a[href^="index.php?strWebValue=torrent&strWebAction=search&dir="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'dir' }],
      },
      comments: {
        selector:
          'a[href^="index.php?strWebValue=torrent&strWebAction=details"]',
        attribute: 'href',
      },
      download: {
        selector:
          'a[href^="index.php?strWebValue=torrent&strWebAction=downloadssl&id="]',
        attribute: 'href',
      },
      size: { selector: 'td.column2:nth-child(4)' },
      seeders: { selector: 'td.column1:nth-child(7)' },
      leechers: { selector: 'td.column2:nth-child(8)' },
      date: {
        selector: 'font:has(a)',
        remove: 'a',
        filters: [
          { name: 'split', args: ['\n', 0] },
          { name: 'replace', args: ['Heute', 'Today'] },
          { name: 'replace', args: ['Gestern', 'Yesterday'] },
        ],
      },
      grabs: { selector: 'td:nth-child(7)' },
      downloadvolumefactor: {
        case: {
          'img[src="themes/images/DL50.png"]': '0.5',
          'img[src="themes/images/freeleech.png"]': '0',
          '*': '1',
        },
      },
      uploadvolumefactor: { text: '1' },
    },
  },
};
