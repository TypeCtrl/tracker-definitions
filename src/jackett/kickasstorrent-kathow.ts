import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'kickasstorrent-kathow',
  name: 'KickAssTorrent (kat.li)',
  description: 'kat.li is a Public KickAssTorrent clone for TV / MOVIES / GENERAL',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://kat.li/'],
  legacylinks: [
    'https://kickass.gg/',
    'https://katcr.io/',
    'https://thekat.nz/',
    'https://thekat.se/',
    'https://kat.how/',
  ],
  caps: {
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
    categorymappings: [
      { id: 'movies', cat: 'Movies' },
      { id: 'tv', cat: 'TV' },
      { id: 'music', cat: 'Audio' },
      { id: 'books', cat: 'Books' },
      { id: 'Games', cat: 'Console' },
      { id: 'applications', cat: 'PC' },
      { id: 'xxx', cat: 'XXX' },
      { id: 'other', cat: 'Other' },
    ],
  },
  settings: [],
  search: {
    paths: [
      {
        path: '{{ if .Keywords }}usearch/{{ .Keywords }}/{{else}}new/{{end}}',
      },
    ],
    rows: { selector: 'table[class="data"] tr[id]' },
    fields: {
      category: {
        optional: true,
        selector: 'span[id^="cat_"] > strong > a',
        attribute: 'href',
        filters: [{ name: 'trim', args: '/' }],
      },
      title: {
        selector: 'td:nth-child(1) > div > div > a[class="cellMainLink"]',
      },
      details: {
        selector: 'td:nth-child(1) > div > div > a[class="cellMainLink"]',
        attribute: 'href',
      },
      download: {
        selector: 'td:nth-child(1) > div > a[data-download=""]',
        attribute: 'href',
        filters: [
          { name: 'querystring', args: 'url' },
          { name: 'urldecode' },
          { name: 'replace', args: [' ⭐', ''] },
        ],
      },
      size: {
        selector: 'td:nth-child(2)',
        filters: [
          { name: 'replace', args: ['N/A', '0 Bytes'] },
          { name: 're_replace', args: ['[.](?=.*[.])', ''] },
        ],
      },
      date: { selector: 'td:nth-child(3)' },
      seeders: {
        selector: 'td:nth-child(4)',
        filters: [{ name: 'replace', args: ['N/A', '0'] }],
      },
      leechers: {
        selector: 'td:nth-child(5)',
        filters: [{ name: 'replace', args: ['N/A', '0'] }],
      },
      description: { selector: 'td:nth-child(1) > div > div > span' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};
