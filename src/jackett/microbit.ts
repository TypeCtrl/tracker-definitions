import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'microbit',
  name: 'MicroBit',
  description: 'MicroBit (µBit) is a HUNGARIAN Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'hu-HU',
  type: 'private',
  encoding: 'UTF-8',
  links: ['http://microbit.eu/'],
  caps: {
    categorymappings: [
      { id: '37', cat: 'TV/Anime', desc: 'Animációk' },
      { id: '12', cat: 'Books', desc: 'E-book/Eng' },
      { id: '13', cat: 'Books', desc: 'E-book/Hun' },
      { id: '36', cat: 'Movies/DVD', desc: 'Film/DVD-9/Eng' },
      { id: '38', cat: 'Movies/DVD', desc: 'Film/DVD-9/Hun' },
      { id: '6', cat: 'Movies/DVD', desc: 'Film/DVD/Eng' },
      { id: '7', cat: 'Movies/DVD', desc: 'Film/DVD/Hun' },
      { id: '31', cat: 'Movies/HD', desc: 'Film/HD/Eng' },
      { id: '39', cat: 'Movies/HD', desc: 'Film/HD/Hun' },
      { id: '4', cat: 'Movies/SD', desc: 'Film/Xvid/Eng' },
      { id: '2', cat: 'Movies/SD', desc: 'Film/XviD/Hun' },
      { id: '24', cat: 'Audio/Audiobook', desc: 'Hangoskönyv' },
      { id: '23', cat: 'PC/Games', desc: 'Játék/ISO' },
      { id: '17', cat: 'Console', desc: 'Játék/Konzol' },
      { id: '18', cat: 'PC/Games', desc: 'Játék/Rip' },
      { id: '19', cat: 'Other', desc: 'Képek' },
      { id: '11', cat: 'Audio/Video', desc: 'Klippek/Videók' },
      { id: '8', cat: 'PC/Phone-Other', desc: 'Mobil' },
      { id: '35', cat: 'Books', desc: 'Oktató Anyagok' },
      { id: '28', cat: 'PC', desc: 'PC/Egyéb' },
      { id: '21', cat: 'PC/ISO', desc: 'PC/ISO' },
      { id: '1', cat: 'PC', desc: 'PC/Rip' },
      { id: '20', cat: 'TV', desc: 'Sorozat/Eng' },
      { id: '14', cat: 'TV', desc: 'Sorozat/Hun' },
      { id: '29', cat: 'Movies/UHD', desc: 'UHD' },
      { id: '22', cat: 'Audio/Lossless', desc: 'Zene/Lossless' },
      { id: '10', cat: 'Audio/MP3', desc: 'Zene/MP3' },
    ],
    modes: {
      search: ['q', 'imdbid'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
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
      default: 'added',
      options: {
        name: 'name',
        size: 'size',
        added: 'added',
        seeders: 'seeders',
      },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'DESC',
      options: { DESC: 'desc', ASC: 'asc' },
    },
  ],
  login: {
    path: 'login.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      return: '/',
    },
    error: [{ selector: 'fieldset.stderr' }],
    test: {
      path: 'index.php',
      selector: 'img[onclick="window.location=\'logout.php\'"]',
    },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{ range .Categories }}cat[]={{.}}&{{end}}',
      search: '{{ if .Query.IMDBID }}{{ .Query.IMDBID }}{{else}}{{ .Keywords }}{{end}}',
      searchOpened: 1,
      searchWhat: '{{ if .Query.IMDBID }}1{{else}}0{{end}}',
      filterOptions: 1,
      orderby: '{{ .Config.sort }}',
      ordertype: '{{ .Config.type }}',
    },
    rows: {
      selector:
        'table.torrentList > tbody > tr:has(a[href^="download.php?id="]), table.torrentList > tbody > tr:has(td[onclick^="window.location=\'download.php?id="])',
      after: 1,
    },
    fields: {
      category: {
        selector: 'a[href^="browse.php?searchOpened=1&cat["]',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '(\\d+)$' }],
      },
      title: {
        selector: 'a[onclick^="getTorrentInfo("]',
        attribute: 'title',
      },
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      details: {
        selector: 'a[href^="torrentdetails.php?id="]',
        attribute: 'href',
      },
      banner: { selector: 'a.poster', attribute: 'href' },
      grabs: {
        selector: 'td:nth-child(5)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      seeders: { selector: 'td:nth-child(6)' },
      leechers: { selector: 'td:nth-child(7)' },
      size: { selector: 'td:nth-child(8)' },
      date: {
        selector: 'td:nth-child(9)',
        filters: [{ name: 'dateparse', args: '2006.01.02. 15:04' }],
      },
      downloadvolumefactor: {
        optional: true,
        selector: 'b:has(img[src="templates/default/images/header/arrowdown.gif"])',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      uploadvolumefactor: {
        optional: true,
        selector: 'b:has(img[src="templates/default/images/header/arrowup.gif"])',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
    },
  },
  source: 'jackett',
};
