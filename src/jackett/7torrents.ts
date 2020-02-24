import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: '7torrents',
  name: '7torrents',
  description: '7torrents is a Public BitTorrent DHT search engine.',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://www.7torrents.cc/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [{ id: '1', cat: 'Other' }],
  },
  settings: [
    {
      name: 'info',
      type: 'info',
      default:
        '7torrents does not use categories. In your software Indexer settings, set the category to 100001.',
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'created',
      options: {
        created: 'created',
        length: 'size',
        seeders: 'seeders',
      },
    },
  ],
  search: {
    paths: [{ path: 'search' }],
    inputs: {
      query: '{{ if .Keywords }}{{ .Keywords }}{{else}}2020{{end}}',
      sort: '{{ .Config.sort }}',
    },
    rows: { selector: 'div.media' },
    fields: {
      category: { text: 1 },
      title: { selector: 'div.media', attribute: 'data-name' },
      details: { selector: 'div.media h5 a', attribute: 'href' },
      download: {
        selector: 'div.media-right a[href*="/torrent/"]',
        attribute: 'href',
      },
      magnet: { selector: 'a[href^="magnet:?xt="]', attribute: 'href' },
      date: {
        selector: 'div.media',
        attribute: 'data-added',
        filters: [{ name: 'timeago' }],
      },
      size: { selector: 'div.media', attribute: 'data-size' },
      seeders: { selector: 'div.media', attribute: 'data-seeders' },
      leechers: { selector: 'div.media', attribute: 'data-leechers' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};