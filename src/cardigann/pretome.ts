import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'pretome',
  name: 'PreToMe',
  description: 'a general tracker',
  language: 'en-US',
  links: ['https://pretome.info/'],
  caps: {
    categorymappings: [
      { id: '4', cat: 'PC/Games' },
      { id: '6', cat: 'Audio' },
      { id: '7', cat: 'TV' },
      { id: '19', cat: 'Movies' },
      { id: '22', cat: 'PC' },
      { id: '27', cat: 'Books' },
      { id: '31', cat: 'Other' },
      { id: '51', cat: 'XXX' },
    ],
  },
  settings: [
    { name: 'pin', type: 'text', label: 'Pin' },
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
  ],
  login: {
    path: '/takelogin.php',
    method: 'post',
    form: 'form',
    inputs: {
      returnto: '/',
      login_pin: '{{ .Config.pin }}',
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      login: 'Login',
    },
    error: [
      {
        selector: 'font[color="red"]:has(h1)',
        message: { selector: 'font[color="red"]' },
      },
    ],
    test: { path: '/my.php' },
  },
  ratio: { text: '∞' },
  search: {
    path: '/browse.php',
    inputs: {
      $raw: '{{range .Categories}}cat[]={{.}}&{{end}}',
      search: '{{ .Query.Keywords }}',
      tags: null,
      st: 1,
      tf: 'all',
    },
    rows: { selector: 'table > tbody > tr.browse' },
    fields: {
      title: {
        selector: 'a[title][href^="details.php"]',
        attribute: 'title',
      },
      category: {
        selector: 'a[href^="browse.php?cat[]="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat[]' }],
      },
      comments: { selector: 'a[href*="#comments"]', attribute: 'href' },
      download: {
        selector: 'a[href^="download.php"]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(8)' },
      seeders: { selector: 'td:nth-child(10)' },
      leechers: { selector: 'td:nth-child(11)' },
      date: {
        selector: 'td:nth-child(6)',
        filters: [{ name: 'append', args: ' ago' }],
      },
    },
  },
  encoding: 'UTF-8',
};
