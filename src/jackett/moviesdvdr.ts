import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'moviesdvdr',
  name: 'MoviesDVDR',
  description: 'MoviesDVDR is a SPANISH Public tracker for MOVIES',
  language: 'es-ES',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://www.moviesdvdr.me/'],
  caps: {
    modes: { search: ['q'], 'movie-search': ['q'] },
    categorymappings: [{ id: 'Movies', cat: 'Movies' }],
  },
  settings: [],
  download: { selector: 'a.torrent_download' },
  search: {
    paths: [{ path: '/' }],
    inputs: { s: '{{ .Keywords }}' },
    rows: { selector: 'div.hitem' },
    fields: {
      category: { text: 'Movies' },
      title: { selector: 'div.titulo' },
      details: { selector: 'a', attribute: 'href' },
      download: { selector: 'a', attribute: 'href' },
      banner: { selector: 'img', attribute: 'src' },
      date: { text: 'now' },
      description: { selector: 'span' },
      size: { text: '500 MB' },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
