import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'hdspace',
  name: 'HD-Space',
  description: 'a HD tracker',
  language: 'en-US',
  links: ['https://hd-space.org/'],
  caps: {
    categorymappings: [
      { id: '15', cat: 'Movies/BluRay' },
      { id: '16', cat: 'Movies/HD' },
      { id: '18', cat: 'Movies/HD' },
      { id: '19', cat: 'Movies/HD' },
      { id: '21', cat: 'TV/HD' },
      { id: '22', cat: 'TV/HD' },
      { id: '24', cat: 'TV/Documentary' },
      { id: '25', cat: 'TV/Documentary' },
      { id: '27', cat: 'TV/Anime' },
      { id: '28', cat: 'TV/Anime' },
      { id: '30', cat: 'Audio/Lossless' },
      { id: '31', cat: 'Audio/Video' },
      { id: '33', cat: 'XXX' },
      { id: '34', cat: 'XXX' },
      { id: '36', cat: 'Other' },
      { id: '37', cat: 'PC' },
      { id: '38', cat: 'Other' },
      { id: '40', cat: 'Movies/HD' },
      { id: '41', cat: 'Movies/HD' },
    ],
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
  encoding: 'UTF-8',
};
