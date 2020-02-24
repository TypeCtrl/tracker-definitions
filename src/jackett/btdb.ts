import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'btdb',
  name: 'BTDB',
  description: 'BTDB is a Public BitTorrent DHT search engine.',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://btdb.io/'],
  legacylinks: ['https://btdb.to/', 'https://btdb.unblocked.app/', 'https://btdb.eu/'],
  caps: {
    categorymappings: [{ id: '1', cat: 'Other', desc: 'Other' }],
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
      label: 'Category for Sonarr and Radarr',
      default:
        'BTDB does not use categories. In your Sonarr or Radarr Torznab Indexer settings, set the category to 100001.',
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'time',
      options: { time: 'created', length: 'size', seeders: 'seeders' },
    },
  ],
  search: {
    paths: [
      {
        path:
          '{{ if .Keywords }}search/{{ .Keywords }}/{{else}}recent{{end}}?sort={{ .Config.sort }}',
      },
    ],
    rows: { selector: 'div.media' },
    fields: {
      category: { text: 1 },
      title: { selector: 'a[href^="/torrent/"]' },
      details: { selector: 'a[href^="/torrent/"]', attribute: 'href' },
      download: { selector: 'a[href*="/dl/"]', attribute: 'href' },
      magnet: { selector: 'a[href^="magnet:?xt="]', attribute: 'href' },
      banner: {
        selector: 'a.img-thumbnail img',
        attribute: 'src',
        filters: [
          {
            name: 'replace',
            args: ['https://btdb.io/assets/img/placeholder.png', ''],
          },
        ],
      },
      size: { selector: 'small:nth-of-type(1) strong' },
      files: { selector: 'small:nth-of-type(2) strong' },
      seeders: {
        selector: 'small:nth-of-type(3) strong',
        filters: [{ name: 'replace', args: [',', ''] }],
      },
      leechers: {
        selector: 'small:nth-of-type(4) strong',
        filters: [{ name: 'replace', args: [',', ''] }],
      },
      date: {
        selector: 'small:nth-of-type(5) strong',
        filters: [{ name: 'timeago' }],
      },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};