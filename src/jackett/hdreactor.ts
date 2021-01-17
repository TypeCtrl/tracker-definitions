import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'hdreactor',
  name: 'HDReactor',
  description: 'HDReactor is a RUSSIAN Public Torrent Tracker for MOVIES / TV',
  language: 'ru-RU',
  type: 'public',
  encoding: 'WINDOWS-1251',
  links: ['https://hdreactor.club/', 'https://hdreactor.su/'],
  legacylinks: ['https://hdreactor.guru/', 'https://hdreactor.net/'],
  caps: {
    categorymappings: [
      { id: '2001', cat: 'Movies/HD', desc: 'Кино HD' },
      { id: '5006', cat: 'Movies/UHD', desc: 'Кино 4K' },
      { id: '2007', cat: 'Movies/Other', desc: 'Анимация' },
      { id: '2006', cat: 'TV/HD', desc: 'Сериалы' },
      { id: '5005', cat: 'TV/Sport', desc: 'Спорт' },
      { id: '2004', cat: 'Audio/Lossless', desc: 'Музыка' },
      { id: '2005', cat: 'PC/Games', desc: 'Игры' },
      { id: '2003', cat: 'XXX', desc: '18+' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
    },
  },
  settings: [
    {
      name: 'striprussian',
      type: 'checkbox',
      label: 'Strip Russian Letters',
      default: false,
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'date',
      options: { date: 'created', title: 'title' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'desc',
      options: { desc: 'desc', asc: 'asc' },
    },
  ],
  download: { selector: 'a[href^="magnet:?xt="]', attribute: 'href' },
  search: {
    paths: [{ path: 'index.php' }],
    keywordsfilters: [
      { name: 'diacritics', args: 'replace' },
      { name: 're_replace', args: ['(?i)\\bS0*(\\d+)\\b', ' Сезон $1'] },
      {
        name: 're_replace',
        args: ['(?i)\\bS0*(\\d+)E0*(\\d+)\\b', ' Сезон $1  Серии $2'],
      },
    ],
    inputs: {
      $raw: '{{ range .Categories }}catlist[]={{.}}&{{end}}',
      do: 'search',
      subaction: 'search',
      showposts: 1,
      titleonly: 3,
      story: '{{ if .Keywords }}{{ .Keywords }}{{ else }}{{ .Today.Year }}{{ end }}',
      sortby: '{{ .Config.sort }}',
      resorder: '{{ .Config.type }}',
    },
    rows: { selector: 'div.news:contains("Категория:")' },
    fields: {
      category: {
        selector: 'div.news-content > a',
        case: {
          'a[href$="/4k_uhd/"]': 5006,
          'a[href$="/1/"]': 2001,
          'a[href$="/6/"]': 2006,
          'a[href$="/7/"]': 2007,
          'a[href$="/4/"]': 2004,
          'a[href$="/5/"]': 2005,
          'a[href$="/3/"]': 2003,
          'a[href$="/sport-hd/"]': 5005,
        },
      },
      title: {
        selector: 'h1 > a',
        filters: [
          { name: 're_replace', args: ['[\\.\\,\\:\\-\\/\\|\\[\\]]', ' '] },
          {
            name: 're_replace',
            args: [
              '(.*)[CСcс]езон\\s*(\\d+)\\s*[CСcс]ери[ия]\\s*(\\d+)\\s*(\\d+)\\s*из\\s*\\d+(.*)',
              '$1 S$2E$3-$4 rus $5',
            ],
          },
          {
            name: 're_replace',
            args: ['(.*)[CСcс]езон\\s*(\\d+)\\s*[CСcс]ери[ия]\\s*(\\d+)\\s*(\\d+)\\s*(.*)', '$1 S$2E$3-$4 rus $5'],
          },
          {
            name: 're_replace',
            args: ['(.*)[CСcс]езон\\s*(\\d+)\\s*[CСcс]ери[ия]\\s*(\\d+)\\s*из\\s*\\d+(.*)', '$1 S$2E$3 rus $4'],
          },
          {
            name: 're_replace',
            args: ['(.*)[CСcс]езон\\s*(\\d+)(.*)', '$1 S$2 rus $3'],
          },
          {
            name: 're_replace',
            args: ['(.*)[CСcс]]ери[ия]\\s*(\\d+)(.*)', '$1 E$2 rus $3'],
          },
          {
            name: 're_replace',
            args: [
              '(\\([А-Яа-яЁё\\W]+\\))|(^[А-Яа-яЁё\\W\\d]+\\/ )|([а-яА-ЯЁё \\-]+,+)|([а-яА-ЯЁё]+)',
              '{{ if .Config.striprussian }}{{ else }}$1$2$3$4{{ end }}',
            ],
          },
          { name: 'replace', args: ['WEBRip', 'WEBDL'] },
          { name: 'replace', args: ['WEB DL', 'WEBDL'] },
          { name: 'replace', args: ['WEBDLRip', 'WEBDL'] },
          { name: 'replace', args: ['HDTVRip', 'HDTV'] },
        ],
      },
      details: { selector: 'h1 > a', attribute: 'href' },
      download: { selector: 'h1 > a', attribute: 'href' },
      size: { text: '512 MB' },
      seeders: { text: 1 },
      leechers: { text: 1 },
      date: {
        selector: 'div.news-content',
        filters: [
          {
            name: 'regexp',
            args: '(\\d{1,2}\\-\\d{2}\\-\\d{4}\\, \\d{1,2}\\:\\d{2})',
          },
          { name: 'replace', args: [',', ''] },
          { name: 'append', args: ' +03:00' },
          { name: 'dateparse', args: '2-01-2006 15:04 -07:00' },
        ],
      },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
