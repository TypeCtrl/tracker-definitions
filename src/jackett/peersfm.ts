import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'peersfm',
  name: 'Peers.FM',
  description: 'Peers.FM is a RUSSIAN Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'ru-RU',
  type: 'private',
  encoding: 'WINDOWS-1251',
  links: ['https://peers.fm/'],
  caps: {
    categorymappings: [
      { id: '18', cat: 'TV/Anime', desc: 'Anime' },
      { id: '17', cat: 'PC', desc: 'Database' },
      { id: '25', cat: 'TV', desc: 'EDU' },
      { id: '14', cat: 'Movies/HD', desc: 'HD Видео' },
      { id: '7', cat: 'Other', desc: 'Images' },
      { id: '15', cat: 'PC/Mac', desc: 'Mac' },
      { id: '26', cat: 'PC/Phone-Other', desc: 'Mobile' },
      { id: '24', cat: 'TV', desc: 'TV Show' },
      { id: '1', cat: 'PC', desc: 'WaReZ' },
      { id: '10', cat: 'XXX', desc: 'XXX' },
      { id: '9', cat: 'Audio/Audiobook', desc: 'Аудиокниги' },
      { id: '3', cat: 'PC/Games', desc: 'Игры/GameZ' },
      { id: '2', cat: 'Audio/Video', desc: 'Клипы/Концерты' },
      { id: '8', cat: 'Books/Magazines', desc: 'Книги/Журналы' },
      { id: '20', cat: 'Audio/Lossless', desc: 'Музыка/Lossless' },
      { id: '11', cat: 'Audio/MP3', desc: 'Музыка/Mp3' },
      { id: '13', cat: 'TV', desc: 'Мультфильмы' },
      { id: '12', cat: 'Other', desc: 'Разное/Miscellaneous' },
      { id: '4', cat: 'Movies/DVD', desc: 'Фильмы DVD' },
      { id: '6', cat: 'Movies', desc: 'Фильмы MPEG4' },
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
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: '4',
      options: { '1': 'title', '4': 'created', '5': 'size', '7': 'seeders' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'desc',
      options: { desc: 'desc', asc: 'asc' },
    },
  ],
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      SSL: 1,
    },
    error: [{ selector: 'table[width="400"] tr td' }],
    test: { path: 'browse.php', selector: 'a[href="/logout.php"]' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      incldead: 1,
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table[width="940px"] > tbody > tr:has(a[href^="details.php?id="])',
    },
    fields: {
      title: { selector: 'a[href^="details.php?id="]' },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      download: {
        selector: 'a[href^="download.php/"]',
        attribute: 'href',
      },
      grabs: {
        selector: 'a[href^="download.php/"]',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      size: { selector: 'td:nth-child(6)' },
      date: {
        selector: 'td:nth-child(5)',
        filters: [
          { name: 'replace', args: ['янв', 'Jan'] },
          { name: 'replace', args: ['фев', 'Feb'] },
          { name: 'replace', args: ['мар', 'Mar'] },
          { name: 'replace', args: ['апр', 'Apr'] },
          { name: 'replace', args: ['май', 'May'] },
          { name: 'replace', args: ['июн', 'Jun'] },
          { name: 'replace', args: ['июл', 'Jul'] },
          { name: 'replace', args: ['авг', 'Aug'] },
          { name: 'replace', args: ['сен', 'Sep'] },
          { name: 'replace', args: ['окт', 'Oct'] },
          { name: 'replace', args: ['ноя', 'Nov'] },
          { name: 'replace', args: ['дек', 'Dec'] },
          { name: 'dateparse', args: '15:04:0502 Jan 2006' },
        ],
      },
      seeders: { selector: 'td:nth-child(8)' },
      leechers: { selector: 'td:nth-child(9)' },
      downloadvolumefactor: {
        case: {
          'img[src="pic/free_100.png"]': 0,
          'img[src="pic/free_75.png"]': 0.25,
          'img[src="pic/free_50.png"]': 0.5,
          'img[src="pic/free_25.png"]': 0.75,
          '*': 1,
        },
      },
      uploadvolumefactor: { case: { '*': 1 } },
    },
  },
  source: 'jackett',
};
