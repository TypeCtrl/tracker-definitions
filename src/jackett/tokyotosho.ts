import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'tokyotosho',
  name: 'Tokyo Toshokan',
  description: 'A BitTorrent Library for Japanese Media',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://www.tokyotosho.info/', 'https://tokyotosho.unblocked.rest/'],
  legacylinks: [
    'https://tokyotosho.black-mirror.xyz/',
    'https://tokyotosho.unblocked.casa/',
    'https://tokyotosho.proxyportal.fun/',
    'https://tokyotosho.uk-unblock.xyz/',
    'https://tokyotosho.ind-unblock.xyz/',
    'https://tokyotosho.unblocked.bar/',
    'https://tokyotosho.proxyportal.pw/',
    'https://tokyotosho.uk-unblock.pro/',
  ],
  settings: [{ name: 'type-id', type: 'text', label: 'Type Id' }],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'book-search': ['q'],
    },
    categorymappings: [
      { id: '1', cat: 'TV/Anime' },
      { id: '2', cat: 'Audio' },
      { id: '3', cat: 'Books' },
      { id: '4', cat: 'XXX' },
      { id: '5', cat: 'Other' },
      { id: '7', cat: 'TV/Anime' },
      { id: '8', cat: 'TV/Anime' },
      { id: '9', cat: 'TV/Anime' },
      { id: '10', cat: 'TV/Anime' },
      { id: '11', cat: 'TV/Anime' },
      { id: '12', cat: 'XXX' },
      { id: '13', cat: 'XXX' },
      { id: '14', cat: 'XXX' },
      { id: '15', cat: 'XXX' },
    ],
  },
  search: {
    paths: [{ path: '{{ if .Keywords }}search.php{{else}}index.php{{end}}' }],
    inputs: {
      terms: '{{ .Keywords }}',
      type: '{{ .Config.type-id }}',
      cat: '{{ .Config.type-id }}',
    },
    rows: {
      selector: 'table.listing tr.category_0',
      after: 1,
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: {
        selector: 'a[href*="?cat="]',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      title: {
        selector: 'td.desc-top a[type="application/x-bittorrent"]',
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'td.desc-top a[type="application/x-bittorrent"]',
        attribute: 'href',
      },
      magnet: {
        selector: 'a[href^="magnet:?xt="]',
        attribute: 'href',
        optional: true,
      },
      size: {
        selector: 'td.desc-bot',
        filters: [
          { name: 'split', args: ['|', 1] },
          { name: 'regexp', args: 'Size: (.+?) ?$' },
        ],
      },
      date: {
        selector: 'td.desc-bot',
        filters: [
          { name: 'split', args: ['|', 2] },
          { name: 'regexp', args: 'Date: (.+?) ?$' },
          { name: 'replace', args: ['UTC', '-00'] },
          { name: 'dateparse', args: '2006-01-02 15:04 -07' },
        ],
      },
      seeders: { selector: 'td.stats > span:nth-child(1)' },
      leechers: { selector: 'td.stats > span:nth-child(2)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
