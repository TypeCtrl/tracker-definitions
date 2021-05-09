import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'yourbittorrent',
  name: 'YourBittorrent',
  description: 'YourBittorrent is a Public torrent index',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://yourbittorrent.com/', 'https://yourbittorrent2.com/', 'https://yourbittorrent.nocensor.space/'],
  legacylinks: ['https://yourbittorrent.host/'],
  caps: {
    categorymappings: [
      { id: 'anime', cat: 'TV/Anime', desc: 'Anime' },
      { id: 'software', cat: 'PC', desc: 'Software' },
      { id: 'ebooks', cat: 'Books', desc: 'Ebooks' },
      { id: 'adult', cat: 'XXX', desc: 'Adult' },
      { id: 'games', cat: 'PC/Games', desc: 'Games' },
      { id: 'movies', cat: 'Movies', desc: 'Movies' },
      { id: 'music', cat: 'Audio', desc: 'Music' },
      { id: 'television', cat: 'TV', desc: 'TV' },
      { id: 'other', cat: 'Other', desc: 'Other' },
      { id: 'photos', cat: 'Other', desc: 'Photos' },
      { id: 'pictures', cat: 'Other', desc: 'Pictures' },
      { id: 'unknown', cat: 'Other', desc: 'Unknown' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
  },
  settings: [],
  search: {
    paths: [{ path: '/' }],
    inputs: {
      v: '',
      c: '',
      q: '{{ if .Keywords }}{{ .Keywords }}{{ else }}{{ .Today.Year }}{{ end }}',
    },
    keywordsfilters: [{ name: 're_replace', args: ['[\\s]+', '-'] }, { name: 'tolower' }],
    rows: {
      selector: 'tr.table-default:has(a[href^="/torrent/"])',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: {
        selector: 'td:nth-child(1)',
        attribute: 'onclick',
        filters: [{ name: 'regexp', args: "href='/(.+?).html" }],
      },
      title: { selector: 'td:nth-child(2) a' },
      details: { selector: 'td:nth-child(2) a', attribute: 'href' },
      download: {
        selector: 'td:nth-child(2) a',
        attribute: 'href',
        filters: [
          { name: 'split', args: ['/', 2] },
          { name: 'prepend', args: '/down/' },
          { name: 'append', args: '.torrent' },
        ],
      },
      size: { selector: 'td:nth-child(3)' },
      date: {
        selector: 'td:nth-child(4):contains("/")',
        optional: true,
        filters: [
          { name: 'append', args: ' -07:00' },
          { name: 'dateparse', args: '02/01/06 -07:00' },
        ],
      },
      seeders: { selector: 'td:nth-child(5)' },
      leechers: { selector: 'td:nth-child(6)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
