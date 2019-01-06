import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'cinematik',
  name: 'Cinematik',
  description: 'Tracker for non-hollywood movies.',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://www.cinematik.net'],
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'incldead',
      type: 'select',
      label: 'Status',
      default: 1,
      options: { '0': 'Active', '1': 'Active and Inactive', '2': 'Inactive' },
    },
    { name: 'srchdtls', type: 'checkbox', label: 'Detailed search' },
    {
      name: 'info_results',
      type: 'info',
      label: 'Search results',
      default: 'You can increase the number of search results in your profile.<br />Default is 15.',
    },
  ],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies', desc: 'Comedy' },
      { id: '4', cat: 'Movies', desc: 'Action' },
      { id: '6', cat: 'Movies', desc: 'Drama' },
      { id: '7', cat: 'Movies', desc: 'Documentary' },
      { id: '9', cat: 'Movies', desc: 'Crime' },
      { id: '12', cat: 'Movies', desc: 'Sci-Fi' },
      { id: '17', cat: 'Movies', desc: 'War' },
      { id: '21', cat: 'Movies', desc: 'Silent Films' },
      { id: '23', cat: 'Movies', desc: 'TV-Series' },
      { id: '24', cat: 'Movies', desc: 'Animation' },
      { id: '25', cat: 'Movies', desc: 'Exploitation' },
      { id: '26', cat: 'Movies', desc: 'Experimental' },
      { id: '27', cat: 'Movies', desc: 'Fantasy' },
      { id: '29', cat: 'Movies', desc: 'Short' },
      { id: '30', cat: 'Movies', desc: 'Western' },
      { id: '32', cat: 'Movies', desc: 'Foreign Languages' },
      { id: '33', cat: 'Movies', desc: 'Thriller' },
      { id: '34', cat: 'Movies', desc: 'Opera and Musical' },
    ],
    modes: { search: ['q'] },
  },
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'table:contains("Login failed!")' }],
    test: { path: 'my.php' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Query.Keywords }}',
      incldead: '{{ .Config.incldead }}',
      srchdtls: '{{ if .Config.srchdtls }}1{{ else }}0{{ end }}',
    },
    rows: { selector: 'table[border="1"] tr:not(:first-child)' },
    fields: {
      category: { text: 1 },
      title: { selector: 'td:nth-child(2) a' },
      download: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
        filters: [{ name: 'replace', args: ['details.php?id=', 'download.php?id='] }],
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      grabs: {
        selector: 'td:nth-child(8)',
        filters: [{ name: 'regexp', args: '([\\d,]+)' }],
      },
      files: { selector: 'td:nth-child(5)' },
      size: { selector: 'td:nth-child(7)' },
      seeders: { selector: 'td:nth-child(9)' },
      leechers: { selector: 'td:nth-child(10)' },
      date: { selector: 'td:nth-child(11) div.addedtor' },
      downloadvolumefactor: {
        case: {
          'img[title="Golden Torrent: No Download Stats are Recorded"]': 0,
          'img[title="Silver Torrent: Download Stats are 25% Recorded"]': 0.25,
          'img[title="Platinum Torrent: No Download Stats are Recorded, Upload Stats are Doubled!"]': 0,
          '*': 1,
        },
      },
      uploadvolumefactor: {
        case: {
          'img[title="Platinum Torrent: No Download Stats are Recorded, Upload Stats are Doubled!"]': 2,
          '*': 1,
        },
      },
    },
  },
  source: 'jackett',
};
