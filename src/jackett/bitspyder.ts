import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'bitspyder',
  name: 'Bitspyder',
  description: 'Bitspyder is a Private site for Educational BOOKS / AUDIO',
  language: 'en-US',
  type: 'private',
  encoding: 'WINDOWS-1252',
  links: ['https://bitspyder.net/'],
  legacylinks: ['http://bitspyder.net/'],
  caps: {
    categorymappings: [
      { id: '61', cat: 'Books', desc: '3D' },
      { id: '69', cat: 'Books', desc: 'Anim|GFX' },
      { id: '56', cat: 'Books', desc: 'Art' },
      { id: '40', cat: 'Audio/Audiobook', desc: 'Audio Books' },
      { id: '55', cat: 'Books', desc: 'Business' },
      { id: '46', cat: 'Books', desc: 'Career' },
      { id: '2', cat: 'Books', desc: 'CBTs' },
      { id: '39', cat: 'Books', desc: 'Cert QA' },
      { id: '63', cat: 'Books', desc: 'College' },
      { id: '53', cat: 'Books', desc: 'Cooking' },
      { id: '42', cat: 'Books', desc: 'Documentary' },
      { id: '37', cat: 'Books/Ebook', desc: 'e-Books' },
      { id: '65', cat: 'Books', desc: 'Engineering' },
      { id: '54', cat: 'Books', desc: 'Health-Fitness' },
      { id: '64', cat: 'Books', desc: 'Kids' },
      { id: '47', cat: 'Books', desc: 'Languages' },
      { id: '49', cat: 'Books', desc: 'Linux CBTs' },
      { id: '43', cat: 'Books', desc: 'Lynda.com' },
      { id: '57', cat: 'Books/Magazines', desc: 'Magazines' },
      { id: '71', cat: 'Books', desc: 'Pluralsight' },
      { id: '60', cat: 'Books', desc: 'Medical' },
      { id: '44', cat: 'Books', desc: 'Misc Learning' },
      { id: '51', cat: 'Books', desc: 'Music Learning' },
      { id: '41', cat: 'Books', desc: 'Others' },
      { id: '52', cat: 'Books', desc: 'Photography' },
      { id: '35', cat: 'Books', desc: 'Developer' },
      { id: '38', cat: 'Books', desc: 'Udemy' },
      { id: '68', cat: 'Books', desc: 'Self Growth' },
      { id: '72', cat: 'Books', desc: 'Templates' },
      { id: '58', cat: 'Books', desc: 'Packt' },
      { id: '45', cat: 'Books', desc: 'Ethical hacking' },
      { id: '59', cat: 'Books', desc: 'WEB | SocialMedia' },
    ],
    modes: { search: ['q'], 'book-search': ['q'] },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 8,
      options: { '1': 'title', '4': 'size', '6': 'seeders', '8': 'created' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'desc',
      options: { desc: 'desc', asc: 'asc' },
    },
    {
      name: 'info',
      type: 'info',
      label: 'Results Per Page',
      default: 'For best results, change the <b>Torrents per page:</b> setting to <b>100</b> on your account profile.',
    },
  ],
  login: {
    path: 'login.php',
    method: 'form',
    form: 'form',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'td.msg_info > font > b' }],
    test: { path: 'browse.php' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      search: '{{ .Keywords }}',
      incldead: 1,
      scope: 0,
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table > tbody > tr[class]',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      title: { selector: 'a[href^="details.php?id="]' },
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
        filters: [
          { name: 'replace', args: ['details.php?id=', 'download.php/'] },
          { name: 'replace', args: ['&hit=1', '/dummy.torrent'] },
        ],
      },
      size: {
        selector: 'td.rowcol:nth-child(6):has(br), font:contains("Size:") + font',
      },
      files: { selector: 'a[href*="&filelist=1"]' },
      grabs: {
        selector: 'td.rowcol:nth-child(7):has(br), td.clear:nth-child(4)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      seeders: { selector: 'td.rowcol:nth-last-child(3)' },
      leechers: { selector: 'td.rowcol:nth-last-child(2)' },
      date: {
        optional: true,
        selector: 'a[title^="Upploaded at"]',
        attribute: 'title',
        filters: [
          { name: 'replace', args: ['Upploaded at - ', ''] },
          { name: 'replace', args: [' ', ' '] },
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: '2006-01-02 15:04:05 -07:00' },
        ],
      },
      downloadvolumefactor: { text: 1 },
      uploadvolumefactor: { text: 1 },
      description: {
        optional: true,
        selector: 'font[color="#990000"]',
      },
      minimumratio: { text: 1 },
    },
  },
  source: 'jackett',
};
