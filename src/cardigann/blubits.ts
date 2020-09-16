import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'blubits',
  name: 'Blu-bits',
  description: 'A HD tracker',
  language: 'en-US',
  links: ['https://blu-bits.com/'],
  caps: {
    categorymappings: [
      { id: '14', cat: 'Movies/BluRay' },
      { id: '15', cat: 'Movies/HD' },
      { id: '16', cat: 'Movies/HD' },
      { id: '18', cat: 'Movies/HD' },
      { id: '19', cat: 'Movies/HD' },
      { id: '21', cat: 'Movies/BluRay' },
      { id: '23', cat: 'Movies/HD' },
      { id: '24', cat: 'Movies/HD' },
      { id: '25', cat: 'Movies/HD' },
      { id: '27', cat: 'TV/HD' },
      { id: '28', cat: 'TV/HD' },
      { id: '29', cat: 'TV/HD' },
      { id: '30', cat: 'TV/HD' },
      { id: '35', cat: 'TV/HD' },
      { id: '36', cat: 'TV/HD' },
      { id: '38', cat: 'Audio/Lossless' },
      { id: '39', cat: 'Movies/HD' },
      { id: '40', cat: 'TV/HD' },
      { id: '41', cat: 'TV/Sport' },
      { id: '42', cat: 'TV/Anime' },
      { id: '44', cat: 'PC' },
      { id: '45', cat: 'Audio/Video' },
      { id: '46', cat: 'XXX' },
      { id: '51', cat: 'XXX' },
      { id: '53', cat: 'Audio/Video' },
      { id: '54', cat: 'Movies/HD' },
      { id: '55', cat: 'Movies/HD' },
      { id: '56', cat: 'Movies/HD' },
      { id: '57', cat: 'Audio/Video' },
      { id: '58', cat: 'Audio/Video' },
      { id: '59', cat: 'XXX' },
    ],
  },
  login: {
    path: 'index.php?page=login',
    method: 'post',
    inputs: {
      uid: '{{ .Config.username }}',
      pwd: '{{ .Config.password }}',
    },
    error: [
      {
        selector: 'table.lista > tbody > tr > td.lista > span[style="color:#FF0000;"]',
      },
    ],
    test: { path: 'index.php', selector: 'ul#navlist' },
  },
  ratio: {
    path: 'index.php',
    selector: 'ul#navlist > li:contains("Ratio: ")',
    filters: [
      { name: 'split', args: [' ', 1] },
      { name: 'replace', args: ['---', '0'] },
    ],
  },
  search: {
    inputs: {
      search: '{{ .Query.Keywords }}',
      page: 'torrents',
      options: 0,
      active: 0,
    },
    rows: {
      selector: 'div.b-content > table.lista > tbody > tr:has(a[href^="index.php?page=torrents&category="])',
    },
    fields: {
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      title: {
        selector: 'a[href^="index.php?page=torrent-details&id="]',
        attribute: 'title',
        filters: [{ name: 'replace', args: ['View details: ', ''] }],
      },
      category: {
        selector: 'a[href^="index.php?page=torrents&category="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      comments: {
        selector: 'a[href^="index.php?page=torrent-details&id="]',
        attribute: 'href',
      },
      size: {
        selector: 'p',
        filters: [
          { name: 'replace', args: [' ', ''] },
          {
            name: 'regexp',
            args: '\\|\\s+Size:\\s+([\\w\\d\\.,]+ \\w\\w)\\s+\\|',
          },
        ],
      },
      date: {
        selector: 'a[href^="index.php?page=torrent-details&id="]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: '<center>Added:(.*?)</center>' }],
      },
      grabs: {
        selector: 'a[href^="index.php?page=torrent_history&id="]',
        filters: [{ name: 'replace', args: ['---', '0'] }],
      },
      seeders: {
        selector: 'a[title="Click here to view peers details"]:nth-child(1)',
      },
      leechers: {
        selector: 'a[title="Click here to view peers details"]:nth-child(2)',
      },
      downloadvolumefactor: {
        case: {
          'img[alt="gold"]': '0',
          'img[alt="silver"]': '0.5',
          '*': '1',
        },
      },
      uploadvolumefactor: {
        case: {
          'img[alt="2x Upload Multiplier"]': '2',
          'img[alt="3x Upload Multiplier"]': '3',
          'img[alt="4x Upload Multiplier"]': '4',
          'img[alt="5x Upload Multiplier"]': '5',
          'img[alt="6x Upload Multiplier"]': '6',
          'img[alt="7x Upload Multiplier"]': '7',
          'img[alt="8x Upload Multiplier"]': '8',
          'img[alt="9x Upload Multiplier"]': '9',
          'img[alt="10x Upload Multiplier"]': '10',
          '*': '1',
        },
      },
    },
    paths: [{ path: 'index.php' }],
  },
  encoding: 'UTF-8',
  source: 'cardigann',
};
