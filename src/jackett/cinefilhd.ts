import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'cinefilhd',
  name: 'CiNEFiLHD',
  description: 'CiNEFiLHD is a Private Torrent Tracker for MOVIES / TV /  MUSIC',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['http://www.cinefilhd.org/'],
  caps: {
    categorymappings: [
      { id: '37', cat: 'Movies/HD', desc: ' Internal/HD-1080p' },
      { id: '17', cat: 'Movies/HD', desc: ' Internal/HD-720p' },
      { id: '30', cat: 'TV/HD', desc: ' Internal/HDTV' },
      { id: '15', cat: 'Movies/HD', desc: ' Internal/mHD' },
      { id: '40', cat: 'Movies', desc: ' Internal/Mp4' },
      { id: '26', cat: 'Movies', desc: ' Internal/Remux' },
      { id: '45', cat: 'Movies/WEBDL', desc: ' Internal/WEB-DL' },
      { id: '25', cat: 'Movies/3D', desc: ' Movies/3D-Ou' },
      { id: '16', cat: 'Movies/3D', desc: ' Movies/3D-SbS' },
      { id: '5', cat: 'Movies/BluRay', desc: ' Movies/BluRay' },
      { id: '38', cat: 'Movies/HD', desc: ' Movies/HD-1080p' },
      { id: '10', cat: 'Movies/HD', desc: ' Movies/HD-720p' },
      { id: '29', cat: 'Movies/HD', desc: ' Movies/mHD' },
      { id: '41', cat: 'Movies', desc: ' Movies/Mp4' },
      { id: '39', cat: 'Movies', desc: ' Movies/Remux' },
      { id: '44', cat: 'Movies/WEBDL', desc: ' Movies/WEB-DL' },
      { id: '23', cat: 'Audio/Lossless', desc: ' Lossless' },
      { id: '14', cat: 'Audio/MP3', desc: ' MP3-Packs' },
      { id: '22', cat: 'Audio/MP3', desc: ' Music-MP3' },
      { id: '43', cat: 'Audio/Video', desc: ' Music/1080p' },
      { id: '42', cat: 'Audio/Video', desc: ' Music/720p' },
      { id: '12', cat: 'TV/HD', desc: ' HDTV-Packs' },
      { id: '21', cat: 'TV/HD', desc: ' Movies/HDTV' },
    ],
    modes: {
      search: ['q', 'imdbid'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
    },
  },
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      submitme: 'LOGIN',
      returnto: '/',
    },
    error: [
      {
        selector: 'h2:contains("failed")',
        message: { selector: 'td.colhead2' },
      },
    ],
    test: {
      path: 'browse.php',
      selector: ':has(a[href^="logout.php?hash_please="])',
    },
  },
  ratio: {
    path: 'browse.php',
    selector: 'div div font:contains("Ratio:")',
    filters: [{ name: 'regexp', args: 'Ratio:\\s(.*?)\\s' }],
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{range .Categories}}cat{{.}}=1&{{end}}',
      search: '{{if .Query.IMDBID}}{{ .Query.IMDBID }}{{else}}{{ .Keywords }}{{end}}',
      searchin: '{{ if .Query.IMDBID }}descr{{else}}title{{end}}',
      incldead: 1,
      only_free: 0,
    },
    rows: {
      selector:
        'table.mainouter table > tbody > tr:has(a[href^="details.php?id="]), table.mainouter table > tbody > tr[id^="kdescr"]',
      after: 1,
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
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
        filters: [
          {
            name: 'replace',
            args: ['details.php?id=', 'download.php?torrent='],
          },
        ],
      },
      banner: {
        selector: 'a[href^="details.php?id="][onmouseover]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: "src=\\\\'(.*?)\\\\'" }],
      },
      imdb: {
        optional: true,
        selector: 'a[href*="www.imdb.com/title/tt"]',
      },
      files: { selector: 'td:nth-child(4)' },
      date: {
        optional: true,
        selector: 'td:nth-child(6):not(:contains("day"))',
        filters: [{ name: 'dateparse', args: 'Jan 2 2006 03:04 pm' }],
      },
      size: { selector: 'td:nth-child(7)' },
      grabs: {
        selector: 'td:nth-child(8)',
        filters: [{ name: 'regexp', args: '([\\d,]+)' }],
      },
      seeders: { selector: 'td:nth-child(9)' },
      leechers: { selector: 'td:nth-child(10)' },
      downloadvolumefactor: {
        case: { 'tr.freeleech_color': '0', 'tr.highlight': '0', '*': '1' },
      },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
  source: 'jackett',
};
