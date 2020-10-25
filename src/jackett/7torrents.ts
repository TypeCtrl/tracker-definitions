import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: '7torrents',
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
    categorymappings: [
      { id: '1', cat: 'TV' },
      { id: '2', cat: 'Movies' },
      { id: '3', cat: 'Other' },
    ],
  },
  settings: [
    {
      name: 'category-id',
      type: 'select',
      label:
        'The 7torrents web site does not provide categories. Select the category you want Jackett to set on all results returned.',
      default: 3,
      options: { '1': 'TV', '2': 'Movies', '3': 'Other' },
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
      query: '{{ if .Keywords }}{{ .Keywords }}{{ else }} {{ end }}',
      sort: '{{ .Config.sort }}',
    },
    rows: { selector: 'div.media' },
    fields: {
      category: { text: '{{ .Config.category-id }}' },
      title: { selector: 'div.media', attribute: 'data-name' },
      details: { selector: 'div.media h5 a', attribute: 'href' },
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
