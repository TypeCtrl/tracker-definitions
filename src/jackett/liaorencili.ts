import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'liaorencili',
  name: 'LIAORENCILI',
  description: 'LIAORENCILI (Cili180) is a Public BitTorrent DHT search engine.',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: [
    'http://www.cilinb1.xyz/',
    'http://www.cilinb2.xyz/',
    'http://www.cilinb3.xyz/',
    'http://www.cilinb4.xyz/',
    'http://www.cilinb5.xyz/',
    'http://www.cilinb6.xyz/',
    'http://www.cilinb7.xyz/',
    'http://www.cilinb8.xyz/',
    'http://www.cilinb9.xyz/',
    'http://www.cilinb10.xyz/',
  ],
  legacylinks: [
    'http://www.cili180.com/',
    'https://www.cilijj.xyz/',
    'https://www.liaorenso.xyz/',
    'https://www.liaorenso11.xyz/',
    'https://www.liaorenso12.xyz/',
    'https://www.liaorenso19.xyz/',
    'http://lrcili.xyz/',
    'http://www.lrcili.xyz/',
    'https://www.lrcili1.xyz/',
    'https://www.lrcili2.xyz/',
    'https://www.lrcili7.xyz/',
    'https://www.lrcili3.xyz/',
    'https://www.lrcili4.xyz/',
    'https://www.lrcili5.xyz/',
    'https://www.lrcili6.xyz/',
    'https://www.lrcili8.xyz/',
    'https://www.lrcili9.xyz/',
    'https://www.lrcili10.xyz/',
    'https://www.liaorenso1.xyz/',
    'https://www.liaorenso2.xyz/',
    'https://www.liaorenso3.xyz/',
    'https://www.liaorenso4.xyz/',
    'https://www.liaorenso5.xyz/',
    'https://www.liaorenso6.xyz/',
    'https://www.liaorenso7.xyz/',
    'https://www.liaorenso8.xyz/',
    'https://www.liaorenso9.xyz/',
    'https://www.liaorenso13.xyz/',
    'https://www.liaorenso14.xyz/',
    'https://www.liaorenso15.xyz/',
    'https://www.liaorenso16.xyz/',
    'https://www.liaorenso17.xyz/',
    'https://www.liaorenso18.xyz/',
    'http://www.lrsoso1.xyz/',
    'http://www.lrsoso2.xyz/',
    'http://www.lrsoso3.xyz/',
    'http://www.lrsoso4.xyz/',
    'http://www.lrsoso5.xyz/',
    'http://www.lrsoso6.xyz/',
    'http://www.lrsoso7.xyz/',
    'http://www.lrsoso8.xyz/',
    'http://www.lrsoso9.xyz/',
    'http://www.lrsoso10.xyz/',
    'http://www.cilijj.xyz/',
  ],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [{ id: '1', cat: 'Other' }],
  },
  settings: [],
  search: {
    paths: [{ path: 'search/', method: 'post', followredirect: true }],
    inputs: {
      keyword: '{{ if .Keywords }}{{ .Keywords }}{{else}}{{ .Today.Year }}{{end}}',
    },
    rows: {
      selector: 'div.list-area > dl.item',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: { text: 1 },
      title: { selector: 'dt a' },
      details: { selector: 'dt a', attribute: 'href' },
      download: {
        selector: 'a[href^="magnet:?xt="]',
        attribute: 'href',
      },
      date: {
        selector: 'dd.attr span:nth-child(1) b',
        filters: [{ name: 'dateparse', args: '2006-01-02' }],
      },
      size: { selector: 'dd.attr span:nth-child(2) b' },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
