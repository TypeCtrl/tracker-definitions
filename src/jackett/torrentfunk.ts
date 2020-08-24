import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'torrentfunk',
  name: 'TorrentFunk',
  description: 'TorrentFunk is a Public torrent index',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: [
    'https://www.torrentfunk.com/',
    'https://www.torrentfunk2.com/',
    'https://torrentfunk.unblockit.top/',
  ],
  legacylinks: [
    'https://torrentfunk.unblockit.pro/',
    'https://torrentfunk.unblockit.one/',
    'https://torrentfunk.unblockit.me/',
    'https://torrentfunk.unblockit.pw/',
    'https://torrentfunk.unblockit.id/',
    'https://torrentfunk.unblockit.win/',
  ],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
    },
    categorymappings: [
      { id: '0', cat: 'Other' },
      { id: '1', cat: 'Movies' },
      { id: '2', cat: 'Audio' },
      { id: '3', cat: 'TV' },
      { id: '4', cat: 'PC/Games' },
      { id: '5', cat: 'PC' },
      { id: '6', cat: 'TV/Anime' },
      { id: '7', cat: 'XXX' },
      { id: '8', cat: 'Other' },
      { id: '9', cat: 'Other' },
      { id: '10', cat: 'Other' },
      { id: '11', cat: 'Other' },
    ],
  },
  settings: [],
  search: {
    paths: [{ path: 'all/torrents/{{ .Keywords }}.html' }],
    keywordsfilters: [{ name: 're_replace', args: ['[\\s]+', '-'] }, { name: 'tolower' }],
    rows: {
      selector: 'table.tmain tbody tr:has(a[href^="/torrent/"])',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      title: { selector: 'div a[href^="/torrent/"]' },
      category: {
        selector: 'td[class^="tv"], td[class^="tn"]',
        attribute: 'class',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      details: {
        selector: 'div a[href^="/torrent/"]',
        attribute: 'href',
      },
      download: {
        selector: 'div a[href^="/torrent/"]',
        attribute: 'href',
        filters: [
          { name: 'split', args: ['/', 2] },
          { name: 'prepend', args: '/tor/' },
          { name: 'append', args: '.torrent' },
        ],
      },
      date: {
        selector: 'td:nth-child(2):not(:contains("day"))',
        optional: true,
        filters: [{ name: 'dateparse', args: '2 Jan' }],
      },
      size: { selector: 'td:nth-child(3)' },
      seeders: { selector: 'td:nth-child(4)' },
      leechers: { selector: 'td:nth-child(5)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
