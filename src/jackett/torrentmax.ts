import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'torrentmax',
  name: 'TorrentMax',
  description: 'TorrentMax (토렌트맥스) is a Public KOREAN tracker for Korean media.',
  language: 'ko-KR',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['https://torrentmax15.com/'],
  caps: {
    categorymappings: [
      { id: 'PHOTO', cat: 'XXX', desc: '후방주의 (Adult)' },
      { id: '19', cat: 'XXX', desc: '후방주의2 (Adult)' },
      { id: 'GIRL', cat: 'XXX', desc: '걸그룹 (Adult)' },
      { id: 'CAM', cat: 'XXX', desc: '직캠 (Adult)' },
      { id: 'ANIMATION', cat: 'TV/Anime', desc: '애니 (Animation)' },
      { id: 'GAME', cat: 'Console', desc: '게임 (Games)' },
      { id: 'MOVIE_EN', cat: 'Movies/Foreign', desc: '영화 (Movie EN)' },
      { id: 'MOVIE', cat: 'Movies', desc: '한국영화 (Movie)' },
      {
        id: 'MOVIE_4K',
        cat: 'Movies/UHD',
        desc: '고화질영화 (Movie 4K)',
      },
      { id: 'DRAMA', cat: 'TV', desc: '드라마 (Drama)' },
      { id: 'DRAMA_EN', cat: 'TV/Foreign', desc: '넷플릭스 (Drama EN)' },
      { id: 'DOCU', cat: 'TV/Documentary', desc: '다큐 (Documentary)' },
      { id: 'VARIETY', cat: 'TV', desc: '예능 (Variety)' },
      { id: 'MUSIC', cat: 'Audio', desc: '한국음악 (Music)' },
      {
        id: 'MUSIK',
        cat: 'Audio/Foreign',
        desc: '외국음악 (Music Foreign)',
      },
      { id: 'notice', cat: 'Other', desc: '공지사항 (Notice)' },
      { id: 'humor', cat: 'Other', desc: '유머 (Humor)' },
      { id: 'MOBILE', cat: 'PC/Mobile-Other', desc: '모바일 (Mobile)' },
      { id: 'UTIL', cat: 'PC', desc: '유틸 (Software)' },
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
    selectors: [
      {
        selector: 'a[href*="magnet:?xt="]',
        attribute: 'href',
        filters: [
          {
            name: 'append',
            args: '&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.si%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Fdenis.stalker.upeer.me%3A6969%2Fannounce',
          },
        ],
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
        filters: [{ name: 'regexp', args: '\\/max\\/(.+?)\\/' }],
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
