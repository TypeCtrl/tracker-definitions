import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'eztv',
  name: 'EZTV',
  language: 'en-US',
  encoding: 'UTF-8',
  links: ['https://eztv.ag/'],
  caps: { categorymappings: [{ id: '1', cat: 'TV' }] },
  search: {
    path: '{{if .Query.Keywords}}search/{{ .Query.Keywords}}{{else}}/{{end}}',
    rows: {
      selector: "table.forum_header_border tr[name='hover'].forum_header_border",
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: { text: 1 },
      title: { selector: 'td:nth-child(2) a' },
      details: { selector: 'td:nth-child(2) a', attribute: 'href' },
      download: {
        selector: 'td:nth-child(3) a.magnet, td:nth-child(3) a',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(4)' },
      date: {
        selector: 'td:nth-child(5)',
        filters: [{ name: 'append', args: ' ago' }],
      },
      seeders: { selector: 'td:nth-child(6)' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'cardigann',
};
