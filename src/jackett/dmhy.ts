import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'dmhy',
  name: 'dmhy',
  description: 'dmhy is a TAIWANESE Public magnet tracker for ANIME',
  language: 'zh-TW',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://share.dmhy.org/'],
  caps: {
    categorymappings: [
      { id: '2', cat: 'TV/Anime', desc: '動畫 (Anime)' },
      {
        id: '31',
        cat: 'TV/Anime',
        desc: '季度全集 (Quarterly Complete)',
      },
      { id: '3', cat: 'Books/Comics', desc: '漫畫 (Manga)' },
      {
        id: '41',
        cat: 'TV',
        desc: '港台原版 (Hong Kong and Taiwan original)',
      },
      { id: '42', cat: 'TV', desc: '日文原版 (Japanese original)' },
      { id: '4', cat: 'Audio', desc: '音樂 (Music)' },
      { id: '43', cat: 'Audio', desc: '動漫音樂 (Anime Music)' },
      { id: '44', cat: 'Audio', desc: '同人音樂 (Fan Music)' },
      { id: '15', cat: 'Audio', desc: '流行音樂 (Pop Music)' },
      { id: '6', cat: 'TV', desc: '日劇 (Japanese TV drama)' },
      { id: '7', cat: 'TV/Anime', desc: 'RAW' },
      { id: '9', cat: 'PC/Games', desc: '遊戲 (games)' },
      { id: '17', cat: 'PC/Games', desc: '電腦遊戲 (computer games)' },
      { id: '18', cat: 'Console', desc: '電視遊戲 (video games)' },
      { id: '19', cat: 'Console', desc: '掌機遊戲 (console games)' },
      { id: '20', cat: 'Console', desc: '網絡遊戲 (online games)' },
      { id: '21', cat: 'Console', desc: '遊戲周邊 (game periphery)' },
      { id: '12', cat: 'Other/Misc', desc: '特攝 (special photo)' },
      { id: '1', cat: 'Other', desc: '其他 (other)' },
      { id: '2', cat: 'Movies/Other', desc: '動畫 (Anime)' },
      {
        id: '31',
        cat: 'Movies/Other',
        desc: '季度全集 (Quarterly Complete)',
      },
      { id: '7', cat: 'Movies/Other', desc: 'RAW' },
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
  search: {
    paths: [{ path: 'topics/list' }],
    inputs: {
      keyword: '{{ .Keywords }}',
      sort_id: 0,
      order: 'date-desc',
      team_id: 0,
    },
    rows: { selector: 'table tbody tr:has(a[href^="magnet:?"])' },
    fields: {
      category: {
        selector: 'td:nth-child(2) a',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '\\/(\\d+)$' }],
      },
      title: { selector: 'a[href^="/topics/view/"]' },
      details: {
        selector: 'a[href^="/topics/view/"]',
        attribute: 'href',
      },
      download: { selector: 'a[href^="magnet:?"]', attribute: 'href' },
      date: {
        selector: 'td:nth-child(1) span',
        filters: [
          { name: 'append', args: ' +08:00' },
          { name: 'dateparse', args: '2006/01/02 15:04 -07:00' },
        ],
      },
      size: { selector: 'td:nth-child(5)' },
      seeders: { selector: 'td:nth-child(6)' },
      leechers: { selector: 'td:nth-child(7)' },
      grabs: { selector: 'td:nth-child(8)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
