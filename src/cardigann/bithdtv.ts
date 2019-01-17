import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'bithdtv',
  name: 'BIT-HDTV',
  description: 'Home of High Definition TV',
  language: 'en-US',
  links: ['https://www.bit-hdtv.com/'],
  settings: [{ name: 'cookie', type: 'text', label: 'Cookie' }],
  caps: {
    categorymappings: [
      { id: '1', cat: 'TV/Anime' },
      { id: '2', cat: 'Movies/BluRay' },
      { id: '4', cat: 'TV/Documentary' },
      { id: '5', cat: 'TV/Sport' },
      { id: '6', cat: 'Audio' },
      { id: '7', cat: 'Movies' },
      { id: '8', cat: 'Audio/Video' },
      { id: '10', cat: 'TV' },
      { id: '11', cat: 'XXX' },
      { id: '12', cat: 'TV' },
    ],
  },
  login: {
    method: 'cookie',
    inputs: { cookie: '{{ .Config.cookie }}' },
    test: { path: '/my.php' },
  },
  ratio: {
    path: '/index.php',
    selector: "#statusbar font:contains('Ratio') + font",
  },
  search: {
    inputs: { search: '{{ .Keywords }}', cat: 0 },
    rows: { selector: "table[width='800'] tbody tr:not(tr:nth-child(1))" },
    fields: {
      category: {
        selector: 'td:nth-child(2) a',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: { selector: 'td:nth-child(3) a', attribute: 'title' },
      details: { selector: 'td:nth-child(3) a', attribute: 'href' },
      download: { selector: 'td:nth-child(1) p a', attribute: 'href' },
      size: { selector: 'td:nth-child(7)', remove: 'br' },
      date: { selector: 'td:nth-child(6)' },
      seeders: { selector: 'td:nth-child(9)' },
      leechers: { selector: 'td:nth-child(10)' },
    },
    paths: [{ path: 'torrents.php' }],
  },
  encoding: 'UTF-8',
  source: 'cardigann',
};
