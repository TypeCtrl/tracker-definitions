import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'bigfangroup',
  name: 'BigFANGroup',
  description: 'BigFANGroup is a RUSSIAN Public Torrent Tracker for MOVIES / TV',
  language: 'ru-RU',
  type: 'public',
  encoding: 'WINDOWS-1251',
  links: ['https://bigfangroup.org/', 'https://www.freebfg.org/'],
  caps: {
    categorymappings: [
      { id: '13', cat: 'Movies', desc: 'Боевик' },
      { id: '18', cat: 'Movies', desc: 'Катастрофа' },
      { id: '19', cat: 'Movies', desc: 'Мелодрама' },
      { id: '21', cat: 'Movies', desc: 'Драма' },
      { id: '22', cat: 'Movies', desc: 'Триллер' },
      { id: '23', cat: 'Movies', desc: 'Фантастика' },
      { id: '24', cat: 'Movies', desc: 'Комедия' },
      { id: '26', cat: 'Movies', desc: 'Ужасы' },
      { id: '27', cat: 'Movies', desc: 'Приключения' },
      { id: '28', cat: 'Movies', desc: 'Исторический' },
      { id: '29', cat: 'Movies/Foreign', desc: 'Наше кино' },
      { id: '30', cat: 'Movies', desc: 'Фэнтази' },
      { id: '31', cat: 'Movies', desc: 'Мистика' },
      { id: '33', cat: 'Movies', desc: 'Военный' },
      { id: '36', cat: 'Movies', desc: 'Криминал' },
      { id: '39', cat: 'Movies', desc: 'Детектив' },
      { id: '47', cat: 'Movies', desc: 'Сказки' },
      { id: '48', cat: 'Movies', desc: 'Вестерн' },
      { id: '52', cat: 'Movies', desc: 'Биография' },
      { id: '53', cat: 'Movies', desc: 'Классика' },
      { id: '14', cat: 'Movies/HD', desc: 'HDTV' },
      { id: '15', cat: 'Movies/DVD', desc: 'DVD' },
      { id: '51', cat: 'Movies/3D', desc: '3D' },
      { id: '20', cat: 'Movies', desc: 'Мультфильм' },
      { id: '35', cat: 'Audio/Audiobook', desc: 'Аудио-книги' },
      { id: '43', cat: 'Audio/Foreign', desc: 'Русская музыка' },
      { id: '44', cat: 'Audio', desc: 'Зарубежная музыка' },
      { id: '45', cat: 'Audio/Video', desc: 'Видеоклипы' },
      { id: '46', cat: 'Audio', desc: 'Муз. сборники' },
      { id: '54', cat: 'Audio', desc: 'Классическая музыка' },
      { id: '55', cat: 'Audio', desc: 'Саундтрек' },
      { id: '11', cat: 'TV', desc: 'Сериалы' },
      { id: '25', cat: 'TV', desc: 'ТВ-шоу' },
      { id: '37', cat: 'TV/Sport', desc: 'Спорт' },
      { id: '50', cat: 'TV', desc: 'Новости' },
      { id: '49', cat: 'TV', desc: 'Научно-популярное' },
      { id: '32', cat: 'TV/Documentary', desc: 'Документальный' },
      { id: '12', cat: 'TV', desc: 'Анимация' },
      { id: '1', cat: 'PC', desc: 'Софт' },
      { id: '5', cat: 'PC/Games', desc: 'Игры' },
      { id: '38', cat: 'Books', desc: 'Книги и журналы' },
      { id: '42', cat: 'XXX', desc: 'Эротика' },
      { id: '9', cat: 'Other', desc: 'Разное' },
    ],
    modes: { search: ['q'], 'movie-search': ['q'] },
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
      default: 'added',
      options: {
        added: 'created',
        seed: 'seeders',
        size: 'size',
        name: 'title',
      },
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
    paths: [{ path: 'browse.php' }],
    inputs: {
      search: '{{ .Keywords }}',
      cat: 0,
      incldead: 1,
      ajax: 1,
      year: 0,
      format: 0,
      s: '{{ .Config.sort }}',
      d: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table > tbody#highlighted > tr:has(a[href^="browse.php?cat="])',
    },
    fields: {
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: {
        selector: 'a[href^="details.php?id="]',
        filters: [
          { name: 're_replace', args: ['[\\.\\,\\:\\-\\/\\|]', ' '] },
          {
            name: 're_replace',
            args: [
              '(.*)[CСcс]езон\\s+(\\d+).+[CСcс]ери[ия]\\s+(\\d+)\\s+(\\d+)\\s+из\\s+\\d+(.*)',
              '$1 S$2E$3-$4 rus $5',
            ],
          },
          {
            name: 're_replace',
            args: [
              '(.*)[CСcс]езон\\s+(\\d+).+[CСcс]ери[ия]\\s+(\\d+)\\s+из\\s+\\d+(.*)',
              '$1 S$2E$3 rus $4',
            ],
          },
          {
            name: 're_replace',
            args: ['(.*)[CСcс]езон\\s+(\\d+)(.*)', '$1 S$2 rus $3'],
          },
          {
            name: 're_replace',
            args: ['(.*)[CСcс]]ери[ия]\\s+(\\d+)(.*)', '$1 E$2 rus $3'],
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
          { name: 'replace', args: ['WEB DLRip', 'WEBDL'] },
          { name: 'replace', args: ['HDTVRip', 'HDTV'] },
        ],
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
        filters: [{ name: 'replace', args: ['details', 'download'] }],
      },
      size: { selector: 'td:nth-child(6)' },
      seeders: { selector: 'td:nth-child(7)' },
      leechers: { selector: 'td:nth-child(8)' },
      date: {
        selector: 'img[src="pic/time.png"]',
        attribute: 'title',
        filters: [
          { name: 'replace', args: [' в ', ' '] },
          { name: 'replace', args: ['января', 'January'] },
          { name: 'replace', args: ['февраля', 'February'] },
          { name: 'replace', args: ['марта ', 'March'] },
          { name: 'replace', args: ['апреля', 'April'] },
          { name: 'replace', args: ['мая', 'May'] },
          { name: 'replace', args: ['июня', 'June'] },
          { name: 'replace', args: ['июля', 'July'] },
          { name: 'replace', args: ['августа', 'August'] },
          { name: 'replace', args: ['сентября', 'September'] },
          { name: 'replace', args: ['октября', 'October'] },
          { name: 'replace', args: ['ноября', 'November'] },
          { name: 'replace', args: ['декабря', 'December'] },
          { name: 'dateparse', args: '2 January 2006 15:04:05' },
        ],
      },
      downloadvolumefactor: {
        case: {
          'img[src="pic/freedownload.gif"]': 0,
          'img[src="pic/silverdown.gif"]': 0,
          '*': 1,
        },
      },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
