import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'katcrs',
  name: 'KATcrs',
  description: 'KATcrs is a Public KickAssTorrent clone for TV / MOVIES / GENERAL',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['http://kickasstvshow.host/'],
  legacylinks: [
    'https://kickasskatcr.website/',
    'https://kickasskatcr.stream/',
    'https://kickassextratorrent.xyz/',
    'https://kickassextratorrent.website/',
    'https://kickassextratorrent.club/',
    'https://kickasstvshow.xyz/',
  ],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [
      { id: 'movies', cat: 'Movies' },
      { id: 'TV', cat: 'TV' },
      { id: 'Video', cat: 'TV/WEB-DL' },
      { id: 'Anime', cat: 'TV/Anime' },
      { id: 'Music', cat: 'Audio' },
      { id: 'Books', cat: 'Books' },
      { id: 'Documentary', cat: 'TV/Documentary' },
      { id: 'Games', cat: 'Console' },
      { id: 'Apps', cat: 'PC' },
      { id: 'Applications', cat: 'PC' },
      { id: 'Other', cat: 'Other' },
      { id: 'Othero', cat: 'XXX' },
    ],
  },
  settings: [],
  search: {
    paths: [{ path: '{{ if .Keywords }}search/{{ .Keywords }}/{{else}}new/{{end}}' }],
    rows: {
      selector: 'table.data tr.odd',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: {
        selector: 'span.uploader_block strong a',
        attribute: 'href',
        filters: [{ name: 'trim', args: '/' }],
      },
      title: {
        selector: 'td:nth-child(1) div a.cellMainLink',
        attribute: 'title',
      },
      details: {
        selector: 'td:nth-child(1) div a.cellMainLink',
        attribute: 'href',
      },
      download: {
        selector: 'td:nth-child(1) div div a[data-download=""]',
        attribute: 'href',
      },
      magnet: {
        selector: 'td:nth-child(1) div div a[data-nop=""]',
        attribute: 'href',
        filters: [{ name: 'urldecode' }, { name: 'replace', args: [' ⭐', ''] }],
      },
      size: { selector: 'td:nth-child(2)' },
      date: {
        selector: 'td:nth-child(3)',
        filters: [{ name: 'timeago' }],
      },
      seeders: { selector: 'td:nth-child(4)' },
      leechers: { selector: 'td:nth-child(5)' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};
