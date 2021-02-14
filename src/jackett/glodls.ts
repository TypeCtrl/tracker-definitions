import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'glodls',
  name: 'GloDLS',
  description: 'GloDLS is a Public Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: [
    'https://www.gtdb.to/',
    'https://glodls.to/',
    'https://glotorrents.unblockit.link/',
    'https://glodls.unblocked.monster/',
  ],
  legacylinks: [
    'https://glodls.rocks/',
    'https://glotorrents.unblockit.pro/',
    'https://glotorrents.unblockit.one/',
    'https://glodls.black-mirror.xyz/',
    'https://glodls.unblocked.casa/',
    'https://glodls.proxyportal.fun/',
    'https://glodls.uk-unblock.xyz/',
    'https://glodls.ind-unblock.xyz/',
    'https://glotorrents.unblockit.me/',
    'https://glotorrents.unblockit.pw/',
    'https://glotorrents.unblockit.id/',
    'https://glotorrents.unblockit.win/',
    'https://glodls.unblocked.bar/',
    'https://glodls.proxyportal.pw/',
    'https://glodls.uk-unblock.pro/',
    'https://gtdb.to/',
    'https://glotorrents.unblockit.top/',
    'https://glotorrents.unblockit.lat/',
    'https://glotorrents.unblockit.app/',
    'https://glodls.unblocked.rest/',
    'https://glotorrents.unblockit.dev/',
    'https://glotorrents.unblockit.ltd/',
  ],
  caps: {
    categorymappings: [
      { id: '50', cat: 'XXX', desc: 'XXX' },
      { id: '5', cat: 'PC/Mobile-Android', desc: 'Android' },
      { id: '28', cat: 'TV/Anime', desc: 'Anime' },
      { id: '18', cat: 'PC', desc: 'Apps' },
      { id: '51', cat: 'Books/Ebook', desc: 'Books' },
      { id: '73', cat: 'XXX', desc: 'Desi Porn' },
      { id: '75', cat: 'Audio/Lossless', desc: 'FLAC' },
      { id: '10', cat: 'PC/Games', desc: 'Games' },
      { id: '55', cat: 'PC/Mac', desc: 'Macintosh' },
      { id: '52', cat: 'PC/Mobile-Other', desc: 'Mobile' },
      { id: '1', cat: 'Movies', desc: 'Movies' },
      { id: '22', cat: 'Audio', desc: 'Music' },
      { id: '33', cat: 'Other', desc: 'Other' },
      { id: '72', cat: 'TV', desc: 'Packs' },
      { id: '70', cat: 'Other', desc: 'Pictures' },
      { id: '76', cat: 'TV/Sport', desc: 'Sports' },
      { id: '74', cat: 'Books', desc: 'Tutorials' },
      { id: '41', cat: 'TV', desc: 'TV' },
      { id: '71', cat: 'Audio/Video', desc: 'Videos' },
      { id: '54', cat: 'PC/0day', desc: 'Windows' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
  },
  settings: [
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'id',
      options: {
        id: 'created',
        seeders: 'seeders',
        size: 'size',
        name: 'title',
      },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'desc',
      options: { desc: 'desc', asc: 'asc' },
    },
  ],
  search: {
    paths: [{ path: 'search_results.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      cat: 0,
      incldead: 1,
      inclexternal: 0,
      lang: 0,
      sort: '{{ .Config.sort }}',
      order: '{{ .Config.type }}',
    },
    rows: { selector: 'table.ttable_headinner tr.t-row', after: 1 },
    fields: {
      category: { text: 33 },
      'category|noappend': {
        optional: true,
        selector: 'a[href^="/search.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: { selector: 'td:nth-child(2) a[title]', attribute: 'title' },
      details: {
        selector: 'td:nth-child(2) a[title]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="/down.php?id="], a[href*="itorrents.org/torrent/"]',
        attribute: 'href',
      },
      magnet: { selector: 'a[href^="magnet:?xt="]', attribute: 'href' },
      size: { selector: 'td:nth-child(5)' },
      seeders: { selector: 'td:nth-child(6)' },
      leechers: { selector: 'td:nth-child(7)' },
      date: { text: 'now' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
