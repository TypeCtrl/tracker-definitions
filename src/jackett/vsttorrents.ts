import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'vsttorrents',
  name: 'VST Torrents',
  description: 'VST Torrents is a Public site for AUDIO apps, plugins and samples',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://looptorrent.net/'],
  legacylinks: ['https://vsttorrents.net/'],
  caps: {
    modes: { search: ['q'], 'music-search': ['q'] },
    categorymappings: [{ id: 'Audio', cat: 'Audio' }],
  },
  settings: [],
  download: {
    selectors: [{ selector: 'div.wp-block-file a', attribute: 'href' }],
  },
  search: {
    paths: [{ path: '/' }],
    inputs: { s: '{{ .Keywords }}' },
    rows: {
      selector: 'article:has(h3)',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: { text: 'Audio' },
      title: { selector: 'h3' },
      details: { selector: 'h3 > a', attribute: 'href' },
      download: { selector: 'h3 > a', attribute: 'href' },
      poster: { selector: 'img', attribute: 'src' },
      description: { selector: 'div.cat-links' },
      date: {
        selector: 'time',
        attribute: 'datetime',
        filters: [
          { name: 'replace', args: ['T', ' '] },
          { name: 'dateparse', args: '2006-01-02 15:04:05-07:00' },
        ],
      },
      size: { text: '512 MB' },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
