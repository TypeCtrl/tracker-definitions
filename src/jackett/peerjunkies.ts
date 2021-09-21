import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'peerjunkies',
  name: 'PeerJunkies',
  description: 'PeerJunkies is a Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://www.peerjunkies.com/'],
  caps: {
    categorymappings: [
      { id: '3', cat: 'PC', desc: 'App/LINUX' },
      { id: '4', cat: 'PC/Mac', desc: 'App/MAC' },
      { id: '2', cat: 'PC/Mobile-Other', desc: 'App/Mobile' },
      { id: '5', cat: 'PC/0day', desc: 'App/WIN' },
      { id: '6', cat: 'Audio/Audiobook', desc: 'Books/Audio' },
      { id: '7', cat: 'Books/Ebook', desc: 'Books/Ebook' },
      { id: '8', cat: 'Books', desc: 'Books/Tuts' },
      { id: '9', cat: 'Console/NDS', desc: 'Game/NIN' },
      { id: '10', cat: 'Console/PS3', desc: 'Game/PSX' },
      { id: '11', cat: 'PC/Games', desc: 'Game/WIN' },
      { id: '12', cat: 'Console/Xbox', desc: 'Game/XBOX' },
      { id: '13', cat: 'Movies/3D', desc: 'Movie/3D' },
      { id: '14', cat: 'Movies/UHD', desc: 'Movie/4K' },
      { id: '15', cat: 'Movies/BluRay', desc: 'Movie/Bluray' },
      { id: '16', cat: 'Movies/DVD', desc: 'Movie/DVD' },
      { id: '17', cat: 'Movies', desc: 'Movie/Packs' },
      { id: '18', cat: 'Movies/HD', desc: 'Movie/x264' },
      { id: '19', cat: 'Movies/HD', desc: 'Movie/x265' },
      { id: '20', cat: 'Movies/SD', desc: 'Movie/XVID' },
      { id: '24', cat: 'TV', desc: 'TV/Packs' },
      { id: '25', cat: 'TV/HD', desc: 'TV/Rip/HD' },
      { id: '26', cat: 'TV/SD', desc: 'TV/Rip/SD' },
      { id: '27', cat: 'TV/HD', desc: 'TV/x264/HD' },
      { id: '28', cat: 'TV/SD', desc: 'TV/x264/SD' },
      { id: '29', cat: 'TV/HD', desc: 'TV/x265' },
      { id: '30', cat: 'TV/SD', desc: 'TV/XviD' },
      { id: '1', cat: 'TV/Anime', desc: 'Anime' },
      { id: '22', cat: 'Other', desc: 'Misc' },
      { id: '21', cat: 'Audio', desc: 'Music' },
      { id: '23', cat: 'TV/Sport', desc: 'Sports' },
      { id: '40', cat: 'XXX/x264', desc: 'XXX/HD' },
      { id: '41', cat: 'XXX/SD', desc: 'XXX/SD' },
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
      name: 'info_tpp',
      type: 'info',
      label: 'Results Per Page',
      default: 'For best results, change the <b>Torrents per page:</b> setting to <b>100</b> on your account profile.',
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 4,
      options: { '1': 'title', '4': 'created', '5': 'size', '7': 'seeders' },
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
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'td.tdhd:contains("Login failed!")' }],
    test: { path: 'browse.php', selector: 'a[href="/logout.php"]' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      blah: 0,
      incldead: 1,
      search: '{{ .Keywords }}',
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table.tortable tbody tr:has(a[href^="download.php"])',
    },
    fields: {
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: { selector: 'a[href^="details.php?id="]' },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php"]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-last-child(8)' },
      date: {
        selector: 'td:nth-last-child(7)',
        filters: [
          { name: 'replace', args: [' ', ' '] },
          { name: 'append', args: ' -07:00' },
          { name: 'dateparse', args: '2006-01-02 15:04:05 -07:00' },
        ],
      },
      files: { selector: 'td:nth-last-child(6)' },
      grabs: { selector: 'td:nth-last-child(4)' },
      seeders: { selector: 'td:nth-last-child(3)' },
      leechers: { selector: 'td:nth-last-child(2)' },
      downloadvolumefactor: {
        case: { 'img[src="pic/freeleech.png"]': 0, '*': 1 },
      },
      uploadvolumefactor: { text: 1 },
      minimumratio: { text: 0.4 },
    },
  },
  source: 'jackett',
};
