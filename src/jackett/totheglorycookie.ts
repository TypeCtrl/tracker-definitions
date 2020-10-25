import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'totheglorycookie',
  name: 'ToTheGloryCookie',
  description: 'this is an alternate to the ToTheGlory indexer using the cookie method for access',
  language: 'zh-CN',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://totheglory.im/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
    categorymappings: [
      { id: '电影DVDRip', cat: 'Movies/SD' },
      { id: '电影720p', cat: 'Movies/HD' },
      { id: '电影1080i/p', cat: 'Movies/HD' },
      { id: 'BluRay原盘', cat: 'Movies/BluRay' },
      { id: '影视2160p', cat: 'Movies/UHD' },
      { id: 'UHD原盘', cat: 'Movies/UHD' },
      { id: '纪录片720p', cat: 'Movies/HD' },
      { id: '纪录片1080i/p', cat: 'Movies/HD' },
      { id: '纪录片BluRay原盘', cat: 'Movies/BluRay' },
      { id: '欧美剧720p', cat: 'TV/HD' },
      { id: '欧美剧1080i/p', cat: 'TV/HD' },
      { id: '高清日剧', cat: 'TV/HD' },
      { id: '大陆港台剧1080i/p', cat: 'TV/HD' },
      { id: '大陆港台剧720p', cat: 'TV/HD' },
      { id: '高清韩剧', cat: 'TV/HD' },
      { id: '欧美剧包', cat: 'TV/HD' },
      { id: '日剧包', cat: 'TV/HD' },
      { id: '韩剧包', cat: 'TV/HD' },
      { id: '华语剧包', cat: 'TV/HD' },
      { id: '(电影原声&Game)OST', cat: 'Audio' },
      { id: '无损音乐FLAC&APE', cat: 'Audio/Lossless' },
      { id: 'MV&amp;演唱会', cat: 'Audio/Video' },
      { id: '高清体育节目', cat: 'TV/Sport' },
      { id: '高清动漫', cat: 'TV/Anime' },
      { id: '韩国综艺', cat: 'TV/HD' },
      { id: '高清综艺', cat: 'TV/HD' },
      { id: '日本综艺', cat: 'TV/HD' },
      { id: 'MiniVideo', cat: 'Other' },
      { id: '补充音轨', cat: 'Audio' },
      { id: 'iPhone/iPad视频', cat: 'PC/Phone-Other' },
      { id: 'PC', cat: 'PC/Games' },
      { id: 'MAC', cat: 'PC/Mac' },
      { id: 'XBOX360', cat: 'Console/Xbox360' },
      { id: 'XBOX1', cat: 'Console/Xbox' },
      { id: 'XBLA', cat: 'Console/Xbox' },
      { id: 'XBOX+to+XBOX360', cat: 'Console/Xbox' },
      { id: 'PS2', cat: 'Console/Other' },
      { id: 'PSP', cat: 'Console/PSP' },
      { id: 'PS4', cat: 'Console/PS4' },
      { id: 'PS3', cat: 'Console/PS3' },
      { id: 'PSV', cat: 'Console/PS Vita' },
      { id: 'WIIU', cat: 'Console/WiiU' },
      { id: 'WII', cat: 'Console/Wii' },
      { id: 'SWITCH', cat: 'Console/Other' },
      { id: 'NDS', cat: 'Console/NDS' },
      { id: 'NGC', cat: 'Console/Other' },
      { id: 'PS3兼容高清', cat: 'Console/PS3' },
      { id: 'PSP兼容高清&标清', cat: 'Console/PSP' },
      { id: 'XBOX360兼容高清', cat: 'Console/Xbox360' },
      { id: 'Game+Video', cat: 'Console/Other' },
      { id: 'APPZ', cat: 'PC' },
      { id: 'Game+Ebook', cat: 'Books/Ebook' },
      { id: 'Ebook', cat: 'Books/Ebook' },
      { id: 'iPhone/iPad游戏', cat: 'PC/Phone-IOS' },
      { id: 'iPad书籍', cat: 'Books/Ebook' },
      { id: 'iPhone/iPad软件', cat: 'PC/Phone-IOS' },
    ],
  },
  settings: [
    { name: 'cookie', type: 'text', label: 'Cookie' },
    {
      name: 'info',
      type: 'info',
      label: 'How to get the Cookie',
      default:
        "<ol><li>Login to this tracker with your browser<li>Open the <b>DevTools</b> panel by pressing <b>F12</b><li>Select the <b>Network</b> tab<li>Click on the <b>Doc</b> button (Chrome Browser) or <b>HTML</b> button (FireFox)<li>Refresh the page by pressing <b>F5</b><li>Click on the first row entry<li>Select the <b>Headers</b> tab on the Right panel<li>Find <b>'cookie:'</b> in the <b>Request Headers</b> section<li><b>Select</b> and <b>Copy</b> the whole cookie string <i>(everything after 'cookie: ')</i> and <b>Paste</b> here.</ol>",
    },
  ],
  login: {
    method: 'cookie',
    inputs: { cookie: '{{ .Config.cookie }}' },
    test: { path: 'my.php' },
  },
  search: {
    paths: [
      { path: 'browse.php', inputs: { c: 'M' } },
      {
        path: 'browse.php',
        categories: [
          1000,
          1010,
          1020,
          1030,
          1040,
          1050,
          1060,
          1070,
          1080,
          1090,
          1100,
          1110,
          1120,
          1130,
          1140,
          1150,
          1160,
          1170,
          1180,
          4000,
          4010,
          4020,
          4030,
          4040,
          4050,
          4060,
          4070,
          7000,
          7010,
          7020,
          7030,
          7040,
          7050,
          7060,
        ],
        inputs: { c: 'G' },
      },
    ],
    inputs: {
      search_field:
        '{{ range .Categories }}分类:`{{.}}` {{end}}{{ if .Query.IMDBID }}imdb{{ .Query.IMDBIDShort }}{{ else }}{{ .Keywords }}{{ end }}',
    },
    rows: { selector: 'table#torrent_table > tbody > tr[id]' },
    fields: {
      description: { selector: 'div.name_left > a > b' },
      title: { selector: 'div.name_left > a > b', remove: 'span' },
      category: {
        selector: 'tr[id] td:nth-child(1) > a',
        attribute: 'href',
        filters: [
          { name: 'querystring', args: 'search_field' },
          { name: 'replace', args: ['category:', ''] },
          { name: 'trim', args: '"' },
        ],
      },
      details: { selector: 'div.name_left > a', attribute: 'href' },
      download: { selector: 'a.dl_a', attribute: 'href' },
      files: { selector: 'td:nth-child(3)' },
      size: { selector: 'td:nth-child(7)' },
      seeders: {
        selector: 'td:nth-child(9)',
        filters: [{ name: 'split', args: ['/', 0] }],
      },
      leechers: {
        selector: 'td:nth-child(9)',
        filters: [
          { name: 'split', args: ['/', 1] },
          { name: 'replace', args: ['\n', ''] },
        ],
      },
      grabs: {
        selector: 'td:nth-child(8)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      date: {
        selector: 'td:nth-child(5)',
        filters: [
          { name: 'append', args: ' +08:00' },
          { name: 'dateparse', args: '2006-01-0215:04:05 -07:00' },
        ],
      },
      imdb: {
        optional: true,
        selector: 'span.imdb_rate > a',
        attribute: 'href',
      },
      downloadvolumefactor: {
        case: {
          'img[alt="free"]': 0,
          'img[alt="50%"]': 0.5,
          'img[alt="30%"]': 0.3,
          '*': 1,
        },
      },
      uploadvolumefactor: { case: { 'img[alt="200%"]': 2, '*': 1 } },
      minimumratio: { case: { 'img[title="Hit and Run"]': 1, '*': 0 } },
      minimumseedtime: {
        case: { 'img[title="Hit and Run"]': 216000, '*': 0 },
      },
    },
  },
  source: 'jackett',
};
