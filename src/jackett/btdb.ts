import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'btdb',
  name: 'BTDB',
  description:
    'BTDB is a Public BitTorrent DHT search engine. Torrents can be downloaded via magnet links',
  language: 'en-us',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://btdb.to/'],
  caps: {
    categorymappings: [{ id: 1, cat: 'Other', desc: 'Other' }],
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
  ],
  search: {
    paths: [
      {
        path:
          '{{if .Keywords}}q/{{ .Keywords}}/?sort=time{{else}}q/test/{{end}}',
      },
      { path: '{{if .Keywords}}q/{{ .Keywords}}/2?sort=time{{else}}{{end}}' },
      { path: '{{if .Keywords}}q/{{ .Keywords}}/3?sort=time{{else}}{{end}}' },
      { path: '{{if .Keywords}}q/{{ .Keywords}}/4?sort=time{{else}}{{end}}' },
      { path: '{{if .Keywords}}q/{{ .Keywords}}/5?sort=time{{else}}{{end}}' },
      { path: '{{if .Keywords}}q/{{ .Keywords}}/6?sort=time{{else}}{{end}}' },
      { path: '{{if .Keywords}}q/{{ .Keywords}}/7?sort=time{{else}}{{end}}' },
      { path: '{{if .Keywords}}q/{{ .Keywords}}/8?sort=time{{else}}{{end}}' },
      { path: '{{if .Keywords}}q/{{ .Keywords}}/9?sort=time{{else}}{{end}}' },
      { path: '{{if .Keywords}}q/{{ .Keywords}}/10?sort=time{{else}}{{end}}' },
    ],
    rows: {
      selector: 'li[class$="item"]',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      title: {
        selector: 'h2[class$="title"] a[href^="/torrent/"]',
        attribute: 'title',
      },
      category: { text: '1' },
      details: {
        selector: 'h2[class$="title"] a[href^="/torrent/"]',
        attribute: 'href',
      },
      magnet: {
        selector: 'div[class$="info"] a[href^="magnet:"]',
        attribute: 'href',
      },
      size: { selector: 'div[class$="info"] span:nth-of-type(1)' },
      files: { selector: 'div[class$="info"] span:nth-of-type(2)' },
      date: {
        selector: 'div[class$="info"] span:nth-of-type(3)',
        filters: [{ name: 'dateparse', args: '2006-01-02 15:04:05' }],
      },
      grabs: { selector: 'div[class$="info"] span:nth-of-type(4)' },
      seeders: { selector: 'div[class$="info"] span:nth-of-type(4)' },
      leechers: { selector: 'div[class$="info"] span:nth-of-type(4)' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
};
