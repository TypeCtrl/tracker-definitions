import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'scenefz',
  name: 'SceneFZ',
  description: 'SceneFZ is a ratioless ROMANIAN Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'ro-RO',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://scenefz.me/'],
  legacylinks: ['https://www.scenefz.me/', 'https://www.u-torrents.ro/'],
  caps: {
    categorymappings: [
      { id: '62', cat: 'TV', desc: 'Cartoons' },
      { id: '3', cat: 'TV/Anime', desc: 'Anime/Hentai' },
      { id: '1', cat: 'PC/0day', desc: 'Appz' },
      { id: '9', cat: 'TV/Documentary', desc: 'Documentary' },
      { id: '63', cat: 'TV/Documentary', desc: 'Documentary-RO' },
      { id: '6', cat: 'Books', desc: 'eBooks' },
      { id: '52', cat: 'Console', desc: 'Games-Console' },
      { id: '11', cat: 'PC/Games', desc: 'Games-PC' },
      { id: '18', cat: 'Other', desc: 'Images' },
      { id: '65', cat: 'Other', desc: 'Tutorial' },
      { id: '14', cat: 'PC', desc: 'Linux' },
      { id: '37', cat: 'PC/Mac', desc: 'Mac' },
      { id: '19', cat: 'PC/Phone-Other', desc: 'Mobile' },
      { id: '17', cat: 'Movies/BluRay', desc: 'Movies-BluRay' },
      { id: '24', cat: 'Movies/BluRay', desc: 'Movies-BluRayRO' },
      { id: '7', cat: 'Movies/DVD', desc: 'Movies-DVD' },
      { id: '2', cat: 'Movies/DVD', desc: 'Movies-DVD-RO' },
      { id: '8', cat: 'Movies/HD', desc: 'Movies-HD' },
      { id: '29', cat: 'Movies/HD', desc: 'Movies-HD-RO' },
      { id: '59', cat: 'Movies/Foreign', desc: 'Movies-RO' },
      { id: '57', cat: 'Movies/UHD', desc: 'Movies-UHD-RO' },
      { id: '61', cat: 'Movies/UHD', desc: 'Movies-UHD' },
      { id: '38', cat: 'Movies', desc: 'Movies-Packs' },
      { id: '10', cat: 'Movies/SD', desc: 'Movies-SD' },
      { id: '35', cat: 'Movies/SD', desc: 'Movies-SD-RO' },
      { id: '5', cat: 'Audio', desc: 'Music' },
      { id: '64', cat: 'Audio/Video', desc: 'Music Videos' },
      { id: '22', cat: 'TV/Sport', desc: 'Sport' },
      { id: '58', cat: 'TV/Sport', desc: 'Sports-RO' },
      { id: '43', cat: 'TV/HD', desc: 'TV-HD' },
      { id: '44', cat: 'TV/HD', desc: 'TV-HD-RO' },
      { id: '41', cat: 'TV', desc: 'TV-Packs' },
      { id: '45', cat: 'TV/SD', desc: 'TV-SD' },
      { id: '46', cat: 'TV/SD', desc: 'TV-SD-RO' },
      { id: '60', cat: 'TV/Foreign', desc: 'TV-RO' },
      { id: '66', cat: 'TV/Foreign', desc: 'TV-Packs-RO' },
      { id: '15', cat: 'XXX', desc: 'XXX' },
      { id: '47', cat: 'XXX', desc: 'XXX-DVD' },
      { id: '48', cat: 'XXX', desc: 'XXX-HD' },
      { id: '49', cat: 'XXX/Imageset', desc: 'XXX-IMGSet' },
      { id: '50', cat: 'XXX', desc: 'XXX-Packs' },
      { id: '51', cat: 'XXX', desc: 'XXX-SD' },
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
      default: 'torrent.refreshAt',
      options: {
        'torrent.refreshAt': 'created',
        'torrent.seeders': 'seeders',
        'torrent.size': 'size',
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
    form: 'form:has(input[name="_remember_me"])',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      _remember_me: 'on',
    },
    error: [
      { selector: 'td.embedded:has(center > h2:contains(failed))' },
      { selector: 'span:contains("Error")' },
    ],
    test: { path: 'browse' },
  },
  search: {
    paths: [{ path: 'browse' }],
    inputs: {
      $raw: '{{ range .Categories }}categories[]={{.}}&{{end}}',
      search: '{{ if .Query.IMDBID }}{{ .Query.IMDBID }}{{else}}{{ .Keywords }}{{end}}',
      sort: '{{ .Config.sort }}',
      direction: '{{ .Config.type }}',
    },
    rows: {
      selector: 'div.kt-portlet--mobile > div.kt-portlet__body--fit > div.mr-0',
    },
    fields: {
      category: {
        selector: 'a[href^="/browse?categories"]',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '(\\d+)$' }],
      },
      title: { selector: 'a[href^="/browse/"]' },
      details: { selector: 'a[href^="/browse/"]', attribute: 'href' },
      download: {
        selector: 'a[href^="/torrents/"]',
        attribute: 'href',
      },
      imdb: {
        optional: true,
        selector: 'a[href*="www.imdb.com/title/tt"]',
        attribute: 'href',
      },
      date: {
        selector: 'div[data-toggle="kt-tooltip"]',
        attribute: 'title',
        filters: [{ name: 'dateparse', args: 'Jan 2, 2006, 03:04:05 PM' }],
      },
      size: { selector: 'div[data-toggle="kt-tooltip"] + div + div' },
      grabs: {
        selector: 'div[data-toggle="kt-tooltip"] + div',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      seeders: {
        selector: 'div[data-toggle="kt-tooltip"] + div + div + div > div div:nth-child(1)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      leechers: {
        selector: 'div[data-toggle="kt-tooltip"] + div + div + div > div div:nth-child(2)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      downloadvolumefactor: {
        case: {
          'span.kt-badge--success:contains("free")': 0,
          'span.kt-badge--dark:contains("half")': 0.5,
          '*': 1,
        },
      },
      uploadvolumefactor: {
        case: { 'span.kt-badge--info:contains("double")': 2, '*': 1 },
      },
    },
  },
  source: 'jackett',
};
