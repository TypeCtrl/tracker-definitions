import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'torrentsir',
  name: 'TorrentSir',
  description: 'TorrentSir (토렌트썰) is a Public KOREAN tracker for Korean media.',
  language: 'ko-KR',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['https://torrentsir31.com/'],
  caps: {
    categorymappings: [
      { id: 'gallery', cat: 'XXX', desc: '+19 (Adult)' },
      { id: 'ani', cat: 'TV', desc: '동영상 (Video)' },
      { id: 'game', cat: 'Console', desc: '기타 (Games)' },
      { id: 'tv', cat: 'TV', desc: '시사/교양 (TV)' },
      { id: 'movie', cat: 'Movies', desc: '영화 (Movie)' },
      { id: 'drama', cat: 'TV', desc: '드라마 (Drama)' },
      { id: 'entertain', cat: 'TV', desc: '예능/오락 (Entertainment)' },
      { id: 'music', cat: 'Audio', desc: '음악 (Music)' },
      { id: 'notice', cat: 'Other', desc: '고객센터 (Notice)' },
      { id: 'child', cat: 'Other', desc: '고객센터 (Child)' },
      { id: 'lecture', cat: 'Books', desc: '도서/강좌 (Books)' },
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
