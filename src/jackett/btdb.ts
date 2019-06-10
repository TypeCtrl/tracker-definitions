import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'btdb',
  name: 'BTDB',
  description: 'BTDB is a Public BitTorrent DHT search engine.',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://btdb.eu/'],
  legacylinks: ['https://btdb.to/', 'https://btdb.unblocked.app/'],
  caps: {
    categorymappings: [{ id: '1', cat: 'Other', desc: 'Other' }],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  settings: [
    {
      name: 'info',
      type: 'info',
      label: 'Category for Sonarr and Radarr',
      default:
        'BTDB does not use categories. In your Sonarr or Radarr Torznab Indexer settings, set the category to 100001.',
    },
  ],
  search: {
    paths: [
      {
        path: '{{if .Keywords}}?search={{ .Keywords}}&sort=time{{else}}recent{{end}}',
      },
      {
        path: '{{if .Keywords}}?search={{ .Keywords}}&sort=time&page=2{{else}}recent?page=2{{end}}',
      },
      {
        path: '{{if .Keywords}}?search={{ .Keywords}}&sort=time&page=3{{else}}recent?page=3{{end}}',
      },
      {
        path: '{{if .Keywords}}?search={{ .Keywords}}&sort=time&page=4{{else}}recent?page=4{{end}}',
      },
      {
        path: '{{if .Keywords}}?search={{ .Keywords}}&sort=time&page=5{{else}}recent?page=5{{end}}',
      },
    ],
    rows: { selector: 'li[class$="item"]' },
    fields: {
      title: {
        selector: 'h2[class$="title"] a[href*="/torrent/"]',
        attribute: 'title',
      },
      category: { text: '1' },
      details: {
        selector: 'h2[class$="title"] a[href*="/torrent/"]',
        attribute: 'href',
      },
      magnet: {
        selector: 'div[class$="info"] a[href^="magnet:?xt="]',
        attribute: 'href',
      },
      size: { selector: 'div[class$="info"] span:nth-of-type(1)' },
      files: { selector: 'div[class$="info"] span:nth-of-type(2)' },
      date: {
        selector: 'div[class$="info"] span:nth-of-type(3)',
        filters: [{ name: 'timeago' }],
      },
      grabs: { selector: 'div[class$="info"] span:nth-of-type(4)' },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};
