import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'aftershock',
  name: 'Aftershock',
  description: 'Aftershock is a HUNGARIAN Private Torrent Tracker for MOVIES / GENERAL',
  language: 'hu-HU',
  type: 'private',
  encoding: 'ISO-8859-1',
  links: ['https://aftershock-tracker.net/'],
  legacylinks: ['https://aftershock-tracker.eu/'],
  caps: {
    categorymappings: [
      { id: '7', cat: 'Movies/SD', desc: 'XvidEng' },
      { id: '2', cat: 'Movies', desc: 'AfterShock Release' },
      { id: '190', cat: 'Movies/DVD', desc: 'DVD-9Eng' },
      { id: '191', cat: 'Movies/DVD', desc: 'DVD-9Hun' },
      { id: '1', cat: 'Movies/DVD', desc: 'DVDEng' },
      { id: '4', cat: 'Movies/DVD', desc: 'DVDHun' },
      { id: '23', cat: 'Books/Ebook', desc: 'E-Book' },
      { id: '3', cat: 'Movies', desc: 'Film Pack' },
      { id: '185', cat: 'Audio/Lossless', desc: 'FLACeng' },
      { id: '188', cat: 'Audio/Lossless', desc: 'FLAChu' },
      { id: '173', cat: 'Audio/Audiobook', desc: 'Hangoskönyv' },
      { id: '34', cat: 'Movies/HD', desc: 'HDEng' },
      { id: '33', cat: 'Movies/HD', desc: 'HDHun' },
      { id: '182', cat: 'XXX/x264', desc: 'HDXXX' },
      { id: '12', cat: 'PC/Games', desc: 'JátékIso' },
      { id: '130', cat: 'Console', desc: 'JátékKonzol' },
      { id: '38', cat: 'Console/PSP', desc: 'JátékPS2' },
      { id: '44', cat: 'Console', desc: 'Jatekrip' },
      { id: '131', cat: 'Console/Xbox', desc: 'JátékX-box' },
      { id: '140', cat: 'Other', desc: 'Képek' },
      { id: '141', cat: 'Other', desc: 'Klipek' },
      { id: '154', cat: 'Other', desc: 'MeseEng' },
      { id: '155', cat: 'Other', desc: 'MeseHun' },
      { id: '176', cat: 'Other', desc: 'Mikro HDEng' },
      { id: '174', cat: 'Other', desc: 'Mikro HDHun' },
      { id: '37', cat: 'PC/Phone-Other', desc: 'MobilPDA' },
      { id: '35', cat: 'PC', desc: 'ProgramEgyéb' },
      { id: '170', cat: 'PC/ISO', desc: 'ProgramIso' },
      { id: '24', cat: 'TV', desc: 'Sorozat Eng' },
      { id: '25', cat: 'TV', desc: 'Sorozat Hun' },
      { id: '167', cat: 'Movies/SD', desc: 'Xvid CamEng' },
      { id: '166', cat: 'Movies/SD', desc: 'Xvid CamHun' },
      { id: '9', cat: 'Movies/SD', desc: 'XvidHun' },
      { id: '169', cat: 'XXX/Imageset', desc: 'XXX Képek' },
      { id: '39', cat: 'XXX', desc: 'XXXFilm' },
      { id: '28', cat: 'Audio', desc: 'ZeneEng' },
      { id: '29', cat: 'Audio', desc: 'ZeneHun' },
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
      default: '0',
      options: { '0': 'created', '1': 'title', '4': 'size', '6': 'seeders' },
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
    error: [
      {
        selector: 'td.text:contains("Hiba")',
        message: { selector: 'td.text' },
      },
    ],
    test: { path: '/', selector: 'a[href="/logout.php"]' },
  },
  ratio: {
    path: '/',
    selector: 'p.sajatadatok font',
    filters: [{ name: 'replace', args: [',', ''] }],
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      incldead: '{{ if .Config.freeleech }}3{{ else }}1{{ end }}',
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table tbody#torrent_background tr:has(a.index)',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      title: {
        selector: 'a.index',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'name' }, { name: 'urldecode' }],
      },
      category: {
        selector: 'td a[href^="/browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      details: { selector: 'a.index', attribute: 'href' },
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
        filters: [{ name: 'urldecode' }],
      },
      banner: {
        selector: 'a[onmouseover]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'src=(.*?) width=' }],
      },
      imdb: {
        optional: true,
        selector: 'a[href^="https://www.imdb.com/title"]',
        attribute: 'href',
      },
      files: { selector: 'td:nth-last-child(6)' },
      size: { selector: 'td:nth-last-child(5)' },
      seeders: { selector: 'td:nth-last-child(4)' },
      leechers: { selector: 'td:nth-last-child(3)' },
      grabs: { selector: 'td:nth-last-child(2)' },
      date: {
        selector: 'td font',
        filters: [
          { name: 're_replace', args: ['\\s', ' '] },
          { name: 'dateparse', args: '2006-01-02 15:04:05' },
        ],
      },
      downloadvolumefactor: { case: { 'span.icon_gift': 0, '*': 1 } },
      uploadvolumefactor: { case: { 'span.icon_upload': 2, '*': 1 } },
      minimumratio: { text: 0.31 },
    },
  },
  source: 'jackett',
};
