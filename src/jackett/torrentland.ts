import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'torrentland',
  name: 'Torrentland',
  description: 'Torrentland is a SPANISH Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'es-ES',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://torrentland.li/'],
  caps: {
    categorymappings: [
      { id: '75', cat: 'Movies/UHD', desc: 'Peliculas - 4K' },
      { id: '83', cat: 'Movies/UHD', desc: 'Peliculas - 4K CUSTOM' },
      { id: '81', cat: 'Movies/UHD', desc: 'Peliculas - 4K Remux' },
      { id: '87', cat: 'Movies/UHD', desc: 'Peliculas - 4K Web' },
      { id: '23', cat: 'Movies/BluRay', desc: 'Peliculas - Full BluRay' },
      {
        id: '82',
        cat: 'Movies/BluRay',
        desc: 'Peliculas - CUSTOM FULLBR',
      },
      { id: '72', cat: 'Movies/3D', desc: 'Peliculas - 3D' },
      {
        id: '62',
        cat: 'Movies/BluRay',
        desc: 'Peliculas - BluRay Remux',
      },
      { id: '80', cat: 'Movies/BluRay', desc: 'Peliculas - JMBD' },
      { id: '66', cat: 'Movies/HD', desc: 'Peliculas - HD 1080' },
      { id: '65', cat: 'Movies/HD', desc: 'Peliculas - HD 720' },
      { id: '32', cat: 'Movies/DVD', desc: 'Peliculas - DVDFULL' },
      { id: '14', cat: 'Movies/SD', desc: 'Peliculas - HDRip' },
      { id: '15', cat: 'Movies/DVD', desc: 'Peliculas - DVDRip' },
      {
        id: '71',
        cat: 'Movies/Other',
        desc: 'Peliculas - Peliculas V.O.',
      },
      { id: '69', cat: 'Movies/BluRay', desc: 'Eml HDTeam - FULLBR' },
      { id: '68', cat: 'Movies/BluRay', desc: 'Eml HDTeam - JMBD' },
      { id: '67', cat: 'Movies/BluRay', desc: 'EML HDTeam - BDRemux' },
      { id: '35', cat: 'Movies/HD', desc: 'EML HDTeam - 1080' },
      { id: '34', cat: 'Movies/HD', desc: 'EML HDTeam - 720' },
      { id: '36', cat: 'TV/HD', desc: 'EML HDTeam - Series' },
      { id: '73', cat: 'Movies/3D', desc: 'EML HDTeam - 3D' },
      { id: '74', cat: 'Movies/DVD', desc: 'EML HDTeam - DVD' },
      { id: '77', cat: 'Movies/Other', desc: 'EML HDTeam - Animacion' },
      { id: '78', cat: 'Movies/UHD', desc: 'EML HDTeam - 4K' },
      { id: '79', cat: 'Movies/BluRay', desc: 'EML HDTeam - CUSTOM BR' },
      { id: '50', cat: 'TV/HD', desc: 'Series - Full BluRay' },
      { id: '86', cat: 'TV/UHD', desc: 'Series - 4K' },
      { id: '49', cat: 'TV/HD', desc: 'Series - H264' },
      { id: '84', cat: 'TV/HD', desc: 'Series - H265' },
      { id: '22', cat: 'TV/SD', desc: 'Series - DVD' },
      { id: '20', cat: 'TV/SD', desc: 'Series - HDRip' },
      { id: '51', cat: 'TV/Other', desc: 'Series - Otros Formatos' },
      { id: '53', cat: 'TV/Documentary', desc: 'Documentales - HD' },
      { id: '52', cat: 'TV/Documentary', desc: 'Documentales - SD' },
      { id: '85', cat: 'Books', desc: 'Manuales' },
      { id: '55', cat: 'XXX/x264', desc: 'Adultos - HD' },
      { id: '54', cat: 'XXX/XviD', desc: 'Adultos - SD' },
      { id: '58', cat: 'Movies/HD', desc: 'Animacion - HD' },
      { id: '57', cat: 'Movies/SD', desc: 'Animacion - SD' },
      { id: '76', cat: 'Movies/3D', desc: 'Animacion - 3D' },
      { id: '61', cat: 'TV/Sport', desc: 'Deportes - HD' },
      { id: '60', cat: 'TV/Sport', desc: 'Deportes - SD' },
      { id: '37', cat: 'Books/Ebook', desc: 'Ebook' },
      { id: '47', cat: 'Audio/Lossless', desc: 'Music Lossless' },
      { id: '31', cat: 'Audio/Video', desc: 'Music Video' },
      { id: '19', cat: 'Audio/MP3', desc: 'Music MP3' },
      { id: '29', cat: 'PC/Games', desc: 'PC Game' },
      { id: '26', cat: 'Console/Wii', desc: 'Console Wii / WiiU' },
      { id: '27', cat: 'Console/Xbox360', desc: 'Console Xbox360' },
      { id: '28', cat: 'Console/PSP', desc: 'Console PSP / PS3' },
      { id: '42', cat: 'PC/ISO', desc: 'PC ISO' },
      { id: '44', cat: 'PC', desc: 'PC' },
      { id: '38', cat: 'Books/Other', desc: 'Books Other' },
      { id: '39', cat: 'Books/Other', desc: 'Books Other' },
      { id: '70', cat: 'Movies/SD', desc: 'Screener' },
      { id: '17', cat: 'PC', desc: 'PC Other' },
      { id: '43', cat: 'PC/Mac', desc: 'PC Mac' },
      { id: '30', cat: 'Console/NDS', desc: 'Console NDS' },
      { id: '48', cat: 'Audio/Video', desc: 'Music Video' },
      { id: '25', cat: 'Books/Ebook', desc: 'Ebook' },
      { id: '0', cat: 'Books/Ebook', desc: 'Ebook' },
      { id: '24', cat: 'XXX', desc: 'Adultos' },
      { id: '64', cat: 'PC/Phone-Android', desc: 'PC Android' },
      { id: '21', cat: 'TV/Documentary', desc: 'Documentales' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
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
      label: 'Filter freeleech only',
      default: false,
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 3,
      options: { '2': 'title', '3': 'created', '4': 'size', '5': 'seeders' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 2,
      options: { '1': 'asc', '2': 'desc' },
    },
    {
      name: 'info',
      type: 'info',
      label: 'Results Per Page',
      default: 'For best results, change the <b>Torrents per page:</b> setting to <b>100</b> on your account profile.',
    },
  ],
  login: {
    path: 'index.php?page=login',
    method: 'post',
    inputs: {
      uid: '{{ .Config.username }}',
      pwd: '{{ .Config.password }}',
    },
    error: [{ selector: '.alertMessage' }],
    test: { path: 'index.php', selector: 'form[name="jump1"]' },
  },
  search: {
    keywordsfilters: [{ name: 're_replace', args: ['(?i)\\bS(\\d+)', 'T$1'] }],
    inputs: {
      page: 'torrents',
      $raw: 'category={{ range .Categories }}{{.}};{{end}}',
      options: '{{ if .Query.IMDBID }}2{{ else }}0{{ end }}',
      active: 0,
      search: '{{ if .Query.IMDBID }}{{ .Query.IMDBID }}{{ else }}{{ .Keywords }}{{ end }}',
      order: '{{ .Config.sort }}',
      by: '{{ .Config.type }}',
    },
    rows: {
      selector:
        '#Mcol table.table-inverse ~ table.table-inverse > tbody > tr{{ if .Config.freeleech }}[style="background: #f9e5a5"]{{ else }}{{ end }}:has(a[href^="index.php?page=torrent-details"])',
    },
    fields: {
      category: {
        selector: 'td:nth-child(1) a',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      title: {
        selector: 'td:nth-child(2) a:not(:contains("VOSE"))',
        optional: true,
        filters: [
          { name: 're_replace', args: ['(?i)\\bT(\\d+)', 'S$1'] },
          { name: 'append', args: ' [Spanish]' },
        ],
      },
      banner: {
        optional: true,
        selector: 'td:nth-child(2) a',
        attribute: 'onmouseover',
        filters: [
          { name: 'regexp', args: 'src=(.+?)width' },
          { name: 'trim' },
          { name: 'replace', args: ['torrentimg/nocover.jpg', ''] },
        ],
      },
      details: { selector: 'td:nth-child(2) a', attribute: 'href' },
      description: {
        selector: 'td:nth-child(1) a',
        attribute: 'href',
        filters: [
          { name: 'querystring', args: 'category' },
          { name: 'prepend', args: 'cat=' },
        ],
      },
      size: { selector: 'td:nth-child(6)' },
      seeders: { selector: 'td:nth-child(8) a' },
      leechers: { selector: 'td:nth-child(9) a' },
      grabs: {
        selector: 'td:nth-child(10)',
        filters: [{ name: 'replace', args: ['---', '0'] }],
      },
      date: {
        selector: 'td:nth-child(7)',
        filters: [
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: '02/01/2006 -07:00' },
        ],
      },
      download: {
        selector: 'a[href^="download.php"]',
        attribute: 'href',
      },
      downloadvolumefactor: {
        optional: true,
        selector: 'tr',
        attribute: 'style',
        filters: [
          { name: 'regexp', args: 'background: #(.*)' },
          { name: 'replace', args: ['f9bdbd', '0'] },
          { name: 'replace', args: ['f9e5a5', '0'] },
          { name: 'replace', args: ['a9a9a9', '0.5'] },
          { name: 'replace', args: ['f6c8a6', '0.75'] },
        ],
      },
      uploadvolumefactor: {
        case: {
          'img[src$="2x.gif"]': 2,
          'img[src$="3x.gif"]': 3,
          'img[src$="4x.gif"]': 4,
          'img[src$="5x.gif"]': 5,
          'img[src$="6x.gif"]': 6,
          'img[src$="7x.gif"]': 7,
          '*': 1,
        },
      },
      minimumratio: { text: 1 },
      minimumseedtime: { text: 345600 },
    },
    paths: [{ path: 'index.php' }],
  },
  source: 'jackett',
};
