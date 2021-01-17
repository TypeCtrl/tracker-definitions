import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'speedmasterhd',
  name: 'Speedmaster HD',
  description: 'Speedmaster HD is a German Time based tracker for MOVIES / TV',
  language: 'de-DE',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://speedmaster-hd.net/'],
  caps: {
    categorymappings: [
      { id: '131', cat: 'Movies/HD', desc: 'Movies 1080p' },
      { id: '133', cat: 'Movies/HD', desc: 'Movie Pack 1080p' },
      { id: '29', cat: 'TV/HD', desc: 'Serien 1080p' },
      { id: '17', cat: 'TV/Documentary', desc: 'Doku 1080p' },
      { id: '18', cat: 'XXX', desc: 'XXX 1080p' },
      { id: '95', cat: 'TV/HD', desc: 'Serien Packs 1080p' },
      { id: '138', cat: 'Movies/HD', desc: 'x265 1080p' },
      { id: '60', cat: 'Movies/HD', desc: 'Movies 720p' },
      { id: '132', cat: 'Movies/HD', desc: 'Movie Pack 720p' },
      { id: '30', cat: 'TV/HD', desc: 'Serien 720p' },
      { id: '21', cat: 'TV/Documentary', desc: 'Doku 720p' },
      { id: '22', cat: 'XXX', desc: 'XXX 720p' },
      { id: '96', cat: 'TV/HD', desc: 'Serien Packs 720p' },
      { id: '139', cat: 'Movies/HD', desc: 'x265 720p' },
      { id: '129', cat: 'Movies/UHD', desc: 'Remux 4K/2k' },
      { id: '130', cat: 'Movies/UHD', desc: 'Untouched 4K/2k' },
      { id: '134', cat: 'Movies/UHD', desc: 'UHD/2160p 4K/2k' },
      { id: '120', cat: 'Movies/UHD', desc: 'Movies 4K/2k' },
      { id: '121', cat: 'TV/UHD', desc: 'Serien 4K/2k' },
      { id: '122', cat: 'TV/Documentary', desc: 'Doku 4K/2k' },
      { id: '123', cat: 'XXX', desc: 'XXX 4K/2k' },
      { id: '90', cat: 'Movies/3D', desc: 'Untouched 3D' },
      { id: '87', cat: 'Movies/3D', desc: '1080p 3D' },
      { id: '92', cat: 'Movies/3D', desc: '720p 3D' },
      { id: '118', cat: 'TV/Documentary', desc: 'Doku 3D' },
      { id: '97', cat: 'XXX', desc: 'XXX 3D' },
      { id: '135', cat: 'Audio/Audiobook', desc: 'Audio A-Book/FLAC' },
      { id: '136', cat: 'Audio/Audiobook', desc: 'Audio A-Book/MP3' },
      { id: '33', cat: 'Audio/Lossless', desc: 'Audio Lossless' },
      { id: '124', cat: 'Audio/MP3', desc: 'Audio Lossy' },
      { id: '125', cat: 'Audio', desc: 'Audio Tonspur' },
      { id: '42', cat: 'Audio/Video', desc: 'MusikVideo Untouched' },
      { id: '101', cat: 'Audio/Video', desc: 'MusikVideo Remux' },
      { id: '43', cat: 'Audio/Video', desc: 'MusikVideo 1080p' },
      { id: '44', cat: 'Audio/Video', desc: 'MusikVideo 720p' },
      { id: '51', cat: 'Movies', desc: 'Movies Untouched' },
      { id: '100', cat: 'TV', desc: 'Serien Untouched' },
      { id: '99', cat: 'TV/Documentary', desc: 'Doku Untouched' },
      { id: '102', cat: 'XXX', desc: 'XXX Untouched' },
      { id: '12', cat: 'Movies', desc: 'Movies Remux' },
      { id: '126', cat: 'TV', desc: 'Serien Remux' },
      { id: '11', cat: 'TV/Documentary', desc: 'Doku Remux' },
      { id: '10', cat: 'XXX', desc: 'XXX Remux' },
      { id: '49', cat: 'Other', desc: 'Sonstiges RarFix' },
      { id: '93', cat: 'Other', desc: 'Sonstiges HD-Pics' },
      { id: '94', cat: 'Other', desc: 'Sonstiges HD-XXX Pics' },
      { id: '98', cat: 'Other', desc: 'Sonstiges to sort' },
      { id: '103', cat: 'Books/Ebook', desc: 'E-Book Mixed' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
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
    form: 'form[action="login.php"]',
    cookies: ['JAVA=OK'],
    inputs: {
      'input[id="username"]': '{{ .Config.username }}',
      'input[id="password"]': '{{ .Config.password }}',
      'input[name="loginkeeping"]': 'loginkeeping',
      'input[name="loginnow"]': 'yes',
    },
    selectors: true,
    selectorinputs: {
      uufl: { selector: 'input[name="uufl"]', attribute: 'value' },
      uupf: { selector: 'input[name="uupf"]', attribute: 'value' },
    },
    error: [{ selector: 'div[style^="color: #EC0000;"]' }],
    test: { path: 'index.php', selector: 'a[href="logout.php"]' },
  },
  search: {
    paths: [{ path: 'selection.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      blah: '0',
      orderby: '{{ .Config.sort }}',
      sort: '{{ .Config.type }}',
    },
    rows: {
      selector: 'div.content_wrap > div.selection_wrap:has(a[href^="details.php?id="])',
    },
    fields: {
      category: {
        selector: 'a[href^="selection.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: { selector: 'a[href^="details.php?id="]' },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download_ssl.php?torrent="]',
        attribute: 'href',
      },
      imdb: {
        selector: 'a[href*="imdb.com/title/tt"]',
        attribute: 'href',
      },
      poster: {
        selector: 'div[id^="details-"] div div img',
        attribute: 'src',
        filters: [
          {
            name: 'replace',
            args: ['cloud-data/standard_cover/ebook_t.png', ''],
          },
          {
            name: 'replace',
            args: ['cloud-data/standard_cover/doku_t.png', ''],
          },
          {
            name: 'replace',
            args: ['cloud-data/standard_cover/serie_t.png', ''],
          },
          {
            name: 'replace',
            args: ['cloud-data/standard_cover/music_t.png', ''],
          },
          {
            name: 'replace',
            args: ['cloud-data/standard_cover/no_pic_t.png', ''],
          },
          {
            name: 'replace',
            args: ['cloud-data/standard_cover/xxx_t.png', ''],
          },
        ],
      },
      description: {
        selector: 'div[class^="flag_pic_"]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: "'(.+?)'" }],
      },
      size: {
        selector: 'div.selection_unter_ad',
        filters: [{ name: 'replace', args: [',', '.'] }],
      },
      grabs: {
        selector: 'div.selection_unter_ae',
        filters: [{ name: 'replace', args: [' x', ''] }],
      },
      seeders: { selector: 'div.selection_unter_aa > b' },
      leechers: { selector: 'div.selection_unter_aaa > b' },
      date: {
        selector: 'div.selection_unter_ab:not(:contains("Heute")):not(:contains("Gestern"))',
        optional: true,
        filters: [
          { name: 'append', args: ' +01:00' },
          { name: 'replace', args: ['um ', ''] },
          { name: 'dateparse', args: '02.01.2006 15:04:05 -07:00' },
        ],
      },
      downloadvolumefactor: { text: 1 },
      uploadvolumefactor: { text: 1 },
      minimumratio: { text: 1 },
      minimumseedtime: { text: 288000 },
    },
  },
  source: 'jackett',
};
