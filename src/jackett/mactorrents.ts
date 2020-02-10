import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'mactorrents',
  name: 'MacTorrents',
  description: 'MacTorrents is a Public tracker for Mac software',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://mac-torrents.io/'],
  legacylinks: ['https://mac-torrents.com/', 'https://www.mac-torrents.com/'],
  caps: {
    modes: { search: ['q'] },
    categorymappings: [
      { id: 'mac-os-apps', cat: 'PC/Mac' },
      { id: 'mac-games', cat: 'PC/Games' },
    ],
  },
  settings: [],
  search: {
    paths: [{ path: '/' }],
    inputs: { s: '{{ .Keywords }}' },
    rows: { selector: 'div.iso-item article:has(a.download)' },
    fields: {
      title: { selector: 'div.blog-content h3 a' },
      category: {
        selector: 'a[href*="/mac-os-apps/"], a[href*="/mac-games/"]',
        attribute: 'href',
        filters: [{ name: 'split', args: ['/', 3] }],
      },
      details: { selector: 'div.blog-content h3 a', attribute: 'href' },
      download: { selector: 'a.download', attribute: 'href' },
      banner: {
        selector: 'div.blog-media p a img',
        attribute: 'data-src',
      },
      date: {
        selector: 'time',
        attribute: 'datetime',
        filters: [
          { name: 'replace', args: ['T', ' '] },
          { name: 'dateparse', args: '2006-01-02 15:04:05-07:00' },
        ],
      },
      size: { text: '500 MB' },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
