import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'torrentwal',
  name: 'TorrentWal (토렌트왈)',
  description: 'Torrent Wal is a free Korean tracker for Korean media.',
  language: 'ko-KR',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://torrentwal.com/'],
  legacylinks: ['https://torrentwal1.com/'],
  caps: {
    categorymappings: [
      { id: 'torrent_movie', cat: 'Movies', desc: '토렌트영화 (Movies)' },
      {
        id: 'torrent_bluray',
        cat: 'Movies/BluRay',
        desc: '토렌트영화 (Movies)',
      },
      {
        id: 'torrent_variety',
        cat: 'TV',
        desc: 'TV예능 (TV Variety Shows)',
      },
      { id: 'torrent_tv', cat: 'TV', desc: 'TV드라마 (TV Dramas)' },
      {
        id: 'torrent_docu',
        cat: 'TV/Documentary',
        desc: '다큐/시사 (Documentaries)',
      },
      { id: 'torrent_sports', cat: 'TV/Sport', desc: '스포츠 (Sports)' },
      { id: 'torrent_util', cat: 'PC', desc: '토렌트유틸 (Utilities)' },
      { id: 'torrent_ani', cat: 'TV/Anime', desc: '애니메이션 (Anime)' },
      { id: 'torrent_song', cat: 'Audio', desc: '해외음원 (Music)' },
      { id: 'torrent_game', cat: 'PC/Games', desc: '토렌트게임 (Games)' },
      {
        id: 'torrent_mid',
        cat: 'TV/Foreign',
        desc: '해외TV (Foreign TV)"',
      },
      {
        id: 'torrent_child',
        cat: 'TV',
        desc: "유아/어린이 (Children's)",
      },
      { id: 'torrent_etc', cat: 'Other', desc: '토렌트 기타 (Other)' },
      {
        id: 'torrent_iphone',
        cat: 'PC/Phone-Other',
        desc: '휴대기기 (Phone Apps)',
      },
      { id: 'torrent_book', cat: 'Books', desc: '토렌트도서 (Books)' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  settings: [],
  search: {
    paths: [
      {
        path: '{{ if .Keywords }}bbs/s-1-{{ .Keywords }}{{else}}bbs/s-1-유희열{{end}}',
      },
    ],
    rows: { selector: 'tr.bg1:has(a[href^="/bbs/bc.php?bo_table="])' },
    fields: {
      magnet: {
        selector: 'td:nth-child(1) a[href^="javascript:"]',
        attribute: 'href',
        filters: [
          { name: 'replace', args: ["javascript:Mag_dn('", ''] },
          { name: 'replace', args: ["')", ''] },
          { name: 'prepend', args: 'magnet:?xt=urn:btih:' },
        ],
      },
      seeders: { text: 1 },
      leechers: { text: 1 },
      category: {
        selector: 'td:nth-child(2) a[href^="/bbs/bc.php?bo_table="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'bo_table' }],
      },
      title: { selector: 'td:nth-child(2) a:last-of-type' },
      details: {
        selector: 'td:nth-child(2) a:last-of-type',
        attribute: 'href',
      },
      date: {
        selector: 'td:nth-child(3)',
        filters: [{ name: 'dateparse', args: '01-02' }],
      },
      size: {
        selector: 'td:nth-child(4):not(:contains(".M"))',
        optional: true,
        filters: [{ name: 'append', args: 'B' }],
      },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
