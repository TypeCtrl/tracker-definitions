export const definition: any = {
  site: 'newretro',
  name: 'The New Retro',
  description: 'A German gerneral tracker',
  language: 'de-de',
  links: ['http://new-retro.ddns.net/'],
  caps: {
    categories: {
      '69': 'XXX',
      '101': 'TV/Anime',
      '102': 'Movies/BluRay',
      '103': 'Movies/DVD',
      '104': 'Movies/DVD',
      '105': 'Movies',
      '106': 'Movies',
      '109': 'Other',
      '110': 'PC/Games',
      '111': 'PC/Games',
      '112': 'Console',
      '113': 'PC',
      '114': 'PC/Mac',
      '115': 'PC',
      '116': 'TV/Documentary',
      '117': 'TV',
      '118': 'TV/Sport',
      '119': 'Other',
      '120': 'Books',
      '121': 'Other',
      '122': 'Audio/Audiobook',
      '123': 'Audio',
      '124': 'Audio',
      '125': 'Audio/Video',
      '127': 'Other',
      '129': 'Other',
      '130': 'Movies',
      '131': 'Movies/Other',
      '132': 'Movies/DVD',
      '133': 'Audio/MP3',
    },
  },
  login: {
    path: '/takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      returnto: '/',
    },
    error: [
      {
        selector: 'table.tableinborder:contains("Anmeldung Gescheitert!") > tbody > tr > td.tablea',
      },
    ],
    test: { path: '/usercp.php' },
  },
  ratio: {
    path: '/usercp.php',
    selector: 'div#lmtd table > tbody > tr:contains("Ratio:") > td:nth-child(2)',
    filters: [{ name: 'replace', args: ['.', ''] }, { name: 'replace', args: [',', '.'] }],
  },
  search: {
    path: '/browse.php',
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Query.Keywords }}',
      showsearch: '1',
      orderby: 'added',
      sort: 'desc',
      incldead: '1',
    },
    rows: { selector: 'table.tableinborder[summary] > tbody > tr' },
    fields: {
      download: {
        selector: 'a[href^="download.php?torrent="]',
        attribute: 'href',
      },
      title: { selector: 'a[href^="details.php?id="]:has(b)' },
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      comments: {
        selector: 'td.tablea > table > tbody > tr:nth-child(2) > td:nth-child(4) > a',
        attribute: 'href',
      },
      size: {
        selector: 'td.tablea > table > tbody > tr:nth-child(2) > td:nth-child(1) > b:nth-child(1)',
      },
      grabs: {
        selector: 'td.tablea > table > tbody > tr:nth-child(2) > td:nth-child(3) > b',
      },
      files: {
        selector: 'td.tablea > table > tbody > tr:nth-child(2) > td:nth-child(1) > b:nth-child(2)',
      },
      seeders: {
        selector: 'td.tablea > table > tbody > tr:nth-child(2) > td:nth-child(2) > b:nth-child(1)',
      },
      leechers: {
        selector: 'td.tablea > table > tbody > tr:nth-child(2) > td:nth-child(2) > b:nth-child(3)',
      },
      date: {
        selector: 'td.tablea > table > tbody > tr:nth-child(2) > td:nth-child(5)',
        filters: [
          { name: 'replace', args: [' ', ' '] },
          { name: 'dateparse', args: '02.01.2006 15:04:05' },
        ],
      },
      downloadvolumefactor: {
        case: {
          'font[color="red"]:contains("Only Upload")': '0',
          '*': '1',
        },
      },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
};
