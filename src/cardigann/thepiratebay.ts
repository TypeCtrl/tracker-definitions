import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'thepiratebay',
  name: 'The Pirate Bay',
  language: 'en-US',
  encoding: 'UTF-8',
  links: ['https://thepiratebay.org/', 'https://thepiratesbay.pw/', 'https://tproxy.pro/'],
  caps: {
    categorymappings: [
      { id: '201', cat: 'Movies' },
      { id: '202', cat: 'Movies/DVD' },
      { id: '203', cat: 'Audio/Video' },
      { id: '204', cat: 'Movies/Other' },
      { id: '205', cat: 'TV' },
      { id: '206', cat: 'TV/Other' },
      { id: '207', cat: 'Movies/HD' },
      { id: '208', cat: 'TV/HD' },
      { id: '209', cat: 'Movies/3D' },
      { id: '299', cat: 'Movies/Other' },
    ],
  },
  search: {
    rows: { selector: '#searchResult tbody tr:has(td.vertTh)' },
    fields: {
      category: {
        selector: 'td:nth-child(1) a:last-child',
        attribute: 'href',
        filters: [{ name: 'split', args: ['/', -1] }],
      },
      title: { selector: '.detLink' },
      details: { selector: '.detLink', attribute: 'href' },
      download: {
        selector: 'td:nth-child(2) a[title^="Download"]',
        attribute: 'href',
      },
      size: {
        selector: 'td:nth-child(2) font.detDesc',
        filters: [{ name: 'regexp', args: 'Size (.+?),' }],
      },
      date: {
        selector: 'td:nth-child(2) font.detDesc',
        filters: [{ name: 'regexp', args: 'Uploaded (.+?),' }],
      },
      seeders: { selector: 'td:nth-child(3)' },
      leechers: { selector: 'td:nth-child(4)' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
    paths: [
      {
        path: '{{if .Query.Keywords}}search/{{ .Query.Keywords}}/0/99/0{{else}}/recent{{end}}',
      },
    ],
  },
  source: 'cardigann',
};
