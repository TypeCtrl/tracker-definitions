import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'oxtorrent',
  name: 'OxTorrent',
  description: 'OxTorrent is a French Public site for TV / MOVIES / GENERAL',
  language: 'fr-FR',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['https://www.oxtorrent.com/'],
  legacylinks: ['https://wwv.oxtorrent.com/', 'https://www.smartorrent.tv/'],
  caps: {
    categorymappings: [
      { id: 'movies', cat: 'Movies', desc: 'Movies' },
      { id: 'tvshows', cat: 'TV', desc: 'TV Shows' },
      { id: 'softwares', cat: 'PC', desc: 'Softwares' },
      { id: 'music', cat: 'Audio', desc: 'Music' },
      { id: 'console-games', cat: 'Console', desc: 'Console Games' },
      { id: 'pc-games', cat: 'PC/Games', desc: 'PC Games' },
      { id: 'books', cat: 'Books', desc: 'Books' },
      { id: 'xxx', cat: 'XXX', desc: 'XXX' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  settings: [
    {
      name: 'downloadlink',
      type: 'select',
      label: 'Download link',
      default: 'magnet:?xt=',
      options: { '/get_torrents/': '.torrent', 'magnet:?xt=': 'magnet' },
    },
  ],
  download: {
    selector: 'a[href*="{{ .Config.downloadlink }}"]',
    attribute: 'href',
  },
  search: {
    paths: [{ path: '{{ if .Keywords }}recherche/{{ .Keywords }}{{else}}{{end}}' }],
    rows: {
      selector:
        'div.listing-torrent > table > tbody > tr:has(a[href^="torrent/"]), div.listing-torrent > table > tbody > tr:has(a[href^="/torrent/"])',
    },
    fields: {
      category: {
        selector: 'td:nth-child(1) i, td:nth-child(1) div i',
        case: {
          '.Films': 'movies',
          '.Séries': 'tvshows',
          '.Logiciels': 'softwares',
          '.Musique': 'music',
          '.Jeux-Consoles': 'console-games',
          '.Jeux-PC': 'pc-games',
          '.Ebook': 'books',
          '.Porno': 'xxx',
        },
      },
      site_date: {
        selector: 'td:nth-child(1) a',
        filters: [{ name: 'regexp', args: '(\\w+)$' }],
      },
      title: {
        selector: 'td:nth-child(1) a',
        filters: [
          {
            name: 'replace',
            args: [' FRENCH', ' {{ .Result.site_date }} FRENCH'],
          },
          {
            name: 'replace',
            args: ['MULTI', '{{ .Result.site_date }} MULTI'],
          },
          {
            name: 'replace',
            args: ['TRUEFRENCH', '{{ .Result.site_date }} TRUEFRENCH'],
          },
          {
            name: 'replace',
            args: ['VOSTFR', '{{ .Result.site_date }} VOSTFR'],
          },
          { name: 're_replace', args: ['(\\w+)$', ''] },
        ],
      },
      details: { selector: 'td:nth-child(1) a', attribute: 'href' },
      download: { selector: 'td:nth-child(1) a', attribute: 'href' },
      size: { selector: 'td:nth-child(2)' },
      date: { text: 'now' },
      seeders: { selector: 'td:nth-child(3)' },
      leechers: { selector: 'td:nth-child(4)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
