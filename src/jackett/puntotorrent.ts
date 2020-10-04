import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'puntorrent',
  name: 'PuntoTorrent',
  description: 'PuntoTorrent is a SPANISH site for General content',
  language: 'es-ES',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://xbt.puntotorrent.com/'],
  legacylinks: ['https://xbt.puntotorrent.ch/'],
  caps: {
    categorymappings: [
      { id: '17', cat: 'Movies/Other', desc: 'VCD/SVCD - SVCD/VCD' },
      {
        id: '78',
        cat: 'Movies/Other',
        desc: 'VCD/SVCD - Estrenos VCD/SVCD',
      },
      { id: '14', cat: 'TV/SD', desc: 'XVID - Series' },
      { id: '45', cat: 'TV/Anime', desc: 'XVID - Animación' },
      { id: '46', cat: 'TV/Sport', desc: 'XVID - Deportes' },
      { id: '47', cat: 'TV/Documentary', desc: 'XVID - Documentales' },
      { id: '33', cat: 'Movies/SD', desc: 'XVID - Estrenos' },
      { id: '48', cat: 'Movies/SD', desc: 'XVID - Películas' },
      {
        id: '114',
        cat: 'Movies/SD',
        desc: 'XVID - Estrenos BajaCalidad',
      },
      { id: '12', cat: 'XXX/XviD', desc: 'XVID - Adulto (+18)' },
      { id: '51', cat: 'Audio/Video', desc: 'XVID - Música' },
      { id: '37', cat: 'TV/Anime', desc: 'DVD - Animación' },
      { id: '38', cat: 'TV/Sport', desc: 'DVD - Deportes' },
      { id: '39', cat: 'TV/Documentary', desc: 'DVD - Documentales' },
      { id: '40', cat: 'Movies/DVD', desc: 'DVD - Películas' },
      { id: '41', cat: 'TV/SD', desc: 'DVD - Series' },
      { id: '42', cat: 'XXX/DVD', desc: 'DVD - Adulto (+18)' },
      { id: '43', cat: 'Audio/Video', desc: 'DVD - Música' },
      { id: '106', cat: 'TV/Anime', desc: 'HDRip - Animación' },
      { id: '107', cat: 'TV/Sport', desc: 'HDRip - Deportes' },
      { id: '108', cat: 'TV/Documentary', desc: 'HDRip - Documentales' },
      { id: '109', cat: 'Movies/HD', desc: 'HDRip - Películas' },
      { id: '110', cat: 'TV/HD', desc: 'HDRip - Series' },
      { id: '112', cat: 'XXX/x264', desc: 'HDRip - Adulto (+18)' },
      { id: '111', cat: 'Audio/Video', desc: 'HDRip - Música' },
      { id: '117', cat: 'TV/Anime', desc: '3D - Animación' },
      { id: '118', cat: 'TV/Sport', desc: '3D - Deportes' },
      { id: '119', cat: 'TV/Documentary', desc: '3D - Documentales' },
      { id: '120', cat: 'Movies/3D', desc: '3D - Películas' },
      { id: '121', cat: 'XXX', desc: '3D - Adulto (+18)' },
      { id: '122', cat: 'Audio/Video', desc: '3D - Música' },
      { id: '126', cat: 'TV/Anime', desc: 'Micro HD - Animación' },
      { id: '127', cat: 'TV/Sport', desc: 'Micro HD - Deportes' },
      {
        id: '128',
        cat: 'TV/Documentary',
        desc: 'Micro HD - Documentales',
      },
      { id: '57', cat: 'Movies/HD', desc: 'Micro HD - Películas' },
      { id: '124', cat: 'TV/HD', desc: 'Micro HD - Series' },
      { id: '129', cat: 'XXX/x264', desc: 'Micro HD - Adulto' },
      { id: '130', cat: 'Audio/Video', desc: 'Micro HD - Música' },
      { id: '53', cat: 'TV/Anime', desc: 'HD - Animación' },
      { id: '54', cat: 'TV/Sport', desc: 'HD - Deportes' },
      { id: '55', cat: 'TV/Documentary', desc: 'HD - Documentales' },
      { id: '56', cat: 'Movies/HD', desc: 'HD - BDrip/BDremux/FullBD' },
      { id: '58', cat: 'Movies/HD', desc: 'HD - WEB-DL/Line Dubbed' },
      { id: '59', cat: 'TV/HD', desc: 'HD - Series' },
      { id: '63', cat: 'XXX/x264', desc: 'HD - Adulto (+18)' },
      { id: '61', cat: 'Audio/Video', desc: 'HD - Música' },
      { id: '136', cat: 'TV/Anime', desc: 'UHD - Animación' },
      { id: '137', cat: 'TV/Sport', desc: 'UHD - Deportes' },
      { id: '138', cat: 'TV/Documentary', desc: 'UHD - Documentales' },
      { id: '139', cat: 'Movies/UHD', desc: 'UHD - Películas' },
      { id: '140', cat: 'TV/UHD', desc: 'UHD - Series' },
      { id: '141', cat: 'XXX/x264', desc: 'UHD - Adulto (+18)' },
      { id: '69', cat: 'Audio/MP3', desc: 'MP3' },
      { id: '70', cat: 'Audio/Lossless', desc: 'FLAC' },
      { id: '71', cat: 'Audio/Other', desc: 'Otros Formatos' },
      { id: '74', cat: 'PC/0day', desc: 'Software - Windows' },
      { id: '75', cat: 'PC', desc: 'Software - Linux' },
      { id: '76', cat: 'PC/Mac', desc: 'Software - MAC' },
      {
        id: '77',
        cat: 'PC/Phone-Other',
        desc: 'Software - Otras Plataformas',
      },
      { id: '115', cat: 'PC/Phone-Android', desc: 'Software - Android' },
      { id: '25', cat: 'PC/Games', desc: 'Juegos - Microsoft' },
      { id: '26', cat: 'Console', desc: 'Juegos - Sony' },
      { id: '27', cat: 'PC/Games', desc: 'Juegos - PC' },
      { id: '28', cat: 'Console/NDS', desc: 'Juegos - Nintendo' },
      { id: '34', cat: 'Console/Other', desc: 'Juegos - Otros' },
      {
        id: '113',
        cat: 'Console/Other',
        desc: 'Juegos - Emuladores/Otras P.',
      },
      { id: '6', cat: 'Books/Ebook', desc: 'eBooks - eBooks' },
      { id: '131', cat: 'Books/Comics', desc: 'eBooks - Cómics' },
      { id: '134', cat: 'Books', desc: 'eBooks - Manga' },
      { id: '132', cat: 'Books/Magazines', desc: 'eBooks - Revistas' },
      { id: '72', cat: 'Books/Other', desc: 'eBooks - Otros' },
      { id: '133', cat: 'Books', desc: 'eBooks - Adulto (+18)' },
      { id: '92', cat: 'Other', desc: 'Otros formatos - Animación' },
      { id: '93', cat: 'Other', desc: 'Otros formatos - Deportes' },
      { id: '94', cat: 'Other', desc: 'Otros formatos - Documentales' },
      { id: '95', cat: 'Other', desc: 'Otros formatos - Películas' },
      { id: '97', cat: 'Other', desc: 'Otros formatos - Series' },
      { id: '98', cat: 'Other', desc: 'Otros formatos - Adulto (+18)' },
      { id: '99', cat: 'Other', desc: 'Otros formatos - Música' },
      { id: '100', cat: 'Other', desc: 'Otros formatos - Estrenos' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q'],
      'movie-search': ['q'],
      'music-search': ['q'],
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
      default: '3',
      options: { '2': 'title', '3': 'created', '4': 'size', '5': 'seeders' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: '2',
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
    error: [{ selector: '.lista>span' }],
    test: { path: 'index.php', selector: 'form[name="jump1"]' },
  },
  search: {
    keywordsfilters: [
      { name: 're_replace', args: ['(?i)S(\\d+)', ' $1 '] },
      { name: 're_replace', args: ['(?i)E(\\d+)', ' $1 '] },
      { name: 're_replace', args: ['[^a-zA-Z0-9]+', ' '] },
    ],
    inputs: {
      page: 'torrents',
      $raw: '&category={{ range .Categories }}{{.}};{{end}}',
      active: '{{ if .Config.freeleech }}3{{ else }}0{{ end }}',
      search: '{{ .Keywords }}',
      order: '{{ .Config.sort }}',
      by: '{{ .Config.type }}',
    },
    rows: {
      selector: '#mcol .block-content-l table table.lista > tbody > tr:not(:first-child):not(.descripcion)',
    },
    fields: {
      category: {
        selector: 'td:nth-child(1) a',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      title: {
        selector: 'td:nth-child(2) a:contains("VOSE")',
        optional: true,
        filters: [
          { name: 'append', args: ' | English' },
          {
            name: 're_replace',
            args: ['(?i)T[\\s-_]?(\\d{1,2})(.*)\\[(\\d{1,2})[x|\\/|\\\\](\\d{1,2})\\]', 'S$1E$3 $2'],
          },
          {
            name: 're_replace',
            args: ['(?i)T[\\s-_]?(\\d{1,2})\\b', ' S$1 '],
          },
          {
            name: 're_replace',
            args: ['(?i)\\w*Temp\\w*\\b\\s?(\\d{1,2})(ª|\\D)?\\b', ' S$1 '],
          },
          {
            name: 're_replace',
            args: ['(?i)(\\d{1,2})(ª|\\D)?\\s?\\w*Temp\\w*\\b', ' S$1 '],
          },
          {
            name: 're_replace',
            args: ['(?i)(\\d{1,2})[x|\\/|\\\\](\\d{1,2})', 'S$1E$2'],
          },
        ],
      },
      'title|append': {
        selector: 'td:nth-child(2) a:contains("Xvid"),a:contains("XVID"),a:contains("xvid")',
        optional: true,
        filters: [
          { name: 're_replace', args: ['.', ''] },
          { name: 'append', args: '480.Spanish-PuntoTorrent' },
        ],
      },
      details: {
        selector: 'a[href^="download.php"]',
        attribute: 'href',
        filters: [
          {
            name: 'replace',
            args: ['download.php?', 'index.php?page=torrent-details&'],
          },
        ],
      },
      size: {
        selector: 'td:nth-child(6)',
        filters: [
          { name: 'replace', args: ['.', ''] },
          { name: 'replace', args: [',', '.'] },
        ],
      },
      seeders: { selector: 'td:nth-child(8) a' },
      leechers: { selector: 'td:nth-child(9) a' },
      grabs: {
        selector: 'td:nth-child(10)',
        filters: [{ name: 'replace', args: ['---', '0'] }],
      },
      date: {
        selector: 'td:nth-child(5)',
        filters: [{ name: 'dateparse', args: '02/01/2006' }],
      },
      download: {
        selector: 'a[href^="download.php"]',
        attribute: 'href',
      },
      downloadvolumefactor: {
        case: {
          'img[src$="golden.gif"]': 0,
          'img[src$="silver.gif"]': 0.5,
          '*': 1,
        },
      },
      uploadvolumefactor: {
        case: { 'img[src$="x2.gif"]': 2, 'img[src$="x3.gif"]': 3, '*': 1 },
      },
    },
    paths: [{ path: 'index.php' }],
  },
  source: 'jackett',
};
