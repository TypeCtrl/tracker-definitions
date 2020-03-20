import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'bithorlo',
  name: 'Bithorlo',
  description: 'Bithorlo (BHO) is a HUNGARIAN Private Torrent Tracker for MOVIES / GENERAL',
  language: 'hu-HU',
  type: 'private',
  encoding: 'ISO-8859-2',
  links: ['https://www.bithorlo.info/'],
  caps: {
    categorymappings: [
      { id: '40', cat: 'Books', desc: 'E-book/Eng' },
      { id: '19', cat: 'Books', desc: 'E-book/Hun' },
      { id: '38', cat: 'Console', desc: 'Játék/Consol' },
      { id: '15', cat: 'PC/Games', desc: 'Játék/ISO' },
      { id: '37', cat: 'PC/Games', desc: 'Játék/Rip' },
      { id: '51', cat: 'Movies/SD', desc: 'Cam/Eng' },
      { id: '50', cat: 'Movies/SD', desc: 'Cam/Hun' },
      { id: '2', cat: 'Movies/DVD', desc: 'DVD/Eng' },
      { id: '1', cat: 'Movies/DVD', desc: 'DVD/Hun' },
      { id: '42', cat: 'Movies/DVD', desc: 'Dvd9/Eng' },
      { id: '41', cat: 'Movies/DVD', desc: 'Dvd9/Hun' },
      { id: '29', cat: 'Movies/HD', desc: 'HD/Eng' },
      { id: '28', cat: 'Movies/HD', desc: 'HD/Hun' },
      { id: '33', cat: 'TV', desc: 'Sorozat/Eng' },
      { id: '5', cat: 'TV', desc: 'Sorozat/Hun' },
      { id: '4', cat: 'Movies/SD', desc: 'Xvid/Eng' },
      { id: '3', cat: 'Movies/SD', desc: 'Xvid/Hun' },
      { id: '12', cat: 'Audio', desc: 'Zene/Eng' },
      { id: '13', cat: 'Audio', desc: 'Zene/Hun' },
      { id: '20', cat: 'Other', desc: 'Képek' },
      { id: '21', cat: 'PC/Phone-Other', desc: 'Mobil' },
      { id: '22', cat: 'PC/0day', desc: 'Win/Program/ISO' },
      { id: '23', cat: 'PC/0day', desc: 'Win/Program/Rip' },
      { id: '9', cat: 'XXX', desc: 'XXX/Film' },
      { id: '10', cat: 'XXX', desc: 'XXX/Kép' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  settings: [
    {
      name: 'info_alert',
      type: 'info',
      label: 'Alert about Cookie',
      default:
        "If during your cookie save you get the following error:</br><b>The 'Value'='xzlogin,xzrecover,xzsignup' part of the cookie is invalid.</b></br>Then remove <b>acopendivids=xzlogin,xzrecover,xzsignup; </b> from the cookie string before proceeding to save.",
    },
    { name: 'cookie', type: 'text', label: 'Cookie' },
    {
      name: 'info',
      type: 'info',
      label: 'How to get the Cookie',
      default:
        "<ol><li>Login to this tracker in your browser<li>Open the <b>DevTools</b> panel by pressing <b>F12</b><li>Select the <b>Network</b> tab<li>Click on the <b>Doc</b> button<li>Refresh the page by pressing <b>F5</b><li>Select the <b>Headers</b> tab<li>Find 'cookie:' in the <b>Request Headers</b> section<li>Copy & paste the whole cookie string to here</ol>",
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: '4',
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
  login: { method: 'cookie', test: { path: 'browse.php' } },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    rows: { selector: 'tr[class^="browse"]' },
    fields: {
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }, { name: 'trim' }],
      },
      title: {
        selector: 'a[href^="torrent.php?id="]',
        attribute: 'title',
      },
      details: {
        selector: 'a[href^="torrent.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      banner: {
        optional: true,
        selector: 'a[href^="torrent.php?id="][onmouseover]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: ", '(.*)'" }],
      },
      size: { selector: 'td:nth-child(4)' },
      grabs: { selector: 'td:nth-child(5)' },
      seeders: { selector: 'td:nth-child(6)' },
      leechers: { selector: 'td:nth-child(7)' },
      date: {
        selector: 'a[style="font-size: 8pt;cursor: pointer;"][title]',
      },
      downloadvolumefactor: {
        case: { 'img[title="Ingyenes letöltés"]': 0, '*': 1 },
      },
      uploadvolumefactor: {
        selector: 'span:contains("Feltöltési szorzó")',
        filters: [{ name: 'replace', args: ['Feltöltési szorzó × ', ''] }],
      },
    },
  },
  source: 'jackett',
};
