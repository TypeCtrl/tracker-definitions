import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'cinemamovies',
  name: 'CinemaMovies',
  description: 'CinemaMovies is a POLISH Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'pl-PL',
  type: 'private',
  encoding: 'ISO-8859-2',
  links: ['https://cinemamovies.pl/'],
  caps: {
    categorymappings: [
      { id: '3', cat: 'Movies/BluRay', desc: 'Filmy BD25/50_5/9' },
      { id: '5', cat: 'Movies/3D', desc: 'Filmy 3D' },
      { id: '6', cat: 'Movies/DVD', desc: 'Filmy DVD5/9' },
      { id: '8', cat: 'Movies/HD', desc: 'Filmy HD' },
      { id: '11', cat: 'Movies/SD', desc: 'Filmy SD' },
      { id: '12', cat: 'Movies/Other', desc: 'Filmy Inne' },
      { id: '32', cat: 'Movies/UHD', desc: 'Filmy UHD' },
      { id: '2', cat: 'TV/Anime', desc: 'Anime' },
      { id: '2', cat: 'TV/Documentary', desc: 'TV Dokumentalne' },
      { id: '20', cat: 'TV', desc: 'TV Paczki' },
      { id: '22', cat: 'TV/Sport', desc: 'TV Sport' },
      { id: '24', cat: 'TV/HD', desc: 'TV HD' },
      { id: '25', cat: 'TV/SD', desc: 'TV SD' },
      { id: '1', cat: 'PC', desc: 'Aplikacje' },
      { id: '15', cat: 'PC/Games', desc: 'Gry' },
      { id: '16', cat: 'PC/Phone-Other', desc: 'Mobile' },
      { id: '17', cat: 'Other', desc: 'Inne' },
      { id: '19', cat: 'Audio', desc: 'Muzyka' },
      { id: '21', cat: 'Books', desc: 'Book' },
    ],
    modes: {
      search: ['q', 'imdbid'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
      'music-search': ['q'],
    },
  },
  settings: [
    { name: 'cookie', type: 'text', label: 'Cookie' },
    {
      name: 'info',
      type: 'info',
      label: 'How to get the Cookie',
      default:
        "<ol><li>Login to this tracker with your browser<li>Open the <b>DevTools</b> panel by pressing <b>F12</b><li>Select the <b>Network</b> tab<li>Click on the <b>Doc</b> button<li>Refresh the page by pressing <b>F5</b><li>Select the <b>Headers</b> tab<li>Find <b>'cookie:'</b> in the <b>Request Headers</b> section<li><b>Select</b> and <b>Copy</b> the whole cookie string <i>(everything after 'cookie: ')</i> and <b>Paste</b> here.</ol>",
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: '2',
      options: { '1': 'title', '2': 'created', '3': 'size', '5': 'seeders' },
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
    method: 'cookie',
    inputs: { cookie: '{{ .Config.cookie }}' },
    test: { path: 'index.php', selector: 'a[href^="/logout.php"]' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ if .Query.IMDBID }}{{ .Query.IMDBID }}{{else}}{{ .Keywords }}{{end}}',
      incldead: 1,
      blah: '{{ if .Query.IMDBID }}1{{else}}0{{end}}',
      gatunek: 0,
      quality: 'none',
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table[width="100%"] > tbody > tr:has(a[href^="browse.php?cat="])',
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
        selector: 'a[href^="download.php/"]',
        attribute: 'href',
      },
      banner: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'src=(.+?) ' }],
      },
      imdb: {
        optional: true,
        selector: 'a[href*="www.imdb.com/title/tt"]',
        attribute: 'href',
      },
      description: {
        optional: true,
        selector: 'img[src="pic/Poland.png"]',
        attribute: 'src',
        filters: [{ name: 'replace', args: ['pic/Poland.png', 'Polish'] }],
      },
      date: {
        selector: 'td[width="66%"] > span > span',
        filters: [
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: '2006-01-02 15:04:05 -07:00' },
        ],
      },
      size: { selector: 'td:nth-child(4)' },
      seeders: { selector: 'a[href$="#seedy"]' },
      leechers: { selector: 'a[href$="#leechy"]' },
      grabs: { selector: 'td:last-child > small> span' },
      downloadvolumefactor: {
        case: { 'img[src="pic/free.png"]': 0, '*': 1 },
      },
      uploadvolumefactor: {
        case: { 'img[src="pic/double.png"]': 2, '*': 1 },
      },
    },
  },
  source: 'jackett',
};
