import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'beyond-hd',
  name: 'Beyond-HD',
  description: 'Without BeyondHD, your HDTV is just a TV',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://beyond-hd.me/'],
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
    path: 'login',
    method: 'form',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      remember: 1,
    },
    error: [{ selector: 'div.has-error' }],
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
      sorting: 'created_at',
      direction: 'desc',
      qty: 25,
    },
    rows: { selector: 'table > tbody > tr' },
    fields: {
      category: {
        selector: 'a[href*="/categories/"]',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '/categories/.*?\\.(\\d+)' }],
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
        filters: [
          {
            name: 'replace',
            args: ['https://via.placeholder.com/600x900', ''],
          },
        ],
      },
      date: {
        selector: 'td:nth-last-child(5)',
        filters: [{ name: 'timeago' }],
      },
      size: { selector: 'td:nth-last-child(4)' },
      seeders: { selector: 'td:nth-last-child(3)' },
      leechers: { selector: 'td:nth-last-child(2)' },
      grabs: { selector: 'td:nth-last-child(1)' },
      imdb: {
        optional: true,
        selector: 'a[href*="www.imdb.com/title/tt"]',
        attribute: 'href',
      },
      downloadvolumefactor: {
        case: {
          'i[data-original-title="Personal Freeleech"]': '0',
          'i[data-original-title="Special Freeleech"]': '0',
          'i[data-original-title="Freeleech Token"]': '0',
          'i[data-original-title="Global FreeLeech"]': '0',
          'i[data-original-title="Freeleech"]': '0',
          'i[data-original-title="Featured Torrent"]': '0',
          '*': '1',
        },
      },
      uploadvolumefactor: {
        case: {
          'i[data-original-title="Double Upload"]': '2',
          'i[data-original-title="Global Double Upload"]': '2',
          'i[data-original-title="Featured Torrent"]': '2',
          '*': '1',
        },
      },
    },
  },
  source: 'jackett',
};
