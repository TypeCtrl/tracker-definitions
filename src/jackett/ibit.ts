import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'ibit',
  name: 'IBit',
  description: 'IBit is a Public Verified Torrent Search Engine',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://ibit.to/', 'https://ibit.uno/', 'https://ibit.am/'],
  legacylinks: ['https://ibit.ws/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [
      { id: 'Movies', cat: 'Movies' },
      { id: 'TV', cat: 'TV' },
      { id: 'Music', cat: 'Audio' },
      { id: 'Games', cat: 'PC/Games' },
      { id: 'Software', cat: 'PC' },
      { id: 'Anime', cat: 'TV/Anime' },
      { id: 'Books', cat: 'Books' },
      { id: 'Other', cat: 'Other' },
    ],
  },
  settings: [
    {
      name: 'sortby',
      type: 'select',
      label: 'Sort requested from site (applies only to Keyword searches)',
      default: 'uploaded_at',
      options: {
        uploaded_at: 'created',
        seeders: 'seeders',
        size: 'size',
      },
    },
    {
      name: 'order',
      type: 'select',
      label: 'Order requested from site',
      default: 'desc',
      options: { desc: 'desc', asc: 'asc' },
    },
  ],
  download: {
    selector: 'script:contains("magnet:?xt=")',
    filters: [
      { name: 'regexp', args: "play\\('(.+?)'" },
      { name: 're_replace', args: ['X-X', ''] },
      { name: 'prepend', args: 'magnet:?xt=urn:btih:' },
      {
        name: 'append',
        args:
          '&dn={{ re_replace .DownloadUri.PathAndQuery "\\/torrent\\/(.+?)\\/" "$1"}}&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.si%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Fdenis.stalker.upeer.me%3A6969%2Fannounce',
      },
    ],
  },
  search: {
    paths: [
      {
        path:
          'torrent-search/{{ if .Keywords }}{{ .Keywords }}{{else}}2019{{end}}/all/{{ .Config.sortby }}:{{ .Config.order }}/1/',
      },
    ],
    rows: {
      selector: 'table.striped > tbody > tr',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      title: { selector: 'a[href^="/torrent/"]' },
      details: { selector: 'a[href^="/torrent/"]', attribute: 'href' },
      download: { selector: 'a[href^="/torrent/"]', attribute: 'href' },
      category: {
        selector: 'a[href^="/torrent-search/"]',
        attribute: 'title',
      },
      date: {
        selector: 'td:nth-child(4)',
        filters: [{ name: 'timeago' }],
      },
      size: {
        selector: 'td:nth-child(5)',
        filters: [{ name: 'replace', args: ['-', '0 B'] }],
      },
      seeders: {
        selector: 'td:nth-child(6)',
        filters: [{ name: 'replace', args: [',', ''] }],
      },
      leechers: {
        selector: 'td:nth-child(7)',
        filters: [{ name: 'replace', args: [',', ''] }],
      },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
