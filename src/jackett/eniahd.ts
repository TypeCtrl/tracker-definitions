import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'eniahd',
  name: 'EniaHD',
  description: 'EniaHD is a RUSSIAN Semi-Private Torrent Tracker for MOVIES / TV',
  language: 'ru-RU',
  type: 'semi-private',
  encoding: 'UTF-8',
  links: ['https://eniahd.com/'],
  caps: {
    categorymappings: [
      { id: '13', cat: 'Movies/HD', desc: 'Зарубежное кино HD' },
      { id: '11', cat: 'Movies', desc: 'Зарубежное кино' },
      { id: '12', cat: 'Movies', desc: 'Наше кино' },
      { id: '2', cat: 'TV/HD', desc: 'Зарубежные сериалы HD' },
      {
        id: '17',
        cat: 'TV/HD',
        desc: 'Зарубежные сериалы HD для Apple TV',
      },
      { id: '22', cat: 'TV', desc: 'Зарубежные сериалы HEVC' },
      { id: '3', cat: 'TV', desc: 'Зарубежные сериалы' },
      { id: '14', cat: 'TV', desc: 'Русские сериалы' },
      { id: '10', cat: 'TV', desc: 'Звуковые дорожки' },
      { id: '24', cat: 'TV', desc: 'Мультфильмы' },
      { id: '25', cat: 'TV', desc: 'Мультсериалы' },
      {
        id: '7',
        cat: 'TV/Documentary',
        desc: 'Документальные (HD Video)',
      },
      { id: '21', cat: 'TV/Documentary', desc: 'Документальные' },
      {
        id: '28',
        cat: 'TV/Documentary',
        desc: 'Развлекательные телепередачи и шоу',
      },
      { id: '8', cat: 'Other', desc: 'Разное (раздачи)' },
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
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 1,
      options: { '1': 'created', '2': 'title', '7': 'size', '10': 'seeders' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 2,
      options: { '1': 'asc', '2': 'desc' },
    },
  ],
  login: {
    path: 'login.php',
    method: 'form',
    form: 'form[action="login.php"]',
    inputs: {
      login_username: '{{ .Config.username }}',
      login_password: '{{ .Config.password }}',
      redirect: '/index.php',
      autologin: 1,
    },
    error: [{ selector: 'table.error' }],
    test: {
      path: 'index.php',
      selector: 'a[href="./login.php?logout=1"]',
    },
  },
  search: {
    paths: [{ path: 'tracker.php' }],
    keywordsfilters: [
      { name: 'diacritics', args: 'replace' },
      { name: 're_replace', args: ['(?i)\\bS0*(\\d+)\\b', 'сезон $1'] },
      {
        name: 're_replace',
        args: ['(?i)\\bS0*(\\d+)E0*(\\d+)\\b', 'сезон $1 серии $2'],
      },
    ],
    inputs: {
      $raw: '{{ if .Categories }}{{ range .Categories }}f[]={{.}}&{{end}}{{else}}f[]=-1{{end}}',
      prev_allw: 0,
      prev_a: 0,
      prev_dla: 0,
      prev_dlc: 0,
      prev_dld: 0,
      prev_dlw: 0,
      prev_my: 0,
      prev_new: 0,
      prev_sd: 0,
      prev_da: 1,
      prev_dc: 0,
      prev_df: 1,
      prev_ds: 0,
      prev_tor_type: 0,
      o: '{{ .Config.sort }}',
      s: '{{ .Config.type }}',
      dc: 0,
      df: 1,
      da: 1,
      ds: 0,
      tm: -1,
      sns: -1,
      srg: -1,
      nm: '{{ .Keywords }}',
      pn: '',
      allw: 0,
    },
    rows: { selector: 'tr[id^="tor_"]:has(a[href^="./dl.php?id="])' },
    fields: {
      title: {
        selector: 'a.tLink',
        filters: [
          { name: 're_replace', args: ['[\\:\\-\\/\\|]', ' '] },
          {
            name: 're_replace',
            args: [
              '(.*)[CСcс]езон\\s+(\\d+).+[CСcс]ери[ия]\\s+(\\d+)\\s+(\\d+)\\s+из\\s+\\d+(.*)',
              '$1 S$2E$3-$4 rus $5',
            ],
          },
          {
            name: 're_replace',
            args: ['(.*)[CСcс]езон\\s+(\\d+).+[CСcс]ери[ия]\\s+(\\d+)\\s+из\\s+\\d+(.*)', '$1 S$2E$3 rus $4'],
          },
          {
            name: 're_replace',
            args: ['(.*)[CСcс]езон\\s+(\\d+)(.*)', '$1 S$2 rus $3'],
          },
          {
            name: 're_replace',
            args: [
              '(\\([А-Яа-яЁё\\W]+\\))|(^[А-Яа-яЁё\\W\\d]+\\/ )|([а-яА-ЯЁё \\-]+,+)|([а-яА-ЯЁё]+)',
              '{{ if .Config.striprussian }}{{ else }}$1$2$3$4{{ end }}',
            ],
          },
          { name: 'replace', args: ['WEB DL', 'WEBDL'] },
          { name: 'replace', args: ['WEBDLRip', 'WEBDL'] },
          { name: 'replace', args: ['HDTVRip', 'HDTV'] },
        ],
      },
      details: { selector: 'a.tLink', attribute: 'href' },
      download: {
        selector: 'a[href^="./dl.php?id="]',
        attribute: 'href',
      },
      magnet: {
        optional: true,
        selector: 'a[href^="magnet:?xt="]',
        attribute: 'href',
      },
      category: {
        selector: 'a.gen',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'f' }],
      },
      size: { selector: 'td:nth-child(6) > u' },
      seeders: { selector: 'td.seedmed > b' },
      leechers: { selector: 'td.leechmed > b' },
      grabs: { selector: 'td:nth-child(9)' },
      date: { selector: 'td:last-child > u' },
      downloadvolumefactor: { text: 1 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
