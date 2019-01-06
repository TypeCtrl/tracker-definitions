import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'demonoid',
  name: 'Demonoid',
  description: 'Demonoid',
  language: 'en-US',
  links: ['http://www.dnoid.me/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies' },
      { id: '2', cat: 'Audio' },
      { id: '3', cat: 'TV' },
      { id: '4', cat: 'PC/Games' },
      { id: '5', cat: 'PC' },
      { id: '6', cat: 'Other' },
      { id: '8', cat: 'Other' },
      { id: '9', cat: 'TV/Anime' },
      { id: '10', cat: 'Books' },
      { id: '11', cat: 'Books/Comics' },
      { id: '13', cat: 'Audio/Video' },
      { id: '17', cat: 'Audio/Audiobook' },
    ],
  },
  login: {
    path: '/account_handler.php',
    method: 'post',
    inputs: {
      nickname: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      returnpath: '/',
      Submit: 'Submit',
      withq: 1,
    },
    error: [
      {
        selector: "form[id='bb_code_form'] + tbody font[class='red']:nth-child(1)",
        message: {
          selector: "form[id='bb_code_form'] + tbody font[class='red']:nth-child(1)",
          remove: 'style, b',
        },
      },
    ],
  },
  ratio: {
    path: '/user_control_panel.php',
    selector: 'a.user img',
    attribute: 'title',
    filters: [{ name: 'regexp', args: 'Ratio: (.+)$' }],
  },
  search: {
    path: '/files',
    inputs: {
      query: '{{ .Keywords }}',
      category: 0,
      subcategory: 'All',
      quality: 'All',
      seeded: 2,
      external: 2,
      uid: 0,
    },
    rows: {
      selector:
        '.ctable_content_no_pad > table > tbody > tr:not([align]):not(:nth-last-child(-n+3))',
      after: 1,
      dateheaders: {
        selector: "[align='left']",
        filters: [{ name: 'regexp', args: '^Added (?:on )?(.+?)$' }],
      },
    },
    fields: {
      category: {
        selector: 'td:nth-child(1) > a',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      title: { selector: 'td:nth-child(2) > a' },
      comments: { selector: 'td:nth-child(2) > a', attribute: 'href' },
      download: { selector: 'td:nth-child(5) > a', attribute: 'href' },
      size: { selector: 'td:nth-child(6)' },
      seeders: { selector: 'td:nth-child(9) > font' },
      leechers: { selector: 'td:nth-child(10) > font' },
    },
  },
  encoding: 'UTF-8',
  source: 'cardigann',
};
