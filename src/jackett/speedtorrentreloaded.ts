import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'speedtorrentreloaded',
  name: 'SpeedTorrent Reloaded',
  description:
    'SpeedTorrent Reloaded is a GERMAN Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'de-DE',
  type: 'private',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['https://st-tracker.eu/'],
  legacylinks: ['https://speedtorrent-tracker.mine.nu/'],
  caps: {
    categorymappings: [
      { id: '89', cat: 'Movies/UHD', desc: 'Movies-4K' },
      { id: '47', cat: 'Movies/BluRay', desc: 'Movies-Bluray' },
      { id: '62', cat: 'Movies/SD', desc: 'Movies-SD' },
      { id: '48', cat: 'Movies/HD', desc: 'Movies-720p' },
      { id: '49', cat: 'Movies/HD', desc: 'Movies-1080p' },
      { id: '11', cat: 'Movies/DVD', desc: 'Movies DVD / HD2DVD' },
      { id: '90', cat: 'Movies/3D', desc: 'Movies-3-D' },
      { id: '60', cat: 'Movies/HD', desc: 'Movies-HDTV' },
      { id: '91', cat: 'Movies', desc: 'Movies-Packs' },
      { id: '77', cat: 'TV/SD', desc: 'Serien-SD' },
      { id: '78', cat: 'TV/HD', desc: 'Serien-720p' },
      { id: '79', cat: 'TV/HD', desc: 'Serien-1080p' },
      { id: '16', cat: 'TV', desc: 'Serien-Packs' },
      { id: '100', cat: 'TV/HD', desc: 'Staffel-HD' },
      { id: '99', cat: 'TV/SD', desc: 'Staffel-SD' },
      { id: '95', cat: 'TV/UHD', desc: 'Serien-4K' },
      { id: '64', cat: 'TV/Documentary', desc: 'Serien-Doku' },
      { id: '4', cat: 'PC/Games', desc: 'PC-Games' },
      { id: '84', cat: 'Console/PS3', desc: 'PS3/PS4' },
      { id: '84', cat: 'Console/PS4', desc: 'PS3/PS4' },
      { id: '85', cat: 'Console/Xbox360', desc: 'Xbox-360' },
      { id: '28', cat: 'PC/0day', desc: 'Windows-Programme' },
      { id: '18', cat: 'PC/0day', desc: 'Appz-Sonstige' },
      { id: '14', cat: 'Audio/Other', desc: 'Alben / Sampler / Singles' },
      { id: '98', cat: 'Audio', desc: 'Discografie' },
      { id: '93', cat: 'Audio/Video', desc: 'Musik-Videos' },
      { id: '36', cat: 'Audio/Audiobook', desc: 'Hörbuch' },
      { id: '71', cat: 'Audio/Other', desc: 'Soundtracks' },
      { id: '70', cat: 'Audio/Lossless', desc: 'Flac' },
      { id: '72', cat: 'Audio', desc: 'Musik-Packs' },
      { id: '19', cat: 'Books/Ebook', desc: 'EBooks' },
      { id: '87', cat: 'TV/Anime', desc: 'Anime' },
      { id: '96', cat: 'Other', desc: 'Sonstiges' },
      { id: '23', cat: 'TV/Sport', desc: 'Wrestling' },
      { id: '74', cat: 'TV/Sport', desc: 'Fussball' },
      { id: '75', cat: 'TV/Sport', desc: 'Formel 1' },
      { id: '88', cat: 'XXX', desc: 'XXX' },
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
      name: 'secure_code',
      type: 'password',
      label: 'Secure Code (4 digits)',
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'added',
      options: {
        added: 'created',
        seeds: 'seeders',
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
  login: {
    path: 'login.php',
    method: 'form',
    form: 'form',
    inputs: {
      take: 'yes',
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      secure_code: '{{ .Config.secure_code }}',
    },
    test: { path: 'sessioncheck.php' },
  },
  search: {
    paths: [{ path: 'tfiles.php' }],
    inputs: {
      showsearch: 1,
      $raw: '{{ if .Categories }}{{ range .Categories }}c{{.}}=1&{{end}}{{else}}{{end}}',
      search: '{{ .Keywords }}',
      orderby: '{{ .Config.sort }}',
      sort: '{{ .Config.type }}',
      incldead: 1,
    },
    rows: { selector: 'tr:has(a[href^="details.php?id="])' },
    fields: {
      title: { selector: 'a[href^="details.php?id="]' },
      banner: {
        selector: 'a[href^="details.php?id="][onmouseover]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: '<img src=(.*) width=' }],
      },
      category: {
        selector: 'a[href^="tfiles.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?torrent="]',
        attribute: 'href',
      },
      grabs: {
        selector: 'tr > th > span:nth-child(5)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      size: {
        selector: 'tr > th > span:nth-child(2)',
        filters: [
          { name: 'replace', args: ['Größe: ', ''] },
          { name: 'replace', args: ['.', ''] },
          { name: 'replace', args: [',', '.'] },
        ],
      },
      seeders: {
        selector: 'tr > th > span:nth-child(3)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      leechers: {
        selector: 'tr > th > span:nth-child(4)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      date: {
        selector: 'tr > td:nth-child(3)',
        filters: [
          {
            name: 'regexp',
            args: '(\\d{2}\\.\\d{2}\\.\\d{4}\\s\\d{2}:\\d{2}:\\d{2})',
          },
          { name: 'append', args: ' +01:00' },
          { name: 'replace', args: [' ', ' '] },
          { name: 'replace', args: ['&nbsp;', ' '] },
          { name: 'dateparse', args: '02.01.2006 15:04:05 -07:00' },
        ],
      },
      downloadvolumefactor: { text: 1 },
      uploadvolumefactor: { text: 1 },
      minimumratio: { text: 0.7 },
      minimumseedtime: { text: 172800 },
    },
  },
  source: 'jackett',
};
