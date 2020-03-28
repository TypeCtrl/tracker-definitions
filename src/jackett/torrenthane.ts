import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'torrenthane',
  name: 'TorrentHane',
  description: 'TorrentHane is a TURKISH Public site for MOVIES / TV',
  language: 'tr-TR',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://torrenthane.com/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [
      { id: '1', cat: 'Movies' },
      { id: '2', cat: 'TV' },
      { id: '3', cat: 'Other' },
    ],
  },
  settings: [],
  download: { selector: 'a[href*="/download/"]', attribute: 'href' },
  search: {
    paths: [
      {
        path: '{{ if .Keywords }}?s={{ .Keywords }}{{else}}kategori/torrent-filmler/{{end}}',
      },
      { path: '{{ if .Keywords }}{{else}}kategori/torrent-diziler/{{end}}' },
    ],
    rows: {
      selector: 'div.moviefilm',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: {
        selector: 'div.moviefilm a',
        attribute: 'href',
        case: {
          'a[href*="-film-"]': 1,
          'a[href*="-dizi-"]': 2,
          'a[href*="-bolum-"]': 2,
          '*': 3,
        },
      },
      title: { selector: 'div.movief a' },
      details: { selector: 'div.movief a', attribute: 'href' },
      download: { selector: 'div.movief a', attribute: 'href' },
      banner: { selector: 'img', attribute: 'src' },
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
