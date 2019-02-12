import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'qxr',
  name: 'QXR',
  description: 'QXR is a Public torrent index of their releases.',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://qxr.pw/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [
      { id: 'Weekly', cat: 'TV' },
      { id: 'TV Season Pack', cat: 'TV' },
      { id: 'Movie', cat: 'Movies' },
    ],
  },
  settings: [],
  search: {
    paths: [{ path: 'hashes/' }],
    rows: { selector: 'tr:has(a[href^="magnet:?xt="])' },
    fields: {
      title: { selector: 'td:nth-child(2) a' },
      category: { selector: 'td:nth-child(5)' },
      details: { selector: 'td:nth-child(2) a', attribute: 'href' },
      download: { selector: 'td:nth-child(2) a', attribute: 'href' },
      magnet: { selector: 'td:nth-child(2) a', attribute: 'href' },
      date: { text: 'now' },
      size: { selector: 'td:nth-child(3)' },
      seeders: { text: '1' },
      leechers: { text: '1' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};
