import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'pussytorrents',
  name: 'PussyTorrents',
  description: 'PussyTorrents is a Semi-Private Torrent Tracker for 3X',
  language: 'en-US',
  type: 'semi-private',
  encoding: 'UTF-8',
  links: ['https://pussytorrents.org/'],
  caps: {
    categorymappings: [{ id: '1', cat: 'XXX', desc: 'XXX' }],
    modes: { search: ['q'], 'tv-search': ['q'], 'movie-search': ['q'] },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'added',
      options: {
        added: 'created',
        seeders: 'seeders',
        size: 'size',
        nameSort: 'title',
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
    path: 'user/account/login/',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      remember_me: 'on',
    },
    error: [{ selector: 'div.alert-error' }],
    test: { path: '/', selector: 'a[href="/user/account/logout"]' },
  },
  search: {
    paths: [{ path: 'torrents/browse' }],
    inputs: {
      query: '{{ .Keywords }}',
      page: 1,
      orderby: '{{ .Config.sort }}',
      order: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table#torrenttable > tbody > tr:has(a[href^="/download/"])',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: { text: 1 },
      title: { selector: 'a[href^="/torrent/"]' },
      details: { selector: 'a[href^="/torrent/"]', attribute: 'href' },
      download: {
        selector: 'a[href^="/download/"]',
        attribute: 'href',
      },
      date: {
        selector: 'span.subnote',
        filters: [
          { name: 'replace', args: ['Added on ', ''] },
          { name: 'dateparse', args: '2006-01-02 15:04:05' },
        ],
      },
      size: { selector: 'td:nth-last-child(5)' },
      grabs: {
        selector: 'td:nth-last-child(4)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      seeders: { selector: 'td:nth-last-child(3)' },
      leechers: { selector: 'td:nth-last-child(2)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
