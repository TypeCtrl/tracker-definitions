import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'elitetorrent-biz',
  name: 'EliteTorrent.biz',
  description: 'EliteTorrent.biz is a Public torrent site for TV, movies and documentaries',
  language: 'es-ES',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://elitetorrent.com/', 'https://elitetorrent.nocensor.work/'],
  legacylinks: [
    'https://www.elitetorrent.biz/',
    'https://www.elitetorrent.io/',
    'https://www.elitetorrent.one/',
    'https://www.elitetorrent.is/',
    'https://www.elitetorrent.nu/',
    'https://www.elitetorrent.tv/',
    'https://www.elitetorrent.li/',
    'https://www.elitetorrent.bz/',
    'https://www.elitetorrent.nl/',
    'https://wwvv.elitetorrent.nl/',
    'https://wvvw.elitetorrent.nl/',
    'https://vvww.elitetorrent.nl/',
    'https://www.elitetorrent.to/',
    'https://www.elitetorrent.se/',
    'https://www.elitetorrent.com/',
    'https://elitetorrent.app/',
    'https://elitetorrent.si/',
  ],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [
      { id: 'series', cat: 'TV' },
      { id: 'peliculas', cat: 'Movies' },
      { id: 'other', cat: 'Other' },
    ],
  },
  settings: [],
  download: {
    selectors: [{ selector: 'a[href^="magnet:?"]', attribute: 'href' }],
  },
  search: {
    paths: [{ path: '/' }, { path: '/page/2/', followredirect: true }, { path: '/page/3/', followredirect: true }],
    keywordsfilters: [
      { name: 're_replace', args: ['(?i)S0?(\\d{1,2})', ' $1 '] },
      { name: 're_replace', args: ['(?i)E(\\d{2,3})', ' $1 '] },
    ],
    inputs: { s: '{{ .Keywords }}', $raw: '&x=0&y=0' },
    rows: {
      selector: '#principal .miniboxs-ficha li:has(span:nth-of-type(2))',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category_movie: {
        selector: '.meta a',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '^.*/(peliculas)/.*$' }],
      },
      category_tv: {
        selector: '.meta a',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '^.*/(series)/.*$' }],
      },
      category: {
        text: '{{ if or .Result.category_movie .Result.category_tv }}{{ or .Result.category_movie .Result.category_tv }}{{ else }}other{{ end }}',
      },
      quality: {
        selector: 'span:nth-of-type(2) > i',
        filters: [{ name: 'replace', args: ['---', ''] }],
      },
      language: {
        selector: 'span#idiomacio > i > img',
        attribute: 'title',
        filters: [
          { name: 'replace', args: ['Pelicula en ', ''] },
          { name: 'replace', args: ['Español Latino', 'LATiN SPANiSH'] },
          { name: 'replace', args: ['Español Castellano', 'SPANiSH'] },
          { name: 'replace', args: ['Ingles', 'English'] },
          { name: 'replace', args: ['Subtitulado', ' SPASUBS'] },
          { name: 'replace', args: ['VOSE', ''] },
        ],
      },
      title: {
        selector: 'div.imagen > a',
        attribute: 'title',
        filters: [
          { name: 'replace', args: [' – ', ' '] },
          { name: 'replace', args: ['(', ''] },
          { name: 'replace', args: [')', ''] },
          { name: 're_replace', args: ['(\\d{2})×(\\d{2})', 'S$1E$2'] },
          { name: 're_replace', args: ['(\\d{1})×(\\d{2})', 'S0$1E$2'] },
          {
            name: 'append',
            args: ' {{ .Result.quality }} {{ .Result.language }}',
          },
        ],
      },
      details: { selector: '.meta a', attribute: 'href' },
      download: { selector: '.meta a', attribute: 'href' },
      poster: { selector: '.imagen img', attribute: 'data-src' },
      size: {
        selector: '.voto1',
        optional: true,
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
