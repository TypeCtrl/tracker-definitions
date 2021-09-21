import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'acgsou',
  name: 'ACGsou',
  description: 'ACGsou (36DM) is a CHINESE Public torrent tracker for ANIME',
  language: 'zh-CN',
  type: 'public',
  followredirect: true,
  encoding: 'UTF-8',
  links: ['https://www.36dm.club/', 'https://www.36dm.com/'],
  legacylinks: [
    'https://www.acgsou.com/',
    'https://acgsou.com/',
    'http://www.acgsou.com/',
    'http://acgsou.com/',
    'http://www.36dm.club/',
    'https://36dm.com/',
    'http://36dm.com/',
    'http://www.36dm.com/',
  ],
  caps: {
    categorymappings: [
      { id: '2', cat: 'TV/Anime', desc: '动画分类 (Anime)' },
      {
        id: '7',
        cat: 'TV/Anime',
        desc: '新番连载 (Anime New Fan Series)',
      },
      { id: '8', cat: 'TV/Anime', desc: '完整动画 (Anime Collection)' },
      { id: '9', cat: 'Movies/Other', desc: '剧场版 (Anime Movie)' },
      { id: '10', cat: 'TV/Anime', desc: 'DVDRIP (Anime DVDRIP)' },
      { id: '11', cat: 'TV/Anime', desc: 'BDRIP (Anime BDRIP)' },
      { id: '5', cat: 'TV/Anime', desc: 'RAW/ISO' },
      { id: '3', cat: 'Books/Comics', desc: '漫画分类 (Manga)' },
      { id: '12', cat: 'Books/Comics', desc: '连载漫画 (Manga Serial)' },
      {
        id: '13',
        cat: 'Books/Comics',
        desc: '完整漫画 (Manga Complete)',
      },
      {
        id: '14',
        cat: 'Books/Comics',
        desc: '原版漫画 (Manga Original)',
      },
      { id: '4', cat: 'Audio', desc: '动漫音乐 (Anime Music)' },
      { id: '15', cat: 'Audio/Video', desc: '动画MV (Music Video)' },
      { id: '20', cat: 'TV', desc: '日剧 (Drama Japanese)' },
      { id: '21', cat: 'TV', desc: '特摄片 (Drama Special)' },
      { id: '6', cat: 'Other', desc: '其他资源 (Other)' },
      { id: '16', cat: 'Other', desc: '其他动画 (Other Animation)' },
      { id: '17', cat: 'Other', desc: '声优视频 (Voice Video)' },
      { id: '19', cat: 'Other', desc: '动漫资讯 (Anime Information)' },
      { id: '18', cat: 'PC/Games', desc: '游戏 (Games)' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
  },
  settings: [],
  download: {
    selectors: [{ selector: 'a[href^="magnet:?xt="]', attribute: 'href' }],
  },
  search: {
    paths: [
      {
        path: '{{ if .Keywords }}search.php?keyword={{ .Keywords }}{{ else }}1.html{{ end }}',
      },
    ],
    rows: {
      selector: 'table tbody tr[class^="alt"]:has(td:nth-child(3) a)',
    },
    fields: {
      category: {
        selector: 'td:nth-child(2) a',
        attribute: 'href',
        filters: [{ name: 'regexp', args: 'sort-(\\d+)-1.html' }],
      },
      title: { selector: 'td:nth-child(3) a' },
      details: { selector: 'td:nth-child(3) a', attribute: 'href' },
      download: { selector: 'td:nth-child(3) a', attribute: 'href' },
      date: {
        selector: 'td:nth-child(1):not(:contains(":"))',
        optional: true,
        filters: [
          { name: 'append', args: ' +08:00' },
          { name: 'dateparse', args: '2006/01/02 -07:00' },
        ],
      },
      size: { selector: 'td:nth-child(4)' },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
