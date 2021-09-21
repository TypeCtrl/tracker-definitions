import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'badasstorrents',
  name: 'Badass Torrents',
  description: 'Badass Torrents is a Public torrent site for MOVIES / TV / GENERAL',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://badasstorrents.com/', 'https://badasstorrents.nocensor.work/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q', 'album', 'artist'],
      'book-search': ['q'],
    },
    categorymappings: [
      { id: 'Anime', cat: 'TV/Anime' },
      { id: 'Apps', cat: 'PC' },
      { id: 'Books', cat: 'Books' },
      { id: 'Games', cat: 'PC/Games' },
      { id: 'Movies', cat: 'Movies' },
      { id: 'Music', cat: 'Audio' },
      { id: 'Other', cat: 'Other' },
      { id: 'TV', cat: 'TV' },
      { id: 'XXX', cat: 'XXX' },
    ],
  },
  settings: [
    {
      name: 'downloadlink',
      type: 'select',
      label: 'Download link',
      default: 'magnet:?xt=',
      options: { '/download/': '.torrent', 'magnet:?xt=': 'magnet' },
    },
    {
      name: 'downloadlink2',
      type: 'select',
      label: 'Download link (fallback)',
      default: '/download/',
      options: { '/download/': '.torrent', 'magnet:?xt=': 'magnet' },
    },
    {
      name: 'info_download',
      type: 'info',
      label: 'About the Download links',
      default:
        'You can optionally set as a fallback an automatic alternate link, so if the .torrent download link fails your download will still be successful.',
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'date',
      options: {
        date: 'created',
        seeds: 'seeders',
        size: 'size',
        title: 'title',
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
  download: {
    selectors: [
      {
        selector: 'a[href*="{{ .Config.downloadlink }}"]',
        attribute: 'href',
      },
      {
        selector: 'a[href*="{{ .Config.downloadlink2 }}"]',
        attribute: 'href',
      },
    ],
  },
  search: {
    paths: [
      {
        path: 'torrents/{{ if .Keywords }}search/{{ .Keywords }}/{{ else }}{{ end }}{{ .Config.sort }}/{{ .Config.type }}',
      },
      {
        path: 'torrents/{{ if .Keywords }}search/{{ .Keywords }}/{{ else }}{{ end }}26/{{ .Config.sort }}/{{ .Config.type }}',
      },
      {
        path: 'torrents/{{ if .Keywords }}search/{{ .Keywords }}/{{ else }}{{ end }}51/{{ .Config.sort }}/{{ .Config.type }}',
      },
      {
        path: 'torrents/{{ if .Keywords }}search/{{ .Keywords }}/{{ else }}{{ end }}76/{{ .Config.sort }}/{{ .Config.type }}',
      },
    ],
    rows: {
      selector: 'table.table-hover > tbody > tr:has(a[href*="/torrent/"])',
    },
    fields: {
      category: { selector: 'a[href*="/cat/"]' },
      title: { selector: 'a[href*="/torrent/"]' },
      details: { selector: 'a[href*="/torrent/"]', attribute: 'href' },
      download: { selector: 'a[href*="/torrent/"]', attribute: 'href' },
      date: {
        selector: 'td:nth-child(4)',
        filters: [{ name: 'timeago' }],
      },
      size: { selector: 'td:nth-child(5)' },
      seeders: { selector: 'td:nth-child(6)' },
      leechers: { selector: 'td:nth-child(7)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
