import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'digbt',
  name: 'DIGBT',
  description: 'DIGBT is a Public BitTorrent DHT search engine',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://www.digbt.org/'],
  caps: {
    modes: { search: ['q'] },
    categorymappings: [{ id: '1', cat: 'Other' }],
  },
  settings: [],
  search: {
    paths: [
      {
        path: 'search/{{if .Keywords}}{{.Keywords}}{{else}}test{{end}}?c=&s=time&u=y',
      },
      {
        path:
          'search/{{if .Keywords}}{{.Keywords}}-time-2/{{else}}test-time-2/{{end}}?c=&s=time&u=y',
      },
      {
        path:
          'search/{{if .Keywords}}{{.Keywords}}-time-3/{{else}}test-time-3/{{end}}?c=&s=time&u=y',
      },
      {
        path:
          'search/{{if .Keywords}}{{.Keywords}}-time-4/{{else}}test-time-4/{{end}}?c=&s=time&u=y',
      },
      {
        path:
          'search/{{if .Keywords}}{{.Keywords}}-time-5/{{else}}test-time-5/{{end}}?c=&s=time&u=y',
      },
    ],
    rows: { selector: 'tr td.x-item' },
    fields: {
      title: { selector: 'div a' },
      category: { text: '1' },
      details: { selector: 'div a', attribute: 'href' },
      download: {
        selector: 'div.tail a[href^="magnet:?"]',
        attribute: 'href',
      },
      magnet: {
        selector: 'div.tail a[href^="magnet:?"]',
        attribute: 'href',
      },
      date: {
        selector: 'div span.ctime',
        filters: [{ name: 'replace', args: ['yesterday', '1 day'] }, { name: 'timeago' }],
      },
      size: {
        selector: 'div.tail',
        filters: [{ name: 'regexp', args: 'Size: (.+?) Downloads:' }],
      },
      files: {
        selector: 'div.tail',
        filters: [{ name: 'regexp', args: 'Files: (.+?) Size:' }],
      },
      seeders: { text: '1' },
      leechers: { text: '1' },
      grabs: {
        selector: 'div.tail',
        filters: [{ name: 'regexp', args: 'Downloads: (.+?) Updated:' }],
      },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};
