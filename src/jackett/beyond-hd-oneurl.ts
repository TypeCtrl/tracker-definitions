import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'beyond-hd-oneurl',
  name: 'Beyond-HD (OneURL)',
  description: 'Without BeyondHD, your HDTV is just a TV',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://beyond-hd.me/'],
  settings: [
    { name: 'oneurl', type: 'text', label: 'OneURL' },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'created_at',
      options: {
        created_at: 'created',
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
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies', desc: 'Movies' },
      { id: '2', cat: 'TV', desc: 'TV' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
    },
  },
  login: {
    method: 'oneurl',
    inputs: { oneurl: '{{ .Config.oneurl }}' },
    test: { path: 'torrents' },
  },
  search: {
    paths: [{ path: 'torrents' }],
    inputs: {
      $raw: '{{range .Categories}}categories[]={{.}}&{{end}}',
      search: '{{if .Query.IMDBID}}{{else}}{{ .Keywords }}{{end}}',
      description: '',
      uploader: '',
      imdb: '{{ .Query.IMDBIDShort }}',
      tmdb: '',
      sorting: '{{ .Config.sort }}',
      direction: '{{ .Config.type }}',
      qty: 100,
    },
    rows: { selector: 'table > tbody > tr', after: 1 },
    fields: {
      _category: {
        selector: 'a[href*="/categories/"]',
        optional: true,
        attribute: 'href',
        filters: [{ name: 'regexp', args: '/categories/.*?\\.(\\d+)' }],
      },
      category: {
        text: '{{if .Result._category}}{{.Result._category}}{{else}}1{{end}}',
      },
      title: { selector: 'a.torrent-name' },
      download: {
        selector: 'a[href*="/download/"]',
        attribute: 'href',
      },
      details: { selector: 'a.torrent-name', attribute: 'href' },
      banner: {
        optional: true,
        selector: 'div.torrent-poster img',
        attribute: 'src',
        filters: [{ name: 'replace', args: ['/img/person.png', ''] }],
      },
      date: {
        selector: 'td:not(a[href$="/history"]) span.text-orange',
        filters: [{ name: 'timeago' }],
      },
      size: { selector: 'td span.text-blue' },
      seeders: { selector: 'a[href$="/peers"] span.text-green' },
      leechers: { selector: 'a[href$="/peers"] span.text-red' },
      grabs: { selector: 'a[href$="/history"]' },
      imdb: {
        optional: true,
        selector: 'a[href*="www.imdb.com/title/tt"]',
        attribute: 'href',
      },
      downloadvolumefactor: {
        case: {
          'i[data-original-title="100% Free"]': 0,
          'i[data-original-title="100% Free (Limited UL)"]': 0,
          'i[data-original-title="25% Promo"]': 0.75,
          'i[data-original-title="50% Promo"]': 0.5,
          'i[data-original-title="75% Promo"]': 0.25,
          '*': 1,
        },
      },
      uploadvolumefactor: { case: { '*': 1 } },
    },
  },
  source: 'jackett',
};
