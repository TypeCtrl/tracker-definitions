import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'demonoid',
  name: 'Demonoid',
  description: 'Demonoid is a Public torrent site for MOVIES / TV / GENERAL',
  language: 'en-US',
  type: 'semi-private',
  encoding: 'UTF-8',
  followredirect: true,
  links: [
    'https://www.demonoid.is/',
    'https://www.dnoid.to/',
    'https://www.dnoid.pw/',
    'https://demonoid.unblockit.onl/',
    'https://demonoid.torrentbay.to/',
    'https://demonoid.nocensor.space/',
  ],
  legacylinks: [
    'https://demonoid.unblockit.pro/',
    'https://demonoid.unblockit.one/',
    'https://demonoid.unblockit.me/',
    'https://dnoid.black-mirror.xyz/',
    'https://dnoid.unblocked.casa/',
    'https://dnoid.proxyportal.fun/',
    'https://dnoid.uk-unblock.xyz/',
    'https://dnoid.ind-unblock.xyz/',
    'https://demonoid.unblockit.pw/',
    'https://demonoid.unblockit.id/',
    'https://demonoid.unblockit.win/',
    'https://demonoid.unblockit.top/',
    'https://demonoid.unblockit.lat/',
    'https://demonoid.unblockit.app/',
    'https://demonoid.unblockit.dev/',
    'https://demonoid.unblockit.ltd/',
    'https://demonoid.unblockit.link/',
    'https://demonoid.unblockit.buzz/',
    'https://demonoid.unblockit.club/',
  ],
  caps: {
    categorymappings: [
      { id: '1', cat: 'PC/Mobile-Android', desc: 'Applications Android' },
      {
        id: '2',
        cat: 'PC/Mobile-iOS',
        desc: 'Applications Iphone / Ipod touch',
      },
      { id: '3', cat: 'PC', desc: 'Applications Linux' },
      { id: '4', cat: 'PC/Mac', desc: 'Applications Mac' },
      {
        id: '5',
        cat: 'PC/Mobile-Other',
        desc: 'Applications Mobile phone',
      },
      { id: '6', cat: 'PC', desc: 'Applications PocketPC' },
      { id: '7', cat: 'PC/0day', desc: 'Applications Windows' },
      { id: '8', cat: 'Audio/Audiobook', desc: 'Audio Books Action' },
      { id: '9', cat: 'Audio/Audiobook', desc: 'Audio Books Adventure' },
      { id: '10', cat: 'Audio/Audiobook', desc: 'Audio Books Biography' },
      { id: '11', cat: 'Audio/Audiobook', desc: 'Audio Books Childrens' },
      {
        id: '12',
        cat: 'Audio/Audiobook',
        desc: 'Audio Books Computers and Technology',
      },
      {
        id: '13',
        cat: 'Audio/Audiobook',
        desc: 'Audio Books Contemporary',
      },
      { id: '14', cat: 'Audio/Audiobook', desc: 'Audio Books Cooking' },
      {
        id: '15',
        cat: 'Audio/Audiobook',
        desc: 'Audio Books Crafts and Hobbies',
      },
      {
        id: '16',
        cat: 'Audio/Audiobook',
        desc: 'Audio Books Educational',
      },
      { id: '17', cat: 'Audio/Audiobook', desc: 'Audio Books Fantasy' },
      { id: '18', cat: 'Audio/Audiobook', desc: 'Audio Books Fiction' },
      { id: '19', cat: 'Audio/Audiobook', desc: 'Audio Books General' },
      { id: '20', cat: 'Audio/Audiobook', desc: 'Audio Books History' },
      { id: '21', cat: 'Audio/Audiobook', desc: 'Audio Books Horror' },
      { id: '22', cat: 'Audio/Audiobook', desc: 'Audio Books Humor' },
      { id: '23', cat: 'Audio/Audiobook', desc: 'Audio Books Literary' },
      { id: '24', cat: 'Audio/Audiobook', desc: 'Audio Books Magazine' },
      {
        id: '25',
        cat: 'Audio/Audiobook',
        desc: 'Audio Books Mainstream',
      },
      {
        id: '26',
        cat: 'Audio/Audiobook',
        desc: 'Audio Books Medicine and Health',
      },
      {
        id: '27',
        cat: 'Audio/Audiobook',
        desc: 'Audio Books Mystery and Suspense',
      },
      { id: '28', cat: 'Audio/Audiobook', desc: 'Audio Books Newspaper' },
      {
        id: '29',
        cat: 'Audio/Audiobook',
        desc: 'Audio Books Nonfiction',
      },
      { id: '30', cat: 'Audio/Audiobook', desc: 'Audio Books Other' },
      {
        id: '31',
        cat: 'Audio/Audiobook',
        desc: 'Audio Books Paranormal',
      },
      { id: '32', cat: 'Audio/Audiobook', desc: 'Audio Books Religion' },
      { id: '33', cat: 'Audio/Audiobook', desc: 'Audio Books Romance' },
      { id: '34', cat: 'Audio/Audiobook', desc: 'Audio Books RPG' },
      { id: '35', cat: 'Audio/Audiobook', desc: 'Audio Books Sci-Fi' },
      { id: '36', cat: 'Audio/Audiobook', desc: 'Audio Books Self-help' },
      { id: '37', cat: 'Audio/Audiobook', desc: 'Audio Books Suspense' },
      { id: '38', cat: 'Audio/Audiobook', desc: 'Audio Books Textbook' },
      { id: '39', cat: 'Audio/Audiobook', desc: 'Audio Books Thriller' },
      { id: '40', cat: 'Audio/Audiobook', desc: 'Audio Books Western' },
      {
        id: '41',
        cat: 'Audio/Audiobook',
        desc: 'Audio Books Young Adult',
      },
      {
        id: '42',
        cat: 'Books/Ebook',
        desc: 'Books Action and Adventure',
      },
      { id: '43', cat: 'Books/Ebook', desc: 'Books Biography' },
      { id: '44', cat: 'Books/Ebook', desc: 'Books Childrens' },
      {
        id: '45',
        cat: 'Books/Ebook',
        desc: 'Books Computers and Technology',
      },
      { id: '46', cat: 'Books/Ebook', desc: 'Books Contemporary' },
      { id: '47', cat: 'Books/Ebook', desc: 'Books Cooking' },
      { id: '48', cat: 'Books/Ebook', desc: 'Books Crafts and Hobbies' },
      { id: '49', cat: 'Books/Ebook', desc: 'Books Educational' },
      { id: '50', cat: 'Books/Ebook', desc: 'Books Fantasy' },
      { id: '51', cat: 'Books/Ebook', desc: 'Books Fiction' },
      { id: '52', cat: 'Books/Ebook', desc: 'Books General' },
      { id: '53', cat: 'Books/Ebook', desc: 'Books History' },
      { id: '54', cat: 'Books/Ebook', desc: 'Books Horror' },
      { id: '55', cat: 'Books/Ebook', desc: 'Books Humor' },
      { id: '56', cat: 'Books/Ebook', desc: 'Books Literary' },
      { id: '57', cat: 'Books/Mags', desc: 'Books Magazine' },
      { id: '58', cat: 'Books/Ebook', desc: 'Books Mainstream' },
      { id: '59', cat: 'Books/Ebook', desc: 'Books Medicine and Health' },
      {
        id: '60',
        cat: 'Books/Ebook',
        desc: 'Books Mystery and Suspense',
      },
      { id: '61', cat: 'Books/Ebook', desc: 'Books Newspaper' },
      { id: '62', cat: 'Books/Ebook', desc: 'Books Nonfiction' },
      { id: '63', cat: 'Books/Ebook', desc: 'Books Other' },
      { id: '64', cat: 'Books/Ebook', desc: 'Books Paranormal' },
      { id: '65', cat: 'Books/Ebook', desc: 'Books Religion' },
      { id: '66', cat: 'Books/Ebook', desc: 'Books Romance' },
      { id: '67', cat: 'Books/Ebook', desc: 'Books RPG' },
      { id: '68', cat: 'Books/Ebook', desc: 'Books Sci-Fi' },
      { id: '69', cat: 'Books/Ebook', desc: 'Books Self-help' },
      { id: '70', cat: 'Books/Ebook', desc: 'Books Suspense' },
      { id: '71', cat: 'Books/Ebook', desc: 'Books Textbook' },
      { id: '72', cat: 'Books/Ebook', desc: 'Books Thriller' },
      { id: '73', cat: 'Books/Ebook', desc: 'Books Western' },
      { id: '74', cat: 'Books/Ebook', desc: 'Books Young Adult' },
      {
        id: '75',
        cat: 'Books/Comics',
        desc: 'Comics Action / Adventure',
      },
      { id: '76', cat: 'Books/Comics', desc: 'Comics Crime' },
      { id: '77', cat: 'Books/Comics', desc: 'Comics Drama' },
      { id: '78', cat: 'Books/Comics', desc: 'Comics Fantasy' },
      {
        id: '79',
        cat: 'Books/Comics',
        desc: 'Comics Historical fiction',
      },
      { id: '80', cat: 'Books/Comics', desc: 'Comics Horror' },
      { id: '81', cat: 'Books/Comics', desc: 'Comics Illustrated novel' },
      { id: '82', cat: 'Books/Comics', desc: 'Comics Manga' },
      { id: '83', cat: 'Books/Comics', desc: 'Comics Other' },
      { id: '84', cat: 'Books/Comics', desc: 'Comics Real-Life' },
      { id: '85', cat: 'Books/Comics', desc: 'Comics Sci-Fi' },
      { id: '86', cat: 'Books/Comics', desc: 'Comics Super Hero' },
      { id: '87', cat: 'PC', desc: 'Games DOS' },
      { id: '88', cat: 'Console/Other', desc: 'Games Dreamcast' },
      { id: '89', cat: 'Console/Other', desc: 'Games Emulators' },
      { id: '90', cat: 'Console/Other', desc: 'Games GameBoy' },
      { id: '91', cat: 'Console/Other', desc: 'Games GameCube' },
      { id: '92', cat: 'PC', desc: 'Games Linux' },
      { id: '93', cat: 'PC/Mac', desc: 'Games Mac' },
      { id: '94', cat: 'PC/Mobile-Other', desc: 'Games Mobile phone' },
      { id: '95', cat: 'Console/NDS', desc: 'Games Nintendo DS' },
      { id: '96', cat: 'Console/Other', desc: 'Games Palm' },
      { id: '97', cat: 'Console/PS3', desc: 'Games Playstation' },
      { id: '98', cat: 'Console/Other', desc: 'Games PocketPC' },
      { id: '99', cat: 'Console/PSP', desc: 'Games PSP' },
      { id: '100', cat: 'Console/Wii', desc: 'Games Wii / Wii U' },
      { id: '101', cat: 'PC/Games', desc: 'Games Windows' },
      { id: '102', cat: 'Console/Xbox', desc: 'Games XBox' },
      { id: '158', cat: 'TV/Anime', desc: 'Anime Sci-Fi' },
      { id: '103', cat: 'TV/Anime', desc: 'Anime Action' },
      { id: '104', cat: 'TV/Anime', desc: 'Anime Adventure' },
      { id: '105', cat: 'TV/Anime', desc: 'Anime Comedy' },
      { id: '106', cat: 'TV/Anime', desc: 'Anime Drama' },
      { id: '107', cat: 'TV/Anime', desc: 'Anime Fantasy' },
      { id: '108', cat: 'TV/Anime', desc: 'Anime Horror' },
      { id: '109', cat: 'TV/Anime', desc: 'Anime Other' },
      { id: '157', cat: 'TV/Anime', desc: 'Anime Romance' },
      { id: '151', cat: 'Movies', desc: 'Movies Action' },
      { id: '110', cat: 'Movies', desc: 'Movies Adventure' },
      { id: '236', cat: 'Movies', desc: 'Movies Animation' },
      { id: '111', cat: 'Movies', desc: 'Movies Biography' },
      { id: '152', cat: 'Movies', desc: 'Movies Comedy' },
      { id: '112', cat: 'Movies', desc: 'Movies Concerts' },
      { id: '113', cat: 'Movies', desc: 'Movies Crime' },
      { id: '114', cat: 'Movies', desc: 'Movies Documentary' },
      { id: '115', cat: 'Movies', desc: 'Movies Drama' },
      { id: '116', cat: 'Movies', desc: 'Movies Family' },
      { id: '153', cat: 'Movies', desc: 'Movies Fantasy' },
      { id: '117', cat: 'Movies', desc: 'Movies Horror' },
      { id: '118', cat: 'Movies', desc: 'Movies Musical' },
      { id: '119', cat: 'Movies', desc: 'Movies Mystery' },
      { id: '120', cat: 'Movies', desc: 'Movies Other' },
      { id: '121', cat: 'Movies', desc: 'Movies Romance' },
      { id: '154', cat: 'Movies', desc: 'Movies Sci-Fi' },
      { id: '159', cat: 'Movies', desc: 'Movies Short-Film' },
      { id: '160', cat: 'Movies', desc: 'Movies Sports' },
      { id: '161', cat: 'Movies', desc: 'Movies Thriller' },
      { id: '162', cat: 'Movies', desc: 'Movies Trailers' },
      { id: '163', cat: 'Movies', desc: 'Movies War' },
      { id: '164', cat: 'Movies', desc: 'Movies Western' },
      { id: '122', cat: 'Audio', desc: 'Music Alternative' },
      { id: '123', cat: 'Audio', desc: 'Music Bluegrass' },
      { id: '124', cat: 'Audio', desc: 'Music Blues' },
      { id: '125', cat: 'Audio', desc: 'Music Childrens' },
      { id: '126', cat: 'Audio', desc: 'Music Christian' },
      { id: '127', cat: 'Audio', desc: 'Music Classical' },
      { id: '128', cat: 'Audio', desc: 'Music Comedy' },
      { id: '129', cat: 'Audio', desc: 'Music Contemporary African' },
      { id: '130', cat: 'Audio', desc: 'Music Country' },
      { id: '131', cat: 'Audio', desc: 'Music Dance / Disco' },
      { id: '132', cat: 'Audio', desc: 'Music Drum and Bass' },
      { id: '133', cat: 'Audio', desc: 'Music Electro / Techno' },
      { id: '134', cat: 'Audio', desc: 'Music Folk' },
      { id: '165', cat: 'Audio', desc: 'Music Gospel' },
      { id: '166', cat: 'Audio', desc: 'Music Grunge' },
      { id: '167', cat: 'Audio', desc: 'Music Hip-Hop / Rap' },
      { id: '168', cat: 'Audio', desc: 'Music Indie' },
      { id: '169', cat: 'Audio', desc: 'Music Industrial' },
      { id: '170', cat: 'Audio', desc: 'Music J-Pop' },
      { id: '171', cat: 'Audio', desc: 'Music Jazz' },
      { id: '172', cat: 'Audio', desc: 'Music Latin American' },
      { id: '173', cat: 'Audio', desc: 'Music Melodic' },
      { id: '174', cat: 'Audio', desc: 'Music Metal' },
      { id: '175', cat: 'Audio', desc: 'Music Other' },
      { id: '176', cat: 'Audio', desc: 'Music Pop' },
      { id: '177', cat: 'Audio', desc: 'Music Punk' },
      { id: '178', cat: 'Audio', desc: 'Music Radio Show' },
      { id: '179', cat: 'Audio', desc: 'Music Reggae' },
      { id: '180', cat: 'Audio', desc: 'Music Rhythm and blues' },
      { id: '181', cat: 'Audio', desc: 'Music Rock' },
      { id: '182', cat: 'Audio', desc: 'Music Soul' },
      { id: '183', cat: 'Audio', desc: 'Music Soundtrack' },
      { id: '184', cat: 'Audio', desc: 'Music Trance' },
      { id: '185', cat: 'Audio', desc: 'Music Trip Hop' },
      { id: '135', cat: 'Audio/Video', desc: 'Music Videos Alternative' },
      { id: '136', cat: 'Audio/Video', desc: 'Music Videos Bluegrass' },
      { id: '137', cat: 'Audio/Video', desc: 'Music Videos Blues' },
      { id: '138', cat: 'Audio/Video', desc: 'Music Videos Childrens' },
      { id: '139', cat: 'Audio/Video', desc: 'Music Videos Christian' },
      { id: '186', cat: 'Audio/Video', desc: 'Music Videos Classical' },
      { id: '187', cat: 'Audio/Video', desc: 'Music Videos Comedy' },
      {
        id: '188',
        cat: 'Audio/Video',
        desc: 'Music Videos Contemporary African',
      },
      { id: '189', cat: 'Audio/Video', desc: 'Music Videos Country' },
      {
        id: '190',
        cat: 'Audio/Video',
        desc: 'Music Videos Dance / Disco',
      },
      {
        id: '191',
        cat: 'Audio/Video',
        desc: 'Music Videos Drum and Bass',
      },
      {
        id: '192',
        cat: 'Audio/Video',
        desc: 'Music Videos Electro / Techno',
      },
      { id: '193', cat: 'Audio/Video', desc: 'Music Videos Folk' },
      { id: '194', cat: 'Audio/Video', desc: 'Music Videos Gospel' },
      { id: '195', cat: 'Audio/Video', desc: 'Music Videos Grunge' },
      {
        id: '196',
        cat: 'Audio/Video',
        desc: 'Music Videos Hip-Hop / Rap',
      },
      { id: '197', cat: 'Audio/Video', desc: 'Music Videos Indie' },
      { id: '198', cat: 'Audio/Video', desc: 'Music Videos Industrial' },
      { id: '199', cat: 'Audio/Video', desc: 'Music Videos J-Pop' },
      { id: '200', cat: 'Audio/Video', desc: 'Music Videos Jazz' },
      {
        id: '201',
        cat: 'Audio/Video',
        desc: 'Music Videos Latin American',
      },
      { id: '202', cat: 'Audio/Video', desc: 'Music Videos Melodic' },
      { id: '203', cat: 'Audio/Video', desc: 'Music Videos Metal' },
      { id: '204', cat: 'Audio/Video', desc: 'Music Videos Other' },
      { id: '205', cat: 'Audio/Video', desc: 'Music Videos Pop' },
      { id: '206', cat: 'Audio/Video', desc: 'Music Videos Punk' },
      { id: '207', cat: 'Audio/Video', desc: 'Music Videos Radio Show' },
      { id: '208', cat: 'Audio/Video', desc: 'Music Videos Reggae' },
      {
        id: '209',
        cat: 'Audio/Video',
        desc: 'Music Videos Rhythm and blues',
      },
      { id: '210', cat: 'Audio/Video', desc: 'Music Videos Rock' },
      { id: '211', cat: 'Audio/Video', desc: 'Music Videos Soul' },
      { id: '212', cat: 'Audio/Video', desc: 'Music Videos Soundtrack' },
      { id: '213', cat: 'Audio/Video', desc: 'Music Videos Trance' },
      { id: '214', cat: 'Audio/Video', desc: 'Music Videos Trip Hop' },
      { id: '140', cat: 'Other', desc: 'Pictures Art' },
      { id: '141', cat: 'Other', desc: 'Pictures Commercial' },
      { id: '142', cat: 'Other', desc: 'Pictures Glamour' },
      { id: '215', cat: 'Other', desc: 'Pictures Other' },
      { id: '216', cat: 'Other', desc: 'Pictures Photojournalism' },
      { id: '217', cat: 'Other', desc: 'Pictures Snapshots' },
      { id: '218', cat: 'Other', desc: 'Pictures Sports' },
      { id: '219', cat: 'Other', desc: 'Pictures Wildlife' },
      { id: '155', cat: 'TV', desc: 'TV Action' },
      { id: '143', cat: 'TV', desc: 'TV Adventure' },
      { id: '144', cat: 'TV', desc: 'TV Biography' },
      { id: '145', cat: 'TV', desc: 'TV Cartoons' },
      { id: '146', cat: 'TV', desc: 'TV Comedy' },
      { id: '147', cat: 'TV', desc: 'TV Concerts' },
      { id: '148', cat: 'TV', desc: 'TV Crime' },
      { id: '149', cat: 'TV', desc: 'TV Documentary' },
      { id: '156', cat: 'TV', desc: 'TV Drama' },
      { id: '220', cat: 'TV', desc: 'TV Family' },
      { id: '221', cat: 'TV', desc: 'TV Fantasy' },
      { id: '222', cat: 'TV', desc: 'TV Horror' },
      { id: '223', cat: 'TV', desc: 'TV Musical' },
      { id: '224', cat: 'TV', desc: 'TV Mystery' },
      { id: '225', cat: 'TV', desc: 'TV Other' },
      { id: '226', cat: 'TV', desc: 'TV Reality' },
      { id: '227', cat: 'TV', desc: 'TV Romance' },
      { id: '228', cat: 'TV', desc: 'TV Sci-Fi' },
      { id: '229', cat: 'TV', desc: 'TV Short film' },
      { id: '230', cat: 'TV', desc: 'TV Sports' },
      { id: '231', cat: 'TV', desc: 'TV Talk show' },
      { id: '232', cat: 'TV', desc: 'TV Thriller' },
      { id: '233', cat: 'TV', desc: 'TV Trailers' },
      { id: '234', cat: 'TV', desc: 'TV War' },
      { id: '235', cat: 'TV', desc: 'TV Western' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
  },
  settings: [
    { name: 'cookie', type: 'text', label: 'Cookie' },
    {
      name: 'info',
      type: 'info',
      label: 'How to get the Cookie',
      default:
        "<ol><li>Access this tracker with your browser<li>click on the <b>Apply Filter</b> button on the page to invoke the search and solve the challenge<li>Open the <b>DevTools</b> panel by pressing <b>F12</b><li>Select the <b>Network</b> tab<li>Click on the <b>Doc</b> button (Chrome Browser) or <b>HTML</b> button (FireFox)<li>Refresh the page by pressing <b>F5</b><li>Click on the first row entry<li>Select the <b>Headers</b> tab on the Right panel<li>Find <b>'cookie:'</b> in the <b>Request Headers</b> section<li><b>Select</b> and <b>Copy</b> the whole cookie string <i>(everything after 'cookie: ')</i> and <b>Paste</b> here.</ol>",
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: '_',
      options: {
        _: 'created',
        S: 'seeders desc',
        s: 'seeders asc',
        B: 'size desc',
        b: 'size asc',
      },
    },
  ],
  login: { method: 'cookie', test: { path: 'files/' } },
  download: { selector: 'a[href^="magnet:?xt="]', attribute: 'href' },
  search: {
    paths: [{ path: 'files/' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}&{{end}}',
      seeded: 2,
      quality: 0,
      external: 2,
      to: '{{ if .Query.IMDBID }}{{ else }}1{{ end }}',
      query: '{{ if .Query.IMDBID }}{{ .Query.IMDBID }}{{ else }}{{ .Keywords }}{{ end }}',
      sort: '{{ re_replace .Config.sort "_" "" }}',
    },
    rows: {
      selector: 'table.font_12px tr:has(td[class^="tone_1"])',
      after: 1,
      dateheaders: {
        selector: 'tr td.added_today:not(:contains("Sponsored links"))',
        filters: [
          { name: 'replace', args: ['Added ', ''] },
          { name: 'replace', args: ['on ', ''] },
        ],
      },
    },
    fields: {
      title: {
        selector: 'a[href^="/files/details/"]',
        optional: true,
        attribute: 'title',
      },
      category: {
        selector: 'span > a[href*="&subcategory="]',
        attribute: 'href',
        optional: true,
        filters: [{ name: 'querystring', args: 'subcategory' }],
      },
      details: {
        selector: 'a[href^="/files/details/"]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="/files/details/"]',
        attribute: 'href',
      },
      description: { selector: 'td:nth-last-child(9)' },
      size: { selector: 'td:nth-last-child(6)' },
      grabs: { selector: 'td:nth-last-child(4)' },
      seeders: { selector: 'td:nth-last-child(3)' },
      leechers: { selector: 'td:nth-last-child(2)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
