import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'torrentdownloads',
  name: 'Torrent Downloads',
  description: 'Torrent Downloads (TD) is a Public torrent site for all kinds of content',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://www.torrentdownloads.me/', 'https://www.torrentdownloads.info/'],
  caps: {
    categorymappings: [
      { id: '8', cat: 'TV', desc: 'TV Shows' },
      { id: '4', cat: 'Movies', desc: 'Movies' },
      { id: '5', cat: 'Audio', desc: 'Music' },
      { id: '3', cat: 'PC/Games', desc: 'Games' },
      { id: '7', cat: 'PC', desc: 'Software' },
      { id: '1', cat: 'TV/Anime', desc: 'Anime' },
      { id: '2', cat: 'Books', desc: 'Books' },
      { id: '9', cat: 'Other', desc: 'Other' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  settings: [
    {
      name: 'downloadlink',
      type: 'select',
      label: 'Download link',
      default: 'magnet:',
      options: {
        'http://itorrents.org/': 'iTorrents.org',
        'magnet:': 'magnet',
      },
    },
  ],
  download: {
    selector: 'a[href^="{{ .Config.downloadlink }}"]',
    attribute: 'href',
  },
  search: {
    paths: [{ path: '{{if .Keywords}}/search/{{else}}/today/{{end}}' }],
    inputs: {
      $raw: 'new=1&{{range .Categories}}s_cat={{.}}&{{end}}',
      search: '{{ .Keywords }}',
    },
    rows: {
      selector: 'div.inner_container > div:has(p:has(a[href^="/torrent/"]))',
    },
    fields: {
      title: { selector: 'p:nth-child(1) > a' },
      details: {
        selector: 'p:nth-child(1) > a[href^="/torrent/"]',
        attribute: 'href',
      },
      download: {
        selector: 'p:nth-child(1) > a[href^="/torrent/"]',
        attribute: 'href',
      },
      date: { text: 'now' },
      size: { selector: 'span:nth-child(5)' },
      seeders: { selector: 'span:nth-child(4)' },
      leechers: { selector: 'span:nth-child(3)' },
      category: {
        selector: 'img[src^="/templates/new/images/icons/menu_icon"]',
        attribute: 'src',
        filters: [{ name: 'regexp', args: '([\\d,]+)' }],
      },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};