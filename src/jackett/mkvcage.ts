import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'mkvcage',
  name: 'MkvCage',
  description: 'MkvCage is a Public torrent site for MOVIES / TV',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://www.mkvcage.com/'],
  legacylinks: ['https://www.mkvcage.ws/', 'https://mkvcage.com/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [
      { id: '1', cat: 'Movies' },
      { id: '2', cat: 'TV' },
      { id: '3', cat: 'Other' },
    ],
  },
  settings: [],
  download: { selector: 'a[href^="magnet:?"]' },
  search: {
    paths: [
      { path: '{{if .Keywords}}?s={{ .Keywords}}{{else}}{{end}}' },
      { path: 'page/2/{{if .Keywords}}?s={{ .Keywords}}{{else}}{{end}}' },
      { path: 'page/3/{{if .Keywords}}?s={{ .Keywords}}{{else}}{{end}}' },
      { path: 'page/4/{{if .Keywords}}?s={{ .Keywords}}{{else}}{{end}}' },
      { path: 'page/5/{{if .Keywords}}?s={{ .Keywords}}{{else}}{{end}}' },
    ],
    rows: { selector: 'article', filters: [{ name: 'andmatch' }] },
    fields: {
      title: { selector: 'h2 a' },
      category: {
        selector: 'span.cat-links',
        attribute: 'class',
        case: {
          'a[href*="/category/movies/"]': '1',
          'a[href*="/category/tv-shows/"]': '2',
          '*': '3',
        },
      },
      details: { selector: 'h2 a', attribute: 'href' },
      download: { selector: 'h2 a', attribute: 'href' },
      description: { selector: 'pre' },
      banner: { selector: 'div img', attribute: 'src' },
      date: { selector: 'span.posted-on a time', attribute: 'datetime' },
      size: {
        selector: 'h2 a',
        filters: [
          {
            name: 're_replace',
            args: ['(.*?)(\\d+)\\.?\\d?([T|G|M|K]B)$', '$2 $3'],
          },
        ],
      },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};
