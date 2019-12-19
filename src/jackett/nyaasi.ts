import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'nyaasi',
  name: 'Nyaa.si',
  description:
    'Nyaa is a Public torrent site focused on Eastern Asian media including anime, manga, literature and music',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://nyaa.si/'],
  settings: [
    {
      name: 'cat-id',
      type: 'select',
      label: 'Category',
      default: '0_0',
      options: {
        '0': 'All categories',
        '10': 'Anime',
        '11': 'Anime - Anime Music Video',
        '12': 'Anime - English-translated',
        '13': 'Anime - Non-English-translated',
        '14': 'Anime - Raw',
        '20': 'Audio',
        '21': 'Audio - Lossless',
        '22': 'Audio - Lossy',
        '30': 'Literature',
        '31': 'Literature - English-translated',
        '32': 'Literature - Non-English-translated',
        '33': 'Literature - Lossy',
        '40': 'Live Action',
        '41': 'Live Action - English',
        '42': 'Live Action - Idol/PV',
        '43': 'Live Action - Non-English',
        '44': 'Live Action - Raw',
        '50': 'Pictures',
        '51': 'Pictures  - Graphics',
        '52': 'Pictures  - Photos',
        '60': 'Software',
        '61': 'Software - Applications',
        '62': 'Software - Games',
      },
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'id',
      options: { id: 'created', seeders: 'seeders', size: 'size' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'desc',
      options: { desc: 'desc', asc: 'asc' },
    },
  ],
  caps: {
    categorymappings: [
      { id: '10', cat: 'TV/Anime', desc: 'Anime' },
      { id: '11', cat: 'TV/Anime', desc: 'Anime music videos' },
      { id: '12', cat: 'TV/Anime', desc: 'English subtitled animes' },
      { id: '13', cat: 'TV/Anime', desc: 'Non-english subtitled animes' },
      { id: '14', cat: 'TV/Anime', desc: 'Raw animes' },
      { id: '10', cat: 'Movies/Other', desc: 'Anime' },
      { id: '11', cat: 'Movies/Other', desc: 'Anime music videos' },
      { id: '12', cat: 'Movies/Other', desc: 'English subtitled animes' },
      {
        id: '13',
        cat: 'Movies/Other',
        desc: 'Non-english subtitled animes',
      },
      { id: '14', cat: 'Movies/Other', desc: 'Raw animes' },
      { id: '20', cat: 'Audio', desc: 'Audio' },
      { id: '21', cat: 'Audio', desc: 'Lossless audio' },
      { id: '22', cat: 'Audio', desc: 'Lossy audio' },
      { id: '30', cat: 'Books', desc: 'Literature' },
      { id: '31', cat: 'Books', desc: 'Literature english translated' },
      {
        id: '32',
        cat: 'Books',
        desc: 'Literature non-english translated',
      },
      { id: '33', cat: 'Books', desc: 'Raw literature' },
      { id: '40', cat: 'TV', desc: 'Live Action' },
      { id: '41', cat: 'TV', desc: 'Live Action - English' },
      { id: '42', cat: 'TV', desc: 'Live Action - Idol/PV' },
      { id: '43', cat: 'TV', desc: 'Live Action - Non-English' },
      { id: '44', cat: 'TV', desc: 'Live Action - Raw' },
      { id: '50', cat: 'Other', desc: 'Pictures' },
      { id: '51', cat: 'Other', desc: 'Pictures  - Graphics' },
      { id: '52', cat: 'Other', desc: 'Pictures  - Photos' },
      { id: '60', cat: 'PC', desc: 'Software' },
      { id: '61', cat: 'PC/ISO', desc: 'Applications' },
      { id: '62', cat: 'PC/Games', desc: 'Games' },
    ],
    modes: { search: ['q'], 'tv-search': ['q'] },
  },
  search: {
    paths: [{ path: '/' }],
    inputs: {
      q: '{{ .Keywords }}',
      f: 0,
      c: '{{ .Config.cat-id }}',
      s: '{{ .Config.sort }}',
      o: '{{ .Config.type }}',
    },
    rows: { selector: 'tr.default,tr.danger,tr.success' },
    fields: {
      category: {
        selector: 'td:nth-child(1) a',
        attribute: 'href',
        filters: [{ name: 'split', args: ['=', -1] }],
      },
      title: {
        selector: 'td:nth-child(2) a:last-of-type:contains("[PuyaSubs!] ")',
        optional: true,
        filters: [
          { name: 'replace', args: ['[PuyaSubs!] ', ''] },
          { name: 'append', args: ' Spanish' },
        ],
      },
      details: {
        selector: 'td:nth-child(2) a:last-of-type',
        attribute: 'href',
      },
      download: {
        selector: 'td:nth-child(3) a[href$=".torrent"]',
        attribute: 'href',
      },
      magnet: {
        selector: 'td:nth-child(3) a[href^="magnet:?"]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(4)' },
      date: {
        selector: 'td:nth-child(5)',
        filters: [
          { name: 'append', args: ' -00' },
          { name: 'dateparse', args: '2006-01-02 15:04 -07' },
        ],
      },
      seeders: {
        selector: 'td:nth-child(6):not(:empty)',
        optional: true,
      },
      leechers: {
        selector: 'td:nth-child(7):not(:empty)',
        optional: true,
      },
      grabs: { selector: 'td:nth-child(8):not(:empty)', optional: true },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
