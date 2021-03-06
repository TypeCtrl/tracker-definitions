import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'skytorrents-to',
  name: 'SkyTorrents.to',
  description: 'SkyTorrents.to is a Public SkyTorrents clone for TV / MOVIES / GENERAL',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://www.skytorrents.to/', 'https://skytorrents.org/', 'https://skytorrents.net/'],
  legacylinks: [
    'https://skytorrents.black-mirror.xyz/',
    'https://skytorrents.unblocked.casa/',
    'https://skytorrents.proxyportal.fun/',
    'https://skytorrents.uk-unblock.xyz/',
    'https://skytorrents.ind-unblock.xyz/',
    'https://skytorrents.unblocked.bar/',
    'https://skytorrents.proxyportal.pw/',
    'https://skytorrents.uk-unblock.pro/',
    'https://www.skytorrents.lol/',
    'https://skytorrents.to/',
  ],
  caps: {
    categorymappings: [
      { id: 'other', cat: 'Other', desc: 'Other' },
      { id: 'album', cat: 'Audio', desc: 'Album' },
      { id: 'ebook', cat: 'Books', desc: 'Ebook' },
      { id: 'movie', cat: 'Movies', desc: 'Movie' },
      { id: 'show', cat: 'TV', desc: 'Show' },
      { id: 'audio', cat: 'Audio', desc: 'Audio' },
      { id: 'doc', cat: 'Books', desc: 'Doc' },
      { id: 'games', cat: 'PC/Games', desc: 'Games' },
      { id: 'software', cat: 'PC', desc: 'Software' },
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
      default: 'created',
      options: { created: 'created', seeders: 'seeders' },
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
          '{{ if .Keywords }}?search={{ .Keywords }}&sort={{ .Config.sort }}{{ else }}top100?sort={{ .Config.sort }}{{ end }}',
      },
      {
        path: '{{ if .Keywords }}?search={{ .Keywords }}&sort={{ .Config.sort }}&page=2{{ else }}{{ end }}',
      },
      {
        path: '{{ if .Keywords }}?search={{ .Keywords }}&sort={{ .Config.sort }}&page=3{{ else }}{{ end }}',
      },
      {
        path: '{{ if .Keywords }}?search={{ .Keywords }}&sort={{ .Config.sort }}&page=4{{ else }}{{ end }}',
      },
    ],
    rows: { selector: 'tr.result' },
    fields: {
      category: { text: 'other' },
      'category|noappend': {
        selector: 'a.label[href*="type="]',
        optional: true,
      },
      title: { selector: 'td a' },
      details: { selector: 'td a', attribute: 'href' },
      magnet: { selector: 'a[href^="magnet:?"]', attribute: 'href' },
      size: { selector: 'td:nth-child(2)' },
      files: { selector: 'td:nth-child(3)' },
      date: {
        selector: 'td:nth-child(4)',
        filters: [{ name: 'timeago' }],
      },
      seeders: { selector: 'td:nth-child(5)' },
      leechers: { selector: 'td:nth-child(6)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
