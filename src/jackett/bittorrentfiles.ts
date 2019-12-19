import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'Bittorrentfiles',
  name: 'Bittorrentfiles',
  description: 'Bittorrentfiles is a Private GERMAN tracker',
  language: 'de-DE',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://bittorrentfiles.me/'],
  legacylinks: ['https://www.Bittorrentfiles.me/'],
  caps: {
    categorymappings: [
      { id: '48', cat: 'Movies/HD', desc: 'Movie 1080p' },
      { id: '31', cat: 'Movies/3D', desc: 'Movie 3D' },
      { id: '21', cat: 'Movies/HD', desc: 'Movie 720p' },
      { id: '28', cat: 'Movies/SD', desc: 'Movie AVI' },
      { id: '20', cat: 'Movies/DVD', desc: 'Movie DVD-R' },
      { id: '40', cat: 'Movies/HD', desc: 'Movie "h264/x264"' },
      { id: '30', cat: 'Movies/HD', desc: 'Movie HD/BD' },
      { id: '49', cat: 'Movies/Foreign', desc: 'Movie International' },
      { id: '78', cat: 'Movies/UHD', desc: 'Movie UHD' },
      { id: '85', cat: 'Movies/HD', desc: 'Movie x265' },
      { id: '79', cat: 'TV/HD', desc: 'Staffeln HD' },
      { id: '56', cat: 'TV/SD', desc: 'Staffeln SD' },
      { id: '88', cat: 'TV/UHD', desc: 'Staffeln UHD' },
      { id: '86', cat: 'TV/HD', desc: 'Folgen UHD' },
      { id: '54', cat: 'TV/HD', desc: 'Folgen HD' },
      { id: '80', cat: 'TV/HD', desc: 'Folgen HD/BD' },
      { id: '7', cat: 'TV/SD', desc: 'Folgen SD' },
      { id: '55', cat: 'TV/Foreign', desc: 'Folgen International' },
      { id: '91', cat: 'TV/Documentary', desc: 'Doku UHD' },
      { id: '64', cat: 'TV/Documentary', desc: 'Doku HD' },
      { id: '36', cat: 'TV/Documentary', desc: 'Doku SD' },
      { id: '81', cat: 'TV/Documentary', desc: 'Doku 3D' },
      { id: '82', cat: 'TV/Documentary', desc: 'Doku Packs' },
      { id: '4', cat: 'PC/Games', desc: 'Spiele Windows' },
      { id: '92', cat: 'PC/Mac', desc: 'Spiele Mac' },
      { id: '93', cat: 'PC', desc: 'Spiele Linux' },
      { id: '97', cat: 'Console/Xbox', desc: 'Spiele XBOX' },
      { id: '94', cat: 'PC/Phone-Other', desc: 'Spiele Mobile' },
      { id: '95', cat: 'Console/NDS', desc: 'Spiele Nintendo' },
      { id: '96', cat: 'Console/PSP', desc: 'Spiele Playstation' },
      { id: '42', cat: 'Console/Other', desc: 'Spiele Andere' },
      { id: '66', cat: 'Audio', desc: 'Musik Alben' },
      { id: '75', cat: 'Audio', desc: 'Musik Singles' },
      { id: '50', cat: 'Audio', desc: 'Musik Charts' },
      { id: '52', cat: 'Audio', desc: 'Musik Packs' },
      { id: '53', cat: 'Audio/Video', desc: 'Musik Video' },
      { id: '61', cat: 'Audio/Video', desc: 'Musik DVD-R' },
      { id: '83', cat: 'Audio/Lossless', desc: 'Musik Flac' },
      { id: '68', cat: 'Audio', desc: 'Musik Live' },
      { id: '6', cat: 'Audio', desc: 'Musik Misc' },
      { id: '51', cat: 'Audio', desc: 'Musik OST' },
      { id: '67', cat: 'Audio', desc: 'Musik Sampler' },
      { id: '98', cat: 'PC/0day', desc: 'App Windows' },
      { id: '62', cat: 'PC/Mac', desc: 'App Mac OS' },
      { id: '63', cat: 'PC/0day', desc: 'App Linux' },
      { id: '34', cat: 'PC', desc: 'App Andere' },
      { id: '74', cat: 'TV/Sport', desc: 'Sport HD' },
      { id: '39', cat: 'TV/Sport', desc: 'Sport SD' },
      { id: '41', cat: 'Books/Comics', desc: 'Sonstiges A-Book' },
      { id: '33', cat: 'TV/Anime', desc: 'Sonstiges Anime' },
      { id: '35', cat: 'Books/Ebook', desc: 'Sonstiges e-Book-DE' },
      { id: '90', cat: 'Books/Ebook', desc: 'Sonstiges e-Book-INT' },
      { id: '65', cat: 'Other', desc: 'Sonstiges E-Learning' },
      { id: '37', cat: 'PC', desc: 'Sonstiges Mobile' },
      { id: '87', cat: 'Books/Magazines', desc: 'Sonstiges E-Paper' },
      { id: '38', cat: 'Other', desc: 'Sonstiges Kids' },
      { id: '47', cat: 'Other', desc: 'Sonstiges Line' },
      { id: '9', cat: 'Other', desc: 'Sonstiges Andere' },
      { id: '58', cat: 'Books/Comics', desc: 'XXX HD' },
      { id: '46', cat: 'XXX', desc: 'XXX Hentai' },
      { id: '35', cat: 'XXX/Other', desc: 'XXX Andere' },
      { id: '59', cat: 'XXX/Packs', desc: 'XXX Pack' },
      { id: '27', cat: 'XXX', desc: 'XXX SD' },
      { id: '76', cat: 'XXX', desc: 'XXX Andere' },
    ],
    modes: {
      search: ['q', 'imdbid'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
    },
  },
  settings: [
    { name: 'user', type: 'text', label: 'Username' },
    { name: 'pass', type: 'password', label: 'Password' },
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
    path: 'signin.php',
    method: 'form',
    form: 'form',
    inputs: { user: '{{ .Config.user }}', pass: '{{ .Config.pass }}' },
    error: [{ selector: '.error' }],
    test: { path: 'browse.php' },
  },
  search: {
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ if .Query.IMDBID }}{{ .Query.IMDBID }}{{else}}{{ .Keywords }}{{end}}',
      search_where: '{{ if .Query.IMDBID }}3{{else}}0{{end}}',
      status: 1,
      orderby: '{{ .Config.sort }}',
      sort: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table.tableinborder > tbody > tr:has(a[href^="details.php"])',
    },
    fields: {
      title: { selector: 'a[href^="details.php"]', attribute: 'title' },
      category: {
        selector: 'a[href^="/browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      details: {
        selector: 'a[href^="details.php"]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="/download.php"]',
        attribute: 'href',
      },
      grabs: { selector: 'a[title="Snatcher"]', optional: true },
      files: { selector: 'a[title="Files"]', optional: true },
      size: {
        selector: 'td:nth-child(6)',
        filters: [{ name: 'replace', args: ['.', ''] }, { name: 'replace', args: [',', '.'] }],
      },
      seeders: { selector: 'a[title="Seeder"]', optional: true },
      leechers: { selector: 'a[title="Leecher"]', optional: true },
      date: {
        selector: 'td:nth-child(10):contains("."):contains(":")',
        optional: true,
        filters: [
          { name: 'split', args: ['b', 0] },
          { name: 'dateparse', args: '02.01.2006 15:04:05' },
        ],
      },
      downloadvolumefactor: {
        case: {
          'img[alt="OU"]': 0,
          'img[alt="D/2"]': 0.5,
          'img[alt="D / 2"]': 0.5,
          '*': 1,
        },
      },
      uploadvolumefactor: { case: { 'img[alt="2xU"]': 2, '*': 1 } },
    },
    paths: [{ path: 'browse.php' }],
  },
  source: 'jackett',
};
