import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'bibliotik',
  name: 'Bibliotik',
  description: 'Bibliotik is a private site for eBooks and audiobooks',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://bibliotik.me/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'PC', desc: 'Applications' },
      { id: '3', cat: 'Audio/Audiobook', desc: 'Audiobooks' },
      { id: '4', cat: 'Books/Comics', desc: 'Comics' },
      { id: '5', cat: 'Books/Ebook', desc: 'eBooks' },
      { id: '7', cat: 'Books/Magazines', desc: 'Magazines' },
    ],
    modes: { search: ['q'] },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'orderby',
      type: 'select',
      label: 'Sort requested from site',
      default: 'relevance',
      options: {
        relevance: 'relevance',
        year: 'year',
        size: 'size',
        duration: 'duration',
        added: 'added',
        leechers: 'leechers',
        seeders: 'seeders',
        snatches: 'snatches',
        comments: 'comments',
        files: 'files',
      },
    },
    {
      name: 'order',
      type: 'select',
      label: 'Order requested from site',
      default: 'desc',
      options: { desc: 'desc', asc: 'asc' },
    },
  ],
  login: {
    path: '/',
    method: 'form',
    form: 'form#loginform',
    submitpath: '/',
    inputs: {
      action: 'login',
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      keeploggedin: 1,
    },
    error: [{ selector: 'center:first-of-type' }],
    test: { path: 'torrents/', selector: 'div#pre_header' },
  },
  search: {
    paths: [{ path: 'torrents/' }],
    inputs: {
      search: '{{ .Keywords }}',
      $raw: '{{ range .Categories }}cat[]={{.}}&{{end}}',
      orderby: '{{ .Config.orderby }}',
      order: '{{ .Config.order }}',
    },
    rows: { selector: 'table#torrents_table > tbody > tr:has(.title)' },
    fields: {
      category: {
        selector: 'td:first-child',
        case: {
          'div[title="Applications"]': 1,
          'div[title="Audiobooks"]': 3,
          'div[title="Comics"]': 4,
          'div[title="Ebooks"]': 5,
          'div[title="Magazines"]': 7,
        },
      },
      _year: { selector: '.torYear', optional: true },
      _filetype: { selector: '.torFormat', optional: true },
      title: {
        selector: '.title a',
        filters: [
          {
            name: 'append',
            args:
              '{{ if .Result._year }} {{ .Result._year }}{{else}}{{end}}{{ if .Result._filetype }} {{ .Result._filetype }}{{else}}{{end}}',
          },
        ],
      },
      details: { selector: '.title a', attribute: 'href' },
      date: {
        optional: true,
        selector: '.t_files_size_added time',
        filters: [{ name: 'timeago' }],
      },
      download: { selector: 'a[title="Download"]', attribute: 'href' },
      size: {
        selector: '.t_files_size_added',
        filters: [{ name: 'split', args: [',', 1] }, { name: 'trim' }],
      },
      seeders: { optional: true, selector: '.seeders' },
      leechers: { optional: true, selector: '.leechers' },
      grabs: { optional: true, selector: '.snatches' },
      downloadvolumefactor: { case: { '*': 1 } },
      uploadvolumefactor: { case: { '*': 1 } },
    },
  },
  source: 'jackett',
};
