import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'kickasstorrent-kathow',
  name: 'KickAssTorrent (kat.li)',
  description: 'kat.li is a Public KickAssTorrent clone for TV / MOVIES / GENERAL',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['https://kickass.ws/', 'https://kickass.unblockit.id/'],
  legacylinks: [
    'https://kickass.gg/',
    'https://katcr.io/',
    'https://thekat.nz/',
    'https://thekat.se/',
    'https://kat.how/',
    'https://kat.li/',
    'https://kickasstorrents.unblockninja.com/',
    'https://katcr.to/',
    'https://kickasstorrent.cr/',
    'https://kickass.unblockit.pro/',
    'https://kickass.unblockit.one/',
    'https://kickass.unblockit.me/',
    'https://kickass.unblockit.pw/',
  ],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
    },
    categorymappings: [
      { id: 'movies', cat: 'Movies' },
      { id: 'tv', cat: 'TV' },
      { id: 'music', cat: 'Audio' },
      { id: 'books', cat: 'Books' },
      { id: 'games', cat: 'Console' },
      { id: 'applications', cat: 'PC' },
      { id: 'xxx', cat: 'XXX' },
      { id: 'other', cat: 'Other' },
      { id: 'video', cat: 'TV' },
      { id: 'porn', cat: 'XXX' },
      { id: 'audio', cat: 'Audio' },
    ],
  },
  settings: [
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'time_add',
      options: { time_add: 'created', seeders: 'seeders', size: 'size' },
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
    paths: [
      {
        path:
          '{{ if .Keywords }}usearch/{{ .Keywords }}/{{else}}new/{{end}}?field={{ .Config.sort }}&sorder={{ .Config.type }}',
      },
    ],
    rows: { selector: 'table[class="data"] tr[id]' },
    fields: {
      category: {
        optional: true,
        selector: 'span[id^="cat_"] > strong > a:contains("Video")',
        filters: [{ name: 'replace', args: ['Video', 'movies'] }],
      },
      'category|noappend': {
        optional: true,
        selector: 'span[id^="cat_"] > strong > a',
        attribute: 'href',
        filters: [{ name: 'tolower' }, { name: 'trim', args: '/' }],
      },
      title: {
        selector: 'td:nth-child(1) > div > div > a[class="cellMainLink"]',
      },
      details: {
        selector: 'td:nth-child(1) > div > div > a[class="cellMainLink"]',
        attribute: 'href',
      },
      download: {
        optional: true,
        selector: 'a[href^="magnet:?xt="]',
        attribute: 'href',
      },
      size: {
        selector: 'td:nth-child(2)',
        filters: [
          { name: 'replace', args: ['N/A', '0 Bytes'] },
          { name: 're_replace', args: ['[.](?=.*[.])', ''] },
        ],
      },
      date: { selector: 'td:nth-child(3)' },
      seeders: {
        selector: 'td:nth-child(4)',
        filters: [{ name: 'replace', args: ['N/A', '0'] }],
      },
      leechers: {
        optional: true,
        selector: 'td:nth-child(5)',
        filters: [{ name: 'replace', args: ['N/A', '0'] }],
      },
      description: { selector: 'td:nth-child(1) > div > div > span' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
