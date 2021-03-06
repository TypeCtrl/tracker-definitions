import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'btdigg',
  name: 'BTDigg',
  description: 'BTDigg is a Public BitTorrent DHT search engine.',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: [
    'https://btdig.com/',
    'https://btdiggwzoyrwwbiv.onion.ly/',
    'https://btdigggink2pdqzqrik3blmqemsbntpzwxottujilcdjfz56jumzfsyd.onion.ly/',
  ],
  legacylinks: ['http://btdiggwzoyrwwbiv.onion.ly/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
    categorymappings: [{ id: 'Other', cat: 'Other' }],
  },
  settings: [
    {
      name: 'info_8000',
      type: 'info',
      label: 'About BTDigg Categories',
      default:
        "BTDigg does not return categories in its search results.</br>To add to your Apps' Torznab indexer, replace all categories with 8000(Other).",
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 0,
      options: { '0': 'relevance', '2': 'created', '3': 'size' },
    },
  ],
  search: {
    paths: [{ path: 'search' }],
    inputs: {
      q: '{{ if .Keywords }}{{ .Keywords }}{{ else }}{{ .Today.Year }}{{ end }}',
      order: '{{ .Config.sort }}',
    },
    rows: {
      selector: 'div.one_result',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: { text: 'Other' },
      title: { selector: 'div.torrent_name a' },
      details: { selector: 'div.torrent_name a', attribute: 'href' },
      download: {
        selector: 'a[href^="magnet:?xt="]',
        attribute: 'href',
      },
      date: {
        selector: 'span.torrent_age',
        filters: [{ name: 'replace', args: ['found ', ''] }],
      },
      files: { selector: 'span.torrent_files', optional: true },
      size: { selector: 'span.torrent_size' },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
