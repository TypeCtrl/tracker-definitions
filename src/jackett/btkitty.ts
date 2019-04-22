import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'btkitty',
  name: 'BTKitty',
  description: 'BTKITTY is a Public BitTorrent DHT search engine.',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['https://btkittys.co/'],
  legacylinks: [
    'https://cnbtkitty.org/',
    'http://cnbtkitty.org/',
    'https://cnbtkitty.com/',
    'http://cnbtkitty.com/',
    'https://cnbtkitty.me/',
    'http://cnbtkitty.me/',
    'http://cnbtkitty.ws/',
    'http://btkitty.pet/',
  ],
  caps: {
    categorymappings: [{ id: '1', cat: 'Other', desc: 'Other' }],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  settings: [
    {
      name: 'info',
      type: 'info',
      default:
        'BTKitty does not use categories. In your software Indexer settings, set the category to 100001.',
    },
  ],
  download: { selector: 'a[href^="magnet:?"]' },
  search: {
    paths: [{ path: '/', method: 'post', followredirect: true }],
    inputs: {
      keyword: '{{if .Keywords }}{{.Keywords}}{{else}}test{{end}}',
      hidden: 'true',
    },
    rows: { selector: 'dl.list-con', filters: [{ name: 'andmatch' }] },
    fields: {
      title: { selector: 'dt a' },
      category: { text: '1' },
      details: { selector: 'dt a', attribute: 'href' },
      download: { selector: 'dt a', attribute: 'href' },
      size: { selector: 'dd span:nth-of-type(4) b' },
      files: { selector: 'dd span:nth-of-type(5) b' },
      date: {
        selector: 'dd span:nth-of-type(3) b',
        filters: [{ name: 'dateparse', args: '2006-01-02' }],
      },
      grabs: { selector: 'dd span:nth-of-type(7) b' },
      seeders: { text: '1' },
      leechers: { text: '1' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};
