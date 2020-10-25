import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'torrentdb',
  name: 'TorrentDB',
  description: 'TorrentDB - Private site for Live Concerts with Strict Quality Control',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://torrentdb.net/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies', desc: 'Movies' },
      { id: '2', cat: 'TV', desc: 'TV' },
      { id: '3', cat: 'Audio', desc: 'Music' },
      { id: '4', cat: 'PC/Games', desc: 'Games' },
      { id: '5', cat: 'Other', desc: 'Miscellaneous' },
      { id: '6', cat: 'XXX', desc: 'XXX' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
      'music-search': ['q'],
    },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'freeleech',
      type: 'checkbox',
      label: 'Search freeleech only',
      default: false,
    },
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
  search: {
    paths: [{ path: 'filter/torrents' }],
    inputs: {
      $raw:
        '{{ range .Categories }}categories[]={{.}}&{{end}}{{ if .Config.freeleech }}freeleech=1&{{ else }}{{ end }}',
      search: '{{ if .Query.IMDBID }}{{ .Query.IMDBIDShort }}{{ else }}{{ .Keywords }}{{ end }}',
      tags: '',
      sorting: '{{ .Config.sort }}',
      direction: '{{ .Config.type }}',
      qty: 100,
    },
    rows: {
      selector: 'table > tbody > tr',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: {
        selector: 'a[href*="/torrents/category/"]',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '/category/(\\d+)\\.' }],
      },
      title: { selector: 'a[href*="/torrent/"]' },
      details: { selector: 'a[href*="/torrent/"]', attribute: 'href' },
      download: {
        selector: 'a[href*="/download/"]',
        attribute: 'href',
      },
      date: {
        selector: 'td:nth-child(2) small',
        filters: [{ name: 'regexp', args: '(.+?)\\s*by' }, { name: 'timeago' }],
      },
      size: { selector: 'td:nth-child(5)' },
      grabs: { selector: 'td:nth-child(6)' },
      seeders: { selector: 'td:nth-child(9)' },
      leechers: { selector: 'td:nth-child(10)' },
      imdb: {
        optional: true,
        selector: 'a[href*="imdb.com/title/tt"]',
        attribute: 'href',
      },
      downloadvolumefactor: {
        case: { 'i.fa-star': 0, 'i.fa-certificate': 0, '*': 1 },
      },
      uploadvolumefactor: {
        case: { 'i.fa-certificate': 2, 'i.fa-gem': 2, '*': 1 },
      },
      minimumratio: { text: 1 },
      minimumseedtime: { text: 604800 },
    },
  },
  source: 'jackett',
};
