import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'skytorrentsclone',
  name: 'SkyTorrentsClone',
  description: 'SkyTorrents.lol is a Public SkyTorrents clone for TV / MOVIES / GENERAL',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://www.skytorrents.to/'],
  legacylinks: ['https://www.skytorrents.lol/'],
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
  settings: [
    {
      name: 'itorrents-links',
      type: 'checkbox',
      label: 'Add download links via itorrents.org',
      default: true,
    },
    {
      name: 'info',
      type: 'info',
      label: 'ITorrents Note',
      default: 'Without the itorrents option only magnet links will be provided.',
    },
  ],
  search: {
    paths: [
      {
        path: '{{ if .Keywords }}?query={{ .Keywords }}&sort=created{{else}}top100{{end}}',
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
      'download-itorrents': {
        selector: 'a[href^="//itorrents"]',
        attribute: 'href',
      },
      download: {
        text: '{{if .Config.itorrents-links}}{{ .Result.download-itorrents }}{{else}}{{end}}',
      },
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
