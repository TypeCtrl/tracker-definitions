import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'vizuk',
  name: 'Vizuk',
  description: 'Vizuk is a SPANISH private site for HD content',
  language: 'es-ES',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://torrent.vizuk.li/'],
  legacylinks: ['http://torrent.vizuk.li/'],
  certificates: ['ef305c114b583a155728ec7802f4e8c4bcd9a526'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies', desc: 'Películas' },
      { id: '43', cat: 'Movies/UHD', desc: 'Películas UHDFull 4K' },
      { id: '44', cat: 'Movies/UHD', desc: 'Películas UHDRemux 4K' },
      { id: '51', cat: 'Movies/UHD', desc: 'Películas UHDRip 4K' },
      { id: '66', cat: 'Movies/UHD', desc: 'Películas UHDWebDL 4K' },
      { id: '34', cat: 'Movies/UHD', desc: 'Películas FullBR 1080p' },
      { id: '94', cat: 'Movies/BluRay', desc: 'Películas Remux 1080p' },
      { id: '36', cat: 'Movies/HD', desc: 'Películas BDRip 1080p' },
      { id: '98', cat: 'Movies/HD', desc: 'Películas BDRip 1080p x265' },
      { id: '42', cat: 'Movies/HD', desc: 'Películas BDRip 720p' },
      { id: '37', cat: 'Movies/HD', desc: 'Películas Micro 1080p' },
      { id: '45', cat: 'Movies/HD', desc: 'Películas Micro 720p' },
      {
        id: '46',
        cat: 'Movies/HD',
        desc: 'Películas M2TS-MTS-AVCHD-HDTV',
      },
      { id: '65', cat: 'Movies/3D', desc: 'Películas 3D FullBR' },
      { id: '67', cat: 'Movies/3D', desc: 'Películas 3D Remux' },
      { id: '68', cat: 'Movies/3D', desc: 'Películas 3D Rip (SBS/OU)' },
      { id: '64', cat: 'Movies/HD', desc: 'Películas Web-DL-2.0' },
      { id: '49', cat: 'TV/HD', desc: 'Series' },
      { id: '59', cat: 'TV/HD', desc: 'Series UHD F/R/Rip 4K' },
      { id: '61', cat: 'TV/HD', desc: 'Series Full/Remux 1080p' },
      { id: '90', cat: 'TV/HD', desc: 'Series BDRip 1080p' },
      { id: '91', cat: 'TV/HD', desc: 'Series BDRip 720p' },
      { id: '92', cat: 'TV/HD', desc: 'Series Web-DL-2.0' },
      { id: '95', cat: 'TV/HD', desc: 'Series HDTV' },
      { id: '96', cat: 'TV/HD', desc: 'Series HDTV 1080p' },
      { id: '97', cat: 'TV/HD', desc: 'Series HDTV 720p' },
      { id: '47', cat: 'Movies', desc: 'Animación' },
      { id: '69', cat: 'Movies/UHD', desc: 'Animación UHDFull 4K' },
      { id: '72', cat: 'Movies/UHD', desc: 'Animación UHDRemux 4K' },
      { id: '71', cat: 'Movies/UHD', desc: 'Animación UHDRip 4K' },
      { id: '70', cat: 'Movies/UHD', desc: 'Animación UHDWebDL 4K' },
      { id: '73', cat: 'Movies/HD', desc: 'Animación FullBR 1080p' },
      { id: '74', cat: 'Movies/BluRay', desc: 'Animación Remux 1080p' },
      { id: '53', cat: 'Movies/HD', desc: 'Animación BDRip 1080p' },
      { id: '99', cat: 'Movies/HD', desc: 'Animación Rip 1080p x265' },
      { id: '54', cat: 'Movies/HD', desc: 'Animación BDRip 720p' },
      { id: '55', cat: 'Movies/HD', desc: 'Animación Micro 1080p' },
      { id: '56', cat: 'Movies/HD', desc: 'Animación Micro 720p' },
      {
        id: '75',
        cat: 'Movies/HD',
        desc: 'Animación M2TS-MTS-AVCHD-HDTV',
      },
      { id: '76', cat: 'Movies/3D', desc: 'Animación 3D FullBR' },
      { id: '77', cat: 'Movies/3D', desc: 'Animación 3D Remux' },
      { id: '78', cat: 'Movies/3D', desc: 'Animación 3D Rip (SBS/OU)' },
      { id: '79', cat: 'Movies/HD', desc: 'Animación Web-DL-2.0' },
      {
        id: '50',
        cat: 'Other/Misc',
        desc: 'Música , Conciertos, Teatro y Deportes',
      },
      { id: '62', cat: 'Audio/MP3', desc: 'Música' },
      { id: '63', cat: 'TV/Sport', desc: 'Deporte' },
      { id: '21', cat: 'Movies/HD', desc: 'Teatro' },
      { id: '48', cat: 'Movies', desc: 'Documentales' },
      { id: '80', cat: 'Movies/UHD', desc: 'Documentales UHDFull 4K' },
      { id: '81', cat: 'Movies/UHD', desc: 'Documentales UHDRemux 4K' },
      { id: '82', cat: 'Movies/UHD', desc: 'Documentales UHDRip 4K' },
      { id: '83', cat: 'Movies/UHD', desc: 'Documentales UHDWebDL 4K' },
      { id: '84', cat: 'Movies/HD', desc: 'Documentales FullBR 1080p' },
      {
        id: '85',
        cat: 'Movies/BluRay',
        desc: 'Documentales Remux 1080p',
      },
      { id: '57', cat: 'Movies/HD', desc: 'Documentales BDRip 1080p' },
      { id: '58', cat: 'Movies/HD', desc: 'Documentales BDRip 720p' },
      { id: '86', cat: 'Movies/3D', desc: 'Documentales 3D FullBR' },
      { id: '87', cat: 'Movies/3D', desc: 'Documentales 3D Remux' },
      {
        id: '88',
        cat: 'Movies/3D',
        desc: 'Documentales 3D Rip (SBS/OU)',
      },
      { id: '89', cat: 'Movies/HD', desc: 'Documentales Web-DL-2.0' },
      { id: '93', cat: 'XXX', desc: 'XXX' },
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
      default: 'added',
      options: { added: 'created', seeders: 'seeders', size: 'size' },
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
    path: 'ajax/login.php',
    method: 'post',
    inputs: {
      loginbox_membername: '{{ .Config.username }}',
      loginbox_password: '{{ .Config.password }}',
      action: 'login',
      loginbox_remember: 1,
    },
    error: [{ selector: 'div.error' }],
    test: { path: '?p=home&pid=1', selector: 'div#member_info_bar' },
  },
  search: {
    keywordsfilters: [{ name: 're_replace', args: ['S0?(\\d{1,2})E(\\d{1,2})', '$1x$2'] }],
    inputs: {
      p: 'torrents',
      page: 1,
      pid: 10,
      $raw: '{{ range .Categories }}&cid[]={{.}}{{end}}',
      keywords: '{{ .Keywords }}',
      search_type: 'name',
      'sortOptions[sortBy]': '{{ .Config.sort }}',
      'sortOptions[sortOrder]': '{{ .Config.type }}',
    },
    rows: {
      selector:
        'table#torrents_table_classic > tbody > tr:not(:first-child), .torrent-box[id^="torrent_"]',
    },
    fields: {
      category: {
        selector: 'td.torrent_image div.category_image a, .categoryImage a',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cid' }],
      },
      title: {
        selector: 'td.torrent_name > a, .newIndicator > a',
        filters: [{ name: 'append', args: ' [spanish]' }],
      },
      details: {
        selector: 'td.torrent_name > a, .newIndicator > a',
        attribute: 'href',
      },
      download: {
        selector: '.torrentImages > span:first-child a',
        attribute: 'href',
      },
      banner: {
        optional: true,
        selector: 'td.torrent_image div.relativeDiv div:not(.category_image) a, .previewImage a',
        attribute: 'href',
      },
      imdb: {
        optional: true,
        selector: '.torrentFlags a[href*="www.imdb.com/title/tt"]',
        attribute: 'href',
      },
      date: {
        selector:
          'td.torrent_name:contains("Uploaded"):not(:contains("-")), .torrentOwner:contains("Uploaded"):not(:contains("-"))',
        optional: true,
        filters: [
          { name: 'regexp', args: '(?<=Uploaded )(.*)(?= by)' },
          { name: 'replace', args: ['Yesterday at', 'Yesterday'] },
          { name: 'replace', args: ['Today at', 'Today'] },
          { name: 'fuzzytime' },
        ],
      },
      size: { selector: 'td.size a, .torrentInfo a[rel="torrent_size"]' },
      grabs: {
        selector: 'td.completed a, .torrentInfo a[rel="times_completed"]',
      },
      seeders: {
        selector: 'td.seeders a, .torrentInfo a[rel="torrent_seeders"]',
      },
      leechers: {
        selector: 'td.leechers a, .torrentInfo a[rel="torrent_leechers"]',
      },
      downloadvolumefactor: {
        case: {
          'img[src$="torrent_free.png"][title*="No cuenta"]': 0,
          'img[src$="torrent_free.png"][title="Free!"]': 0,
          'img[src$="torrent_free.png"][title*="0.5"]': 0.5,
          '*': 1,
        },
      },
      uploadvolumefactor: {
        case: { 'img[src$="torrent_multiple_upload.png"]': 2, '*': 1 },
      },
      minimumratio: { text: 1 },
      minimumseedtime: { text: 345600 },
    },
    paths: [{ path: '/' }],
  },
  source: 'jackett',
};
