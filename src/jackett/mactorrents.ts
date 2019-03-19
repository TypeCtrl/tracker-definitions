import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'mactorrents',
  name: 'MacTorrents',
  description: 'MacTorrents is a Public tracker for Mac software',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://mac-torrents.com/'],
  caps: {
    modes: { search: ['q'] },
    categorymappings: [
      { id: 'mac-os-apps', cat: 'PC/Mac' },
      { id: 'mac-os-games', cat: 'PC/Games' },
    ],
  },
  settings: [],
  search: {
    paths: [{ path: '/' }],
    inputs: { s: '{{.Keywords}}' },
    rows: { selector: 'div.iso-item article' },
    fields: {
      title: { selector: 'div.blog-content h3 a' },
      category: {
        selector: 'a[href*="/category/"]',
        attribute: 'href',
        filters: [{ name: 'split', args: ['/', 4] }],
      },
      details: { selector: 'div.blog-content h3 a', attribute: 'href' },
      download: { selector: 'a.download', attribute: 'href' },
      banner: {
        selector: 'div.blog-media p a img',
        attribute: 'data-src',
      },
      date: {
        selector: 'div.blog-content div.entry-meta time',
        attribute: 'datetime',
        filters: [
          { name: 'replace', args: ['T', ' '] },
          { name: 'dateparse', args: '2006-01-02 15:04:05-07:00' },
        ],
      },
      size: { text: '500 MB' },
      seeders: { text: '1' },
      leechers: { text: '1' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};