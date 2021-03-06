import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'bit-titan',
  name: 'BiT-TiTAN',
  description: 'BiT-TiTAN is a GERMAN Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'de-DE',
  type: 'private',
  encoding: 'ISO-8859-1',
  links: ['https://bit-titan.net/'],
  caps: {
    categorymappings: [
      { id: '1010', cat: 'Movies/UHD', desc: 'Movies 2160p' },
      { id: '1020', cat: 'Movies/HD', desc: 'Movies 1080p' },
      { id: '1030', cat: 'Movies/HD', desc: 'Movies 720p' },
      { id: '1040', cat: 'Movies/HD', desc: 'Movies x264' },
      { id: '1050', cat: 'Movies/HD', desc: 'Movies x265' },
      { id: '1060', cat: 'Movies/SD', desc: 'Movies XviD' },
      { id: '1070', cat: 'Movies/3D', desc: 'Movies 3D' },
      { id: '1080', cat: 'Movies/DVD', desc: 'Movies DVD' },
      { id: '1090', cat: 'Movies/BluRay', desc: 'Movies BluRay' },
      { id: '1100', cat: 'Movies/DVD', desc: 'Movies HD2DVD' },
      { id: '1110', cat: 'Movies/Foreign', desc: 'Movies International' },
      { id: '1120', cat: 'Movies/HD', desc: 'Movies HD Packs' },
      { id: '1130', cat: 'Movies/SD', desc: 'Movies SD Packs' },
      { id: '2010', cat: 'TV/UHD', desc: 'TV 2160p' },
      { id: '2020', cat: 'TV/HD', desc: 'TV 1080p' },
      { id: '2030', cat: 'TV/HD', desc: 'TV 720p' },
      { id: '2040', cat: 'TV/HD', desc: 'TV x264' },
      { id: '2050', cat: 'TV/HD', desc: 'TV x265' },
      { id: '2060', cat: 'TV/SD', desc: 'TV XviD' },
      { id: '2070', cat: 'TV/HD', desc: 'TV HD Packs' },
      { id: '2080', cat: 'TV/SD', desc: 'TV SD Packs' },
      { id: '2090', cat: 'TV/Foreign', desc: 'TV International' },
      { id: '3010', cat: 'TV/Documentary', desc: 'Docu 2160p' },
      { id: '3020', cat: 'TV/Documentary', desc: 'Docu 1080p' },
      { id: '3030', cat: 'TV/Documentary', desc: 'Docu 720p' },
      { id: '3040', cat: 'TV/Documentary', desc: 'Docu x264' },
      { id: '3050', cat: 'TV/Documentary', desc: 'Docu x265' },
      { id: '3060', cat: 'TV/Documentary', desc: 'Docu XviD' },
      { id: '3070', cat: 'TV/Documentary', desc: 'Docu HD Packs' },
      { id: '3080', cat: 'TV/Documentary', desc: 'Docu SD Packs' },
      { id: '3090', cat: 'TV/Documentary', desc: 'Docu International' },
      { id: '4010', cat: 'TV/Sport', desc: 'Sport 2160p' },
      { id: '4020', cat: 'TV/Sport', desc: 'Sport 1080p' },
      { id: '4030', cat: 'TV/Sport', desc: 'Sport 720p' },
      { id: '4040', cat: 'TV/Sport', desc: 'Sport SD Sport' },
      { id: '4050', cat: 'TV/Sport', desc: 'Sport HD Packs' },
      { id: '4060', cat: 'TV/Sport', desc: 'Sport SD Packs' },
      { id: '5010', cat: 'XXX', desc: 'XXX 2160p' },
      { id: '5020', cat: 'XXX', desc: 'XXX 1080p' },
      { id: '5030', cat: 'XXX', desc: 'XXX 720p' },
      { id: '5040', cat: 'XXX', desc: 'XXX x264' },
      { id: '5050', cat: 'XXX', desc: 'XXX x265' },
      { id: '5060', cat: 'XXX', desc: 'XXX XviD' },
      { id: '5070', cat: 'XXX', desc: 'XXX HD Packs' },
      { id: '5080', cat: 'XXX', desc: 'XXX SD Packs' },
      { id: '5090', cat: 'XXX', desc: 'XXX Sonstiges' },
      { id: '6010', cat: 'PC/Games', desc: 'Games Windows' },
      { id: '6020', cat: 'Console', desc: 'Games Linux' },
      { id: '6030', cat: 'PC/Mac', desc: 'Games MacOS' },
      { id: '6040', cat: 'PC/Mobile-Android', desc: 'Games Android' },
      { id: '6050', cat: 'Console/Xbox', desc: 'Games Xbox' },
      { id: '6060', cat: 'Console/PSP', desc: 'Games PlayStation' },
      { id: '6070', cat: 'Console/NDS', desc: 'Games Nintendo' },
      { id: '6080', cat: 'Console', desc: 'Games Sonstige' },
      { id: '7010', cat: 'PC/0day', desc: 'Software Windows' },
      { id: '7020', cat: 'PC', desc: 'Software Linux' },
      { id: '7030', cat: 'PC/Mac', desc: 'Software MacOS' },
      { id: '7040', cat: 'PC/Mobile-Android', desc: 'Software Android' },
      { id: '8010', cat: 'Audio/MP3', desc: 'Music MP3-Album' },
      { id: '8020', cat: 'Audio/MP3', desc: 'Music MP3-Charts' },
      { id: '8030', cat: 'Audio/MP3', desc: 'Music MP3-Sampler' },
      { id: '8040', cat: 'Audio/MP3', desc: 'Music MP3-Single' },
      { id: '8050', cat: 'Audio/Lossless', desc: 'Music FLAC-Album' },
      { id: '8060', cat: 'Audio/Lossless', desc: 'Music FLAC-Charts' },
      { id: '8070', cat: 'Audio/Lossless', desc: 'Music FLAC-Sampler' },
      { id: '8080', cat: 'Audio/Lossless', desc: 'Music FLAC-Single' },
      { id: '8090', cat: 'Audio/Video', desc: 'Music Video' },
      { id: '9010', cat: 'Audio/Audiobook', desc: 'Books A-Book' },
      { id: '9020', cat: 'Books/Ebook', desc: 'Books E-Book' },
      { id: '9030', cat: 'Books', desc: 'Books E-Paper' },
      { id: '9040', cat: 'Books', desc: 'Books E-Learning' },
      { id: '9060', cat: 'TV/Anime', desc: 'Anime HD' },
      { id: '9070', cat: 'TV/Anime', desc: 'Anime SD' },
      { id: '9080', cat: 'TV/Anime', desc: 'Anime Pack' },
      { id: '9999', cat: 'Other', desc: 'unsort' },
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
      name: 'freeleech',
      type: 'checkbox',
      label: 'Search freeleech only',
      default: false,
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 1,
      options: { '1': 'created', '2': 'seeders', '5': 'size', '9': 'title' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 1,
      options: { '1': 'desc', '2': 'asc' },
    },
  ],
  login: {
    path: 'login.php',
    method: 'form',
    form: 'form[action$="login.php"]',
    cookies: ['JAVA=OK'],
    captcha: {
      type: 'image',
      selector: 'img[src*="captcha_math.php"]',
      input: 'stringCaptcha',
    },
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'div#login_error' }],
    test: { path: 'index.php' },
  },
  search: {
    paths: [{ path: 'ajax_browse.php', method: 'post' }],
    inputs: {
      $raw: '{{ if .Categories }}{{ range .Categories }}categories[]={{.}}&{{end}}{{ else }}{{ end }}',
      allCats: '',
      search: '{{ .Keywords }}',
      limit: 4,
      searchin: '{{ if .Config.freeleech }}11{{ else }}0{{ end }}',
      orderBy: '{{ .Config.sort }}',
      order: '{{ .Config.type }}',
    },
    headers: { 'x-requested-with': ['XMLHttpRequest'] },
    rows: { selector: 'table.tableinborder tr:has(.catPic)' },
    fields: {
      category: {
        selector: 'td.catPic > img',
        attribute: 'src',
        filters: [{ name: 'regexp', args: '(\\d+).png$' }],
      },
      title: { selector: 'a[href^="details.php?id="]' },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'td.tdl > a',
        attribute: 'onclick',
        filters: [
          { name: 'regexp', args: '(\\d+)' },
          { name: 'prepend', args: 'download.php?torrent=' },
        ],
      },
      poster: { selector: 'div[data-image]', attribute: 'data-image' },
      seeders: { selector: 'td.peers:has(i[title="Seeders"])' },
      leechers: { selector: 'td.peers:has(i[title="Leechers"])' },
      grabs: { selector: 'td.peers:has(i[title="Snatchers"])' },
      date: {
        selector: 'td.added:contains(".")',
        optional: true,
        filters: [
          { name: 'append', args: ' +01:00' },
          { name: 'dateparse', args: '02.01.2006 15:04:05 -07:00' },
        ],
      },
      size: { selector: 'td.size' },
      downloadvolumefactor: {
        case: {
          'span:contains("OU")': 0,
          'span:contains("FL")': 0,
          'span:contains("%25")': 0.25,
          'span:contains("%50")': 0.5,
          'span:contains("%75")': 0.75,
          '*': 1,
        },
      },
      uploadvolumefactor: {
        case: {
          'span:contains("x2")': 2,
          'span:contains("x5")': 5,
          'span:contains("x10")': 10,
          'span:contains("FL")': 0,
          '*': 1,
        },
      },
      minimumseedtime: { text: 172800 },
    },
  },
  source: 'jackett',
};
