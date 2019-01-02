import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'xiteme',
  name: 'x-ite.me',
  description: 'Tracker for LGBTQ movies, TV, books, magazines, anime, PC and XXX.',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://x-ite.me'],
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
  ],
  caps: {
    categorymappings: [
      { id: '6700', cat: 'TV/Anime', desc: 'Animations - Adult' },
      { id: '6330', cat: 'TV/Anime', desc: 'Animations - Futanari' },
      { id: '6320', cat: 'TV/Anime', desc: 'Animations - Yaoi' },
      { id: '9700', cat: 'Books/Comics', desc: 'Comics & Manga - Adult' },
      { id: '5000', cat: 'XXX', desc: 'Fetish - All' },
      { id: '7700', cat: 'XXX/Imageset', desc: 'Images - Fetish' },
      { id: '1050', cat: 'Movies', desc: 'Movies - Biography' },
      { id: '1150', cat: 'Movies', desc: 'Movies - Crime' },
      { id: '1250', cat: 'Movies', desc: 'Movies - Experimental' },
      { id: '1350', cat: 'Movies', desc: 'Movies - History' },
      { id: '1450', cat: 'Movies', desc: 'Movies - Mystery' },
      { id: '1530', cat: 'Movies', desc: 'Movies - Sport' },
      { id: '1630', cat: 'Movies', desc: 'Movies - Western' },
      { id: '6100', cat: 'TV/Anime', desc: 'Animations - Anime' },
      { id: '6300', cat: 'TV/Anime', desc: 'Animations - Hentai' },
      { id: '6310', cat: 'TV/Anime', desc: 'Animations - Yuri' },
      {
        id: '9600',
        cat: 'Books/Comics',
        desc: 'Comics & Manga - Cartoon',
      },
      { id: '13000', cat: 'PC/Games', desc: 'Games - All' },
      { id: '7900', cat: 'XXX/Imageset', desc: 'Images - Other' },
      { id: '1070', cat: 'Movies', desc: 'Movies - Bollywood' },
      { id: '1170', cat: 'Movies', desc: 'Movies - Documentary' },
      { id: '1270', cat: 'Movies', desc: 'Movies - Family' },
      { id: '1370', cat: 'Movies', desc: 'Movies - Horror' },
      { id: '1470', cat: 'Movies', desc: 'Movies - News' },
      { id: '1550', cat: 'Movies', desc: 'Movies - Suspense' },
      { id: '3000', cat: 'XXX', desc: 'Softcore - All' },
      { id: '6340', cat: 'TV/Anime', desc: 'Animations - Bara' },
      { id: '6900', cat: 'TV/Anime', desc: 'Animations - Other' },
      { id: '14000', cat: 'PC', desc: 'Applications - All' },
      {
        id: '9200',
        cat: 'Books/Comics',
        desc: 'Comics & Manga - Hentai',
      },
      { id: '4000', cat: 'XXX', desc: 'Hardcore - All' },
      { id: '8000', cat: 'Books/Magazines', desc: 'Magazines - All' },
      { id: '1090', cat: 'Movies', desc: 'Movies - Comedy' },
      { id: '1190', cat: 'Movies', desc: 'Movies - Drama' },
      { id: '1290', cat: 'Movies', desc: 'Movies - Fantasy' },
      { id: '1390', cat: 'Movies', desc: 'Movies - Indie' },
      { id: '1900', cat: 'Movies', desc: 'Movies - Other' },
      { id: '1570', cat: 'Movies', desc: 'Movies - Theater' },
      { id: '12000', cat: 'Other', desc: 'Subtitles - All' },
      { id: '6110', cat: 'TV/Anime', desc: 'Animations - Ecchi' },
      { id: '6120', cat: 'TV/Anime', desc: 'Animations - Shoujo Ai' },
      { id: '11000', cat: 'Audio/Audiobook', desc: 'Audio Books - All' },
      { id: '9100', cat: 'Books/Comics', desc: 'Comics & Manga - Manga' },
      { id: '7500', cat: 'XXX/Imageset', desc: 'Images - Adult' },
      { id: '1010', cat: 'Movies', desc: 'Movies - Action' },
      { id: '1110', cat: 'Movies', desc: 'Movies - Coming of Age' },
      { id: '1210', cat: 'Movies', desc: 'Movies - Eastern' },
      { id: '1310', cat: 'Movies', desc: 'Movies - Film Noir' },
      { id: '1410', cat: 'Movies', desc: 'Movies - Music' },
      { id: '1490', cat: 'Movies', desc: 'Movies - Romance' },
      { id: '1590', cat: 'Movies', desc: 'Movies - Thriller' },
      { id: '6350', cat: 'TV/Anime', desc: 'Animations - Furry' },
      { id: '6330', cat: 'TV/Anime', desc: 'Animations - Shounen Ai' },
      { id: '10000', cat: 'Books', desc: 'Books - All' },
      { id: '9900', cat: 'Books/Comics', desc: 'Comics & Manga - Other' },
      { id: '7300', cat: 'XXX/Imageset', desc: 'Images - Erotic' },
      { id: '1030', cat: 'Movies', desc: 'Movies - Adventure' },
      { id: '1130', cat: 'Movies', desc: 'Movies - Coming Out' },
      { id: '1230', cat: 'Movies', desc: 'Movies - Entertainment' },
      { id: '1330', cat: 'Movies', desc: 'Movies - Historical' },
      { id: '1430', cat: 'Movies', desc: 'Movies - Musical' },
      { id: '1510', cat: 'Movies', desc: 'Movies - Sci-Fi' },
      { id: '1610', cat: 'Movies', desc: 'Movies - War' },
    ],
    modes: { search: ['q'] },
  },
  login: {
    method: 'post',
    path: 'account-login.php',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [
      {
        selector:
          '.myF-content > center:nth-child(1) > b:contains("The specified username or password was incorrect.")',
      },
    ],
    test: { path: 'account.php' },
  },
  search: {
    paths: [{ path: 'torrents-search.php', method: 'get' }],
    keywordsfilters: [{ name: 're_replace', args: ['(?<=^| )(?!-|\\+)[^ ]+(?= |$)', '+$&'] }],
    inputs: {
      $raw: '{{range .Categories}}&c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      incldead: '{{ .Config.incldead }}',
    },
    rows: { selector: 'tr.t-row' },
    fields: {
      title: {
        selector: 'td:nth-child(2) > a:nth-child(1) > b:nth-child(1)',
      },
      category: {
        selector: 'a[href^="torrents.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      details: {
        selector: 'a[href^="torrents-details.php?id="]',
        attribute: 'href',
      },
      comments: {
        selector: 'a[href^="comments.php?type=torrent&id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(7)' },
      files: { selector: 'td:nth-child(6)' },
      seeders: { selector: 'td:nth-child(8)' },
      leechers: { selector: 'td:nth-child(9)' },
      date: {
        selector: 'td:nth-child(3)',
        filters: [
          {
            name: 're_replace',
            args: ['(\\d{2})-(\\d{2})-(\\d{4}) ((?:\\d{2}:?){3})', '$3-$2-$1 $4'],
          },
          { name: 'append', args: ' +01:00' },
          { name: 'dateparse', args: '2006-01-02 15:04:05 -07:00' },
        ],
      },
      downloadvolumefactor: {
        case: {
          'td:nth-child(2) > a:nth-child(1) > span:nth-child(2)': 0,
          '*': 1,
        },
      },
      uploadvolumefactor: { case: { '*': 1 } },
    },
  },
};
