import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'skytorrentsclone',
  name: 'SkyTorrentsClone',
  description: 'SkyTorrents.lol is a Public SkyTorrents clone for TV / MOVIES / GENERAL',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://www.skytorrents.lol/'],
  legacylinks: [
    'https://www.skytorrents.to/',
    'https://skytorrents.black-mirror.xyz/',
    'https://skytorrents.unblocked.casa/',
    'https://skytorrents.proxyportal.fun/',
    'https://skytorrents.uk-unblock.xyz/',
    'https://skytorrents.ind-unblock.xyz/',
    'https://skytorrents.unblocked.bar/',
    'https://skytorrents.proxyportal.pw/',
    'https://skytorrents.uk-unblock.pro/',
  ],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
    },
    categorymappings: [
      { id: 'other', cat: 'Other' },
      { id: 'album', cat: 'Audio' },
      { id: 'ebook', cat: 'Books' },
      { id: 'movie', cat: 'Movies' },
      { id: 'show', cat: 'TV' },
      { id: 'audio', cat: 'Audio' },
      { id: 'doc', cat: 'Books' },
      { id: 'games', cat: 'PC/Games' },
      { id: 'software', cat: 'PC' },
    ],
  },
  settings: [
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'created',
      options: { created: 'created', seeders: 'seeders' },
    },
  ],
  search: {
    paths: [
      {
        path:
          '{{ if .Keywords }}?query={{ .Keywords }}&sort={{ .Config.sort }}{{else}}top100?sort={{ .Config.sort }}{{end}}',
      },
      {
        path:
          '{{ if .Keywords }}?query={{ .Keywords }}&sort={{ .Config.sort }}&page=2{{else}}{{end}}',
      },
      {
        path:
          '{{ if .Keywords }}?query={{ .Keywords }}&sort={{ .Config.sort }}&page=3{{else}}{{end}}',
      },
      {
        path:
          '{{ if .Keywords }}?query={{ .Keywords }}&sort={{ .Config.sort }}&page=4{{else}}{{end}}',
      },
    ],
    rows: { selector: 'tr.result' },
    fields: {
      title: { selector: 'td a' },
      category: { text: 'other' },
      'category|noappend': {
        selector: 'a.label[href*="type="]',
        optional: true,
      },
      details: { selector: 'td a', attribute: 'href' },
      magnet: { selector: 'a[href^="magnet:?"]', attribute: 'href' },
      size: { selector: 'td:nth-child(2)' },
      files: { selector: 'td:nth-child(3)' },
      date: {
        selector: 'td:nth-child(4)',
        filters: [{ name: 'timeago' }],
      },
      seeders: { selector: 'td:nth-child(5)' },
      leechers: { selector: 'td:nth-child(6)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
