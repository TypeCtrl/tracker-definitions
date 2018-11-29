import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'hdspace',
  name: 'HD-Space',
  description: 'a HD tracker',
  language: 'en-us',
  links: ['https://hd-space.org/'],
  caps: {
    categories: {
      '15': 'Movies/BluRay',
      '16': 'Movies/HD',
      '18': 'Movies/HD',
      '19': 'Movies/HD',
      '21': 'TV/HD',
      '22': 'TV/HD',
      '24': 'TV/Documentary',
      '25': 'TV/Documentary',
      '27': 'TV/Anime',
      '28': 'TV/Anime',
      '30': 'Audio/Lossless',
      '31': 'Audio/Video',
      '33': 'XXX',
      '34': 'XXX',
      '36': 'Other',
      '37': 'PC',
      '38': 'Other',
      '40': 'Movies/HD',
      '41': 'Movies/HD',
    },
  },
  ratio: {
    path: '/index.php?page=torrents',
    selector:
      'table.lista > tbody > tr > td[align="center"]:contains("Ratio:")',
    filters: [
      { name: 'regexp', args: 'Ratio: (.+)' },
      { name: 'replace', args: ['---', '0'] },
    ],
  },
  login: {
    path: '/index.php?page=login',
    method: 'post',
    inputs: {
      uid: '{{ .Config.username }}',
      pwd: '{{ .Config.password }}',
    },
    test: { path: '/index.php?page=torrents', selector: 'div#menu' },
  },
  search: {
    path: '/index.php?page=torrents&active=0&options=0&category=15%3B40',
    inputs: {
      $raw: 'category={{range .Categories}}{{.}};{{end}}',
      search: '{{ .Query.Keywords }}',
      active: 0,
      options: 0,
    },
    rows: { selector: 'table.lista > tbody > style ~ tr' },
    fields: {
      title: {
        selector:
          'td[align="left"] > a[href^="index.php?page=torrent-details"]',
      },
      category: {
        selector: 'a[href^="index.php?page=torrents&category="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      comments: {
        selector:
          'td[align="left"] > a[href^="index.php?page=torrent-details"]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php"]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(6)' },
      seeders: { selector: 'td:nth-child(8)' },
      leechers: { selector: 'td:nth-child(9)' },
      date: { selector: 'td:nth-child(5)' },
    },
  },
};
