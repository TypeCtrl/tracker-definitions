import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'torrentdownloads',
  name: 'Torrent Downloads',
  description: 'Torrent Downloads (TD) is a Public torrent site for all kinds of content',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: [
    'https://www.torrentdownloads.info/',
    'https://www.torrentdownloads.pro/',
    'https://torrentdownloads.unblockit.ws/',
    'https://torrentdownloads.nocensor.work/',
  ],
  legacylinks: [
    'https://torrentdownloads.unblockit.pro/',
    'https://torrentdownloads.unblockit.one/',
    'https://torrentdownloads.black-mirror.xyz/',
    'https://torrentdownloads.unblocked.casa/',
    'https://torrentdownloads.proxyportal.fun/',
    'https://torrentdownloads.uk-unblock.xyz/',
    'https://torrentdownloads.ind-unblock.xyz/',
    'https://torrentdownloads.unblockit.me/',
    'https://torrentdownloads.unblockit.pw/',
    'https://torrentdownloads.unblockit.id/',
    'https://torrentdownloads.unblockit.win/',
    'https://torrentdownloads.unblocked.bar/',
    'https://torrentdownloads.proxyportal.pw/',
    'https://torrentdownloads.uk-unblock.pro/',
    'https://torrentdownloads.unblockit.top/',
    'https://torrentdownloads.unblockit.lat/',
    'https://torrentdownloads.unblockit.app/',
    'https://torrentdownloads.unblocked.rest/',
    'https://torrentdownloads.unblockit.dev/',
    'https://torrentdownloads.unblockit.ltd/',
    'https://torrentdownloads.unblockit.link/',
    'https://torrentdownloads.unblockit.buzz/',
    'https://torrentdownloads.unblocked.monster/',
    'https://torrentdownloads.unblockit.club/',
    'https://torrentdownloads.unblockit.onl/',
    'https://torrentdownloads.unblockit.li/',
    'https://torrentdownloads.unblockit.uno/',
    'https://www.torrentdownloads.me/',
    'https://torrentdownloads.unblockit.ch/',
    'https://torrentdownloads.nocensor.space/',
  ],
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
      { id: '0', cat: 'Other', desc: 'Other' },
      { id: '6', cat: 'Other', desc: 'Pics' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
      'book-search': ['q'],
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
    {
      name: 'downloadlink2',
      type: 'select',
      label: 'Download link (fallback)',
      default: 'http://itorrents.org/',
      options: {
        'http://itorrents.org/': 'iTorrents.org',
        'magnet:': 'magnet',
      },
    },
    {
      name: 'info_download',
      type: 'info',
      label: 'About the Download links',
      default:
        'As the .torrent download links on this site are known to fail from time to time, you can optionally set as a fallback an automatic alternate link.',
    },
  ],
  download: {
    selectors: [
      {
        selector: 'a[href^="{{ .Config.downloadlink }}"]',
        attribute: 'href',
      },
      {
        selector: 'a[href^="{{ .Config.downloadlink2 }}"]',
        attribute: 'href',
      },
    ],
  },
  search: {
    paths: [
      {
        path: '{{ if .Keywords }}/search/{{ else }}/today/{{ end }}',
        followredirect: true,
      },
    ],
    inputs: {
      $raw: '{{ range .Categories }}s_cat={{.}}&{{end}}',
      search: '{{ .Keywords }}',
    },
    rows: {
      selector: 'div.inner_container > div:has(p:has(a[href^="/torrent/"])):not(:has(span.__cf_email__))',
    },
    fields: {
      category: {
        selector: 'img[src^="/templates/new/images/icons/menu_icon"]',
        attribute: 'src',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      title: {
        selector: 'p:nth-child(1) > a',
        attribute: 'title',
        filters: [{ name: 'replace', args: ['View torrent info : ', ''] }],
      },
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
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
