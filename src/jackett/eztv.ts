import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'eztv',
  name: 'EZTV',
  description: 'EZTV is a Public torrent site for TV shows',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['https://eztv.io/'],
  legacylinks: ['https://eztv.ag/', 'https://eztv.re/'],
  caps: {
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
    categorymappings: [{ id: '1', cat: 'TV' }],
  },
  settings: [],
  download: { selector: 'a[href^="magnet:?"]' },
  search: {
    paths: [{ path: '{{if .Keywords}}search/{{ .Keywords}}{{else}}/{{end}}' }],
    keywordsfilters: [{ name: 're_replace', args: ['S[0-9]{2}([^E]|$)', ''] }],
    rows: {
      selector: 'table.forum_header_border tr[name="hover"].forum_header_border',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: { text: 1 },
      title: {
        selector: 'td:nth-child(2) a',
        attribute: 'title',
        filters: [
          { name: 'replace', args: ['[eztv]', ''] },
          { name: 're_replace', args: ['\\(.*\\)$', ''] },
          { name: 'trim' },
        ],
      },
      details: { selector: 'td:nth-child(2) a', attribute: 'href' },
      download: { selector: 'td:nth-child(2) a', attribute: 'href' },
      size: { optional: true, selector: 'td:nth-child(3)' },
      date: {
        selector: 'td:nth-child(4)',
        filters: [{ name: 'append', args: ' ago' }],
      },
      seeders: { selector: 'td:nth-child(5)' },
      leechers: { text: 0 },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};
