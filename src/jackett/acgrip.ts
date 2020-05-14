import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'acgrip',
  name: 'ACG.RIP',
  description:
    'ACG.RIP is a CHINESE Public torrent tracker for the latest anime and Japanese related torrents',
  language: 'zh-CN',
  type: 'public',
  followredirect: true,
  encoding: 'UTF-8',
  links: ['https://acg.rip/'],
  certificates: ['bfd88de41aeeda5c9d98d5e081e8c4ec40204b6b'],
  caps: {
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
    categorymappings: [{ id: '1', cat: 'TV' }],
  },
  settings: [],
  search: {
    paths: [{ path: '/' }],
    inputs: { term: '{{ .Keywords }}' },
    rows: { selector: 'tbody tr' },
    fields: {
      title: { selector: 'td.title > span.title a' },
      category: { text: 1 },
      details: { selector: 'td.title > span.title a', attribute: 'href' },
      download: { selector: 'td.action a', attribute: 'href' },
      size: { selector: 'td.size' },
      seeders: { selector: 'td.peers div.seed' },
      leechers: { selector: 'td.peers div.leech' },
      grabs: { selector: 'td.peers div.done' },
      date: {
        selector: 'td.date time',
        attribute: 'datetime',
        filters: [{ name: 'fuzzytime' }],
      },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
