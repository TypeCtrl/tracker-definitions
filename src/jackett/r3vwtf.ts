import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'r3vwtf',
  name: 'R3V WTF!',
  description: 'R3V WTF! is a Private site for MOVIES / TV / GENERAL',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://r3vuk.wtf/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'PC', desc: 'Apps' },
      { id: '39', cat: 'Other', desc: 'AutoBoT' },
      { id: '36', cat: 'Movies/BluRay', desc: 'Bluray' },
      { id: '34', cat: 'Audio/MP3', desc: "Carrow's MP3 Packs" },
      { id: '38', cat: 'Audio', desc: 'DMC Music' },
      { id: '24', cat: 'Books/Ebook', desc: 'EBOOK' },
      { id: '37', cat: 'Audio', desc: 'Mastermix Music' },
      { id: '20', cat: 'Movies/DVD', desc: 'Movies/Dvdr' },
      { id: '17', cat: 'Movies', desc: 'Movies/Packs' },
      { id: '26', cat: 'Movies/HD', desc: 'Movies/X264' },
      { id: '44', cat: 'Movies/HD', desc: 'Movies/x265' },
      { id: '10', cat: 'Movies/SD', desc: 'Movies/XviD' },
      { id: '46', cat: 'Movies/DVD', desc: 'Multi DVD' },
      { id: '14', cat: 'Audio', desc: 'Music' },
      { id: '40', cat: 'Audio/Video', desc: 'Music Videos' },
      { id: '22', cat: 'Audio/Lossless', desc: 'Music/Flac' },
      { id: '51', cat: 'PC/Games', desc: 'PC  GAMES' },
      { id: '52', cat: 'Other/Misc', desc: 'ThE CoLLeCtiVe' },
      { id: '23', cat: 'TV', desc: 'Tv/Packs' },
      { id: '16', cat: 'TV/HD', desc: 'Tv/x264' },
      { id: '49', cat: 'TV/HD', desc: 'Tv/X265' },
      { id: '15', cat: 'TV/SD', desc: 'Tv/Xvid' },
      { id: '42', cat: 'Audio', desc: 'VIP MUSIC' },
      { id: '50', cat: 'XXX', desc: 'XXX' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
    },
  },
  login: {
    path: 'login.php',
    method: 'form',
    form: 'form[action="takelogin.php"]',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      submitme: 'X',
    },
    error: [{ selector: 'h2', message: { selector: 'table tr td.text' } }],
    test: {
      path: 'index.php',
      selector: 'a[href*="logout.php?hash_please="]',
    },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      searchin: 'title',
      incldead: 1,
      only_free: 0,
    },
    rows: { selector: 'tr:has(a[href^="download.php?torrent="])' },
    fields: {
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: { selector: 'a[href^="details.php?id="]' },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?torrent="]',
        attribute: 'href',
      },
      banner: {
        selector: 'a[href^="details.php?id="]',
        optional: true,
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'src="(.*?)"' }],
      },
      files: { selector: 'td:nth-last-child(8)' },
      date: {
        selector: 'td:nth-last-child(6):contains("day")',
        optional: true,
      },
      size: { selector: 'td:nth-last-child(5)' },
      grabs: {
        selector: 'td:nth-last-child(4)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      seeders: { selector: 'td:nth-last-child(3)' },
      leechers: { selector: 'td:nth-last-child(2)' },
      downloadvolumefactor: {
        case: { 'a.info:contains("Free")': 0, '*': 1 },
      },
      uploadvolumefactor: {
        case: { 'img[src="./pic/doubleseed.gif"]': 0, '*': 1 },
      },
    },
  },
  source: 'jackett',
};
