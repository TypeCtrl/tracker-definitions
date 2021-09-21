import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'torrentz2eu',
  name: 'Torrentz2eu',
  description: 'Torrentz2eu is a Public torrent meta-search engine',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://torrentz2.unblockninja.com/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies', desc: 'Movies' },
      { id: '2', cat: 'TV', desc: 'TV' },
      { id: '3', cat: 'Other', desc: 'Other' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  settings: [
    {
      name: 'info',
      type: 'info',
      label: 'A note about Torrentz2eu',
      default:
        'Torrentz2eu does not display categories in its search results page. This definition is probably only suitable for Jackett Dashboard Manual searches.',
    },
  ],
  search: {
    paths: [{ path: 'kick.php' }],
    inputs: {
      q: '{{ if .Keywords }}{{ .Keywords }}{{ else }}{{ .Today.Year }}{{ end }}',
    },
    rows: { selector: 'table.table-bordered > tbody > tr' },
    fields: {
      category: { text: 3 },
      title: { selector: 'td:nth-child(1)' },
      details: { text: '{{ .Config.sitelink }}' },
      magnet: { selector: 'td:nth-child(6) a', attribute: 'href' },
      date: { selector: 'td:nth-child(2)' },
      seeders: { selector: 'td:nth-child(3)' },
      leechers: { selector: 'td:nth-child(4)' },
      size: { selector: 'td:nth-child(5)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
