import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'frozenlayer',
  name: 'Frozen Layer',
  description: 'Frozen Layer is a SPANISH Public torrent site focused on ANIME',
  language: 'es-ES',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://www.frozen-layer.com/'],
  certificates: ['001bc21dd13b54b05106b510a327a7182ec443a4'],
  settings: [
    {
      name: 'category',
      type: 'select',
      label: 'Category',
      default: 'todos',
      options: {
        todos: 'todos',
        anime: 'anime',
        manga: 'manga',
        dorama: 'dorama',
        videojuego: 'videojuego',
        BSO: 'BSO',
        PV: 'PV',
        otros: 'otros',
      },
    },
    {
      name: 'info',
      type: 'info',
      label: 'Direct Downloads',
      default:
        'This definition filters for search results that contain .torrent and magnet only. Results for Direct Download are not supported.',
    },
  ],
  caps: {
    categorymappings: [
      { id: 'Anime', cat: 'TV/Anime', desc: 'anime' },
      { id: 'Manga', cat: 'TV/Anime', desc: 'manga' },
      { id: 'Dorama', cat: 'TV/Anime', desc: 'dorama' },
      { id: 'Videojuego', cat: 'TV/Anime', desc: 'videojuego' },
      { id: 'Bso', cat: 'TV/Anime', desc: 'BSO' },
      { id: 'Pv', cat: 'TV/Anime', desc: 'PV' },
      { id: 'Otros', cat: 'TV/Anime', desc: 'otros' },
    ],
    modes: { search: ['q'], 'tv-search': ['q'] },
  },
  search: {
    paths: [
      {
        path:
          '{{ if .Keywords }}buscar/descargas/{{ .Config.category }}/{{ .Keywords }}?search=Buscar{{else}}descargas{{end}}',
      },
      {
        path:
          '{{ if .Keywords }}buscar/descargas/{{ .Config.category }}/{{ .Keywords }}?search=Buscar&page=2{{else}}descargas{{end}}',
      },
    ],
    keywordsfilters: [
      { name: 're_replace', args: ['(S1)', ''] },
      { name: 're_replace', args: ['(S2)', 'segunda temporada'] },
      { name: 're_replace', args: ['(S3)', 'tercera temporada'] },
      { name: 're_replace', args: ['E([0-9]+)', '$1'] },
    ],
    rows: {
      selector: 'table#descargas > tbody > tr:has(td:has(a[href^="magnet:?"]))',
    },
    fields: {
      title: {
        selector: 'td.tit a',
        filters: [
          { name: 're_replace', args: ['\\/', ' '] },
          { name: 're_replace', args: ['\\(', ''] },
          { name: 're_replace', args: ['\\)', ''] },
          { name: 're_replace', args: ['([A-z]*) temporada', ''] },
          { name: 're_replace', args: ['S[pP]rimera', ''] },
          { name: 're_replace', args: ['S[sS]egunda', ''] },
          { name: 're_replace', args: ['S[tT]ercera', ''] },
          {
            name: 're_replace',
            args: ['S([0-9]+) - Episodio ([0-9]+)', '$2'],
          },
          { name: 're_replace', args: ['- Episodio ([0-9]*)', '$1'] },
          { name: 'append', args: ' [spanish]' },
        ],
      },
      details: { selector: 'td.tit a', attribute: 'href' },
      download: {
        selector: 'td:nth-child(1) a[href$=".torrent"]',
        attribute: 'href',
      },
      magnet: {
        selector: 'td:nth-child(1) a[href^="magnet:?"]',
        attribute: 'href',
      },
      category: { optional: true, selector: 'td.tit span' },
      date: {
        optional: true,
        selector: 'td.fecha:not(:contains("d")):not(:contains("h"))',
        filters: [{ name: 'dateparse', args: '02 Jan 06' }],
      },
      size: { selector: 'td:nth-child(6)' },
      seeders: { selector: 'td:nth-child(7)' },
      leechers: { selector: 'td:nth-child(8)' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};
