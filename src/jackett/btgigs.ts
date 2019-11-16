import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'btgigs',
  name: 'BTGigs',
  description: 'BTGigs (TG) is a POLISH Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'pl-PL',
  type: 'private',
  encoding: 'ISO-8859-2',
  links: ['https://btgigs.info/'],
  caps: {
    categorymappings: [
      { id: '36', cat: 'Audio/Audiobook', desc: 'aBooki' },
      { id: '27', cat: 'TV/Anime', desc: 'Anime' },
      { id: '1', cat: 'PC', desc: 'Aplikacje PC' },
      { id: '10', cat: 'Books/Ebook', desc: 'eBooki' },
      { id: '34', cat: 'Movies/BluRay', desc: 'Filmy/BR' },
      { id: '4', cat: 'Movies/SD', desc: 'Filmy/DVD-R' },
      { id: '31', cat: 'Movies/HD', desc: 'Filmy/HD Rip' },
      { id: '17', cat: 'Movies/Other', desc: 'Filmy/Inne' },
      { id: '35', cat: 'Movies/UHD', desc: 'Filmy/UHD' },
      { id: '20', cat: 'Movies/SD', desc: 'Filmy/XviD' },
      { id: '21', cat: 'Console', desc: 'Gry/konsole' },
      { id: '7', cat: 'PC/Games', desc: 'Gry/PC ISO' },
      { id: '12', cat: 'PC/Games', desc: 'Gry/PC Rips' },
      { id: '28', cat: 'Other', desc: 'GSM/PDA' },
      { id: '19', cat: 'Audio/Video', desc: 'Koncerty/Teledyski' },
      { id: '32', cat: 'Audio/Lossless', desc: 'musicDVD/DTS/FLAC' },
      { id: '5', cat: 'Audio/MP3', desc: 'Muzyka/MP3' },
      { id: '26', cat: 'Other', desc: 'Rozne' },
      { id: '30', cat: 'TV/Sport', desc: 'Sport' },
      { id: '6', cat: 'TV', desc: 'TV/Seriale' },
      { id: '29', cat: 'PC', desc: 'Witaminki' },
      { id: '9', cat: 'XXX', desc: 'XXX' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  login: {
    path: 'takelogin_action.php',
    method: 'post',
    inputs: {
      username_dupa: '{{ .Config.username }}',
      password__dupa: '{{ .Config.password }}',
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
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Query.Keywords }}',
      incldead: 1,
      tyt: 0,
      lang: 0,
      subcat: 0,
    },
    rows: {
      selector: 'table[border="1"][cellpadding=5] > tbody > tr:has(a[href^="details.php?id="])',
    },
    fields: {
      title: { selector: 'a[href^="details.php?id="]' },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      download: {
        selector: 'a[href^="download.php/"]',
        attribute: 'href',
      },
      description: {
        optional: true,
        selector: 'img[src^="/pic/cat_pl/"]',
        attribute: 'src',
        filters: [
          { name: 'append', args: 'Language: polish\n<br>' },
          { name: 'prepend', args: '{{ .Result.description }}' },
        ],
      },
      imdb: {
        optional: true,
        selector: 'a[href*="www.imdb.com/title/tt"]',
      },
      date: {
        selector: 'td:nth-child(5)',
        filters: [
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: '2006-01-0215:04:05 -07:00' },
        ],
      },
      grabs: {
        selector: 'td:nth-child(7)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      size: { selector: 'td:nth-child(6)' },
      seeders: { selector: 'td:nth-child(8)' },
      leechers: { selector: 'td:nth-child(9)' },
      downloadvolumefactor: {
        case: {
          'img[src="pic/ico_disk1.png"]': 0,
          'img[src="pic/ico_disk2.png"]': 1,
          '*': 1,
        },
      },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};
