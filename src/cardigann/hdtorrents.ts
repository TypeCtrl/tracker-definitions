import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'hdtorrents',
  name: 'HD-Torrents',
  language: 'en-US',
  links: ['https://hd-torrents.org/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies/BluRay' },
      { id: '2', cat: 'Movies' },
      { id: '3', cat: 'Movies/HD' },
      { id: '4', cat: 'Movies/SD' },
      { id: '5', cat: 'Movies/HD' },
      { id: '30', cat: 'TV/HD' },
      { id: '38', cat: 'TV/SD' },
      { id: '44', cat: 'Audio' },
      { id: '45', cat: 'Audio' },
      { id: '47', cat: 'XXX' },
      { id: '48', cat: 'XXX' },
      { id: '57', cat: 'Audio' },
      { id: '58', cat: 'XXX/DVD' },
      { id: '59', cat: 'TV/HD' },
      { id: '60', cat: 'TV/Other' },
      { id: '61', cat: 'Audio' },
      { id: '62', cat: 'Audio' },
      { id: '63', cat: 'Movies/Other' },
      { id: '64', cat: 'Movies/HD' },
      { id: '65', cat: 'TV/HD' },
      { id: '66', cat: 'Audio' },
      { id: '67', cat: 'XXX' },
    ],
  },
  login: {
    path: '/login.php',
    form: 'form',
    inputs: {
      uid: '{{ .Config.username }}',
      pwd: '{{ .Config.password }}',
    },
    error: [{ selector: "table.cblocks font[color='#FF0000']" }],
    test: { path: '/wishlist.php' },
  },
  ratio: {
    path: '/',
    selector: '.navus td:nth-child(3)',
    filters: [{ name: 'regexp', args: 'Ratio: (.+)FAQ' }],
  },
  search: {
    path: 'torrents.php',
    inputs: {
      $raw: '{{range .Categories}}category[]={{.}}&{{end}}',
      search: '{{ .Keywords }}',
      active: 1,
    },
    rows: {
      selector: 'table.mainblockcontenttt tr:nth-child(n+3):has(td.mainblockcontent)',
      remove: 'tr:has(td.listas)',
    },
    fields: {
      category: {
        selector: 'td:nth-child(1) > a:nth-child(1)',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      title: { selector: 'td:nth-child(3) b a' },
      details: { selector: 'td:nth-child(3) b a', attribute: 'href' },
      download: { selector: 'td:nth-child(5) a', attribute: 'href' },
      size: { selector: 'td:nth-child(8)' },
      date: {
        selector: 'td:nth-child(7)',
        filters: [{ name: 'dateparse', args: '15:04:05  02/01/2006' }],
      },
      seeders: { selector: 'td:nth-child(10) b' },
      leechers: { selector: 'td:nth-child(11) b' },
    },
  },
  encoding: 'UTF-8',
};
