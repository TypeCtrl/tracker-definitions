import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'newpct-me',
  name: 'NewPCT.me',
  description: 'NewPCT.me is a SPANISH Public torrent site for MOVIES',
  language: 'es-ES',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://www.newpct.me/'],
  caps: {
    modes: { search: ['q'], 'movie-search': ['q'] },
    categorymappings: [{ id: 'peliculas', cat: 'Movies' }],
  },
  settings: [],
  download: {
    selectors: [
      { selector: 'a[href$=".torrent"]', attribute: 'href' },
      { selector: 'a[href^="magnet:?"]', attribute: 'href' },
    ],
  },
  search: {
    paths: [{ path: '/' }],
    inputs: { s: '{{ .Keywords }}' },
    rows: {
      selector: 'ul.miniboxs-ficha li:has(a[href*="/peliculas/"])',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: { text: 'peliculas' },
      quality: {
        selector: 'span.estreno',
        filters: [{ name: 'replace', args: ['---', ''] }],
      },
      language: {
        selector: 'a.complets-left',
        filters: [
          { name: 'replace', args: ['Latino', 'LATiN SPANiSH'] },
          { name: 'replace', args: ['Castellano', 'SPANiSH'] },
          { name: 'replace', args: ['Ingles', 'English'] },
          { name: 'replace', args: ['Subtitulado', ' SPASUBS'] },
          { name: 'replace', args: ['Vose', ''] },
        ],
      },
      title: {
        selector: 'a.nombre',
        attribute: 'title',
        filters: [
          {
            name: 'append',
            args: ' {{ .Result.quality }} {{ .Result.language }}',
          },
        ],
      },
      details: { selector: 'a.nombre', attribute: 'href' },
      download: { selector: 'a.nombre', attribute: 'href' },
      poster: { selector: 'img.lazyload', attribute: 'data-src' },
      size: {
        selector: 'a.complets-right',
        filters: [{ name: 'replace', args: ['s', ''] }],
      },
      date: { text: 'now' },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
