import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'woot',
  name: 'wOOt',
  description: 'wOOt is a Private GERMAN site for TV / MOVIES / GENERAL',
  language: 'de-DE',
  type: 'private',
  encoding: 'ISO-8859-1',
  links: ['https://mywoot.biz/'],
  caps: {
    categorymappings: [
      { id: '73', cat: 'Audio/Audiobook', desc: 'Misc/Abooks' },
      { id: '74', cat: 'Other', desc: 'Misc/All' },
      { id: '72', cat: 'Books/Ebook', desc: 'Misc/Ebooks' },
      { id: '71', cat: 'PC/Games', desc: 'Misc/Games' },
      { id: '70', cat: 'PC/0day', desc: 'Misc/Software' },
      { id: '60', cat: 'Movies/HD', desc: 'Movies/HD' },
      { id: '63', cat: 'Movies/Other', desc: 'Movies/Misc' },
      { id: '61', cat: 'Movies/SD', desc: 'Movies/SD' },
      { id: '62', cat: 'Movies', desc: 'Movies/Untouched' },
      { id: '66', cat: 'TV/Documentary', desc: 'TV/Doku HD' },
      { id: '67', cat: 'TV/Documentary', desc: 'TV/Doku SD' },
      { id: '69', cat: 'TV/Other', desc: 'TV/Misc' },
      { id: '64', cat: 'TV/HD', desc: 'TV/Serien HD' },
      { id: '65', cat: 'TV/SD', desc: 'TV/Serien SD' },
      { id: '68', cat: 'TV/Sport', desc: 'TV/Sport' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
  ],
  login: {
    path: 'kokosnuss/kscripts/process/login.php',
    method: 'post',
    inputs: {
      login: '{{ .Config.username }}',
      pw: '{{ .Config.password }}',
    },
    selectorinputs: {
      __csrf_magic: {
        selector: 'input[name="__csrf_magic"]',
        attribute: 'value',
      },
      tstamp: { selector: 'input[name="tstamp"]', attribute: 'value' },
    },
    error: [{ selector: 'div.error' }],
    test: { path: 'index.php', selector: 'a[href="/logout.php"]' },
  },
  search: {
    paths: [{ path: 'list.php' }, { path: 'list.php', inputs: { page: 1 } }],
    inputs: {
      q: '{{ if .Query.IMDBID }}{{ else }}{{ .Keywords }}{{ end }}',
      cat: 0,
      in: 'name',
      imdb: '{{ if .Query.IMDBID }}{{ .Query.IMDBID }}{{ else }}{{ end }}',
    },
    rows: {
      selector: 'div.tbList table tbody tr:has(a[href^="download.php?torrent="])',
    },
    fields: {
      category: {
        selector: 'a[href^="/list.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: { selector: 'a[href^="item.php?id="]' },
      details: {
        selector: 'a[href^="item.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?torrent="]',
        attribute: 'href',
      },
      poster: {
        selector: 'a[href^="item.php?id="]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'src="(.+?)"' }],
      },
      imdb: {
        selector: 'a[href*="imdb.com/title/tt"]',
        attribute: 'href',
      },
      size: {
        selector: 'td:last-child',
        filters: [{ name: 'regexp', args: '/ (.+? [T|G|M|K]*B)' }],
      },
      date: {
        selector: 'td:last-child',
        filters: [
          {
            name: 'regexp',
            args: '(\\d{2}\\.\\d{2}\\.\\d{4} \\d{2}:\\d{2}:\\d{2})',
          },
          { name: 'append', args: ' +01:00' },
          { name: 'dateparse', args: '02.01.2006 15:04:05 -07:00' },
        ],
      },
      seeders: {
        selector: 'td:last-child',
        filters: [{ name: 'regexp', args: '(\\d+) Peers' }],
      },
      leechers: { text: 0 },
      downloadvolumefactor: { text: 1 },
      uploadvolumefactor: { text: 1 },
      minimumratio: { text: 0.7 },
      minimumseedtime: { text: 172800 },
    },
  },
  source: 'jackett',
};
