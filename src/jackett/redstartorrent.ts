import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'redstartorrent',
  name: 'Red Star Torrent',
  description: 'Red Star Torrent (RST) is a POLISH Private Torrent Tracker for TV',
  language: 'pl-PL',
  type: 'private',
  encoding: 'ISO-8859-2',
  links: ['http://rstorrent.org.pl/'],
  caps: {
    categorymappings: [
      { id: '34', cat: 'PC/0day', desc: '0-day' },
      { id: '15', cat: 'Movies/3D', desc: '3D' },
      { id: '23', cat: 'TV/Anime', desc: 'Anime' },
      { id: '1', cat: 'PC', desc: 'Aplikacje' },
      { id: '30', cat: 'Books/Ebook', desc: 'Ebooki' },
      { id: '20', cat: 'Movies/SD', desc: 'Filmy/DVD-R' },
      { id: '5', cat: 'Movies/HD', desc: 'Filmy/HD' },
      { id: '19', cat: 'Movies/SD', desc: 'Filmy/XviD' },
      { id: '4', cat: 'PC/Games', desc: 'Gry/PC ISO' },
      { id: '28', cat: 'Other', desc: 'GSM/PDA' },
      { id: '29', cat: 'Movies', desc: 'Kids' },
      { id: '40', cat: 'Movies/Foreign', desc: 'Kino Polska' },
      { id: '6', cat: 'Audio', desc: 'Muzyka' },
      { id: '12', cat: 'TV', desc: 'Paczka' },
      { id: '25', cat: 'Other', desc: 'Rozne' },
      { id: '7', cat: 'TV', desc: 'Seriale - Epizody' },
      { id: '3', cat: 'TV', desc: 'Seriale - Sezony' },
      { id: '35', cat: 'TV', desc: 'SHOW' },
      { id: '26', cat: 'TV/Sport', desc: 'Sport' },
      { id: '36', cat: 'Other', desc: 'Teatr' },
      { id: '27', cat: 'Audio/Video', desc: 'Teledyski' },
      { id: '31', cat: 'TV/Documentary', desc: 'TV Doc' },
      { id: '9', cat: 'XXX', desc: 'XXX' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
  },
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [
      { selector: 'td.embedded:has(h2:contains("failed"))' },
      { selector: 'td.embedded:has(h2:contains("Error"))' },
    ],
    test: { selector: 'a[href^="logout.php"]', path: 'browse.php' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      incldead: 1,
      polish: 0,
    },
    rows: {
      selector: 'table[border="1"][cellpadding="5"] > tbody > tr:has(a[href^="/details.php?id="])',
    },
    fields: {
      title: { selector: 'a[href^="/details.php?id="]' },
      details: {
        selector: 'a[href^="/details.php?id="]',
        attribute: 'href',
      },
      category: {
        selector: 'a[href^="/browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      download: {
        selector: 'a[href^="/download.php/"]',
        attribute: 'href',
      },
      description: {
        optional: true,
        selector: 'img[src="/pic/pl.gif"]',
        attribute: 'src',
        filters: [
          { name: 'append', args: 'Language: polish\n<br>' },
          { name: 'prepend', args: '{{ .Result.description }}' },
        ],
      },
      imdb: { selector: 'a[href*="imdb.com/title/tt"]' },
      date: {
        selector: 'td:nth-child(5)',
        filters: [
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: '2006-01-0215:04:05 -07:00' },
        ],
      },
      grabs: { selector: 'td:nth-child(7)' },
      size: { selector: 'td:nth-child(6)' },
      seeders: {
        selector: 'td:nth-child(8)',
        filters: [{ name: 'regexp', args: '^(\\d+)' }],
      },
      leechers: {
        selector: 'td:nth-child(8)',
        filters: [{ name: 'regexp', args: '/ (\\d+)' }],
      },
      downloadvolumefactor: { case: { 'td.darmowy': 0, '*': 1 } },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
