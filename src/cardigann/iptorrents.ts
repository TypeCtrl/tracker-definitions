import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'iptorrents',
  name: 'IPTorrents',
  description: '#1 Private Tracker',
  language: 'en-US',
  links: ['https://iptorrents.com/'],
  settings: [{ name: 'cookie', type: 'text', label: 'Cookie' }],
  caps: {
    categorymappings: [
      { id: '1', cat: 'PC' },
      { id: '4', cat: 'TV/SD' },
      { id: '5', cat: 'TV/HD' },
      { id: '6', cat: 'Movies/SD' },
      { id: '7', cat: 'Movies/SD' },
      { id: '8', cat: 'XXX' },
      { id: '20', cat: 'Movies/HD' },
      { id: '22', cat: 'TV/HD' },
      { id: '23', cat: 'TV/HD' },
      { id: '24', cat: 'TV/SD' },
      { id: '25', cat: 'TV/SD' },
      { id: '26', cat: 'TV/SD' },
      { id: '35', cat: 'Books' },
      { id: '38', cat: 'Movies/Foreign' },
      { id: '48', cat: 'Movies/HD' },
      { id: '54', cat: 'Movies' },
      { id: '55', cat: 'TV/SD' },
      { id: '60', cat: 'TV/Anime' },
      { id: '62', cat: 'Movies/SD' },
      { id: '64', cat: 'Audio/Audiobook' },
      { id: '65', cat: 'TV' },
      { id: '66', cat: 'TV/SD' },
      { id: '68', cat: 'Movies' },
      { id: '69', cat: 'PC/Mac' },
      { id: '72', cat: 'Movies' },
      { id: '73', cat: 'Audio' },
      { id: '75', cat: 'Audio' },
      { id: '77', cat: 'Movies/SD' },
      { id: '78', cat: 'TV/SD' },
      { id: '79', cat: 'TV/SD' },
      { id: '80', cat: 'Audio/Lossless' },
      { id: '81', cat: 'XXX' },
      { id: '82', cat: 'TV/SD' },
      { id: '83', cat: 'TV' },
      { id: '84', cat: 'XXX' },
      { id: '85', cat: 'XXX' },
      { id: '88', cat: 'XXX' },
      { id: '89', cat: 'Movies/SD' },
      { id: '90', cat: 'Movies/SD' },
      { id: '91', cat: 'XXX' },
      { id: '93', cat: 'Audio' },
      { id: '94', cat: 'Books/Comics' },
      { id: '96', cat: 'Movies/SD' },
      { id: '99', cat: 'TV/HD' },
    ],
  },
  login: {
    method: 'cookie',
    inputs: { cookie: '{{ .Config.cookie }}' },
    test: { path: '/settings.php' },
  },
  ratio: { path: '/indexipt.php', selector: '.c_ratio' },
  search: {
    path: '/t',
    inputs: {
      $raw: '{{range .Categories}}{{.}}&{{end}}q={{ .Query.Keywords }}',
    },
    rows: {
      selector: 'table#torrents > tbody > tr:nth-child(n+2):has(td.t_label)',
    },
    fields: {
      category: {
        selector: 'td:nth-child(1) > a',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '^\\?(\\d+)$' }],
      },
      title: { selector: 'td:nth-child(2) > a' },
      details: { selector: 'td:nth-child(2) > a', attribute: 'href' },
      comments: { selector: 'td:nth-child(5) > a', attribute: 'href' },
      download: { selector: 'td:nth-child(4) > a', attribute: 'href' },
      size: { selector: 'td:nth-child(6)' },
      date: {
        selector: 'td:nth-child(2) .t_ctime',
        filters: [{ name: 'split', args: ['|', -1] }, { name: 'split', args: [' by ', 0] }],
      },
      seeders: { selector: 'td:nth-child(8)' },
      leechers: { selector: 'td:nth-child(9)' },
      grabs: { selector: 'td:nth-child(7)' },
      downloadvolumefactor: {
        case: { 'span.t_tag_free_leech': '0', '*': '1' },
      },
      uploadvolumefactor: { text: '1' },
    },
  },
  encoding: 'UTF-8',
  source: 'cardigann',
};
