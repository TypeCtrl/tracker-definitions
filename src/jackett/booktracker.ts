import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'booktracker',
  name: 'BookTracker',
  description: 'BookTracker is a RUSSIAN Semi-Private Torrent Tracker for EBOOKS',
  language: 'ru-RU',
  type: 'semi-private',
  encoding: 'UTF-8',
  links: ['https://booktracker.org/'],
  caps: {
    categorymappings: [{ id: '1', cat: 'Books/Ebook', desc: 'Ebooks' }],
    modes: { search: ['q'], 'book-search': ['q'] },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
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
      default: 'desc',
      options: { desc: 'desc', asc: 'asc' },
    },
  ],
  login: {
    path: 'login.php',
    method: 'form',
    form: 'form[action$="/login.php"]',
    inputs: {
      login_username: '{{ .Config.username }}',
      login_password: '{{ .Config.password }}',
      redirect: 'index.php',
      autologin: 1,
    },
    selectorinputs: {
      cookie_test: {
        selector: 'input[name="cookie_test"]',
        attribute: 'value',
      },
    },
    error: [{ selector: 'h4.warnColor1' }],
    test: {
      path: 'index.php',
      selector: 'a[href="./login.php?logout=1"]',
    },
  },
  search: {
    paths: [{ path: 'tracker.php' }],
    inputs: {
      nm: '{{ .Keywords }}',
      o: '{{ .Config.sort }}',
      s: '{{ .Config.type }}',
      tm: -1,
      sns: -1,
    },
    rows: {
      selector: 'tr[id^="tor_"]:has(a[href^="./download.php?id="])',
    },
    fields: {
      category: { text: 1 },
      title: { selector: 'a.tLink' },
      details: { selector: 'a.tLink', attribute: 'href' },
      download: {
        selector: 'a[href^="./download.php?id="]',
        attribute: 'href',
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
