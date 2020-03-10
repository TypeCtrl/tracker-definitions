import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'torrentrex',
  name: 'TorrentRex',
  description: 'TorrentRex is a Public search engine.',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://torrentrex.com/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [
      { id: 'anime', cat: 'TV/Anime' },
      { id: 'applications', cat: 'PC' },
      { id: 'ebooks', cat: 'Books' },
      { id: 'adult', cat: 'XXX' },
      { id: 'games', cat: 'PC/Games' },
      { id: 'movies', cat: 'Movies' },
      { id: 'music', cat: 'Audio' },
      { id: 'others', cat: 'Other' },
      { id: 'tv-series', cat: 'TV' },
    ],
  },
  settings: [],
  search: {
    paths: [{ path: 'search.php' }],
    inputs: { q: '{{ if .Keywords }}{{ .Keywords }}{{else}}2020{{end}}' },
    rows: { selector: 'div.r_wr' },
    fields: {
      category: {
        selector: 'a.rslt_h2_a',
        attribute: 'href',
        filters: [{ name: 'split', args: ['/', 1] }],
      },
      title: { selector: 'a.rslt_h2_a' },
      details: { selector: 'a.rslt_h2_a', attribute: 'href' },
      download: { selector: 'a[href*="/torrent/"]', attribute: 'href' },
      magfile: {
        text: '{{ .Result.title }}',
        filters: [{ name: 'validfilename' }],
      },
      magnet: {
        selector: 'a[href*="/torrent/"]',
        attribute: 'href',
        filters: [
          { name: 'split', args: ['/', 4] },
          { name: 'replace', args: ['.torrent', ''] },
          { name: 'prepend', args: 'magnet:?xt=urn:btih:' },
          {
            name: 'append',
            args:
              '&dn={{ .Result.magfile }}.torrent&tr=udp://tracker.coppersurfer.tk:6969&tr=udp://tracker.leechers-paradise.org:6969&tr=udp://tracker.opentrackr.org:1337',
          },
        ],
      },
      date: { text: 'now' },
      size: { text: '500 MB' },
      seeders: {
        selector: 'span:nth-of-type(2)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      leechers: {
        selector: 'span:nth-of-type(3)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
