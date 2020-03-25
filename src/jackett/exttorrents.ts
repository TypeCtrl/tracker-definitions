import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'exttorrents',
  name: 'EXT Torrents',
  description: 'EXT Torrents is a Public torrent site for MOVIES / TV / GENERAL',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://ext.to/'],
  legacylinks: ['https://ext.unblockninja.com/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [
      { id: '/anime/', cat: 'TV/Anime' },
      { id: '/applications/', cat: 'PC' },
      { id: '/books/', cat: 'Books' },
      { id: '/games/', cat: 'PC/Games' },
      { id: '/movies/', cat: 'Movies' },
      { id: '/music/', cat: 'Audio' },
      { id: '/other/', cat: 'Other' },
      { id: '/tv/', cat: 'TV' },
    ],
  },
  settings: [
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'age',
      options: { age: 'created', seed: 'seeders', size: 'size' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'desc',
      options: { desc: 'desc', asc: 'asc' },
    },
  ],
  download: { selector: 'a[href^="magnet:?xt="]', attribute: 'href' },
  search: {
    paths: [
      {
        path:
          '{{ if .Keywords }}search/?order={{ .Config.sort }}&sort={{ .Config.type }}&q={{ .Keywords }}{{ else }}latest/?order={{ .Config.sort }}&sort={{ .Config.type }}{{ end }}',
      },
    ],
    rows: { selector: 'table.table-striped > tbody > tr' },
    fields: {
      category: {
        selector: 'td:nth-child(1) div div a',
        attribute: 'href',
      },
      title: { selector: 'td:nth-child(1) div a' },
      details: { selector: 'td:nth-child(1) div a', attribute: 'href' },
      download: { selector: 'td:nth-child(1) div a', attribute: 'href' },
      size: { selector: 'td:nth-child(2)' },
      files: { selector: 'td:nth-child(3)' },
      date: { selector: 'td:nth-child(4)' },
      seeders: { selector: 'td:nth-child(5)' },
      leechers: { selector: 'td:nth-child(6)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
