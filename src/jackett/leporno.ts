import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'leporno',
  name: 'LePorno',
  description: 'LePorno is a Public Tracker for 3X',
  language: 'en-EN',
  type: 'public',
  encoding: 'UTF-8',
  links: ['http://leporno.org/'],
  caps: {
    categorymappings: [{ id: '1', cat: 'XXX', desc: 'XXX' }],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  settings: [
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: '1',
      options: { '1': 'created', '2': 'title', '7': 'size', '10': 'seeders' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: '2',
      options: { '1': 'asc', '2': 'desc' },
    },
  ],
  download: { selector: 'a[href*="/dl.php?id="]' },
  search: {
    paths: [{ path: 'tracker.php#results', method: 'post' }],
    inputs: {
      'f[]': -1,
      o: '{{ .Config.sort }}',
      s: '{{ .Config.type }}',
      tm: -1,
      sns: -1,
      srg: -1,
      df: 1,
      da: 1,
      pn: '',
      nm: '{{ .Keywords }}',
      allw: 1,
      submit: 'Search',
    },
    rows: { selector: 'table#tor-tbl tr[id^="tor_"]' },
    fields: {
      title: { selector: 'a[href^="./viewtopic.php?t="]' },
      details: {
        selector: 'a[href^="./viewtopic.php?t="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="./viewtopic.php?t="]',
        attribute: 'href',
      },
      category: { text: 1 },
      size: { selector: 'td:nth-child(6) u' },
      date: { selector: 'td:nth-child(10) u' },
      seeders: { selector: 'td.seedmed > b' },
      leechers: { selector: 'td.leechmed > b' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
