import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'vsthouse',
  name: 'VSTHouse',
  description: 'VSTHouse is a Public Russian site for AUDIO apps, plugins and samples',
  language: 'ru-RU',
  type: 'public',
  encoding: 'UTF-8',
  links: ['http://vsthouse.ru/'],
  caps: {
    modes: { search: ['q'], 'music-search': ['q'] },
    categorymappings: [{ id: 'Audio', cat: 'Audio' }],
  },
  settings: [],
  download: { selector: 'a[title^="Скачать:"]', attribute: 'href' },
  search: {
    paths: [{ path: 'search' }],
    inputs: {
      q: '{{ if .Keywords }}{{ .Keywords }}{{ else }}{{ .Today.Year }}{{ end }}',
      m: 'load',
      t: 0,
    },
    rows: {
      selector: 'table.eBlock:has(div.eDetails:contains(":"))',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: { text: 'Audio' },
      title: { selector: 'div.eTitle a' },
      details: { selector: 'div.eTitle a', attribute: 'href' },
      download: { selector: 'div.eTitle a', attribute: 'href' },
      description: { selector: 'div.eDetails' },
      date: {
        selector: 'div.eDetails',
        remove: 'a, span',
        filters: [
          { name: 'replace', args: ['- ', ''] },
          { name: 'append', args: ' +03:00' },
          { name: 'dateparse', args: '2006-01-02 15:04:05 -07:00' },
        ],
      },
      size: { text: '512 MB' },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
