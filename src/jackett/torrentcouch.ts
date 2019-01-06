import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'torrentcouch',
  name: 'TorrentCouch',
  description: 'TorrentCounch is a Public TV tracker',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://torrentcouch.net/'],
  legacylinks: ['https://torrentcouch.com/'],
  caps: {
    categorymappings: [{ id: '1', cat: 'TV', desc: 'TV' }],
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
  },
  settings: [],
  download: { selector: 'tr td a[href*="/files/download/"]' },
  search: {
    paths: [
      { path: '{{if .Keywords}}/?s={{ .Keywords}}{{else}}/{{end}}' },
      { path: '{{if .Keywords}}/page/2/?s={{ .Keywords}}{{else}}{{end}}' },
      { path: '{{if .Keywords}}/page/3/?s={{ .Keywords}}{{else}}{{end}}' },
      { path: '{{if .Keywords}}/page/4/?s={{ .Keywords}}{{else}}{{end}}' },
    ],
    rows: { selector: 'article' },
    fields: {
      title: { selector: 'h2 a' },
      category: { text: '1' },
      details: { selector: 'h2 a', attribute: 'href' },
      description: { selector: 'p' },
      download: { selector: 'h2 a', attribute: 'href' },
      size: { text: '500 MB' },
      seeders: { text: '1' },
      leechers: { text: '1' },
      date: { text: 'now' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};
