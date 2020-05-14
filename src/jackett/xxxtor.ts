import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'xxxtor',
  name: 'xxxtor',
  description: 'xxxtor is a RUSSIAN Public Torrent Tracker for 3X',
  language: 'ru-RU',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://xxxtor.com/'],
  legacylinks: ['https://xxxtor.org/', 'https://xxxtor.info/'],
  caps: {
    categorymappings: [{ id: 'XXX', cat: 'XXX', desc: 'XXX' }],
    modes: { search: ['q'], 'tv-search': ['q'], 'movie-search': ['q'] },
  },
  settings: [],
  search: {
    paths: [{ path: 'b.php' }],
    inputs: {
      search: '{{ if .Keywords }}{{ .Keywords }}{{ else }}{{ .Today.Year }}{{ end }}',
    },
    rows: {
      selector: 'table > tbody > tr.gai',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: { text: 'XXX' },
      title: { selector: 'a[href^="/torrent/"]' },
      details: { selector: 'a[href^="/torrent/"]', attribute: 'href' },
      download: {
        selector: 'a[href^="/download/"]',
        attribute: 'href',
      },
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
          { name: 'dateparse', args: '02 Jan 06' },
        ],
      },
      size: { selector: 'td:nth-of-type(3)' },
      seeders: { selector: 'td:last-of-type span:first-of-type' },
      leechers: { selector: 'td:last-of-type span:last-of-type' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
