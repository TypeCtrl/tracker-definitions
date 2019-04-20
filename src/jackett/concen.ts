import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'concen',
  name: 'ConCen',
  description: 'ConCen (Conspiracy Central) is a Public conspiracy related torrent index',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://concen.org/'],
  caps: {
    modes: { search: ['q'] },
    categorymappings: [{ id: '1', cat: 'Other' }],
  },
  settings: [],
  search: {
    paths: [
      {
        path: 'torrents/concen.org/content/ufos-extraterrestrials-and-classified-free-energy-pack',
      },
    ],
    inputs: {
      title_op: 'allwords',
      title: '{{.Keywords}}',
      title_1_op: 'not',
      title_1: '',
      seeds: 'All',
    },
    rows: { selector: 'table  > tbody > tr' },
    fields: {
      title: { selector: 'td.views-field-title a' },
      category: { text: 1 },
      details: { selector: 'td.views-field-title a', attribute: 'href' },
      download: {
        selector: 'td.views-field-field-torrent a',
        attribute: 'href',
      },
      magnet: {
        selector: 'td.views-field-name a',
        attribute: 'href',
        filters: [{ name: 'prepend', args: 'magnet:' }],
      },
      date: { selector: 'td.views-field-created' },
      size: { selector: 'td.views-field-size' },
      seeders: { selector: 'td.views-field-seeds' },
      leechers: { selector: 'td.views-field-peers' },
      grabs: { selector: 'td.views-field-completed' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};
