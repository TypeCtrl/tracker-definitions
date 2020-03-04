import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'academictorrents',
  name: 'AcademicTorrents',
  description:
    'AcademicTorrents is a Public Community-Maintained Distributed Repository for datasets and scientific knowledge.',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://academictorrents.com/'],
  caps: {
    categorymappings: [
      { id: '5', cat: 'Books', desc: 'Paper' },
      { id: '6', cat: 'Other', desc: 'Dataset' },
      { id: '7', cat: 'TV/Documentary', desc: 'Course' },
    ],
    modes: { search: ['q'] },
  },
  settings: [
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'added',
      options: {
        added: 'created',
        seeders: 'seeders',
        size: 'size',
        name: 'title',
      },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'DESC',
      options: { DESC: 'desc', ASC: 'asc' },
    },
  ],
  search: {
    paths: [{ path: 'browse.php' }, { path: 'browse.php', inputs: { page: 1 } }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      sort_field: '{{ .Config.sort }}',
      sort_dir: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table.table> tbody > tr:has(a[href^="/browse.php?cat="])',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: {
        selector: 'a[href^="/browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: { selector: 'a[href^="/details/"]' },
      details: { selector: 'a[href^="/details/"]', attribute: 'href' },
      download: {
        selector: 'a[href^="/details/"]',
        attribute: 'href',
        filters: [
          { name: 'replace', args: ['/details/', '/download/'] },
          { name: 'append', args: '.torrent' },
        ],
      },
      date: {
        selector: 'td:nth-child(4)',
        filters: [{ name: 'dateparse', args: '2006-01-02' }],
      },
      size: { selector: 'td:nth-child(5)' },
      grabs: { selector: 'td:nth-child(6)' },
      seeders: {
        selector: 'td:nth-child(7):not(:empty)',
        optional: true,
        filters: [{ name: 'replace', args: ['+', ''] }],
      },
      leechers: { selector: 'td:nth-child(8)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
