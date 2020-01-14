import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'extremetorrents',
  name: 'ExtremeTorrents',
  description: 'ExtremeTorrents is a DUTCH Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'nl-NL',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://www.extremetorrents.org/'],
  caps: {
    categorymappings: [
      { id: '10', cat: 'Movies/DVD', desc: 'Dvd rip' },
      { id: '111', cat: 'Movies/DVD', desc: 'DVD Promo' },
      { id: '118', cat: 'Movies', desc: 'Kids' },
      { id: '113', cat: 'XXX', desc: 'DVD xxx' },
      { id: '129', cat: 'Movies/HD', desc: 'Hd DVD' },
      { id: '130', cat: 'Movies/UHD', desc: '4K Films' },
      { id: '143', cat: 'Movies/HD', desc: 'Divx 720P' },
      { id: '114', cat: 'Audio', desc: 'Muziek' },
      { id: '140', cat: 'Books', desc: 'E-Book' },
      { id: '105', cat: 'TV/Documentary', desc: 'Documentaire' },
      { id: '115', cat: 'PC', desc: 'pc apps' },
      { id: '120', cat: 'PC/Games', desc: 'Pc Games' },
      { id: '106', cat: 'Other', desc: 'Overig' },
      { id: '131', cat: 'Console/NDS', desc: 'Nintendo Ds' },
      { id: '132', cat: 'TV/HD', desc: 'HD Serie' },
      { id: '116', cat: 'PC/Mac', desc: 'Mac' },
      { id: '125', cat: 'Movies', desc: 'Xvid rip' },
      { id: '123', cat: 'Movies', desc: 'Xvid Tc' },
      { id: '108', cat: 'XXX', desc: '18+' },
      { id: '142', cat: 'XXX', desc: 'HD XXX' },
      { id: '139', cat: 'TV', desc: 'TV Series' },
      { id: '128', cat: 'Audio/Video', desc: 'muziek DVD' },
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
    { name: 'thankyou', type: 'text', label: 'Thank You Comment' },
    {
      name: 'info',
      type: 'info',
      label: 'Thank you comment',
      default:
        'This site requires you to leave a Thank You comment before you can download. Enter your personalised comment above.',
    },
  ],
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'table.main:contains("Aanmelden mislukt")' }],
    test: { path: 'index.php', selector: 'a[href="logout.php"]' },
  },
  download: {
    before: {
      path: 'comment.php',
      method: 'post',
      inputs: {
        action: 'add',
        tid: '{{ .DownloadUri.Query.id }}',
        text: '{{ .Config.thankyou }}',
        submit: 'Opslaan',
      },
    },
    selector: 'a[href^="download.php?id="]',
    attribute: 'href',
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      incldead: 1,
    },
    rows: {
      selector: 'table.mainouter',
      filters: [{ name: 'andmatch' }],
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
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      banner: { selector: 'div[id^="Style"] img', attribute: 'src' },
      size: {
        selector: 'a[href^="details_bestanden.php?torrent_id="]',
        filters: [{ name: 'regexp', args: '(.+?) in' }],
      },
      files: {
        selector: 'a[href^="details_bestanden.php?torrent_id="]',
        filters: [{ name: 'regexp', args: 'in (\\d+) bestan' }],
      },
      grabs: {
        selector: 'table table tr:nth-child(2) td:nth-child(1)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      date: {
        selector: 'table table tr:nth-child(2) td:nth-child(3)',
        filters: [
          { name: 'replace', args: ['januari', 'January'] },
          { name: 'replace', args: ['februari', 'February'] },
          { name: 'replace', args: ['maart', 'March'] },
          { name: 'replace', args: ['april', 'April'] },
          { name: 'replace', args: ['mei', 'May'] },
          { name: 'replace', args: ['juni', 'June'] },
          { name: 'replace', args: ['juli', 'July'] },
          { name: 'replace', args: ['augustus', 'August'] },
          { name: 'replace', args: ['september', 'September'] },
          { name: 'replace', args: ['oktober', 'October'] },
          { name: 'replace', args: ['november', 'November'] },
          { name: 'replace', args: ['december', 'December'] },
          { name: 're_replace', args: ['\\s*om\\s*', ' '] },
          { name: 'dateparse', args: '2 January 2006 15:04:05' },
        ],
      },
      seeders: {
        optional: true,
        selector: 'table tr:nth-child(3) td:nth-child(5)  font b',
      },
      leechers: {
        optional: true,
        selector: 'table tr:nth-child(3) td:nth-child(5) font b:nth-child(2)',
      },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
