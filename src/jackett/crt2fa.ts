import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'crt2fa',
  name: 'CRT2FA',
  description:
    'Cathode-Ray.Tube (CRT) is a Private Torrent Tracker for CLASSIC MOVIES / TV.  Cookie Login for 2FA use.',
  language: 'en-GB',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://www.cathode-ray.tube/'],
  caps: {
    categorymappings: [
      { id: '13', cat: 'PC/Games', desc: 'Games' },
      { id: '4', cat: 'Other', desc: 'Misc' },
      { id: '1', cat: 'Movies', desc: 'Movies' },
      { id: '2', cat: 'TV', desc: 'TV' },
      { id: '3', cat: 'Other', desc: 'WOC' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  settings: [
    { name: 'cookie', type: 'text', label: 'Cookie' },
    {
      name: 'info_cookie',
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
      name: 'info_tpp',
      type: 'info',
      label: 'Results Per Page',
      default: 'For best results, change the <b>Torrents per page:</b> setting to <b>100</b> on your account profile.',
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'time',
      options: { time: 'created', seeders: 'seeders', size: 'size' },
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
    test: { path: '/', selector: '#nav_userinfo' },
  },
  search: {
    paths: [{ path: 'torrents.php' }],
    inputs: {
      $raw: '{{ range .Categories }}filter_cat[{{.}}]=1&{{end}}',
      searchtext: '{{ .Keywords }}',
      order_by: '{{ .Config.sort }}',
      order_way: '{{ .Config.type }}',
      action: 'advanced',
      filter_freeleech: '{{ if .Config.freeleech }}1{{ else }}{{ end }}',
      taglist: '',
    },
    rows: {
      selector: 'table#torrent_table > tbody > tr[class^="torrent row"]:has(a[href*="action=download"])',
    },
    fields: {
      category: {
        selector: 'a[href^="/torrents.php?filter_cat"]',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '\\[(\\d+)\\]' }],
      },
      title: { selector: 'a[href^="/torrents.php?id="]' },
      details: {
        selector: 'a[href^="/torrents.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="torrents.php?action=download&id="]',
        attribute: 'href',
      },
      description: { optional: true, selector: 'div.tags' },
      poster: {
        selector: 'td:nth-child(2) > script',
        filters: [
          { name: 'regexp', args: 'src=\\\\"(.*?)\\\\"' },
          { name: 're_replace', args: ['\\\\(.)', '$1'] },
          { name: 'replace', args: ['/static/styles/modern/crt.png', ''] },
        ],
      },
      files: { selector: 'td:nth-child(3)' },
      date: {
        selector: 'td:nth-child(5) > span',
        attribute: 'title',
        filters: [
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: 'Jan 02 2006, 15:04 -07:00' },
        ],
      },
      size: { selector: 'td:nth-child(6)' },
      grabs: { selector: 'td:nth-child(7)' },
      seeders: { selector: 'td:nth-child(8)' },
      leechers: { selector: 'td:nth-child(9)' },
      downloadvolumefactor: {
        case: {
          'span.icon[title*="Freeleech"]': 0,
          'img[alt="Freeleech"]': 0,
          '*': 1,
        },
      },
      uploadvolumefactor: {
        case: {
          'span.icon[title*="DoubleSeed"]': 2,
          'img[alt="DoubleSeed"]': 2,
          '*': 1,
        },
      },
      minimumratio: { text: 1 },
    },
  },
  source: 'jackett',
};