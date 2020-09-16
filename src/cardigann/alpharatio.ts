import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'alpharatio',
  name: 'AlphaRatio',
  language: 'en-US',
  links: ['https://alpharatio.cc/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'TV/SD' },
      { id: '2', cat: 'TV/HD' },
      { id: '3', cat: 'TV/SD' },
      { id: '4', cat: 'TV/SD' },
      { id: '5', cat: 'TV/HD' },
      { id: '6', cat: 'Movies/SD' },
      { id: '7', cat: 'Movies/HD' },
      { id: '8', cat: 'Movies/SD' },
      { id: '9', cat: 'Movies/HD' },
      { id: '10', cat: 'XXX' },
      { id: '11', cat: 'Audio/Video' },
      { id: '12', cat: 'PC/Games' },
      { id: '13', cat: 'Console/Xbox' },
      { id: '14', cat: 'Console/PS3' },
      { id: '15', cat: 'Console/Wii' },
      { id: '16', cat: 'PC' },
      { id: '17', cat: 'PC/Mac' },
      { id: '19', cat: 'PC/Phone-Other' },
      { id: '20', cat: 'XXX' },
      { id: '21', cat: 'Books/Ebook' },
      { id: '22', cat: 'Audio/Audiobook' },
      { id: '23', cat: 'Audio' },
      { id: '24', cat: 'Other/Misc' },
    ],
  },
  ratio: { path: '/index.php', selector: '#stats_ratio .stat' },
  login: {
    path: '/login.php',
    form: 'form',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [
      {
        path: '/login.php',
        message: { selector: '.warning:not(.hidden)' },
      },
    ],
    test: { path: '/inbox.php' },
  },
  search: {
    inputs: {
      $raw: 'searchsubmit=1&{{range .Categories}}filter_cat[]={{.}}&{{end}}searchstr={{ .Query.Keywords }}',
    },
    rows: { selector: 'table#torrent_table tr.torrent' },
    fields: {
      category: {
        selector: 'td.cats_col a',
        attribute: 'href',
        filters: [{ name: 'regexp', args: 'filter_cat\\[(\\d+)\\]=1' }],
      },
      title: { selector: 'td.big_info .group_info > a:nth-child(2)' },
      details: {
        selector: 'td.big_info .group_info > a:nth-child(2)',
        attribute: 'href',
      },
      download: {
        selector: 'td.big_info span a:nth-child(1)',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(5)' },
      date: { selector: 'td:nth-child(4) .time', attribute: 'title' },
      seeders: { selector: 'td:nth-child(7)' },
      leechers: { selector: 'td:nth-child(8)' },
    },
    paths: [{ path: '/torrents.php' }],
  },
  encoding: 'UTF-8',
  source: 'cardigann',
};
