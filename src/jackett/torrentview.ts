import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'torrentview',
  name: 'TorrentView',
  description: 'Torrent View  (토렌트뷰) is a Public KOREAN tracker for Korean media.',
  language: 'ko-KR',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['https://torrentview27.com/'],
  legacylinks: [
    'https://torrentview.net/',
    'https://torrentview3.net/',
    'https://torrentview4.net/',
    'https://torrentview5.net/',
    'https://torrentview6.net/',
    'https://torrentview7.net/',
    'https://torrentview8.net/',
    'https://torrentview9.net/',
    'https://torrentview10.net/',
    'https://torrentview11.net/',
    'https://torrentview12.net/',
    'https://torrentview13.net/',
    'https://torrentview14.net/',
    'https://torrentview15.net/',
    'https://torrentview16.net/',
    'https://torrentview17.net/',
    'https://torrentview18.net/',
    'https://torrentview19.net/',
    'https://torrentview20.net/',
    'https://torrentview21.net/',
    'https://torrentview22.net/',
    'https://torrentview23.net/',
    'https://torrentview24.com/',
    'https://torrentview25.com/',
    'https://torrentview26.com/',
  ],
  caps: {
    categorymappings: [
      { id: 'mov', cat: 'Movies', desc: '토렌트영화 (Movies)' },
      { id: 'enter', cat: 'TV', desc: '예능 (TV Variety Shows)' },
      { id: 'drama', cat: 'TV', desc: '드라마 (TV Dramas)' },
      { id: 'tv', cat: 'TV/Documentary', desc: '시사 (Documentaries)' },
      {
        id: 'netflix',
        cat: 'TV',
        desc: '넷플릭스 (Netflix, Disney+, etc.)',
      },
      { id: 'util', cat: 'PC', desc: '토렌트유틸 (Utilities)' },
      { id: 'ani', cat: 'TV/Anime', desc: '애니 (Anime)' },
      { id: 'music', cat: 'Audio', desc: '음원 (Music)' },
      { id: 'comm_2', cat: 'Other', desc: '커뮤니티 (Community)' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q'],
      'movie-search': ['q'],
      'music-search': ['q'],
    },
  },
  settings: [],
  download: { selector: 'a[href^="magnet:?xt="]', attribute: 'href' },
  search: {
    paths: [{ path: 'bbs/search.php' }],
    inputs: {
      srows: 100,
      gr_id: '',
      sfl: 'wr_subject',
      stx: '{{ if .Keywords }}{{ .Keywords }}{{ else }}금요일{{ end }}',
      sop: 'and',
    },
    rows: { selector: 'div.search-media > div.media' },
    fields: {
      category: {
        selector: 'div.media-content > a[href^="./board.php"]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'bo_table' }],
      },
      title: { selector: 'div.media-heading > a[href^="./board.php"]' },
      details: {
        selector: 'div.media-heading > a[href^="./board.php"]',
        attribute: 'href',
      },
      download: {
        selector: 'div.media-heading > a[href^="./board.php"]',
        attribute: 'href',
      },
      date: {
        selector: 'time',
        attribute: 'datetime',
        filters: [
          { name: 'replace', args: ['T', ' '] },
          { name: 'dateparse', args: '2006-01-02 15:04:05-07:00' },
        ],
      },
      cat: {
        selector: 'div.media-heading > a[href^="./board.php"]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'bo_table' }],
      },
      size: {
        text: '{{ if ne .Result.cat "mov" }}512 MB{{ else }}2 GB{{ end }}',
      },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
