import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'btetree',
  name: 'BT.etree',
  description: 'BT.etree is a Public Tracker dedicated to Bootleg FLAC MUSIC',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://bt.etree.org/'],
  legacylinks: ['http://bt.etree.org/'],
  caps: {
    modes: { search: ['q'], 'music-search': ['q', 'artist'] },
    categorymappings: [{ id: 'Music', cat: 'Audio/Lossless' }],
  },
  settings: [
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'added',
      options: { added: 'created', seeders: 'seeders', name: 'title' },
    },
  ],
  search: {
    paths: [{ path: '/' }],
    inputs: {
      searchzzzz: '{{ if .Query.Artist }}{{ .Query.Artist }}{{ else }}{{ .Keywords }}{{ end }}',
      cat: 0,
      sort: '{{ .Config.sort }}',
    },
    rows: {
      selector: 'table[bgcolor="#CCCCCC"] tbody tr:has(a[href^="download.php"])',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: { text: 'Music' },
      title: { selector: 'a.details_link' },
      details: { selector: 'a.details_link', attribute: 'href' },
      download: {
        selector: 'a[href^="download.php"]',
        attribute: 'href',
      },
      files: { selector: 'td:nth-child(4)' },
      date: {
        selector: 'td:nth-child(5)',
        filters: [
          { name: 'replace', args: ['  ', ' 0'] },
          { name: 'dateparse', args: '01/02 15:04' },
        ],
      },
      size: { selector: 'td:nth-child(6)' },
      grabs: { selector: 'td:nth-child(7)' },
      seeders: { selector: 'td:nth-child(8)' },
      leechers: { selector: 'td:nth-child(9)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
