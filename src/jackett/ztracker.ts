import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'ztracker',
  name: 'Ztracker',
  description: 'Ztracker is a HUNGARIAN Private Torrent Tracker for 0DAY / GENERAL',
  language: 'hu-HU',
  type: 'semi-private',
  encoding: 'ISO-8859-2',
  links: ['http://ztracker.org/'],
  caps: {
    categorymappings: [
      { id: '30', cat: 'Movies/SD', desc: 'CAM/HUN' },
      { id: '29', cat: 'Movies/SD', desc: 'CAM/Külf.' },
      { id: '3', cat: 'Books', desc: 'Ebook' },
      { id: '9', cat: 'Movies/HD', desc: 'Film/HD-DVD/Hun' },
      { id: '38', cat: 'Movies/3D', desc: 'Film/3D' },
      { id: '39', cat: 'Movies/3D', desc: 'Film/3D-HUN' },
      { id: '37', cat: 'Movies/UHD', desc: 'Film/4K' },
      { id: '32', cat: 'Movies/UHD', desc: 'Film/4K-HUN' },
      { id: '35', cat: 'Movies/HD', desc: 'Film/HD' },
      { id: '31', cat: 'Movies/HD', desc: 'Film/HD-HUN' },
      { id: '36', cat: 'Movies/DVD', desc: 'Film/DVD' },
      { id: '34', cat: 'Movies/DVD', desc: 'Film/DVD-HUN' },
      { id: '10', cat: 'Movies/HD', desc: 'Film/HD-DVD/Külf' },
      { id: '7', cat: 'Movies/SD', desc: 'Film/SD-X264-HUN' },
      { id: '8', cat: 'Movies/SD', desc: 'Film/SD-X264' },
      { id: '15', cat: 'XXX', desc: 'Film/XXX-SD' },
      { id: '16', cat: 'XXX', desc: 'Film/XXX-HD' },
      { id: '40', cat: 'XXX', desc: 'Film/XXX-DVD' },
      { id: '41', cat: 'XXX', desc: 'Film/XXX-4K' },
      { id: '33', cat: 'XXX', desc: 'Film/HD-XXX' },
      { id: '4', cat: 'PC/Games', desc: 'Game/PC' },
      { id: '45', cat: 'Console', desc: 'Game/Konzol' },
      { id: '18', cat: 'Other', desc: 'Képek' },
      { id: '17', cat: 'XXX', desc: 'Képek/XXX' },
      { id: '27', cat: 'Books', desc: 'Mese/Hun' },
      { id: '28', cat: 'Books', desc: 'Mese/Külf.' },
      { id: '24', cat: 'PC/Phone-Other', desc: 'Program/Mobil' },
      { id: '1', cat: 'PC/0day', desc: 'Program/PC' },
      { id: '25', cat: 'TV/SD', desc: 'Sorozat/SD-HUN' },
      { id: '26', cat: 'TV/SD', desc: 'Sorozat/SD' },
      { id: '44', cat: 'TV/HD', desc: 'Sorozat/HD-HUN' },
      { id: '46', cat: 'TV/HD', desc: 'Sorozat/HD' },
      { id: '48', cat: 'TV/UHD', desc: 'Sorozat/4K-HUN' },
      { id: '47', cat: 'TV/UHD', desc: 'Sorozat/4K' },
      { id: '11', cat: 'Audio', desc: 'Zene/Hun' },
      { id: '12', cat: 'Audio', desc: 'Zene/Külf.' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  login: {
    path: 'belepes.php',
    method: 'form',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [
      { selector: 'div.error' },
      {
        selector: 'table:has(img[src="/pic/ts_error/error.jpg"])',
        message: {
          selector: 'table:has(img[src="/pic/ts_error/error.jpg"])',
          remove: 'style',
        },
      },
    ],
    test: { path: 'browse_old.php' },
  },
  search: {
    paths: [{ path: 'browse_old.php' }],
    keywordsfilters: [{ name: 're_replace', args: ['[^a-zA-Z0-9]+', '%'] }],
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      keywords: '{{ .Keywords }}',
      search_type: 't_name',
    },
    rows: {
      selector: 'table[border="1"] > tbody > tr:has(a[href*="details.php?id="])',
    },
    fields: {
      title: {
        selector: 'a[href*="details.php?id="][onmouseover]',
        attribute: 'onmouseover',
        filters: [
          {
            name: 'regexp',
            args: "<font class=\\\\'smalltext\\\\'>(.*?)</font>",
          },
        ],
      },
      banner: {
        selector: 'a[href*="details.php?id="][onmouseover]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: "img src=\\\\'(.*?)\\\\'" }],
      },
      details: {
        selector: 'a[href*="details.php?id="][onmouseover]',
        attribute: 'href',
      },
      category: {
        selector: 'a[href^="/browse_old.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      download: {
        selector: 'a[href*="details.php?id="]',
        attribute: 'href',
        filters: [{ name: 'replace', args: ['details.php', 'download.php'] }],
      },
      seeders: { selector: 'td:nth-child(7)' },
      leechers: { selector: 'td:nth-child(8)' },
      files: { selector: 'td:nth-child(5)' },
      size: { selector: 'td:nth-child(11)', remove: 'b' },
      downloadvolumefactor: {
        case: { 'img[src="./pic/freedownload.gif"]': '0', '*': '1' },
      },
      uploadvolumefactor: {
        case: { 'img[src="./pic/x2.gif"]': '2', '*': '1' },
      },
      date: {
        selector: 'td:nth-child(2)',
        remove: 'a, img',
        filters: [
          { name: 'replace', args: [' ', ' '] },
          { name: 'replace', args: ['Ma', 'Today'] },
          { name: 'replace', args: ['Tegnap', 'Yesterday'] },
          { name: 're_replace', args: ['12:(\\d\\d) PM', '00:$1 PM'] },
        ],
      },
    },
  },
  source: 'jackett',
};
