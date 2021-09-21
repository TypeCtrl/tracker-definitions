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
      { id: '7', cat: 'Books/Mags', desc: 'Magazines' },
    ],
    modes: { search: ['q'], 'book-search': ['q', 'title', 'author'] },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'orderby',
      type: 'select',
      label: 'Sort requested from site',
      default: 'added',
      options: {
        '@relevance': 'relevance',
        title: 'title',
        size: 'size',
        added: 'added',
        seeders: 'seeders',
      },
    },
    {
      name: 'order',
      type: 'select',
      label: 'Order requested from site',
      default: 'DESC',
      options: { DESC: 'desc', ASC: 'asc' },
    },
  ],
  login: {
    path: '/',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      keeplogged: 1,
      login: 'Log In!',
    },
    error: [{ selector: 'center:first-of-type' }],
    test: { path: 'torrents/', selector: 'div#pre_header' },
  },
  search: {
    paths: [{ path: 'torrents/' }],
    inputs: {
      search:
        '{{ if .Query.Author }} @authors {{ .Query.Author }}{{ else }}{{ end }}{{ if .Query.Title }} @title {{ .Query.Title }}{{ else }}{{ end }}{{ .Keywords }}',
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
      _author: { selector: '.authorLink', optional: true },
      _editor: { selector: '.editorLink', optional: true },
      author: { text: '{{ or (.Result._author) (.Result._editor) }}' },
      _year: { selector: '.torYear', optional: true },
      _filetype: { selector: '.torFormat', optional: true },
      _retail: { selector: '.torRetail', optional: true },
      booktitle: { selector: '.title a' },
      title: {
        text: '{{ .Result.booktitle }}',
        filters: [
          {
            name: 'append',
            args: '{{ if .Result.author }} by {{ .Result.author }}{{ else }}{{ end }}{{ if .Result._year }} {{ .Result._year }}{{ else }}{{ end }}{{ if .Result._filetype }} {{ .Result._filetype }}{{ else }}{{ end }}{{ if .Result._retail }} {{ .Result._retail }}{{ else }}{{ end }}',
          },
        ],
      },
      details: { selector: '.title a', attribute: 'href' },
      date: {
        optional: true,
        selector: '.t_files_size_added time',
        attribute: 'datetime',
      },
      download: { selector: 'a[title="Download"]', attribute: 'href' },
      files: {
        selector: '.t_files_size_added',
        filters: [{ name: 'regexp', args: '^\\s*(\\d+)\\s*file' }],
      },
      size: {
        selector: '.t_files_size_added span',
        attribute: 'data-bytecount',
      },
      seeders: { optional: true, selector: '.seeders' },
      leechers: { optional: true, selector: '.leechers' },
      grabs: { optional: true, selector: '.snatches' },
      downloadvolumefactor: { text: 1 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
