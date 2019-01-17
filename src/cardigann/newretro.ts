import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'newretro',
  name: 'The New Retro',
  description: 'A German gerneral tracker',
  language: 'de-DE',
  links: ['http://new-retro.ddns.net/'],
  caps: {
    categorymappings: [
      { id: '69', cat: 'XXX' },
      { id: '101', cat: 'TV/Anime' },
      { id: '102', cat: 'Movies/BluRay' },
      { id: '103', cat: 'Movies/DVD' },
      { id: '104', cat: 'Movies/DVD' },
      { id: '105', cat: 'Movies' },
      { id: '106', cat: 'Movies' },
      { id: '109', cat: 'Other' },
      { id: '110', cat: 'PC/Games' },
      { id: '111', cat: 'PC/Games' },
      { id: '112', cat: 'Console' },
      { id: '113', cat: 'PC' },
      { id: '114', cat: 'PC/Mac' },
      { id: '115', cat: 'PC' },
      { id: '116', cat: 'TV/Documentary' },
      { id: '117', cat: 'TV' },
      { id: '118', cat: 'TV/Sport' },
      { id: '119', cat: 'Other' },
      { id: '120', cat: 'Books' },
      { id: '121', cat: 'Other' },
      { id: '122', cat: 'Audio/Audiobook' },
      { id: '123', cat: 'Audio' },
      { id: '124', cat: 'Audio' },
      { id: '125', cat: 'Audio/Video' },
      { id: '127', cat: 'Other' },
      { id: '129', cat: 'Other' },
      { id: '130', cat: 'Movies' },
      { id: '131', cat: 'Movies/Other' },
      { id: '132', cat: 'Movies/DVD' },
      { id: '133', cat: 'Audio/MP3' },
    ],
  },
  login: {
    path: '/takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      returnto: '/',
    },
    error: [
      {
        selector: 'table.tableinborder:contains("Anmeldung Gescheitert!") > tbody > tr > td.tablea',
      },
    ],
    test: { path: '/usercp.php' },
  },
  ratio: {
    path: '/usercp.php',
    selector: 'div#lmtd table > tbody > tr:contains("Ratio:") > td:nth-child(2)',
    filters: [{ name: 'replace', args: ['.', ''] }, { name: 'replace', args: [',', '.'] }],
  },
  search: {
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Query.Keywords }}',
      showsearch: '1',
      orderby: 'added',
      sort: 'desc',
      incldead: '1',
    },
    rows: { selector: 'table.tableinborder[summary] > tbody > tr' },
    fields: {
      download: {
        selector: 'a[href^="download.php?torrent="]',
        attribute: 'href',
      },
      title: { selector: 'a[href^="details.php?id="]:has(b)' },
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      comments: {
        selector: 'td.tablea > table > tbody > tr:nth-child(2) > td:nth-child(4) > a',
        attribute: 'href',
      },
      size: {
        selector: 'td.tablea > table > tbody > tr:nth-child(2) > td:nth-child(1) > b:nth-child(1)',
      },
      grabs: {
        selector: 'td.tablea > table > tbody > tr:nth-child(2) > td:nth-child(3) > b',
      },
      files: {
        selector: 'td.tablea > table > tbody > tr:nth-child(2) > td:nth-child(1) > b:nth-child(2)',
      },
      seeders: {
        selector: 'td.tablea > table > tbody > tr:nth-child(2) > td:nth-child(2) > b:nth-child(1)',
      },
      leechers: {
        selector: 'td.tablea > table > tbody > tr:nth-child(2) > td:nth-child(2) > b:nth-child(3)',
      },
      date: {
        selector: 'td.tablea > table > tbody > tr:nth-child(2) > td:nth-child(5)',
        filters: [
          { name: 'replace', args: [' ', ' '] },
          { name: 'dateparse', args: '02.01.2006 15:04:05' },
        ],
      },
      downloadvolumefactor: {
        case: {
          'font[color="red"]:contains("Only Upload")': '0',
          '*': '1',
        },
      },
      uploadvolumefactor: { case: { '*': '1' } },
    },
    paths: [{ path: '/browse.php' }],
  },
  encoding: 'UTF-8',
  source: 'cardigann',
};
