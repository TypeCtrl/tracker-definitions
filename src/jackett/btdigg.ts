import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'btdigg',
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
    categorymappings: [{ id: '1', cat: 'Other' }],
  },
  settings: [
    {
      name: 'info',
      type: 'info',
      default:
        'BTDigg does not use categories. In your software Indexer settings, set the category to 100001.',
    },
  ],
  search: {
    paths: [
      { path: 'search' },
      { path: 'search', inputs: { p: 1 } },
      { path: 'search', inputs: { p: 2 } },
      { path: 'search', inputs: { p: 3 } },
      { path: 'search', inputs: { p: 4 } },
    ],
    inputs: {
      q: '{{if .Keywords }}{{.Keywords}}{{else}}test{{end}}',
      order: 2,
    },
    rows: {
      selector: 'div.one_result',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      title: { selector: 'div.torrent_name a' },
      category: { text: 1 },
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
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};
