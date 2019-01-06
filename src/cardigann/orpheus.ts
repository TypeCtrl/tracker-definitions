import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'orpheus',
  name: 'Orpheus',
  description: 'A music tracker',
  language: 'en-US',
  encoding: 'UTF-8',
  links: ['https://orpheus.network/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Audio' },
      { id: '2', cat: 'PC' },
      { id: '3', cat: 'Books' },
      { id: '4', cat: 'Audio/Audiobook' },
      { id: '5', cat: 'Movies' },
      { id: '6', cat: 'TV' },
      { id: '7', cat: 'Books/Comics' },
    ],
  },
  login: {
    path: 'login.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      keeplogged: 1,
      login: 'Log in',
    },
    error: [{ selector: 'form#loginform > span.warning' }],
    test: { path: 'torrents.php' },
  },
  ratio: { path: 'torrents.php', selector: 'li#stats_ratio > span' },
  search: {
    path: 'torrents.php',
    inputs: {
      $raw: '{{range .Categories}}filter_cat[{{.}}]=1&{{end}}',
      searchstr: '{{ .Query.Keywords }}',
      order_by: 'time',
      order_way: 'desc',
      action: 'basic',
      searchsubmit: 1,
    },
    rows: { selector: 'table#torrent_table > tbody > tr.torrent' },
    fields: {
      download: {
        selector: 'a[href^="torrents.php?action=download&id="]',
        attribute: 'href',
      },
      description: { selector: 'div.group_info', remove: 'span' },
      title: { selector: 'div.group_info', remove: 'span, div.tags' },
      category: {
        selector: 'td.cats_col',
        case: {
          'div.cats_music': 1,
          'div.cats_applications': 2,
          'div.cats_ebooks': 3,
          'div.cats_audiobooks': 4,
          'div.cats_elearningvideos': 5,
          'div.cats_comedy': 6,
          'div.cats_comics': 7,
        },
      },
      comments: {
        selector: 'a[href^="torrents.php?id="]',
        attribute: 'href',
      },
      files: { selector: 'td:nth-child(3)' },
      date: { selector: 'td:nth-child(4)' },
      size: { selector: 'td:nth-child(5)' },
      grabs: { selector: 'td:nth-child(6)' },
      seeders: { selector: 'td:nth-child(7)' },
      leechers: { selector: 'td:nth-child(8)' },
      downloadvolumefactor: {
        case: {
          ':root div.alertbar:contains("freeleech")': '0',
          ':root div.alertbar:contains("FREELEECH")': '0',
          '*': '1',
        },
      },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
  source: 'cardigann',
};
