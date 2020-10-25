import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'extratorrent-cd',
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
    categorymappings: [
      { id: '1', cat: 'TV' },
      { id: '2', cat: 'Movies' },
      { id: '3', cat: 'Other' },
    ],
  },
  settings: [
    {
      name: 'category-id',
      type: 'select',
      label:
        'The ExtraTorrent web site does not provide categories. Select the category you want Jackett to set on all results returned.',
      default: 3,
      options: { '1': 'TV', '2': 'Movies', '3': 'Other' },
    },
  ],
  search: {
    paths: [{ path: 'search/?search={{ .Keywords }}' }],
    keywordsfilters: [{ name: 're_replace', args: ['[\\s]+', '.'] }],
    rows: {
      selector: 'tr[class^="tl"]',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: { text: '{{ .Config.category-id }}' },
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
        selector: 'td:nth-last-of-type(5):not(:contains(":")):not(:contains("day"))',
        optional: true,
        filters: [
          { name: 'replace', args: [' ', '-'] },
          { name: 'append', args: ' -07:00' },
          { name: 'dateparse', args: '01-02-2006 -07:00' },
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
