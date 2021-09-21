import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'muziekfabriek',
  name: 'MuziekFabriek',
  description: 'MuziekFabriek is a DUTCH Private Torrent Tracker for MUSIC',
  language: 'nl-NL',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://www.muziekfabriek.org/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Audio', desc: 'Eigen Verzamel' },
      { id: '2', cat: 'Audio', desc: 'NL Album' },
      { id: '3', cat: 'Audio', desc: 'NL Diverse' },
      { id: '4', cat: 'Audio', desc: 'Engels' },
      { id: '5', cat: 'Audio', desc: 'Country' },
      { id: '6', cat: 'Audio', desc: 'DVD Muziek' },
      { id: '7', cat: 'Audio', desc: 'Instrumentaal' },
      { id: '8', cat: 'Audio', desc: 'Reggae' },
      { id: '9', cat: 'Audio', desc: 'Kinderen' },
      { id: '28', cat: 'Audio', desc: 'Allerlei Albums' },
      { id: '11', cat: 'Audio', desc: 'Duits' },
      { id: '26', cat: 'Audio', desc: 'Carnaval' },
      { id: '13', cat: 'Audio', desc: 'Verzamel' },
      { id: '14', cat: 'Audio', desc: 'Soul' },
      { id: '15', cat: 'Audio', desc: 'Classic' },
      { id: '16', cat: 'Audio', desc: 'Rock-Roll' },
      { id: '17', cat: 'Audio', desc: 'Blues' },
      { id: '18', cat: 'Audio', desc: 'MuziekFabriek' },
      { id: '19', cat: 'Audio', desc: 'Trance' },
      { id: '20', cat: 'Audio', desc: 'Dance' },
      { id: '21', cat: 'Audio', desc: 'Oldies' },
      { id: '22', cat: 'Audio', desc: 'Hardcore' },
      { id: '23', cat: 'Audio', desc: 'Sint' },
      { id: '24', cat: 'Audio', desc: 'Kerstfeest' },
    ],
    modes: { search: ['q'], 'music-search': ['q', 'artist'] },
  },
  settings: [
    { name: 'cookie', type: 'text', label: 'Cookie' },
    {
      name: 'info',
      type: 'info',
      label: 'How to get the Cookie',
      default:
        "<ol><li>Login to this tracker with your browser<li>Open the <b>DevTools</b> panel by pressing <b>F12</b><li>Select the <b>Network</b> tab<li>Click on the <b>Doc</b> button (Chrome Browser) or <b>HTML</b> button (FireFox)<li>Refresh the page by pressing <b>F5</b><li>Click on the first row entry<li>Select the <b>Headers</b> tab on the Right panel<li>Find <b>'cookie:'</b> in the <b>Request Headers</b> section<li><b>Select</b> and <b>Copy</b> the whole cookie string <i>(everything after 'cookie: ')</i> and <b>Paste</b> here.</ol>",
    },
  ],
  login: {
    method: 'cookie',
    inputs: { cookie: '{{ .Config.cookie }}' },
    test: { path: '/', selector: ':has(a[href="logout.php"])' },
  },
  download: {
    selectors: [{ selector: 'a[href^="download.php?id="]', attribute: 'href' }],
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ if .Query.Artist }}{{ .Query.Artist }}{{ else }}{{ .Keywords }}{{ end }}',
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
      poster: { selector: 'div[id^="Style"] img', attribute: 'src' },
      size: {
        selector: 'td:nth-child(4) table tr:nth-child(1) td:nth-child(2)',
        filters: [{ name: 'regexp', args: '(.+?) in' }],
      },
      files: {
        selector: 'td:nth-child(4) table tr:nth-child(1) td:nth-child(2)',
        filters: [{ name: 'regexp', args: 'in (\\d+) bestan' }],
      },
      grabs: {
        selector: 'td:nth-child(4) table tr:nth-child(2) td:nth-child(1)',
      },
      date: {
        selector: 'td:nth-child(4) table tr:nth-child(2) td:last-child',
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
          { name: 'append', args: ' +01:00' },
          { name: 'dateparse', args: '2 January 2006 15:04:05 -07:00' },
        ],
      },
      seeders: {
        optional: true,
        selector: 'td:nth-child(4) table tr:nth-child(3) td:nth-child(5) font b',
      },
      leechers: {
        optional: true,
        selector: 'td:nth-child(4) table tr:nth-child(3) td:nth-child(5) font font b',
      },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
