import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'torrentview',
  name: 'TorrentView',
  description: 'Torrent View  (토렌트뷰) is a Public KOREAN tracker for Korean media.',
  language: 'ko-KR',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['https://torrentview5.net/'],
  legacylinks: [
    'https://torrentview.net/',
    'https://torrentview3.net/',
    'https://torrentview4.net/',
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
    ],
    modes: { search: ['q'] },
  },
  settings: [],
  download: { selector: 'a[href^="magnet:?xt="]', attribute: 'href' },
  search: {
    paths: [{ path: 'bbs/search.php' }],
    inputs: {
      srows: 100,
      gr_id: '',
      sfl: 'wr_subject',
      stx: '{{ if .Keywords }}{{ .Keywords }}{{else}}금요일{{end}}',
      sop: 'and',
    },
    rows: { selector: 'div.search-media > div.media' },
    fields: {
      category: {
        selector: 'div.media-content > a[href^="./board.php"]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'bo_table' }],
      },
      title: {
        selector: 'div.media-content > a[href^="./board.php"] > span',
      },
      details: {
        selector: 'div.media-content > a[href^="./board.php"]',
        attribute: 'href',
      },
      download: {
        selector: 'div.media-content > a[href^="./board.php"]',
        attribute: 'href',
      },
      date: {
        selector: 'time',
        attribute: 'datetime',
        filters: [{ name: 'dateparse', args: '2006-01-02T15:04:05+09:00' }],
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
