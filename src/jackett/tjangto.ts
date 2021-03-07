import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'tjangto',
  name: 'Tjangto',
  description: 'Tjangto (짱토) is a Public KOREAN tracker for Korean media.',
  language: 'ko-KR',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['https://www.jjangtorrent.com/'],
  caps: {
    categorymappings: [
      { id: 'tani', cat: 'TV/Anime', desc: '애니 (Animation)' },
      { id: 'tv', cat: 'TV', desc: 'TV프로 (TV)' },
      { id: 'tmovie', cat: 'Movies', desc: '영화 (Movie)' },
      { id: 'tdrama', cat: 'TV', desc: '드라마 (Drama)' },
      { id: 'tent', cat: 'TV', desc: '예능 (Entertainment)' },
      { id: 'tmusic', cat: 'Audio', desc: '음악 (Music)' },
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
      site: 1,
    },
    rows: { selector: 'section.sch_res_list ul li' },
    fields: {
      category: {
        selector: 'div.sch_tit a',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'bo_table' }],
      },
      title: { selector: 'div.sch_tit a' },
      details: { selector: 'div.sch_tit a', attribute: 'href' },
      download: { selector: 'div.sch_tit a', attribute: 'href' },
      date: {
        selector: 'span.sch_datetime',
        filters: [{ name: 'dateparse', args: '2006-01-02 15:04:05' }],
      },
      size: { text: '512 MB' },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
