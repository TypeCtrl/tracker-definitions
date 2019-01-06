import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'nethd',
  name: 'NetHD',
  description: 'A vietnamese tracker',
  language: 'vi-VN',
  encoding: 'UTF-8',
  links: ['http://nethd.org/'],
  caps: {
    categorymappings: [
      { id: '401', cat: 'Movies' },
      { id: '402', cat: 'Audio' },
      { id: '403', cat: 'PC/Games' },
      { id: '404', cat: 'PC' },
      { id: '405', cat: 'Other' },
      { id: '406', cat: 'Books' },
    ],
  },
  login: {
    path: '/takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'form#loginform > span.warning' }],
    test: { path: '/torrents.php' },
  },
  ratio: {
    path: '/torrents.php',
    selector: 'div.user-info-extend > dl > dt:contains("Ratio:") + dd',
  },
  search: {
    path: '/torrents.php',
    method: 'post',
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Query.Keywords }}',
      search_area: 0,
      search_mode: 0,
      spstate: 0,
      inclbookmarked: 0,
      incldead: 1,
    },
    rows: { selector: 'tr:has(td.name)' },
    fields: {
      title: {
        selector: 'td.name > div > a.poster-preview[title]',
        attribute: 'title',
      },
      category: {
        selector: 'td.category > a',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      details: {
        selector: 'td.name > div > a.poster-preview[title]',
        attribute: 'href',
      },
      comments: { selector: 'a[href*="#comments"]', attribute: 'href' },
      download: {
        selector: 'a.bookmark[onclick]',
        attribute: 'onclick',
        filters: [
          { name: 'replace', args: [',false)', ''] },
          {
            name: 'replace',
            args: ['return bookmark(', 'download.php?id='],
          },
        ],
      },
      size: { selector: 'td:nth-child(5)' },
      seeders: { selector: 'td:nth-child(6)' },
      leechers: { selector: 'td:nth-child(7)' },
      grabs: { selector: 'td:nth-child(8)' },
      date: {
        selector: 'td:nth-child(4)',
        filters: [
          { name: 'append', args: ' +0700' },
          { name: 'dateparse', args: '2006-01-0215:04:05 -0700' },
        ],
      },
      downloadvolumefactor: {
        case: {
          'span.label:contains("Free")': '0',
          'span.label:contains("50%")': '0.5',
          '*': '1',
        },
      },
      uploadvolumefactor: {
        case: { 'span.label:contains("2X")': '2', '*': '1' },
      },
    },
  },
  source: 'cardigann',
};
