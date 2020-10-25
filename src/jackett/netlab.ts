import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'netlab',
  name: 'NetLab',
  description: 'NetLab is a RUSSIAN Private Torrent Tracker',
  language: 'ru-RU',
  type: 'private',
  encoding: 'WINDOWS-1251',
  links: ['https://torrent.e2k.ru/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies/DVD', desc: 'DVD5' },
      { id: '4', cat: 'Movies/DVD', desc: 'DVD9' },
      { id: '5', cat: 'Movies/WEBDL', desc: 'MPEG/AVI' },
      { id: '6', cat: 'Audio', desc: 'Музыка (Music)' },
      { id: '7', cat: 'PC/Games', desc: 'Игры (Games)' },
      { id: '9', cat: 'PC/0day', desc: 'Программы (Apps)' },
      { id: '10', cat: 'TV/HD', desc: 'HDTV' },
      {
        id: '11',
        cat: 'Audio/Audiobook',
        desc: 'Аудио Книги (Audiobooks)',
      },
      { id: '12', cat: 'Books/Ebook', desc: 'Книги (Ebooks)' },
      { id: '14', cat: 'Other', desc: 'Разное (Other)' },
      { id: '15', cat: 'Audio/Video', desc: 'МузDVD (Music/Video)' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q'],
      'movie-search': ['q'],
      'music-search': ['q', 'artist'],
      'book-search': ['q'],
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
  ],
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      returnto: '/my.php',
    },
    error: [{ selector: 'td.embedded:contains("Ошибка")' }],
    test: { path: 'my.php', selector: 'a[href="logout.php"]' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{if .Query.Artist}}{{ .Query.Artist }}{{ else }}{{ .Keywords }}{{ end }}',
      incldead: 1,
    },
    rows: {
      selector: 'table[border="1"][cellspacing="0"][cellpadding="5"] > tbody > tr:has(a[href^="details.php?id="])',
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
          { name: 're_replace', args: ['[\\:\\-\\/\\|]', ' '] },
          {
            name: 're_replace',
            args: [
              '(\\([А-Яа-яЁё\\W]+\\))|(^[А-Яа-яЁё\\W\\d]+\\/ )|([а-яА-ЯЁё \\-]+,+)|([а-яА-ЯЁё]+)',
              '{{ if .Config.striprussian }}{{ else }}$1$2$3$4{{ end }}',
            ],
          },
        ],
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      magnet: {
        selector: 'a[href^="magnet:?xt="]',
        optional: true,
        attribute: 'href',
      },
      files: { selector: 'td:nth-child(3)' },
      date: {
        selector: 'td:nth-child(4)',
        filters: [
          { name: 'append', args: ' +03:00' },
          { name: 'dateparse', args: '2006-01-0215:04:05 -07:00' },
        ],
      },
      size: { selector: 'td:nth-child(5)' },
      grabs: {
        selector: 'td:nth-child(6)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      seeders: { selector: 'td:nth-child(7)' },
      leechers: { selector: 'td:nth-child(8)' },
      downloadvolumefactor: {
        case: { 'img[src$="_gold.png"]': 0.65, '*': 1 },
      },
      uploadvolumefactor: { text: 1 },
      minimumratio: { text: 0.15 },
    },
  },
  source: 'jackett',
};
