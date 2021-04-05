import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'themixingbowl',
  name: 'themixingbowl',
  description: 'themixingbowl (TMB) is a Semi-Private Torrent Tracker for DJ Music mixes',
  language: 'en-US',
  type: 'semi-private',
  encoding: 'UTF-8',
  links: ['https://tmb.dj/', 'https://themixingbowl.org/'],
  caps: {
    categorymappings: [{ id: '1', cat: 'Audio', desc: 'Music' }],
    modes: { search: ['q'], 'music-search': ['q', 'artist'] },
  },
  settings: [
    {
      name: 'info_nojs',
      type: 'info',
      label: 'JavaScript',
      default:
        'This indexer requires that the web site not use JS when searching.</br> Access your account Preferences on the web site and change the <b>set JavaScript level:</b> setting to <b>No JavaScript</b>.',
    },
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
      default: 11,
      options: { '3': 'title', '4': 'size', '8': 'seeders', '11': 'created' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'd',
      options: { d: 'desc', a: 'asc' },
    },
    {
      name: 'info_tpp',
      type: 'info',
      label: 'Results Per Page',
      default:
        'For best results, change the <b>Torrents per page:</b> setting to <b>50</b> on your account preferences.',
    },
  ],
  login: {
    path: 'login/',
    method: 'post',
    inputs: {
      loginform: 'show',
      page_history: 'disable',
      page_js_enabled: false,
      redirect: '{{ .Config.sitelink }}',
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      keeploggedin: 'on',
      restricttoip: '',
      ok: 'Login',
    },
    error: [{ selector: 'div:contains("do not match")' }],
    test: { path: '/', selector: 'a[href="/logout/"]' },
  },
  search: {
    paths: [{ path: 'torrent/advancedsearch/' }],
    inputs: {
      search: '{{ .Keywords }}',
      go: 'Search',
      artistsearch: '{{ if .Query.Artist }}{{ .Query.Artist }}{{ else }}{{ end }}',
      freesearch: '{{ if .Config.freeleech }}on{{ else }}{{ end }}',
      'results-order1': '{{ .Config.sort }}.{{ .Config.type }}',
      'results-page': 1,
      tagsearch: '{{ range .Categories }}{{.}},{{end}}',
    },
    rows: {
      selector: 'table.torrenttable > tbody > tr:has(a[href^="/torrent/download/"])',
    },
    fields: {
      category: { text: 1 },
      title: { selector: 'td.name a' },
      details: {
        selector: 'td:nth-child(16) a',
        attribute: 'href',
        filters: [{ name: 'append', args: '/details/' }],
      },
      download: {
        selector: 'a[href^="/torrent/download/"]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(5)' },
      artist: { selector: 'span.artist', optional: true },
      tag: { selector: 'span.tag', optional: true },
      codec: { selector: 'td:nth-child(6)', optional: true },
      bit: { selector: 'td:nth-child(7)', optional: true },
      description: {
        text:
          'Artist=[{{ .Result.artist }}] , Tags={{ .Result.tag }} , Codec=[{{ .Result.codec }}] , BitRate=[{{ .Result.bit }}]',
      },
      grabs: { selector: 'td:nth-child(8)' },
      seeders: { selector: 'td:nth-child(9)' },
      leechers: { selector: 'td:nth-child(10)' },
      date: {
        selector: 'td:nth-child(12)',
        filters: [
          { name: 'replace', args: ['at', ''] },
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: '2 Jan 2006  15:04 -07:00' },
        ],
      },
      downloadvolumefactor: {
        case: { 'img[src$="freeleech.png"]': 0, '*': 1 },
      },
      uploadvolumefactor: { text: 1 },
      minimumratio: { text: 1 },
    },
  },
  source: 'jackett',
};
