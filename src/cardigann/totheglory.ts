import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'totheglory',
  name: 'ToTheGlory',
  description: 'A chinese tracker',
  language: 'zh-cn',
  encoding: 'UTF-8',
  links: ['https://totheglory.im/'],
  caps: {
    categories: {
      电影DVDRip: 'Movies/SD',
      电影720p: 'Movies/HD',
      '电影1080i/p': 'Movies/HD',
      BluRay原盘: 'Movies/BluRay',
      纪录片720p: 'Movies/HD',
      '纪录片1080i/p': 'Movies/HD',
      纪录片BluRay原盘: 'Movies/BluRay',
      欧美剧720p: 'TV/HD',
      '欧美剧1080i/p': 'TV/HD',
      高清日剧: 'TV/HD',
      '大陆港台剧1080i/p': 'TV/HD',
      大陆港台剧720p: 'TV/HD',
      高清韩剧: 'TV/HD',
      欧美剧包: 'TV/HD',
      日剧包: 'TV/HD',
      韩剧包: 'TV/HD',
      华语剧包: 'TV/HD',
      '(电影原声&amp;Game)OST': 'Audio',
      '无损音乐FLAC&amp;APE': 'Audio/Lossless',
      'MV&amp;演唱会': 'Audio/Video',
      高清体育节目: 'TV/Sport',
      高清动漫: 'TV/Anime',
      韩国综艺: 'TV/HD',
      日本综艺: 'TV/HD',
      高清综艺: 'TV/HD',
      MiniVideo: 'Other',
      补充音轨: 'Audio',
      'iPhone/iPad视频': 'PC/Phone-Other',
    },
  },
  login: {
    path: '/login.php?returnto=',
    method: 'form',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'form#loginform > span.warning' }],
    test: { path: '/my.php' },
  },
  ratio: {
    path: '/my.php',
    selector: 'span.smallfont:has(span#sp_signed)',
    filters: [{ name: 'regexp', args: '分享率 : (.*?)  ' }],
  },
  search: {
    path: '/browse.php',
    inputs: {
      search_field:
        '{{range .Categories}}分类:`{{.}}` {{end}}{{ .Query.Keywords }}',
      c: 'M',
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
      download: {
        selector: 'a.dl_a',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '^(/download.php/\\d+/).*' }],
      },
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
          { name: 'append', args: ' +0800' },
          { name: 'dateparse', args: '2006-01-0215:04:05 -0700' },
        ],
      },
      downloadvolumefactor: {
        case: {
          'img[alt="free"]': '0',
          'img[alt="50%"]': '0.5',
          'img[alt="30%"]': '0.3',
          '*': '1',
        },
      },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
};
