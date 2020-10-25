import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'btdigg',
  name: 'BTDigg',
  description: 'BTDigg is a Public BitTorrent DHT search engine.',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://btdig.com/'],
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
        'The BTDigg web site does not provide categories. Select the category you want Jackett to set on all results returned.',
      default: 3,
      options: { '1': 'TV', '2': 'Movies', '3': 'Other' },
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
      q: '{{ if .Keywords }}{{ .Keywords }}{{ else }}test{{ end }}',
      order: '{{ .Config.sort }}',
    },
    rows: {
      selector: 'div.one_result',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: { text: '{{ .Config.category-id }}' },
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
