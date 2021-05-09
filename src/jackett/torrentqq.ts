import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'torrentqq',
  name: 'TorrentQQ',
  description: 'TorrentQQ (토렌트큐큐) is a Public KOREAN tracker for Korean media.',
  language: 'ko-KR',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['https://torrentqq86.com/'],
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
    {
      name: 'downloads',
      type: 'info',
      label: 'About Downloads',
      default:
        'Some download links on this site use a link to a direct file download service, instead of a .torrent link. Jackett does not support direct file downloads, so you will get a page-cannot-be-found error when you try them.',
    },
  ],
  download: {
    selector: 'a[href^="/torrent/download/"]',
    attribute: 'href',
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
