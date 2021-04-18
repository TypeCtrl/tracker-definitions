import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'torrentwhiz',
  name: 'TorrentWhiz',
  description: 'TorrentWhiz ( 토렌트위즈) is a Public KOREAN tracker for Korean media.',
  language: 'ko-KR',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['https://torrentwiz24.me/'],
  legacylinks: ['https://torrentwiz22.me/', 'https://torrentwiz23.me/'],
  caps: {
    categorymappings: [
      { id: 'netflix', cat: 'TV', desc: '넷플릭스 (Netflix)' },
      { id: 'tv', cat: 'TV', desc: '시사 (TV)' },
      { id: 'mov', cat: 'Movies', desc: '영화 (Movie)' },
      { id: 'drama', cat: 'TV', desc: '드라마 (Drama)' },
      { id: 'enter', cat: 'TV', desc: '예능 (Entertainment)' },
      { id: 'music', cat: 'Audio', desc: '음원 (Music)' },
      { id: 'util', cat: 'PC', desc: '유틸 (Software)' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q'],
      'movie-search': ['q'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
  },
  settings: [
    {
      name: 'flaresolverr',
      type: 'info',
      label: 'FlareSolverr',
      default:
        'This site may use Cloudflare DDoS Protection, therefore Jackett requires <a href="https://github.com/Jackett/Jackett#configuring-flaresolverr" target="_blank">FlareSolver</a> to access it.',
    },
  ],
  download: {
    selector: 'a[href*="magnet:?xt="]',
    attribute: 'href',
    filters: [
      {
        name: 'append',
        args:
          '&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.si%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Fdenis.stalker.upeer.me%3A6969%2Fannounce',
      },
    ],
  },
  search: {
    paths: [{ path: 'bbs/search.php' }],
    inputs: {
      stx: '{{ if .Keywords }}{{ .Keywords }}{{ else }}{{ .Today.Year }}{{ end }}',
      srows: 100,
      gr_id: '',
      sfl: 'wr_subject',
      sop: 'and',
    },
    rows: { selector: 'div.search-media div.media' },
    fields: {
      category: {
        selector: 'div.media-heading a',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'bo_table' }],
      },
      title: { selector: 'div.media-heading a' },
      details: { selector: 'div.media-heading a', attribute: 'href' },
      download: { selector: 'div.media-heading a', attribute: 'href' },
      poster: { selector: 'div.photo img', attribute: 'src' },
      date: { selector: 'time', attribute: 'datetime' },
      size: { text: '512 MB' },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
