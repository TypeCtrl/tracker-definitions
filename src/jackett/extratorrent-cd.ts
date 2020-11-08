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
      'music-search': ['q'],
      'book-search': ['q'],
    },
    categorymappings: [{ id: 'Other', cat: 'Other' }],
  },
  settings: [
    {
      name: 'info_8000',
      type: 'info',
      label: 'About ExtraTorrent Categories',
      default:
        "ExtraTorrent does not return categories in its search results.</br>To add to your Apps' Torznab indexer, replace all categories with 8000(Other).",
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
      category: { text: 'Other' },
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
        selector: 'td:nth-last-of-type(5):contains("ago")',
        optional: true,
        filters: [{ name: 'replace', args: [' ', '-'] }, { name: 'replace', args: ['-', ' '] }, { name: 'timeago' }],
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
