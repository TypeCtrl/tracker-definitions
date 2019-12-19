import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'skytorrentsclone',
  name: 'SkyTorrentsClone',
  description: 'SkyTorrents.lol is a Public SkyTorrents clone for TV / MOVIES / GENERAL',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://www.skytorrents.lol/'],
  legacylinks: ['https://www.skytorrents.to/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [
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
  settings: [],
  search: {
    paths: [
      {
        path:
          '{{ if .Keywords }}?query={{ .Keywords }}&sort=created{{else}}top100?sort=created{{end}}',
      },
      {
        path: '{{ if .Keywords }}?query={{ .Keywords }}&sort=created&page=2{{else}}{{end}}',
      },
      {
        path: '{{ if .Keywords }}?query={{ .Keywords }}&sort=created&page=3{{else}}{{end}}',
      },
      {
        path: '{{ if .Keywords }}?query={{ .Keywords }}&sort=created&page=4{{else}}{{end}}',
      },
    ],
    rows: { selector: 'tr.result' },
    fields: {
      title: { selector: 'td a' },
      category: { optional: true, selector: 'a.label[href*="type="]' },
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
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};
