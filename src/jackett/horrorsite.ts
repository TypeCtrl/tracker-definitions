import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'horrorsite',
  name: 'Horror Site',
  description: 'Horror Site is a Hungarian Private site for MOVIES / TV',
  language: 'hu-HU',
  type: 'private',
  encoding: 'ISO-8859-1',
  links: ['https://horror-site.net/'],
  caps: {
    categorymappings: [
      { id: '76', cat: 'PC/Phone-Android', desc: 'Android' },
      { id: '81', cat: 'Movies/BluRay', desc: 'BDRip' },
      { id: '82', cat: 'Movies/SD', desc: 'Cam' },
      { id: '61', cat: 'Books', desc: 'eBook/Hun' },
      { id: '80', cat: 'Movies', desc: 'Film /PACK' },
      { id: '38', cat: 'Movies/DVD', desc: 'Film/DVD-R/Hun' },
      { id: '71', cat: 'Movies/HD', desc: 'Film/HD/Hun' },
      { id: '40', cat: 'Movies/SD', desc: 'Film/XviD/Eng' },
      { id: '39', cat: 'Movies/SD', desc: 'Film/XviD/Hun' },
      { id: '59', cat: 'XXX', desc: 'Film/XXX' },
      { id: '52', cat: 'PC/Games', desc: 'Játék/RIP/ISO' },
      { id: '75', cat: 'Other', desc: 'Képek' },
      { id: '74', cat: 'XXX', desc: 'Képek/XXX' },
      { id: '47', cat: 'Audio/Video', desc: 'Klip' },
      { id: '50', cat: 'Audio/MP3', desc: 'Mp3/Eng' },
      { id: '49', cat: 'Audio/MP3', desc: 'Mp3/Hun' },
      { id: '45', cat: 'PC', desc: 'Program ISO /RIP' },
      { id: '43', cat: 'TV', desc: 'Rajzfilm/Hun' },
      { id: '57', cat: 'TV', desc: 'Sorozat/Eng' },
      { id: '58', cat: 'TV', desc: 'Sorozat/Hun' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
    },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: '4',
      options: { '1': 'title', '4': 'created', '5': 'size', '7': 'seeders' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: '2',
      options: { '1': 'asc', '2': 'desc' },
    },
    {
      name: 'info',
      type: 'info',
      label: 'Results Per Page',
      default:
        'For best results, change the <b>Torrents per page:</b> setting to <b>100</b> on your account profile.',
    },
  ],
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      post_kuldes: 'engedelyezve',
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'table.browse:contains("hiba")' }],
    test: { path: '/', selector: 'a[href$="/logout.php"]' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      incldead: 1,
      blah: 0,
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table > tbody > tr.sor:has(a[href^="/download.php/"])',
    },
    fields: {
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'title',
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="/download.php/"]',
        attribute: 'href',
      },
      imdb: {
        selector: 'a[href*="imdb.com/title/tt"]',
        optional: true,
        attribute: 'href',
      },
      banner: {
        selector: 'a[onmouseover]',
        optional: true,
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'src=(.+?) ' }],
      },
      files: { selector: 'td:nth-last-child(8)' },
      date: {
        selector: 'td:nth-last-child(6)',
        filters: [
          {
            name: 'regexp',
            args: '(\\d{4}-\\d{2}-\\d{2}\\s\\d{2}:\\d{2}:\\d{2})',
          },
          { name: 'replace', args: [' ', ' '] },
          { name: 'dateparse', args: '2006-01-02 15:04:05' },
        ],
      },
      size: { selector: 'td:nth-last-child(5) > u' },
      grabs: { selector: 'td:nth-last-child(4)' },
      seeders: { selector: 'td:nth-last-child(3)' },
      leechers: { selector: 'td:nth-last-child(2)' },
      downloadvolumefactor: {
        case: { 'img[src="../pic/freedownload.gif"]': 0, '*': 1 },
      },
      uploadvolumefactor: { case: { '*': 1 } },
    },
  },
  source: 'jackett',
};
