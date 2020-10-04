import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'aidoruonline',
  name: 'Aidoru!Online',
  description: 'Aidoru!Online is a Private Torrent Tracker for Female Japanese Idol related files',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://aidoru-online.me/'],
  legacylinks: ['https://aidoru-online.org/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies', desc: 'BD/DVDISO' },
      { id: '2', cat: 'Movies', desc: 'BD/DVD-RIP' },
      { id: '3', cat: 'TV', desc: 'TV' },
      { id: '4', cat: 'TV', desc: 'Perf' },
      { id: '5', cat: 'TV', desc: 'PV' },
      { id: '6', cat: 'TV', desc: 'Webstream' },
      { id: '7', cat: 'Other', desc: 'Image' },
      { id: '8', cat: 'Audio', desc: 'Audio' },
      { id: '9', cat: 'Audio', desc: 'Album' },
      { id: '10', cat: 'Audio', desc: 'Single' },
      { id: '11', cat: 'Audio', desc: 'Radio' },
      { id: '12', cat: 'Other', desc: 'Misc' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q'],
      'movie-search': ['q'],
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
        "<ol><li>Login to this tracker with your browser<li>Open the <b>DevTools</b> panel by pressing <b>F12</b><li>Select the <b>Network</b> tab<li>Click on the <b>Doc</b> button (Chrome Browser) or <b>HTML</b> button (FireFox)<li>Refresh the page by pressing <b>F5</b><li>Click on the first row entry<li>Select the <b>Headers</b> tab on the Right panel<li>Find <b>'cookie:'</b> in the <b>Request Headers</b> section<li><b>Select</b> and <b>Copy</b> the whole cookie string <i>(everything after 'cookie: ')</i> and <b>Paste</b> here.</ol>",
    },
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
      default: 'id',
      options: {
        id: 'created',
        seeders: 'seeders',
        size: 'size',
        name: 'title',
      },
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
    test: { path: '/', selector: 'a[href="account-logout.php"]' },
  },
  ratio: { path: '/', selector: 'td:contains("Ratio") ~ td' },
  search: {
    paths: [{ path: 'get_ttable.php' }],
    inputs: {
      pcat: 'Show+All',
      $raw: 'scat={{ range .Categories }}{{.}},{{end}}&',
      subbed: '',
      fl: '{{ if .Config.freeleech }}1{{ else }}{{ end }}',
      resd: '',
      p: 0,
      searchstr: '{{ .Keywords }}',
      deadlive: 1,
      sortcol: '{{ .Config.sort }}',
      sortorder: '{{ .Config.type }}',
      startdt: '',
      enddt: '',
    },
    rows: {
      selector: 'table.ttable_headinner tr.t-row:has(a[href^="download.php?id="])',
    },
    fields: {
      category: {
        selector: 'a.category-link',
        case: {
          ':contains("DVDISO")': 1,
          ':contains("DVD-RIP")': 2,
          ':contains("TV")': 3,
          ':contains("Perf")': 4,
          ':contains("PV")': 5,
          ':contains("Webstream")': 6,
          ':contains("Image")': 7,
          ':contains("Audio")': 8,
          ':contains("Album")': 9,
          ':contains("Single")': 10,
          ':contains("Radio")': 11,
          ':contains("Misc")': 12,
        },
      },
      title: {
        selector: 'a[href^="torrents-details.php?id="]',
        attribute: 'title',
      },
      details: {
        selector: 'a[href^="torrents-details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      size: { selector: 'td.ttable_size' },
      seeders: { selector: 'td:nth-last-child(4)' },
      leechers: { selector: 'td:nth-last-child(3)' },
      grabs: { selector: 'td:nth-last-child(2)' },
      date: {
        selector: 'td:last-child',
        filters: [
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: '060102 15:04:05 -07:00' },
        ],
      },
      downloadvolumefactor: {
        case: {
          'img[src="images/freeleech.png"]': 0,
          'img[src="images/freeleech2.png"]': 0,
          '*': 1,
        },
      },
      uploadvolumefactor: {
        case: { 'img[src="images/freeleech2.png"]': 2, '*': 1 },
      },
      minimumratio: { text: 0.8 },
    },
  },
  source: 'jackett',
};
