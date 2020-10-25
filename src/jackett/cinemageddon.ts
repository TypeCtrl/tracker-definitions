import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'cinemageddon',
  name: 'Cinemageddon',
  description: 'B-movie tracker',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://cinemageddon.net/'],
  legacylinks: ['http://cinemageddon.net/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies', desc: 'Action' },
      { id: '2', cat: 'Movies', desc: 'Horror' },
      { id: '3', cat: 'Movies', desc: 'Martial Arts' },
      { id: '4', cat: 'Movies', desc: 'Comedy' },
      { id: '5', cat: 'Movies', desc: 'Other' },
      { id: '6', cat: 'Movies', desc: 'Hidden Gems' },
      { id: '7', cat: 'Movies', desc: 'Sci-Fi' },
      { id: '8', cat: 'Movies', desc: 'Gore' },
      { id: '9', cat: 'Movies', desc: 'Exploitation' },
      { id: '11', cat: 'Movies', desc: 'OST' },
      { id: '12', cat: 'Movies', desc: 'XXX' },
      { id: '13', cat: 'Movies', desc: 'Thriller' },
      { id: '14', cat: 'Movies', desc: 'Adventure' },
      { id: '15', cat: 'Movies', desc: 'Documentary' },
      { id: '16', cat: 'Movies', desc: 'Western' },
      { id: '17', cat: 'Movies', desc: 'Family' },
      { id: '18', cat: 'Movies', desc: 'Drama' },
      { id: '19', cat: 'Movies', desc: 'Ebooks' },
      { id: '20', cat: 'Movies', desc: 'Softcore' },
      { id: '21', cat: 'Movies', desc: 'Tinfoil Hat' },
      { id: '22', cat: 'Movies', desc: 'Trailers' },
    ],
    modes: { search: ['q'], 'movie-search': ['q', 'imdbid'] },
  },
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'table:contains("Login failed!")' }],
    test: { path: 'index.php', selector: 'a[href$="/logout.php"]' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ if .Query.IMDBID }}{{ .Query.IMDBID }}{{else}}{{ .Keywords }}{{end}}',
    },
    rows: {
      selector: 'table.torrenttable > tbody > tr:has(a[href*="browse.php?cat="])',
    },
    fields: {
      category: {
        selector: 'a[href*="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: { selector: 'a[href*="details.php?id="]' },
      details: {
        selector: 'a[href*="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href*="download.php?id="]',
        attribute: 'href',
      },
      imdb: {
        optional: true,
        selector: 'a[href*="www.imdb.com/title/"]',
        attribute: 'href',
      },
      date: {
        selector: 'td:nth-child(4)',
        filters: [{ name: 'dateparse', args: '2006-01-0215:04:05' }],
      },
      size: {
        selector: 'td:nth-child(5)',
        filters: [{ name: 'regexp', args: '(\\d+.*(MB|GB)+)' }],
      },
      files: {
        selector: 'td:nth-child(5)',
        filters: [{ name: 'regexp', args: '(\\d+)\\s+file' }],
      },
      grabs: { selector: 'td:nth-child(6)' },
      seeders: { selector: 'td:nth-child(7)' },
      leechers: { selector: 'td:nth-child(8)' },
      downloadvolumefactor: {
        case: {
          'img[src$="/golden10.gif"]': 0,
          'img[src$="/golden1.gif"]': 0.9,
          'img[src$="/golden2.gif"]': 0.8,
          'img[src$="/golden3.gif"]': 0.7,
          'img[src$="/golden4.gif"]': 0.6,
          '*': 1,
        },
      },
      uploadvolumefactor: {
        case: {
          'img[src$="/golden10.gif"]': 2,
          'img[src$="/golden1.gif"]': 1.1,
          'img[src$="/golden2.gif"]': 1.2,
          'img[src$="/golden3.gif"]': 1.3,
          'img[src$="/golden4.gif"]': 1.4,
          '*': 1,
        },
      },
    },
  },
  source: 'jackett',
};
