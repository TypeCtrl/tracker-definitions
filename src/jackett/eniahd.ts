import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'eniahd',
  name: 'EniaHD',
  description: 'EniaHD is a RUSSIAN Semi-Private Torrent Tracker for MOVIES / TV',
  language: 'ru-RU',
  type: 'semi-private',
  encoding: 'UTF-8',
  links: ['https://eniatv.com/'],
  legacylinks: ['https://eniahd.com/'],
  caps: {
    categorymappings: [
      { id: '13', cat: 'Movies/HD', desc: 'Зарубежное кино HD' },
      { id: '11', cat: 'Movies', desc: 'Зарубежное кино' },
      { id: '12', cat: 'Movies', desc: 'Наше кино' },
      { id: '2', cat: 'TV/HD', desc: 'Зарубежные сериалы HD' },
      { id: '65', cat: 'TV/HD', desc: 'Майя МС / Майянцы / Mayans M.C.' },
      { id: '52', cat: 'TV/HD', desc: 'Блудный сын / Prodigal Son' },
      { id: '49', cat: 'TV/HD', desc: 'Пенниуорт / Pennyworth' },
      { id: '62', cat: 'TV/HD', desc: 'Черный список / The Blacklist' },
      {
        id: '64',
        cat: 'TV/HD',
        desc: 'Игра престолов / Game of Thrones',
      },
      {
        id: '59',
        cat: 'TV/HD',
        desc: 'Американская история ужасов / American Horror Story',
      },
      {
        id: '60',
        cat: 'TV/HD',
        desc: 'Хороший доктор / The Good Doctor',
      },
      { id: '54', cat: 'TV/HD', desc: 'Рэй Донован / Ray Donovan' },
      {
        id: '55',
        cat: 'TV/HD',
        desc: 'Сверхъестественное / Supernatural',
      },
      { id: '56', cat: 'TV/HD', desc: 'Сквозь снег / Snowpiercer' },
      {
        id: '57',
        cat: 'TV/HD',
        desc: 'Теория большого взрыва / The Big Bang Theory',
      },
      { id: '58', cat: 'TV/HD', desc: 'Миллиарды / Billions' },
      { id: '53', cat: 'TV/HD', desc: 'Родина / Homeland' },
      { id: '51', cat: 'TV/HD', desc: 'Новобранец / The Rookie' },
      { id: '50', cat: 'TV/HD', desc: 'Это мы / This Is Us' },
      { id: '48', cat: 'TV/HD', desc: 'Бэтвумен / Batwoman' },
      { id: '32', cat: 'TV/HD', desc: 'Кости / Bones' },
      {
        id: '31',
        cat: 'TV/HD',
        desc: 'Американские боги / American Gods',
      },
      {
        id: '30',
        cat: 'TV/HD',
        desc: 'Агенты Щ.И.Т. / Agents of S.H.I.E.L.D.',
      },
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
      {
        id: '47',
        cat: 'TV/HD',
        desc: "Рассказ служанки / The Handmaid's Tale",
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
    keywordsfilters: [{ name: 're_replace', args: ['(\\w+)', ' +$1'] }],
    inputs: {
      $raw: '{{ if .Categories }}{{ range .Categories }}f[]={{.}}&{{end}}{{ else }}f[]=-1{{ end }}',
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
