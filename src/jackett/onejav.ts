import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'onejav',
  name: 'OneJAV',
  description: 'OneJAV is a Public tracker for Asian 3X (JAV)',
  language: 'en-EN',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://onejav.com/'],
  caps: {
    modes: { search: ['q'] },
    categorymappings: [{ id: 'XXX', cat: 'XXX' }],
  },
  settings: [],
  search: {
    paths: [
      { path: '{{ if .Keywords }}search/{{ .Keywords }}{{else}}new{{end}}' },
      {
        path: '{{ if .Keywords }}search/{{ .Keywords }}{{else}}new{{end}}?page=2',
      },
    ],
    rows: { selector: 'div.mb-3' },
    fields: {
      category: { text: 'XXX' },
      title: { selector: 'a[href^="/torrent/"]' },
      details: { selector: 'a[href^="/torrent/"]', attribute: 'href' },
      download: {
        selector: 'a[href*="/download/"]',
        attribute: 'href',
      },
      banner: { selector: 'img', attribute: 'src' },
      actress: {
        selector: 'a[href^="/actress/"]',
        optional: true,
        filters: [{ name: 'prepend', args: 'Actress: ' }],
      },
      tags: {
        selector: 'div.tags',
        filters: [{ name: 'prepend', args: 'Tags: ' }],
      },
      descr: { selector: 'p.level', optional: true },
      description: {
        text: '{{ .Result.descr }}</br>{{ .Result.actress }}</br>{{ .Result.tags }}',
      },
      date: {
        selector: 'p.is-6 > a',
        attribute: 'href',
        filters: [{ name: 'dateparse', args: '/2006/01/02' }],
      },
      size: { selector: 'span.is-size-6' },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
