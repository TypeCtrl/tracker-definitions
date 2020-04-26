import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: '32pages',
  name: '32Pages',
  description: '32Pages (32P) is a Private Torrent Tracker for comic books/graphic novels',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://32pag.es/'],
  caps: {
    modes: { search: ['q'] },
    categorymappings: [{ id: 'Comics', cat: 'Books/Comics' }],
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    { name: '2facode', type: 'text', label: '2FA code' },
    {
      name: 'info_2fa',
      type: 'info',
      label: 'About 2FA code',
      default:
        'Only fill in the <b>2FA code</b> box if you have enabled <b>2FA</b> on the 32Pages Web Site. Otherwise just leave it empty.',
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'time',
      options: {
        time: 'created',
        seeders: 'seeders',
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
    {
      name: 'info',
      type: 'info',
      label: 'Results Per Page',
      default:
        'For best results, your search query has to be <b>as specific as possible</b> (only <b>first 100</b> torrents will be displayed).',
    },
  ],
  login: {
    path: 'login.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      twostep_pub: '{{ .Config.2facode }}',
      keeploggedin: 1,
    },
    error: [{ selector: '#formerror' }],
    test: { path: 'torrents.php', selector: '#nav_userinfo' },
  },
  search: {
    paths: [
      { path: 'torrents.php' },
      { path: 'torrents.php', inputs: { page: 2 } },
      { path: 'torrents.php', inputs: { page: 3 } },
      { path: 'torrents.php', inputs: { page: 4 } },
    ],
    inputs: {
      searchstr: '{{ .Keywords }}',
      order_by: '{{ .Config.sort}}',
      order_way: '{{ .Config.type}}',
      disablegrouping: 1,
    },
    rows: {
      selector: 'table#torrent_table > tbody > tr[class^="torrent"]',
    },
    fields: {
      _grouptitle: { selector: 'a[href^="torrents.php?id="]' },
      _language: {
        selector: 'img[class^="flag"]',
        attribute: 'alt',
        optional: true,
      },
      title: {
        selector: 'a[title="View Torrent"]',
        filters: [
          { name: 'prepend', args: '{{.Result._grouptitle}} - ' },
          { name: 'replace', args: ['/  /', '/'] },
          {
            name: 'append',
            args: '{{if .Result._language}} [{{.Result._language}}]{{else}}{{end}}',
          },
        ],
      },
      category: { text: 'Comics' },
      details: {
        selector: 'a[title="View Torrent"]',
        attribute: 'href',
      },
      download: { selector: 'a[title="Download"]', attribute: 'href' },
      size: { selector: 'td[headers="browse_size"]' },
      files: { selector: 'td[headers="browse_files"]' },
      grabs: { selector: 'td[headers="browse_snatches"]' },
      seeders: { selector: 'td[headers="browse_seeders"]' },
      leechers: { selector: 'td[headers="browse_leechers"]' },
      date: {
        selector: 'td[headers="browse_time"] > span[title]',
        attribute: 'title',
        filters: [{ name: 'dateparse', args: 'Apr 04 2020, 16:24' }],
      },
      downloadvolumefactor: {
        case: {
          'img.fl-diamond': 0,
          'img.fl-sapphire': 0,
          'img.fl-emerald': 0,
          'img.fl-ruby': 0,
          '*': 1,
        },
      },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
