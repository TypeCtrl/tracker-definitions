import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'sukebei-pantsu',
  name: 'Sukebei-pantsu',
  description: 'Sukebei-pantsu is a Public site dedicated to Adult Asian content',
  language: 'en-EN',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://sukebei.pantsu.cat/'],
  settings: [
    {
      name: 'cat-id',
      type: 'select',
      label: 'Category',
      default: '_',
      options: {
        '11': 'Art - Anime',
        '12': 'Art - Doujinshi',
        '13': 'Art - Games',
        '14': 'Art - Manga',
        '15': 'Art - Pictures',
        '21': 'Real Life - Photobooks and Pictures',
        '22': 'Real Life - Videos',
        _: 'All categories',
        '1_': 'Art',
        '2_': 'Real Life',
      },
    },
    {
      name: 'filter-id',
      type: 'select',
      label: 'Filter',
      default: '0',
      options: {
        '0': 'Show all',
        '1': 'Filter Remakes',
        '2': 'Trusted',
        '3': 'A+',
      },
    },
  ],
  caps: {
    categorymappings: [
      { id: '1_', cat: 'XXX', desc: 'Adult Art' },
      { id: '11', cat: 'XXX', desc: 'Adult Anime' },
      { id: '12', cat: 'XXX', desc: 'Doujinshi' },
      { id: '13', cat: 'XXX', desc: 'Adult Games' },
      { id: '14', cat: 'XXX', desc: 'Adult Manga' },
      { id: '15', cat: 'XXX', desc: 'Adult Pictures' },
      { id: '2_', cat: 'XXX', desc: 'Adult Real Life' },
      { id: '21', cat: 'XXX', desc: 'Adult Photobooks and Pictures' },
      { id: '22', cat: 'XXX', desc: 'Adult Videos' },
    ],
    modes: { search: ['q'], 'tv-search': ['q'] },
  },
  search: {
    paths: [{ path: '/search' }],
    inputs: {
      q: '{{ .Query.Keywords }}',
      c: '{{ .Config.cat-id }}',
      s: '{{ .Config.filter-id }}',
    },
    rows: { selector: 'tr.torrent-info' },
    fields: {
      title: { selector: 'td.tr-name a' },
      category: {
        selector: 'td:nth-child(1) a',
        attribute: 'href',
        filters: [{ name: 'split', args: ['=', -1] }],
      },
      details: { selector: 'td.tr-name a', attribute: 'href' },
      download: {
        selector: 'a[title="Magnet Link"]',
        attribute: 'href',
      },
      seeders: { selector: 'td.tr-se', optional: true },
      leechers: { selector: 'td.tr-le', optional: true },
      grabs: { selector: 'td.tr-dl', optional: true },
      date: {
        selector: 'td.date-short',
        filters: [{ name: 'dateparse', args: '2006-01-02T15:04:05Z' }],
      },
      size: {
        selector: 'td.tr-size',
        filters: [{ name: 'replace', args: ['Unknown', '0'] }],
      },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};
