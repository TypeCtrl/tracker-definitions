import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'myspleen',
  name: 'MySpleen',
  language: 'en-US',
  encoding: 'UTF-8',
  links: ['https://www.myspleen.org'],
  caps: {
    categorymappings: [
      { id: '3', cat: 'TV' },
      { id: '20', cat: 'Other' },
      { id: '24', cat: 'TV' },
      { id: '25', cat: 'TV' },
      { id: '26', cat: 'TV' },
      { id: '28', cat: 'TV' },
      { id: '29', cat: 'TV' },
      { id: '30', cat: 'TV' },
      { id: '31', cat: 'TV' },
      { id: '32', cat: 'TV' },
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
    error: [{ selector: 'div#content:has(h2:contains("Login Failed"))' }],
    test: {
      path: '/browse.php',
      selector: 'span.key:contains("Ratio") + span.value',
    },
  },
  ratio: {
    path: '/browse.php',
    selector: 'span.key:contains("Ratio") + span.value',
  },
  search: {
    path: '/browse.php',
    method: 'post',
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Query.Keywords }}',
      incldead: '1',
      title: '0',
    },
    rows: { selector: 'table#main-torrents > tbody > tr' },
    fields: {
      title: { selector: 'td.tor-name > a', attribute: 'title' },
      category: {
        selector: 'td[class^="cat-"] > a',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      details: { selector: 'td.tor-name > a', attribute: 'href' },
      download: { selector: 'td.tor-down > a', attribute: 'href' },
      files: { selector: 'td:nth-child(5)' },
      size: { selector: 'td:nth-child(8)' },
      grabs: {
        selector: 'td:nth-child(9)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      seeders: {
        selector: 'td:nth-child(10)',
        filters: [{ name: 'regexp', args: '^(\\d+)' }],
      },
      leechers: {
        selector: 'td:nth-child(11)',
        filters: [{ name: 'regexp', args: '^(\\d+)' }],
      },
      date: { selector: 'td:nth-child(7)' },
      downloadvolumefactor: {
        case: { 'span.star': '0', 'span.fltime': '0', '*': '1' },
      },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
  source: 'cardigann',
};
