import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'trupornolabs',
  name: 'truPornolabs',
  description: 'truPornolabs is a RUSSIAN Public tracker for 3X',
  language: 'ru-RU',
  type: 'public',
  encoding: 'UTF-8',
  links: ['http://trupornolabs.org/'],
  caps: {
    modes: { search: ['q'] },
    categorymappings: [{ id: 'XXX', cat: 'XXX' }],
  },
  settings: [],
  search: {
    paths: [
      {
        path: '{{ if .Keywords }}search/{{ .Keywords }}{{ else }}browse/0/0/0/0{{ end }}',
      },
    ],
    rows: {
      selector:
        'tr.gai:has(a[href^="/torrent/"]):has(td:nth-of-type(3):contains("GB")), tr.gai:has(a[href^="/torrent/"]):has(td:nth-of-type(3):contains("MB"))',
    },
    fields: {
      category: { text: 'XXX' },
      title: { selector: 'a[href^="/torrent/"]' },
      details: { selector: 'a[href^="/torrent/"]', attribute: 'href' },
      download: { selector: 'a.downgif', attribute: 'href' },
      magnet: { selector: 'a[href^="magnet:?xt="]', attribute: 'href' },
      date: {
        selector: 'td:first-of-type',
        filters: [
          { name: 'replace', args: ['Янв', 'Jan'] },
          { name: 'replace', args: ['Фев', 'Feb'] },
          { name: 'replace', args: ['Мар', 'Mar'] },
          { name: 'replace', args: ['Апр', 'Apr'] },
          { name: 'replace', args: ['Май', 'May'] },
          { name: 'replace', args: ['Июн', 'Jun'] },
          { name: 'replace', args: ['Июл', 'Jul'] },
          { name: 'replace', args: ['Авг', 'Aug'] },
          { name: 'replace', args: ['Сен', 'Sep'] },
          { name: 'replace', args: ['Окт', 'Oct'] },
          { name: 'replace', args: ['Ноя', 'Nov'] },
          { name: 'replace', args: ['Дек', 'Dec'] },
          { name: 'append', args: ' +03:00' },
          { name: 'dateparse', args: '02 Jan 06 -07:00' },
        ],
      },
      size: { selector: 'td:nth-of-type(3)' },
      seeders: { selector: 'span.green' },
      leechers: { selector: 'span.red' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
