import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'torrentqq',
  name: 'TorrentQQ',
  description: 'TorrentQQ (토렌트큐큐) is a Public KOREAN tracker for Korean media.',
  language: 'ko-KR',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['https://torrentqq107.com/'],
  legacylinks: [
    'https://torrentqq76.com/',
    'https://torrentqq77.com/',
    'https://torrentqq78.com/',
    'https://torrentqq79.com/',
    'https://torrentqq80.com/',
    'https://torrentqq81.com/',
    'https://torrentqq82.com/',
    'https://torrentqq83.com/',
    'https://torrentqq84.com/',
    'https://torrentqq85.com/',
    'https://torrentqq86.com/',
    'https://torrentqq87.com/',
    'https://torrentqq88.com/',
    'https://torrentqq89.com/',
    'https://torrentqq90.com/',
    'https://torrentqq91.com/',
    'https://torrentqq92.com/',
    'https://torrentqq93.com/',
    'https://torrentqq95.com/',
    'https://torrentqq96.com/',
    'https://torrentqq97.com/',
    'https://torrentqq98.com/',
    'https://torrentqq99.com/',
    'https://torrentqq100.com/',
    'https://torrentqq101.com/',
    'https://torrentqq102.com/',
    'https://torrentqq103.com/',
    'https://torrentqq104.com/',
    'https://torrentqq105.com/',
    'https://torrentqq106.com/',
  ],
  caps: {
    categorymappings: [
      { id: 'adt', cat: 'XXX', desc: '성인 (XXX)' },
      { id: 'ani', cat: 'TV/Anime', desc: '애니 (Anime)' },
      { id: 'etc', cat: 'Other', desc: '기타 (Other)' },
      { id: 'gme', cat: 'Console', desc: '게임 (Games)' },
      { id: 'med', cat: 'TV', desc: '방송 (TV)' },
      { id: 'mov', cat: 'Movies', desc: '영화 (Movie)' },
      { id: 'mus', cat: 'Audio', desc: '음악 (Music)' },
      { id: 'spo', cat: 'TV/Sport', desc: '스포츠 (Sport)' },
      { id: 'utl', cat: 'PC', desc: '유틸 (Software)' },
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
    infohash: {
      hash: {
        selector: 'table.table-bordered > tbody > tr > td > ul > li',
        filters: [{ name: 'regexp', args: '([A-F|a-f|0-9]{40})' }],
      },
      title: {
        selector: 'table.table-bordered > thead > tr > th > strong',
        filters: [{ name: 'trim' }, { name: 'validfilename' }],
      },
    },
  },
  search: {
    paths: [
      {
        path: '{{ if .Keywords }}search?q={{ .Keywords }}{{ else }}torrent/newest.html{{ end }}',
      },
    ],
    rows: {
      selector: 'ul#searchresult > li:has(a[href$=".html"][title])',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: {
        selector: 'a[href$=".html"][title]',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '\\/torrent\\/(\\w{3})\\/' }],
      },
      title: { selector: 'a[href$=".html"][title]' },
      details: {
        selector: 'a[href$=".html"][title]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href$=".html"][title]',
        attribute: 'href',
      },
      date: {
        selector: 'div.wr-date:contains(":")',
        optional: true,
        filters: [{ name: 'dateparse', args: '15:04' }],
      },
      size: {
        selector: 'div.wr-size',
        filters: [{ name: 'append', args: 'B' }],
      },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
