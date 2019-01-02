import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'hdme',
  name: 'HDME',
  language: 'en-US',
  links: ['https://hdme.eu'],
  caps: {
    categorymappings: [
      { id: '24', cat: 'TV/Anime' },
      { id: '25', cat: 'PC/0day' },
      { id: '26', cat: 'Movies/BluRay' },
      { id: '28', cat: 'Audio/Lossless' },
      { id: '29', cat: 'Other' },
      { id: '30', cat: 'Movies/HD' },
      { id: '31', cat: 'Movies/HD' },
      { id: '32', cat: 'Movies/HD' },
      { id: '33', cat: 'Audio/Video' },
      { id: '34', cat: 'TV' },
      { id: '36', cat: 'TV/Sport' },
      { id: '37', cat: 'TV/HD' },
      { id: '38', cat: 'TV/HD' },
      { id: '39', cat: 'TV/HD' },
      { id: '40', cat: 'XXX' },
      { id: '41', cat: 'Movies/HD' },
      { id: '44', cat: 'Movies/HD' },
      { id: '45', cat: 'Movies/HD' },
      { id: '47', cat: 'Movies/HD' },
      { id: '48', cat: 'Movies/HD' },
      { id: '49', cat: 'PC/Phone-Other' },
      { id: '50', cat: 'Movies/HD' },
      { id: '53', cat: 'Movies/HD' },
      { id: '54', cat: 'Movies/HD' },
      { id: '55', cat: 'Movies/HD' },
      { id: '56', cat: 'Movies/HD' },
      { id: '57', cat: 'Movies' },
    ],
  },
  login: {
    path: '/takelogin.php',
    method: 'post',
    form: 'form',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'td.embedded', message: { selector: 'td.text' } }],
    test: { path: '/my.php' },
  },
  ratio: {
    path: '/my.php',
    selector: 'span.smallfont > font',
    filters: [
      { name: 'regexp', args: 'Ratio:(.+?)Uploaded' },
      { name: 'replace', args: [',', ''] },
    ],
  },
  search: {
    path: '/browse.php',
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      incldead: '1',
      blah: '0',
    },
    rows: {
      selector:
        'table[width="100%"] > tbody > tr:has(td.bottom[background="_images/bg_torrent.jpg"])',
    },
    fields: {
      category: {
        selector: 'td:nth-child(2) a',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: { selector: 'td:nth-child(3) > a', attribute: 'title' },
      comments: { selector: 'td:nth-child(3) > a', attribute: 'href' },
      download: { selector: 'td:nth-child(11) > a', attribute: 'href' },
      size: { selector: 'td:nth-child(6)', remove: 'br' },
      date: {
        selector: 'td:nth-child(3)',
        filters: [{ name: 'regexp', args: 'Added: (.+?)\n' }],
      },
      seeders: { selector: 'td:nth-child(8)' },
      leechers: { selector: 'td:nth-child(9)' },
    },
  },
  encoding: 'UTF-8',
};
