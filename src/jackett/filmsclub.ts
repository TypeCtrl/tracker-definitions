import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'filmsclub',
  name: 'FilmsClub',
  description: 'FilmsClub is a RUSSIAN Semi-Private Torrent Tracker for MOVIES / TV',
  language: 'ru-RU',
  type: 'semi-private',
  encoding: 'UTF-8',
  links: ['https://films4.club/'],
  legacylinks: ['https://films.club/'],
  certificates: ['0e622f1944b4c12c0d9930f30f5720e7c18011b8'],
  caps: {
    categorymappings: [
      {
        id: '1',
        cat: 'Movies',
        desc: 'Зарубежное кино (Foreign cinema)',
      },
      {
        id: '2',
        cat: 'Movies',
        desc: 'Российское кино (Russian cinema)',
      },
      { id: '3', cat: 'TV', desc: 'Сериалы (Series)' },
      {
        id: '4',
        cat: 'TV/Documentary',
        desc: 'Документальное кино (Docs)',
      },
      { id: '5', cat: 'TV/Anime', desc: 'Аниме (Anime)' },
      { id: '6', cat: 'TV', desc: 'Мультфильмы (Cartoons)' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'striprussian',
      type: 'checkbox',
      label: 'Strip Russian Letters',
      default: false,
    },
    {
      name: 'stripyear',
      type: 'checkbox',
      label: 'Strip the Year from the Title',
      default: false,
    },
    {
      name: 'addtvshows',
      type: 'checkbox',
      label: 'Add (TVShows) to TV titles',
      default: false,
    },
    {
      name: 'info_search',
      type: 'info',
      label: 'Searching with Season / Episode (S01E01)',
      default:
        'The web site does support season/episode searching as they are not part of the title. To allow some results for Sonarr, these are stripped from the keywords.',
    },
  ],
  login: {
    path: '/',
    method: 'form',
    form: 'form#enterForm',
    submitpath: 'login/',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'div.error' }],
    test: { path: '/', selector: 'div.user-login' },
  },
  search: {
    paths: [{ path: 'torrent/list/' }],
    keywordsfilters: [
      { name: 're_replace', args: ['(?i)\\bS0*(\\d+)\\b', ''] },
      { name: 're_replace', args: ['(?i)\\bS0*(\\d+)E0*(\\d+)\\b', ''] },
    ],
    inputs: {
      $raw: '{{ if .Categories }}{{ range .Categories }}category={{.}}&{{end}}{{else}}{{end}}',
      f: 0,
      page_size: 100,
      name: '{{ .Keywords }}',
      description: '',
      year: '',
    },
    rows: { selector: 'table.torrents-table > tbody > tr' },
    fields: {
      category: {
        selector: 'td.category',
        case: {
          'div:contains("Зарубежное")': 1,
          'div:contains("Российское")': 2,
          'div:contains("Сериалы")': 3,
          'div:contains("Документальное ")': 4,
          'div:contains("Аниме")': 5,
          'div:contains("Мультфильмы")': 6,
        },
      },
      title_with_year: {
        selector: 'a[href^="/torrent/"]',
        filters: [
          { name: 're_replace', args: ['[\\:\\-\\/\\|,\\s]', ' '] },
          {
            name: 're_replace',
            args: ['(.*)(\\([1|2][0-9]{3}\\))(.*)([CСcс]езон.*)', '$1$2$4$3'],
          },
          {
            name: 're_replace',
            args: [
              '(.*)[CСcс]езон +(\\d+).+[CСcс]ери[ия] +(\\d+) +(\\d+) +из +\\d+(.*)',
              '$1 S$2E$3-$4 rus {{ if .Config.addtvshows }}(TVShows) {{else}}{{end}}$5',
            ],
          },
          {
            name: 're_replace',
            args: ['(.*)[CСcс]езон +(\\d+)(.*)', '$1 S$2 rus $3'],
          },
          {
            name: 're_replace',
            args: [
              '(\\([А-Яа-яЁё\\W]+\\))|(^[А-Яа-яЁё\\W\\d]+\\/ )|([а-яА-ЯЁё \\-]+,+)|([а-яА-ЯЁё]+)',
              '{{ if .Config.striprussian }}{{ else }}$1$2$3$4{{ end }}',
            ],
          },
          { name: 'replace', args: [' Rip', 'Rip'] },
          { name: 'replace', args: ['Blu Ray', 'Bluray'] },
          { name: 'replace', args: ['WEB DL', 'WEBDL'] },
          { name: 'replace', args: ['WEBDLRip', 'WEBDL'] },
          { name: 'replace', args: ['WEBRip', 'WEBDL'] },
          { name: 'replace', args: ['HDTVRip', 'HDTV'] },
        ],
      },
      title_without_year: {
        text: '{{ re_replace .Result.title_with_year "\\([1|2][0-9]{3}\\)" "" }}',
      },
      title: {
        text:
          '{{ if .Config.stripyear }}{{ .Result.title_without_year }}{{else}}{{ .Result.title_with_year }}{{end}}',
      },
      details: { selector: 'a[href^="/torrent/"]', attribute: 'href' },
      download: {
        selector: 'a[href$="/download/"]',
        attribute: 'href',
      },
      banner: { selector: 'td.image div img', attribute: 'src' },
      date: {
        selector: 'div.added',
        filters: [
          { name: 'regexp', args: 'Добавлено:(.+?)$' },
          { name: 'dateparse', args: '02.01.2006, 15:04' },
        ],
      },
      size: {
        selector: 'td.size',
        filters: [
          { name: 'replace', args: [',', '.'] },
          { name: 'replace', args: ['ТБ', 'TB'] },
          { name: 'replace', args: ['ГБ', 'GB'] },
          { name: 'replace', args: ['МБ', 'MB'] },
          { name: 'replace', args: ['КБ', 'KB'] },
        ],
      },
      seeders: { selector: 'td.peers span.up' },
      leechers: { selector: 'td.peers span.down' },
      grabs: { selector: 'td.stat' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
