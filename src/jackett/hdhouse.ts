import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'hdhouse',
  name: 'HDhouse',
  description: 'HDhouse (HDReactor) is a RUSSIAN Public Torrent Tracker for MOVIES / TV',
  language: 'ru-RU',
  type: 'public',
  encoding: 'WINDOWS-1251',
  links: ['https://hdhouse.club/', 'https://hdreactor.club/'],
  legacylinks: ['https://hdreactor.guru/', 'https://hdreactor.net/', 'https://hdreactor.su/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies/HD', desc: 'Кино HD' },
      { id: '2', cat: 'Movies/UHD', desc: 'Кино UHD' },
      { id: '3', cat: 'XXX', desc: '18+ HD' },
      { id: '4', cat: 'Audio/Lossless', desc: 'Музыка A' },
      { id: '5', cat: 'PC/Games', desc: 'Игры' },
      { id: '6', cat: 'TV/HD', desc: 'Сериалы HD' },
      { id: '7', cat: 'TV/Anime', desc: 'Мультфильмы' },
      { id: '9', cat: 'Audio/Video', desc: 'Музыка V' },
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
    rows: { selector: 'div.movie-item' },
    fields: {
      category: {
        selector: 'div.movie-item__meta > span > a',
        case: {
          'a[href$="/1/"]': 1,
          'a[href$="/3/"]': 3,
          'a[href$="/4/"]': 4,
          'a[href$="/4k_uhd/"]': 2,
          'a[href$="/5/"]': 5,
          'a[href$="/6/"]': 6,
          'a[href$="/7/"]': 7,
          'a[href$="/9/"]': 9,
        },
      },
      title: {
        selector: 'span.movie-item__title',
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
      details: {
        selector: 'div.movie-item__desc > a',
        attribute: 'href',
      },
      download: {
        selector: 'div.movie-item__desc > a',
        attribute: 'href',
      },
      poster: { selector: 'img', attribute: 'src' },
      size: { text: '512 MB' },
      seeders: { text: 1 },
      leechers: { text: 1 },
      date: {
        selector: 'div.movie-item__meta > span:nth-child(2)',
        filters: [
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
