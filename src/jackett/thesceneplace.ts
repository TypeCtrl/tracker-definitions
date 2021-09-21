import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'thesceneplace',
  name: 'TheScenePlace',
  description: 'TheScenePlace (TSP) is a Private site for TV / MOVIES / GENERAL',
  language: 'en-US',
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
      { id: '25', cat: 'TV', desc: 'TV KIDS' },
      { id: '38', cat: 'TV/SD', desc: 'TV 480p' },
      { id: '20', cat: 'Movies/HD', desc: 'Movies x264' },
      { id: '21', cat: 'Movies/HD', desc: 'Movies x265' },
      { id: '22', cat: 'Movies/SD', desc: 'Movies XVID' },
      { id: '23', cat: 'Movies', desc: 'Movies PACKS' },
      { id: '24', cat: 'Movies', desc: 'Movies KIDS' },
      { id: '35', cat: 'Movies/UHD', desc: 'Movies 4K/UHD' },
      { id: '36', cat: 'Movies/BluRay', desc: 'Movies BluRay' },
      { id: '37', cat: 'Movies/SD', desc: 'Movies 480p' },
      { id: '27', cat: 'Audio/MP3', desc: 'Music MP3' },
      { id: '28', cat: 'Audio/Lossless', desc: 'Music FLAC' },
      { id: '29', cat: 'Audio', desc: 'Music PACKS' },
      { id: '34', cat: 'Audio', desc: 'Music Karaoke ' },
      { id: '30', cat: 'Books/Ebook', desc: 'eBooks' },
      { id: '32', cat: 'PC/Games', desc: 'Games PC' },
      { id: '33', cat: 'Console', desc: 'Games ROMS' },
      { id: '39', cat: 'Other', desc: 'Misc' },
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
        'table.lista > tbody > tr:has(a[href^="index.php?page=torrent-details&id="]):not(:has(a[href^="index.php?page=userdetails&id="])){{ if .Config.freeleech }}:has(img[src="images/freeleech.gif"]){{ else }}{{ end }}{{ if .Config.freeleech }}, table.lista > tbody > tr:has(a[href^="index.php?page=torrent-details&id="]):not(:has(a[href^="index.php?page=userdetails&id="])):has(img[src="images/gold.gif"]){{ else }}{{ end }}',
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
      grabs: { selector: 'td:nth-last-child(5)' },
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
      uploadvolumefactor: {
        case: {
          'img[src="images/2x.gif"]': 2,
          'img[src="images/3x.gif"]': 3,
          'img[src="images/4x.gif"]': 4,
          'img[src="images/5x.gif"]': 5,
          'img[src="images/6x.gif"]': 6,
          'img[src="images/7x.gif"]': 7,
          'img[src="images/8x.gif"]': 8,
          'img[src="images/9x.gif"]': 9,
          'img[src="images/10x.gif"]': 10,
          '*': 1,
        },
      },
      minimumratio: { text: 1 },
      minimumseedtime: { text: 259200 },
    },
  },
  source: 'jackett',
};
