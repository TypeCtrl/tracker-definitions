import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'pornotor',
  name: 'Pornotor',
  description: 'Pornotor is a RUSSIAN Public Torrent Tracker for 3X',
  language: 'ru-RU',
  type: 'public',
  encoding: 'WINDOWS-1251',
  links: ['http://pornotor.org/'],
  caps: {
    categorymappings: [{ id: 'XXX', cat: 'XXX', desc: 'XXX' }],
    modes: { search: ['q'], 'tv-search': ['q'], 'movie-search': ['q'] },
  },
  settings: [
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: '4',
      options: { '1': 'title', '4': 'created', '5': 'size', '7': 'seeders' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'desc',
      options: { desc: 'desc', asc: 'asc' },
    },
  ],
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      search: '{{ .Keywords }}',
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table.embedded > tbody > tr:has(a[href^="details.php?id="])',
    },
    fields: {
      category: { text: 'XXX' },
      title: { selector: 'a[href^="details.php?id="]' },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      id: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'id' }],
      },
      download: {
        text: 'download.php?id={{ .Result.id }}&name=t{{ .Result.id }}.torrent',
      },
      date: {
        selector: 'font.mnav',
        filters: [
          { name: 'replace', args: ['Добавлен: ', ''] },
          { name: 'dateparse', args: '2006-01-02 15:04:05' },
        ],
      },
      size: { selector: 'td:nth-child(4)' },
      seeders: {
        selector: 'td:nth-child(5)',
        filters: [{ name: 'split', args: ['/', 0] }],
      },
      leechers: {
        selector: 'td:nth-child(5)',
        filters: [{ name: 'split', args: ['/', 1] }],
      },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
