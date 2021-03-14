import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'extratorrent-cd',
  name: 'ExtraTorrent.cd',
  description: 'ExtraTorrent.cd is a Public tracker for MOVIE / TV / GENERAL magnets',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['https://extratorrent.si/'],
  legacylinks: ['https://extratorrent.unblockit.pro/', 'https://extratorrent.unblockit.one/'],
  caps: {
    categorymappings: [
      { id: 'Movies', cat: 'Movies', desc: 'Movies' },
      { id: 'Video', cat: 'Movies', desc: 'Movies' },
      { id: 'TV', cat: 'TV', desc: 'TV' },
      { id: 'Music', cat: 'Audio', desc: 'Music' },
      { id: 'Porn', cat: 'XXX', desc: 'Adult / Porn' },
      { id: 'Software', cat: 'PC', desc: 'Software' },
      { id: 'Games', cat: 'Console', desc: 'Games' },
      { id: 'Other', cat: 'Other/Misc', desc: 'Other' },
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
    paths: [
      { path: 'search/?search={{ .Keywords }}&srt=added&order=desc' },
      { path: 'search/?page=2&search={{ .Keywords }}&srt=added&order=desc' },
      { path: 'search/?page=3&search={{ .Keywords }}&srt=added&order=desc' },
    ],
    keywordsfilters: [{ name: 're_replace', args: ['[\\s]+', '.'] }],
    rows: {
      selector: 'tr[class^="tl"]',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: { selector: 'span.c_tor > a' },
      title: { selector: 'a[href*="/torrent/"][title^="view"]' },
      details: {
        selector: 'a[href*="/torrent/"]',
        attribute: 'href',
        filters: [{ name: 'replace', args: ['///', '//'] }],
      },
      download: {
        selector: 'a[href^="magnet:?xt="]',
        attribute: 'href',
      },
      date: {
        selector: 'td:nth-last-of-type(5):contains("ago")',
        optional: true,
        filters: [{ name: 'replace', args: [' ', '-'] }, { name: 'replace', args: ['-', ' '] }, { name: 'timeago' }],
      },
      size: { selector: 'td:nth-last-of-type(4)' },
      seeders: { optional: true, selector: 'td.sy, td.sn' },
      leechers: { optional: true, selector: 'td.ly, td.ln' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
