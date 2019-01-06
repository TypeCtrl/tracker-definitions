import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'gigatorrents',
  name: 'GigaTorrents',
  description: 'Giga Torrents is a Hungarian Private site for TV / MOVIES / GENERAL',
  language: 'hu-HU',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://gigatorrents.ws/'],
  caps: {
    categorymappings: [
      { id: '81', cat: 'TV/SD', desc: 'Sorozat/SD-x264/Hun' },
      { id: '62', cat: 'Movies/BluRay', desc: 'Bluray Disc' },
      { id: '80', cat: 'Movies/SD', desc: 'CAM/Eng' },
      { id: '79', cat: 'Movies/SD', desc: 'CAM/Hun' },
      { id: '71', cat: 'Movies/DVD', desc: 'DVD 9' },
      { id: '67', cat: 'Movies/DVD', desc: 'DVD 9 Hun' },
      { id: '74', cat: 'Movies/HD', desc: 'Film HD/Eng' },
      { id: '75', cat: 'Movies/HD', desc: 'Film HD/Hun' },
      { id: '73', cat: 'Movies/SD', desc: 'Film x264/Eng' },
      { id: '72', cat: 'Movies/SD', desc: 'Film x264/Hun' },
      { id: '19', cat: 'Movies/SD', desc: 'Film Xvid/Eng' },
      { id: '37', cat: 'Movies/SD', desc: 'Film Xvid/Hun' },
      { id: '20', cat: 'Movies/DVD', desc: 'Film/DVD-R' },
      { id: '45', cat: 'Movies/DVD', desc: 'Film/DVD-R Hun' },
      { id: '47', cat: 'PC/Games', desc: 'Játékok/ISO' },
      { id: '64', cat: 'PC/Games', desc: 'Játékok/Rip' },
      { id: '48', cat: 'Other', desc: 'Képek' },
      { id: '49', cat: 'XXX', desc: 'Képek XXX' },
      { id: '51', cat: 'Other', desc: 'Klip' },
      { id: '39', cat: 'Books', desc: 'Könyvek/Eng' },
      { id: '52', cat: 'Books', desc: 'Könyvek/Hun' },
      { id: '33', cat: 'Console', desc: 'Konzol' },
      { id: '1', cat: 'Audio/Lossless', desc: 'Lossless' },
      { id: '55', cat: 'PC/Phone-Other', desc: 'Mobil/PDA' },
      { id: '77', cat: 'PC/ISO', desc: 'PC/ISO' },
      { id: '78', cat: 'PC/0day', desc: 'PC/Rip' },
      { id: '85', cat: 'TV/HD', desc: 'Sorozat HD/Eng' },
      { id: '84', cat: 'TV/HD', desc: 'Sorozat HD/Hun' },
      { id: '8', cat: 'TV/SD', desc: 'Sorozat/SD-x264/Eng' },
      { id: '83', cat: 'TV/SD', desc: 'Sorozat/SD-Xvid/Eng' },
      { id: '7', cat: 'TV/SD', desc: 'Sorozat/SD-Xvid/Hun' },
      { id: '46', cat: 'XXX', desc: 'XXX' },
      { id: '42', cat: 'Audio', desc: 'Zene/Eng' },
      { id: '53', cat: 'Audio', desc: 'Zene/Hun' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  login: {
    path: '/login.php',
    method: 'form',
    form: 'form',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'div.box:has(div.title:contains("bejelentkez"))' }],
    test: { path: '/torrentek.php' },
  },
  search: {
    paths: [{ path: '/torrentek.php' }],
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      incldead: '1',
      blah: '0',
    },
    rows: { selector: 'table#torrenttable > tbody > tr:has()' },
    error: [
      {
        selector: 'div.content:contains("Meg van vonva a letöltési jogod")',
      },
    ],
    fields: {
      download: {
        selector: 'a[href^="/details.php?id="]',
        attribute: 'href',
        filters: [{ name: 'replace', args: ['details.php?id=', 'download.php?id='] }],
      },
      title: { selector: 'a[href^="/details.php?id="]' },
      details: {
        selector: 'a[href^="/details.php?id="]',
        attribute: 'href',
      },
      imdb: {
        selector: 'a[href^="http://anonym.to/?http://imdb.com/title/"]',
        optional: true,
        attribute: 'href',
      },
      banner: {
        selector: 'img.imdb-info',
        optional: true,
        attribute: 'data-url',
      },
      category: {
        selector: 'a[href^="/torrentek.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      seeders: {
        selector: 'td:nth-child(8)',
        filters: [{ name: 'split', args: ['/', 0] }],
      },
      leechers: {
        selector: 'td:nth-child(8)',
        filters: [{ name: 'split', args: ['/', 1] }],
      },
      grabs: {
        selector: 'td:nth-child(7)',
        filters: [{ name: 'regexp', args: '([\\d,]+)' }],
      },
      files: { selector: 'td:nth-child(4)' },
      downloadvolumefactor: {
        selector: 'td:nth-child(6) > span:nth-last-child(2)',
        optional: true,
        filters: [{ name: 'trim', args: 'x' }],
      },
      uploadvolumefactor: {
        selector: 'td:nth-child(6) > span:nth-last-child(1)',
        optional: true,
        filters: [{ name: 'trim', args: 'x' }],
      },
      date: {
        selector: 'td:nth-child(2)',
        remove: 'a',
        filters: [{ name: 'regexp', args: 'Feltöltve:\\s*([\\d-]+\\s*[\\d:]+)' }],
      },
      size: { selector: 'td:nth-child(6)', remove: 'span' },
    },
  },
  source: 'jackett',
};
