import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'ibit',
  name: 'IBit',
  description: 'IBit is a Public Verified Torrent Search Engine',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://ibit.to/', 'https://ibit.uno/', 'https://ibit.am/'],
  legacylinks: ['https://ibit.ws/'],
  caps: {
    categorymappings: [
      { id: 'Movies', cat: 'Movies', desc: 'Movies' },
      { id: 'TV', cat: 'TV', desc: 'TV' },
      { id: 'Music', cat: 'Audio', desc: 'Music' },
      { id: 'Games', cat: 'PC/Games', desc: 'Games' },
      { id: 'Software', cat: 'PC', desc: 'Software' },
      { id: 'Anime', cat: 'TV/Anime', desc: 'Anime' },
      { id: 'Books', cat: 'Books', desc: 'Books' },
      { id: 'Other', cat: 'Other', desc: 'Other' },
      { id: 'Tutorials', cat: 'Other', desc: 'Tutorials' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
  },
  settings: [
    {
      name: 'sortby',
      type: 'select',
      label: 'Sort requested from site (applies only to Keyword searches)',
      default: 'uploaded_at',
      options: {
        uploaded_at: 'created',
        seeders: 'seeders',
        size: 'size',
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
  download: {
    infohash: {
      hash: {
        selector: 'script:contains("magnet:")',
        filters: [
          { name: 'regexp', args: "play\\('(.+?)'" },
          { name: 're_replace', args: ['X-X', ''] },
        ],
      },
      title: {
        selector: 'h1',
        filters: [{ name: 'trim' }, { name: 'validfilename' }],
      },
    },
  },
  search: {
    paths: [
      {
        path: 'torrent-search/{{ if .Keywords }}{{ .Keywords }}{{ else }}{{ .Today.Year }}{{ end }}/all/{{ .Config.sortby }}:{{ .Config.order }}/1/',
      },
    ],
    rows: {
      selector: 'table.striped > tbody > tr',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      title: { selector: 'a[href^="/torrent/"]' },
      details: { selector: 'a[href^="/torrent/"]', attribute: 'href' },
      download: { selector: 'a[href^="/torrent/"]', attribute: 'href' },
      category: {
        selector: 'a[href^="/torrent-search/"]',
        attribute: 'title',
      },
      date: {
        selector: 'td:nth-child(4)',
        filters: [{ name: 'timeago' }],
      },
      size: { selector: 'td:nth-child(5)' },
      seeders: { selector: 'td:nth-child(6)' },
      leechers: { selector: 'td:nth-child(7)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
