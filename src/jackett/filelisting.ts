import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'filelisting',
  name: 'FileListing',
  description: 'FileListing is a Public Torrent Search Engine',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://filelisting.com/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Other', desc: 'TV' },
      { id: '2', cat: 'Other', desc: 'Movies' },
      { id: '3', cat: 'Other', desc: 'Other' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
  },
  settings: [
    {
      name: 'info',
      type: 'info',
      label: 'A note about FileListing',
      default:
        'FileListing does not display categories in its search results page. This definition is probably only suitable for Jackett Dashboard Manual searches.',
    },
  ],
  search: {
    paths: [
      {
        path: 'result{{ if .Keywords }}?q={{ .Keywords }}{{ else }}{{ end }}',
      },
    ],
    rows: { selector: 'table > tbody > tr:has(td.dn-title)' },
    fields: {
      category: { text: 3 },
      title: { selector: 'p.filedir' },
      details: { selector: 'p.filedir a', attribute: 'href' },
      infohash: {
        selector: 'p.filedir a',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '-([a-f|0-9]{40}).html' }],
      },
      date: { text: 'now' },
      size: { selector: 'td.dn-size' },
      seeders: {
        selector: 'td.dn-status',
        filters: [{ name: 'split', args: ['/', 0] }],
      },
      leechers: {
        selector: 'td.dn-status',
        filters: [{ name: 'split', args: ['/', 1] }],
      },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
