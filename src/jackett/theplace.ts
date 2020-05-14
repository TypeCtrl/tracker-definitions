import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'theplace',
  name: 'The Place',
  description: 'Self-improvement E-Learning',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://theplace.click/'],
  legacylinks: ['http://theplace.click/'],
  caps: {
    categorymappings: [
      { id: '46', cat: 'Other', desc: 'Alpha Male Example Clips' },
      { id: '68', cat: 'Other', desc: 'Author: Juggler' },
      { id: '69', cat: 'Other', desc: 'Author: Sean Messenger' },
      { id: '42', cat: 'Other', desc: 'Food / Drink / Cooking' },
      { id: '22', cat: 'Other', desc: 'Seduction: Other' },
      { id: '60', cat: 'Other', desc: 'Author: AMP' },
      { id: '70', cat: 'Other', desc: 'Author: Michael Hall (NLP)' },
      { id: '61', cat: 'Other', desc: 'Author: Style (Neil Strauss)' },
      { id: '47', cat: 'Other', desc: 'Health / Fitness / Massage' },
      { id: '39', cat: 'Other', desc: 'Seduction: Video' },
      { id: '51', cat: 'Other', desc: 'Author: Anthony Robbins' },
      { id: '49', cat: 'Other', desc: 'Author: Mystery' },
      { id: '66', cat: 'Other', desc: 'Author: Vince Kelvin' },
      { id: '43', cat: 'Other', desc: 'Hypnotism / NLP' },
      { id: '14', cat: 'Other', desc: 'Seduction: Written' },
      { id: '50', cat: 'Other', desc: 'Author: Carlos Xuma' },
      { id: '53', cat: 'Other', desc: 'Author: Pickup101' },
      { id: '41', cat: 'Other', desc: 'Dance / Singing / Voice' },
      { id: '44', cat: 'Other', desc: 'Languages / Accents' },
      { id: '40', cat: 'Other', desc: 'Sex' },
      { id: '48', cat: 'Other', desc: 'Author: David DeAngelo' },
      { id: '65', cat: 'Other', desc: 'Author: Richard Bandler (NLP)' },
      { id: '57', cat: 'Other', desc: 'Everything Else' },
      { id: '45', cat: 'Other', desc: 'Magic / Illusions / Tricks' },
      { id: '54', cat: 'Other', desc: 'Author: David Shade' },
      { id: '52', cat: 'Other', desc: 'Author: Ross Jeffries' },
      { id: '58', cat: 'Other', desc: 'Fashion / Clothing / Grooming' },
      { id: '59', cat: 'Other', desc: 'Psychology / Body Language' },
      { id: '71', cat: 'Other', desc: 'Author: Jerry Stocking' },
      { id: '67', cat: 'Other', desc: 'Author: RSD' },
      { id: '64', cat: 'Other', desc: 'Fighting / Martial Arts' },
      { id: '38', cat: 'Other', desc: 'Seduction: Audio' },
    ],
    modes: { search: ['q'] },
  },
  login: {
    path: 'login.php',
    method: 'form',
    form: 'form',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    captcha: { type: 'image', selector: 'img#freecap', input: 'word' },
    error: [{ selector: 'table:contains("Login failed!")' }],
    test: { path: 'main.php' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{range .Categories}}filter_cat[{{.}}]=1&{{end}}',
      search: '{{ .Keywords }}',
    },
    rows: {
      selector: 'table[border="0"] > tbody > tr.ttable:has(a[href^="browse.php?cat="])',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: { filters: null, selector: 'td:nth-child(2) b' },
      download: {
        selector: 'a[href^="download.php/"]',
        attribute: 'href',
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      grabs: {
        selector: 'td:nth-child(8)',
        filters: [
          { name: 'replace', args: ['Never', '0'] },
          { name: 'regexp', args: '(\\d+)' },
        ],
      },
      files: { selector: 'td:nth-child(4)' },
      size: { selector: 'td:nth-child(7)' },
      seeders: { selector: 'td:nth-child(9)' },
      leechers: { selector: 'td:nth-child(10)' },
      date: {
        selector: 'td:nth-child(6)',
        filters: [{ name: 'regexp', args: '(\\d{4}-\\d{2}-\\d{2})' }],
      },
      downloadvolumefactor: {
        case: {
          'font[color="green"]': '0',
          'font[color="blue"]': '0',
          '*': '1',
        },
      },
      uploadvolumefactor: {
        case: { 'font[color="green"]': '0', '*': '1' },
      },
    },
  },
  source: 'jackett',
};
