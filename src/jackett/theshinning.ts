import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'theshinning',
  name: 'The Shinning',
  description: 'The Shinning (TsH) is a GERMAN Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'de-DE',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://theshinning.me/'],
  legacylinks: ['https://theshinning.org', 'https://theshinning.org/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies', desc: 'Movies' },
      { id: '2', cat: 'TV', desc: 'TV' },
      { id: '3', cat: 'Audio', desc: 'Music' },
      { id: '4', cat: 'Console', desc: 'Games' },
      { id: '5', cat: 'PC', desc: 'Apps' },
      { id: '6', cat: 'Other', desc: 'Misc' },
      { id: '7', cat: 'XXX', desc: 'XXX' },
      { id: '8', cat: 'Movies', desc: 'Kids' },
      { id: '9', cat: 'TV/Sport', desc: 'Sport' },
      { id: '10', cat: 'TV/Documentary', desc: 'Doku' },
    ],
    modes: {
      search: ['q', 'imdbid'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
      'music-search': ['q'],
    },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'created_at',
      options: {
        created_at: 'created',
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
  login: {
    path: 'login',
    method: 'form',
    form: 'form[action$="/login"]',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      remember: 'on',
    },
    selectorinputs: {
      _token: { selector: 'input[name="_token"]', attribute: 'value' },
    },
    error: [{ selector: 'form[action$="/login"] .text-red' }],
  },
  ratio: {
    path: '/',
    selector: 'span:has(i.fa-sync-alt)',
    filters: [{ name: 'regexp', args: 'Ratio : (\\d+)' }],
  },
  search: {
    paths: [{ path: 'filterTorrents' }],
    inputs: {
      $raw: '{{ range .Categories }}categories[]={{.}}&{{end}}',
      search: '{{ if .Query.IMDBID }}{{else}}{{ .Keywords }}{{end}}',
      description: '',
      uploader: '',
      imdb: '{{ .Query.IMDBIDShort }}',
      tvdb: '',
      tmdb: '',
      mal: '',
      sorting: '{{ .Config.sort }}',
      sort: '{{ .Config.sort }}',
      direction: '{{ .Config.type }}',
      qty: 100,
    },
    rows: { selector: 'table > tbody > tr' },
    fields: {
      category: {
        selector: 'a[href*="/categories/"]',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '/categories/.*?\\.(\\d+)' }],
      },
      title: { selector: 'a.view-torrent' },
      download: {
        selector: 'a[href*="/download/"]',
        attribute: 'href',
      },
      details: { selector: 'a.view-torrent', attribute: 'href' },
      banner: {
        optional: true,
        selector: 'div.torrent-poster img',
        attribute: 'src',
        filters: [
          {
            name: 'replace',
            args: ['https://theshinning.me/img/nocover.png', ''],
          },
        ],
      },
      comments: {
        selector: 'a[href*="#comments"]',
        attribute: 'href',
        optional: true,
      },
      imdb: {
        optional: true,
        selector: 'a[href*="imdb.com/title/tt"]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-last-child(4)' },
      grabs: {
        selector: 'td:nth-last-child(3)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      seeders: { selector: 'td:nth-last-child(2)' },
      leechers: { selector: 'td:nth-last-child(1)' },
      date: {
        selector: 'time',
        filters: [{ name: 'dateparse', args: '02/01/2006 15:04:05' }],
      },
      downloadvolumefactor: {
        case: {
          'i[class*="fa-id-badge text-orange"]': 0,
          'i[class*="fa-trophy text-purple"]': 0,
          'i[class*="fa-star text-bold"]': 0,
          'i[class*="fa-coins text-bold"]': 0,
          'i[class*="fa-globe text-blue"]': 0,
          'i[class*="fa-star text-gold"]': 0,
          'i[class*="fa-certificate text-pink"]': 0,
          '*': 1,
        },
      },
      uploadvolumefactor: {
        case: {
          'i[class*="fa-gem text-green"]': 2,
          'i[class*="fa-globe text-green"]': 2,
          'i[class*="fa-certificate text-pink"]': 2,
          '*': 1,
        },
      },
    },
  },
  source: 'jackett',
};
