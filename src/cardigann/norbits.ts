import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'norbits',
  name: 'Norbits',
  language: 'nb-NO',
  links: ['http://norbits.net/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies' },
      { id: '2', cat: 'TV' },
      { id: '3', cat: 'PC' },
      { id: '4', cat: 'PC/Games' },
      { id: '5', cat: 'Audio' },
      { id: '6', cat: 'Books/Ebook' },
      { id: '7', cat: 'Audio/Audiobook' },
      { id: '8', cat: 'Audio/Video' },
    ],
  },
  ratio: { path: '/index.php', selector: '#ratio' },
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
        selector: ".contentbox b:contains('Feil')",
        message: { selector: "b:contains('Feil')" },
      },
    ],
    test: { path: '/userdetails.php' },
  },
  search: {
    path: '/browse.php',
    inputs: {
      $raw: '{{range .Categories}}main_cat[]={{.}}&{{end}}search={{ .Query.Keywords }}',
    },
    rows: { selector: 'table#torrentTable tbody tr:nth-child(n+2)' },
    fields: {
      category: {
        selector: 'td:nth-child(1) > div',
        case: {
          '.newcat_main_Filmer': 1,
          '.newcat_main_TV': 2,
          '.newcat_main_Programmer': 3,
          '.newcat_main_Spill': 4,
          '.newcat_main_Musikk': 5,
          '.newcat_main_Tidsskrift': 6,
          '.newcat_main_Lydbker': 7,
          '.newcat_main_Musikkvideoer': 8,
        },
      },
      title: {
        selector: 'td:nth-child(2) > a:nth-child(1)',
        attribute: 'title',
      },
      details: {
        selector: 'td:nth-child(2) > a[href^="/details"]',
        attribute: 'href',
      },
      download: {
        selector: 'td:nth-child(2) > a[href^="download"]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(7)' },
      date: { selector: 'td:nth-child(5)' },
      seeders: { selector: 'td:nth-child(10)' },
      leechers: { selector: 'td:nth-child(11)' },
    },
  },
  encoding: 'UTF-8',
  source: 'cardigann',
};
