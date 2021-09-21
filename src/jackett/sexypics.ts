import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'sexypics',
  name: 'Sexy-Pics',
  description: 'Sexy-Pics is a Public Magnet Links site for 3X MP4',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['https://www.sexy-pics.us/'],
  caps: {
    modes: { search: ['q'] },
    categorymappings: [{ id: 'XXX', cat: 'XXX' }],
  },
  settings: [
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'age',
      options: { age: 'created', se: 'seeders', size: 'size' },
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
    headers: {
      Accept: ['text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8'],
    },
    keywordsfilters: [{ name: 're_replace', args: [' ', '-'] }, { name: 'tolower' }],
    paths: [
      {
        path: '{{ if .Keywords }}{{ re_replace .Keywords "(.).*" "$1" }}/{{ .Keywords }}/{{ else }}browse/all/{{ end }}{{ .Config.sort }}/{{ .Config.type }}/',
      },
      {
        path: '{{ if .Keywords }}{{ re_replace .Keywords "(.).*" "$1" }}/{{ .Keywords }}/{{ else }}browse/all/{{ end }}{{ .Config.sort }}/{{ .Config.type }}/2/',
      },
    ],
    rows: { selector: 'tr:has(td.m)' },
    fields: {
      category: { text: 'XXX' },
      title: { selector: 'td.n a', attribute: 'title' },
      details: { selector: 'td.n a', attribute: 'href' },
      magnet: { selector: 'td.m a', attribute: 'href' },
      date: {
        selector: 'td:nth-child(3)',
        filters: [{ name: 'timeago' }],
      },
      files: { selector: 'td:nth-child(5)' },
      size: { selector: 'td:nth-child(6)' },
      seeders: { selector: 'td.s' },
      leechers: { selector: 'td.l' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
