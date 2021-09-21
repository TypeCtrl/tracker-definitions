import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'rutor',
  name: 'RuTor',
  description: 'RuTor is a RUSSIAN Public site for MOVIES / TV / GENERAL',
  language: 'ru-RU',
  type: 'public',
  encoding: 'UTF-8',
  links: ['http://rutor.info/', 'http://rutor.is/', 'https://rutor.nocensor.work/'],
  legacylinks: [
    'http://live-rutor.org/',
    'http://new-rutor.org/',
    'https://rutor.black-mirror.xyz/',
    'https://rutor.unblocked.casa/',
    'https://rutor.proxyportal.fun/',
    'https://rutor.uk-unblock.xyz/',
    'https://rutor.ind-unblock.xyz/',
    'https://rutor.unblocked.bar/',
    'https://rutor.proxyportal.pw/',
    'https://rutor.uk-unblock.pro/',
    'https://rutor.root.yt/',
    'https://rutor.unblocked.rest/',
    'https://rutor.unblocked.monster/',
    'https://rutor.nocensor.space/',
  ],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies', desc: 'Movies' },
      { id: '2', cat: 'TV', desc: 'TV' },
      { id: '3', cat: 'Other', desc: 'Other' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q'],
      'movie-search': ['q'],
      'music-search': ['q'],
    },
  },
  settings: [
    {
      name: 'info',
      type: 'info',
      label: 'A note about RuTor',
      default:
        'RuTor does not display categories in its search results page. This definition is probably only suitable for Jackett Dashboard Manual searches.',
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site (Applies only to Search with Keywords)',
      default: 0,
      options: {
        '0': 'created desc',
        '1': 'created asc',
        '2': 'seeders desc',
        '3': 'seeders asc',
        '6': 'size desc',
        '7': 'size asc',
        '8': 'title desc',
        '9': 'title asc',
      },
    },
  ],
  search: {
    paths: [
      {
        path: '{{ if .Keywords }}search/0/0/100/{{ .Config.sort }}/{{ .Keywords }}/{{ else }}top/{{ end }}',
      },
    ],
    rows: { selector: 'tr:has(td:has(a.downgif))' },
    fields: {
      category: { text: 3 },
      title: {
        selector: 'td:nth-of-type(2) a[href^="/torrent/"]',
        filters: [
          {
            name: 're_replace',
            args: [
              '.+\\/\\s([^а-яА-я\\/]+)\\s.*\\[(?:S*(\\d+))(?:x*(\\d+-*\\d*).*)*\\].*\\)\\s+(.+)\\s+(?:\\||от)\\s*(.+)',
              '$1 - S$2E$3 - rus - $4 - $5',
            ],
          },
          { name: 'replace', args: ['E -', 'E01-99 -'] },
          { name: 'replace', args: ['Кураж-Бамбей', 'kurazh'] },
        ],
      },
      details: {
        selector: 'td:nth-of-type(2) a[href^="/torrent/"]',
        attribute: 'href',
      },
      download: {
        selector: 'td:nth-of-type(2) a.downgif',
        attribute: 'href',
      },
      magnet: {
        optional: true,
        selector: 'td:nth-of-type(2) a[href^="magnet:?xt="]',
        attribute: 'href',
      },
      date: {
        selector: 'td:nth-of-type(1)',
        filters: [
          { name: 're_replace', args: ['[\\s]+', ' '] },
          { name: 'replace', args: ['Янв', 'Jan'] },
          { name: 'replace', args: ['Фев', 'Feb'] },
          { name: 'replace', args: ['Мар', 'Mar'] },
          { name: 'replace', args: ['Апр', 'Apr'] },
          { name: 'replace', args: ['Май', 'May'] },
          { name: 'replace', args: ['Июн', 'Jun'] },
          { name: 'replace', args: ['Июл', 'Jul'] },
          { name: 'replace', args: ['Авг', 'Aug'] },
          { name: 'replace', args: ['Сен', 'Sep'] },
          { name: 'replace', args: ['Окт', 'Oct'] },
          { name: 'replace', args: ['Ноя', 'Nov'] },
          { name: 'replace', args: ['Дек', 'Dec'] },
          { name: 'append', args: ' 00:00:00 +03:00' },
          { name: 'dateparse', args: '02 Jan 06 15:04:05 -07:00' },
        ],
      },
      size: { optional: true, selector: 'td:contains(\\00a0B)' },
      seeders: { selector: 'td span.green' },
      leechers: { selector: 'td span.red' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
