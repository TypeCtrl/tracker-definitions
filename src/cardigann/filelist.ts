import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'filelist',
  name: 'FileList',
  language: 'en-us',
  links: ['http://filelist.ro/'],
  caps: {
    categories: {
      '1': 'Movies/SD',
      '2': 'Movies/Foreign',
      '3': 'Movies/DVD',
      '4': 'Movies/HD',
      '6': 'Movies/HD',
      '7': 'XXX',
      '8': 'PC',
      '9': 'PC/Games',
      '10': 'Console',
      '11': 'Audio',
      '13': 'TV/Sport',
      '14': 'TV',
      '17': 'PC',
      '19': 'Movies/Foreign',
      '20': 'Movies/BluRay',
      '21': 'TV/HD',
      '22': 'PC',
      '23': 'TV/SD',
      '24': 'TV/Anime',
      '25': 'Movies/3D',
      '26': 'Movies/BluRay',
      '27': 'TV/HD',
    },
  },
  login: {
    path: '/login.php',
    form: "form[action='takelogin.php']",
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
  },
  ratio: {
    path: '/my.php',
    selector: '.statusbar div:nth-child(2) div:nth-child(4) span',
  },
  search: {
    path: 'browse.php',
    inputs: { search: '{{ .Keywords }}', cat: 0 },
    rows: { selector: '.torrentrow' },
    fields: {
      category: {
        selector: '.torrenttable:nth-child(1) span a',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: { selector: '.torrenttable:nth-child(2) span a b' },
      details: {
        selector: '.torrenttable:nth-child(2) span a',
        attribute: 'href',
      },
      download: {
        selector: '.torrenttable:nth-child(4) span a',
        attribute: 'href',
      },
      size: {
        selector: '.torrenttable:nth-child(7) span font',
        remove: 'br',
      },
      date: {
        selector: '.torrenttable:nth-child(6) font',
        remove: 'br',
        filters: [{ name: 'dateparse', args: '15:04:0502/01/2006' }],
      },
      seeders: { selector: '.torrenttable:nth-child(9) span' },
      leechers: { selector: '.torrenttable:nth-child(10) span' },
    },
  },
};
