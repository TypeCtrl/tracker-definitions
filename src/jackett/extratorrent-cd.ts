import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'extratorrent-cd',
  name: 'ExtraTorrent.cd',
  description:
    'ExtraTorrent.cd is a Public tracker, a  popular alternative to the original ET site, providing Movie / TV / General magnets',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['https://extratorrent.si/'],
  legacylinks: ['https://extratorrent.unblockit.pro/', 'https://extratorrent.unblockit.one/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [{ id: 'other', cat: 'Other' }],
  },
  settings: [
    {
      name: 'info',
      type: 'info',
      default:
        'ExtraTorrent-cd does not use categories. In your software Indexer settings, set the category to 7000.',
    },
  ],
  search: {
    paths: [{ path: 'search/?search={{ .Keywords }}' }],
    rows: { selector: 'tr[class^="tl"]' },
    fields: {
      category: { text: 'other' },
      title: { selector: 'a[href*="/torrent/"][title^="view"]' },
      details: {
        selector: 'a[href*="/torrent/"]',
        attribute: 'href',
        filters: [{ name: 'replace', args: ['///', '//'] }],
      },
      download: {
        selector: 'a[href^="magnet:?xt="]',
        attribute: 'href',
      },
      date: {
        selector:
          'td:nth-last-of-type(5):not(:contains(":")):not(:contains("Y-day-")):not(:contains("Today-"))',
        optional: true,
        filters: [
          { name: 'replace', args: [' ', '-'] },
          { name: 'dateparse', args: '01-02-2006' },
        ],
      },
      size: { selector: 'td:nth-last-of-type(4)' },
      seeders: { optional: true, selector: 'td.sy, td.sn' },
      leechers: { optional: true, selector: 'td.ly, td.ln' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};