import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'Das-Unerwartete',
  name: 'Das Unerwartete',
  description: 'Das Unerwartete is a Private GERMAN tracker',
  language: 'de-DE',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://dasunerwartete.nl'],
  caps: {
    categorymappings: [
      {
        id: '112',
        cat: 'Audio/Audiobook',
        desc: 'Hoerbuecher/Hoerspiele',
      },
      { id: '51', cat: 'Audio', desc: 'Musik' },
      { id: '124', cat: 'Audio/Video', desc: 'Musikvideo' },
      { id: '103', cat: 'Movies/DVD', desc: 'DVD' },
      { id: '88', cat: 'Movies', desc: 'Kids Only' },
      { id: '43', cat: 'Movies', desc: 'Movie Packs' },
      { id: '105', cat: 'Movies/HD', desc: 'Movie/1080 P' },
      { id: '107', cat: 'Movies/HD', desc: 'Movie/3D' },
      { id: '102', cat: 'Movies/HD', desc: 'Movie/720 P' },
      { id: '101', cat: 'Movies/BluRay', desc: 'Movie/Blueray - HD' },
      { id: '108', cat: 'Movies', desc: 'Movie/Bollywood' },
      { id: '93', cat: 'TV/Documentary', desc: 'Movie/Dokus' },
      { id: '125', cat: 'Movies/Foreign', desc: 'Movie/International' },
      { id: '91', cat: 'Movies/SD', desc: 'Movie/SD' },
      { id: '114', cat: 'Movies', desc: 'Movie/TV-Rip' },
      { id: '132', cat: 'Movies/HD', desc: 'Movie/UHD' },
      { id: '110', cat: 'Movies/HD', desc: 'x264' },
      { id: '106', cat: 'Console/PS3', desc: 'Games/PS3' },
      { id: '109', cat: 'Console/PSP', desc: 'Games/PSP' },
      { id: '113', cat: 'Console/Wii', desc: 'Games/Wii' },
      { id: '86', cat: 'PC/Games', desc: 'Games/Windows' },
      { id: '104', cat: 'Console/Xbox360', desc: 'Games/Xbox360' },
      { id: '116', cat: 'PC/Games', desc: 'Linux/Spiele' },
      {
        id: '53',
        cat: 'PC/Phone-Android',
        desc: 'Android/Appz/Games/Navi',
      },
      { id: '126', cat: 'PC', desc: 'Win/Mac/linux' },
      { id: '129', cat: 'TV/HD', desc: 'Serien/Folgen HD' },
      { id: '61', cat: 'TV/SD', desc: 'Serien/Folgen SD' },
      { id: '131', cat: 'TV/HD', desc: 'Serien/Staffeln HD' },
      { id: '130', cat: 'TV/SD', desc: 'Serien/Staffeln SD' },
      { id: '94', cat: 'Books/Ebook', desc: 'Ebooks' },
      { id: '96', cat: 'TV/Anime', desc: 'Anime / Hentai' },
      { id: '9', cat: 'Other/Misc', desc: 'Sonstiges' },
      { id: '115', cat: 'TV/Sport', desc: 'Sport' },
      { id: '69', cat: 'XXX', desc: 'XXX' },
      {
        id: '122',
        cat: 'Books/Magazines',
        desc: 'Zeitschriften/Zeitungen',
      },
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
  ],
  login: {
    path: 'login.php',
    method: 'form',
    form: 'form',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [
      {
        selector: '.tablea:contains("Benutzername oder Passwort ungültig")',
      },
    ],
    test: { path: 'browse.php' },
  },
  search: {
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      incldead: 1,
    },
    rows: {
      selector: 'table.tableinborder > tbody > tr:has(a[href^="download.php"])',
    },
    fields: {
      title: {
        selector: 'a[href^="details.php"]',
        filters: [{ name: 'replace', args: ['.torrent', ''] }],
      },
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      details: {
        selector: 'a[href^="details.php"]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php"]',
        attribute: 'href',
      },
      files: {
        selector: '.tablea tr:nth-child(2) td:nth-child(1) b:nth-child(2)',
      },
      grabs: { selector: '.tablea tr:nth-child(2) td:nth-child(3) b' },
      size: {
        selector: '.tablea tr:nth-child(2) td:nth-child(1) b:nth-child(1)',
        filters: [
          { name: 'replace', args: ['.', ''] },
          { name: 'replace', args: [',', '.'] },
        ],
      },
      seeders: {
        selector: '.tablea tr:nth-child(2) td:nth-child(2) b:nth-child(1) font',
      },
      leechers: {
        selector: '.tablea tr:nth-child(2) td:nth-child(2) b:nth-child(3) font',
      },
      downloadvolumefactor: {
        case: { 'img[src="pic/oupic.gif"]': '0', '*': '1' },
      },
      uploadvolumefactor: { text: 1 },
    },
    paths: [{ path: 'browse.php' }],
  },
  source: 'jackett',
};
