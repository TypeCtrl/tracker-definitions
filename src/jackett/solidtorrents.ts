import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'solidtorrents',
  name: 'SolidTorrents',
  description: 'SolidTorrents is a Public torrent meta-search engine',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://solidtorrents.net/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [
      { id: 'Audio', cat: 'Audio' },
      { id: 'Video', cat: 'Movies' },
      { id: 'Image', cat: 'Other/Misc' },
      { id: 'Document', cat: 'Books/Comics' },
      { id: 'eBook', cat: 'Books/Ebook' },
      { id: 'Program', cat: 'PC/0day' },
      { id: 'Android', cat: 'PC/Phone-Android' },
      { id: 'Archive', cat: 'Other' },
      { id: 'Diskimage', cat: 'PC/ISO' },
      { id: 'Sourcecode', cat: 'Movies/Other' },
      { id: 'Database', cat: 'Movies/DVD' },
      { id: 'Unknown', cat: 'Other' },
    ],
  },
  settings: [],
  search: {
    paths: [{ path: 'search?q={{.Keywords}}&sort=date&category=all' }],
    rows: {
      selector: 'div[role="listitem"]:has(a[href^="magnet:?xt="])',
    },
    fields: {
      title: { selector: 'div[class$="__title"] h3' },
      details: {
        selector: 'div[class$="__title"] a',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="magnet:?xt="]',
        attribute: 'href',
      },
      category: {
        selector: 'div.v-list__tile__content div:nth-of-type(2)',
        filters: [{ name: 'regexp', args: '(.+?) \\|' }],
      },
      date: {
        selector: 'div.v-list__tile__content div:nth-of-type(2)',
        filters: [
          { name: 'replace', args: ['a few', '1'] },
          { name: 'replace', args: ['an ', '1 '] },
          { name: 'replace', args: ['a ', '1 '] },
          { name: 'regexp', args: '(\\d+ \\w+ \\w+)' },
        ],
      },
      seeders: {
        selector: 'div.v-list__tile__content div:nth-of-type(3) span:nth-child(1)',
      },
      leechers: {
        selector: 'div.v-list__tile__content div:nth-of-type(3) span:nth-child(2)',
      },
      size: {
        selector: 'div.v-list__tile__content div:nth-of-type(3)',
        remove: 'span',
      },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};
