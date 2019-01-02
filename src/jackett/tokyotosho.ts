import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'tokyotosho',
  name: 'Tokyo Toshokan',
  description: 'A BitTorrent Library for Japanese Media',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://www.tokyotosho.info/'],
  settings: [{ name: 'type-id', type: 'text', label: 'Type Id' }],
  caps: {
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
    categorymappings: [
      { id: '1', cat: 'TV/Anime' },
      { id: '2', cat: 'Audio' },
      { id: '3', cat: 'Books' },
      { id: '4', cat: 'XXX' },
      { id: '5', cat: 'Other' },
      { id: '7', cat: 'TV/Anime' },
      { id: '8', cat: 'TV/Anime' },
      { id: '9', cat: 'TV/Anime' },
      { id: '10', cat: 'TV/Anime' },
      { id: '11', cat: 'TV/Anime' },
      { id: '12', cat: 'XXX' },
      { id: '13', cat: 'XXX' },
      { id: '14', cat: 'XXX' },
      { id: '15', cat: 'XXX' },
    ],
  },
  search: {
    paths: [{ path: '{{if .Query.Keywords }}search.php{{else}}index.php{{end}}' }],
    inputs: {
      terms: '{{ .Query.Keywords }}',
      type: '{{ .Config.type-id }}',
      cat: '{{ .Config.type-id }}',
    },
    rows: { selector: 'table.listing tr.category_0', after: 1 },
    fields: {
      category: {
        selector: 'td:nth-child(1) > a',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      title: { selector: 'td:nth-child(2) > a:nth-child(2)' },
      details: { selector: 'td:nth-child(3) > a', attribute: 'href' },
      download: {
        selector: 'td:nth-child(2) > a:nth-child(2)',
        attribute: 'href',
      },
      size: {
        selector: 'td:nth-child(4)',
        filters: [{ name: 'split', args: ['|', 1] }, { name: 'regexp', args: 'Size: (.+?) ?$' }],
      },
      date: {
        selector: 'td:nth-child(4)',
        filters: [
          { name: 'split', args: ['|', 2] },
          { name: 'regexp', args: 'Date: (.+?) ?$' },
          { name: 'replace', args: ['UTC', '-00'] },
          { name: 'dateparse', args: '2006-01-02 15:04 -07' },
        ],
      },
      seeders: { selector: 'td:nth-child(5) > span:nth-child(1)' },
      leechers: { selector: 'td:nth-child(5) > span:nth-child(2)' },
    },
  },
};
