import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'yourbittorrent',
  name: 'YourBittorrent',
  description: 'YourBittorrent is a Public torrent index',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: [
    'https://yourbittorrent.com/',
    'https://yourbittorrent2.com/',
    'https://yourbittorrent.host/',
  ],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [
      { id: 'Anime', cat: 'TV/Anime' },
      { id: 'Software', cat: 'PC' },
      { id: 'Apps', cat: 'PC' },
      { id: 'eBooks', cat: 'Books' },
      { id: 'XXX', cat: 'XXX' },
      { id: 'Adult', cat: 'XXX' },
      { id: 'Games', cat: 'PC/Games' },
      { id: 'Movies', cat: 'Movies' },
      { id: 'Music', cat: 'Audio' },
      { id: 'Television', cat: 'TV' },
      { id: 'Series', cat: 'TV' },
      { id: 'Other', cat: 'Other' },
      { id: 'Pictures', cat: 'Other' },
    ],
  },
  settings: [],
  search: {
    paths: [{ path: '/' }],
    inputs: { v: '', c: '', q: '{{ .Keywords }}' },
    keywordsfilters: [{ name: 're_replace', args: ['[\\s]+', '-'] }, { name: 'tolower' }],
    rows: {
      selector: 'tr.table-default',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: { selector: 'td:nth-child(1) a', attribute: 'title' },
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
        filters: [{ name: 'dateparse', args: '02/01/06' }],
      },
      seeders: { selector: 'td:nth-child(5)' },
      leechers: { selector: 'td:nth-child(6)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
