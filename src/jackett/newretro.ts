import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'newretro',
  name: 'The New Retro',
  description: 'The New Retro is a GERMAN Private Torrent Tracker for MOVIES / GENERAL',
  language: 'de-DE',
  type: 'private',
  encoding: 'WINDOWS-1252',
  links: ['https://new-retro.eu/'],
  caps: {
    categorymappings: [
      { id: '101', cat: 'TV/Anime', desc: 'Filme - Animie' },
      { id: '102', cat: 'Movies/BluRay', desc: 'Filme - Bluray' },
      { id: '131', cat: 'Movies/Other', desc: 'Filme - Bollywood' },
      { id: '103', cat: 'Movies/DVD', desc: 'Filme - DVD' },
      { id: '104', cat: 'Movies/DVD', desc: 'Filme - DVD-R' },
      { id: '132', cat: 'Movies/DVD', desc: 'Filme - HD2DVD' },
      { id: '130', cat: 'Movies', desc: 'Filme - Klassiker' },
      { id: '105', cat: 'Movies', desc: 'Filme - x264' },
      { id: '106', cat: 'Movies', desc: 'Filme - XviD / DivX' },
      { id: '69', cat: 'XXX', desc: ' XXX' },
      { id: '124', cat: 'Audio', desc: 'Musik - Alben' },
      { id: '122', cat: 'Audio/Audiobook', desc: 'Musik - Hörbuch' },
      { id: '123', cat: 'Audio', desc: 'Musik - Mixe' },
      { id: '133', cat: 'Audio/MP3', desc: 'Musik - MP3' },
      { id: '125', cat: 'Audio/Video', desc: 'Musik - Video' },
      { id: '113', cat: 'PC', desc: 'Programme - Linux' },
      { id: '114', cat: 'PC/Mac', desc: 'Programme - Mac' },
      { id: '115', cat: 'PC', desc: 'Programme - Windows' },
      { id: '117', cat: 'TV', desc: 'Allgemein - Serien' },
      { id: '116', cat: 'TV/Documentary', desc: 'Serien - Dokus' },
      { id: '118', cat: 'TV/Sport', desc: 'Serien - Sport' },
      { id: '119', cat: 'Other', desc: 'Bilder' },
      { id: '120', cat: 'Books', desc: 'Ebook' },
      { id: '127', cat: 'Other', desc: 'Für Unsere kleinsten' },
      { id: '121', cat: 'Other', desc: 'Handy Stuff' },
      { id: '129', cat: 'Other', desc: 'Sonstiges' },
      { id: '109', cat: 'Other', desc: 'Spiele - Handy' },
      { id: '112', cat: 'Console', desc: 'Spiele - Konsolen' },
      { id: '111', cat: 'PC/Games', desc: 'Spiele - Mac / Linux' },
      { id: '110', cat: 'PC/Games', desc: 'Spiele - PC' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
    },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    { name: 'pin', type: 'text', label: 'Pin' },
  ],
  login: {
    path: 'login.php',
    method: 'form',
    cookies: ['JAVA=OK'],
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      secure_pin: '{{ .Config.pin }}',
      returnto: '/',
    },
    error: [
      {
        selector: 'table.tableinborder:contains("Anmeldung Gescheitert!") > tbody > tr > td.tablea',
      },
    ],
    test: { path: 'usercp.php' },
  },
  ratio: {
    path: 'usercp.php',
    selector: 'div#lmtd table > tbody > tr:contains("Ratio:") > td:nth-child(2)',
    filters: [
      { name: 'replace', args: ['.', ''] },
      { name: 'replace', args: [',', '.'] },
    ],
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Query.Keywords }}',
      showsearch: '1',
      orderby: 'added',
      sort: 'desc',
      incldead: '1',
    },
    rows: {
      selector: 'table.tableinborder[summary] > tbody > tr',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      download: {
        selector: 'a[href^="download.php?torrent="]',
        attribute: 'href',
      },
      title: { selector: 'a[href^="details.php?id="]:has(b)' },
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      comments: {
        selector: 'td.tablea > table > tbody > tr:nth-child(2) > td:nth-child(4) > a',
        attribute: 'href',
      },
      size: {
        selector: 'td.tablea > table > tbody > tr:nth-child(2) > td:nth-child(1) > b:nth-child(1)',
      },
      grabs: {
        selector: 'td.tablea > table > tbody > tr:nth-child(2) > td:nth-child(3) > b',
      },
      files: {
        selector: 'td.tablea > table > tbody > tr:nth-child(2) > td:nth-child(1) > b:nth-child(2)',
      },
      seeders: {
        selector: 'td.tablea > table > tbody > tr:nth-child(2) > td:nth-child(2) > b:nth-child(1)',
      },
      leechers: {
        selector: 'td.tablea > table > tbody > tr:nth-child(2) > td:nth-child(2) > b:nth-child(3)',
      },
      date: {
        selector: 'td.tablea > table > tbody > tr:nth-child(2) > td:nth-child(5)',
        filters: [
          { name: 'replace', args: [' ', ' '] },
          { name: 'dateparse', args: '02.01.2006 15:04:05' },
        ],
      },
      downloadvolumefactor: {
        case: {
          'font[color="red"]:contains("Only Upload")': '0',
          '*': '1',
        },
      },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
  source: 'jackett',
};
