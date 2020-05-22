import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'pornforall',
  name: 'Pornforall',
  description: 'Pornforall is a RUSSIAN Public tracker for 3X',
  language: 'ru-RU',
  type: 'public',
  encoding: 'WINDOWS-1251',
  links: ['https://pornforall.net/'],
  caps: {
    modes: { search: ['q'], 'tv-search': ['q'], 'movie-search': ['q'] },
    categorymappings: [{ id: 'XXX', cat: 'XXX' }],
  },
  settings: [],
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      search: '{{ .Keywords }}',
      searchs: '',
      stype: 0,
      cat: 0,
      tag: 0,
    },
    rows: { selector: 'article' },
    fields: {
      category: { text: 'XXX' },
      title: { selector: 'h1' },
      details: { selector: 'a', attribute: 'href' },
      download: {
        selector: 'a',
        attribute: 'href',
        filters: [
          { name: 'regexp', args: 'film(\\d+)-' },
          { name: 'prepend', args: 'download.php?id=' },
        ],
      },
      banner: { selector: 'img.im', attribute: 'src' },
      date: {
        selector: 'a[href^="browse.php?date="]',
        attribute: 'href',
        filters: [
          { name: 'querystring', args: 'date' },
          { name: 'dateparse', args: '2006-01-02' },
        ],
      },
      size: {
        selector: 'font[color="grey"]',
        filters: [{ name: 'regexp', args: 'Размер: (.+?)$' }],
      },
      seeders: {
        selector: 'span.inf',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      leechers: {
        selector: 'span.inf',
        filters: [{ name: 'regexp', args: '(\\d+)$' }],
      },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
