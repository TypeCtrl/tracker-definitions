import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'oxtorrent',
  name: 'OxTorrent',
  description: 'OxTorrent is a French Public site for TV / MOVIES / GENERAL',
  language: 'fr-FR',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['https://www.oxtorrent.cc/', 'https://www.oxtorrent.co/', 'https://oxtorrent.unblocked.rest/'],
  legacylinks: [
    'https://wwv.oxtorrent.com/',
    'https://www.smartorrent.tv/',
    'https://oxtorrent.black-mirror.xyz/',
    'https://oxtorrent.unblocked.casa/',
    'https://oxtrorrent.proxyportal.fun/',
    'https://oxtorrent.uk-unblock.xyz/',
    'https://oxtorrent.ind-unblock.xyz/',
    'https://www.oxtorrent.com/',
    'https://www.oxtorrent.pw/',
    'https://oxtorrent.unblocked.bar/',
    'https://oxtorrent.proxyportal.pw/',
    'https://oxtorrent.uk-unblock.pro/',
  ],
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
      'music-search': ['q'],
      'book-search': ['q'],
    },
  },
  settings: [
    {
      name: 'downloadlink',
      type: 'select',
      label: 'Download link',
      default: 'magnet:?xt=',
      options: { get_torrents: '.torrent', 'magnet:?xt=': 'magnet' },
    },
    {
      name: 'info_downloadlink',
      type: 'info',
      label: 'About the Download Link',
      default:
        'Note that only <b>www.oxtorrent.cc</b> supports the use of the <b>.torrent</b> download link.<br />All sites support <b>magnet</b> links.',
    },
    {
      name: 'multilang',
      type: 'checkbox',
      label: 'Replace MULTI by another language in release name',
      default: false,
    },
    {
      name: 'multilanguage',
      type: 'select',
      label: 'Replace MULTI by this language',
      default: 'FRENCH',
      options: {
        FRENCH: 'FRENCH',
        'MULTI.FRENCH': 'MULTI.FRENCH',
        ENGLISH: 'ENGLISH',
        'MULTI.ENGLISH': 'MULTI.ENGLISH',
        VOSTFR: 'VOSTFR',
        'MULTI.VOSTFR': 'MULTI.VOSTFR',
      },
    },
    {
      name: 'vostfr',
      type: 'checkbox',
      label: 'Replace VOSTFR with ENGLISH',
      default: false,
    },
  ],
  download: {
    selector: 'a[href*="{{ .Config.downloadlink }}"]',
    attribute: 'href',
  },
  search: {
    paths: [
      {
        path: '{{ if .Keywords }}recherche/{{ .Keywords }}{{ else }}{{ end }}',
      },
    ],
    keywordsfilters: [
      { name: 're_replace', args: ['(?i)(S0)(\\d{1,2})$', 'saison $2'] },
      { name: 're_replace', args: ['(?i)(S)(\\d{1,3})$', 'saison $2'] },
    ],
    rows: {
      selector: 'table.table-hover > tbody > tr:has(a[href*="torrent/"])',
      filters: [{ name: 'andmatch' }],
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
        filters: [{ name: 'regexp', args: '(19|20\\d{2})$' }],
      },
      title_phase1: {
        selector: 'td:nth-child(1) a',
        filters: [
          {
            name: 're_replace',
            args: ['(?i)( FRENCH)', ' {{ .Result.site_date }} FRENCH'],
          },
          {
            name: 're_replace',
            args: ['(?i)( MULTI)', ' {{ .Result.site_date }} MULTI'],
          },
          {
            name: 'replace',
            args: ['(?i)( TRUEFRENCH)', ' {{ .Result.site_date }} TRUEFRENCH'],
          },
          {
            name: 're_replace',
            args: ['(?i)( VOSTFR)', ' {{ .Result.site_date }} VOSTFR'],
          },
          {
            name: 're_replace',
            args: ['(?i)( SUBFRENCH)', ' {{ .Result.site_date }} SUBFRENCH'],
          },
          { name: 're_replace', args: ['(19|20\\d{2})$', ''] },
        ],
      },
      title_multilang: {
        text: '{{ .Result.title_phase1 }}',
        filters: [
          {
            name: 're_replace',
            args: ['(?i)(\\smulti\\s)', ' {{ .Config.multilanguage }} '],
          },
        ],
      },
      title_phase2: {
        text: '{{ if .Config.multilang }}{{ .Result.title_multilang }}{{ else }}{{ .Result.title_phase1 }}{{ end }}',
      },
      title_vostfr: {
        text: '{{ .Result.title_phase2 }}',
        filters: [
          { name: 're_replace', args: ['(?i)(\\svostfr\\s)', ' ENGLISH '] },
          {
            name: 're_replace',
            args: ['(?i)(\\ssubfrench\\s)', ' ENGLISH '],
          },
        ],
      },
      title: {
        text: '{{ if .Config.vostfr }}{{ .Result.title_vostfr }}{{ else }}{{ .Result.title_phase2 }}{{ end }}',
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
