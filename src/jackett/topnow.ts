import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'topnow',
  name: 'TopNow',
  description: 'TopNow is a Public torrent site for TV / MOVIES',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['http://topnow.se/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [{ id: 'other', cat: 'Other' }],
  },
  settings: [],
  download: { selector: 'a#torrent' },
  search: {
    paths: [{ path: 'search.php' }],
    inputs: { dayq: '{{.Keywords}}' },
    rows: { selector: 'table.topic_table' },
    fields: {
      category: { text: 'other' },
      title: { selector: 'a[href^="goto-"]' },
      details: { selector: 'a[href^="goto-"]', attribute: 'href' },
      download: { selector: 'a[href^="goto-"]', attribute: 'href' },
      banner: { selector: 'img', attribute: 'src' },
      description: {
        selector: 'pre.imgDescription',
        filters: [{ name: 'regexp', args: 'Quality: (.+?)$' }],
      },
      date: { text: 'now' },
      size: { text: '512 MB' },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};