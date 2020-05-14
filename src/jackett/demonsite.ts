import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'demonsite',
  name: 'Demon-Site',
  description: 'Demon-Site is a HUNGARIAN Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'hu-HU',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://demon-site.eu/'],
  caps: {
    categorymappings: [
      { id: '6', cat: 'Movies/BluRay', desc: 'Film/BDRip/Eng' },
      { id: '5', cat: 'Movies/BluRay', desc: 'Film/BDRip/Hun' },
      { id: '4', cat: 'Movies/SD', desc: 'Film/Cam/Eng' },
      { id: '3', cat: 'Movies/SD', desc: 'Film/Cam/Hun' },
      { id: '8', cat: 'Movies/DVD', desc: 'Film/DVD/Eng' },
      { id: '7', cat: 'Movies/DVD', desc: 'Film/DVD/Hun' },
      { id: '10', cat: 'Movies/DVD', desc: 'Film/DVD9/Eng' },
      { id: '9', cat: 'Movies/DVD', desc: 'Film/DVD9/Hun' },
      { id: '12', cat: 'Movies/HD', desc: 'Film/HD/Eng' },
      { id: '11', cat: 'Movies/HD', desc: 'Film/HD/Hun' },
      { id: '2', cat: 'Movies/SD', desc: 'Film/XviD/Eng' },
      { id: '1', cat: 'Movies/SD', desc: 'Film/XviD/Hun' },
      { id: '18', cat: 'PC/Games', desc: 'Játék/ISO' },
      { id: '19', cat: 'PC/Games', desc: 'Játék/Rip' },
      { id: '23', cat: 'Books', desc: 'Könyv/Eng' },
      { id: '22', cat: 'Books', desc: 'Könyv/Hun' },
      { id: '24', cat: 'Other', desc: 'Képek' },
      { id: '20', cat: 'Console', desc: 'Konzol' },
      { id: '21', cat: 'PC/Phone-Other', desc: 'Mobil' },
      { id: '16', cat: 'Audio', desc: 'Mp3/Eng' },
      { id: '15', cat: 'Audio', desc: 'Mp3/Hun' },
      { id: '17', cat: 'PC/0day', desc: 'Program' },
      { id: '14', cat: 'TV', desc: 'Sorozat/Eng' },
      { id: '13', cat: 'TV', desc: 'Sorozat/Hun' },
      { id: '25', cat: 'XXX', desc: 'XXX/Film' },
      { id: '26', cat: 'XXX', desc: 'XXX/Kép' },
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
    { name: '2facode', type: 'text', label: '2FA code' },
    {
      name: 'info_2fa',
      type: 'info',
      label: 'About 2FA code',
      default:
        'Only fill in the <b>2FA code</b> box if you have enabled <b>2FA</b> on the Demon-Site Web Site. Otherwise just leave it empty.',
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: '4',
      options: { '1': 'name', '4': 'added', '5': 'size', '7': 'seeders' },
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
    path: 'login.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      code: '{{ .Config.2facode }}',
    },
    error: [
      {
        selector: 'td.embedded:contains("Hiba")',
        message: { selector: 'table[cellpadding="5"] tr:last-child td' },
      },
    ],
    test: { path: 'index.php', selector: 'a[href^="logout.php?k="]' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      incldead: 1,
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table[width="880px"] > tbody > tr:has(a[href^="download.php?torrent="])',
    },
    fields: {
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'title',
        filters: [{ name: 'regexp', args: 'Név:\\s*(.+?)\\s*Első név:' }],
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?torrent="]',
        attribute: 'href',
      },
      banner: { selector: 'a.preview', attribute: 'href' },
      imdb: {
        selector: 'a[href*="www.imdb.com/title/tt"]',
        attribute: 'href',
      },
      files: {
        selector: 'td:nth-child(3)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      date: {
        selector: 'td:nth-child(5)',
        filters: [{ name: 'dateparse', args: '2006-01-02 15:04:05' }],
      },
      size: { selector: 'td:nth-child(6)' },
      grabs: {
        selector: 'td:nth-child(7)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      seeders: { selector: 'td:nth-child(8)' },
      leechers: { selector: 'td:nth-child(9)' },
      downloadvolumefactor: {
        optional: true,
        selector: 'img[src="skin/sotet/arrowdown.png"] ~ span',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      uploadvolumefactor: {
        optional: true,
        selector: 'img[src="skin/sotet/arrowup.png"] ~ span',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
    },
  },
  source: 'jackett',
};
