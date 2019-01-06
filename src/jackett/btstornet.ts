import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'btstornet',
  name: 'BTstor.net',
  description: 'BTstor.net is a Public BT-Scene clone for MOVIES / TV / GENERAL',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://btstor.net/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [
      { id: 'anime', cat: 'TV/Anime' },
      { id: 'books', cat: 'Books' },
      { id: 'games', cat: 'PC/Games' },
      { id: 'movies', cat: 'Movies' },
      { id: 'music', cat: 'Audio' },
      { id: 'other', cat: 'Other' },
      { id: 'shows', cat: 'TV' },
      { id: 'software', cat: 'PC' },
      { id: 'video', cat: 'Movies' },
      { id: 'xxx', cat: 'XXX' },
    ],
  },
  settings: [],
  download: { selector: '#dlt_' },
  search: {
    keywordsfilters: [{ name: 're_replace', args: [' ', '+'] }],
    paths: [{ path: 'q/{{ if .Keywords }}{{ .Keywords }}{{else}}test{{end}}/date/' }],
    rows: {
      selector: 'table.tor > tbody > tr[class$="_tr"]',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      title: { selector: 'td.tname_index > a' },
      details: { selector: 'td.tname_index > a', attribute: 'href' },
      category: {
        selector: 'td.tname_index > img',
        attribute: 'src',
        filters: [{ name: 'replace', args: ['.png', ''] }, { name: 'split', args: ['/', 6] }],
      },
      download: { selector: 'td.tname_index > a', attribute: 'href' },
      size: { selector: 'td.tsize_index' },
      seeders: { selector: 'td.tseeds_index' },
      leechers: { selector: 'td.tpeers_index' },
      date: {
        selector: 'td.tupd_index',
        filters: [{ name: 'timeago' }],
      },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};
