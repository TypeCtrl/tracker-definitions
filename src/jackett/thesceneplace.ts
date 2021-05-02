import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'thesceneplace',
  name: 'TheScenePlace',
  description: 'TheScenePlace (TSP) is a Private site for TV / MOVIES / GENERAL',
  language: 'en-EN',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://www.thesceneplace.com/'],
  legacylinks: ['http://www.thesceneplace.com/'],
  caps: {
    categorymappings: [
      { id: '13', cat: 'PC', desc: 'Apps' },
      { id: '15', cat: 'TV/HD', desc: 'TV x264' },
      { id: '16', cat: 'TV/HD', desc: 'TV x265' },
      { id: '17', cat: 'TV/SD', desc: 'TV XVID' },
      { id: '18', cat: 'TV', desc: 'TV PACKS' },
      { id: '25', cat: 'TV/Anime', desc: 'TV KIDS' },
      { id: '20', cat: 'Movies/HD', desc: 'Movies x264' },
      { id: '21', cat: 'Movies/HD', desc: 'Movies x265' },
      { id: '22', cat: 'Movies/SD', desc: 'Movies XVID' },
      { id: '23', cat: 'Movies', desc: 'Movies PACKS' },
      { id: '24', cat: 'TV/Anime', desc: 'Movies KIDS' },
      { id: '35', cat: 'Movies/UHD', desc: 'Movies 4K/UHD' },
      { id: '36', cat: 'Movies/BluRay', desc: 'Movies BluRay' },
      { id: '27', cat: 'Audio/MP3', desc: 'Music MP3' },
      { id: '28', cat: 'Audio/Lossless', desc: 'Music FLAC' },
      { id: '29', cat: 'Audio', desc: 'Music PACKS' },
      { id: '34', cat: 'Audio', desc: 'Music karaoke ' },
      { id: '30', cat: 'Books/Ebook', desc: 'ebooks' },
      { id: '32', cat: 'PC/Games', desc: 'Games PC' },
      { id: '33', cat: 'Console', desc: 'Games ROMS' },
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
    error: [{ selector: 'tr td span[style="color:#FF0000;"]' }],
    test: { path: 'index.php', selector: 'a[href="logout.php"]' },
  },
  search: {
    paths: [{ path: 'index.php' }],
    inputs: {
      page: 'torrents',
      search: '{{ .Keywords }}',
      category: '{{ range .Categories }}{{.}};{{end}}',
      options: 0,
      active: 0,
      order: '{{ .Config.sort }}',
      by: '{{ .Config.type }}',
    },
    rows: {
      selector:
        'table.lista > tbody > tr:has(a[href^="index.php?page=torrent-details&id="]){{ if .Config.freeleech }}:has(img[src="images/freeleech.gif"]){{ else }}{{ end }}',
    },
    fields: {
      category: {
        selector: 'a[href^="index.php?page=torrents&category="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      title: {
        selector: 'a[onmouseover][href^="index.php?page=torrent-details&id="]',
      },
      poster: {
        selector: 'a[onmouseover][href^="index.php?page=torrent-details&id="]',
        attribute: 'onmouseover',
        filters: [
          { name: 'regexp', args: 'src=(.*?) ' },
          { name: 'replace', args: ['torrentimg/nocover.jpg', ''] },
        ],
      },
      details: {
        selector: 'a[onmouseover][href^="index.php?page=torrent-details&id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
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
      minimumseedtime: { text: 259200 },
    },
  },
  source: 'jackett',
};
