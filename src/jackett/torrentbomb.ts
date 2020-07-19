import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'torrentbomb',
  name: 'TorrentBomb',
  description: 'Torrent Bomb  (토렌트봄) is a Public KOREAN tracker for Korean media.',
  language: 'ko-KR',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://torrent.movie/'],
  legacylinks: ['https://torrent.vet/'],
  caps: {
    categorymappings: [
      {
        id: 'torrent_movie',
        cat: 'Movies',
        desc: '토렌트 한국영화 (Movie)',
      },
      {
        id: 'torrent_movie_eng',
        cat: 'Movies',
        desc: '토렌트 외국영화 (Movie Eng)',
      },
      {
        id: 'torrent_movie_etc',
        cat: 'Movies',
        desc: '토렌트 기타영화 (Movie other)',
      },
      {
        id: 'torrent_korea_drama',
        cat: 'TV',
        desc: '토렌트 한국드라마 (TV drama)',
      },
      {
        id: 'torrent_variety',
        cat: 'TV',
        desc: '토렌트 한국예능 (TV variety)',
      },
      {
        id: 'torrent_docu',
        cat: 'TV/Documentary',
        desc: '토렌트 시사다큐 (TV Docu)',
      },
      {
        id: 'torrent_ani',
        cat: 'TV/Anime',
        desc: '토렌트 애니 (TV anime)',
      },
      {
        id: 'torrent_ani_etc',
        cat: 'TV/Anime',
        desc: '해외토렌트자료실 nyaa,도쿄도서관 (TV Anime other)',
      },
      {
        id: 'torrent_sport',
        cat: 'TV/Sport',
        desc: '토렌트 스포츠 (TV Sport)',
      },
      { id: 'torrent_IDOL', cat: 'TV', desc: '아이돌 영상 (TV IDOL)' },
      {
        id: 'torrent_korea_music',
        cat: 'Audio',
        desc: '토렌트 한국음악 (Music)',
      },
      {
        id: 'torrent_eng_music',
        cat: 'Audio',
        desc: '토렌트 외국음악 (Music Eng)',
      },
      {
        id: 'torrent_top100_music',
        cat: 'Audio',
        desc: '멜론 탑100 (실시간업로드) (Music Top 100)',
      },
      { id: 'torrent_game', cat: 'Console', desc: '토렌트 게임 (Games)' },
      { id: 'torrent_util', cat: 'PC', desc: '토렌트 유틸 (Software)' },
      { id: 'torrent_etc', cat: 'Other', desc: '토렌트 기타 (Other)' },
      { id: 'etc', cat: 'Other', desc: '토렌트 기타 (Other)' },
      {
        id: 'torrent_magnet',
        cat: 'Other',
        desc: '토렌트 마그넷 자료실 (Magnets)',
      },
      {
        id: 'torrent_netflix',
        cat: 'Movies',
        desc: '넷플릭스 (Netflix)',
      },
      { id: 'torrent', cat: 'Other', desc: '토렌트 기타 (Other)' },
      { id: 'send', cat: 'Other', desc: '토렌트 기타 (Other)' },
      { id: 'book', cat: 'Books', desc: '도서류 (Books)' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q'],
      'movie-search': ['q'],
      'music-search': ['q'],
    },
  },
  settings: [],
  download: {
    selector: 'a[href*="magnet:?xt="]',
    attribute: 'href',
    filters: [{ name: 're_replace', args: ['^(.+?\\/magnet.php\\?)(.+?)$', '$2'] }],
  },
  search: {
    paths: [
      { path: 'search.php' },
      { path: 'search.php', inputs: { page: 2 } },
      { path: 'search.php', inputs: { page: 3 } },
      { path: 'search.php', inputs: { page: 4 } },
      { path: 'search.php', inputs: { page: 5 } },
    ],
    inputs: {
      keyword: '{{ if .Keywords }}{{ .Keywords }}{{else}}-{{end}}',
    },
    rows: {
      selector: 'section.sch_res_list > ul > li:has(span.sch_datetime:contains(":"))',
    },
    fields: {
      category: {
        selector: 'a[href^="bbs/./board.php?"]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'bo_table' }],
      },
      title: { selector: 'a[href^="bbs/./board.php?"]' },
      details: {
        selector: 'a[href^="bbs/./board.php?"]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="bbs/./board.php?"]',
        attribute: 'href',
      },
      date: {
        selector: 'span.sch_datetime',
        filters: [{ name: 'dateparse', args: '2006-01-02 15:04:05' }],
      },
      cat: {
        selector: 'a[href^="bbs/./board.php?"]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'bo_table' }],
      },
      size: {
        text:
          '{{ if or eq .Result.cat "torrent_movie" (or eq .Result.cat "torrent_movie_etc" eq .Result.cat "torrent_movie_eng") }}2 GB{{else}}512 MB{{end}}',
      },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
