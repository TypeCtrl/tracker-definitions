import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'newstudio',
  name: 'Newstudio',
  description: 'Newstudio is a RUSSIAN Public site for TV',
  language: 'ru-RU',
  type: 'public',
  encoding: 'UTF-8',
  links: ['http://newstudio.tv/'],
  caps: {
    categorymappings: [{ id: '6', cat: 'TV', desc: 'TV series' }],
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
  },
  settings: [
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: '1',
      options: { '1': 'created', '2': 'title', '7': 'size', '10': 'seeders' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: '2',
      options: { '1': 'asc', '2': 'desc' },
    },
  ],
  search: {
    paths: [{ path: 'tracker.php' }, { path: 'tracker.php', inputs: { start: 50 } }],
    inputs: {
      nm: '{{ .Keywords }}',
      o: '{{ .Config.sort }}',
      s: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table.well > tbody > tr:has(a[href^="./viewtopic.php?t="])',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      title: {
        selector: 'a[href^="./viewtopic.php?t="] > b',
        filters: [
          {
            name: 're_replace',
            args: [
              '.+Сезон\\s+(\\d+)(?:.+Серия\\s+(\\d+))*[\\s\\S]*\\/\\s+(.+)\\s+\\(\\d+\\)\\s+(\\S*)\\s*(\\w*\\d*).*',
              '$3 - S$1E$2 - rus $5 $4 newstudio',
            ],
          },
          { name: 're_replace', args: ['\\bS(\\d{1})\\b', 'S0$1'] },
          { name: 're_replace', args: ['\\bS(\\d{1})', 'S0$1'] },
          {
            name: 're_replace',
            args: ['\\bS(\\d+)E(\\d{1})\\b', 'S$1E0$2'],
          },
          { name: 'replace', args: ['WEBDLRip', 'WEBDL'] },
          { name: 'replace', args: ['HDTVRip', 'HDTV'] },
          { name: 'replace', args: ['E -', 'E01-99 -'] },
        ],
      },
      details: {
        selector: 'a[href^="./viewtopic.php?t="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="./download.php?id="]',
        attribute: 'href',
      },
      banner: { selector: 'td:nth-child(3) > a > img', attribute: 'src' },
      size: { selector: 'td:nth-child(5) > a' },
      category: { text: 6 },
      date: {
        selector: 'td:nth-child(6)',
        filters: [
          { name: 're_replace', args: ['(Сегодня|Вчера|\\s|,|-)+', ' '] },
          { name: 're_replace', args: ['(Today|Yesterday|\\s|,|-)+', ' '] },
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
          { name: 'append', args: ':00 +05:00' },
          { name: 'dateparse', args: '2 Jan 06 15:04:05 -07:00' },
        ],
      },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: {
        case: { 'img[src="images/tor_gold.gif"]': 0, '*': 1 },
      },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
