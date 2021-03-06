import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'rofd',
  name: 'ROFD',
  description: 'ROFD is a Private GERMAN site for TV / MOVIES / GENERAL',
  language: 'de-DE',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://rofd.me/'],
  caps: {
    categorymappings: [
      { id: '14', cat: 'Movies/SD', desc: 'Filme XviD' },
      { id: '15', cat: 'Movies/HD', desc: 'Filme x264/265' },
      { id: '16', cat: 'Movies/DVD', desc: 'Filme DVD' },
      { id: '17', cat: 'TV/Anime', desc: 'Filme Kids/Anime' },
      { id: '18', cat: 'TV/Documentary', desc: 'Filme Doku' },
      { id: '19', cat: 'Movies/HD', desc: 'Filme 720P' },
      { id: '20', cat: 'Movies/HD', desc: 'Filme 720P/x265' },
      { id: '21', cat: 'Movies/HD', desc: 'Filme 1080P' },
      { id: '22', cat: 'Movies/HD', desc: 'Filme 1080P/x265' },
      { id: '23', cat: 'Movies/BluRay', desc: 'Filme Blu-Ray' },
      { id: '24', cat: 'Movies/BluRay', desc: 'Filme Blu-Ray Remux' },
      { id: '25', cat: 'Movies/UHD', desc: 'Filme UHD/4K' },
      { id: '43', cat: 'Movies/3D', desc: 'Filme 3D' },
      { id: '44', cat: 'Movies', desc: 'Filme International' },
      { id: '27', cat: 'TV/SD', desc: 'Serien SD' },
      { id: '28', cat: 'TV/HD', desc: 'Serien HD' },
      { id: '30', cat: 'Audio/MP3', desc: 'Musik mp3' },
      { id: '31', cat: 'Audio/Lossless', desc: 'Musik Flac' },
      { id: '32', cat: 'Audio/Video', desc: 'Musik Video' },
      { id: '45', cat: 'Audio', desc: 'Musik Pack' },
      { id: '34', cat: 'PC/Games', desc: 'Spiele Windows' },
      { id: '35', cat: 'Console', desc: 'Spiele Konsole' },
      { id: '36', cat: 'Console', desc: 'Spiele Wimmel' },
      { id: '37', cat: 'Audio/Audiobook', desc: 'A-Book' },
      { id: '38', cat: 'Books/Ebook', desc: 'E-Book/PDF' },
      { id: '39', cat: 'PC', desc: 'SOFTWARE' },
      { id: '40', cat: 'TV/Sport', desc: 'SPORT' },
      { id: '41', cat: 'Other', desc: 'MISC/SONSTIGES' },
      { id: '42', cat: 'XXX', desc: 'XXX' },
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
      name: 'info_tpp',
      type: 'info',
      label: 'Results Per Page',
      default:
        'For best results, change the <b>Torrents per page:</b> setting to <b>100</b> on your account profile. The default is <i>15</i>.',
    },
  ],
  login: {
    path: 'index.php?page=login',
    method: 'post',
    inputs: {
      uid: '{{ .Config.username }}',
      pwd: '{{ .Config.password }}',
    },
    error: [
      {
        selector: 'body[onLoad^="makeAlert(\'"]',
        message: {
          selector: 'body[onLoad^="makeAlert(\'"]',
          attribute: 'onLoad',
          filters: [
            { name: 'replace', args: ["makeAlert('Error' , '", ''] },
            { name: 'replace', args: ["');", ''] },
          ],
        },
      },
    ],
    test: { path: 'index.php', selector: 'a[href="logout.php"]' },
  },
  download: {
    selector: 'a[href^="download.php?id="]',
    attribute: 'href',
  },
  search: {
    paths: [{ path: 'index.php' }],
    inputs: {
      search: '{{ .Keywords }}',
      category: '{{ range .Categories }}{{.}};{{end}}',
      page: 'torrents',
      active: 0,
      options: '{{ if .Config.freeleech }}5{{ else }}0{{ end }}',
      order: '{{ .Config.sort }}',
      by: '{{ .Config.type }}',
    },
    rows: {
      selector:
        'div.b-content > table > tbody > tr > td > table.lista > tbody > tr:has(a[href^="index.php?page=torrent-details&id="])',
    },
    fields: {
      category: {
        selector: 'a[href^="index.php?page=torrents&category="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      title: {
        selector: 'a[href^="index.php?page=torrent-details&id="]',
      },
      details: {
        selector: 'a[href^="index.php?page=torrent-details&id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="index.php?page=downloadcheck&id="]',
        attribute: 'href',
      },
      poster: {
        selector: 'a[href^="index.php?page=torrent-details&id="]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'src=(.+?) ' }],
      },
      date: {
        selector: 'td:nth-last-child(8)',
        filters: [
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: '02/01/2006 -07:00' },
        ],
      },
      seeders: { selector: 'td:nth-last-child(7)' },
      leechers: { selector: 'td:nth-last-child(6)' },
      grabs: {
        selector: 'td:nth-last-child(5)',
        filters: [{ name: 'replace', args: ['---', '0'] }],
      },
      size: { selector: 'td:nth-last-child(4)' },
      downloadvolumefactor: {
        case: {
          'img[src="images/freeleech.gif"]': 0,
          'img[src="images/gold.gif"]': 0,
          'img[src="images/silver.gif"]': 0.5,
          'img[src="images/bronze.gif"]': 0.75,
          '*': 1,
        },
      },
      uploadvolumefactor: { text: 1 },
      minimumratio: { text: 1 },
      minimumseedtime: { text: 172800 },
    },
  },
  source: 'jackett',
};
