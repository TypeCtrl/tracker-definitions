import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'acrossthetasman',
  name: 'Across The Tasman',
  description: 'ATT is a torrent site for Rugby and other sports played in Australia',
  language: 'en-EN',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://acrossthetasman.com/'],
  caps: {
    modes: { search: ['q'] },
    categorymappings: [{ id: '1', cat: 'TV/Sport' }],
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'sort',
      type: 'select',
      default: 'date',
      options: {
        date: 'created',
        filename: 'title',
        size: 'size',
        seeders: 'seeders',
      },
    },
    {
      name: 'order',
      type: 'select',
      default: 'desc',
      options: { desc: 'desc', asc: 'asc' },
    },
  ],
  login: {
    method: 'post',
    path: 'login.php',
    inputs: {
      vb_login_username: '{{ .Config.username }}',
      vb_login_password: '{{ .Config.password }}',
      cookieuser: 1,
      do: 'login',
    },
    test: { path: 'torrents.php' },
  },
  search: {
    paths: [
      {
        path: 'torrents.php?sort={{ .Config.sort }}&order={{ .Config.order}}&query={{ .Keywords }}',
      },
    ],
    rows: {
      selector: "table[width='100%'][align='center']:not([class]) > tbody > tr",
    },
    fields: {
      category: { text: 1 },
      date: {
        selector: 'td:nth-child(1)',
        filters: [{ name: 'dateparse', args: 'Jan 02, 2006' }],
      },
      title: {
        selector: 'td:nth-child(4) > span:nth-child(1)',
        filters: [{ name: 're_replace', args: ['[\\s]+Uploaded.*', ''] }],
      },
      download: {
        selector: 'a[href*="attachment.php?attachmentid="]',
        attribute: 'href',
      },
      seeders: { selector: 'td:nth-child(5)' },
      leechers: { selector: 'td:nth-child(6)' },
      grabs: { selector: 'td:nth-child(7)' },
      size: { selector: 'td:nth-child(10)' },
    },
  },
  source: 'jackett',
};
