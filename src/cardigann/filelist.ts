import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'filelist',
  name: 'FileList',
  language: 'en-US',
  links: ['http://filelist.ro/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies/SD' },
      { id: '2', cat: 'Movies/Foreign' },
      { id: '3', cat: 'Movies/DVD' },
      { id: '4', cat: 'Movies/HD' },
      { id: '6', cat: 'Movies/HD' },
      { id: '7', cat: 'XXX' },
      { id: '8', cat: 'PC' },
      { id: '9', cat: 'PC/Games' },
      { id: '10', cat: 'Console' },
      { id: '11', cat: 'Audio' },
      { id: '13', cat: 'TV/Sport' },
      { id: '14', cat: 'TV' },
      { id: '17', cat: 'PC' },
      { id: '19', cat: 'Movies/Foreign' },
      { id: '20', cat: 'Movies/BluRay' },
      { id: '21', cat: 'TV/HD' },
      { id: '22', cat: 'PC' },
      { id: '23', cat: 'TV/SD' },
      { id: '24', cat: 'TV/Anime' },
      { id: '25', cat: 'Movies/3D' },
      { id: '26', cat: 'Movies/BluRay' },
      { id: '27', cat: 'TV/HD' },
    ],
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
  encoding: 'UTF-8',
  source: 'cardigann',
};
