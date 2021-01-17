import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'idope',
  name: 'Idope',
  description: 'iDope is a Public torrent search engine presenting direct magnet links',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://idope.se/', 'https://idope.unblocked.monster/'],
  legacylinks: [
    'https://idope.black-mirror.xyz/',
    'https://idope.unblocked.casa/',
    'https://idope.proxyportal.fun/',
    'https://idope.uk-unblock.xyz/',
    'https://idope.ind-unblock.xyz/',
    'https://idope.unblocked.bar/',
    'https://idope.proxyportal.pw/',
    'https://idope.uk-unblock.pro/',
    'https://idope.unblocked.rest/',
  ],
  caps: {
    categorymappings: [
      { id: '0', cat: 'Other', desc: 'Others' },
      { id: '1', cat: 'Movies', desc: 'Movies' },
      { id: '2', cat: 'Other', desc: 'Video' },
      { id: '3', cat: 'TV', desc: 'TV' },
      { id: '4', cat: 'TV/Anime', desc: 'Anime' },
      { id: '5', cat: 'XXX', desc: 'XXX' },
      { id: '6', cat: 'Audio', desc: 'Music' },
      { id: '7', cat: 'PC/Games', desc: 'Games' },
      { id: '8', cat: 'PC', desc: 'Apps' },
      { id: '9', cat: 'Books', desc: 'Books' },
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
      name: 'itorrents-links',
      type: 'checkbox',
      label: 'Add download links via itorrents.org',
      default: false,
    },
    {
      name: 'info',
      type: 'info',
      label: 'ITorrents Note',
      default: 'Without the itorrents option only magnet links will be provided.',
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site (Applies only to search with Keywords)',
      default: -3,
      options: {
        '1': 'seeders asc',
        '2': 'size asc',
        '3': 'created asc',
        '-3': 'created desc',
        '-1': 'seeders desc',
        '-2': 'size desc',
      },
    },
    {
      name: 'flaresolverr',
      type: 'info',
      label: 'FlareSolverr',
      default:
        'This site may use Cloudflare DDoS Protection, therefore Jackett requires <a href="https://github.com/Jackett/Jackett#configuring-flaresolverr" target="_blank">FlareSolver</a> to access it.',
    },
  ],
  search: {
    paths: [
      {
        path:
          '{{ if .Keywords }}torrent-list/{{ .Keywords }}?o={{ .Config.sort }}&c={{ range .Categories }}{{.}}{{end}}{{ else }}browse.html{{ end }}',
      },
      {
        path:
          '{{ if .Keywords }}torrent-list/{{ .Keywords }}?p=2&o={{ .Config.sort }}&c={{ range .Categories }}{{.}}{{end}}{{ else }}browse.html?&p=2{{ end }}',
      },
    ],
    rows: { selector: 'div.resultdiv' },
    fields: {
      category: { text: 0 },
      'category|noappend': {
        optional: true,
        selector: 'div.resultdivbotton div.resultdivbottoncategory',
        case: {
          ':contains("Others")': 0,
          ':contains("Movies")': 1,
          ':contains("Video")': 2,
          ':contains("TV")': 3,
          ':contains("Anime")': 4,
          ':contains("XXX")': 5,
          ':contains("Music")': 6,
          ':contains("Games")': 7,
          ':contains("Apps")': 8,
          ':contains("Books")': 9,
        },
      },
      title: { selector: 'div.resultdivtop a div.resultdivtopname' },
      details: { selector: 'div.resultdivtop a', attribute: 'href' },
      'download-itorrents': {
        selector: 'div.resultdivbotton div.hideinfohash',
        filters: [
          { name: 'toupper' },
          { name: 'prepend', args: 'http://itorrents.org/torrent/' },
          { name: 'append', args: '.torrent' },
        ],
      },
      download: {
        text: '{{ if .Config.itorrents-links }}{{ .Result.download-itorrents }}{{ else }}{{ end }}',
      },
      infohash: { selector: 'div.resultdivbotton div.hideinfohash' },
      date: {
        selector: 'div.resultdivbotton div.resulttime div.resultdivbottontime',
        filters: [{ name: 'timeago' }],
      },
      size: {
        selector: 'div.resultdivbotton div.resultlength div.resultdivbottonlength',
      },
      files: {
        selector: 'div.resultdivbotton div.resultfile div.resultdivbottonfiles',
      },
      seeders: {
        selector: 'div.resultdivbotton div.resultseed div.resultdivbottonseed',
      },
      leechers: { text: 0 },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
